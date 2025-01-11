<template>
  <div>
    <!-- 添加一些简单的文本用于调试 -->
    <p>调试信息：如果能看到这个文本，说明组件已成功挂载。</p>

    <span>这是一个该文章最上方的占位1 {{ articleTitle }}</span><br>
    <span>这是一个该文章最上方的占位2 {{ currentTime }}</span><br>
    <span>这是一个该文章最上方的占位3 {{ recommendedContent }}</span>
    <span>这是一个该文章最上方的占位4 {{ recommendedContent }}</span>
  </div>
</template>


<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vitepress'

// 获取当前文章的标题
const route = useRoute()
const articleTitle = ref(route.data.title)

// 获取当前时间
const currentTime = ref(new Date().toLocaleString())

// 推荐的内容
const recommendedContent = ref('占位变量')

// 监听路由变化以更新 articleTitle
watch(
  () => route.data,
  (newData) => {
    articleTitle.value = newData.title
    currentTime.value = new Date().toLocaleString() // 如果需要更新时间也可以在这里进行
  },
  { immediate: true } // 立即执行一次，以便在组件初始化时也能正确设置 title
)
</script>