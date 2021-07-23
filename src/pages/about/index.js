import Head from 'next/head'
import Footer from '../../components/design-system/Footer'
import Layout from '../../components/design-system/Layout'
import Box from '../../components/helpers/Box'
import Flex from '../../components/helpers/Flex'
import Text from '../../components/helpers/Text'

const About = () => (
  <Layout>
    <Head>
      <title>Work | Sanjana Sashi | UX Designer</title>
    </Head>
    <Flex
      width="100%"
      height="100%"
      pt={['xl', 'xl', 'xl']}
      px={['0', '0', '0', 'lg', 'xl']}
      flexDirection="column"
    >
      <Flex flexDirection={['column', 'column', , 'row']}>
        <Flex
          mr={[0, 0, 0, 'lg']}
          flex="4"
          justifyContent={['center', 'center', , 'start']}
        >
          <Text
            as="h1"
            fontSize={['xl', 'xl', 'xxl', 'gigantic']}
            textAlign={['center', 'center', , 'right']}
          >
            ABOUT ME
          </Text>
        </Flex>
        <Flex
          flex="6"
          flexDirection="column"
          width="min(100%, 600px)"
          mx="auto"
        >
          <Text
            as="div"
            lineHeight={['1.5', '1.5', , '2', '2.5']}
            textAlign={['center', , , 'left']}
            fontSize={['xs', 'xs', 'inherit']}
          >
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
    </Flex>

    <Footer px={[0, 0, , 'xl']} mt={['0', '0', 'xl', 0]} />
  </Layout>
)

export default About
