import Link from "next/link";
import { useRouter } from "next/router";

const Home_Faculty = ({ href, isSelected, title }) => (
    <Link href={href}>
      <a style={{padding: 5, margin: 5, backgroundColor: isSelected ? "blue" : "transparent",}}>
        {title}
</a>
    </Link>
)

export default function Home() { //how can we make this into a onsubmit function, 2 seperate functions?
  const { query } = useRouter();

  const isTabOneSelected = !!query.tabOne;
  const isTabTwoSelected = !!query.tabTwo;
  const isTabThreeSelected = !!query.tabThree;

  const submitLog = async (event) => {   //onSubmit event

    const CourseName = event.target.courseName.value; //need an onsubmit function for these so that the event can be called
    const CourseNumber = event.target.courseNumber.value;
    const CourseSemester = event.target.courseSemester.value;
    const CourseYear = event.target.courseYear.value;
    const TableName = CourseName + " " + CourseNumber  + " " + CourseSemester + " " + CourseYear;
    const tName = CourseName + CourseNumber + CourseSemester + CourseYear;

    
    event.preventDefault();
    const apiUrlEndpoint = 'http://localhost:3000/api/createtable-lib';  //createtable-lib
    const postData = {

      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
      TableName: tName,  //names used in api. left side of colon is whats passed in as the name. right side is the id from the form
      }),

    };
    const response = await fetch(apiUrlEndpoint, postData); //fetch sends and receives data from/to api
    
    if (response.status == 200){  //alert("table created"
        alert(TableName + " " + "Created"); // CAUSING ERROR, TableName undefined
    }
    else{
        alert("Error with creating a new course, please try again!"); //(""Error with creating table")
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
            <Home_Faculty href="Home_Faculty" title="Home" isSelected={isTabOneSelected} >
            
            </Home_Faculty> 
                
            <Home_Faculty href="create_course" title="Create Course" isSelected={isTabTwoSelected} >
      
            </Home_Faculty> 
      
            <Home_Faculty href="View_Report" title="View Report" isSelected={isTabThreeSelected} >
                
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
                <input className = "inputs" type="number" id="courseNumber" placeholder="Course Number"/>
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