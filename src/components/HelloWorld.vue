<template>
  <div>
      {{ foo }}
  </div>
</template>


<script>
export default  {
  data(){
    return{
      a: 20
    }
  },
  defineProps(){
    foo: String
  },
}

</script>