<template>
  <div>
    <label for="title">
      タイトル
    </label>
    <input 
      id="title" 
      type="text"
      :value="value" 
      @input="$emit('input', $event.target.value)"
    > <!-- 「:value="value" 」でpropsで受け取ったvalueをinputに反映させる
           「@input="$emit('input')"」で文字の入力が検知された際に
            親のinput(v-model)に指定した「"eventData.title = $event"」が実行される
            "$emit('input', $event.target.value)"については
            イベントの情報を$eventで受け取り、target.valueが入力された値となる
            それをinputというカスタムイベントとして
            $emitで親コンポーネントにそのイベントを反映させる -->
    <pre>{{ value }}</pre>
  </div>
</template>

<script>
export default {
  props: ["value"] // 親コンポーネントの:valueの値を受け取る(v-modelの中身であるvalueの値)
}
</script>
