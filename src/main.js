const Vue = require('./vue.js');

let vm = new Vue({
    el: '#app',
    data: {
        title: 'vue source code',
        intro: 'current v0.11',
        word: 'Hello World!',
        flag: true,
        showEl: true,
        list: [1, 2, 3, 4, 5, 6],
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
    },
});

// setTimeout(() => {
//     vm.word = 'fuck';
//     vm.msg = 'cao!';
//     console.log(vm);
// }, 2000);
