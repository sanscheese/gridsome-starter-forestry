<script>
export default {
  
}
</script>

<template>
  <Layout>
    <h1>{{ $page.post.title }}</h1>

    <div v-for="component in $page.post.components">
      <h5>{{component.template}}</h5>
      
      <h2>{{component.title}}</h2>

      <div v-for="image in component.images">
        <img :src="image" />
      </div>

    </div>
  </Layout>
</template>

<style scoped>
img {
  max-width: 50vw;
}
</style>


<page-query>
query Post($path: String!) {
  post(path: $path) {
    id
    title
    path
    components {
      template
      title
      images
    }
  }
}
</page-query>
