import {defineConfig} from 'vitepress';
import {generateSidebar} from 'vitepress-sidebar';


// 自定义引用自动生成侧边栏插件的默认配置
const defaultSidebarConfig = {
  // ============ [ RESOLVING PATHS ] ============
  documentRootPath: '/docs',   // 指定文档根目录，默认是 './'
  scanStartPath: '/',         // 指定扫描的起始路径，默认是从 `documentRootPath` 开始 (指定从哪个路径开始扫描文件并根据扫描到的文件生成侧边栏)
  resolvePath: null,           // 自定义路径解析规则，默认是根据文件结构生成
  basePath: '/',               // 侧边栏链接的基础路径，默认是 '/'

  // ============ [ GROUPING ] ============
  collapsed: false,            // 是否默认折叠侧边栏，默认是 `false`
  collapseDepth: 1,            // 折叠的层级深度，默认是 2
  rootGroupText: '',      // 根级别的组标题，默认是 'Contents'
  rootGroupLink: null,         // 根级别的组链接，默认是 `null`，即没有链接,如果设置'/guide/overview的话即表示点击分组跳转到该链接路径
  rootGroupCollapsed: false,   // 根级别的组是否默认折叠，默认是 `false`

  // ============ [ SORTING ] ============
  manualSortFileNameByPriority: [],          // 手动指定文件的排序优先级，默认是空数组
  sortFolderTo: null,                        // 指定文件夹的排序位置，默认是 `null`
  sortMenusByName: true,                    // 是否按名称排序，默认是 `false`
  sortMenusByFileDatePrefix: false,          // 是否按文件日期前缀排序，默认是 `false`
  sortMenusByFrontmatterOrder: false,        // 是否按 Frontmatter 中的 `order` 字段排序，默认是 `false`
  sortMenusByFrontmatterDate: false,         // 是否按 Frontmatter 中的 `date` 字段排序，默认是 `false`
  sortMenusOrderByDescending: false,         // 是否按降序排序，默认是 `false`
  sortMenusOrderNumericallyFromTitle: false, // 是否按标题中的数字排序，默认是 `false`
  sortMenusOrderNumericallyFromLink: false,  // 是否按链接中的数字排序，默认是 `false`
  frontmatterOrderDefaultValue: 0,           // 当 `frontmatterOrder` 未指定时的默认值，默认是 0

  // ============ [ GETTING MENU TITLE ] ============
  useTitleFromFileHeading: false,  // 是否从文件的第一个标题提取侧边栏项的标题，默认是 `true`
  useFolderTitleFromIndexFile: false,  // 是否使用 `index.md` 文件中的标题作为文件夹的标题，默认是 `true`
  frontmatterTitleFieldName: 'title',  // 指定 Frontmatter 中的标题字段，默认是 'title'
  useTitleFromFrontmatter: false,  // 是否从 Frontmatter 中提取标题，默认是 `true`

  // ============ [ GETTING MENU LINK ] ============
  useFolderLinkFromSameNameSubFile: false,  // 是否使用与文件夹同名的子文件作为链接，默认是 `false`
  useFolderLinkFromIndexFile: false,         // 是否使用 `index.md` 文件作为文件夹的链接，默认是 `true`
  folderLinkNotIncludesFileName: false,     // 文件夹链接是否不包含文件名，默认是 `false`

  // ============ [ INCLUDE / EXCLUDE ] ============
  excludePattern: ['README.md', 'index.md'],  // 排除某些文件或文件夹，默认是排除 `README.md`
  excludeFilesByFrontmatterFieldName: 'exclude',  // 根据 Frontmatter 中的字段排除文件，默认是 `exclude` (详情见vitepress对md文档内exclue的规则)
  includeDotFiles: false,                    // 是否包含隐藏文件，默认是 `false`
  includeEmptyFolder: false,                 // 是否包含空文件夹，默认是 `false`
  includeRootIndexFile: false,               // 是否包含根目录下的 `index.md` 文件，默认是 `false`
  includeFolderIndexFile: false,              // 是否包含文件夹下的 `index.md` 文件，默认是 `true`

  // ============ [ STYLING MENU TITLE ] ============
  hyphenToSpace: false,                       // 是否将连字符转换为空格，默认是 `true`
  underscoreToSpace: false,                   // 是否将下划线转换为空格，默认是 `true`
  capitalizeFirst: false,                    // 是否首字母大写，默认是 `false`
  capitalizeEachWords: false,                // 是否每个单词首字母大写，默认是 `false`
  keepMarkdownSyntaxFromTitle: false,        // 是否保留 Markdown 语法，默认是 `false`
  prefixSeparator: '--',                      // 前缀分隔符，默认是 '.'
  removePrefixAfterOrdering: false,           // 是否在排序后移除前缀，默认是 `false`

  // ============ [ MISC ] ============
  debugPrint: false,                          // 是否启用调试输出，默认是 `false`
}

