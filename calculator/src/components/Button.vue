<script lang="ts">

export default {
  props: {
    button: {
      type: [String, Number],
      required: true,
    },
  },
  methods: {
    handleButtonClick() {
  //    console.log(this.button);
      
      this.$emit('button', this.button);
    },
  },
};
</script>

<template>
  <div
    class="w-24 h-20 bg-gray-600 rounded-lg flex items-center justify-center hover:scale-110 transition-all cursor-pointer font-poppins text-white text-2xl font-semibold"
    @click="handleButtonClick">
    {{ button }}
  </div>
</template>
