import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Flex, Text, Spacer, useTheme } from 'quantum-elements'
import Navbar from '../components/navbar'
import Container from '../components/container'
import HeroImage from '../images/blueprint.jpg'
import NavLink from '../components/navlink'
import { lighten } from 'polished'
import { Helmet } from 'react-helmet'

export default function Home() {
  const theme = useTheme() 
  return (
    <Box>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Full-stack Web/Cloud Developer - Michael Auderer</title>
      </Helmet>
      <Navbar />
      <Container dir="row" justify="space-between" align="flex-start" mt={32} px={16}>
        <Flex align="flex-start">
          <Text color="#1a1a1a" mt={32} family="heading" size={42} weight="700" lineHeight="133%">
            Full-stack development<br />to complete your team.
          </Text>
          <Spacer h={24} />
          <Text size={16} color="#4a4a4a" lineHeight="180%" maxWidth={520}>
            Hey! I'm&nbsp;
            <Text color="primary" weight="bold">Michael Auderer</Text>
            , a full-stack developer from&nbsp;
            <Text color="primary" weight="bold">Tampa Bay, FL.</Text>
            I'm passionate about building&nbsp;
            <Text weight="bold">scalable </Text>
            products and services using the latest advancements in cloud technology.
            <br />
            <br />
            My skills include front-end web development, API service engineering, DevOps, product design, and project management.
          </Text>
          <Spacer h={32} />
          <Flex dir="row" align="center">
            <NavLink
              to="/contact"
              bg="primary"
              hoverBg={lighten(0.08, theme.colors.primary)}
              mx={0}
              shadow="0px 2px 4px rgba(0,0,0,20%)"
            >
              <Text family="heading" size={18} weight={500} color="white">
                GET IN TOUCH
              </Text>
            </NavLink>
            <NavLink to="/portfolio" text="VIEW MY WORK" />
          </Flex>
        </Flex>
        <img src={HeroImage} />
      </Container>
    </Box>
  )
}
