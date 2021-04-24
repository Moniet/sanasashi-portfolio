import Box from '../components/helpers/Box'
import Nav from '../components/design-system/Nav'
import Flex from '../components/helpers/Flex'
import Cursor from '../components/design-system/Cursor'
import Text from '../components/helpers/Text'
import Slider from '../components/design-system/Slider'
import Layout from '../components/design-system/Layout'
import Footer from '../components/design-system/Footer'

export default function Home() {
  return (
    <Layout>
      <Flex height="100%" width="100%" alignItems="center">
        <Flex flexDirection="column" flex="1" pr="md">
          <Text as="h1" fontSize="gigantic" fontWeight="200">
            MY
            <br />
            WORK
          </Text>
          <Text fontSize="xxs">
            I’m a UX Designer crafting User-Centric products through Minimal,
            Effective and Inclusive design.{' '}
          </Text>
        </Flex>
        <Slider />
      </Flex>
      <Footer />
    </Layout>
  )
}
