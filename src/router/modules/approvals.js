import Layout from '@/layout'
export default {
  path: '/approvals', // 路径
  name: 'approvals', // 给路由规则加一个name
  component: Layout, // 组件
  meta: {
    title: '工单管理', icon: 'el-icon-tickets'
  },
  // 配置二级路的路由表
  children: [{
    path: '/task/business', // 这里当二级路由的path什么都不写的时候 表示该路由为当前二级路由的默认路由
    component: () => import('@/views/approvals/Operating'),
    // 路由元信息  其实就是存储数据的对象 我们可以在这里放置一些信息
    meta: {
      title: '运营工单'
    }
  },
  {
    path: '/task/operation', // 这里当二级路由的path什么都不写的时候 表示该路由为当前二级路由的默认路由
    component: () => import('@/views/approvals/Operational'),
    // 路由元信息  其实就是存储数据的对象 我们可以在这里放置一些信息
    meta: {
      title: '运维工单'
    }
  }]
}
