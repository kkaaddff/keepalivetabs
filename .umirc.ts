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
        { path: '/a1', component: '@/pages/components/a1' },
        { path: '/a2', component: '@/pages/components/a2' },
        { path: '/a3', component: '@/pages/components/a3' },
        { path: '/a4', component: '@/pages/components/a4' },
        { path: '/a5', component: '@/pages/components/a5' },
        { path: '/a6', component: '@/pages/components/a6' },
        { path: '/a7', component: '@/pages/components/a7' },
        { path: '/a8', component: '@/pages/components/a8' },
      ],
    },
  ],
});
