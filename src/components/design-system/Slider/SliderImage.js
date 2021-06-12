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
  <Flex
    position="absolute"
    top="0"
    left="0"
    width="100%"
    height="100%"
    justifyContent="center"
    alignItems="center"
    bg="rgba(15,15,15,0.9)"
    css={{ opacity: '--opacity', transition: 'opacity 0.5s ease' }}
    style={{ opacity: hovering ? 1 : 0 }}
  >
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
            textAlign="center"
            p="0"
            mb="sm"
            lineHeight="1"
          >
            {tag}
          </Text>
        </Box>
      ))}
    </Flex>
  </Flex>
)

const SliderImage = ({
  imageLink = '/',
  projectLink = '/',
  category = 'Website Design',
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
      onMouseOver={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Link href={projectLink} passHref>
        <a>
          <Flex
            position="relative"
            width={['300px', '350px', '400px', '500px']}
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
          </Flex>
        </a>
      </Link>
      <Flex pt="xs" justifyContent="space-between">
        <Text color="text" fontSize="xxs" p={0} m={0} css={{ flex: '1' }}>
          {index + 1 < 10 ? `0${index + 1}` : index} - {category}
        </Text>
        <Text
          m={0}
          p={0}
          textAlign="center"
          fontSize="xs"
          css={{
            textTransform: 'uppercase',
            verticalAlign: 'middle',
            flex: '1',
          }}
        >
          {title}
        </Text>
        <div css={{ flex: '1' }} />
      </Flex>
      <Box
        position="absolute"
        top="0"
        right="-1.5rem"
        css={{ writingMode: 'vertical-lr' }}
      >
        <Text fontSize="0.6rem">{year}</Text>
      </Box>
    </Box>
  )
}

export default SliderImage
