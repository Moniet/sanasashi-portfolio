import Box from '../../helpers/Box'
import Cursor from '../Cursor'
import Nav from '../Nav'

const Layout = ({ children }) => (
  <Box
    bg="bg"
    width="100vw"
    height="100vh"
    p="65px"
    pb="0px"
    position="relative"
    overflowX="hidden"
  >
    <Nav />
    {children}
  </Box>
)

export default Layout
