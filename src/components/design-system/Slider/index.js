/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useEffect, useMemo, useRef, useState } from 'react'
import SliderImage from './SliderImage'
import RightArrow from './right-arrow.svg'
import LeftArrow from './left-arrow.svg'
import Flex from '../../helpers/Flex'
import Spacer from '../../helpers/Spacer'
import Box from '../../helpers/Box'
import Swipe from '../../helpers/Swipe'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-right: -80px;
  flex: 3;
  overflow: hidden;
`

const SliderContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  height: min(100%, 600px);
  overflow: visible;
  align-items: center;
  transition: transform 0.5s ease;
  position: relative;
  transform: translateX(0px);
`

const scrollbarWidth = 200

const ScrollbarContainer = styled.div`
  width: ${scrollbarWidth}px;
  height: 3px;
  background: #c4c4c4;
  border-radius: 20px;
  overflow: hidden;
`

const ScrollThumb = styled.div`
  background: #797979;
  height: 100%;
  width: ${({ noOfItems }) => scrollbarWidth / noOfItems + 'px'};
  border-radius: 20px;
  transition: transform 0.3s ease;
`

const Controls = styled.button`
  background: none;
  border: none;
  outline: none;
`

const Scrollbar = ({
  noOfItems = () => new Error("'noOfItems' not defined"),
  count,
}) => {
  return (
    <ScrollbarContainer>
      <ScrollThumb
        noOfItems={noOfItems}
        style={{
          transform: `translateX(${(scrollbarWidth / noOfItems) * count}px`,
        }}
      />
    </ScrollbarContainer>
  )
}

const sliderItems = [
  {
    imageLink: '/images/slider/p1.png',
    title: 'Mirror',
  },
  {
    imageLink: '/images/slider/p2.png',
  },
  {
    imageLink: '/images/slider/p2.png',
  },
  {
    imageLink: '/images/slider/p1.png',
  },
]

const Slider = () => {
  const container = useRef(null)
  const [mounted, setMounted] = useState(false)
  const [count, setCount] = useState(0)

  const imageWidth = useMemo(
    () => container.current?.scrollWidth / sliderItems.length,
    [mounted]
  )

  const onSwipeLeft = () =>
    count + 1 < sliderItems.length && setCount(count + 1)

  const onSwipeRight = () => count - 1 >= 0 && setCount(count - 1)

  useEffect(() => {
    const left = imageWidth * count
    container.current.style.transform = `translateX(-${left}px)`
  }, [count])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Container>
      <Swipe onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
        <SliderContainer ref={container}>
          {sliderItems.map((item, i) => (
            <SliderImage index={i} count={count} {...item} key={i} />
          ))}
        </SliderContainer>
      </Swipe>
      <Spacer pt="sm" />
      <Flex
        ml="auto"
        alignItems="center"
        justifyContent="flex-end"
        pr="80px"
        pt="40px"
      >
        <Box pr="md" color="text">
          {count < 9 ? '0' + (count + 1) : count + 1}
        </Box>
        <Scrollbar
          container={container}
          noOfItems={sliderItems.length}
          count={count}
        />
        <Flex ml="md" mb="-0.5rem">
          <Controls>
            <LeftArrow
              onClick={() => {
                count && setCount(count - 1)
              }}
            />
          </Controls>
          <Spacer ml="sm" />
          <Controls
            onClick={() => {
              if (count === sliderItems.length - 1) setCount(0)
              else setCount(count + 1)
            }}
          >
            <RightArrow />
          </Controls>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Slider
