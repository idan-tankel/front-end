// import configCommon from './common.json';

// Fixed for TS file:
const configCommon = {
  "APP_NAME": "UNIVERSALDOT",
  "CUSTOM_RPC_METHODS": {}
}

// Using `require` as `import` does not support dynamic loading (yet).
// eslint-disable-next-line @typescript-eslint/no-var-requires
const configEnv = require(`./${process.env.NODE_ENV}.json`);

// Accepting React env vars and aggregating them into `config` object.
const envVarNames = ['REACT_APP_PROVIDER_SOCKET']
const envVars = envVarNames.reduce((mem, n) => {
  // Remove the `REACT_APP_` prefix
  if (process.env[n] !== undefined) (mem as any)[n.slice(10)] = process.env[n]
  return mem
}, {})

const config: any = { ...configCommon, ...configEnv, ...envVars }
export default config