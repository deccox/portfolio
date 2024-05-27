<template>
  <main>
    <div id="header-main">
      <header>
        <ul type="none">
          <li><RouterLink to="/"><Icon icon="bx:box" width="1.2em" height="1.2em"  style="color: white" />Home</RouterLink></li>
          <li><RouterLink to="/project"><Icon icon="bx:box" width="1.2em" height="1.2em"  style="color: white" />Projects</RouterLink></li>
          <li><a target="_blank" href="https://github.com/deccox"><Icon icon="ri:github-fill" width="1.2em" height="1.2em"  style="color: white" />Github</a></li>
          <li><a target="_blank" href="https://www.instagram.com/kaynbit"><Icon icon="skill-icons:instagram" width="1.2em" height="1.2em" />insta</a></li>
          <li><Icon icon="ic:baseline-email" width="1.2em" height="1.2em"  style="color: white" />Email</li>
        </ul>
      </header>
      <RouterView/>
    </div>
  </main>
</template>


<script>

import { Icon } from '@iconify/vue';

export default {
  components: {
    Icon // Register Icon component
  },
  data(){
    return{
    }
  }
}

</script>


<style scoped>

li a, li{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
}

main{
  background-color: #051917;
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
}

#header-main{
  margin: 10px;
  max-width: 1220px;
  width: 100%;
  max-height: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;

}


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