<template>
  <div v-if="isLoading">
    {{ user.login }}
  </div>
</template>


<script setup>

import { ref, onBeforeMount } from 'vue'

const user = ref(null)

const isLoading = ref(false)

 onBeforeMount( async () => {
  await fetch('https://api.github.com/users/deccox')
    .then( (res) => res.json())
    .then( (data) => {
      user.value = data
      isLoading.value = true
    })
})



</script>


<style scoped >

</style>