<script setup async>
const path = useRoute().path //params.slug

const { data: post } = await useAsyncData(`blog-${path}`, () => {
  return queryCollection('blog').path(path).first()
})
</script>

<template>
  <div dir="rtl">
    <ContentRenderer :value="post" v-if="post" />
    <div v-else>error loading {{ path }}</div>
  </div>
</template>
