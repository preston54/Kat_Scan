import Link from "next/link";
import { useRouter } from "next/router";
import Router from "next/router";
import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'


export default function Home() {
  const router = useRouter();

  const Home_Faculty = ({ href, uname, title }) => (
    <Link href = {{
        pathname: href,
        query: {uname,}
    }}>
      <a>
        {title}
    </a>
    </Link>
)
const genQR = async (event) =>{

    let cname = event.target.getAttribute('course');
    console.log(cname);
    const current = new Date();
    let month = current.getMonth() + 1;
    const date =  month + "/" + current.getDate() + "/" + current.getFullYear();
    console.log(date)
    Router.push({
        pathname: 'http://localhost:3000/createaccount',
        query: {
            cname,
        }
    });
  }
  const {
    query: 
        {uname}
    } = router;

//   const [data, setData] = useState([]);
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
        <div class="Ver_SH box QrTabClass">
            <p align="">"classN"</p>
            <button class = "QRButton" type="submit">Generate QR code</button>
        </div>

        <div id = "course">     
        </div>
      </main>
    </div>
  );
}
