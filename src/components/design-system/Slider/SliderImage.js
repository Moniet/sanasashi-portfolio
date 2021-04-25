/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { themeGet } from '@styled-system/theme-get'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Box from '../../helpers/Box'
import Flex from '../../helpers/Flex'
import Text from '../../helpers/Text'

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`

const Tags = ({ tags = ['No tags :('] }) => (
  <Box position="absolute" top="0" left="0" width="100%" pr="md" pt="sm">
    <Flex flexDirection="column">
      {tags.map((tag, i) => (
        <Text key={i} color="text" textAlign="right" p="0" m="0" lineHeight="1">
          {tag}
        </Text>
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

  return (
    <Box
      position="relative"
      css={css`
        --scale: 0.9;
        transform: scale(var(--scale));
        transition: 0.5s ease transform;
      `}
      style={{ '--scale': count === index ? 1 : 0.9 }}
    >
      <Link href={projectLink} passHref>
        <a>
          <Flex
            position="relative"
            height="100%"
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
            <Tags tags={tags} />
            <Box
              position="absolute"
              bottom="0"
              left="0"
              css={{
                transform:
                  'rotate(-90deg) translateY(-50%) translateX(calc(25% + 1rem))',
              }}
            >
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
