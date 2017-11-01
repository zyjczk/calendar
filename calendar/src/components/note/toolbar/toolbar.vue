<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavorite" class="glyphicon glyphicon-star" :class="{starred: activeNote.favorite}"></i> 
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i> 
  </div>
</template>

<script src="./toolbar.js"></script>
<style src='./toolbar.scss' lang="scss"></style>
