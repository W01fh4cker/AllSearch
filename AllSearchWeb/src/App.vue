<script setup>
  import SideBar from './views/sideBar.vue'
  
</script>

<template>
  <div class="common-layout">
  <el-container>
    <el-aside width="250px">
      <SideBar></SideBar>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</div>
</template>

<style lang="css">
  
</style>
