import Link from 'next/link'
import Footer from '../../components/design-system/Footer'
import Layout from '../../components/design-system/Layout'
import Box from '../../components/helpers/Box'
import Flex from '../../components/helpers/Flex'
import Spacer from '../../components/helpers/Spacer'
import Text from '../../components/helpers/Text'

const About = () => (
  <Layout>
    <Flex width="100%" p="xl" flexDirection="column">
      <Flex>
        <Flex mr="lg" flex="4">
          <Text as="h1" fontSize="gigantic" textAlign="right">
            ABOUT <br />
            ME
          </Text>
        </Flex>
        <Flex flex="6" flexDirection="column">
          <Text as="div" lineHeight="2.5">
            <Text>Hey there! Thank you for being here!</Text>
            <Text>
              I am Sana Sashi – a UX designer with a passion to develop better
              user experiences through minimal, intuitive, and inclusive design.
            </Text>
            <Text>
              I have been studying UX Design since February 2021 with the goal
              to actively build creative solutions that emotionally resonates
              with the user.
            </Text>
            <Text>
              As a curious individual always looking to learn and explore, I am
              on a pursuit for opportunities that help me grow through creating
              products that have a meaningful impact on users.
            </Text>
            <Text>
              If you’d like to work together, drop me a message to get in touch!
            </Text>
          </Text>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  </Layout>
)

export default About
