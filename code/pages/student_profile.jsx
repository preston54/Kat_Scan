import React from "react";
import QRCode from "qrcode";

const StudentProfile = () => {
  const atext = "http://localhost:3000/";

  async function GenerateQR() {
    const url = atext + "qrdisplay";

    await QRCode.toDataURL(url).then((qrSrc) => {
      var img = new Image();
      img.src = qrSrc;
      var new1 = window.open();
      new1.document.write(img.outerHTML);
      new1.document.close();
    });
  }

  return (
    <div className="fullpage">
      <div class="boxContainer">
        <div class="boxTopLeft">
          <div class="Ver_SH">
            <h1 algin=""> KAT SCAN</h1>

            <img
              src="https://www.shsu.edu/dept/marketing/logos/SHSU-RGB_Orange%20Box.png"
              alt="SHSU"
            ></img>
          </div>
        </div>

        <div class="tab">test</div>

        <div classname="boxTopRight">
          <h2 algin=""> Welcome FirstName LastName</h2>

          <h2 algin="">Logout</h2>
        </div>
      </div>

      <div className="boxBody">
        <button onClick={GenerateQR}>QRgen</button>
      </div>
    </div>
  );
};

export default StudentProfile;
