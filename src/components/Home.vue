<template>
  <!-- 複数のデータを渡したい時はオブジェクトにして記述する -->
  <!-- :[引数の値]で引数を渡すことが出来る -->
  <!-- 引数の後に、「.」で修飾子をいくつも付け加えることが出来る -->
  <p v-border:solid.round.shadow="{width: '3px', color: 'brown'}">Home</p>
</template>

<script>
// カスタムディレクティブのローカル登録
export default {
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
      }
    }
  }
};
</script>