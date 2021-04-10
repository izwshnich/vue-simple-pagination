<script lang="ts">
import { defineComponent, ref } from 'vue';
import SimplePagination from '@/simple-pagination.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    SimplePagination
  },
  setup() {
    const current = ref<number>(0)
    const totalLength = ref<number>(50)

    const handleChange = (page: number) => {
      current.value = page
    }

    return {
      current,
      totalLength,
      handleChange,
    }
  }
});
</script>

<template>
  <div id="app">
    <simple-pagination :length="totalLength" :current-page="current" @change-page="handleChange" />
  </div>
</template>
