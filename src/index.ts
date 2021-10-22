import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import type { Options as ESLintOptions } from 'eslint-webpack-plugin';

interface DocusaurusPluginOptions extends ESLintOptions {
    id?: string
}

export default (context?: object, options?: DocusaurusPluginOptions) => ({
  name: 'docusaurus-plugin-eslint',
  configureWebpack() {
    delete options?.id;
    return {
      plugins: [new ESLintWebpackPlugin(options)],
    };
  },
});
