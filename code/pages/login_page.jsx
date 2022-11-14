import  Router from 'next/router';

const login_page = () => {


    const submitLog = async (event) => {


        const email = event.target.email.value;
        const pass = event.target.password.value;
        const uname = "";
        event.preventDefault();
        const apiUrlEndpoint = 'http://localhost:3000/api/logindata-lib';
            const postData = {
        
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                Email: email,  //names used in api. left side of colon is whats passed in as the name. right side is the id from the form
                Password: pass,
                }),
        
            };
            const response = await fetch(apiUrlEndpoint, postData);
            
            if (response.status == 200){
                const responsedata = await response.json();
                console.log(responsedata);
                uname = responsedata[0].UserName;
                alert("user found" + uname);
                Router.push({
                    pathname: 'http://localhost:3000/users/' + uname,
                });
            }
            else{

                alert("User not found, Please check your email or password");
            }
    }


    return(

        <div className="container">
            <div className="App_Name">
            <img src="https://www.shsu.edu/dept/marketing/logos/SHSU-RGB_Orange%20Box.png" alt="SHSU"></img> 
                <h2 className="KatScan">
                    Kat Scan
                </h2>
                
            </div>
            <form className="form" onSubmit = {submitLog} id="login">
                <div className="header">
                    <h2>LOGIN</h2>
                </div>
                <div className="form-control">
                    <label className="emailLabel">SHSU Email:</label>
                    <input className="emailInput" type="text"  placeholder="abc123@shsu.edu" id="email"/>
                </div>
                <br></br>
                <div className="form-control">
                    <label className="passwordLabel">   Password:</label>
                    <input className="passwordInput" type="text"  placeholder="Password" id="password"/>
                </div>
                <br></br>

                <button className="form__button" type="submit">SUBMIT</button>
                <br></br>

                <p className="form__text">
                    <a href="forgot_password" className="form__link">Forgot your password?</a>
                </p>
                <p className="form__text">
                    <a className="form__link" href="createaccount" id="linkCreateAccount">Don't have an account? Create account</a>
                </p>
            </form>
        </div>
    )
}

export default login_page;