<template>
  <TaskList />
  <Footer />
</template>
  
  <script lang="ts">
import Footer from "../components/Footer.vue";
import TaskList from "../components/TaskList.vue";
export default {
  
  components: { TaskList, Footer },

  setup() {
    return { loadings: TaskList}
  },
};
</script>
  
  <style>
</style>