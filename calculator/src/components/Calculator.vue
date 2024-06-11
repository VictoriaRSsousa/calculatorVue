<script lang="ts">
import Button from "./Button.vue";
import Display from "./Display.vue";
import Calculator from "../utils/operations";


interface Data {
  buttons: Array<string | number>;
  display: string;
  countOperator: number
  
}

export default {
  data(): Data {
    return {
      buttons: [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "/", "CE", 0, "=", "*"],
      display: "",
      countOperator : 0     
    };
  },
  components: {
    Button,
    Display,
  },
  methods: {
    receiveEmit(button: string) {
      if(button==='-'|| button==='/'|| button==='*'|| button==='+' ){
        this.countOperator++
      }

      if (button === "CE") {
        this.buttonClear();
      } else if (button === "=") {
        this.buttonEqual();
      }
       else {
        this.display = this.display + button;
      }

    },
    buttonClear() {
      this.display = "";
    },
    buttonEqual() {   
      const regex = /(\d+)([+\-*/])(\d+)/;
      const splitExpression = this.display.match(regex);
      console.log(splitExpression);

      

      if(splitExpression ===null){
        console.log("Expressão invalida!");
      }

      else if( splitExpression[0]==='*' || splitExpression[0]==='/' ){
        this.buttonClear()
        alert("A expressão precisa iniciar com um número!!")
      }
      // else if(splitExpression[0]==='-' || splitExpression[0]==='+'){
      //   this.countOperator = 0
      //   const firstNumber = parseInt(splitExpression[0]+splitExpression[1])
   
        
      //   const refatoreExpressios = splitExpression?.slice(2)
        
      //   refatoreExpressios?.unshift(String(firstNumber))
      //   this.getResult(refatoreExpressios)
      // }
      else{
        //console.log(splitExpression[0]);
        
        console.log("splitExpression");

      }

    },
    getResult(expression: Array<string>){
      // let total = 0
      // expression.forEach((element) => {
      //   if(oper)
      // })
  

}
},

    



    //   if (splitExpression) {
    //     const firstNumber = parseInt(splitExpression[1]);
    //     const operator = splitExpression[2];
    //     const secondNumber = parseInt(splitExpression[3]);
    //     this.display = String(
    //       this.getResult(firstNumber, operator, secondNumber)
    //     );
    //   } else {
    //     alert("Formato de operação inválido");
    //     this.buttonClear();
    //   }
    // },
    // getResult(firstNumber: number, operator: string, secondNumber: number) {
    //   const calcule = new Calculator();
    //   switch (operator) {
    //     case "+": {
    //       return calcule.add(firstNumber, secondNumber);
    //     }
    //     case "-": {
    //       return calcule.sub(firstNumber, secondNumber);
    //     }
    //     case "*": {
    //       return calcule.mult(firstNumber, secondNumber);
    //     }
    //     case "/": {
    //       return calcule.division(firstNumber, secondNumber);
    //     }
    //   }
    //},

    computed:{
      calculator(){
        return new Calculator()
      }
    }
  
};
</script>

<template>
  <div class="box-shadow-md bg-stone-800 border p-5 rounded-md">
    <Display :display="display" />
    <div class="grid grid-cols-4 gap-2">
      <Button
        v-for="button in buttons"
        :key="button"
        :button="button"
        @button="receiveEmit"
      />
    </div>
  </div>
</template>
