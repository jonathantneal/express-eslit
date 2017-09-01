// external tooling
import rollupPluginBabel from 'rollup-plugin-babel';
import babelPresetEnv from 'babel-preset-env';
import babelPluginExternalHelpers from 'babel-plugin-external-helpers';

// export rollup configuration
export default {
	external: [
		'eslit'
	],
	plugins: [
		rollupPluginBabel({
			babelrc: false,
			plugins: [
				babelPluginExternalHelpers
			],
			presets: [
				[
					babelPresetEnv,
					{
						modules: false
					}
				]
			]
		})
	]
};
