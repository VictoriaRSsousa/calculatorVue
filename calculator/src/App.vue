<script lang="ts">

import Button from './components/Button.vue'
import Calculator from './components/Calculator.vue';

export default {
  data() {
    return {
      buttons: [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '/', ',', 0, '=', '*']
    }

  },
  components: {
    Button,
    Calculator
  },
  methods: {
    receiveEmit(button) {
      console.log(button);
    }
  }
}

</script>

<template>
  <div class=" flex h-screen justify-center items-center">
    <Calculator />
  </div>
</template>
