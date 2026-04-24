import { useState, useEffect } from "react"
import "./hero.css"
import InfoBox from "../InfoBox/InfoBox"
import IconGroup from "../IconGroup/IconGroup"
import CornerBlob from "../CornerBlob/CornerBlob"

function useTypewriter(words, speed = 80, pause = 1400) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    let timeout
    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed)
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    }
    setDisplayed(word.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return displayed
}

function Hero() {
  const typed = useTypewriter(['Axner', 'a developer', 'a designer', 'Axner'])

  return (
    <>
      <CornerBlob />
      <section className="hero">
        <h1 className="hero__title">
          Hey,<br /> I'm <span className="hero__title-axner">
            {typed}<span className="hero__cursor"></span>
          </span>
        </h1>
        <InfoBox />
      </section>
      <IconGroup />
    </>
  )
}

export default Hero
