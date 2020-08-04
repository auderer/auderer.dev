import React from 'react'
import { Helmet } from 'react-helmet'
import { Box, Text, Center, Spacer } from 'quantum-elements'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import Navbar from '../components/navbar'
import Container from '../components/container'
import {graphql} from 'gatsby'

function Post({ data: { site, mdx } }) {
  const {
    title,
    author,
    date,
  } = mdx.fields

  return (
    <Box>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar />
      <Spacer h={32} />
      <Container>
        <article>
          <header>
            <Center>
              <Box width="100%" maxWidth={680} px={16}>
                <Text as="h1" size={40} weight={500} color="#2a2a2a">
                  {title}
                </Text>
              </Box>
            </Center>
          </header>
          <Spacer h={32} />
          <Center>
            <Box maxWidth={680} px={16}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </Box>
          </Center>
        </article>
      </Container>
    </Box>
  )
}

export default Post

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        title
        author
        date
      }
      body
    }
  }
`
