<template>
  <ul class="footer">
    <li @click='save()'>保存</li>
    <li @click='goBack()'>返回</li>
  </ul>
</template>

<script>
  export default {
    props:['editText'],
    methods:{
      save:function(){
        
        console.log(this.editText);
        console.log(this.$store);
        
        this.$store.dispatch('editNote',this.editText)
        // this.$router.push({path:'/note'});
        this.$router.back(-1)
      },
      goBack:function(){
        this.$router.back(-1)
      }
    }
  }
</script>
<style src='./footer.scss' lang="scss"></style>
