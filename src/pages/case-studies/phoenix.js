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
    </ParaWithHeaderLeft>

    <img src="/images/case-study/phoenix-nadia.png" />

    <ParaWithHeaderLeft>
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
        Users: <br />
        We assume users belonging to the following categories in our target
        industry.
        <Ul
          list={[
            'Hospitals (administration staff - both government and private) looking to purchase the product(s) in bulk.',
            'Doctors that would like to enquire about the products and make a purchase.',
            'Users looking to buy assistive devices.',
          ]}
        />
      </Para>
      <Para>
        Brand Message:
        <Ul list={['Inviting', 'Trustworthy', 'Premium quality']} />
      </Para>
    </ParaWithHeaderLeft>

    <img src="/images/case-study/phoenix-testimonials.png" />
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

    <img src="/images/case-study/phoenix-1.png" />
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

    <img src="/images/case-study/phoenix-7.png"/>
    <img src="/images/case-study/phoenix-8.png"/>
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
