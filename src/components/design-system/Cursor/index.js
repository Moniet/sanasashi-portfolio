import styled from '@emotion/styled'
import ReactDOM, { createPortal } from 'react-dom'
import { themeGet } from '@styled-system/theme-get'
import React, { useEffect, useRef } from 'react'

const Circle = styled.span`
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: solid 1px ${themeGet('colors.text')};
  z-index: 100000;
  pointer-events: none;
`

const Cursor = () => {
  const circle = useRef(null)

  useEffect(() => {
    const moveMouse = ({ x, y }) => {
      circle.current.style.transform = `translate3d(${x - 25}px, ${
        y - 25
      }px, 0)`
    }

    document.body.addEventListener('mousemove', moveMouse)

    return () => {
      document.body.removeEventListener('mousemove', moveMouse)
    }
  }, [])

  return <Circle ref={circle} />
}

export default Cursor
