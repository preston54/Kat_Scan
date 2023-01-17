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

    event.preventDefault();

    const Regex = /^\s+|\s+$|\s+/g;
    const CourseName = event.target.courseName.value.replace(Regex, ""); 
    const CourseNumber = event.target.courseNumber.value.replace(Regex, "");
    const CourseSemester = event.target.courseSemester.value.replace(Regex, "");
    const CourseYear = event.target.courseYear.value.replace(Regex, "");
    let CourseTimeHour = event.target.courseTimehour.value;
    const CourseTimeMinute = event.target.courseTimeminute.value;
    const ampm = event.target.timeofday.value;
    const TableName = CourseName + " " + CourseNumber  + " " + CourseSemester + " " + CourseYear;
    const tName = CourseName + CourseNumber + CourseSemester + CourseYear;

    if( ampm == "pm" && CourseTimeHour != "12"){
      CourseTimeHour = Number(CourseTimeHour) + 12
      console.log(CourseTimeHour)
    }

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
          CourseHour: CourseTimeHour,
          CourseMinute: CourseTimeMinute, 
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
                <div className="boxtext">
                <input className = "inputs" type="number" id="courseNumber" placeholder="Section Number"/>
                </div>
                <div className="boxtext">
                <input className = "inputs" type="text" id="courseSemester" placeholder="Course Semester"/>
                </div>
                <div className="boxtext">
                <input className = "inputs" type="number" id="courseYear"  placeholder="Course Year"/>
                </div>
                <br></br>
                <div className="boxtext">
                <input className = "inputs" type="number" id="courseTimehour"  placeholder="Hour Start(EX: 12) "/>
                <input className = "inputs" type="number" id="courseTimeminute"  placeholder="Minute Start(EX: 00) "/>
                <select name="timeofday" id="timeofday">
                <option value="am">AM</option>
                <option value="pm">PM</option>
                </select>
                </div>
                <button className = "submitButton" type="submit">Submit</button>
            </form>
        </div>
        
      </main>
    </div>
  );
}