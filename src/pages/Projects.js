import React from "react"
import HeroSection from "../components/Resuable/HeroSection"
import Layout from "../components/layout"
// import Infoblock from "../components/Resuable/Inflblock"
// import TeamPhotoSec from "../components/About/Teamphotosec"
import Projectssection from "../components/projects/Projectssection"

export default function Projects({ data }) {
  return (
    <Layout>
      <HeroSection
        img={data.img.childImageSharp.fluid}
        title="About Project section"
        subtitle=""
        heroclass="about-background"
      />
      {/* <Infoblock heading="This about the Project section" /> */}
      {/* <TeamPhotoSec /> */}
      <Projectssection/>
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
