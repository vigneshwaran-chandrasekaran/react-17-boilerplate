/**
 * without ejecting the app, using react-app-rewired we can override webpack configuration
 */
var aliyunTheme = require('@ant-design/aliyun-theme');
const AntdScssThemePlugin = require('antd-scss-theme-plugin');

console.log('aliyunTheme pack', aliyunTheme);

const isProduction = process.env.NODE_ENV === 'production';

module.exports = function override(config, env) {
	console.log('web pack', config);
	console.log('web pack env', env);
	config.module.rules.push({
		test: /\.less$/,
		use: [
			{
				loader: 'style-loader',
			},
			{
				loader: 'css-loader', // translates CSS into CommonJS
			},
			{
				loader: 'less-loader', // compiles Less to CSS
				options: {
					lessOptions: {
						// If you are using less-loader@5 please spread the lessOptions to options directly
						modifyVars: {
							'primary-color': '#1DA57A',
							'link-color': '#1DA57A',
							'border-radius-base': '2px',
						},
						javascriptEnabled: true,
					},
				},
			},
		],
	});

	return config;
};
