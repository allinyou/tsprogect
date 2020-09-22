import { Commit } from 'vuex';
export default {
    saveUser(context: { commit: Commit } , data:any) {
        context.commit('saveUser',  data);
    }
};