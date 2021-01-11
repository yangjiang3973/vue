export default {
    methods: {
        // makeFolder: function (item) {
        //     Vue.set(item, 'children', []);
        //     this.addItem(item);
        // },
        // addItem: function (item) {
        //     item.children.push({
        //         name: 'new stuff',
        //     });
        // },
    },
    render() {
        return (
            <div>
                <button onClick={() => this.$emit('customEvent')}>
                    parent's button
                </button>
            </div>
        );
    },
};
