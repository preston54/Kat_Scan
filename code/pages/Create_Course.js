
const Create_Course= () => {

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
              Create Class
          </h1>
              <form action="/send-data-here" method="post">
                  <br></br>
                  <div className="boxtext">
                  <label for="first">Class name:</label>
                  <input type="text" id="first" name="first" placeholder="Class name" />
                  </div>
                  <br></br>
              </form>
          </div>
      </div>

  )
}

export default Create_Course;

