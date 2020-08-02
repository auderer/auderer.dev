import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Box, Text } from 'quantum-elements'
import Navbar from '../components/navbar'
import Container from '../components/container'

function HeroImage() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/hero.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Img fixed={data.file.childImageSharp.fixed} alt="blueprint" />
  )
}

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Container mt={32} px={16}>
        <Text family="heading" size={48} weight="700" lineHeight="133%">
          Full-stack solutions<br />to launch your business.
        </Text>
        <HeroImage />
      </Container>
    </Box>
  )
}
