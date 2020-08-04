const { createFilePath } = require('gatsby-source-filesystem')
const isEmpty = require('lodash/isEmpty')
const path = require('path')

const PAGINATION_OFFSET = 7

function createPosts(createPage, createRedirect, edges) {
  edges.forEach(({ node }, i) => {
    const prev = i === 0 ? null : edges[i - 1].node
    const next = i === edges.length - 1 ? null : edges[i + 1].node
    const pagePath = node.fields.slug

    if (node.fields.redirects) {
      for (const fromPath of node.fields.redirects) {
        createRedirect({
          fromPath,
          toPath: pagePath,
          redirectInBrowser: true,
          isPermanent: true,
        })
      }
    }

    createPage({
      path: pagePath,
      component: path.resolve('./src/templates/post.jsx'),
      context: {
        id: node.id,
        prev,
        next,
      },
    })
  })
}

function createBlogPages({ data, actions }) {
  if (isEmpty(data.edges)) {
    throw new Error('There are no posts!')
  }

  const { edges } = data
  const { createRedirect, createPage } = actions

  createPosts(createPage, createRedirect, edges)
}

exports.createPages = async ({ actions, graphql }) => {
  const { data, errors } = await graphql(`
    fragment PostDetails on Mdx {
      fileAbsolutePath
      id
      parent {
        ... on File {
          name
          sourceInstanceName
        }
      }
      excerpt(pruneLength: 250)
      fields {
        title
        slug
        description
        date
        redirects
      }
    }
    query {
      blog: allMdx(
        filter: {
          frontmatter: { published: { ne: false } }
          fileAbsolutePath: { regex: "//content/blog//" }
        }
        sort: {
          order: DESC
          fields: [frontmatter___date]
        }
      ) {
        edges {
          node {
            ...PostDetails
          }
        }
      }
    }
  `)

  if (errors) {
    return Promise.reject(errors)
  }

  const { blog } = data

  createBlogPages({
    data: blog,
    actions,
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: 'slug',
      value: `/blog${value}`,
    })

    createNodeField({
      node,
      name: 'id',
      value: node.id,
    })

    createNodeField({
      node,
      name: 'title',
      value: node.frontmatter.title,
    })

    createNodeField({
      node,
      name: 'description',
      value: node.frontmatter.description,
    })

    createNodeField({
      node,
      name: 'author',
      value: node.frontmatter.author || 'Michael Auderer',
    })

    createNodeField({
      node,
      name: 'published',
      value: node.frontmatter.published,
    })

    createNodeField({
      node,
      name: 'date',
      value: node.frontmatter.date ? node.frontmatter.date.split(' ')[0] : '',
    })

    createNodeField({
      node,
      name: 'categories',
      value: node.frontmatter.categories || [],
    })

    createNodeField({
      node,
      name: 'redirects',
      value: node.frontmatter.redirects || [],
    })

    const editPath = node.fileAbsolutePath.replace(__dirname, '')

    createNodeField({
      node,
      name: 'editLink',
      value: `https://github.com/auderer/auderer.dev/edit/master${editPath}`,
    })
  }
}

