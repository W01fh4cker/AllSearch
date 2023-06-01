<template>
    <el-card>
      <h2>作者简介</h2>
      <div class="card-content">
        <img class="avatar" :src="author.avatar" alt="Author Avatar" />
        <div class="info">
          <h3>{{ author.name }}</h3>
          <p>{{ author.bio }}</p>
          <div style="display: flex; align-items: center;">
            <font-awesome-icon :icon="['fab', 'github']" />
            <p style="margin-left: 5px;"> > {{ author.github }}</p>
          </div>
          <div style="display: flex; align-items: center;">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <p style="margin-left: 5px;"> > {{ author.gmail }}</p>
          </div>
        </div>
      </div>
      <h2>帮助交流</h2>
      <div class="card-content">
        <div class="weixin-qr-code">
          <h4>微信群二维码</h4>
          <img src="../assets/weixinqun.png" alt="WeChat Group QR Code" />
        </div>
        <div class="qq-qr-code">
          <h4>QQ群二维码</h4>
          <img src="../assets/qqqun.png" alt="QQ Group QR Code" />
        </div>
      </div>
    </el-card>
  </template>
    
  <script>
    /* @vite-ignore */
    import { ref } from 'vue'
    import { fas } from '@fortawesome/free-solid-svg-icons';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { fab } from '@fortawesome/free-brands-svg-icons';
    library.add(fas, fab);
    export default {
      components: {
        FontAwesomeIcon,
      },
      setup() {
        const author = ref({  
          name: 'W01fh4cker',
          avatar: './src/assets/avatar.jpg',
          bio: 'A Web Security Ethusiast and Code Lover.',
          github: 'https://github.com/W01fh4cker',
          gmail: "sharecat2022@gmail.com"
        });
    
        return {
          author,
        };
      },
    };
  </script>
    
  <style scoped>
    .card-content {
      display: flex;
      justify-content: space-around;
    }
  
    .weixin-qr-code img,
    .qq-qr-code img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
    
    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-right: 20px;
    }
    
    .info {
      flex: 1;
    }
  </style>
    