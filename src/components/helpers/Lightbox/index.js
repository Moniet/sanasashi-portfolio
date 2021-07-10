/** @jsxImportSource @emotion/react */
import { keyframes } from '@emotion/react'
import { useRef, useState } from 'react'
import { ImageWrapper } from '../../design-system/CaseStudy'
import Box from '../Box'
import Flex from '../Flex'
import { useClickOutside } from './useClickOutside'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Lightbox = ({ src, alt = '' }) => {
  const [show, setShow] = useState(false)
  const container = useRef(null)

  const onClickOutside = () => setShow(false)
  useClickOutside({
    element: container,
    onClickOutside,
  })

  return (
    <>
      {show && (
        <Flex
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          minHeight="100vh"
          height="100%"
          overflow="auto"
          m="0"
          p={['sm', 'sm', 'md', 'lg']}
          bg="rgba(255,255,255,0.2)"
          css={{
            backdropFilter: 'blur(10px)',
            animation: `${fadeIn} 1s ease forwards`,
          }}
          zIndex="10"
        >
          <Box
            ref={container}
            as="img"
            src={src}
            p="sm"
            bg="#000"
            width="90vw !important"
            m="auto"
          />
        </Flex>
      )}

      <ImageWrapper
        onClick={() => setShow(true)}
        css={{ cursor: 'pointer !important' }}
      >
        <img src={src} alt={alt} />
      </ImageWrapper>
    </>
  )
}

export default Lightbox