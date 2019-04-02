<script>
export default {
  
}
</script>

<template>
  <Layout>
    <h1>{{ $page.post.title }}</h1>

    <p>{{ $page.post.content }}</p>
  </Layout>
</template>

<page-query>
query Post($path: String!) {
  post(path: $path) {
    id
    title
    path
  }
}
</page-query>
