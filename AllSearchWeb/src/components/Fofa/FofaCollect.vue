<template>
  <div>
    <el-form :model="form" label-width="120px">
      <el-form-item label="待查询语句">
        <el-input v-model="form.query" placeholder='app="泛微-协同办公OA"'></el-input>
      </el-form-item>
      <el-form-item label="查询条数">
        <el-input v-model.number="form.count" placeholder="查询条数"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fetchResults">点击查询</el-button>
        <el-button type="primary" @click="saveResults" :disabled="form.results.length === 0">保存结果至</el-button>
      </el-form-item>
      <el-form-item label="结果输出">
        <div class="results">
          <el-input
            v-model="form.resultText"
            type="textarea"
            :rows="form.results.length"
            placeholder="查询结果"
            readonly
            class="result-textarea"
          ></el-input>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive } from 'vue';
import axios from 'axios';
import { ElInput, ElButton, ElNotification } from 'element-plus';

export default {
  components: {
    ElInput,
    ElButton,
  },
  setup() {
    const form = reactive({
      query: 'app="paloalto-GlobalProtect" && country!="CN"',
      count: 100,
      results: [],
      resultText: '',
    });

    const fetchResults = () => {
      const encodedQuery = window.btoa(form.query);
      const url = `https://fofa.info/api/v1/search/all?email=1&key=1&qbase64=${encodedQuery}&size=${form.count}`;

      axios
        .get(url)
        .then((response) => {
          const data = response.data;
          console.log(url);
          console.log(data);
          if (!data.error) {
            form.results = data.results;
            form.resultText = form.results.map((result) => result[0]).join('\n');
          } else {
            console.error('查询出错:', data.error);
          }
        })
        .catch((error) => {
          console.error('请求出错:', error);
        });
    };

    const saveResults = () => {
      const resultText = form.resultText;
      const blob = new Blob([resultText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'query_results.txt';
      link.click();

      URL.revokeObjectURL(url);

      ElNotification({
        title: '保存成功',
        message: '查询结果已成功保存至文件',
        type: 'success',
      });
    };

    return {
      form,
      fetchResults,
      saveResults,
    };
  },
};
</script>

<style>
.results {
  margin-top: 10px;
}

.result-textarea {
  width: 764px;
  height: 500px;
  overflow: auto;
}
</style>
