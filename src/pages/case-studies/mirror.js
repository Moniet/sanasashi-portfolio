import CaseStudy, {
  FullWidthImg,
  Para,
  ParaWithHeader,
  ParaCenter,
  ParaWithHeaderLeft,
  ResponsiveGrid,
  Ul,
  Metadata,
} from '../../components/design-system/CaseStudy'
import Box from '../../components/helpers/Box'

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
    <ParaWithHeader width="min(100%, 500px)" header="Phase 1 : discover" center>
      <Para>
        At this stage primary and secondary research was conducted in order to
        gain deeper insights into existing user pain-points based on inquires
        developed from user interviews and competitive analysis.
      </Para>
    </ParaWithHeader>
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

    <ParaWithHeaderLeft header="User interviews:">
      ESTABLISHING A FOUNDATIONAL UNDERSTANDING OF THE PROBLEM THROUGH USER
      INTERVIEWS
    </ParaWithHeaderLeft>
    <img
      src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e228a505-1d92-452b-a7f3-50ec73dfae9f/Mirror_user_interviews_for_case_study.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210706T094608Z&X-Amz-Expires=86400&X-Amz-Signature=10f9217f9a51b72a7e462b13588b620ae4b7c3df11c9e2a711b0441a167e8886&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Mirror_user_interviews_for_case_study.jpg%22"
      alt=""
    />

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
    <ParaWithHeaderLeft header="Comparative and Competitive research:">
      <Para>
        FOR IDENTIFYING THE STRENGTHS, WEAKENESSES AND OPPORUNITY AREAS OF THE
        CURRENT MARKET COMPETITIVE ANALYSIS WAS CARRIED OUT
      </Para>
    </ParaWithHeaderLeft>
    <img
      src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e73ac098-351a-4af5-9517-a27a3ee931ea/Mirror_competitive.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210706T095051Z&X-Amz-Expires=86400&X-Amz-Signature=66831df43719f25be41890cb10d816a25c20090c2361af0054be8e99726b51fa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Mirror_competitive.jpg%22"
      alt=""
    />
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

    <ParaWithHeaderLeft header="INTERVIEW RESULTS">
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
    </ParaWithHeaderLeft>

    <ParaWithHeader header="How might we :" width="100%">
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

    <ParaWithHeader large width="min(100%, 600px)" header="Phase 2 : Define">
      <Para>
        In order to better represent and empathise with the target users, user
        personas were created from the data collected in the discovery phase and
        affinitised insights. Exploring the thoughts, goals, frustrations, and
        influences of the user is crucial to developing a great user experience.
        This helps to define who this site is for and is a way to keep design
        decisions informed by research and aligned with user goals.
      </Para>
    </ParaWithHeader>

    <div>
      <Para fontSize="md">USER PERSONA</Para>

      <img
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d05a09-b19c-425b-8040-857726321273/Mirror_persona.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210706T102130Z&X-Amz-Expires=86400&X-Amz-Signature=41bace929946649aa64d7ad264fff7b932651c08c481c7a66b9ec4a633a50225&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Mirror_persona.jpg%22"
        alt=""
      />
    </div>
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

    <div>
      <Para fontSize="md">SITEMAP</Para>
      <img
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/93d6b9aa-1a94-496b-9466-3e7ebba79f17/Mirror_Sitemap.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210706T102747Z&X-Amz-Expires=86400&X-Amz-Signature=e1e6b21bda507d980d23e6fd10fd8c7daacfee8ee72629cbaa59fcee2cca9dee&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Mirror_Sitemap.jpg%22"
        alt=""
      />
    </div>
    <ParaWithHeader>
      <Para>
        A site map was crucial to lay out the overall structure of the website.
        I also broke-down the product categories into sub categories, as well as
        determined the filter and sort criteria that were to be present.
      </Para>
    </ParaWithHeader>

    <div>
      <Para fontSize="md">USER FLOW</Para>
      <img
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3aebfe01-b8a5-4905-ac36-a32addff52ca/User_Flow.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210706T103116Z&X-Amz-Expires=86400&X-Amz-Signature=6ce75f238f75f45ecfd41e8ffb128ffbfbf339fd56fa9173c6dc6f7bd316f3c7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22User_Flow.png%22"
        alt=""
      />
    </div>
    <ParaWithHeader>
      <Para>
        I developed a user flow for the buying process with the persona I'd
        created. This shows: How my persona discovered the page/ product, how
        she browses for a desired product, how she adds items to cart and
        finally the check out process.
      </Para>
    </ParaWithHeader>

    <hr />

    <ParaWithHeader
      large
      width="min(100%, 600px)"
      header="Phase 3 : Design"
    ></ParaWithHeader>

    <div>
      <Para fontSize="md">WIREFRAMES</Para>
      <img
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/97c0c2c7-7f35-48ec-9f92-baf387db2117/Mirror_wireframes.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210706T103454Z&X-Amz-Expires=86400&X-Amz-Signature=c2f319a6afad7bf375fbbe82ba0ad7aff8974b3af1f26cdf1ec3c9a60a07be90&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Mirror_wireframes.jpg%22"
        alt=""
      />
    </div>

    <ParaWithHeader>
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

    <ParaWithHeader large width="min(100%, 600px)" header="Phase 4 : Test">
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

    <img
      src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e932ca48-4411-4df4-acca-a62163e3398a/Affinity_Map_mirror.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210706T103929Z&X-Amz-Expires=86400&X-Amz-Signature=0cec264d7ce77b0c5ccd47bceef95766735e78237dc40f38326611279e5af76f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Affinity_Map_mirror.jpg%22"
      alt=""
    />

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
