import React from 'react'
import "../static/capture.css"
import Webcam from "react-webcam";
import html2canvas from 'html2canvas';

export default function Capture() {
    const makeScreenshot = () => {
        const screenshotTarget = document.getElementById('bg-image');

        html2canvas(screenshotTarget).then((canvas) => {
            const base64image = canvas.toDataURL("image/png");
            var anchor = document.createElement('a');
            anchor.setAttribute("href", base64image);
            anchor.setAttribute("download", "my-image.png");
            anchor.click();
            anchor.remove();
        })
    }

  return (
    <div className='container text-center' id='outer-capture-div'>
        <div id='bg-image' download="image.jpg">
            <div id='camera-area'>
		        <Webcam fluid={false} height={"130px"} width={"100px"} />
            </div>
        </div>
        <button className='btn mt-3' style={{backgroundColor: "#d000ff3b"}} onClick={makeScreenshot}>Download</button>
    </div>
  )
}
