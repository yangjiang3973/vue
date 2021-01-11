const MySlot = {
  render(h) {
    return (
      <div>
        <header>{this.$slots.header}</header>
        <main>{this.$slots.default}</main>
        <footer>{this.$slots.footer}</footer>
      </div>
    );
  },
};

export default {
  render(h) {
    return (
      <MySlot>
        <template slot="header">hello world</template>
        children node
        <div slot="footer">this is footer</div>
      </MySlot>
    );
  },
};
