import React from 'react'
import { graphql, navigate } from 'gatsby'
import { Box, Flex, Text, Spacer, Center } from 'quantum-elements'
import Navbar from '../../components/navbar'
import Container from '../../components/container'

function BlogIndex({ data }) {
  const { edges: posts } = data.allMdx
  return (
    <Box>
      <Navbar />
      <Spacer h={16} />
      <Container>
        <Center>
          <Text size={32} weight={600}>Blog Posts</Text>
        </Center>
        <Spacer h={48} />
        {posts.map(({ node }) => {
          const { title, author, description } = node.frontmatter
          return (
            <Box
              key={node.id}
              px={16}
              py={20}
              w={300}
              radius={6}
              shadow="0px 2px 4px rgba(0,0,0,40%)"
            >
              <Text weight={600} size={24} mb={2}>
                {title}
              </Text>
              <Spacer h={16} />
              <Text size={16} lineHeight="110%">
                {description}
              </Text>
              <Spacer h={16} />
              <Center 
                display="inline-flex"
                bg="#1a1a1a"
                radius={4}
                px={8}
                h={32}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(node.fields.slug)}
              >
                <Text color="white" style={{ textDecoration: 'none' }}>
                  View Article
                </Text>
              </Center>
            </Box>
          )
        })}
      </Container>
    </Box>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query blogIndex {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: { published: { ne: false } }
        fileAbsolutePath: { regex: "//content/blog//" }
      }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            author
            description
          }
        }
      }
    }
  }
`

