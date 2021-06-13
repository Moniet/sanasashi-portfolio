/** @jsxImportSource @emotion/react */
import { margin } from 'styled-system'
import styled from '@emotion/styled'
import {
  useMediaQuery,
  useThrottledFn,
  useWindowResize,
} from 'beautiful-react-hooks'
import { useEffect, useMemo, useRef, useState } from 'react'
import SliderImage from './SliderImage'
import RightArrow from './right-arrow.svg'
import LeftArrow from './left-arrow.svg'
import Flex from '../../helpers/Flex'
import Spacer from '../../helpers/Spacer'
import Box from '../../helpers/Box'
import Swipe from '../../helpers/Swipe'
import Text from '../../helpers/Text'
import { useRouter } from 'next/router'

const Container = styled(Flex)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
  overflow: hidden;
  flex: 1;
`

const SliderContainer = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 100%;
  overflow: visible;
  align-items: center;
  transition: transform 0.5s ease;
  position: relative;
  transform: translateX(0px);

  & > * + * {
    ${margin}
  }
`

const scrollbarWidth = 180

const ScrollbarContainer = styled.div`
  width: 100px;
  height: 2px;
  background: #333333;
  border-radius: 20px;
  overflow: hidden;

  @media (min-width: 500px) {
    width: 180px;
  }
`

const ScrollThumb = styled.div`
  background: #797979;
  height: 100%;
  width: ${({ noOfItems }) => Math.floor(100 / noOfItems) + 'px'};
  border-radius: 20px;
  transition: transform 0.3s ease;

  @media (min-width: 500px) {
    width: ${({ noOfItems }) => Math.floor(180 / noOfItems) + 'px'};
  }
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
  const isMobile = useMediaQuery('(max-width: 500px)')

  const scrollbarWidth = isMobile ? 100 : 180

  return (
    <ScrollbarContainer>
      <ScrollThumb
        noOfItems={noOfItems}
        style={{
          transform: `translateX(${
            Math.floor(scrollbarWidth / noOfItems) * count
          }px`,
        }}
      />
    </ScrollbarContainer>
  )
}

export const SliderControls = ({
  count,
  setCount,
  sliderItems = Array(3).fill(''),
}) => (
  <Flex alignItems="center" justifyContent="center" pt={['lg', 'lg', 'xl']}>
    <Box pr="md">
      <Text fontSize="xs" as="span" color="text">
        {count < 9 ? '0' + (count + 1) : count + 1}
      </Text>
    </Box>
    <Scrollbar noOfItems={sliderItems.length} count={count} />
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
)

const Slider = ({ count, sliderItems, setCount }) => {
  const container = useRef(null)
  const [mounted, setMounted] = useState(false)
  const [scrollWidth, setScrollWidth] = useState(0)
  const isMobile = useMediaQuery('(max-width: 500px)')
  const router = useRouter()
  const [mouseOverProjectIndex, setMouseOverProjectIndex] = useState(0)

  const imageWidth = useMemo(
    () => scrollWidth / sliderItems.length,

    [scrollWidth]
  )

  useEffect(() => {
    setScrollWidth(container.current?.scrollWidth)
  }, [mounted])

  const onSwipeLeft = () => {
    prevCount.current = count
    count + 1 < sliderItems.length && setCount(count + 1)
  }

  const onSwipeRight = () => {
    prevCount.current = count
    count - 1 >= 0 && setCount(count - 1)
  }

  const prevCount = useRef(0)

  console.log(isMobile)

  useEffect(() => {
    const left = imageWidth * count
    container.current.style.transform = isMobile
      ? `translateX(${142 + 100 * count * (count == 0 ? 1 : -1)}vw)`
      : `translateX(${-1 * left + 40}px)`
  }, [count])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Swipe
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      onClick={() =>
        router.push(
          sliderItems[isMobile ? count : mouseOverProjectIndex].projectLink
        )
      }
    >
      <Container>
        <SliderContainer ref={container} ml={[0, 0, '3rem', 'xl']}>
          {sliderItems.map((item, i) => (
            <SliderImage
              index={i}
              count={count}
              {...item}
              prevCount={prevCount.current}
              mouseOverProjectIndex={setMouseOverProjectIndex}
              key={i}
            />
          ))}
        </SliderContainer>
      </Container>
    </Swipe>
  )
}

export default Slider
