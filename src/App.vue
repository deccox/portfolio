<template>
  <main>
    <div>
      <Wellcome/>
      <TheWelcome/>
    </div>
  </main>
</template>


<script setup>

import Wellcome from './components/WelcomeItem.vue'
import TheWelcome from './components/TheWelcome.vue'

</script>


<style scoped>

main{
  background-color: #051917;
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
}

div{
  margin: 10px;
  max-width: 1220px;
  width: 100%;
  max-height: 900px;
  height: 100%;
  display: flex;
  flex-direction: column;

}
</style>