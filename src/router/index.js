import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/:mathAll(.*)',
      name: 'notfound',
      component: () => import('@/views/404/index'),
    },
    {
      path: '/',
      component: () => import('@/views/callResPage/index'),
      redirect:'/call',
      children: [
        {
          path: 'call',
          name:'call',
          component: () => import('@/views/callResPage/childComps/callHome'),
          meta: {
              title: '首页',
          }
      },
          {
            path: 'realname',
            name:'realname',
            component: () => import('@/views/callResPage/childComps/realNameAuth'),
            meta: {
                title: '实名认证',
            }
        },
          {
            path: 'phoneauth',
            name:'phoneauth',
            component: () => import('@/views/callResPage/childComps/phoneAuth'),
            meta: {
                title: '手机认证',
            }
        },
        {
          path: 'phonecode',
          name:'phonecode',
          component: () => import('@/views/callResPage/childComps/phoneCodeAuth'),
          meta: {
              title: '验证码',
          }
      },
      {
        path: 'regcompleted',
        name:'regcompleted',
        component: () => import('@/views/callResPage/childComps/regCompleted'),
        meta: {
            title: '注册完成',
        }
    },
    
  ]
  },  
     
  ]
})
export default router