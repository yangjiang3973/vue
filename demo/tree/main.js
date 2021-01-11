import Vue from '../../src/entries/web-runtime';
import treeItem from './treeItem';

const treeData = {
    name: 'My Tree',
    children: [
        { name: 'hello' },
        { name: 'wat' },
        {
            name: 'child folder',
            children: [
                {
                    name: 'child folder',
                    children: [{ name: 'hello' }, { name: 'wat' }],
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                    name: 'child folder',
                    children: [{ name: 'hello' }, { name: 'wat' }],
                },
            ],
        },
    ],
};

let vm = new Vue({
    el: '#app',
    data: {
        treeData: treeData,
    },
    methods: {
        makeFolder: function (item) {
            Vue.set(item, 'children', []);
            this.addItem(item);
        },
        addItem: function (item) {
            item.children.push({
                name: 'new stuff',
            });
        },
    },
    render() {
        return (
            <ul id="demo">
                <treeItem
                    class="item"
                    item={this.treeData}
                    onMakeFolder={this.makeFolder}
                    onAddItem={this.addItem}
                ></treeItem>
            </ul>
        );
    },
});
