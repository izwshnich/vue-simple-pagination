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
    const items = ref([
      { text: 'dummy' }, { text: 'dummy2' }, { text: 'dummy3' }, { text: 'dummy4' }, { text: 'dummy5' },
      { text: 'dummy' }, { text: 'dummy2' }, { text: 'dummy3' }, { text: 'dummy4' }, { text: 'dummy5' },
      { text: 'dummy' }, { text: 'dummy2' }, { text: 'dummy3' }, { text: 'dummy4' }, { text: 'dummy5' },
      { text: 'dummy' }, { text: 'dummy2' }, { text: 'dummy3' }, { text: 'dummy4' }, { text: 'dummy5' },
      { text: 'dummy' }, { text: 'dummy2' }, { text: 'dummy3' }, { text: 'dummy4' }, { text: 'dummy5' },
      { text: 'dummy' }, { text: 'dummy2' }, { text: 'dummy3' }, { text: 'dummy4' }, { text: 'dummy5' },
    ])

    const handleChange = (page: number) => {
      current.value = page
    }

    return {
      current,
      items,
      handleChange,
    }
  }
});
</script>

<template>
  <div id="app">
    <simple-pagination :items="items" :current-page="current" @change-page="handleChange" />
  </div>
</template>
