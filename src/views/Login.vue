<template>
    <div class="login-box">
        <!-- <div class="title">
            <h1>开普天下固定资产管理</h1>
        </div> -->
        <iframe src="https://6d61-magic-d13079-1255581239.tcb.qcloud.la/kaipu_asset_login_bg/index.html?sign=2eb6bdc67d622d87d7dce82225246801&t=1586325206" frameborder="0" style="width:100%;height:100%;"></iframe>
        <div class="login animated bounceInDown">
            <h4>欢迎登录资产管理系统</h4>
            <Input v-model="username" size="large" placeholder="请输入账号" class="name" ref="username" autofocus/>
            <Input type="password" v-model="password" size="large" placeholder="请输入密码"  class="password" ref="password"/>
            <Button type="primary" size="large" class="btn" :loading="loading" @click="login" long>立即登录</Button>
        </div>
    </div>
</template>
<script lang="ts">
import {LoginAPI} from '@/api/index';
import {Vue,Component} from "vue-property-decorator";
import {Action,Mutation,namespace} from 'vuex-class';

const LoginModule = namespace('LoginModule');

@Component
export default class Login extends Vue{
    private username:string = '';
    private password:string = '';
    private loading:boolean = false;
    private unernameRef:any;
    private passwordRef:any;
    @Action('saveUser') public saveUser:any;
    @LoginModule.Mutation('saveNickname') saveNickname:any;
    async login() {
        if(this.username.trim()==''){
            this.$Message.error('请输入你的账号');
            this.unernameRef.focus();
            return;
        }
        if(!this.password){
            this.$Message.error('请输入你的密码');
            this.passwordRef.focus();
            return;
        }
        this.loading = true;
        try{
            const res =  await LoginAPI.login({username:this.username,password:this.password});
            // this.$cookie.set('ares_token', '1', 3600 * 24);
            if (res.data.code==1) {
                this.$Message.success(res.data.msg);
                // this.nav(res.data.nav);
                // this.rule(res.data.rule);
                // this.$store.commit('rule',res.data.rule);
                // this.$router.replace({name:'workspace'})
                this.saveUser(res.data);
                this.saveNickname(res.data.nickname);
            } else {
                this.$Message.error(res.data.msg);
            }
            this.loading = false;
        } catch(err) {
            this.loading = false;
            this.$Message.error(err);
        }
    }
    keydown(e:any) {
            if (e.keyCode == 13) {
                this.login();
            }
    }
    mounted() {
        window.addEventListener('keydown', this.keydown);
        this.$nextTick(()=>{
            this.unernameRef = this.$refs.username;
            this.passwordRef = this.$refs.password;
        })   
    }
    destroyed() {
        window.removeEventListener('keydown', this.keydown);
    }
}
</script>

<style lang="less">
@import '../style/index.less';
.login-box{
    height: 100vh;
    // background: url(https://6d61-magic-d13079-1255581239.tcb.qcloud.la/kaipu/bg.jpeg?sign=b3b7638b67e30a4924163451aefc2b1f&t=1573782294) no-repeat center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    .title{
         background-color: rgba(0,0,0,0.7);
         position: absolute;
         width: 100%;
         top:0;
        h1{
            width:1200px;
            margin:0 auto;
            height: 66px;
            line-height:66px;
            font-size:28px;
            color:#fff;
        }
    }
    .login{
        position: absolute;
        top:150px;
        right:200px;
        width: 480px;
        border-radius: 7px;
        background-color: rgba(255,255,255,0.9);
        padding:50px 70px;
        h4{
            font-size:22px;
            color:@main-color;
            margin-bottom:10px;
        }
        .password{
            margin-top:30px;
        }
        .btn{
            margin-top:30px;
        }
    }
}

</style>