import CaseStudy, {
  FullWidthImg,
  Para,
  ParaWithHeader,
  ParaCenter,
  ParaWithHeaderLeft,
  ResponsiveGrid,
  Ul,
} from '../../components/design-system/CaseStudy'

const Zoom = () => (
  <CaseStudy
    header="Zoom:"
    description="Add a feautre to an existing app"
    introduction="Zoom Video Communications, Inc. (or Zoom) is an American communications technology company. It provides video call and online chat services through a cloud-based peer-to-peer software platform. "
    projectBrief="Zoom an established, successful video conferencing app wishes to add a feature to help organise invites/meeting links within the mobile app and help reduce clutter."
    whatIDid="Given the project brief I worked on developing a more positive user experience through developing an additional calendar feature in the app. "
    tags={['UX Research ', 'Strategy and Design', 'UI Design']}
    nextCaseStudy={{
      href: '/case-studies/mirror',
      header: 'Mirror',
      categories: ['interaction design ', ' ui design'],
    }}
  >
    <ParaWithHeaderLeft header="Research">
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
      <Para>
        Methods: <br />I carried out secondary research (competitor analysis) to
        identify video conferencing apps with similar features and conducted
        user interviews that helped me understand the current market for a
        product like this and identify existing user pain points and possible
        solutions to these.
      </Para>
      <Para>
        Participants: <br />
        Zoom app users tend to be relatively young. Half of the users of the
        Zoom Cloud Meetings app for iPhone &amp; iPad are under 35 years old,
        with the largest percentage of users belonging to the age group 18-27
        (iOS).
      </Para>
      <Para>
        With their current design an email is sent to users (can be hard to
        search for) to view invite and these invites are linked with calendar
        apps on the user’s device (can be hard to keep up with). I therefore,
        worked on adding a calenar feature to the app that would help organise
        invites/meeting links within the mobile app and help reduce clutter. To
        further elevate the experience users can collaborate on their calendars
        and schedule meetings with ease.
      </Para>
    </ParaWithHeaderLeft>
    <ParaWithHeaderLeft header="Ideation">
      <Para>
        Since I was working with an existing information architecture I worked
        on thinking of ways to seamlessy integrate the feature while maintaining
        the brand’s identity. I began by sketching out lo-fidelity wireframes to
        identify where the feature would fit in and then developed a user flow
        to test the feasability of the structure. I mapped out three different
        user flows for the different functions within the calendar feature:
        accessing meeting invites, scheduling meetings and creating a poll for
        meetings.
      </Para>
    </ParaWithHeaderLeft>

    <img src="/images/case-study/zoom-1.png" />
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
    </ResponsiveGrid>
    <ParaCenter>
      Since the goal was to semalessly add a feature, it was important that I
      understood the existing sitemap for the app. I had to determine where my
      new feature would make the most sense within the given framework.
    </ParaCenter>

    <img src="/images/case-study/stream-net-5.png" />
    <img src="/images/case-study/stream-net-6.png" />
    <img src="/images/case-study/stream-net-7.png" />

    <ParaCenter>
      The feature that I had settled upon based off user needs was implementing
      a calendar. This feature would cover two other aspects - I had to map out
      how users could schedule a meeting and create a poll and also wanted to
      establish what it would be like to receive a poll request.
    </ParaCenter>

    <img src="/images/case-study/stream-net-8.png" />
    <ParaCenter>
      Working on this project taught me how to work within the constraints of an
      existing product and use existing design systems. I had to ensure I design
      a feature that fits into these conventions, without hurting the usability.
    </ParaCenter>
  </CaseStudy>
)

export default Zoom
