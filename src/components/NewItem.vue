<template>
  <form class="" @submit.prevent="createTask">
    
      <input
        v-model="text"
        class="new-todo"
        type="text"
        placeholder="Type your new task!"
      />
      
   
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "@/store";
import { TaskItem } from "@/store/state";
import { MutationType } from "@/store/mutations";
export default defineComponent({
  setup() {
    const text = ref("");
    const store = useStore();
    const createTask = () => {
      if (text.value === "") return;
      const item: TaskItem = {
        id: Date.now(),
        text: text.value,
        completed: false,
      };
      store.commit(MutationType.CreateItem, item);
      text.value = "";
    };
    return {
      hover: false,
      createTask,
      text,
    };
  },
});
</script>
<style>
.new-todo,
.edit {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.new-todo {
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}

button {
  margin: 0;
  padding: 0;
  border: 50px;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.toggle-all + label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: -52px;
    left: -13px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  
  .toggle-all + label:before {
    content: "❯";
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }
  
  .toggle-all:checked + label:before {
    color: #737373;
  }


</style>
