<script lang="ts">
import Button from './Button.vue';
import Display from "./Display.vue";

interface Data {
  buttons: Array<string | number>
  display: string
};

export default {
    data(): Data{
      return {
        buttons: [7,8,9, '+', 4, 5, 6, '-', 1, 2, 3, '/', ',', 0, '=', '*'],
        display: ""
      }
    },
    components: {
        Button,
        Display
    },
    methods: {      
      receiveEmit(button: string) {
        this.display = this.display + button;
      }
    }
}
</script>

<template>
  <div class="box-shadow-md bg-stone-800 border p-5 rounded-md">
    <Display :display="display"  />
    <div class="grid grid-cols-4 gap-2 ">
      <Button v-for="button in buttons" :key="button" :button="button" @button="receiveEmit"/>  
    </div> 
  </div>
</template>

<style></style>
