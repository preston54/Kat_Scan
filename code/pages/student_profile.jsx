import React from "react";
import { ReactDOM } from "react-dom";
import  QRCode  from "qrcode";
import * as qrcode from 'qrcode';
import { useEffect } from "react";
import { useState } from "react";
import App from "./script"
import { ScriptHTMLAttributes } from "react";


const StudentProfile  = () =>
{

  
  const [url, seturl] = useState(" ");    {/* initilizing url var to be generated for qr code */}
  const [src, setSrc] = useState("");         {/* initilizing img src for actual qr image */}
  


   function GenerateQR  () {

    seturl("youtube.com");

    
    QRCode.toDataURL(url).then((setSrc));
    

    
     
  }


    return ( 
      
      
            <div className="fullpage">
        
                  
              <div class="boxContainer">
                <div class="boxTopLeft">   
                  <div class = "Ver_SH">
                   <h1 algin=""> KAT SCAN</h1>
                    
                  
                      <img src="https://www.shsu.edu/dept/marketing/logos/SHSU-RGB_Orange%20Box.png" alt="SHSU"></img>

                   </div>
                  </div> 
                
                  <div class="tab">
                        test
                  </div>

                

                  <div classname = "boxTopRight">

                    <h2 algin=""> Welcome FirstName LastName</h2> 
                  
                  
                  
                  <h2 algin="">Logout</h2>


                 </div>
               </div>
               
                 <div className="boxBody"> 

                <button onClick={GenerateQR}>QRgen</button>
                <div>
                  <img src ={src}/>
                </div>
                
               
                
                
                
                

                
                  
              
                
                
                 


                 </div>
                 
                 

        
            </div>
           
        )
}

export default StudentProfile;