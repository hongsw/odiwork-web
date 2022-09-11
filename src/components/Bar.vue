<template>
    <div class="bar">
      <hr>Hi I'm a Bar component with the title:
      <h2>{{block.title}}</h2>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      block: Object
    },
    name: "bar"
  };
  </script>
  