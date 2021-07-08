<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default{
  data() {
    return {
      user: {
        firstName: 'Jack',
        lastName: 'Donald'
      }
    }
  }
}
</script>

<!-- CSSではslotで置き換えたものに子コンポーネントでも適用できる -->
<!-- 親と子で同じ要素にCSSを適用した場合親のものが優先される -->
<style scoped>
  h1 {
    color: paleturquoise;
  }
</style>