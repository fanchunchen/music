<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src

import { getFindData } from "@/request/home";
export default {
  name: "Home",
  created() {
    getFindData().then((res) => {
      console.log(res);
    });
  },
  components: {},
};
</script>
