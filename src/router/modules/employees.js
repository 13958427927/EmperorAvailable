
import Layout from '@/layout'
export default {
  path: '/employees',
  name: 'employees',
  component: Layout,
  meta: {
    title: '设备管理', icon: 'shebei'
  },

  children: [{
    path: 'vm/index',
    component: () => import('@/views/employees/equipment'),

    meta: {
      title: '设备管理'
    }
  },
  {
    path: 'vm/status',
    component: () => import('@/views/employees/Status'),
    meta: {
      title: '设备状态'
    }
  }, {
    path: 'vm/type',
    component: () => import('@/views/employees/DeviceType.vue'),
    meta: {
      title: '设备类型管理'
    }
  }]
}

