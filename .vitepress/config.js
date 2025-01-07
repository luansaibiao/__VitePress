import {defineConfig} from 'vitepress';
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';

export default defineConfig({
  lang: 'zh-CN',
  title: '网页标签title',  // 浏览器顶部标签页上的title
  head: [['link', {rel: 'icon', href: '/assets/svg/favicon.svg'}]],  // 浏览器顶部标签页上的ico
  description: '这是一个用 VitePress 站点的文档站点',  // 该配置用于SEO使用,用于搜索引擎抓取摘要,被百度谷歌等搜索引擎收录(可被爬虫爬取到),前提是网站拥有一定质量,能被各大厂的搜索引擎收录
  srcDir: 'docs',  // 指定项目的根目录,决定了VitePress从哪个目录开始构建站点的内容结构,并且设置后VitePress会从项目根目录开始查找文档文件

  // vite的
  vite: {
    plugins: [
      AutoSidebar({
          path: '/docs', // 指定自动生成侧边栏的目录
          ignoreList: ['README.md', 'about'],  // 忽略某些文件
          scanRootMdFiles: false,  // 扫描根目录下的 .md 文件
          ignoreIndexItem: true,  // 忽略文件名名中包含 index 的文件
          collapsed: false,  // 是否折叠侧边栏
          deletePrefix: '01',  // 删除.md文件中指定字符 (可使用正则表达式)
          titleFromFile: false,  // 从文件内容中提取标题
          titleFromFileByYaml: false,  // 从 YAML frontmatter 中提取标题
        }
      )
    ]
  },

  // 主题配置
  themeConfig: {
    logo: '/assets/img/2025-01-05 17-56-54.png',  // 网站使用的默认主题右上角logo
    siteTitle: '默认主题内的右上角title',

    //底部信息
    footer: {
      message: '<a href="https://beian.miit.gov.cn/#/Integrated/index">这是一个网站地板的备案号</a>',
      copyright: " Copyright © 2024 longshao.website All Rights Reserved. ",
    },

    //手机端配置返回顶部
    returnToTop: true,

    //手机端配置返回顶部按钮显示文字
    returnToTopLabel: "返回顶部",

    //手机端配置侧边栏菜单按钮显示文字
    sidebarMenuLabel: "菜单",

    // 开启搜索功能
    search: {
      provider: 'local'
    },

    // 右上角社交功能
    socialLinks: [
      {icon: 'gitee', link: 'https://gitee.com'},
      {icon: 'bilibili', link: 'https://www.bilibili.com'}
    ],

    //更新时间
    lastUpdated: {
      text: '更新时间'
    },

    //翻页
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    //右侧内容导航栏
    outline: {
      level: [0, 6],
      label: "章节目录"
    },

    // 导航栏配置
    nav: [
      {text: '关于', link: '/about/'},
      {text: '文档1', link: '/demo1'},
      {text: '文档2', link: '/demo2/'}
    ],
  }
});