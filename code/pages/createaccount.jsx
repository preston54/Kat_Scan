

const CreateAccount = () => {

    const submitAcc = async (event) => {

        event.preventDefault();
        const fname = event.target.first.value;
        const lname = event.target.last.value;
        const username = event.target.username.value;
        const password = event.target.password.value;
        const conpass = event.target.con_password.value;
        const email = event.target.email.value;
        const apiUrlEndpoint = 'http://localhost:3000/api/postdata-lib';
        const postData = {
      
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
            FirstName: fname,
            LastName: lname,
            Password: password,
            Email: email,
            UserName: username,
            }),
      
          };
      
            const response = await fetch(apiUrlEndpoint, postData);
      
            const res = await response.json();
            alert("Your account has been created!");
        }
    

    return(
        <div className="fullpage">
            <div className="App_Name">
            <img src="https://www.shsu.edu/dept/marketing/logos/SHSU-RGB_Orange%20Box.png" alt="SHSU"></img> 
                <h2>
                    Kat Scan
                </h2>
            </div>
            <div className="box">
            <h1 className = "header">
                Create Account
            </h1>
                <form id = "accform" onSubmit={submitAcc} method="post">
                    <br></br>
                    <div className="boxtext">
                    <input className = "inputs" type="text" id="first" name="first" placeholder="First Name"/>
                    </div>
                    <br></br>
                    <div className="boxtext">
                    <input className = "inputs" type="text" id="last" name="last" placeholder="Last name"/>
                    </div>
                    <br></br>
                    <div className="boxtext">
                    <input className = "inputs" type="text" id="username" name="username" placeholder="User Name"/>
                    </div>
                    <br></br>
                    <div className="boxtext">
                    <input className = "inputs" type="text" id="password" name="password" placeholder="Password"/>
                    </div>
                    <br></br>
                    <div className="boxtext">
                    <input className = "inputs" type="text" id="con_password" name="con_password" placeholder="Confirm Password"/>
                    </div>
                    <br></br>
                    <div className="boxtext">
                    <input className = "inputs" type="email" id="email" name="email" placeholder="Email"/>
                    </div>
                    <br></br>
                    <button className = "submitButton" type="submit">Submit</button>
                    <p className = "header">
                        <a href="login_page" className="formlink">Return to login page</a>
                    </p>
                </form>
            </div>
        </div>

    )

}

export default CreateAccount;