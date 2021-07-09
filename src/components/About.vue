<template>
  <div>
    <p>About</p>
    <input>
  </div>
</template>

<script>
export default {
  destroyed() { // 「keepalive」によってdestroyedは実行されなくなる
    console.log("破壊されました");
  },
  // その代わりに、activated、deactivatedという新しいライフサイクルフックが使用できる
  deactivated() {
    console.log("deactivated");
  },
  activated() {
    console.log("activated");
  }
}
</script>
