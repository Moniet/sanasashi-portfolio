/** @jsxImportSource @emotion/react **/
import CaseStudy, {
  FullWidthImg,
  Para,
  ParaWithHeader,
  ParaCenter,
  ResponsiveGrid,
  Ul,
  Metadata,
  ImageWrapper,
} from '../../components/design-system/CaseStudy'
import Lightbox from '../../components/helpers/Lightbox'

const Mirror = () => (
  <CaseStudy
    title="Mirror"
    description="Fashion e-commerce responsive website"
    metadata={[
      ['scope', '2 weeks'],
      ['project type', "project for designlab's ux academy"],
      ['tools used', 'figma, whimsical, optimalsort'],
    ]}
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
    <ParaWithHeader header="Phase 1 : discover" large>
      <Para>
        At this stage primary and secondary research was conducted in order to
        gain deeper insights into existing user pain-points based on inquires
        developed from user interviews and competitive analysis.
      </Para>
    </ParaWithHeader>
    <ParaWithHeader header="Research">
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
    </ParaWithHeader>

    <ImageWrapper>
      <ParaWithHeader header="User interviews:">
      <Para>
          ESTABLISHING A FOUNDATIONAL UNDERSTANDING OF THE PROBLEM THROUGH USER
          INTERVIEWS
        </Para>
      </ParaWithHeader>
      <img src="/images/case-study/mirror-user-interviews.jpeg" alt="" />
    </ImageWrapper>
    <ParaWithHeader>
      I interviewed 4 participants to hear first hand their stories of how they
      use the service and what role it plays in their lives. Conducting 1:1
      interviews with the user gives an understanding of how a user thinks.
      <br />
      <br /> With the help of a focus group, users were asked about their
      experience with online shopping. This helped in identifying attitudes,
      expectations and needs of the user (empathy map). Analytics data to see
      where site visitors and site subscribers spend most of their time helped
      in identifying features that required iteration.
    </ParaWithHeader>
    <ImageWrapper>
      <ParaWithHeader header="Comparative and Competitive research:">
        <Para>
          FOR IDENTIFYING THE STRENGTHS, WEAKENESSES AND OPPORTUNITY AREAS OF
          THE CURRENT MARKET COMPETITIVE ANALYSIS WAS CARRIED OUT
        </Para>
      </ParaWithHeader>

      <Lightbox src="/images/case-study/mirror-competitive.jpg" alt="" />
    </ImageWrapper>
    <ParaWithHeader>
      <Para>
        I identified strengths and weaknesses of 4 popular shopping websites.
        This was done to see what our competitors offer and at what price
        points. Since the customer base varies by location, it was necessary to
        conduct market research to identify existing competitors and analyse
        their approach to an effective business model - (SWOT). This gave an
        idea of what the brand could do differently. Customer reviews also
        helped in identifying common unaddressed issues.
      </Para>
    </ParaWithHeader>

    <ParaWithHeader header="INTERVIEW RESULTS">
      <Para>
        From conducting user interviews, I identified key motivations, needs and
        frustrations of users while shopping online for clothes.
      </Para>
      <Para>
        Motivations:
        <br />
        <Ul
          list={[
            'An online store with good deals and affordable clothing',
            'Advanced filter option in order to search for specific products',
            'Allows users to try on clothes in the comfort of their homes',
            'Clean, simple, easy to use interface',
          ]}
        />
      </Para>
      <Para>
        Needs:
        <Ul
          list={[
            'All participants wish to find well fitted clothing. Expressing the need for accurate and consistent sizing charts.',
            'All participants also expressed their concern in determining the quality of the products. This could be either due to a lack of images, unclear product description and/or unclear sizing information.',
            'Participants highlighted their need to have advanced filtering options when shopping for a specific item. This would facilitate easy and quick checkout.',
            'All participants found it important to read the return policy before making a purchase decision.',
          ]}
        />
      </Para>
      <Para>
        Frustrations:
        <Ul
          list={[
            'Limited and poor-quality images makes it hard to assess the quality of the product',
            'Not having a familiar sizing chart',
            'Receiving too many marketing and promotional emails from stores after signing up.',
            'Poor customer service when shopping online',
            'Not being updated when an item of clothing (of interest) was back in stock.',
          ]}
        />
      </Para>
    </ParaWithHeader>

    <ParaWithHeader header="How might we :">
      <Metadata
        metadata={[
          [
            'LEVERAGE AN ONLINE PLATFORM TO ATTRACT USERS AND DRIVE SALES ?',
            '',
          ],
          [
            'MAKE IT QUICK AND EASY FOR USERS TO FIND SPECIFIC ITEMS THEY ARE LOOKING FOR? ',
            '',
          ],
          [
            'MAKE CUSTOMERS FEEL THAT THEIR INFORMATION IS SAFE AND SECURE WHEN CREATING AN ACCOUNT? ',
            '',
          ],
        ]}
      />
    </ParaWithHeader>

    <ParaWithHeader large header="Phase 2 : Define">
      <Para>
        In order to better represent and empathise with the target users, user
        personas were created from the data collected in the discovery phase and
        affinitised insights. Exploring the thoughts, goals, frustrations, and
        influences of the user is crucial to developing a great user experience.
        This helps to define who this site is for and is a way to keep design
        decisions informed by research and aligned with user goals.
      </Para>
    </ParaWithHeader>

    <ImageWrapper>
      <Para fontSize="md">USER PERSONA</Para>

      <img src="/images/case-study/mirror-user-persona.jpg" alt="" />
    </ImageWrapper>
    <ParaWithHeader>
      <Para>
        This persona helped in developing potential informed solutions through
        an improved understanding of the user's contexts, backgrounds, needs,
        motivations and pain points.
      </Para>
      <br />
      <Para>
        Ideation: <br />I then began the ideation phase by sketching out
        wireframes of the layout of the website after developing sitemaps and
        user flows. My ideas were solidified through user research and it
        allowed me to design a layout that would meet user expectations and
        therefore allows for a more positive shopping experience overall.
      </Para>
      <br />
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
          list={['Responsive design', 'Easy and secure checkout']}
        />
      </ResponsiveGrid>
      <br />
      During this phase of the design process, a sitemap was created and user
      flows were determined, again informed by research and in constant
      reference to the user persona.
    </ParaWithHeader>

    <ImageWrapper>
      <Para fontSize="md">SITEMAP</Para>
      <Lightbox src="/images/case-study/mirror-sitemap.jpg" alt="" />
    </ImageWrapper>
    <ParaWithHeader>
      <Para>
        A site map was crucial to lay out the overall structure of the website.
        I also broke-down the product categories into sub categories, as well as
        determined the filter and sort criteria that were to be present.
      </Para>
    </ParaWithHeader>

    <ImageWrapper>
      <Para fontSize="md">USER FLOW</Para>
      <Lightbox src="/images/case-study/mirror-user-flow.png" alt="" />
    </ImageWrapper>
    <ParaWithHeader>
      <Para>
        I developed a user flow for the buying process with the persona I'd
        created. This shows: How my persona discovered the page/ product, how
        she browses for a desired product, how she adds items to cart and
        finally the check out process.
      </Para>
    </ParaWithHeader>

    <hr />

    <ParaWithHeader large header="Phase 3 : Design">
      <Para>
        Once I'd identified the key pages that I would be designing, I began
        sketching the pages of the website that I would later translate into
        wireframes. Then, I worked on a few explorations of how Mirror could be
        expressed visually.
      </Para>
      <Para>
        Informed by the previous phases in the design process, the UI began to
        take shape.
      </Para>
    </ParaWithHeader>

    <ImageWrapper>
      <Para fontSize="md">WIREFRAMES</Para>
      <Lightbox src="/images/case-study/mirror-wireframes.jpg" alt="" />
    </ImageWrapper>

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

    <hr />

    <ParaWithHeader large header="Phase 4 : Test">
      <Para>
        Once I had finished visual design and creating a prototype (using
        Figma), it was time to put my design to the test. I sought out to do
        some usability testing with a few main objectives: <br />
        <br />
        <Ul
          list={[
            'Test overall ease of use and effectiveness of navigation when browsing through the website.',
            'Test for seamless search (when looking for a specific product, test how users prefer to search) and checkout process.',
            'To test if users are able to complete intended tasks without difficulty.',
            'Test if the design is clear and intuitive and provides enough information to the user.',
          ]}
        />
      </Para>
    </ParaWithHeader>

    <Lightbox src="/images/case-study/mirror-affinity-map.jpg" alt="" />

    <ParaWithHeader>
      <Para>
        Overall, the participants liked the minimal and clean aesthetic of the
        website. A 100% success rate (usability testing) shows how effective the
        modern, simple UI for Mirror is. The participants found the flow of the
        website intuitive and easy to navigate through and got through to the
        end of the prototype without any trouble. They were successfully able to
        complete the tasks and reach the checkout page during testing.
      </Para>
    </ParaWithHeader>
  </CaseStudy>
)

export default Mirror
