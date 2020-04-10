import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Resuable/HeroSection"
import Infoblock from "../components/Resuable/Inflblock"
import Contact from "../components/contact/Contact"


const ContactPage = ({data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img = {data.img.childImageSharp.fluid}
      title = "Contact Us"
      subtitle = ""
    heroclass ="about-background"/>
    <Contact/>
    <Infoblock heading = "How can we help"/>
  </Layout>
)


export const query = graphql`
{
  img: file(relativePath: { eq: "contact.png" }) {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 250) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  mycourses: allContentfulCourses {
    edges {
      node {
        id
        title
        description
        price
        category
        image {
          fixed(width:200,height:120) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}`

export default ContactPage
