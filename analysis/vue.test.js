new Vue({
    el: '.a',
    data() {
        return {
            name: 'analysis',
        };
    },
    methods: {
        getName() {
            this.name = '修改----我是父组件a';
        },
    },
});
