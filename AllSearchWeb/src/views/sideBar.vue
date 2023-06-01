<template>
  <div>
    <el-row class="tac">
      <el-col>
        <h2 class="mb-2" align="center">AllSearch<br>v0.0.1</h2>
        <el-menu class="el-menu-vertical" active-text-color="#FF8C00" background-color="#7B68EE" text-color="#fff">
          <el-sub-menu class="nday-batch-exploit" index="0">
            <template #title>
              <el-icon><location /></el-icon>
              <span>配置与帮助</span>
            </template>
            <el-menu-item class="platform-config" index="0-1" @click="navigateTo('/platformConfig')">
              <template #title>平台配置</template>
            </el-menu-item>
            <el-menu-item class="help" index="0-2" @click="navigateTo('/help')">
              <template #title>使用帮助</template>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu class="fofa" index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Fofa-华顺信安</span>
            </template>
            <el-menu-item class="fofa-collect" index="1-1" @click="navigateTo('/fofaCollect')">
              <template #title>fofa采集数据</template>
            </el-menu-item>
            <el-menu-item class="fofa-show" index="1-2" @click="navigateTo('/fofaShow')">
              <template #title>fofa数据展示</template>
            </el-menu-item>
          </el-sub-menu>
          <el-sub-menu class="hunter" index="2">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Hunter-奇安信</span>
            </template>
            <el-menu-item class="hunter-collect" index="2-1" @click="navigateTo('/hunterCollect')">
              <template #title>hunter采集数据</template>
            </el-menu-item>
            <el-menu-item class="hunter-show" index="2-2" @click="navigateTo('/hunterShow')">
              <template #title>hunter数据展示</template>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
  import { Location } from '@element-plus/icons-vue'
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const navigateTo = (routePath) => {
    router.push(routePath);
  };
</script>