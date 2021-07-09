<template>
  <div>
    <p>About</p>
    <input>
  </div>
</template>

<script>
export default {
  destroyed() {
    console.log("破壊されました");
  }
}
</script>
