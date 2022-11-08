import  QRCode  from "qrcode";
import { useEffect } from "react";
import { useState } from "react";

function App({text}) {
  const [src, setSrc] = useState("");
  

    useEffect(() =>{
      QRCode.toDataURL(text).then((setSrc));
    }, [] );

    return (
      <div>
        <img src={src}/>
      </div>
    );


};

export default App;