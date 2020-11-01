const Vue = require('./vue.js');

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
