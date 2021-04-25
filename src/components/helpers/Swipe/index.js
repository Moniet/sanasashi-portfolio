import { useRef } from 'react'

const Swipe = ({ onSwipeRight, onSwipeLeft, children }) => {
  const dragStartPos = useRef(0)
  const setDragStartPos = (pos) => (dragStartPos.current = pos)

  const handlePointerDown = (e) => setDragStartPos(e.clientX)

  const handlePointerUp = (e) => {
    const xPos = Math.floor(dragStartPos.current - e.clientX)

    if (xPos > 0) onSwipeLeft(e)
    if (xPos < 0) onSwipeRight(e)

    setDragStartPos(false)
  }

  return (
    <div
      onPointerDown={(e) => handlePointerDown(e)}
      onPointerUp={(e) => handlePointerUp(e)}
    >
      {children}
    </div>
  )
}

export default Swipe
