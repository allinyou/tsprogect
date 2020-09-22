<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg" @ddclick="dd($event)" size="123123123123"/>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text" @click="add">Text</Button>
    <Icon type="ios-apps" />
    <Page :total="100" />
    <Radio v-model="single">Radio</Radio>
    <Tag color="primary">{{username}}</Tag>
    <Tag color="primary">{{nickname}}-22222222</Tag>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import mixin from '@/mixins/index';
import { mixins } from 'vue-class-component';//类型组件装饰器
import { Component, Prop } from 'vue-property-decorator';//装饰器扩展库
import {Getter,Mutation,namespace} from 'vuex-class';


const LoginModule = namespace('LoginModule');

@Component({
  components:{
    HelloWorld
  }
})
export default class Home extends mixins(mixin){
    name:string = '123';
    msg:string = '2123123123123';
    @Getter("username") username:any;
    @LoginModule.Mutation('saveNickname') saveNickname:any;
    @LoginModule.Getter('nickname') nickname:any;
    dd(s:any){
      alert(s)
    }
    created(){
      this.sayName();
      setTimeout(()=>{
        this.saveNickname("超级管理由++++++++++++++++++++++++");
      },5000)
    }
    add(){
      this.msg+='ddd'
    }

}
</script>
