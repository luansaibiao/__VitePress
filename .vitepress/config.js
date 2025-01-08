import {defineConfig} from 'vitepress';
import {generateSidebar} from 'vitepress-sidebar';


export default defineConfig({
  lang: 'zh-CN',
  title: '网页标签title',  // 浏览器顶部标签页上的title
  head: [

    // 浏览器顶部标签页上的ico
    ['link', {rel: 'icon', href: `/assets/svg/favicon.svg`}],  // 浏览器顶部标签页上的ico

    // 百度统计
    ['script',
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?73a7cbb7690ab539776d3ee9a53a5533";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ]
  ],

  description: '这是一个用 VitePress 站点的文档站点',  // 该配置用于SEO使用,用于搜索引擎抓取摘要,被百度谷歌等搜索引擎收录(可被爬虫爬取到),前提是网站拥有一定质量,能被各大厂的搜索引擎收录
  srcDir: 'docs',  // 指定项目的根目录,决定了VitePress从哪个目录开始构建站点的内容结构,并且设置后VitePress会从项目根目录开始查找文档文件

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

    // 使用vitepress-sidebar插件函数方式自动生成侧边栏
    sidebar: generateSidebar({
      // ============ [ RESOLVING PATHS ] ============
      documentRootPath: '/docs',  // 指定文档根目录，默认是 './'
      scanStartPath: null,         // 指定扫描的起始路径，默认是从 `documentRootPath` 开始
      resolvePath: null,           // 自定义路径解析规则，默认是根据文件结构生成
      basePath: '/',               // 侧边栏链接的基础路径，默认是 '/'

      // ============ [ GROUPING ] ============
      collapsed: false,            // 是否默认折叠侧边栏，默认是 `false`
      collapseDepth: 2,            // 折叠的层级深度，默认是 2
      rootGroupText: 'Contents',   // 根级别的组标题，默认是 'Contents'
      rootGroupLink: null,         // 根级别的组链接，默认是 `null`，即没有链接
      rootGroupCollapsed: false,   // 根级别的组是否默认折叠，默认是 `false`

      // ============ [ GETTING MENU TITLE ] ============
      useTitleFromFileHeading: true,  // 是否从文件的第一个标题提取侧边栏项的标题，默认是 `true`
      useTitleFromFrontmatter: true,  // 是否从 Frontmatter 中提取标题，默认是 `true`
      useFolderLinkFromIndexFile: true,  // 是否使用 `index.md` 文件作为文件夹的链接，默认是 `true`
      useFolderTitleFromIndexFile: true,  // 是否使用 `index.md` 文件中的标题作为文件夹的标题，默认是 `true`
      frontmatterTitleFieldName: 'title',  // 指定 Frontmatter 中的标题字段，默认是 'title'

      // ============ [ GETTING MENU LINK ] ============
      useFolderLinkFromSameNameSubFile: false,  // 是否使用与文件夹同名的子文件作为链接，默认是 `false`
      // useFolderLinkFromIndexFile: true,         // 是否使用 `index.md` 文件作为文件夹的链接，默认是 `true` (与GETTING MENU TITLE中的配置重复所以只能二选一)
      folderLinkNotIncludesFileName: false,     // 文件夹链接是否不包含文件名，默认是 `false`

      // ============ [ INCLUDE / EXCLUDE ] ============
      excludePattern: ['README.md', 'about'],  // 排除某些文件或文件夹，默认是排除 `README.md`
      excludeFilesByFrontmatterFieldName: 'exclude',  // 根据 Frontmatter 中的字段排除文件，默认是 `exclude`
      includeDotFiles: false,                    // 是否包含隐藏文件，默认是 `false`
      includeEmptyFolder: false,                 // 是否包含空文件夹，默认是 `false`
      includeRootIndexFile: false,               // 是否包含根目录下的 `index.md` 文件，默认是 `false`
      includeFolderIndexFile: true,              // 是否包含文件夹下的 `index.md` 文件，默认是 `true`

      // ============ [ STYLING MENU TITLE ] ============
      hyphenToSpace: true,                       // 是否将连字符转换为空格，默认是 `true`
      underscoreToSpace: true,                   // 是否将下划线转换为空格，默认是 `true`
      capitalizeFirst: false,                    // 是否首字母大写，默认是 `false`
      capitalizeEachWords: false,                // 是否每个单词首字母大写，默认是 `false`
      keepMarkdownSyntaxFromTitle: false,        // 是否保留 Markdown 语法，默认是 `false`
      removePrefixAfterOrdering: true,           // 是否在排序后移除前缀，默认是 `false`
      prefixSeparator: '.',                      // 前缀分隔符，默认是 '.'

      // ============ [ SORTING ] ============
      manualSortFileNameByPriority: [],          // 手动指定文件的排序优先级，默认是空数组
      sortFolderTo: null,                        // 指定文件夹的排序位置，默认是 `null`
      sortMenusByName: false,                    // 是否按名称排序，默认是 `false`
      sortMenusByFileDatePrefix: false,          // 是否按文件日期前缀排序，默认是 `false`
      sortMenusByFrontmatterOrder: false,        // 是否按 Frontmatter 中的 `order` 字段排序，默认是 `false`
      frontmatterOrderDefaultValue: 0,           // 当 `frontmatterOrder` 未指定时的默认值，默认是 0
      sortMenusByFrontmatterDate: false,         // 是否按 Frontmatter 中的 `date` 字段排序，默认是 `false`
      sortMenusOrderByDescending: false,         // 是否按降序排序，默认是 `false`
      sortMenusOrderNumericallyFromTitle: false, // 是否按标题中的数字排序，默认是 `false`
      sortMenusOrderNumericallyFromLink: false,  // 是否按链接中的数字排序，默认是 `false`

      // ============ [ MISC ] ============
      debugPrint: false,                          // 是否启用调试输出，默认是 `false`
    })
  }
});