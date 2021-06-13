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
      <Para>
        Methods: <br />I carried out secondary research (competitor analysis) by
        comparing features and designs of other Maternal and Neonatal companies
        to better understand what features Phoenix’s website must have, what
        would be nice to have, and what could set them apart from their
        competitors. Conducting user interviews and creating personas helped in
        identifying user frustrations. This aided in the development of a
        website that would address common painpoints and in turn have a better
        user experience.
      </Para>
      <Para>
        User: <br />
        We assume users belonging to the following categories in our target
        industry. • Hospitals (administration staff - both government and
        private) looking to purchase the product(s) in bulk. • Doctors that
        would like to enquire about the products and make a purchase. • Users
        looking to buy assistive devices.
      </Para>
      <Para>
        Brand Message: <br />
        People in the age group between 18-34 (demographic that shop online:
        statista.com) belonging to different backgrounds and with varied income.
      </Para>
      <Ul list={['Inviting', 'Trustworthy', 'Premium quality']} />
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
    </ParaWithHeaderLeft>

    <img src="https://s3-alpha-sig.figma.com/img/6e46/097c/d6adfc96e85e82526f05f780b5c1ef5c?Expires=1624233600&Signature=MEkAeQdCIR2mWrpIfIz2Hk9fBnwiNTMFdEL2rQeO3jToOtK4oWfO5Y5M4WTOKdon8nI-wLJnwbuHoI6TUvdEpSVRBvPun757R8cAukBCZAFWodVdtxwOPNLtJZMIfjNCbfcWjrqAgLQTOsUCpa2Rkvk7t6lQRNr~226eWWguSYBQLyHAqgn28c0KiBdYv7UFfDn~lAkYVGu5g01IotB1vwPN5iDfwo-lUbx2k6ReV7UwNKY6tlkJCb7t5pWYpKubxO-ondQpyT7LF5Ehqfb9Y8yTZA56Cym7EsdBareVqs0QTVmbUHD~hengnja59QebYranah8DPvLcuBrF7asprA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
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
      <img src="https://s3-alpha-sig.figma.com/img/c161/9f2d/556be6783052200f1ba3d3fa0b77730a?Expires=1624233600&Signature=UcUzW-MKlDscVIyP14k~AUyCzdmgJj79-GTY11OsANRn6DKPqIZikQ2KBVq~00xo86~gXAX-gcgExFi7j2Nh8DhoYgbD97Im~7heOX~qc4215WUCViycrSvsPP5OLT9gpDIibXcesOVtUIIw3QMMCcRjQNgvBCDjb0e4ylLXjESmDNMA7sC--jUBUMSLNncsm2KqeWj1M9RBj4fxd~UrC9KsKXom8tc6f7OuMTUOSVyKn6Oh7-sX8mmXj~jPqgjHAHAaTcwT4MbcvVpZEEnmKOOihHUaoyJ6cBErngmEyLRQNB21luumxedHyGrj~DUoUlEjLL4IQRezem8kb9eWTQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      <img src="https://s3-alpha-sig.figma.com/img/e693/32b4/d96639d040ea3ac706f5caa824875aa2?Expires=1624233600&Signature=OQUYicOE-rsMvEVyN66X0JKR1J0x0n-q-kMzZ4C4O~fqWRjr2VuDF7OfOik5VXD9gthakcc~R5Ut6K76OFP4BW9apYNrfcOZ71B4TTiIVDPCOrdKAbCUfDmhvjnCC4t3hwpFhAwA5krrBQSsQdyu7DrPrmlDs21t15lxlG5Zv7qqKTkqM8uOysUrORm5KGEw4buSKsFGK56bw2Iz7YcSQaabycTEcJvEM7sCaiBCDM5ZBYalRl8LeVr6azzj92B4emZ-A~sJiQS-hGCaElQIcauN90vyRU2uXOAGZhx87Zzh~6i8zMPS-N6D6U2sZLIuRwqk~nhBKuGJlVGEXV4ffw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      <img src="https://s3-alpha-sig.figma.com/img/f2a8/7c5c/77b495bdffa2c47557e4ab3d12257569?Expires=1624233600&Signature=bWUaiOeiWZJsLY0JBxpgbJOyJIy5FiPGkGn9r9~T8BAyC8lPorHnAdx5UWs2Zbo~EMa~QMXf4uYpa9YqSMtMP8AhpAUNl2l8rjiXuay6FF6-oVryIVJyKdjb1axClMcdCTHtsbGIa2rwBl3B4qOZ6N8-Y5MLK7Vo8FFSod4UiZ8Mg4z4KClpiBkP7B7Mh3V4NYXlyN56ZifTbP4qTeDaH89-RnEOaVq5D64ayo~xackV2sNT714Dq18CPOzSXlj-KaJ7ujMkDDYSZoxSHIGR7uzBKB6ledqvOv4LigM2UQt5XjTdahX4xeulpfUsU8C61-w2CQEAbuRelRzVcmytaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      <img src="https://s3-alpha-sig.figma.com/img/b44d/94f1/204ec964cc05d7e172d32f22a5ef8edf?Expires=1624233600&Signature=JduuXkQgQ7h3iAk2oS~iTuLz6z9kAiUAjd95v1iAzEp4gBZYI0lXkrejTF8NexvKdwKofsfWg7pMmlSGaQTtkjTyl~xkA3M~mtKnSFOXz26yAmFpI6rW8GzIzjZfZ0Vk0MW6pgvmBdMv208brSR432KgKRv8uu5ZQW5Qnci33kQ9xAUdll48yoG5MYoqT~Pm3NoSw3yUuSo7j41LvwJUFeSC9UsasZIbXYpYWU2UnsA1sREaA2nUqyciImJjFI0qdDl68VK8RHal2FQAb1rU52UOfMkCVBoND0RRQamAqo86eAIiYq9vVrpe~eQWHNs5Ej6Aaxdj7bYoG-2SqQ4Mrg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      <img src="https://s3-alpha-sig.figma.com/img/8291/7432/a4b9bcc97caf06d0740169a0f613384a?Expires=1624233600&Signature=FxLib8kFewOz9MFDhtiwnAWWoFPsnIiCBjGItxQ1LnN8scpiqp87-Em~VEbAeyXKJn6Hsrp0p3~ht8D7SzlntGpj0V~Sel0AjzBxSOYahqMZVqzlOuNRzaWUXfemiEw813suIS9542PcwA31oKnNnS-Zf5Iy9v8Okkb3KHIlQoHkmxSSQdZnsnVq9hqq-CCrLt8Fsq7U5GxDKtu63ZGrKrHcVN~GLqtH4eYBGfq2FCE6BvmghnG8a757uWWQQCd-mKiEc6O98IWGKG5m741ZY33v5gveYhzLIO6bw0epZkXKwgLQmkYqQR9nUwioTXLVdBxeizNw5L53lrbyl6xVDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
    </ResponsiveGrid>
    <ParaCenter>
      As this is a redesign, I wanted to ensure that the layout is designed to
      tell the brand’s story efectively while incorporating some of the latest
      design techniques: making the overall website feel modern, high-tech and
      professional.
    </ParaCenter>

    <img src="https://s3-alpha-sig.figma.com/img/1bda/736e/da1529a3ead649147dd1a83cac17d634?Expires=1624233600&Signature=H~xPsJ~qCZqba2DUNbVPxYfWvfGdTjYXAKjyIOdVQvd3F4xfdd-z8CNOaS8uBq~COePHalu9xaRT~MafYBxiLC~C4FKUuNQmO~5g-P0xKWkdp-yK79ZP5N~G0LcRyE6ea1TsRzgs5cGBxNjB8~ALhmFHrWVqckVLjWAR~B8tPvLZuZrF4gQFHqN5l9J1txFEzdyWGg7zTsvNtDvsS1zyM4276rnXBdGvUVX6Oltsf2lPxGje0cNcbOART6S17Df-eAXK~QVWVn3VnZLLgCqBCfh3v0ZouoLgASyp70y9HSd-ccYdku3DujlRa~BtL8KUELn1jiIkeWikd1evTGUltA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
    <img src="https://s3-alpha-sig.figma.com/img/4616/0715/67dcdfa04477d3d89894c0b7e8405d90?Expires=1624233600&Signature=ZFggSqy9BGASl8YR82eqRYOj9ry46TlxQ3juXtlCqASuRXAZ0OKx73Rpy2Te97w~~3b9WwP9zMWKZsYgSYyqbNEuN5lBEV8bTXi5b6oEHQf-1-rY5KrBss2SjFwurxAm~ujWxUZUMl6TCzKm~rh~JH-leot1DSGzgDwMh9WWWEpEE54pmDFdo0bEbAXY8enZzgOWwoP8vzlruOirn7lGG5hXHA0M~smbQoBgweQy2NOpQMS8kCjfjszWJGCvoTUYD8o0pmSvEGoEUcp3sIf7lrGiJojceCssjamoGxhH20h6xDaMgJSg22OfADUwJmmHWoGxjAvv8pYB-xQGHYOIsA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />

    <ParaCenter>
      A minimal layout with a combination of a serif font for headings and sans
      serif for body text convey a modern and luxurious look-and-feel. The use
      of minimal colors and large images also play a key role in achieving an
      overall clean, minimalist layout.
    </ParaCenter>

    <FullWidthImg src="/images/case-study/phoenix-mockup.png" />
    <ParaCenter>
      I had to ensure that the look and feel of the website aligned with the
      brand’s identity and showcased their products effectively. I have designed
      the website with minimal text and elements that are spaced out well for a
      better organised layout.
    </ParaCenter>
    <img src="/images/case-study/phoenix-responsive.png" />
    <ParaWithHeaderLeft header="Conclusion">
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
    </ParaWithHeaderLeft>
  </CaseStudy>
)

export default Phoenix
