
import Layout from '@/layout'
export default {
  path: '/permission',
  name: 'permission',
  component: Layout,
  meta: {
    title: '人员管理', icon: 'renyuanguanli'
  },
  children: [{
    path: '/user/index',
    component: () => import('@/views/permission/personnel'),
    meta: {
      title: '人员列表'
    }
  },
  {
    path: '/user/user-task-stats',
    component: () => import('@/views/permission/PeopleWork'),

    meta: {
      title: '人效统计'
    }
  }, {
    path: '/user/user-work',
    component: () => import('@/views/permission/workload'),

    meta: {
      title: '工作量列表'
    }
  }]
}

