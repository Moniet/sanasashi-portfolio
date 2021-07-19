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

const StreamNet = () => (
  <CaseStudy
    metadata={[
      ['scope', '2 weeks'],
      ['project type', "project for designlab's ux academy"],
      ['tools used', 'figma, invision, typeform'],
    ]}
    header="Stream Net Medical Systems"
    introduction="StreamNet is an MVP for an app that primarily serves as a medium  for users to stream content from their favourite platforms while video conferencing with friends or family. The goal - a frictionless video streaming environment."
    description="App MVP design"
    projectBrief="The goal of this project is to create an app concept constrained to its minimum viable product (MVP)."
    whatIDid="I have chosen to develop an end to end  app that focuses on the topic of personal fulfillment and human interaction/ connection."
    tags={[
      'UX Research ',
      'Strategy and Design',
      'Branding',
      'Usability Testing',
    ]}
    nextCaseStudy={{
      href: '/case-studies/zoom',
      header: 'Zoom',
      categories: ['interaction design ', ' ui design'],
    }}
  >
    <ParaWithHeader header="Phase 1: Discover" large>
      <Para>
        With the rapid rise in users due to the continuing pandemic and people
        feeling disconnected and isolated as a result of months in lockdown,
        StreamNet would allow for users to stream content together while video
        conferencing. To further elevate the experience I will work on adding
        additional features to increase user engagement.
        <br />
        <br />
        As this is an MVP, it was important for me to conduct market research
        and user interviews in order to validate the market for a product like
        this.
      </Para>
    </ParaWithHeader>
    <ParaWithHeader header="Research">
      <Para>
        Goal: <br />
        Understand and learn how existing users stream content together while
        video conferencing on their mobile device and identify pain points in
        doing so, in order to create a more positive user experience overall.
      </Para>
      <Para mb={0}>
        Objectives: <br />
      </Para>
      <Ul
        list={[
          'Identify the target audience that would potentially use an app like this and how it would be beneficial to them. ',
          'Determine the expectations users have when using an app that allows both video conferencing and streaming together and how existing apps help them achieve or fail to achieve this. ',
          'Identify existing pain points when attempting to stream content together, either using an app that allows them to do so or through using a video conferencing app.',
          'Understand whether or not using an app like this will help users feel more connected with family and friends in the absence of social settings. ',
        ]}
      />
    </ParaWithHeader>

    <ImageWrapper>
      <ParaWithHeader header="User interviews">
        <Para>
          ESTABLISHING A FOUNDATIONAL UNDERSTANDING OF THE PROBLEM THROUGH USER
          INTERVIEWS
        </Para>
      </ParaWithHeader>
      <img src="/images/case-study/streamnet-user-interviews.jpg" />
    </ImageWrapper>

    <ParaWithHeader>
      <Para>
        For the purpose of this project, I carried out secondary research
        (competitor analysis) and conducted user interviews that helped me
        understand the current market for a product like this and identify
        existing user pain points and possible solutions to these.
      </Para>
      <Para>
        Participants: <br />
        Half of the users using video streaming apps in the US are aged 18 to 44
        years (55%), compared to just 27 percent of those aged 45 or above. Most
        streamers (65%) stream on their smartphone, with most 66%) owning
        Android phones. I therefore interviewed 4 Zoom users between the ages 18
        to 57.
      </Para>
    </ParaWithHeader>

    <ImageWrapper>
      <ParaWithHeader header="Comparative and Competitive research:">
        <Para>
          AS TO IDENTIFY THE STRENGTHS, WEAKENESSES AND OPPORUNITY AREAS OF THE
          CURRENT MARKET COMPETITIVE ANALYSIS WAS CARRIED OUT
        </Para>
      </ParaWithHeader>

      <Lightbox src="/images/case-study/streamnet-competitive.jpg" />
    </ImageWrapper>

    <ParaWithHeader>
      <Para>
        Competitive analysis was conducted to explore the current market
        solutions and to understand their strengths and weaknesses as well as
        any notable design decisions that were made.
        <br />
        <br />
        These market solutions were categorised by conventional
        (established) solutions and emerging (experimental/unpacked) as to
        explore as many ImageWrappererse approaches in the problem space.
        <br />
        <br />
        It came to to attention that there is a lack of solutions that
        effectively address the issue while being engaging and seamless.
      </Para>
      <Para>
        Motivations:
        <Ul
          list={[
            'A platform that allows video conferencing with friendsand family while streaming content across popular platforms.',
            'Easy to use app with simple onboarding.',
            'Streaming on different devices.',
          ]}
        />
      </Para>
      <Para>
        Needs:
        <br />
        <Ul
          list={[
            'To be able to stream from all popular video streaming platforms.',
            'All participants expressed their need for good video quality while streaming content with friends and family.',
            'Ability to connect with and invite friends with ease.',
          ]}
        />
      </Para>
      <Para>
        Frustrations:
        <Ul
          list={[
            'Poor-quality video.',
            'Not being able to stream from platform of choice.',
            'Not being able to stream from mobile device.',
            'Only chat function.',
            ,
          ]}
        />
      </Para>
    </ParaWithHeader>

    <ParaWithHeader header="How might we :">
      <Metadata
        metadata={[
          ['EFFECTIVELY INTRODUCE THIS PRODUCT AND BUILD USER INTEREST?', ''],
          [
            'ENSURE USERS WOULD PREFER TO USE THIS AS OPPOSED TO USING EXISTING STREAMING AND VIDEO CONFERENCING APPS? ',
            '',
          ],
          ['ADD VALUE TO ENSURE USER ENGAGEMENT? ', ''],
        ]}
      />
    </ParaWithHeader>

    <ParaWithHeader header="Phase 2: Define" large>
      <Para>
        A user persona was developed from the user research takeaways and
        validated assumptions to represent the user expectations. Referring back
        to this persona during the design process helped me stay aligned with
        user goals and reminded me of the key issues I had to address.
      </Para>
    </ParaWithHeader>

    <ImageWrapper>
      <Para fontSize="md">USER PERSONA</Para>
      <img src="/images/case-study/streamnet-user-persona.jpg" />
    </ImageWrapper>

    <ParaWithHeader>
      <Para>
        Next, it was important to identify and define how a user will interact
        with the app and how the app could be laid out. What screens are the
        most important? How information is organised on the home screen? How
        would users sign up and stream across different platforms? What makes
        sense and is the most helpful to people using this app?
      </Para>
    </ParaWithHeader>

    <ParaWithHeader header="Ideation">
      <Para>
        Through conducting user interviews I was able to identify features that
        would be most useful to include in the app - the primary focus: having a
        video conferencing function while streaming content from popular
        platforms. I therefore began sketching out StreamNet’s high level
        information architechture to put the must have features in context. The
        goal is a simple navigation with relevant content that will reduce
        information overload and enhance the user experience. I was able to
        sketch out solutions after identifying common UI patterns and
        interactions in similar apps.
      </Para>
      <Para>
        Must haves:
        <Ul
          list={[
            'Video conferencing functionality',
            'Content from all popular streaming platforms',
            'Intuitive layout and familiar icons',
            'Scheduling/ Joining watch parties',
          ]}
        />
      </Para>
      <Para>
        Product Roadmap: <br />
        Given the time constraints of the project, I had to decide (from my user
        research as well as understanding about video streaming platforms) what
        are the essential features that the app would need to have as an MVP:
        effectively addressing what problem I am trying to solve and how I plan
        on doing this.
      </Para>
    </ParaWithHeader>

    <ImageWrapper>
      <Para fontSize="md">USER FLOW</Para>
      <Lightbox
        alt="user-flow"
        src="/images/case-study/streamnet-user-flow.jpg"
      />
    </ImageWrapper>

    <ParaWithHeader>
      I developed the user flow for the sign up/sign in and group stream
      function.
    </ParaWithHeader>

    <ParaWithHeader header="Phase 3: Design" large>
      <Para>
        Having defined the overall solution architecture and key task flows,
        initial sketching took place to ideas through potential solutions. I
        developed lo-fidelity wireframes on Figma. This helped me visualise and
        build solutions for more concrete user flows.
      </Para>
    </ParaWithHeader>

    <ImageWrapper>
      <Para fontSize="md">WIREFRAMES</Para>
      <Lightbox
        alt="wireframe"
        src="/images/case-study/streamnet-wireframes.jpg"
      />
    </ImageWrapper>
    <ParaWithHeader>
      These wireframes were then converted into low fidelity prototypes in order
      to generate user feedback and test their effectiveness at solving user
      pain points and providing a consistent and efficient user experience.
    </ParaWithHeader>
    <ResponsiveGrid columns={2}>
      <ParaWithHeader header="The Objective">
        <Para>
          Develop an MVP for an app that allows streaming content from popular
          platform like Netflix, Prime Video, Hulu, etc while chatting/ video
          conferencing with friends and family.
        </Para>
      </ParaWithHeader>
      <ParaWithHeader header="The Solution">
        <Para>
          I designed an app with an easy to use interface that would allow
          streaming from popular platforms. The app serves two main functions -
          hosting watch parties or joining a party with a room code.
        </Para>
      </ParaWithHeader>
    </ResponsiveGrid>
    <ResponsiveGrid column={1} gridGap="md">
      <img src="/images/case-study/stream-net-1.png" />
      <img src="/images/case-study/stream-net-2.png" />
      <img src="/images/case-study/stream-net-3.png" />
      <img src="/images/case-study/stream-net-4.png" />
    </ResponsiveGrid>
    <ParaCenter>
      I built out the UI Design by first thinking about how the content from
      different platforms would be displayed, how the user would host a party
      and finally a way to curate a watch list.
    </ParaCenter>

    <img src="/images/case-study/stream-net-5.png" />
    <img src="/images/case-study/stream-net-6.png" />
    <img src="/images/case-study/stream-net-7.png" />

    <ParaCenter>
      In creating an identity for the solution, I set out to create something
      representative and functional but also easily memorable. Leveraging the
      primary brand colour of Red to enforce notions of energy and excitement,
      similar to when one is watching a movie. All important elements in the app
      are highlighted in red.
    </ParaCenter>

    <img src="/images/case-study/stream-net-8.png" />
    <ParaCenter>
      Discovery research and a clearly framed user problem statement took the
      forefront of my project - validating the need for a product like this. My
      hope through building this product is to help users better connect with
      friends and family by creating a more engaging virtual environment.
    </ParaCenter>

    <ParaWithHeader header="Phase 4: Test" large>
      During the testing phase, I first introduced the product to the
      participants and what it was trying to solve. I then asked the
      participants to carry out a few tasks using a prototype I created on
      Figma. In general, participants were able to complete the tasks with ease
      - signing up, hosting and joining a watch party and browsing through
      different platforms to find a movie. They were able to understand the
      information on the homepage at a glance and found the tone-of-voice warm
      and exciting.
      <br />
      <br />
      The main takeaway from this project was the importance of sufficient user
      research. This aided in empathising with the users I would be designing
      for and delivering a product that met their needs and expectations: making
      the process feel more tangible and like a real problem was being solved.
      <br />
      <br />
      As for the future, further exploration of the functionality is needed,
      continued refining of the user flow by further user testing would be of
      much benefit to improving the experience.
    </ParaWithHeader>
  </CaseStudy>
)

export default StreamNet
