

const CreateAccount = () => {

    return(
        <div className="fullpage">
            <div className="box">
            <h1>
                Create Account
            </h1>
                <form action="/send-data-here" method="post">
                    <br></br>
                    <div className="boxtext">
                    <label for="first">First name:</label>
                    <input type="text" id="first" name="first" placeholder="First Name" />
                    </div>
                    <br></br>
                    <div className="boxtext">
                    <label for="last">Last name:</label>
                    <input type="text" id="last" name="last" placeholder="Last name"/>
                    </div>
                    <br></br>
                    <div className="boxtext">
                    <label for="password">Password:</label>
                    <input type="text" id="password" name="password" placeholder="Password"/>
                    </div>
                    <br></br>
                    <div className="boxtext">
                    <label for="con_password">Confirm Password:</label>
                    <input type="text" id="con_password" name="con_password" placeholder="Confirm Password"/>
                    </div>
                    <br></br>
                    <div className="boxtext">
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder="Email"/>
                    </div>
                    <br></br>
                    <div className="boxtext">
                    <input type="radio" id="faculty" name="class" value="Faculty"/>
                    <label for="faculty">Faculty</label>
                    <input type="radio" id="student" name="class" value="Student"/>
                    <label for="student">Student</label>
                    </div>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default CreateAccount;