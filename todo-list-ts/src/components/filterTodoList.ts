import { ref, Ref, computed } from "vue";
import { Todo } from "../types/index";
type FilterStatus = "all" | "opened" | "closed";
export default (todos: Ref<Todo[]>) => {
  const filterStatu = ref<FilterStatus>("all");
  const displayTodos = computed<Todo[]>(() => {
    if (filterStatu.value == "all") {
      return todos.value;
    }
    if (filterStatu.value == "opened") {
      return todos.value.filter((v) => v.statu == "1");
    }
    if (filterStatu.value == "closed") {
      return todos.value.filter((v) => v.statu == "2");
    }
    return [];
  });
  return {
    filterStatu,
    displayTodos,
  };
};
