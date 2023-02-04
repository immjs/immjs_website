import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `immjs.dev`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/content/blog/`,
      name: `blog`,
    },
  },
  "gatsby-plugin-mdx",
  "gatsby-transformer-sharp",
  "gatsby-plugin-image"]
};

export default config;
