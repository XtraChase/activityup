const actions = {
  // increase(store) {
  //   store.setState({
  //     counter: store.state.counter + 1
  //   });
  // },
  // decrease(store) {
  //   store.setState({
  //     counter: store.state.counter + 1
  //   });
  // }
  selectCategory(store) {
    this.setState({ category: store.state.category });
  }
};
export default actions;
