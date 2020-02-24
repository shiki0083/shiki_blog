module.exports = {
	runtimeCompiler: true,
	devServer: {
		proxy: {
			// '/api': {
			//   target: '',
			//   changeOrigin: true
			// }
			// '/api': {
			//   target: 'http://localhost:3333',
			//   changeOrigin: true
			// }
			'^/api': {
				target: 'http://localhost:3333',
				ws: true,
				changeOrigin: true
			}
		}
	}
};
