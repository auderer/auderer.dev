module.exports = {
  plugins: [
    'gatsby-plugin-react-native-web',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
  ],
}
