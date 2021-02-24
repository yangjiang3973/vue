import Vue from '../../src/entries/web-runtime';

let vm = new Vue({
    el: '#app',
    data: {
        showModal: false,
    },
    render() {
        return (
            <div>
                <button
                    id="show-modal"
                    onClick={() => {
                        this.showModal = !this.showModal;
                    }}
                >
                    Show Modal
                </button>

                <transition name="fade">
                    {this.showModal ? <p>hello</p> : null}
                </transition>
            </div>
        );
    },
});
