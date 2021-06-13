/** @jsxImportSource @emotion/react */
import Link from 'next/link'
import Box from '../../helpers/Box'
import Flex from '../../helpers/Flex'
import Spacer from '../../helpers/Spacer'
import Text from '../../helpers/Text'

const Footer = (props) => (
  <footer>
    <Flex
      flexDirection={['column', , 'row']}
      justifyContent={'space-between'}
      alignItems={['flex-start', , 'center']}
      py="lg"
      {...props}
    >
      <Flex alignItems="center" mr="md">
        <Text as="h2" fontSize={['2rem', , '3rem']}>
          LET'S WORK <br />
          TOGETHER
        </Text>
        <Box
          height="2px"
          width={['0px', '30px', '60px', '80px', , '100px']}
          bg="text"
          ml="md"
        />
      </Flex>
      <Box color="text">
        <Text as="div" fontSize="xxs">
          CONTACT ME: &nbsp;
          <Link href="mailto:sanjana.sashikumar@gmail.com" passHref>
            <Text
              textDecoration="none"
              color="text"
              as="a"
              css={{ textDecoration: 'none' }}
            >
              sanjana.sashikumar@gmail.com
            </Text>
          </Link>
        </Text>
      </Box>
    </Flex>
  </footer>
)

export default Footer
