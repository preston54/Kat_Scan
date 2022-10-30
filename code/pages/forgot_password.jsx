const forgot_password = () => {

    return(

        <div class="passwordContainer">
            <div class="FP_App_Name">
            <img src="https://www.shsu.edu/dept/marketing/logos/SHSU-RGB_Orange%20Box.png" alt="SHSU"></img> 
                <h2>
                    Kat Scan
                </h2>
            </div>
            <form class="passwordForm" id="login">
            <br></br>
                <div class="FP_header">
                    <h2>Forgot your password</h2>
                </div>
                <br></br>
                <p>Please enter the SHSU email address you'd like your password reset information sent to</p>
                <br></br>
                <div class="passwordForm-control">
                    <label class="emailInstructionLabel">SHSU email address:</label>
                    <input class="forgotEmailInput" type="text" autofocus placeholder="abc123@shsu.edu" id="email"/>
                </div>
                <br></br>
                <br></br>

                <button class="passwordForm_Button" type="submit">SUBMIT</button>
                <br></br>
                <br></br>
                
                <p class="passwordForm__text">
                    <a href="login_page" class="form__link">Return to login page</a>
                </p>

            </form>
        </div>
    )
}

export default forgot_password;