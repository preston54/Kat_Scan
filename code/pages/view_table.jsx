import Link from "next/link";
import { useRouter } from "next/router";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { getFontOverrideCss } from "next/dist/server/font-utils";


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

    //get course name
    let cname = event.target.getAttribute('course');

    //grab course data
  const apiUrlEndpoint = 'http://localhost:3000/api/getdata-lib';
  const postData = {

      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
      Table: cname,
      }),

  };
  fetch(apiUrlEndpoint, postData)
  .then(response =>{
  return response.json()
  }).then((data) =>{
    console.log(data)
    const doc = new jsPDF('landscape');
    var columns = new Array(); 
    var colcount = 0
    var columnsIn = data[0];
    for(var key in columnsIn){
        columns.push(key)
        colcount += 1; 
    }
    var rows = new Array();
    data.forEach(element => {   
        rows.push(Object.values(element));
    }); 
    console.log(rows)
    doc.autoTable({
        
        theme: "grid",
        horizontalPageBreak: true,
        horizontalPageBreakRepeat: 0,
        columns, 
        body: rows
    
    })
    let docname = cname + ".pdf"

    doc.save(docname)
  })
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
        <button class = "QRButton" type="submit" course = ${courseName.courses}>Generate PDF</button>
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