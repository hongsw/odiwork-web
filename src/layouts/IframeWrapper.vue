
<template>
  <iframe id="iframe" srcdoc='<h1>loading...</h1>'></iframe>
  <div id="iframeContentsWrapper" class="hidden">
    <slot/>
  </div>
  <button v-on:click="move()"></button>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  created() {
      const loadHtmlIntoIframe = ()=>{
        var html_string = document.getElementById('iframeContentsWrapper').innerHTML; //"<h1>My iframe23</h1>";
        document.getElementById('iframe').srcdoc = html_string;
      }
      document.onreadystatechange = () => {
        if (document.readyState == "complete") {
          loadHtmlIntoIframe()  
        }
      }
      document.addEventListener('DOMContentLoaded', function () {
            loadHtmlIntoIframe()
      });
  }
})
</script>
<style>
.hidden{
  display: none;
}
#iframe {
    width: 100%;
}
</style>
