<template>
  <!-- 複数のデータを渡したい時はオブジェクトにして記述する -->
  <!-- :[引数の値]で引数を渡すことが出来る -->
  <!-- 引数の後に、「.」で修飾子をいくつも付け加えることが出来る -->
  <p v-border:solid.round.shadow="{width: '3px', color: 'brown'}">Home</p>
</template>