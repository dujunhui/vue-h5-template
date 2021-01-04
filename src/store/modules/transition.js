// 路由进出切换
let transition = {
  namespaced: true,
  state: {
    transitionName: "",
    action: []
  },
  mutations: {
    setTransition(state, transition) {
      state.transitionName = transition;
    }
  }
};
export default transition;
