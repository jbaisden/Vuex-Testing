// FROM TUTORIAL AT https://www.youtube.com/watch?v=5lVQgZzLMHc&t=1513s
<template>
  <div>
    <AddTodo></AddTodo>
    <FilterTodos />
    <todos-comp> </todos-comp>  
  </div>
</template>

<script>
import TodosComp from '../components/ToDos'
import AddTodo from '../components/AddTodo'
import FilterTodos from '../components/FilterTodos'

import { mapActions } from 'vuex'
export default {
    name: "ToDosList",
    components: {
      TodosComp,
      FilterTodos,
      AddTodo
    }
}
</script>

<style>

</style>