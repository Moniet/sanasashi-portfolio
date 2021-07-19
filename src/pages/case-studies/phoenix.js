import CaseStudy, {
  FullWidthImg,
  Para,
  ParaCenter,
  ParaWithHeader,
  ResponsiveGrid,
  Ul,
  Metadata,
  ImageWrapper,
} from '../../components/design-system/CaseStudy'
import Grid from '../../components/helpers/Grid'
import Lightbox from '../../components/helpers/Lightbox'

const Phoenix = () => (
  <CaseStudy
    header="Phoenix Medical Systems"
    description="Responsive Website re-design"
    projectBrief="Design a fully responsive website for Phoenix, making it easy and intuitive to use while ensuring it looks professional and modern."
    whatIDid="Given the project brief I worked on developing a seamless user experience that is intuitive with a clutter free layout while employing modern, relevant UX methods."
    introduction="Phoenix is an established successful company manufacuring Maternal and Neonatal equipment. Phoenix was founded in 1989 with the aim for providing innovative and low-cost solutions for infant and maternal care."
    tags={[
      'UX Research ',
      'Strategy and Design',
      'UI Design',
      'Usability Testing',
    ]}
    nextCaseStudy={{
      href: '/case-studies/stream-net',
      header: 'Stream Net',
      categories: ['interaction design ', ' ui design'],
    }}
  >
    <ParaWithHeader header="Phase 1: Discover" large>
      <Para>
        At this stage I identified strengths and weaknesses of market
        competitors through secondary research. This was carried out in order to
        gain deeper insights into how popular companies in the industry are
        making use of their online platform to drive sales. This then gave me an
        idea of what I could do better while designing Phoenix's website.{' '}
      </Para>
    </ParaWithHeader>

    <ParaWithHeader header="Research">
      <Para>
        Goal: <br />
        Phoenix an established manufacturer for Maternal and Neonatal equipment
        wishes to redesign their existing purely informational website that
        could develop a better user experience and help attract a larger
        customer base.
      </Para>
      <Para mb={0}>
        Objectives: <br />
      </Para>
      <Ul
        list={[
          'Determine the expectations users have when searching for maternal and neonatal care and how an online website helps accomplish this.',
          'Determine the factors that go into purchasing a product.',
          'Identify target customers and determine expectations and existing pain points.',
          'Identify specific key words used when looking for neonatal and maternal products. ',
        ]}
      />
    </ParaWithHeader>

    <ImageWrapper>
      <Para fontSize="md">INTERVIEWS</Para>
      <Lightbox alt="" src="/images/case-study/phoenix-interviews.jpg" />
    </ImageWrapper>

    <ParaWithHeader>
      <Para>
        Although I was unable to conduct user interviews through getting in
        touch with doctors and hospital staff, discussions with the marketing
        and sales team at Phoenix helped in identifying unaddressed user pain
        points with their existing website.
      </Para>
      <Para>
        Users: <br /> We assume users belonging to the following categories in
        our target industry.
        <br />
        <Ul
          list={[
            'Hospitals (administration staff - both government and private) looking to purchase the product(s) in bulk.',
            'Doctors that would like to enquire about the products and make a purchase.',
            'Users looking to buy assistive devices.',
          ]}
        />
      </Para>
      <Para>
        Brand message:
        <Ul list={['Inviting', 'Trustworthy', 'Premium quality']} />
      </Para>
    </ParaWithHeader>

    <ParaWithHeader header="Comparative and Competitive research:">
      AS TO DISCOVER THE STRENGTHS, WEAKENESSES AND OPPORUNITY AREAS OF THE
      CURRENT MARKET OFFERINGS COMPETITIVE ANALYSIS WAS CARRIED OUT
    </ParaWithHeader>

    <Lightbox alt="" src="/images/case-study/phoenix-competitive.jpg" />

    <ParaWithHeader>
      I carried out secondary research (competitor analysis) by comparing
      features and designs of other Maternal and Neonatal companies to better
      understand what features Phoenix’s website must have, what would be nice
      to have, and what could set them apart from their competitors.
      <br />
      <br />
      This therefore, aided in the development of a website that would address
      common pain points and in turn have a better user experience.
    </ParaWithHeader>

    <ImageWrapper>
      <ParaWithHeader header="How might we :" width="100%">
        <Metadata
          metadata={[
            [
              'LEVERAGE AN ONLINE PLATFORM TO ATTRACT USERS AND DRIVE SALES?',
              '',
            ],
            ['ENSURE USERS BUILD TRUST IN THE BRAND? ', ''],
            [
              'MAKE USERS FEEL THAT THEY HAVE ALL THE INFORMATION THEY NEED ON THE WEBSITE TO MAKE A PURCHSE DECISION? ',
              '',
            ],
          ]}
        />
      </ParaWithHeader>
    </ImageWrapper>

    <ParaWithHeader header="Phase 2: Define" large>
      <Para>
        Based on existing user pain points and in order to better represent and
        empathise with the target users, a user persona was created. Being aware
        of goals, expectations and frustrations of users helped ensure that
        informed design decisions are made that align with user goals.
      </Para>
    </ParaWithHeader>
    <ImageWrapper>
      <Para fontSize="md">USER PERSONA</Para>
      <Lightbox src="/images/case-study/phoenix-persona.jpg" />
    </ImageWrapper>
    <ParaWithHeader>
      <Para>
        During this phase of the design process, a sitemap was created and user
        flows were determined, again informed by research and in constant
        reference to the user persona.
      </Para>
    </ParaWithHeader>
    <ParaWithHeader header="Ideation">
      <Para>
        The goal is to redesign the website to ensure it is relevant and
        accessible with an emphasis on responsive web design, customer journey
        mapping and strategic thinking
      </Para>
      <Ul
        list={[
          'Redesign for better user experience, keeping in mind the role the website plays in the purchase process. ',
          'Create a fully responsive website design.',
          'Develop or extend coherent branding that aligns with the company’s current and/or desired clientele and customer experience. ',
          'Add more unique or advanced features that would compel the customer to contact the company or make an order.',
        ]}
      />

      <Para>
        Must Haves:
        <Ul
          list={[
            'Clear product images and descriptions',
            'More organised layout with minimal use of icons',
            'Clear call to actions',
            'Responsive design',
          ]}
        />
      </Para>
    </ParaWithHeader>

    <ImageWrapper>
      <Para fontSize="md">BUSINESS MODEL CANVAS</Para>
      <Lightbox
        alt="business model canvas"
        src="/images/case-study/phoenix-business-model.jpg"
      />
    </ImageWrapper>

    <ParaWithHeader>
      <Para>
        I worked on creating a business model canvas in order to identify the
        company's goals, this would help in developing a better website that
        reflects their brand well.
      </Para>
    </ParaWithHeader>

    <ImageWrapper>
      <Para fontSize="md">SITEMAP</Para>
      <Lightbox alt="sitemap" src="/images/case-study/phoenix-sitemap.jpg" />
    </ImageWrapper>

    <ParaWithHeader>
      <Para>
        As this is an existing website, I worked on the company's current
        sitemap - including only necessary menu items and organizing the website
        layout better.
      </Para>
    </ParaWithHeader>
    <ImageWrapper>
      <Para fontSize="md">USER FLOW</Para>
      <Lightbox alt="sitemap" src="/images/case-study/phoenix-user-flow.jpg" />
    </ImageWrapper>

    <ParaWithHeader>
      <Para>
        Using the flow chart I have represented the task flow - how a user would
        find the website and search for the desired product
      </Para>
    </ParaWithHeader>
    <hr />

    <ParaWithHeader header="Phase 3: Design" large></ParaWithHeader>
    <ImageWrapper>
      <Para fontSize="md">WIREFRAMES</Para>
      <Lightbox src="/images/case-study/phoenix-1.png" />
    </ImageWrapper>

    <ParaWithHeader>
      Using the sitemap as a guide, I'd identified key pages that I would be
      designing for - keeping the navigation of the website simple. I began by
      creating lo-fidelity wireframes of the website on Figma in order to gain
      feedback from Phoenix's team and make changes as required. Receiving
      feedback was key as it allowed me to make iterations early on in the
      design process.
      <br />
      <br />
      Once the team was satisfied with the designs, I worked on a few
      explorations of how Phoenix could be expressed visually. It was also
      during this phase that the brand was given a modern, clean look.
    </ParaWithHeader>
    <ResponsiveGrid columns={2}>
      <ParaWithHeader header="The Objective">
        <Para>
          Re-design Phoenix’s exsisting webaite to ensure the website is modern
          and professional looking. The design must be intuitive and fully
          responsive.
        </Para>
      </ParaWithHeader>
      <ParaWithHeader header="The Solution">
        <Para>
          Employ better UX practices that would ensure that the layout of the
          website is clean and only necessary informatoin is presented. More
          emphasis on showcasing the brand’s products.
        </Para>
      </ParaWithHeader>
    </ResponsiveGrid>
    <ResponsiveGrid column={1} gridGap="md">
      <Lightbox src="/images/case-study/phoenix-2.png" />
      <Lightbox src="/images/case-study/phoenix-3.png" />
      <Lightbox src="/images/case-study/phoenix-4.png" />
      <Lightbox src="/images/case-study/phoenix-5.png" />
      <Lightbox src="/images/case-study/phoenix-6.png" />
    </ResponsiveGrid>
    <ParaCenter>
      As this is a redesign, I wanted to ensure that the layout is designed to
      tell the brand’s story efectively while incorporating some of the latest
      design techniques: making the overall website feel modern, high-tech and
      professional.
    </ParaCenter>
    <ResponsiveGrid column={1} gridGap="md">
      <Lightbox src="/images/case-study/phoenix-7.png" />

      <Lightbox src="/images/case-study/phoenix-8.png" />
    </ResponsiveGrid>

    <ParaCenter>
      I was asked to keep Phoenix’s brand color intact. I have therefore used
      the brand’s blue color for highlighting all call-to-action elements and
      icons on the website. The pill shaped call to action buttons mimic a warm
      and friendly yet professional tone.
    </ParaCenter>

    <FullWidthImg src="/images/case-study/phoenix-mockup.png" />
    <ParaCenter>
      I had to ensure that the look and feel of the website aligned with the
      brand’s identity and showcased their products effectively. I have designed
      the website with minimal text and elements that are spaced out well for a
      better organised layout.
    </ParaCenter>
    <Lightbox src="/images/case-study/phoenix-responsive.png" />

    <hr />
    <ParaWithHeader header="Phase 4: Test" large>
      <Para>
        Although I was unable to conduct usability tests due to the time
        constraint, I recieved constructive feedback from my client and made
        iterations to my design. Overall, I was able to design a minimal and
        professional looking website for the company and meet the expectations
        of the client. This design has only necessary text and showcases the
        company’s products in a better manner. The client found the flow of the
        website intuitive and believes the aligns with both the user goals and
        business goals.
      </Para>
    </ParaWithHeader>
  </CaseStudy>
)

export default Phoenix
