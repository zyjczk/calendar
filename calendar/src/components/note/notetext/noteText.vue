<template>
  <div id="noteText">
    <!-- <textarea
      :value="activeNote.text"
      @input="ceshi(activeNote.text)"
      class="form-control">
    </textarea> -->
    <textarea
      :value="activeNote.text"
      v-model="text"
      class="form-control">
    </textarea>
    <footer-save :edit-text="text"></footer-save>
  </div>
</template>

<script src="./noteText.js"></script>
<style lang="scss"></style>
