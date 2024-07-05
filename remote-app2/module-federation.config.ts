import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote-app2',
  exposes: {
    './Routes': 'remote-app2/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
