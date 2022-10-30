

const login_page = () => {

    return(

        <div class="container">
            <div class="App_Name">
            <img src="https://www.shsu.edu/dept/marketing/logos/SHSU-RGB_Orange%20Box.png" alt="SHSU"></img> 
                <h2 class="KatScan">
                    Kat Scan
                </h2>
                
            </div>
            <form class="form" id="login">
                <div class="header">
                    <h2>LOGIN</h2>
                </div>
                <div class="form-control">
                    <label class="emailLabel">SHSU Email:</label>
                    <input class="emailInput" type="text"  placeholder="abc123@shsu.edu" id="email"/>
                </div>
                <br></br>
                <div class="form-control">
                    <label class="passwordLabel">   Password:</label>
                    <input class="passwordInput" type="text"  placeholder="Password" id="username"/>
                </div>
                <br></br>

                <button class="form__button" type="submit">SUBMIT</button>
                <br></br>

                <p class="form__text">
                    <a href="forgot_password" class="form__link">Forgot your password?</a>
                </p>
                <p class="form__text">
                    <a class="form__link" href="createaccount" id="linkCreateAccount">Don't have an account? Create account</a>
                </p>
            </form>
        </div>
    )
}

export default login_page;