<template>
      
          <cube-scroll
            ref="scroll"
             direction="horizontal">
            <ul class="list-wrapper">
    <li v-for="item in items" class="list-item">{{ item }}</li>
  </ul>
          </cube-scroll>
      

</template>

<script type="text/ecmascript-6">

const _data = [
  '😀 😁 😂 🤣 😃 😄 ',
  '🙂 🤗 🤩 🤔 🤨 😐 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '😔 😕 🙃 🤑 😲 ☹️ ',
  '🐣 🐣 🐣 🐣 🐣 🐣🐣 🐣 🐣 🐣 🐣 🐣🐣 🐣 🐣 🐣 🐣 🐣🐣 🐣 🐣 🐣 🐣 🐣🐣 🐣 🐣 🐣 🐣 🐣🐣 🐣 🐣 🐣 🐣 🐣🐣 🐣 🐣 🐣 🐣 🐣🐣 🐣 🐣 🐣 🐣 🐣 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '🐥 🐥 🐥🐣 🐣 🐣 🐣 🐣 🐣🐣 🐣 🐣 🐣 🐣 🐣🐣 🐣 🐣 🐣 🐣 🐣🐣 🐣 🐣 🐣 🐣 🐣 🐥 🐥 🐥 ',
  '🤓 🤓 🤓 🤓 🤓 🤓 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '🦔 🦔 🦔 🦔 🐣 🐣 🐣 🐣 🐣 🐣🐣 🐣 🐣 🐣 🐣 🐣🐣 🐣 🐣 🐣 🐣 🐣🦔 🦔 ',
  '🙈 🙈 🙈 🙈🐣 🐣 🐣 🐣 🐣 🐣🐣 🐣 🐣 🐣 🐣 🐣🐣 🐣 🐣 🐣 🐣 🐣 🙈 🙈 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '🚖 🚖 🚖 🚖 🚖 🚖 ',
  '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 '
]
export default {
  data() {
    return {
      items: _data,
    }
  },

}
</script>

<style scoped>

</style>