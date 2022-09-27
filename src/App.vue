<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "./store";
import { ActionTypes } from "./store/actions";
import NewItem from "./components/NewItem.vue";

export default defineComponent({
  setup() {
    const store = useStore();
    const loading = computed(() => store.state.loading);
    onMounted(() => store.dispatch(ActionTypes.GetTaskItems));
    const completedCount = computed(() => store.getters.completedCount);
    const totalCount = computed(() => store.getters.totalCount);
    return { loading, completedCount, totalCount };
  },
  components: { NewItem },
});
</script>

<template>
  <div class="todoapp">
    <h1>todo</h1>
    <NewItem />
  </div>
</template>
<style>

.main {
  position: relative;
  z-index: 0;
  border-top: 1px solid #e6e6e6;
}

.footer {
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
}

.footer:before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.todoapp {
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.todoapp h1 {
  position: absolute;
  top: -80px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}
</style>