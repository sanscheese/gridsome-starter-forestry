<template>
  <Layout>
    <h1>Blog</h1>
    <div v-for="{ node } in $static.allPost.edges">
      <h3><g-link :to="node.path">{{node.title}}</g-link></h3>
    </div>
  </Layout>
</template>

<script>
// export default {
//   metaInfo: {
//     title: 'About us'
//   }
// }
</script>

<static-query>
query {
  allPost {
    edges {
      node {
        title
        path
        slug
        content
        fileInfo {
          name,
          path,
          directory
        }
      }
    }
  }
}
</static-query>