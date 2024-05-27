<template>
  <div id="description">
    <div class="pattern" id="text_description">
      <p>Hey There, I'm kayna</p>
    </div>
    <div  class="pattern" id="img_description">
      <div id="img_background">
        <img width="700" src="../../assets/def.png">
      </div>
    </div>
  </div>
</template>


<script>
import '../../assets/def.png'
</script>


<style scoped>
#description{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.pattern{
  display: flex;
  height: 700px;
  flex-direction: column;
  justify-content: end;
}
#text_description p{
  font-size: 4rem;
  font-weight: bold;
}


#img_background{
  background-color: white;
  border-radius: 20px;
  width: 800px;
  height: 450px;
  justify-content: end;
  align-items: center;
  display: flex;
  flex-direction: column;

}



</style>