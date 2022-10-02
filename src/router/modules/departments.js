// 导出属于员工的路由规则
import Layout from '@/layout'
//  {  path: '', component: '' }
// 每个子模块 其实 都是外层是layout  组件位于layout的二级路由里面
export default {
  path: '/departments', // 路径
  name: 'departments', // 给路由规则加一个name
  component: Layout, // 组件
  meta: {
    title: '点位管理', icon: 'el-icon-location-outline' // meta属性的里面的属性 随意定义 但是这里为什么要用title呢， 因为左侧导航会读取我们的路由里的meta里面的title作为显示菜单名称
  },
  // 配置二级路的路由表
  children: [{
    path: '/node/region', // 这里当二级路由的path什么都不写的时候 表示该路由为当前二级路由的默认路由
    component: () => import('@/views/departments/direct'),
    // 路由元信息  其实就是存储数据的对象 我们可以在这里放置一些信息
    meta: {
      title: '区域管理' // meta属性的里面的属性 随意定义 但是这里为什么要用title呢， 因为左侧导航会读取我们的路由里的meta里面的title作为显示菜单名称
    }
  },
  {
    path: '/node/node', // 这里当二级路由的path什么都不写的时候 表示该路由为当前二级路由的默认路由
    component: () => import('@/views/departments/Level'),
    // 路由元信息  其实就是存储数据的对象 我们可以在这里放置一些信息
    meta: {
      title: '点位管理' // meta属性的里面的属性 随意定义 但是这里为什么要用title呢， 因为左侧导航会读取我们的路由里的meta里面的title作为显示菜单名称
    }
  }, {
    path: '/node/partner', // 这里当二级路由的path什么都不写的时候 表示该路由为当前二级路由的默认路由
    component: () => import('@/views/departments/Partne'),
    // 路由元信息  其实就是存储数据的对象 我们可以在这里放置一些信息
    meta: {
      title: '合作商管理' // meta属性的里面的属性 随意定义 但是这里为什么要用title呢， 因为左侧导航会读取我们的路由里的meta里面的title作为显示菜单名称
    }
  }]
}

