import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const {
    query: 
        {classname, date, email, uname, stuname, facname}
  } = router;

  // const props = {

  //   classname,
  //   date,
  //   email,
  //   uname,
  //   fname,
  // };

const markatten = async (event) => {

    const time = new Date();

    let ctime = time.getHours() + ":" + time.getMinutes();

    console.log(ctime);

    const apiUrlEndpoint = 'http://localhost:3000/api/getcoursetime-lib';
    const postData = {

        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
        Table: facname,
        Course: classname,
    }),
    }
    const response = await fetch(apiUrlEndpoint, postData);
    const responsedata = await response.json();
    const courseHour = Number(responsedata[0].courseHour);
    const courseMinuteMin = Number(responsedata[0].courseMinute);
    const courseMinuteMax = Number(responsedata[0].courseMinute) + 15;

    console.log(courseHour)
    console.log(courseMinuteMin)
    console.log(courseMinuteMax)

    if((time.getHours() == courseHour) && time.getMinutes() >= courseMinuteMin && time.getMinutes() <= courseMinuteMax){
      
      const apiUrlEndpoint = 'http://localhost:3000/api/markdata-lib';
      const postData = {

          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
          tableName: classname,
          date: date,
          email: email,
          stuname: stuname,
      }),
    }

      const response = await fetch(apiUrlEndpoint, postData);
      if (response.status == 200){
        
        alert("Your attendance for " + classname + " has been marked");
      }
    }
    else{
      alert("You are not within the 15 minute window for attendance.");
    }

  }


  return (

      <div className="fullpage">
            <div className="App_NameF">
            <img src="https://www.shsu.edu/dept/marketing/logos/SHSU-RGB_Orange%20Box.png" alt="SHSU"></img> 
                <h2>
                    Kat Scan
                </h2>
            </div>
            <div className = "topright">
              {stuname}
            </div>
            
      <main className="box">
        <div class="Ver_SH box QrTabClass">
            <p align="">{classname}</p>
            <button class = "QRButton" onClick={markatten} type="submit">Mark Attendance</button>
        </div>
        
      </main>
    </div>
  );
}