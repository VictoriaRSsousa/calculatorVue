import { defineComponent, reactive } from "vue";
import Button from './Button.vue';
import Display from "./Display.vue";
import { evaluate } from "mathjs";

interface Data {
  buttons: Array<string | number>;
  display: string;
}

export default defineComponent({
  name: "Calculator",
  components: {
    Button,
    Display,
  },
  setup() {
    const state = reactive({
      displayValue: "0",
      result: 0,
    });

    const buttons: Array<string | number> = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '/', 'C', 0, '=', '*'];

    const handleButtonClick = (value: string) => {
      if (state.displayValue === "0") {
        state.displayValue = "";
      }
      state.displayValue += value;
    };

    const handleClear = () => {
      state.displayValue = "0";
      state.result = 0;
    };

    const handleEqual = () => {
      try {
        state.result = evaluate(state.displayValue);
        state.displayValue = state.result.toString();
      } catch {
        state.displayValue = "0";
      }
    };

    return { state, buttons, handleButtonClick, handleClear, handleEqual };
  },
  methods: {
    receiveEmit(button: string) {
      if (button === 'C') {
        this.handleClear();
      } else if (button === '=') {
        this.handleEqual();
      } else {
        this.handleButtonClick(button);
      }
    },
  },
});
