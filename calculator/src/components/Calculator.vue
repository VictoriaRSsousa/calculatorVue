<script lang="ts">
import Button from "./Button.vue";
import Display from "./Display.vue";
import Calculator from "../utils/operations";

interface Data {
  buttons: Array<string | number>;
  display: string;
  countOperator: number;
}

export default {
  data(): Data {
    return {
      buttons: [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "/", "CE", 0, "=", "*"],
      display: "",
      countOperator: 0,
    };
  },
  components: {
    Button,
    Display,
  },
  methods: {
    receiveEmit(button: string) {
      if (
        button === "-" ||
        button === "/" ||
        button === "*" ||
        button === "+"
      ) {
        this.countOperator++;
      }
      if (this.display[0] === "-" && this.display.length < 2) {
        this.countOperator--;
      }

      if (button === "CE") {
        this.buttonClear();
      } else if (button === "=" || this.countOperator > 1) {
        this.countOperator = 0;
        this.buttonEqual();
      } else {
        this.display = this.display + button;
      }
    },
    buttonClear() {
      this.display = "";
    },
    buttonEqual() {
      const regex = /\d+\.\d+|\d+|[+\-*/()]/g;
      const splitExpression = this.display.match(regex);

      if (splitExpression === null) {
        console.log("Expressão invalida!");
      } else if (splitExpression[0] === "*" || splitExpression[0] === "/") {
        this.buttonClear();
        alert("A expressão precisa iniciar com um número!!");
      } else if (splitExpression[0] === "-" || splitExpression[0] === "+") {
        const firstNumber = parseInt(splitExpression[0] + splitExpression[1]);
        const refatoreExpressios = splitExpression?.slice(2);
        refatoreExpressios?.unshift(String(firstNumber));

        this.display = String(this.getResult(refatoreExpressios));
      } else {

        this.display = String(this.getResult(splitExpression));
      }
    },
    getResult(expression: Array<string>) {
      console.log(expression.length);

      if (expression.length <= 2) {
        return Number(expression[0]);
      }
      const firstNumber = Number(expression[0]);
      const operator = expression[1];
      const secondNumber = Number(expression[2]);

      switch (operator) {
        case "+": {
          return this.calculator.add(firstNumber, secondNumber);
        }
        case "-": {
          return this.calculator.sub(firstNumber, secondNumber);
        }
        case "*": {
          return this.calculator.mult(firstNumber, secondNumber);
        }
        case "/": {
          return this.calculator.division(firstNumber, secondNumber);
        }
      }
    },
  },
  computed: {
    calculator() {
      return new Calculator();
    },
  },
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
