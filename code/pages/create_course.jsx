import Link from "next/link";
import { useRouter } from "next/router";

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

  const submitLog = async (event) => {   

    const CourseName = event.target.courseName.value; 
    const CourseNumber = event.target.courseNumber.value;
    const CourseSemester = event.target.courseSemester.value;
    const CourseYear = event.target.courseYear.value;
    const TableName = CourseName + " " + CourseNumber  + " " + CourseSemester + " " + CourseYear;
    const tName = CourseName + CourseNumber + CourseSemester + CourseYear;

    
    event.preventDefault();
    const apiUrlEndpoint = 'http://localhost:3000/api/createtable-lib';  
    const postData = {

      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
      TableName: tName,  
      }),

    };
    const response = await fetch(apiUrlEndpoint, postData); 
    
    if (response.status == 200){  
        alert(TableName + " " + "Created"); 

        const apiUrlEndpoint = 'http://localhost:3000/api/updateuser-lib';  
        const postData = {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
          TableName: tName,  
          UserName: uname,
          }),

        };
        const response = await fetch(apiUrlEndpoint, postData);
        console.log(response)
    }
    else{
        alert("Error with creating a new course, please try again!"); 
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
            <form id = "courseForm" onSubmit = {submitLog}>
                <h1>Create a new course:</h1>
                <div className="boxtext">
                <input className = "inputs" type="text" id="courseName" placeholder="Course Name"/>
                </div>
                <br></br>
                <div className="boxtext">
                <input className = "inputs" type="number" id="courseNumber" placeholder="Section Number"/>
                </div>
                <br></br>
                <div className="boxtext">
                <input className = "inputs" type="text" id="courseSemester" placeholder="Course Semester"/>
                </div>
                <br></br>
                <div className="boxtext">
                <input className = "inputs" type="number" id="courseYear"  placeholder="Course Year"/>
                </div>
                <br></br>
                <br></br>
                <button className = "submitButton" type="submit">Submit</button>
            </form>
        </div>
        
      </main>
    </div>
  );
}