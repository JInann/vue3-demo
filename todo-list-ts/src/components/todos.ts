import { ref } from "vue";
import { Todo } from "../types/index";
export default () => {
  const todos = ref<Todo[]>([]);
  const getTodos = () => {
    return new Promise<Todo[]>((r) => {
      setTimeout(() => {
        r(
          (todos.value = [
            { text: "预设1", statu: "1" },
            { text: "预设2", statu: "2" },
          ])
        );
      }, 1000);
    });
  };
  return {
    todos,
    getTodos,
  };
};
