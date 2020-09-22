export default {
    saveUser(state:any, data:any) {
      state.username = data.nickname;
      state.nav = data.nav;
      state.rule = data.rule;
    }
}