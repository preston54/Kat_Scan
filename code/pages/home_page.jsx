import Link from "next/link";
import { useRouter } from "next/router";
import QRCode from "qrcode"
import Router from "next/router";
import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'


export default function Home() {
  const router = useRouter();
  const {
    query: 
        {uname}
    } = router;

  const Home_Faculty = ({ href, uname, title }) => (
    <Link href = {{
        pathname: href,
        query: {uname,}
    }}>
      <a className="homebar">
        {title}
    </a>
    </Link>
)

  const atext = "http://localhost:3000/class/";

  const genQR = async (event) => {

    //get course name and date
    let cname = event.target.getAttribute('course');
    const current = new Date();
    let month = current.getMonth() + 1;
    const date =  "_" + month + "_" + current.getDate() + "_" + current.getFullYear();

    //create column for the day in the course table
  const apiUrlEndpoint = 'http://localhost:3000/api/createdate-lib';
  const postData = {

      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
      course: cname,
      date: date,
      }),

  };
  fetch(apiUrlEndpoint, postData)
  .then(response =>{
  return response.json()
  }).then((data) =>{
    console.log(data)
  })

    //generate QR code for the course for the day 
    const url = atext + cname + "?facname=" + uname + "&date=" + date;

    await QRCode.toDataURL(url).then((qrSrc) => {
      var img = new Image();
      img.src = qrSrc;
      var new1 = window.open();
      new1.document.write(img.outerHTML);
      new1.document.close();
    });
  }

  const tablename = uname;
  const apiUrlEndpoint = 'http://localhost:3000/api/getdata-lib';
  const postData = {

      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
      Table: tablename,
      }),

  };


  if(uname){
    fetch(apiUrlEndpoint, postData)
    .then(response =>{
    return response.json()
    }).then(data =>{
    console.log(data)
    const html = data.map(courseName => {
        return `<div class="Ver_SH box QrTabClass">
        <p align="">${courseName.courses}</p>
        <button class = "QRButton" type="submit" course = ${courseName.courses}>Generate QR code</button>
        </div>`
    }).join('')
    document.querySelector('#course').insertAdjacentHTML("afterbegin", html)
    const el = document.getElementById("course")
    el.addEventListener("click", genQR, false)
    })
    }

  
  
  


  

  return (
    
    <div class="fullpage">
    <div class="App_Name">
            <img src="https://www.shsu.edu/dept/marketing/logos/SHSU-RGB_Orange%20Box.png" alt="SHSU"></img> 
                <h2>
                    Kat Scan
                </h2>
            </div>
            
      <main className="box">
         
        
        <nav>
            <Home_Faculty href="/home_page" uname = {uname} title="Home" >
            
            </Home_Faculty> 
                
            <Home_Faculty href="/create_course" uname = {uname} title="Create Course">
      
            </Home_Faculty> 
      
            <Home_Faculty href="/view_table" uname = {uname} title="View Report">
                
            </Home_Faculty>
          
        </nav>
        <section>
        </section>
        <div id = "course">    
        </div>
      </main>
    </div>
  );
}
