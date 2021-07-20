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
      <Nav />
      <Head>
        <title>Sanjana Sashikumar | UX Designer</title>
      </Head>
      <Box mt={['xl', 'xl', '65px']} />
      <Flex
        minHeight="100%"
        width="100%"
        alignItems="center"
        flexDirection={['column', 'column', 'row']}
        // justifyContent={['center', 'center', 'flex-start']}
      >
        <Flex
          flexDirection="column"
          minWidth={['auto', 'auto', '200px', '250px']}
        >
          <Text fontSize="xs" mb={0} textAlign={['center', 'center', 'left']}>
            I’m a UX Designer crafting User-Centric products through Minimal,
            Effective and Inclusive design.{' '}
          </Text>
        </Flex>
        <Box mt={['xl', 'xl', '65px']} />
        <Flex
          pl={(0, 0, 0, 'sm', 'md', 'lg')}
          height={['auto', 'auto', 1]}
          position="relative"
          alignItems="center"
        >
          <Slider {...sliderProps} />
        </Flex>
        <Box
          position={['relative', 'relative', 'absolute']}
          bottom={['sm', 'sm', 'lg']}
          right={[1 / 2, 1 / 2, '65px']}
        >
          <SliderControls {...sliderProps} />
        </Box>
      </Flex>
    </Box>
  )
}
