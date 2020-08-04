import React from 'react'
import Navbar from '../components/navbar'
import Container from '../components/container'
import {Box, Spacer, Text, Center} from 'quantum-elements'
import {navigate} from 'gatsby'

function MissingPage() {
  return (
    <Box>
      <Navbar />
      <Spacer h={32} />
      <Container px={16} align="flex-start">
        <Text size={32} weight={600} family="heading">
          Page not found
        </Text>
        <Spacer h={24} />
        <Text size={16} lineHeight="150%">
          F#*k! That page doesn't seem to exist, or it was removed.
          <br />
          <br />
          Is this page supposed to be here? Please&nbsp;
          <a href="https://github.com/auderer/auderer.dev/issues/new" target="_blank">
            report it here!
          </a>
        </Text>
        <Spacer h={32} />
        <Center
          bg="primary" 
          px={8} 
          py={6} 
          radius={4} 
          shadow="0px 2px 4px rgba(0,0,0,20%)"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          <Text color="white" weight={500}>Go Home</Text>
        </Center>
      </Container>
    </Box>
  )
}

export default MissingPage
