// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [{
    use: '@gridsome/source-filesystem',
      options: {
        path: 'content/blog/*.md',
        typeName: 'Post',
        route: "/blog/:path",
        // refs: {
        //   // Add a reference to Author GraphQL collection
        //   author: 'Author',
        //   // Add a reference to Tag GraphQL collection
        //   tags: 'Tag'

        //   // Auto create a collection for all categories
        //   // categories: {
        //   //   typeName: 'Categories',
        //   //   route: '/category/:slug',
        //   //   create: true
        //   // }
        // }
      }
    }
  ]
}
