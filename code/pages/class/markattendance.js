import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const Home_Faculty = ({ href, isSelected, title }) => (
    <Link href={href}>
      <a style={{padding: 5, margin: 5, backgroundColor: isSelected ? "blue" : "transparent",}}>
        {title}
</a>
    </Link>
)

export default function Home() {
  const { query } = useRouter();
  const router = useRouter();

  const isTabOneSelected = !!query.tabOne;
  const isTabTwoSelected = !!query.tabTwo;
  const isTabThreeSelected = !!query.tabThree;

  const [data, setData] = useState([]);

  const {
    query: 
        {classname, date, email,}
  } = router;

  const props = {

    classname,
    date,
    email,
  };

const markatten = async (event) => {

    const apiUrlEndpoint = 'http://localhost:3000/api/markdata-lib';
    const postData = {

        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
        tableName: classname,
        date: date,
        email: email,
    }),
    }

    const response = await fetch(apiUrlEndpoint, postData);
    if (response.status == 200){
      
      alert("Your attendance for " + classname + " has been marked");
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
            
      <main className="box">
         
        
        <nav>
            <Home_Faculty href="/home_page" title="Home" isSelected={isTabOneSelected} >
            
            </Home_Faculty> 
                
            <Home_Faculty href="/create_course" title="Create Course" isSelected={isTabTwoSelected} >
      
            </Home_Faculty> 
      
            <Home_Faculty href="/view_table" title="View Report" isSelected={isTabThreeSelected} >
                
            </Home_Faculty>
          
        </nav>
        <section>
        </section>
        <div class="Ver_SH box QrTabClass">
            <p align="">{classname}</p>
            <button class = "QRButton" onClick={markatten} type="submit">Mark Attendance</button>
        </div>
        
      </main>
    </div>
  );
}