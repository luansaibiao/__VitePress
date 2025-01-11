<template>
  <Waline
    v-bind="walineConfig"
    :path="path"
    @error="handleError"
  />
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vitepress';
import { Waline } from '@waline/client/component';
import '@waline/client/style';

// 定义 Waline 的配置
const walineConfig = {
  serverURL: 'https://localhost', // 替换为你的实际服务端地址
  emoji: ['https://cdn.jsdelivr.net/gh/walinejs/emojis/weibo'],
  el: '#waline',
  lang: 'zh-CN',
  placeholder: '说点什么...',
  dark: 'auto',
  comment: true,
  search: true,
  login: 'enable',
  wordLimit: 0,
  pageSize: 10,
  meta: ['nick', 'mail', 'link'],
  requiredMeta: ['nick', 'mail'],
  highlight: true,
  texRenderer: true,
  math: true,
  upload: (file) => new Promise((resolve) => {
    // 实现自定义文件上传逻辑，并调用 resolve(url) 返回图片 URL
    setTimeout(() => resolve('https://example.com/image.png'), 1000); // 示例中的延迟模拟
  }),
  copyright: true,  // 是否显示版权信息，默认为 true
  reaction: true,
  imageUploader: true,
};

// 获取当前页面路径
const path = computed(() => useRoute().path);

// 错误处理函数
function handleError(error) {
  console.error('Waline Error:', error);
}
</script>