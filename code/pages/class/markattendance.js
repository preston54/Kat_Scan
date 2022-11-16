import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

let classN = "Fall 2022 COSC 4319 Software Engineering";

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
  const tablename = "users";

  const{
    query: className,
  } = router;
  const cName = className; 

  console.log(className.className)
  


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
            <Home_Faculty href="Home_Faculty" title="Home" isSelected={isTabOneSelected} >
            
            </Home_Faculty> 
                
            <Home_Faculty href="Create_Course" title="Create Course" isSelected={isTabTwoSelected} >
      
            </Home_Faculty> 
      
            <Home_Faculty href="view_table" title="View Report" isSelected={isTabThreeSelected} >
                
            </Home_Faculty>
          
        </nav>
        <section>
        </section>
        <div>
            {/* {cName} */}
        </div>
        
      </main>
    </div>
  );
}