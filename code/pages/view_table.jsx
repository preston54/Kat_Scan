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

  const isTabOneSelected = !!query.tabOne;
  const isTabTwoSelected = !!query.tabTwo;
  const isTabThreeSelected = !!query.tabThree;

  const [data, setData] = useState([]);
  const tablename = "Users";
  const apiUrlEndpoint = 'http://localhost:3000/api/getdata-lib';
  const postData = {

      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
      Table: tablename,
      }),

  };

  const fetchData = () => {

    fetch(apiUrlEndpoint, postData)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  useEffect(() => {
    fetchData();
    }, []);

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
      
            <Home_Faculty href="View_Report" title="View Report" isSelected={isTabThreeSelected} >
                
            </Home_Faculty>
          
        </nav>
        <section>
        </section>
        <div>
            <table className = "displayText">
                <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>UserName</th>
                </tr>
                </thead>
                <tbody>
                {data?.map((item, index) => (
            <tr key={index}>
                <td>{item.FirstName}</td>
                <td>{item.LastName}</td>
                <td>{item.Password}</td>
                <td>{item.Email}</td>
                <td>{item.UserName}</td>
            </tr>
                ))}
                </tbody>
            </table>
        </div>
        
      </main>
    </div>
  );
}