<template>
  <div id="app">
    <keep-alive exclude="Detail">  <!--vue标签，将路由加载的数据存入内存，再次进入这个路由则不用重新加载数据-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
