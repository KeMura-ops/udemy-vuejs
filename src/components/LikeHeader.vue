<template>
  <div>
    <!-- slotタグで親コンポーネントで定義したものをHTMLやテンプレート構文を受け取れる -->
    <slot name="title"></slot> 
    <hr>
    <p>いいねの数</p>
    <slot name="like"></slot>
  </div>
</template>

<script>
export default{
  props: ["headerText"]
}
</script>

<!-- CSSではslotで置き換えたものに子コンポーネントでも適用できる -->
<!-- 親と子で同じ要素にCSSを適用した場合親のものが優先される -->
<style scoped>
  h1 {
    color: paleturquoise;
  }
</style>