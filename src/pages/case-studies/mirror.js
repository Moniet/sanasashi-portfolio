import CaseStudy, {
  FullWidthImg,
  Para,
  ParaWithHeader,
  ParaCenter,
  ParaWithHeaderLeft,
  ResponsiveGrid,
  Ul,
} from '../../components/design-system/CaseStudy'

const Mirror = () => (
  <CaseStudy
    title="Mirror"
    projectBrief="Design a responsive e-commerce website that is easy to use and allows customers to browse through all products and filter by size, color, style, etc.
    "
    whatIDid="Given the project brief I worked on developing a modern website concept for a seamless shopping experience that would cater to all users and therefore drive sales."
    introduction="Mirror is a successful clothing store with the goal of making any type of clothing affordable and accessible to everyone. Mirror started back in 1994 as a clothing store targeting a budget-minded audience who looked for high quality yet affordable clothing for any occasion. "
    tags={[
      'UX Research ',
      'Strategy and Design',
      'Branding',
      'UI Design',
      'Usability Testing',
    ]}
    nextCaseStudy={{
      href: '/case-studies/phoenix',
      header: 'Phoenix',
      categories: ['interaction design ', ' ui design'],
    }}
  >
    <ParaWithHeaderLeft header="Research">
      <Para>
        Goal: <br />
        Learn what existing customers value about shopping online and identify
        possible pain points so that we can create a seamless shopping
        experience that would drive sales.
      </Para>
      <Para mb={0}>
        Objectives: <br />
      </Para>
      <Ul
        list={[
          'Determine the expectations users have when shopping and how shopping online accomplishes this.',
          'Determine the factors that go into purchasing a product.',
          'Determine when and how often people shop online and why they prefer this over visiting a store.',
          'Understand existing problems people face when shopping online.',
        ]}
      />
    </ParaWithHeaderLeft>
    <img src="/images/case-study/mirror-1.png" />
    <ParaWithHeaderLeft>
      <Para>
        Methods: <br />
        • Comparative and competitive research: I identified strengths and
        weaknesses of 4 popular shopping websites. This was done to see what our
        competitors offer and at what price points. Since the customer base
        varies by location, it was necessary to conduct market research to
        identify existing competitors and analyse their approach to an effective
        business model - (SWOT). This gave an idea of what the brand could do
        differently. Customer reviews also helped in identifying common
        unaddressed issues.
      </Para>
      <Para>
        User interviews: <br />• I interviewed 4 participants to hear first hand
        their stories of how they use the service and what role it plays in
        their lives. Conducting 1:1 interviews with the user gives an
        understanding of how a user thinks. With the help of a focus group,
        users were asked about their experience with online shopping. This
        helped in identifying attitudes, expectations and needs of the user
        (empathy map). Analytics data to see where site visitors and site
        subscribers spend most of their time.
      </Para>
      <Para>
        Participants: <br />
        People in the age group between 18-34 (demographic that shop online:
        statista.com) belonging to different backgrounds and with varied income.
      </Para>
    </ParaWithHeaderLeft>
    <img src="/images/case-study/mirror-2.png" />
    <ParaWithHeaderLeft header="Ideation">
      <Para>
        Wireframes of the layout of the website after developing sitemaps and
        user flows. My ideas were solidified through user research and it
        allowed me to design a layout that would meet user expecttions and
        therefore allows for a more positive shopping experience overall.
      </Para>
    </ParaWithHeaderLeft>
    <ParaWithHeaderLeft>
      <ResponsiveGrid columns={3} gridGap={['auto', 'auto', '2rem']}>
        <Para>Must Haves:</Para>
        <Ul
          li={{ pb: 'sm' }}
          list={[
            'Clear product images and descriptions',
            'Intuitive layout and familiar icons',
          ]}
        />
        <Ul
          li={{ pb: 'sm' }}
          list={[
            'Clear product images and descriptions',
            'Easy and secure checkout',
          ]}
        />
      </ResponsiveGrid>
    </ParaWithHeaderLeft>
    <img src="/images/case-study/mirror-wireframe.svg" />
    <ResponsiveGrid columns={2}>
      <ParaWithHeader header="The Objective">
        <Para>
          Understand and learn what existing customers value about shopping
          online and identify possible pain points to create a positive shopping
          experience that would drive sales.
        </Para>
      </ParaWithHeader>
      <ParaWithHeader header="The Solution">
        <Para>
          From understanding user expectations through user interviews and
          usability testing, I developed a modern, clean and intuitive website
          for Mirror.
        </Para>
      </ParaWithHeader>
    </ResponsiveGrid>
    <ResponsiveGrid column={1} gridGap="md">
      <img src="/images/case-study/mirror-3.png" />
      <img src="/images/case-study/mirror-4.png" />
      <img src="/images/case-study/mirror-5.png" />
      <img src="/images/case-study/mirror-6.png" />
      <img src="/images/case-study/mirror-7.png" />
    </ResponsiveGrid>
    <ParaCenter>
      A minimal layout with a combination of a serif font for headings and sans
      serif for body text convey a modern and luxurious look-and-feel. The use
      of minimal colors and large images also play a key role in achieving an
      overall clean, minimalist layout.
    </ParaCenter>
    <img src="/images/case-study/mirror-8.png" />
    <img src="/images/case-study/mirror-9.png" />

    <ParaCenter>
      In order for all the colors to harmonise with one another and ensure a
      pleasing, non -cluttered layout, the images used have been carefully
      selected. Large, clear images convey professionalism and ensures
      trustworthiness in the brand.
    </ParaCenter>

    <FullWidthImg src="/images/case-study/mirror-mockup.png" />
    <ParaCenter>
      The website is designed to be responsive - ensuring the page is available
      and renders well on all devices. This ensures the brand can tap into the
      online e-commerce market effectively.
    </ParaCenter>
    <img src="/images/case-study/mirror-responsive.png" />
    <ParaWithHeaderLeft header="Usability Testing">
      <Para>
        Once I had finished visual design and creating a prototype, it was time
        to put my design to the test. I sought out to do some usability testing
        with a few main objectives.
      </Para>

      <Ul
        list={[
          'Test overall ease of use and effectiveness of navigation when browsing through the website. ',
          'Test for seamless search (when looking for a specific product, test how users prefer to search) and checkout process. To test if users are able to complete intended tasks without difficulty. ',
          'Test if the design is clear and intuitive and provides enough information to the user.',
        ]}
      />
    </ParaWithHeaderLeft>
    <ParaWithHeaderLeft header="Conclusion">
      <Para>
        Overall, the participants liked the minimal and clean aesthetic of the
        website. A 100% success rate (usability testing) shows how effective the
        modern, simple UI for Mirror is. The participants found the flow of the
        website intuitive and easy to navigate through and got through to the
        end of the prototype without any trouble. They were successfully able to
        complete the tasks and reach the checkout page during testing.
      </Para>
    </ParaWithHeaderLeft>
  </CaseStudy>
)

export default Mirror
