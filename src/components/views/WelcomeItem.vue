<template>
  <header>
    <ul type="none">
      <li><RouterLink></RouterLink></li>
      <li><a href="#"><Icon icon="bx:box" width="1.2em" height="1.2em"  style="color: white" />Projects</a></li>
      <li><a target="_blank" href="https://github.com/deccox"><Icon icon="ri:github-fill" width="1.2em" height="1.2em"  style="color: white" />Github</a></li>
      <li><a target="_blank" href="https://www.instagram.com/kaynbit"><Icon icon="skill-icons:instagram" width="1.2em" height="1.2em" />insta</a></li>
      <li><Icon icon="ic:baseline-email" width="1.2em" height="1.2em"  style="color: white" />Email</li>
    </ul>
  </header>
</template>

<script>

import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon // Register Icon component
  },
  props: ["foo"],
  data(){
    return{
      form: {
        msg: this.foo
      }
    }
  }
}
</script>

<style scoped>

header{
  
  width: 1220px;
  display: flex;
  align-items: center;
  justify-self: start;
  padding: 10px;
}

ul{
  display: flex;
  gap: 20px;
  padding-left: 0;
  
}


ul li{
  cursor: pointer;
}

a:visited{
  outline: none;
  color: white;
}


</style>
