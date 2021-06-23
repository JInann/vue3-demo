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

<script>
export default {
  name: "App",
  data() {
    return {
      todos: [],
      todoText: "",
      filterStatu: "all",
    };
  },
  methods: {
    handleAddClick() {
      if (this.todoText) {
        this.todos.unshift({
          text: this.todoText,
          statu: "1",
        });
        this.todoText = "";
      }
    },
    handleItemClick(todo) {
      if (todo.statu == "1") {
        todo.statu = "2";
      } else if (todo.statu == "2") {
        todo.statu = "1";
      }
    },
  },
  computed: {
    displayTodos() {
      if (this.filterStatu == "all") {
        return this.todos;
      }
      if (this.filterStatu == "opened") {
        return this.todos.filter((v) => v.statu == "1");
      }
      if (this.filterStatu == "closed") {
        return this.todos.filter((v) => v.statu == "2");
      }
      return [];
    },
  },
};
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
