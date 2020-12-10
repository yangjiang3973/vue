// import Vue from './entries/web-runtime-with-compiler';
import Vue from '../src/entries/web-runtime';
import MyButton from './button';
import FuncComp from './funcComp';

let vm = new Vue({
    el: '#app',
    data: {
        msg: 'hello',
    },
    methods: {
        testClick() {
            console.log('aaaaa');
        },
    },
    render: function render(h) {
        return (
            <div>
                <MyButton></MyButton>
                <FuncComp></FuncComp>
            </div>
        );
    },
});

//<div id="1" vOn:click={this.testClick}>
//     hello
// </div>

// <div id="1">
//     <span>Hello</span>
//     <span>world!</span>
//     <div>{this.msg}</div>
//     <input type="text" vModel={this.msg} />
// </div>
