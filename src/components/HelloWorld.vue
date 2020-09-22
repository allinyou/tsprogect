<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="goClick($event)">点击{{doubleNum}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue,Emit,Watch } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  private num:number = 0;
  @Prop(String) private msg!: string;
  get doubleNum():number{
    return this.num*2
  }

  @Prop({
    type:String,
    default:'21112222222222222222'
  }) 
  size!:string;

  @Emit('ddclick')
  emitGoClick(s:number){

  }
  goClick(){
    this.num++;
    this.emitGoClick(this.num);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
