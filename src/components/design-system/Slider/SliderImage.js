/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Box from '../../helpers/Box'
import Flex from '../../helpers/Flex'
import Text from '../../helpers/Text'

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`

const Tags = ({ tags = ['No tags :('], hovering = false }) => (
  <Box position="absolute" top="0" left="0" width="100%" pr="sm" pt="sm">
    <Flex flexDirection="column">
      {tags.map((tag, i) => (
        <Box
          opacity="0"
          style={{
            opacity: hovering ? 1 : 0,
            transform: hovering ? 'translateY(0px)' : 'translateY(20px)',
            transitionDelay: `${i * 100}ms`,
            transition: 'transform 0.5s ease, opacity 0.5s ease',
          }}
          key={i}
        >
          <Text
            key={i}
            color="text"
            fontSize="xxs"
            textAlign="right"
            p="0"
            m="0"
            lineHeight="1"
          >
            {tag}
          </Text>
        </Box>
      ))}
    </Flex>
  </Box>
)

const SliderImage = ({
  imageLink = '/',
  projectLink = '/',
  title = 'Title',
  year = '2021',
  tags = ['UX Research', 'Wireframing', 'UI Design'],
  index,
  count,
}) => {
  const image = useRef(null)
  const overlay = useRef(null)
  const [hovering, setHovering] = useState(false)

  return (
    <Box
      position="relative"
      css={css`
        --scale: 0.9;
        transform: scale(var(--scale));
        transition: 0.5s ease transform;
      `}
      style={{ '--scale': count === index ? 1 : 0.9 }}
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Link href={projectLink} passHref>
        <a>
          <Flex
            position="relative"
            height={['380px', '400px', '450px', '480px', '500px']}
            width={['250px', '250px', '350px', '400px']}
            color="text"
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              zIndex="10"
              ref={overlay}
            />
            <Img src={imageLink} ref={image} />
            <Tags tags={tags} hovering={hovering} />
            <Box
              position="absolute"
              bottom="0"
              left="0"
              maxWidth="fit-content"
              css={{
                transform: 'rotate(-180deg) translateY(10px)',
                writingMode: 'vertical-lr',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
              opacity="0"
              style={{
                opacity: hovering ? 1 : 0,
                transform: hovering
                  ? 'rotate(-180deg) translateY(0px)'
                  : 'rotate(-180deg) translateY(10px)',
              }}
            >
              <Box mr="-20px">
                <Text as="div" textAlign="right">
                  <Text as="small">{year}</Text>
                </Text>
              </Box>
              <Text
                as="h2"
                fontSize="gigantic"
                css={{
                  margin: '0',
                  padding: '0',
                  textTransform: 'uppercase',
                  pointerEvents: 'none',
                }}
              >
                {title}
              </Text>
            </Box>
          </Flex>
        </a>
      </Link>
    </Box>
  )
}

export default SliderImage
