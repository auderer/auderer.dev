import React from 'react'
import Navbar from '../components/navbar'
import Container from '../components/container'
import {Box, Spacer, Text, Center} from 'quantum-elements'

function MissingPage() {
  return (
    <Box>
      <Navbar />
      <Spacer h={32} />
      <Container px={16} align="flex-start">
        <Text size={32} weight={500}>
          Page not found
        </Text>
        <Spacer h={32} />
        <Text size={16} lineHeight="150%">
          F#*k! That page doesn't seem to exist, or it was removed.
          <br />
          <br />
          Is this page supposed to be here? Please&nbsp;
          <a href="https://github.com/auderer/auderer.dev/issues/new" target="_blank">
            report it here!
          </a>
          <br />
          <br />
        </Text>
        <Center
          bg="primary" 
          px={8} 
          py={6} 
          radius={4} 
          style={{ cursor: 'pointer' }}
          onClick={() => window.history.back()}
        >
          <Text color="white" weight={500}>Go Back</Text>
        </Center>
      </Container>
    </Box>
  )
}

export default MissingPage
