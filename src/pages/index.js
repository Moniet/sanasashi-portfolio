import Head from 'next/head'
import Box from '../components/helpers/Box'
import Nav from '../components/design-system/Nav'
import Flex from '../components/helpers/Flex'
import Cursor from '../components/design-system/Cursor'
import Text from '../components/helpers/Text'
import Slider, { SliderControls } from '../components/design-system/Slider'
import Layout from '../components/design-system/Layout'
import Footer from '../components/design-system/Footer'
import { useSlider } from '../components/design-system/Slider/useSlider'

export default function Home() {
  const sliderProps = useSlider()

  return (
    <Layout>
      <Head>
        <title>Sanjana Sashikumar | UX Designer</title>
      </Head>
      <Flex height="100%" width="100%" alignItems="center">
        <Flex
          flexDirection="column"
          minWidth={['auto', 'auto', '200px', '250px']}
        >
          <Text fontSize="xs" mb={0}>
            I’m a UX Designer crafting User-Centric products through Minimal,
            Effective and Inclusive design.{' '}
          </Text>
        </Flex>
        <Flex
          pl={(0, 0, 0, 'sm', 'md', 'lg')}
          height="100%"
          position="relative"
          alignItems="center"
        >
          <Slider {...sliderProps} />
        </Flex>
        <Box position="absolute" bottom="lg" right="65px">
          <SliderControls {...sliderProps} />
        </Box>
      </Flex>
    </Layout>
  )
}
