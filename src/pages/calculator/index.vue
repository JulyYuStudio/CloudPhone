<template>

    <div class="page-container">
    <div class="main">
      <div class="display-board">{{inputBoxValue()}}</div>
      <table class="key-board">
        <tr>
          <td>AC</td>
          <td>±</td>
          <td>÷</td>
          <td>x</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>-</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>+</td>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td rowspan="2">=</td>
        </tr>
        <tr>
          <td colspan="2">0</td>
          <td>.</td>
        </tr>
      </table>
    </div>
   </div>

</template>

<script>
import $ from "jquery";

export default {
  layout: "app_layout",
  name: "calculator",
  data() {
    return {
      value1: "0",
      value2: "0",
      operator: "",
      tag: "value1"
    };
  },
  methods: {
    inputBoxValue() {
      var text = "0";
      switch (this.tag) {
        case "value1":
        case "operator":
          text = this.value1;
          break;
        case "value2":
          text = this.value2;
          break;
      }
      console.log(
        "inputBoxValue " + this.tag + "--" + text + "--" + this.value1
      );
      text = text.toString()
      var values = text.split(".");
      var intValue = values[0].replace("-", "");
      var result = "";
      for (var index in intValue) {
        if ((index + 1) % 3 == 0 && index != intValue.length - 1) {
          result += intValue[index] + ",";
        } else {
          result += intValue[index];
        }
      }
      return (
        (text.indexOf("-") > -1 ? "-" : "") +
        result +
        (values.length > 1 ? "." + values[1] : "")
      );
    },
    inputValue(value) {
      var text = "0";
      switch (this.tag) {
        case "value1":
          text = this.value1;
          break;
        case "operator":
        case "value2":
          text = this.value2;
          this.tag = "value2";
          break;
      }
      text = text.toString()
      if (value == "." && text.indexOf(".") != -1) return;
      if (text === "0") {
        this.changeValue(value);
        return;
      }
      this.addValue(value);
    },
    addValue(value) {
      if (this.tag == "value1") {
        this.value1 += value;
      } else {
        this.value2 += value;
      }
      console.log(
        "changeValue " + this.value1 +  "--" + this.value2
      );
    },
    changeValue(value) {
      if (this.tag == "value1") {
        this.value1 = value;
      } else {
        this.value2 = value;
      }
       console.log(
        "changeValue " + this.value1 +  "--" + this.value2
      );
    },
    isPositiveNum() {
      if (this.tag == "value1") {
         this.value1 = this.positiveNum(this.value1);
      } else if(this.tag == "value2"){
         this.value2 = this.positiveNum(this.value2);
      }
    },
    positiveNum(value) {
      if (value > 0) {
        value = "-" + value;
      } else {
        value = value.replace("-", "");
      }
      console.log("positiveNum " + value)
      return value;
    },
    calculation() {
      if(this.tag == "value1") return;
      var result = "";
      switch (this.operator) {
        case "x":
          result = Number(this.value1) * Number(this.value2);
          break;
        case "÷":
          result = Number(this.value1) % Number(this.value2);
          break;
        case "-":
          result = Number(this.value1) - Number(this.value2);
          break;
        case "+":
          result = Number(this.value1) + Number(this.value2);
          break;
      }

      this.operator = "";
      this.value2 = "";
      this.value1 = result;
      this.text = result;
      this.tag = "value1";
      console.log("value1: " + this.value1);
    },
    setOperator(operator) {
      this.operator = operator;
      this.tag = "operator";
    },
    clear() {
      this.operator = "";
      this.value1 = "0";
      this.value2 = "";
      this.tag = "value1";
    }
  },
  mounted() {
    var inputFun = this.inputValue;
    var clearFun = this.clear;
    var isPostiveFun = this.isPositiveNum;
    var setOperatorFun = this.setOperator;
    var calculationFun = this.calculation;
    $("td").click(function(e) {
      var value = $(e.target).text();
      switch (value) {
        case ".":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
          inputFun(value);
          break;
        case "-":
        case "+":
        case "x":
        case "÷":
          setOperatorFun(value);
          break;
        case "±":
          isPostiveFun();
          break;
        case "=":
          calculationFun();
          break;
        default:
          clearFun();
          break;
      }
    });
  }
};
</script>

<style>
.page-container {
  height: 100%;
}
.main {
  position: absolute;
  top: 0px;
  bottom: 0px;
  padding: 5px 10px;
  display: fixed;
  background-color: blanchedalmond;
}
.display-board {
  border: 2px slategray solid;
  border-radius: 5px;
  min-height: 200px;
  height: 30%;
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
  text-align: right;
}
.key-board {
  height: 70%;
  table-layout: fixed;
  width: 100%;
}
.key-board td {
  border: 1px snow solid;
  background-color: snow;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  height: 50px;
}

.key-board td:active {
  background-color: rgb(230, 230, 230);
}

.key-board :first-child td {
  border: 1px grey solid;
  background-color: grey;
  border-radius: 5px;
  text-align: center;
  color: white;
  font-weight: bold;
  height: 50px;
}
.key-board :first-child td:active {
  background-color: rgb(104, 103, 103);
}
</style>
