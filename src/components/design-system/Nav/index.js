import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { themeGet } from '@styled-system/theme-get'
import Link from 'next/link'
import Flex from '../../helpers/Flex'
import MarginProvider from '../../helpers/MarginProvider'
import Logo from './logo.svg'
import Hamburger from '../../icons/hamburger.svg'
import Box from '../../helpers/Box'
import { useState } from 'react'
import { display, flex } from 'styled-system'
import Text from '../../helpers/Text'

export const NavLink = styled.a`
  color: ${themeGet('colors.text')};
  font-size: ${themeGet('fontSizes.xxs')};
  text-decoration: none;
  border-bottom: ${(props) =>
    props.active ? `solid 1px ${themeGet('colors.text')(props)}` : 'none'};
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: none;

  &:hover {
    border-bottom: solid 1px ${themeGet('colors.text')};
  }
`

const NavLinkGroup = styled(MarginProvider)`
  ${flex}
  ${display}
`

const Nav = () => {
  const { pathname } = useRouter()
  const [showMobileNav, setShowMobileNav] = useState(false)

  const isHomePage = pathname === '/'
  const isAboutPage = pathname === '/about'

  const handleClick = () => setShowMobileNav(!showMobileNav)

  return (
    <>
      <Flex
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        as="nav"
        ariaLabel="Main Navigation"
        position="absolute"
        top="0"
        left="0"
        p={['md', 'md', 'lg', '65px']}
        zIndex="nav"
      >
        <Logo fill="#eaeaea" />
        <Box
          as="button"
          display={['block', 'block', 'none']}
          onClick={() => handleClick()}
          background="none"
          border="none"
        >
          <Hamburger />
        </Box>
        <Box display={['none', 'none', 'block']}>
          <NavLinkGroup ml={[0, 'md']}>
            <Link href="/" passHref>
              <NavLink active={isHomePage}>Work</NavLink>
            </Link>
            <Link href="/about" passHref>
              <NavLink active={isAboutPage}>About</NavLink>
            </Link>
            <Link href="mailto:sanjana.sashikumar@gmail.com" passHref>
              <NavLink>Contact</NavLink>
            </Link>
          </NavLinkGroup>
        </Box>
      </Flex>
      {showMobileNav && (
        <Flex
          bg="rgba(15,15,15,0.95)"
          position="fixed"
          top={0}
          left={0}
          width="100vw"
          height="100vh"
          p="lg"
          zIndex="nav"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            width="100%"
            height="200px"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
          >
            <Link href="/" passHref>
              <NavLink active={isHomePage}>Work</NavLink>
            </Link>
            <Link href="/about" passHref>
              <NavLink active={isAboutPage}>About</NavLink>
            </Link>
            <Link href="mailto:sanjana.sashikumar@gmail.com" passHref>
              <NavLink>Contact</NavLink>
            </Link>
          </Flex>
          <Box
            position="absolute"
            top="md"
            right="md"
            as="button"
            onClick={() => handleClick()}
          >
            <Text as="span" fontWeight="bold" color="text">
              X
            </Text>
          </Box>
        </Flex>
      )}
    </>
  )
}

export default Nav
