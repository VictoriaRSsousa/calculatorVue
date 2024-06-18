<script lang="ts">
export default {
  props: ['display']
}
</script>

<template>
  <div class="text-white bg-stone-400 p-5 rounded-sm h-20 mb-5 font-poppins font-semibold text-3xl">
    <p class="w-full text-right">{{ display }}</p>
  </div>
</template>

<style></style>
