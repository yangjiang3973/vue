import Vue from "./index.js";

Vue.directive("demo", {
  bind: function () {
    this.el.style.color = "#fff";
    this.el.style.backgroundColor = this.arg;
  },
  update: function (value) {
    this.el.innerHTML =
      "name - " +
      this.name +
      "<br>" +
      "raw - " +
      this.raw +
      "<br>" +
      "expression - " +
      this.expression +
      "<br>" +
      "argument - " +
      this.arg +
      "<br>" +
      "value - " +
      value;
  },
});

// let MyComponent = Vue.extend({
//   template: `
//     <p>A custom component!</p>
//     `,
// });

// Vue.component("my-component", MyComponent);

Vue.config.async = true;

let vm = new Vue({
  el: "#app",
  data: {
    // title: 'vue source code',
    title: 124,
    intro: "current v0.11",
    word: "Hello World!",
    flag: true,
    showEl: true,
    list: [1, 2, 3, 4, 5, 6],
    firstName: "Yang",
    lastName: "Jiang",
    msg: "hello!",
    observeData: {
      a: "1",
      b: "2",
    },
    simpleArr: [1, 2, 3, 4, 5],
    nestedArr: [1, [2, 3, 4], 5],
    objArr: [{ a: 1 }, { b: 2 }, { c: 3 }],
  },
  // data: [1, 2, 3],  // data cannot be array, will show Vue warning
  computed: {
    fullName: {
      // the getter should return the desired value
      get: function () {
        return this.firstName + " " + this.lastName;
      },
    },
  },
  methods: {
    changeWord: function () {
      this.word = "fuck world";
    },
    changeFlag: function () {
      this.flag = !this.flag;
    },
    changeShow: function () {
      this.showEl = !this.showEl;
    },
    addElement: function () {
      this.list.push(10);
    },
    changeFirstName: function () {
      this.firstName = "Dan";
    },
    changeLastName: function () {
      this.lastName = "Gao";
    },
    addData: function () {
      // this.observeData.temp = true;
      //   this.$add("temp", true); // this means each obj's key will inherit methods from vm?
      // NOTE: $add is removed in v1.0
      //   this.$add("c", "this is c");
      console.log("this.data", this.$data);
    },
    deleteData: function () {
      this.$delete("c");
      console.log("this.data", this.$data);
    },
    changeTemp: function () {
      this.observeData.temp = !this.observeData.temp;
    },
    changeSimpleArr: function () {
      this.simpleArr[0] = 100; // no
      // this.simpleArr.$set('0', 100); // yes(DONE)
      // this.simpleArr.push(100); // yes(DONE)
      console.log(this.simpleArr);
    },
    changeNestedArr: function () {
      this.nestedArr[1].push(100); // no
      // this.nestedArr.push(100); // yes, because this is like simpleArr
      console.log("this.nestedArr", this.nestedArr);
    },
    changeObjArr: function () {
      // this.objArr.push(100); // yes, because this is like simpleArr
      // this.objArr[0].a = 100; // yes, it will continue observe obj in arr
      console.log("this.objArr", this.objArr);
    },

    batchUpdate: function () {
      let t = new Date();
      for (let i = 0; i < 1e6; i++) {
        if (i % 2 === 0) this.intro = "";
        else this.intro = "updated intro";
      }
      console.log(new Date() - t + "ms");
      console.log("done");
    },
  },
});

// setTimeout(() => {
//     vm.firstName = 'Dan';
//     vm.lastName = 'Gao!';
// }, 2000);

// console.log(Vue.options);

// let vm = new Vue({
//     el: '#app',
//     template: `<div>
//                     <span>template</span>
//                     <input/>
//                 </div>`,
// });
