<template>
  <div id="projects" v-if="isLoading">
    <div id="side_bar">
      <div 
        v-for="repo in repos" 
        :key="repo.id"
        id="box_repo"
      > 
        {{ repo.name }} 
      </div>
    </div>
    <div 
      id="project_content"
    >
      Coming Soon
    </div>
  </div>
  <div id="div_disable" v-else>Coming Soon</div>
</template>


<script setup>

import { ref, onBeforeMount } from 'vue'

const user = ref(null)
const repos = ref(null)

const isLoading = ref(false)

 onBeforeMount( async () => {
  await fetch('https://api.github.com/users/deccox')
    .then( (res) => res.json())
    .then( (data) => {
      user.value = data
      
    })

  await fetch('https://api.github.com/users/deccox/repos')
    .then( res => res.json())
    .then( (data) => {
      repos.value = data
    })

    isLoading.value = false
})



</script>


<style scoped >

#projects{
  width: 100%;
  background-color: white;
  color: black;
  padding: 10px;
  margin: 10px;
  height: 100%;
  display: flex;
}

#side_bar{
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
}

#project_content{
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
}


#box_repo{
  height: 50px;
  width: 100%;
  background-color: red;
  text-align: start;
  align-items: center;
  display: flex;
}

#div_disable{
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
}
</style>