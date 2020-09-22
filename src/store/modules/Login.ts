const state:any = {
    nickname:''
}
const mutations:any = {
    saveNickname(state:any,nickname:any){
        console.log(nickname)
        state.nickname  = nickname;
    }
}
const getters:any = {
    nickname: (state:any) => state.nickname,
}

export default {
    namespaced:true,
    state,
    getters,
    mutations
}