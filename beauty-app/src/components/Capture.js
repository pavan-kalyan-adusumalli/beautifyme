import React from 'react'
import "../static/capture.css"
import Webcam from "react-webcam";

export default function Capture() {
  return (
    <div className='container' id='outer-capture-div'>
        <div id='bg-image'>
            <div id='camera-area'>
		        <Webcam fluid={false} height={"130px"} width={"100px"} />
            </div>
        </div>
    </div>
  )
}
