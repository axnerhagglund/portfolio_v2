import React, { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css/pagination"
import "swiper/css"
import "./slider.css"
import { projects } from "../../data.js"
import Card from "../Card/Card.jsx"



  export default function Slider() {
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
      const timer = setTimeout(() => setHasAnimated(true), 1000)
      return () => clearTimeout(timer)
    }, [])
    
  return (
    <main className="slider__main">
    <section className="slider__container">
    <Swiper
      modules={[Pagination]}
      grabCursor
      initialSlide={2}
      centeredSlides
      slidesPerView="auto"
      speed={800}
      slideToClickedSlide
      pagination={{clickable: true}}
      breakpoints={{
        320: { spaceBetween: 40 },
        650: { spaceBetween: 30 },
        1000: { spaceBetween: 20}
      }}
     
    >
     
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className={!hasAnimated && index === 1 ? 'card-wiggle' : ''}>
          <Card card={project} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </section>
    </main>
  )
}
