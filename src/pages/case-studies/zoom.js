import CaseStudy, {
  FullWidthImg,
  Para,
  ParaWithHeader,
  ParaCenter,
  ResponsiveGrid,
  Ul,
  ImageWrapper,
} from '../../components/design-system/CaseStudy'
import Lightbox from '../../components/helpers/Lightbox'

const Zoom = () => (
  <CaseStudy
    header="Zoom"
    description="Add a feature to an existing app"
    introduction="Zoom Video Communications, Inc. (or Zoom) is an American communications technology company. It provides video call and online chat services through a cloud-based peer-to-peer software platform. "
    projectBrief="Zoom an established, successful video conferencing app wishes to add a feature to help organise invites/meeting links within the mobile app and help reduce clutter."
    whatIDid="Given the project brief I worked on developing a more positive user experience through developing an additional calendar feature in the app. "
    tags={['UX Research ', 'Strategy and Design', 'UI Design']}
    metadata={[
      ['scope', '2 weeks'],
      ['project type', "project for designlab's ux academy"],
      ['tools used', 'figma'],
    ]}
    nextCaseStudy={{
      href: '/case-studies/mirror',
      header: 'Mirror',
      categories: ['interaction design ', ' ui design'],
    }}
  >
    <ParaWithHeader header="Phase 1: Discover" large>
      <Para>
        With Zoom's current design an email is sent to users (can be hard to
        search for) to view invite and these invites are linked with calendar
        apps on the user’s device (can be hard to keep up with).
        <br />
        <br />I therefore, worked on adding a calendar feature to the app that
        would help organise invites/meeting links within the mobile app and help
        reduce clutter. To further elevate the experience users can collaborate
        on their calendars and schedule meetings with ease.
      </Para>
    </ParaWithHeader>

    <ParaWithHeader header="Research">
      <Para>
        Goal: <br />
        Understand and learn how existing users look for and/or organise their
        meeting invites on their mobile device and identify pain points in doing
        so, so that we can create a more positive user experience overall.
      </Para>
      <Para mb={0}>
        Objectives: <br />
      </Para>
      <Ul
        list={[
          'Determine who uses the app (target audience), when and how often people use it and what tasks are they usually trying to fulfill. ',
          'Identify existing pain points when a user is scheduling a meeting.',
          'Determine how the user currently looks for and sends/shares files using their mobile app during a meeting or a class. ',
          'Understand whether or not Zoom affects users adversely and if yes, how (Validate ‘Zoom Fatigue’)',
        ]}
      />
    </ParaWithHeader>

    <ImageWrapper>
      <ParaWithHeader header="User Interviews:">
        ESTABLISHING A FOUNDATIONAL UNDERSTANDING OF THE PROBLEM THROUGH USER
        INTERVIEWS
      </ParaWithHeader>
      <img src="/images/case-study/zoom_user_interview.jpg" />
    </ImageWrapper>

    <ParaWithHeader>
      <Para>
        I carried out secondary research (competitor analysis) to identify video
        conferencing apps with similar features and conducted user interviews
        that helped me understand the current market for a product like this and
        identify existing user pain points and possible solutions to these.
        <br />
        <br />
        Creating personas helped in identifying user frustrations. This aided in
        the development of a website that would address common pain-points and
        in turn have a better user experience.
      </Para>
      <Para>
        Participants:
        <br />
        Zoom app users tend to be relatively young. Half of the users of the
        Zoom Cloud Meetings app for iPhone &amp; iPad are under 35 years old,
        with the largest percentage of users belonging to the age group 18-27
        (iOS).
      </Para>
    </ParaWithHeader>

    <ImageWrapper>
      <ParaWithHeader header=" Comparative and Competitive research:">
        <Para>
          AS TO DISCOVER THE STRENGTHS, WEAKENESSES AND OPPORUNITY AREAS OF THE
          CURRENT MARKET OFFERINGS COMPETITIVE ANALYSIS WAS CARRIED OUT
        </Para>
      </ParaWithHeader>
      <Lightbox
        alt="competitive analysis"
        src="/images/case-study/zoom_competitive.jpg"
      />
    </ImageWrapper>

    <ParaWithHeader>
      I carried out secondary research (competitor analysis) in order to
      identify strengths and weaknesses of other popular video conferencing
      apps. This then helped me identify a feature apart from the calendar
      feature that I could add to zoom that would add value.
    </ParaWithHeader>

    <hr />

    <ParaWithHeader header="Phase 2: Define" large>
      In order to better validate the need for a feature like this and empatise
      with the target users, I created a user persona with the user expectations
      and pain points.
    </ParaWithHeader>

    <ImageWrapper>
      <Para fontSize="md">USER PERSONA</Para>
      <img src="/images/case-study/zoom_persona.jpg" />
    </ImageWrapper>

    <ParaWithHeader>
      <Para>
        Based on the developing understanding of the target users via the data
        parsed from the preliminary survey and user interviews, a user persona
        was created. This aimed at sufficiently representing the
        ImageWrappererse range of users and their potential needs.
      </Para>
    </ParaWithHeader>
    <ParaWithHeader header="Ideation">
      <Para>
        Since I was working with an existing information architecture I worked
        on thinking of ways to seamlessly integrate the feature while
        maintaining the brand’s identity. I began by sketching out lo-fidelity
        wireframes to identify where the feature would fit in and then developed
        a user flow to test the feasibility of the structure.
      </Para>
      <Ul
        list={[
          'Design a calendar feature for users to access and organise all their Zoom meeting invites in one place.',
          'Work with existing information architecture and seamlessly integrate feature within the Zoom App.',
          'Add poll feature for meeting participants to select a convenient time (to make scheduling calls easier',
        ]}
      />
    </ParaWithHeader>

    <ImageWrapper>
      <Para fontSize="md">USER FLOW</Para>
      <Lightbox src="/images/case-study/zoom_user_flow.jpg" />
    </ImageWrapper>

    <ParaWithHeader>
      <Para>
        Based on the feedback received from user testing, I mapped out three
        different user flows for the different functions within the calendar
        feature: accessing meeting invites, scheduling meetings and creating a
        poll for meetings. Taking this into account, the user flow was updated
        to accommodate these two contexts.
      </Para>
    </ParaWithHeader>

    <hr />

    <ParaWithHeader header="Phase 3: Design" large>
      <Para>
        The below lo-fidelity wireframes implemented the proposed structural
        hierarchy and solutions explored in the initial sketches according to
        the existing user flows.
      </Para>
    </ParaWithHeader>
    <ImageWrapper style={{ marginTop: '2rem' }}>
      <Para fontSize="md">WIREFRAMES</Para>
      <img src="/images/case-study/zoom_wireframes.jpg" />
    </ImageWrapper>

    <ResponsiveGrid columns={2}>
      <ParaWithHeader header="The Objective">
        <Para>
          Add a feature to Zoom’s app using the existing architecture to help
          organise meeting invites better and help reduce clutter in user’s
          emails and linked calendars.
        </Para>
      </ParaWithHeader>
      <ParaWithHeader header="The Solution">
        <Para>
          I worked on developing a calendar feature for the Zoom app. Users
          would be able to find all their meeting invites here. To further
          elavate the experience I added a poll feature that would make it easy
          to organise meetings for large groups.
        </Para>
      </ParaWithHeader>
    </ResponsiveGrid>
    <ResponsiveGrid column={1} gridGap="md">
      <img src="/images/case-study/zoom-2.png" />
      <img src="/images/case-study/zoom-3.png" />
      <img src="/images/case-study/zoom-4.png" />
      <img src="/images/case-study/zoom-5.png" />
    </ResponsiveGrid>
    <ParaCenter>
      Since the goal was to semalessly add a feature, it was important that I
      understood the existing sitemap for the app. I had to determine where my
      new feature would make the most sense within the given framework.
    </ParaCenter>

    <img src="/images/case-study/zoom-6.png" />
    <img src="/images/case-study/zoom-7.png" />

    <ParaCenter>
      The feature that I had settled upon based off user needs was implementing
      a calendar. This feature would cover two other aspects - I had to map out
      how users could schedule a meeting and create a poll and also wanted to
      establish what it would be like to receive a poll request.
    </ParaCenter>
    <img src="/images/case-study/zoom-8.png" />

    <ParaCenter>
      Working on this project taught me how to work within the constraints of an
      existing product and use existing design systems. I had to ensure I design
      a feature that fits into these conventions, without hurting the usability.
    </ParaCenter>

    <hr />

    <ParaWithHeader header="Phase 4: Test" large>
      <Para>
        Through creating a high fidelity prototype on Figma, I conducted in
        person usability tests with 4 participants that were asked to carry out
        a series of tasks.
        <br />
        <br />
        All participants found the calendar feature helpful as it would help
        reduce clutter and make it quick and easy to look for meeting invites.
        Participants found this especially helpful with the ongoing pandemic and
        an increase in use of video conferencing apps.
        <br />
        <br />I had to identify a feature that would be useful to add while
        testing and validating my assumptions through user interviews. Since
        Zoom is an existing and familiar product, gaining insight through user
        interviews helped in identifying what problems users need solved and how
        to best solve them.
      </Para>
    </ParaWithHeader>
  </CaseStudy>
)

export default Zoom
