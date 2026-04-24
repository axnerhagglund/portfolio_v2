import { useEffect, useRef } from "react"
import "./cornerblob.css"

function CornerBlob() {
  const blobRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (!blobRef.current) return
      blobRef.current.style.transform = `translate(${e.clientX - 170}px, ${e.clientY - 170}px)`
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return <div className="corner-blob" ref={blobRef}></div>
}

export default CornerBlob