export default defineConfig({
  lang: 'zh-CN',
  title: '网页标签title1',  // 浏览器顶部标签页上的title
  description: '这是一个用 VitePress 站点的文档站点',  // 该配置用于SEO使用,用于搜索引擎抓取摘要,被百度谷歌等搜索引擎收录(可被爬虫爬取到),前提是网站拥有一定质量,能被各大厂的搜索引擎收录
  srcDir: 'docs',  // 指定项目的根目录,决定了VitePress从哪个目录开始构建站点的内容结构,并且设置后VitePress会从项目根目录开始查找文档文件

  // 网站头部信息配置
  head: [
    // 浏览器顶部标签页上的ico
    ['link', {rel: 'icon', href: `/assets/svg/favicon.svg`}],  // 浏览器顶部标签页上的ico

    // 百度统计
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?73a7cbb7690ab539776d3ee9a53a5533";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `]
  ],

  // 主题配置
  themeConfig: {
    logo: '/assets/img/2025-01-05 17-56-54.png',  // 网站使用的默认主题右上角logo
    siteTitle: '默认主题内的右上角title',

    //底部信息
    footer: {
      message: '<a href="https://beian.miit.gov.cn/#/Integrated/index">这是一个网站地板的备案号</a>',
      copyright: " Copyright © 2024 longshao.website All Rights Reserved. ",
    },

    // 手机端配置返回顶部/手机端配置返回顶部按钮显示文字/手机端配置侧边栏菜单按钮显示文字
    returnToTop: true,
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "菜单",

    // 开启搜索功能
    search: {provider: 'local'},

    // 右上角社交功能
    socialLinks: [
      {icon: 'gitee', link: 'https://gitee.com'},
      {icon: 'bilibili', link: 'https://www.bilibili.com'}
    ],

    // 文章下方显示更新时间
    lastUpdated: {text: '更新时间'},

    // 文章下方显示翻页按钮
    docFooter: {prev: "上一页", next: "下一页"},

    // 右侧文章标题的导航目录配置
    outline: {level: [0, 6], label: "章节目录"},

    // 顶部导航栏配置
    nav: [
      {text: '关于', link: '/about/'},
      {text: '文档1', link: '/demo1/'},
      {text: '文档2', link: '/demo2/'}
    ],

    // 左侧侧边栏配置
    sidebar: {
      '/about/': [
        {
          text: '关于的侧边栏',
          collapsed: false,
          items: generateSidebar({
            ...defaultSidebarConfig,
            scanStartPath: '/about/',
          })
        }
      ],

      '/demo1/': [
        {
          text: 'demo1的侧边栏',
          collapsed: false,
          items: generateSidebar({
            ...defaultSidebarConfig,
            scanStartPath: '/demo1/'
          })
        }
      ],

      '/demo2/': [
        {
          text: 'demo2的侧边栏',
          collapsed: false,
          items: generateSidebar({
            ...defaultSidebarConfig,
            scanStartPath: '/demo2/',
            excludePattern: ['demo2-sub1', 'demo2-sub2']
          })
        },
        {
          text: 'demo2-1的侧边栏',
          collapsed: false,
          items: generateSidebar({
            ...defaultSidebarConfig,
            scanStartPath: '/demo2/demo2-sub1/'
          })
        },
        {
          text: 'demo2-2的侧边栏',
          collapsed: false,
          items: generateSidebar({
            ...defaultSidebarConfig,
            scanStartPath: '/demo2/demo2-sub2/'
          })
        },
        {
          text: 'demo2的全部侧边栏',
          collapsed: false,
          items: generateSidebar({
            ...defaultSidebarConfig,
            scanStartPath: '/demo2/'
          })
        }
      ]
    }
  }
});