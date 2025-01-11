<template>
  <Layout>

    // 文章最上方添加样式
    <template #doc-before>
      <CustomStyle />
    </template>

    // 文章最下方添加定义好的waline
    <template #doc-after>
      <Walineinit />
    </template>
  </Layout>
</template>


<script setup>
import DefaultTheme from 'vitepress/theme'
import Walineinit from './doc-after__WalineComment.vue'
import CustomStyle from './doc-before__UpdateTime_ReadingDuration.vue'

const { Layout } = DefaultTheme
</script>