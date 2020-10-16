const Vue = require('./vue.js');

let vm = new Vue({
    el: '#app',
    data: {
        word: 'Hello World!',
        msg: 'greeting',
    },
    methods: {
        changeWord() {
            this.word = 'fuck world!';
        },
    },
});

setTimeout(() => {
    vm.word = 'fuck';
    vm.msg = 'cao!';
    console.log(vm);
}, 2000);
