import Vue from '../../src/entries/web-runtime';
import Parent from './parent';

let vm = new Vue({
    el: '#app',
    // data: {
    //     treeData: treeData,
    // },
    methods: {
        callEvent() {
            console.log('call event here!');
        },
    },
    render() {
        return (
            <ul id="demo">
                <Parent class="item" onCustomEvent={this.callEvent}></Parent>
            </ul>
        );
    },
});
