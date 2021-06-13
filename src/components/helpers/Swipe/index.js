import { useRef } from 'react'

const Swipe = ({
  onSwipeRight,
  onSwipeLeft,
  children,
  onClick = () => {
    console.log('handle click')
  },
}) => {
  const dragStartPos = useRef(0)
  const setDragStartPos = (pos) => (dragStartPos.current = pos)

  const handlePointerDown = (e) => setDragStartPos(e.clientX)

  const handlePointerUp = (e) => {
    const xPos = Math.floor(dragStartPos.current - e.clientX)

    if (xPos > 40) return onSwipeLeft(e)
    if (xPos < -1 * 40) return onSwipeRight(e)

    onClick()
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
