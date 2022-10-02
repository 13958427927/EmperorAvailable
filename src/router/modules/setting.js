
import Layout from '@/layout'
export default {
  path: '/setting',
  name: 'setting',
  component: Layout,
  children: [{
    path: '',
    component: () => import('@/views/setting'),

    meta: {
      title: '订单管理', icon: 'el-icon-document-copy'
    }
  }]
}

