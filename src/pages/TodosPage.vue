// FROM TUTORIAL AT https://www.youtube.com/watch?v=5lVQgZzLMHc&t=1513s
<template>
  <div>
    <AddTodo />
    <FilterTodos />
    <TodosList />
  </div>
</template>

<script>

import AddTodo from '@/components/Todos/AddTodo'
import TodosList from '@/components/Todos/TodosList'
import FilterTodos from '@/components/Todos/FilterTodos'

import { mapActions } from 'vuex'
export default {
    name: "TodosPage",
    components: {
      TodosList,
      FilterTodos,
      AddTodo
    }
}
</script>

<style>

</style>