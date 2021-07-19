import Box from '../../helpers/Box'
import Nav from '../Nav'

const Layout = ({ children, hideNav }) => (
  <Box
    bg="bg"
    width="min(100vw, 1400px)"
    height="100vh"
    mx="auto"
    p={['md', 'md', '65px']}
    pb="0px"
    position="relative"
    overflowX="hidden"
    overflowY="visible"
  >
    {!hideNav && <Nav />}
    {children}
  </Box>
)

export default Layout
