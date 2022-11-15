import  QRCode  from "qrcode";
import { useEffect } from "react";
import { useState } from "react";


function App({url}) {
  
  const [src, setSrc] = useState("");
  

    useEffect(() =>{
    QRCode.toDataURL(url).then((setSrc));
    }, [] );

    return (
      <div>
        <img src={src}/>
      </div>
    );


};

export default App;