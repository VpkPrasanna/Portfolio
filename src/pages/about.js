import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Resuable/HeroSection"
import Infoblock from "../components/Resuable/Inflblock"
import Dualinfoblock from "../components/Resuable/DuaInfoBlock"
import Teamphotosec from "../components/About/Teamphotosec"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About LearnCodeOnline"
      subtitle=""
      heroclass="about-background"
    />
    <Dualinfoblock heading="A message from CEO" />
    <Infoblock heading="About our Vision" />
    <Teamphotosec />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
