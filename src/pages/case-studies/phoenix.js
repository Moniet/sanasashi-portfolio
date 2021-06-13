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

const Phoenix = () => (
  <CaseStudy
    header="Phoenix Medical Systems"
    description="Responsive Website re-design"
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
        User interviews: <br />I interviewed 4 participants to hear first hand
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
    <ParaWithHeaderLeft header="Ideation">
      <Para>
        Wireframes of the layout of the website after developing sitemaps and
        user flows. My ideas were solidified through user research and it
        allowed me to design a layout that would meet user expecttions and
        therefore alcasslow for a more positive shopping experience overall.
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
    <img src="/images/case-study/mirror-wireframe.png" />
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
      <img src="https://s3-alpha-sig.figma.com/img/985c/8620/b4c165ee627ea31b7315242bcfd53b25?Expires=1624233600&Signature=hAtpQQ1pZSIchuHhS6NSW~w-RnvuqOpfxwxs1g8wE1c8vk-gsPHMUvj-bs-~qlrxTH3ZyEgYJubW-KLE0SBN4HlbJVmLgICmrON5PZtdGcM9tv2IPk5zxQQ4dvBfDhRQzNH-seqlmL01miWTtrwXhoOj9D4zpiBt8t65jQ4TK9Fn-EJZ3Vz4A4odXhFIwWlhyelF20BftZIgOE6EYxEL3JLrGH-HT~FnWcDkmNu4hzUEros4LJ4IiRR610w4SHpRi9CMDNFdJhzH0C4oQn0QOlVTbIXJ4H4M3rZJm6ePNHV5jlba1O2ZNMP2hhyKHRuebSWh9pHACFzghENi441LcQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      <img src="https://s3-alpha-sig.figma.com/img/165d/4158/ed5c6f1c7aa3de4ac87d31d2f3cfc075?Expires=1624233600&Signature=ffAiIfgk-QvbID14MvfFjHslsq-fkMw9hHrgJJNDO7spqNjT9WTY0ttNJnxg~0zjnb9sG~8kNM53E-jzmhOjwDFLzqtGx3b54xBniREn6XAOVJRxXtCPhWv-ri5Rd2ljIrNqJ6FVGw8CYOvFjlNzdic3xPXeBVRxQ1WzkFMorl6Pg39LE0DX~DAvPbx4Jml2IslnfNke85Rn40PyCrj8a43J-iNCkEdEegHEm39-oe-mhkE-HjLHqMCZRWLYyFUOFhVNs8kJfW-mXTmw3OPNwWJkyaFSZs8PcACy41Q4TmajzLdjDdSlqZaHgNZkTnSlAzPdlEDuYpvwc1KpPfcZKg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      <img src="https://s3-alpha-sig.figma.com/img/32ea/bdfc/b4f767459c25d106087a013eed1d07b5?Expires=1624233600&Signature=TS0CWDuYvvNPxIESDdHsAs0wKuQgoD76uaZddPa0V9v1Sah3nBCcjlJI7naoSG655yZou1Ei62bN1IyLRYR6tnuk6dZbgAHCgsc2Qvqn9eBanBKAmA7h2pUCIhWFr-vem9UoyRbNWae~A9dI2gqusTe9n2xP~TO3bBdgev56qNuC22qZU6w~drpTyZwA9Oy2xVpzoeGecGK2gepSCpuNUkC4kNkILUIr1YyQCny0OxgLbkKFZkl7hdM9hnsEyjHrrpsDB2~jvtd3KtCcvb29kgeu93c-rIoaDCscYy0aQyBWFGv-IiTUSaTtBtR0-wOeYeaG0OVavMZrskBHhYYc6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      <img src="https://s3-alpha-sig.figma.com/img/6bfd/8d79/2462df3df20a1b5575292b040f554385?Expires=1624233600&Signature=XLABRzLj50j7Dg4JCRge3wBO1k8e1UNCiX2raUXRw0cTvK3PDTRnyx5QTFZMrXvorG0BitOCjgMUZwM6kGv5B4-rMHw-kSxwjljCokRfmH3LXt~6itdYTSnelCL1aUoQen3bCum5j3vEVn6LqI4AuBRKdNQUlkyNhJmU1LZDby-ICA2tY9YiqUAiCk1-T9tVEIxlaIIAD~SDVUHperJj3oc6YdPEcK33QIkzI6zb~npZs3-h1t2CwHNSySdrpAzgQXxBpVgyvvyWx~WvideAoMZNx8dJw6oCX~uH0gLy9tjgxGRU9aU1TaThEmiTJa22zOWsGL7ffqtzExsSIlMdcA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      <img src="https://s3-alpha-sig.figma.com/img/c215/96cd/ea0f4d8be0bf974111935a2f60450fe2?Expires=1624233600&Signature=de37QPe5R7PXBNxcES4Q1zF8Z5G1bWasaoKtJncZX~qt732J0ywWyx1VzEXFzbkMBihj7QF09o3XRRLAVxXaaJvNvkJCuCAVWYe8R90ltbU~LEMZBD4FH2Cz-1Gkrn9Jd01f65olnrKsdwzI3F2Efy7bUJvd5RBAO3400yKiyZvluAEN9hLiojHngQ5m7ExfqemQJTIQx99rESoCB2S3c8ynMoD1aSFyd2rQ1Sx4nbnKEZlOWsley4swZikzkjWpTOIofxmleJ0YZIYDFvDXZRkPeMwMwPf~qwzVSD~kIZIT88JdQvcf2dnW-hvpZwJP4gQNXue3BEiP29q5OCni5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
    </ResponsiveGrid>
    <ParaCenter>
      A minimal layout with a combination of a serif font for headings and sans
      serif for body text convey a modern and luxurious look-and-feel. The use
      of minimal colors and large images also play a key role in achieving an
      overall clean, minimalist layout.
    </ParaCenter>

    <img src="https://s3-alpha-sig.figma.com/img/a4e5/8c76/4a2bc29ccff53ac16e7d64aee2028588?Expires=1624233600&Signature=RvyYoP90swWbimHiSyTs5glpmBWZdOy88QyGEQCdFArhhT6~dFbxbDxidiV1Wli-jFBOOWkgosnpl84yITZdu-uBsjRa~SII99r5GFse1OFMp97CTAds5EO1i8fGh5Raucaa9YK1CGjWI3Uts9JnLm58t9u2R~rpj5dRSnU~NTY6nnDpf6SyfPbNbAQl9Gvq1sr0PELBAb1oSno7QKLl7osUwX0zrqCf44KhU6GWSzRBcvuSz0sCJhqNQYYWE8SGU5G2QGLdk0iuGumj4xafvtFzUbNvptr3-3Ww7XRnuidhFJ6EqSNFNOfSFkt5LAhh7OgW4rUfIGW9sL59ONvUgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
    <img src="https://s3-alpha-sig.figma.com/img/7410/2070/1a86118dd90ffc1cc122e1c70b69400a?Expires=1624233600&Signature=KMXp1EHQyN4gzs9-4AvgWRTa2bnowagPUF96HXnlbhQdBos179DpNNS5VFTpUfVRq5-r8YceYbsaklLFrykQ9WVgt~0L1hrPiJ9rkoqCPTMb8gEnt5IsAj88qZ18A06DTZSMysR6QbV1pPfEK-48K3PO8Issi5JkkTj-ISSnC0m2qJyX5~E9q3CXtMLUsqy4remJOvbNdFYX~q6INYbZz4kudNvd46udobEA9P2r8Y0nwa6MYqocK0yXg7~hGkm3DFQw2Itqy~4hGDOa8aLCL0o8jOGIy17UjXO6jCVTJ4L1DyUvatz32XlKmNF5qVQaw6MpWEEXJQagi1VKxWCK5w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />

    <ParaCenter>
      A minimal layout with a combination of a serif font for headings and sans
      serif for body text convey a modern and luxurious look-and-feel. The use
      of minimal colors and large images also play a key role in achieving an
      overall clean, minimalist layout.
    </ParaCenter>

    <FullWidthImg src="/images/case-study/mirror-mockup.png" />
    <ParaCenter>
      The website is designed to be responsive - ensuring the page is available
      and renders well on all devices. This ensures the brand can tap into the
      online e-ommerce market effectively.
    </ParaCenter>
    <img src="/images/case-study/mirror-responsive.png" />
    <ParaWithHeaderLeft header="Usability">
      The website is designed to be responsive - ensuring the page is available
      and renders well on all devices. This ensures the brand can tap into the
      online e-ommerce market effectively.
    </ParaWithHeaderLeft>
    <ParaWithHeaderLeft header="Conclusion">
      The website is designed to be responsive - ensuring the page is available
      and renders well on all devices. This ensures the brand can tap into the
      online e-ommerce market effectively.
    </ParaWithHeaderLeft>
  </CaseStudy>
)

export default Phoenix
