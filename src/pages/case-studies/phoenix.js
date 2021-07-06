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
import Grid from '../../components/helpers/Grid'

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

    <ParaWithHeaderLeft header="Research">
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
    </ParaWithHeaderLeft>

    <div>
      <Para fontSize="md">INTERVIEWS</Para>
      <img
        alt=""
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a6a14b90-3a8e-44e7-ab1f-6fd034fe5b29/Phoenix_user_interview.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210706T120441Z&X-Amz-Expires=86400&X-Amz-Signature=21184cc7a25ac8b3c7f436917a477f8b8c1f93d8add09d58126054114d6f97aa&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Phoenix_user_interview.jpg%22"
      />
    </div>

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

    <ParaWithHeaderLeft header="Comparative and Competitive research:">
      AS TO DISCOVER THE STRENGTHS, WEAKENESSES AND OPPORUNITY AREAS OF THE
      CURRENT MARKET OFFERINGS COMPETITIVE ANALYSIS WAS CARRIED OUT
    </ParaWithHeaderLeft>

    <img
      alt=""
      src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7314b7a9-688d-4ea6-8063-ef61736e4855/Phoenix_competitive.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210706T121122Z&X-Amz-Expires=86400&X-Amz-Signature=305217f73fa996202cccbd0004282cb08e2666eea10a15dee8dc81756b34a718&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Phoenix_competitive.jpg%22"
    />

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

    <ParaWithHeader header="How might we :" width="100%">
      <Metadata
        metadata={[
          ['LEVERAGE AN ONLINE PLATFORM TO ATTRACT USERS AND DRIVE SALES?', ''],
          ['ENSURE USERS BUILD TRUST IN THE BRAND? ', ''],
          [
            'MAKE USERS FEEL THAT THEY HAVE ALL THE INFORMATION THEY NEED ON THE WEBSITE TO MAKE A PURCHSE DECISION? ',
            '',
          ],
        ]}
      />
    </ParaWithHeader>

    <ParaWithHeader header="Phase 2: Define" large>
      <Para>
        Based on existing user pain points and in order to better represent and
        empathise with the target users, a user persona was created. Being aware
        of goals, expectations and frustrations of users helped ensure that
        informed design decisions are made that align with user goals.
      </Para>
    </ParaWithHeader>
    <div>
      <Para fontSize="md">USER PERSONA</Para>
      <img src="/images/case-study/phoenix-nadia.png" />
    </div>
    <ParaWithHeaderLeft>
      <Para>
        During this phase of the design process, a sitemap was created and user
        flows were determined, again informed by research and in constant
        reference to the user persona.
      </Para>
    </ParaWithHeaderLeft>
    <ParaWithHeaderLeft header="Ideation">
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
    </ParaWithHeaderLeft>

    <div>
      <Para fontSize="md">BUSINESS MODEL CANVAS</Para>
      <img
        alt="business model canvas"
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/18eca94b-acde-4ebe-9080-9159493a2051/Phoenix_business_model_canvas.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210706T122503Z&X-Amz-Expires=86400&X-Amz-Signature=25151ce150d729309589a1f7332af0f60a3a1587ad00a4e99da13fcc692baee8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Phoenix_business_model_canvas.jpg%22"
      />
    </div>

    <ParaWithHeader>
      <Para>
        I worked on creating a business model canvas in order to identify the
        company's goals, this would help in developing a better website that
        reflects their brand well.
      </Para>
    </ParaWithHeader>

    <div>
      <Para fontSize="md">SITEMAP</Para>
      <img
        alt="sitemap"
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f15104ee-f510-41d1-93bf-228c725d9904/Phoenix_sitemap.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210706T122545Z&X-Amz-Expires=86400&X-Amz-Signature=301ef248034a38184a87ee66783221ce5d3c96043258183e8a0c40a66bba0044&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Phoenix_sitemap.jpg%22"
      />
    </div>

    <ParaWithHeader>
      <Para>
        As this is an existing website, I worked on the company's current
        sitemap - including only necessary menu items and organizing the website
        layout better.
      </Para>
    </ParaWithHeader>
    <div>
      <Para fontSize="md">USER FLOW</Para>
      <img
        alt="sitemap"
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/130bc324-c420-4650-80f8-b9d574c7e0bd/Phoenix_task_flow.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210706T122647Z&X-Amz-Expires=86400&X-Amz-Signature=e29a2d45603b72a53f26cf9c1d48a8936927d00de90d2d085e11c9d75f67af6e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Phoenix_task_flow.jpg%22"
      />
    </div>

    <ParaWithHeader>
      <Para>
        Using the flow chart I have represented the task flow - how a user would
        find the website and search for the desired product
      </Para>
    </ParaWithHeader>
    <hr />

    <ParaWithHeader header="Phase 3: Design" large></ParaWithHeader>
    <div>
      <Para fontSize="md">WIREFRAMES</Para>
      <img src="/images/case-study/phoenix-1.png" />
    </div>

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
      <img src="/images/case-study/phoenix-2.png" />
      <img src="/images/case-study/phoenix-3.png" />
      <img src="/images/case-study/phoenix-4.png" />
      <img src="/images/case-study/phoenix-5.png" />
      <img src="/images/case-study/phoenix-6.png" />
    </ResponsiveGrid>
    <ParaCenter>
      As this is a redesign, I wanted to ensure that the layout is designed to
      tell the brand’s story efectively while incorporating some of the latest
      design techniques: making the overall website feel modern, high-tech and
      professional.
    </ParaCenter>

    <img src="/images/case-study/phoenix-7.png" />
    <img src="/images/case-study/phoenix-8.png" />
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
    <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c972bd4b-cb02-4601-95f9-e3318e4a1855/Responsive_phoenix.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210706T123739Z&X-Amz-Expires=86400&X-Amz-Signature=5cb45165374bf76a48517399fbd44fb28883af24c5605d52b2ee20a3b6a4d6eb&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Responsive_phoenix.jpg%22" />

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
