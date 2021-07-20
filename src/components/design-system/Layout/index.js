import Box from '../../helpers/Box'
import Nav from '../Nav'

const Layout = ({ children, hideNav }) => (
  <Box
    bg="bg"
    height="100vh"
    width="100%"
    p={['md', 'md', '65px']}
    pb="0px"
    position="relative"
    overflowX="hidden"
    overflowY="visible"
  >
    <Box width={'min(100%, 1400px)'} mx="auto">
      {!hideNav && <Nav />}
      {children}
    </Box>
  </Box>
)

export default Layout
