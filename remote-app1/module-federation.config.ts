import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote-app1',
  exposes: {
    './Routes': 'remote-app1/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
