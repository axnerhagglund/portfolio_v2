import "./comingsoon.css"
import React from "react"
import {Link} from "react-router-dom"
import Slider from "../Slider/Slider"
function ComingSoon() {
  return (
    <>
    
    <Link to={"/"}>
    <i className="ri-arrow-go-back-line backArrow"></i>
    </Link>
    <Slider />
  </>
  )
}

export default ComingSoon;