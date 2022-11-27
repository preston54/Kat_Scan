import {useState} from 'react';
import Icon from 'react-icons-kit';
import {basic_eye} from 'react-icons-kit/linea/basic_eye'
import {basic_eye_closed} from 'react-icons-kit/linea/basic_eye_closed'
import {basic_exclamation} from 'react-icons-kit/linea/basic_exclamation'
import {arrows_circle_check} from 'react-icons-kit/linea/arrows_circle_check'


const CreateAccount = () => {

    const submitAcc = async (event) => {

        event.preventDefault();
        const fname = event.target.first.value;
        const lname = event.target.last.value;
        const username = event.target.username.value;
        const pass1 = event.target.password.value;
        const pass2 = event.target.con_password.value;
        const email = event.target.email.value;


        if(pass1 == pass2){
            const apiUrlEndpoint = 'http://localhost:3000/api/postdata-lib';
            const postData = {
        
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                FirstName: fname,
                LastName: lname,
                Password: pass1,
                Email: email,
                Username: username,
                }),
            };
        
                const response = await fetch(apiUrlEndpoint, postData);
                if (response.status == 200){
                    alert("Your account has been created!");
                }
                if (response.status == 500){
                    alert("Your User name or email is not valid");
                }
        }else{

            alert("Passwords do not match");
        }
    }
    
    const [type, setType] = useState("password");

    // validation states
    const[lowerValidated, setLowerValidated]=useState(false);
    const[upperValidated, setUpperValidated]=useState(false);
    const[numberValidated, setNumberValidated]=useState(false);
    const[specialValidated, setSpecialValidated]=useState(false);
    const[lengthValidated, setLengthValidated]=useState(false);

    const handleChange=(value)=>{
        //regex
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,})');

        // lowercase validation
        if(lower.test(value)){
            setLowerValidated(true);
        }
        else{
            setLowerValidated(false);
        }
         // uppercase validation
         if(upper.test(value)){
            setUpperValidated(true);
        }
        else{
            setUpperValidated(false);
        }
         // number validation
         if(number.test(value)){
            setNumberValidated(true);
        }
        else{
            setNumberValidated(false);
        }
         // special validation
         if(special.test(value)){
            setSpecialValidated(true);
        }
        else{
            setSpecialValidated(false);
        }
         // length validation
         if(length.test(value)){
            setLengthValidated(true);
        }
        else{
            setLengthValidated(false);
        }
    }

    return(
        <div className="CAfullpage">
            <div className="CAApp_Name">
            <img src="https://www.shsu.edu/dept/marketing/logos/SHSU-RGB_Orange%20Box.png" alt="SHSU"></img> 
                <h2>
                    Kat Scan
                </h2>
            </div>
            <div className="CAbox">
            <h1 className = "CAheader">
                Create Account
            </h1>
                <form id = "accform" onSubmit={submitAcc} method="post">
                    <br></br>
                    <div className="CAboxtext">
                    <input className = "inputs" type="text" id="first" name="first" placeholder="First Name"/>
                    </div>
                    <br></br>
                    <div className="CAboxtext">
                    <input className = "inputs" type="text" id="last" name="last" placeholder="Last name"/>
                    </div>
                    <br></br>
                    <div className="CAboxtext">
                    <input className = "inputs" type="text" id="username" name="username" placeholder="User Name"/>
                    </div>
                    <br></br>
                    <div className="CAboxtext">
                    <input className = "inputs" type={type} id="password" name="password" placeholder="Password"
                    onChange={(e)=>handleChange(e.target.value)} />
                    {type==="password"?(
                        <span className="icon-span"
                            onClick={()=>setType("text")}>
                            <Icon icon={basic_eye_closed} /> 
                        </span>
                    ):(
                        <span className="icon-span"
                        onClick={()=>setType("password")}>
                        <Icon icon={basic_eye} />
                        </span>
                    )}
                    </div>
                    {/* Validation Tracker */}
                    <main className="tracker-box">
                        <div className={lowerValidated?'validated':'not-validated'}>
                            {lowerValidated?(
                                <span className="list-icon green">
                                    <Icon icon={arrows_circle_check}/>
                                </span>
                            ):(
                                <span className="list-icon">
                                <Icon icon={basic_exclamation}/>
                            </span>
                            )}
                            At least one lowercase letter
                        </div>
                        <div className={upperValidated?'validated':'not-validated'}>
                            {upperValidated?(
                                <span className="list-icon green">
                                    <Icon icon={arrows_circle_check}/>
                                </span>
                            ):(
                                <span className="list-icon">
                                <Icon icon={basic_exclamation}/>
                            </span>
                            )}
                            At least one uppercase letter
                        </div>
                        <div className={numberValidated?'validated':'not-validated'}>
                            {numberValidated?(
                                <span className="list-icon green">
                                    <Icon icon={arrows_circle_check}/>
                                </span>
                            ):(
                                <span className="list-icon">
                                <Icon icon={basic_exclamation}/>
                            </span>
                            )}
                            At least one number
                        </div>
                        <div className={specialValidated?'validated':'not-validated'}>
                            {specialValidated?(
                                <span className="list-icon green">
                                    <Icon icon={arrows_circle_check}/>
                                </span>
                            ):(
                                <span className="list-icon">
                                <Icon icon={basic_exclamation}/>
                            </span>
                            )}
                            At least one special character
                        </div>
                        <div className={lengthValidated?'validated':'not-validated'}>
                            {lengthValidated?(
                                <span className="list-icon green">
                                    <Icon icon={arrows_circle_check}/>
                                </span>
                            ):(
                                <span className="list-icon">
                                <Icon icon={basic_exclamation}/>
                            </span>
                            )}
                            At least 8 caracters
                        </div>
                    </main>
                    <br></br>
                    <div className="CAboxtext">
                    <input className = "inputs" type={type} id="con_password" name="con_password" placeholder="Confirm Password"/>
                    {type==="password"?(
                        <span className="icon-span"
                        onClick={()=>setType("text")}>
                        <Icon icon={basic_eye_closed} /> 
                    </span>
                    ):(
                    <span className="icon-span"
                    onClick={()=>setType("password")}>
                    <Icon icon={basic_eye} />
                    </span>
                    )}
                    </div>
                    <br></br>
                    <div className="CAboxtext">
                    <input className = "inputs" type="email" id="email" name="email" placeholder="Email"/>
                    </div>
                    <br></br>
                    <button className = "CAsubmitButton" type="submit">Submit</button>
                    <p className = "CAheader">
                        <a href="login_page" className="CAformlink">Return to login page</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default CreateAccount;