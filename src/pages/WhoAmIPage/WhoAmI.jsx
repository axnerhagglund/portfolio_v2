import {motion, useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer"
import InfoBox from "../../components/InfoBox/InfoBox"
import SectionOne from "../../components/AboutMesektion/SectionOne"
import SectionTwo from "../../components/SectionTwo/SectionTwo"

import React from "react"
import { Link } from "react-router-dom"
import "./whoami.css"
import SectionThree from "../../components/SectionThree/SectionThree"


function ScrollSection({ children }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.7 })

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 }
      }}
      transition={{ duration: 0.6 }}
      className="section1"
    >
      {children}
    </motion.div>
  )
}

export default function WhoAmI() {
  return (
    <>
    
    <Link to={"/"}>
    <i className="ri-arrow-go-back-line backArrow"></i>
    </Link>
    <div className="snap-container">
       
      <section className="snap-section intro bg-intro">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <div className="whoAMI__container">
            
            <h1 className="WAM__title">Who am I?</h1>
            <InfoBox />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ fontSize: "2rem", marginTop: "40px", color: "#696969" }}
            >
              Scroll <span style={{ fontSize: ".7rem", color: "#383838" }}>or don't</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Scroll-sektioner */}
      <section className="snap-section bg-mission">
        <ScrollSection>
         <SectionOne />
        </ScrollSection>
      </section>

      <section className="snap-section bg-background">
        <ScrollSection>
         <SectionTwo />
        </ScrollSection>
      </section>

      <section className="snap-section bg-inspiration">
        <ScrollSection>
          <SectionThree />
        </ScrollSection>
      </section>
    </div>
    </>
  )
}