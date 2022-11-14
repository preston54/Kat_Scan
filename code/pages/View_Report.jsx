
const View_Report= () => {

  return(
        <div className="fullpage">
            <div class="App_Name">
            <img src="https://www.shsu.edu/dept/marketing/logos/SHSU-RGB_Orange%20Box.png" alt="SHSU"></img> 
                <h2>
                    Kat Scan
                </h2>
            </div>
          <div className="box">
          <h1>
              Report
          </h1>
              <form action="/send-data-here" method="post">
                  <br></br>
                  <div className="boxtext">
                  <label for="first">View Report:</label>
                  <button type="submit">Pull Report</button>
                  </div>
                  <br></br>
              </form>
          </div>
      </div>

  )
}

export default View_Report;

