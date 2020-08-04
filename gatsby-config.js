module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-native-web',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/templates/post.jsx'),
        }
      },
    },
	{
	  resolve: 'gatsby-source-filesystem',
	  options: {
        name: 'blog',
        path: `${__dirname}/content/blog`,
      },
    },
  ],
}
