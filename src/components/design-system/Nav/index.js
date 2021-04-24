import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { themeGet } from '@styled-system/theme-get'
import Link from 'next/link'
import Flex from '../../helpers/Flex'
import MarginProvider from '../../helpers/MarginProvider'
import Logo from './logo.svg'

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

const Nav = () => {
  const { pathname } = useRouter()

  const isHomePage = pathname === '/'
  const isAboutPage = pathname === '/about'

  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      as="nav"
      ariaLabel="Main Navigation"
    >
      <Logo fill="#eaeaea" />
      <MarginProvider ml="lg">
        <Link href="/" passHref>
          <NavLink active={isHomePage}>Work</NavLink>
        </Link>
        <Link href="/about" passHref>
          <NavLink active={isAboutPage}>About</NavLink>
        </Link>
        <Link href="mailto:sanjana.sashikumar@gmail.com" passHref>
          <NavLink>Contact</NavLink>
        </Link>
      </MarginProvider>
    </Flex>
  )
}

export default Nav
