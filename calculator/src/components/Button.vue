<script>


export default {
  data() {
    return {
      botao: "botao"
    }
  },
  props: ['button'],
  methods: {
    handleTeste() {
      return this.$emit('button', this.button)
    }
  }
}
</script>

<template>
  <div
    class="w-20 h-12 bg-[#696969] rounded-lg flex items-center justify-center hover:scale-110 transition-all cursor-pointer font-poppins text-white"
    @click="handleTeste">
    {{ button }}
  </div>
</template>
