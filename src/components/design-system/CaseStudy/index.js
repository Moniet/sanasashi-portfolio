/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import Link from 'next/link'
import Box from '../../helpers/Box'
import Flex from '../../helpers/Flex'
import Grid from '../../helpers/Grid'
import MarginProvider from '../../helpers/MarginProvider'
import Text from '../../helpers/Text'
import LeftArroww from '../../icons/left-arrow.svg'
import RightArrowWithCircle from '../../icons/right-arrow-w-circle.svg'
import Footer from '../Footer'
import Layout from '../Layout'

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: min(100%, 700px);

  p {
    align-self: flex-start;
  }
`

const Wrapper = styled.div`
  img {
    width: min(100%, 700px);
    margin-right: auto;
    margin-left: auto;
    position: relative;
  }
`

const dummmyText =
  'aosdfnoaidnfoasnd aisdnf asidn foas nfao sdo andsoafs doifnas odin sadinf aso '
const dummmyTextLg =
  'aosdfnoaidnfoasnd aisdnf asidn foas nfao sdo andsoafs doifnas odin sadinf aso  adsoif asid fnaos nfoas ifaos nofdai nosnfioa nofi nfoais dno asdoifnio'

const MainHeader = ({ children }) => (
  <Box width={['100%', '100%', '300px']} mx="auto">
    <Text fontSize="xl" mb={0} lineHeight={1} textAlign="center">
      {children}
    </Text>
  </Box>
)

export const ResponsiveGrid = ({ children, columns, gridGap }) => (
  <Grid
    width="min(100%, 700px)"
    justifyContent="center"
    mx="auto"
    gridTemplateColumns={[`1fr`, '1fr', `repeat(${columns}, 1fr)`]}
    gridGap={gridGap ? gridGap : ['md', 'md', 'xl']}
  >
    {children}
  </Grid>
)

export const Para = (props) => (
  <Text fontSize={['xs', 'xs', 'sm']} color="text" {...props}>
    {props.children}
  </Text>
)

export const Ul = (props) => (
  <Flex as="ul" flexDirection="column" {...props} pl="sm" mt={0}>
    {props.list.map((listItem, i) => (
      <Para
        as="li"
        key={i}
        color="text"
        {...(props.li || {})}
        mb={0}
        css={{ flex: 1 }}
      >
        {listItem}
      </Para>
    ))}
  </Flex>
)

const Header = (props) => (
  <Text fontWeight="500" fontSize="20px" color="text" {...props}>
    {props.children}
  </Text>
)

export const ParaWithHeader = (props) => (
  <Flex
    flexDirection={['column', , props.flexDirection]}
    flex="1"
    width="min(100%, 700px)"
    {...props}
    // mx="auto"
  >
    {!props.large && <Header {...props}>{props.header}</Header>}
    {props.large && <h1 {...props}>{props.header}</h1>}
    <div>{props.children}</div>
  </Flex>
)

export const ParaWithHeaderLeft = (props) => {
  const { children, header, large = false } = props

  return (
    <ResponsiveGrid columns="5" gridGap={[0, , 'xl']}>
      <Grid gridColumn="span 1" width="100px">
        {!large && <Header {...props}>{header}</Header>}
        {large && (
          <Text as="h1" {...props}>
            {header}
          </Text>
        )}
      </Grid>
      <Grid gridColumn="span 4">
        <Box width="min(100%, 700px)">{children}</Box>
      </Grid>
    </ResponsiveGrid>
  )
}

export const FullWidthImg = ({ src }) => (
  <Box mx={['-2rem', '-2rem', '-4rem', '-8rem']}>
    <Box as={'img'} src={src} width="100vw !important" />
  </Box>
)

export const ParaCenter = (props) => (
  <Box width={[1, 1, 1 / 2]} mx="auto">
    <Para textAlign="center" {...props}>
      {props.children}
    </Para>
  </Box>
)

export const Metadata = ({ metadata = [['key', 'value']] }) => {
  const length = metadata.length - 1
  return (
    <div>
      {metadata.map(([KEY, VALUE], i) => (
        <div key={i}>
          <Flex
            p="sm"
            m="0 auto"
            width="min(100%, 700px)"
            justifyContent="space-between"
            fontSize="sm"
            css={{ textTransform: 'uppercase' }}
            borderTop="solid 1px"
            borderTopColor="rgba(255,255,255,0.2)"
            borderBottom={i === length ? 'solid 1px' : 'none'}
            borderBottomColor={'rgba(255,255,255,0.2)'}
          >
            <Text color="text" letterSpacing="1px" pb={0} mb={0}>
              {KEY}
            </Text>
            <Text
              color="text"
              letterSpacing="1px"
              pb={0}
              mb={0}
              textAlign="right"
            >
              {VALUE}
            </Text>
          </Flex>
        </div>
      ))}
    </div>
  )
}

const CaseStudy = ({
  header = 'Mirror',
  description = 'Website Re-design',
  introduction = 'adsfadsf asdfasfasf asdfasdf asdf',
  projectBrief = dummmyText,
  whatIDid = dummmyText,
  metadata = [
    ['scope', '2 weeks'],
    ['project type', "project for designlab's ux academy"],
    ['tools used', 'figma, whimsical, optimalsort'],
  ],
  tags = ['asdfdasasdf', 'asdfasasdf', 'asdfasdfd'],
  nextCaseStudy = {
    href: '/',
    header: 'Phoenix',
    categories: ['interaction design', 'ui design'],
  },
  children,
}) => {
  return (
    <Wrapper>
      <Layout hideNav>
        <Flex
          pb={['md', 'md', 'lg', 'xl']}
          width="100%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Link href="/">
            <a>
              <Flex
                position="absolute"
                top={[, 'sm', 'sm', , 'md']}
                left={['md', 'md', 'lg', 'xl']}
                alignItems="center"
              >
                <LeftArroww />{' '}
                <Text fontSize="xxs" color="text" mb={0} ml={'xs'}>
                  HOME
                </Text>
              </Flex>
            </a>
          </Link>
          <Box width="min(100%, 700px)" mt={['lg', 'lg', , 0]}>
            <MainHeader>{header} :</MainHeader>
            <br />
            <MainHeader>{description}</MainHeader>
            <Box pt={['xl', 'lg', , 'xl']} />
            <Metadata metadata={metadata} />

            <Box pt={['xl', 'lg', , 'xl']} />
            <ParaWithHeader header="INTRODUCTION">
              <Para>{introduction}</Para>
            </ParaWithHeader>
          </Box>
        </Flex>
        <Box position="relative">
          <MarginProvider mt={['md', 'lg', , 'xl']}>
            <ResponsiveGrid columns="2">
              <ParaWithHeader header={'Project Brief'} flexDirection="column">
                <Para>{projectBrief}</Para>
              </ParaWithHeader>
              <ParaWithHeader header={'What I did'} flexDirection="column">
                <Para>{whatIDid}</Para>
              </ParaWithHeader>
            </ResponsiveGrid>

            <MarginProvider
              mt={['md', 'lg', , 'xl']}
              css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {children}
            </MarginProvider>
            <Box pt={['md', 'md', , 'lg']} />
            <Link href={nextCaseStudy.href}>
              <a
                css={{
                  textAlign: 'center',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                <Flex flexDirection="column" alignItems="center" color="text">
                  <Text fontSize="xs" color="text" mb="lg">
                    Next Case
                  </Text>
                  <Flex
                    alignItems="center"
                    flexDirection={['column', 'column', , , 'row']}
                  >
                    <Box mr="md">
                      <Text as="h3" fontSize={['xxl', , 'gigantic']} m={0}>
                        {nextCaseStudy.header}
                      </Text>
                      <Para css={{ textTransform: 'uppercase' }}>
                        {nextCaseStudy.categories.join('/')}
                      </Para>
                    </Box>
                    <Box width={[, '100px', , , '150px']}>
                      <RightArrowWithCircle />
                    </Box>
                  </Flex>
                </Flex>
              </a>
            </Link>
          </MarginProvider>
          <Box pt={['md', 0, , 'md', , 'lg']} />
          <Footer />
        </Box>
      </Layout>
    </Wrapper>
  )
}

export default CaseStudy
