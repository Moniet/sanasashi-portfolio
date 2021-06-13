/** @jsxImportSource @emotion/react */
import Link from 'next/link'
import Box from '../../helpers/Box'
import Flex from '../../helpers/Flex'
import Grid from '../../helpers/Grid'
import MarginProvider from '../../helpers/MarginProvider'
import Text from '../../helpers/Text'
import LeftArroww from '../../icons/left-arrow.svg'
import RightArrowWithCircle from '../../icons/right-arrow-w-circle.svg'
import Footer from '../Footer'

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

const Header = ({ children }) => (
  <Text fontWeight="500" fontSize="20px" color="text">
    {children}
  </Text>
)

export const ParaWithHeader = (props) => (
  <Flex
    flexDirection={['column', , props.flexDirection]}
    flex="1"
    {...props}
    mr="auto"
  >
    <Header {...props}>{props.header}</Header>
    <div>{props.children}</div>
  </Flex>
)

export const ParaWithHeaderLeft = ({ children, header }) => (
  <ResponsiveGrid columns="5" gridGap={[0, , 'xl']}>
    <Grid gridColumn="span 1" width="100px">
      <Header>{header}</Header>
    </Grid>
    <Grid gridColumn="span 4">{children}</Grid>
  </ResponsiveGrid>
)

export const FullWidthImg = ({ src }) => (
  <Box mx={['-2rem', '-2rem', '-4rem', '-8rem']}>
    <Box as={'img'} src={src} />
  </Box>
)

export const ParaCenter = (props) => (
  <Box width={[1, 1, 1 / 2]} mx="auto">
    <Para textAlign="center" {...props}>
      {props.children}
    </Para>
  </Box>
)

const CaseStudy = ({
  header = 'Mirror',
  description = 'Website Re-design',
  introduction = 'adsfadsf asdfasfasf asdfasdf asdf',
  projectBrief = dummmyText,
  whatIDid = dummmyText,
  tags = ['asdfdasasdf', 'asdfasasdf', 'asdfasdfd'],
  nextCaseStudy = {
    href: '/',
    header: 'Phoenix',
    categories: ['interaction design', 'ui design'],
  },
  children,
}) => {
  return (
    <>
      <Flex
        px={['md', 'md', 'lg', 'xl']}
        pt={['md', 'md', 'lg', 'xl']}
        pb={0}
        width="100vw"
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
        <Box width={['100%', '', '450px', '500px']} mt={['lg', 'lg', , 0]}>
          <MainHeader>{header} :</MainHeader>
          <br />
          <MainHeader>{description}</MainHeader>
          <Box pt={['xl', 'lg', , 'xl']} />
          <Text
            color="#fff"
            textAlign="center"
            mb="sm"
            fontSize="xs"
            css={{ opacity: 0.5 }}
          >
            INTRODUCTION
          </Text>
          <Para textAlign="center" fontSize={['sm', 'sm', '20px']}>
            {introduction}
          </Para>
        </Box>
      </Flex>
      <Box position="relative" p={['md', 'md', 'lg', 'xl']}>
        <MarginProvider mt={['md', 'lg', , 'xl']}>
          <ResponsiveGrid columns="3">
            <ParaWithHeader header={'Project Brief'} flexDirection="column">
              <Para>{projectBrief}</Para>
            </ParaWithHeader>
            <ParaWithHeader header={'What I did'} flexDirection="column">
              <Para>{whatIDid}</Para>
            </ParaWithHeader>
            <Flex flexDirection="column" width="100%" alignItems="flex-start">
              <div>
                {tags.map((tag, i) => (
                  <Para key={i} lineHeight={0.75}>
                    {tag}
                  </Para>
                ))}
              </div>
            </Flex>
          </ResponsiveGrid>
          {children}
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
    </>
  )
}

export default CaseStudy
