import { ref, Ref } from "vue";
import { Todo } from "../types/index";
export default (todos: Ref<Todo[]>) => {
  const todoText = ref<string>("");
  const handleAddClick = () => {
    if (todoText.value) {
      todos.value.push({
        text: todoText.value,
        statu: "1",
      });
      todoText.value = "";
    }
  };
  return {
    todoText,
    handleAddClick,
  };
};
