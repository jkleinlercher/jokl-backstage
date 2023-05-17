import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { k8SgptPlugin, K8SgptPage } from '../src/plugin';

createDevApp()
  .registerPlugin(k8SgptPlugin)
  .addPage({
    element: <K8SgptPage />,
    title: 'Root Page',
    path: '/k8sgpt'
  })
  .render();
