import CaseStudy, {
  FullWidthImg,
  Para,
  ParaWithHeader,
  ParaCenter,
  ParaWithHeaderLeft,
  ResponsiveGrid,
  Ul,
} from '../../components/design-system/CaseStudy'
import Grid from '../../components/helpers/Grid'

const StreamNet = () => (
  <CaseStudy
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
    <ParaWithHeaderLeft header="Research">
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
      <Para>
        Methods: <br />
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
        Android phones.
      </Para>
      <Para>
        With the rapid rise in users due to the continuing pandemic and people
        feeling disconnected and isolated as a result of months in lockdown,
        StreamNet would allow for users to stream content together while video
        conferencing. To further elevate the experience I will work on adding
        additional features to increase user engagement.
      </Para>
    </ParaWithHeaderLeft>
    <ParaWithHeaderLeft header="Ideation">
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
    </ParaWithHeaderLeft>

    <img src="/images/case-study/stream-net-wireframe.png" />
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
      I chose a shade of red to highlight all important elements in the app as
      it is associated with feelings of excitement and energy much like when one
      is watching a movie. As for the logo, I wanted to keep it simple and easy
      to remember.
    </ParaCenter>

    <img src="/images/case-study/stream-net-8.png" />
    <ParaCenter>
      The website is designed to be responsive - ensuring the page is available
      and renders well on all devices. This ensures the brand can tap into the
      online e-ommerce market effectively.
    </ParaCenter>
  </CaseStudy>
)

export default StreamNet
