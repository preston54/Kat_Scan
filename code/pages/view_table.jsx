import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import GeneratePDF from "../components/GeneratePDF";


export default function Home() {

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
  const router = useRouter();
  const {
    query: 
        {uname}
    } = router;
  const [data, setData] = useState([]);
  const tablename = "cosc143701Fall2022";
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
            <Home_Faculty href="/home_page" uname = {uname} title="Home" >
            
            </Home_Faculty> 
                
            <Home_Faculty href="/create_course" uname = {uname} title="Create Course">
      
            </Home_Faculty> 
      
            <Home_Faculty href="/view_table" uname = {uname} title="View Report">
                
            </Home_Faculty>
          
        </nav>
        <section>
        </section>
        <div>
            <table className = "displayText">
                <thead>
                <tr>
                    <th>Students</th>
                    <th>11/28/2022</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
            <tr key={index}>
                <td>{item.students}</td>
                <td>{item._11_28_2022}</td>
            </tr>
                ))}
                </tbody>
            </table>
        </div>

        <GeneratePDF person = {data}/>
        
      </main>
    </div>
  );
}