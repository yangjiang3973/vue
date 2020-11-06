const Vue = require('./vue.js');

Vue.directive('demo', {
    bind: function () {
        this.el.style.color = '#fff';
        this.el.style.backgroundColor = this.arg;
    },
    update: function (value) {
        this.el.innerHTML =
            'name - ' +
            this.name +
            '<br>' +
            'raw - ' +
            this.raw +
            '<br>' +
            'expression - ' +
            this.expression +
            '<br>' +
            'argument - ' +
            this.arg +
            '<br>' +
            'value - ' +
            value;
    },
});

let MyComponent = Vue.extend({
    template: `
    <p>A custom component!</p>
    `,
});

Vue.component('my-component', MyComponent);

let vm = new Vue({
    el: '#app',
    data: {
        // title: 'vue source code',
        title: 124,
        intro: 'current v0.11',
        word: 'Hello World!',
        flag: true,
        showEl: true,
        list: [1, 2, 3, 4, 5, 6],
        firstName: 'Yang',
        lastName: 'Jiang',
        msg: 'hello!',
    },
    computed: {
        fullName: {
            // the getter should return the desired value
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            // the setter is optional
            // set: function (newValue) {
            //     var names = newValue.split(' ');
            //     this.firstName = names[0];
            //     this.lastName = names[names.length - 1];
            // },
        },
    },
    methods: {
        changeWord: function () {
            this.word = 'fuck world';
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
            this.firstName = 'Dan';
        },
        changeLastName: function () {
            this.lastName = 'Gao';
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
