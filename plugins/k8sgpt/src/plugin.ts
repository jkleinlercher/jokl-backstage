import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const k8SgptPlugin = createPlugin({
  id: 'k8sgpt',
  routes: {
    root: rootRouteRef,
  },
});

export const K8SgptPage = k8SgptPlugin.provide(
  createRoutableExtension({
    name: 'K8SgptPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
