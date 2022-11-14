const qrtest = () => {

    const submitAcc = async (event) => {

        event.preventDefault();
        const tname = event.target.table.value;
        const date = event.target.date.value;
        const email = event.target.email.value;
        
        const apiUrlEndpoint = 'http://localhost:3000/api/markdata-lib';
        const postData = {
    
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
            tableName: tname,
            date: date,
            email: email,
            }),
        }
            
        const response = await fetch(apiUrlEndpoint, postData);
        const responsedata = await response.json();
        // console.log(responsedata);
        // const uname = responsedata[0].COLUMN_NAME;
        // console.log(uname);        

    }
    
    
    return(
        <div className="CAfullpage">
            <div className="CAApp_Name">
            <img src="https://www.shsu.edu/dept/marketing/logos/SHSU-RGB_Orange%20Box.png" alt="SHSU"></img> 
                <h2>
                    Kat Scan
                </h2>
            </div>
            
            <form id = "accform" onSubmit={submitAcc} method="post">
            <br></br>
                    <div className="CAboxtext">
                    <input className = "inputs" type="text" id="table" name="table" placeholder="Table Name"/>
                    </div>
                    <br></br>
                    <div className="CAboxtext">
                    <input className = "inputs" type="text" id="date" name="date" placeholder="Date"/>
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

    )

};


export default qrtest;