import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Resuable/HeroSection"
// import Dualinfoblock from "../components/Resuable/DuaInfoBlock"

const IndexPage = ({data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img = {data.img.childImageSharp.fluid}
      title = "I Write Code"
      subtitle = "NLP Engineer"
    heroclass ="hero-background"/>
    {/* <Infoblock heading = "About Us"/> */}
    {/* <Coursecart courses = {data.mycourses} /> */}
    {/* <Dualinfoblock heading="Our Team" /> */}
  </Layout>
)


export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png" }) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  // mycourses: allContentfulCourses {
  //   edges {
  //     node {
  //       id
  //       title
  //       description
  //       price
  //       category
  //       image {
  //         fixed(width:200,height:120) {
  //           ...GatsbyContentfulFixed_tracedSVG
  //         }
  //       }
  //     }
  //   }
  // }
}`

export default IndexPage
