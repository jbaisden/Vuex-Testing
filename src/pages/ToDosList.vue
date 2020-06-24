// FROM TUTORIAL AT https://www.youtube.com/watch?v=5lVQgZzLMHc&t=1513s
<template>
  <div>
    <todos-comp> </todos-comp>  
  </div>
</template>

<script>
import TodosComp from '../components/ToDos'
export default {
    name: "ToDosList",
    components: {
      TodosComp
    }
}
</script>

<style>

</style>