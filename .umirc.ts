import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/users/index', component: '@/pages/users/index' },
  ],
  fastRefresh: {},
  
});
