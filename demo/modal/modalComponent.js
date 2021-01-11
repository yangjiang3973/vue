export default {
  props: [],
  render() {
    return (
      // <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            {/* <div class="modal-header">
                            <slot name="header">default header</slot>
                        </div>
                        <div class="modal-body">
                            <slot name="body">default body</slot>
                        </div> */}

            <div class="modal-footer">
              {/* <slot name="footer"> */}
              <slot>
                default footer
                <button
                  class="modal-default-button"
                  onClick={() => this.$emit("close")}
                >
                  OK
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
      // </transition>
    );
  },
};
