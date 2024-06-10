<script  lang="ts">

import Button from './components/Button.vue'

export default {
  data(){
    return{
       buttons: [7,8,9,'+',4,5,6,'-',1,2,3,'/',',',0,'=','*']
    }

  },
  components: {
    Button
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
    <div class="grid grid-cols-4 gap-2 ">

      <Button v-for=" button in buttons" :key="button" :button="button" @button="receiveEmit"/>  
    </div>
   



  </div>
</template>


