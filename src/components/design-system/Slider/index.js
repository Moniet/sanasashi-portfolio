/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router'
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
import { ResponsiveGrid } from '../CaseStudy'

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

  @media (max-width: 767px) {
    flex-direction: column;
    transform: translateX(0px);
    margin-top: 0;
  }

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
  const isMobile = useMediaQuery('(max-width: 767px)')
  const router = useRouter()
  const [mouseOverProjectIndex, setMouseOverProjectIndex] = useState(0)

  const imageWidth = useMemo(
    () => scrollWidth / sliderItems.length,

    [scrollWidth]
  )

  useEffect(() => {
    setScrollWidth(container.current?.scrollWidth)
  }, [mounted])

  useEffect(() => {
    let timer

    window.addEventListener('resize', () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        setScrollWidth(container.current?.scrollWidth)
        setCount(0)
      }, 100)
    })
  }, [])

  const onSwipeLeft = () => {
    if (!isMobile) {
      const nextCount = count + 1
      const shouldSlide = nextCount < sliderItems.length

      shouldSlide && setCount(nextCount)
    }
  }

  const onSwipeRight = () => {
    if (!isMobile) {
      const prevCount = count - 1
      const shouldSlide = count >= 1

      shouldSlide && setCount(prevCount)
    }
  }

  useEffect(() => {
    const left = imageWidth * count
    if (container.current) {
      container.current.style.transform = isMobile
        ? `translateX(${left}px)`
        : `translateX(${-1 * left + 40}px)`
    }
  }, [count])

  useEffect(() => {
    if (isMobile) {
      setCount(0)
      container.current.style.transform = `translateX(0px)`
    } else {
      setScrollWidth(container.current?.scrollWidth)
    }
  }, [isMobile])

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Swipe onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
      <Container>
        <SliderContainer
          ref={container}
          ml={[0, 0, '6rem', 'xl']}
          mt={['lg', 'lg', 0]}
        >
          {sliderItems.map((item, i) => (
            <SliderImage
              index={i}
              count={count}
              {...item}
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
