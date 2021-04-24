import Link from 'next/link'
import Box from '../../helpers/Box'
import Flex from '../../helpers/Flex'
import Spacer from '../../helpers/Spacer'
import Text from '../../helpers/Text'

const Footer = () => (
  <footer>
    <Spacer mt="lg" />
    <Flex justifyContent="space-between" alignItems="center">
      <Flex alignItems="center">
        <Text as="h2" fontSize="3rem">
          LET'S WORK <br />
          TOGETHER
        </Text>
        <Box height="2px" width="100px" bg="text" ml="md" />
      </Flex>
      <Box color="text">
        <Text as="div" fontSize="xxs">
          CONTACT ME: &nbsp;
          <Link href="mailto:sanjana.sashikumar@gmail.com" passHref>
            <Text textDecoration="none" color="text" as="a">
              sanjana.sashikumar@gmail.com
            </Text>
          </Link>
        </Text>
      </Box>
    </Flex>
  </footer>
)

export default Footer
