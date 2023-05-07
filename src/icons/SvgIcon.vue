<script setup lang="ts">
const props = defineProps({
  iconName: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    default: 20
  },
  height: {
    type: Number,
    default: 20
  },
  fill: {
    type: String,
    default: '#000'
  },
  className: {
    type: String,
    default: ''
  }
});

const symbolId = computed(() => `#icon-${props.iconName}`);
</script>

<template>
  <svg class="svg-icon" :class="className" aria-hidden="true" :width="width" :height="height">
    <use :xlink:href="symbolId" :fill="fill" />
  </svg>
</template>

<style lang="scss" scoped>
.svg-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
  overflow: hidden;
}
</style>
