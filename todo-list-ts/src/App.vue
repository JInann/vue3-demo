<template>
  <input type="text" v-model="todoText" />
  <button @click="handleAddClick">add</button>
  <div class="list">
    <ul>
      <li
        class="item"
        v-for="(todo, i) in displayTodos"
        :key="i"
        @click="handleItemClick(todo)"
        :class="'statu' + todo.statu"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>
  <div class="filter">
    <button @click="filterStatu = 'all'" :disabled="filterStatu == 'all'">
      all
    </button>
    <button @click="filterStatu = 'opened'" :disabled="filterStatu == 'opened'">
      opened
    </button>
    <button @click="filterStatu = 'closed'" :disabled="filterStatu == 'closed'">
      closed
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import useFilterList from "./components/filterTodoList";
import useAddTodo from "./components/addTodo";
import useTodos from "./components/todos";
import { Todo } from "./types/index";
export default defineComponent({
  name: "App",
  setup() {
    const { todos, getTodos } = useTodos();
    const { filterStatu, displayTodos } = useFilterList(todos);
    const { todoText, handleAddClick } = useAddTodo(todos);
    const handleItemClick = (todo: Todo) => {
      if (todo.statu == "1") {
        todo.statu = "2";
      } else if (todo.statu == "2") {
        todo.statu = "1";
      }
    };
    onMounted(getTodos);
    return {
      filterStatu,
      todoText,
      displayTodos,
      handleAddClick,
      handleItemClick,
    };
  },
});
</script>
<style lang="scss" scoped>
.list {
  margin-top: 10px;
}
.item {
  &.statu2 {
    text-decoration: line-through;
    color: #ccc;
  }
}
.filter {
  margin-top: 10px;
}
button {
  margin: 0 5px;
  &:first-child {
    margin-left: 0;
  }
}
</style>
