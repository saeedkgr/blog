<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>
<template>
  <div class="container flex h-full flex-col">
    <main class="min-w-full overflow-auto grow">
      <slot />
    </main>
    <footer class="px-2 dark:text-primary">
      {{ runtimeConfig.public.version }}
    </footer>
  </div>
</template>
