import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes: [
        { path: '/a', component: '@/pages/component/a' },
        { path: '/b', component: '@/pages/component/a' },
        { path: '/c', component: '@/pages/component/a' },
      ],
    },
  ],
});
