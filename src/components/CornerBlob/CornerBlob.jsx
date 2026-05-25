import { useEffect, useRef } from "react"
import "./cornerblob.css"

function CornerBlob() {
  const blobRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        if (!blobRef.current) return
        blobRef.current.style.transform = `translate(${e.clientX - 170}px, ${e.clientY - 170}px)`
      })
    }
    window.addEventListener("mousemove", move)
    return () => {
      window.removeEventListener("mousemove", move)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return <div className="corner-blob" ref={blobRef} aria-hidden="true"></div>
}

export default CornerBlob
