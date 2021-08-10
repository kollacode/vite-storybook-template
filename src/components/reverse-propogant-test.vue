<template>
  <br><input v-model="modelValue" name="text-input">
</template>

<script lang="ts">
import {useMutableProps} from "../use/mutableProps"
export default {
  name: "input-2",
  props: {
    modelValue: String
  },
  setup(props, {emit}) {
    const {modelValue} = useMutableProps(props, emit)
    return {modelValue}
  }
}
</script>

<style>

</style>