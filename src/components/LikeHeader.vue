<template>
  <div>
    <!-- slotタグで親コンポーネントで定義したものをHTMLやテンプレート構文を受け取れる -->
    <!-- slotタグの中に要素やデータを記述すると親コンポーネントにそれを引き渡せる -->
    <slot v-bind:user="user" text="text"></slot>
    <slot></slot> <!-- defaultはname属性なしでも問題なく動作する -->
    <hr>
    <p>いいねの数</p>
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