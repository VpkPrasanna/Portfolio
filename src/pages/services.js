import React from "react"
import HeroSection from "../components/Resuable/HeroSection"
import Layout from "../components/layout"
import Infoblock from "../components/Resuable/Inflblock"

export default function services({ data }) {
  return (
    <Layout>
      <HeroSection
        img={data.img.childImageSharp.fluid}
        title="About service section"
        subtitle=""
        heroclass="about-background"
      />
      <Infoblock heading="This about the service section" />
    </Layout>
  )
}

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
