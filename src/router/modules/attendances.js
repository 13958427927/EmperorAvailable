import Layout from '@/layout'
export default {
  path: '/attendances', // 路径
  name: 'attendances', // 给路由规则加一个name
  component: Layout, // 组件
  meta: {
    title: '商品管理', icon: 'el-icon-menu'
  },
  children: [{
    path: '/sku/sku-class',
    component: () => import('@/views/attendances/merchandise'),
    meta: {
      title: '商品类型'
    }
  },
  {
    path: '/sku/sku',
    component: () => import('@/views/attendances/commodity'),

    meta: {
      title: '商品管理'
    }
  }]
}

