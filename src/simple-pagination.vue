<script lang="ts">
import { defineComponent } from 'vue';

export default /*#__PURE__*/defineComponent({
  name: 'SimplePagination', // vue component name
  props: {
    length: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 0,
    },
    pageOffset: {
      type: Number,
      default: 5
    },
    pageRange: {
      type: Number,
      default: 3,
    },
    minPages: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    rangeStart: function(): number {
      if (this.totalPages < this.minPages || this.currentPage < this.pageRange) {
        return 0
      } else if (this.currentPage > this.totalPages - this.pageRange) {
        return this.totalPages - this.pageRange
      } else {
        return this.currentPage - 1
      }
    },
    rangeEnd: function(): number {
      if (this.totalPages < this.minPages || this.currentPage > this.totalPages - this.pageRange) {
        return this.totalPages
      }else if (this.currentPage < this.pageRange) {
        return this.pageRange
      } else {
        return this.currentPage + 1
      }
    },
    pages: function(): Array<number> {
      return [...Array(this.rangeEnd - this.rangeStart + 1)].map((_, i) => this.rangeStart + i)
    },
    totalPages: function(): number {
      return Math.ceil(this.length / this.pageOffset) - 1
    },
  },
  methods: {
    hasPager: function(): boolean {
      return this.length > this.pageOffset
    },
    hasFirst: function(): boolean {
      return this.rangeStart >= 1
    },
    hasLast: function(): boolean {
      return this.rangeEnd < this.totalPages
    },
    hasPrev: function(): boolean {
      return this.currentPage >= 1
    },
    hasNext: function(): boolean {
      return this.currentPage < this.totalPages
    },
    changePage: function(page: number): void {
      if (this.currentPage === page) return

      this.$emit('change-page', page)
    },
  },
});
</script>

<template>
  <div class="simple-pagination">
    <a v-if="hasPrev()" @click="changePage(currentPage - 1)">&lt;</a>
    <a v-if="hasFirst()" @click="changePage(0)">1</a>
    <span class="elipsis" v-if="hasFirst()">...</span>
    <a v-for="n in pages" v-bind:key="n" @click="changePage(n)" :class="{ current: n === currentPage }">{{n + 1}}</a>
    <span class="elipsis" v-if="hasLast()">...</span>
    <a v-if="hasLast()" @click="changePage(totalPages)">{{totalPages + 1}}</a>
    <a v-if="hasNext()" @click="changePage(currentPage + 1)">&gt;</a>
  </div>
</template>

<style scoped>
  .simple-pagination {
    display: flex;
    color: #37323E;
    align-items: center;
  }

  .simple-pagination > * {
    line-height: 40px;
  }

  .simple-pagination a:not(.current) {
    cursor: pointer;
  }

  .simple-pagination a {
    width: 40px;
    text-align: center;
  }

  .simple-pagination > *:not(:first-child) {
    margin-left: 8px;
  }

  .simple-pagination .current {
    background-color: #37323E;
    color: #FFF;
  }
</style>
