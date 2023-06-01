// main.js

const { app, dialog } = require('electron');
const axios = require('axios');

// 应用当前版本
const currentVersion = app.getVersion();
console.log(currentVersion)
// 服务器端版本检查URL
const versionCheckURL = 'https://github.com/W01fh4cker/AllSearch/blob/main/VERSION';

// 发送版本检查请求
axios.get(versionCheckURL)
  .then(response => {
    const latestVersion = response.data.latestVersion;
    console.log(latestVersion)
    // 比较版本号
    if (latestVersion > currentVersion) {
      // 弹出更新提示框
      dialog.showMessageBox({
        type: 'info',
        title: '更新提示',
        message: '有新的版本可用，是否现在更新？',
        buttons: ['是', '否']
      }).then(({ response }) => {
        if (response === 0) {
          // 用户选择更新，执行相应操作
          // 下载更新包、替换文件等操作
          // ...
        }
      });
    }
  })
  .catch(error => {
    console.error('版本检查失败', error);
});