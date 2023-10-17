<template>
    <div class="page-header">
      <router-link to="/">Home</router-link>
      <router-link to="/menu">Menu</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageHeader',
  };
  </script>
  
  <style scoped>
  .page-header {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background-color: #333;
    color: white;
  }
  </style>
  