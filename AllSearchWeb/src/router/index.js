// 导入所需的组件
import FofaCollect from '../components/Fofa/FofaCollect.vue'
import FofaShow from '../components/Fofa/FofaShow.vue'
import HunterCollect from '../components/Hunter/HunterCollect.vue'
import HunterShow from '../components/Hunter/HunterShow.vue'
import PlatformConfig from '../utils/PlatformConfig.vue'
import Help from '../utils/Help.vue'
// 导入路由插件
import { createRouter, createWebHistory } from 'vue-router'

// 创建路由实例
const router = createRouter({
  // 指定路由模式
  history: createWebHistory(),
  // 定义路由规则
  routes: [
    {
      path: '/',
      redirect: '/help'
    },
    {
      path: '/platformConfig',
      component: PlatformConfig
    },
    {
      path: '/help',
      component: Help
    },
    {
      path: '/fofaCollect',
      component: FofaCollect
    },
    {
      path: '/fofaShow',
      component: FofaShow
    },
    {
      path: '/hunterCollect',
      component: HunterCollect
    },
    {
      path: '/hunterShow',
      component: HunterShow
    }
  ]
})

// 导出路由实例
export default router