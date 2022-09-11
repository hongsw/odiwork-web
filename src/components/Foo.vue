<template>
    <div class="foo">
      <hr>Hi I'm a Foo component with the headline:
      <h2>{{block.headline}}</h2>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      block: Object
    },
    name: "foo"
  };
  </script>
  