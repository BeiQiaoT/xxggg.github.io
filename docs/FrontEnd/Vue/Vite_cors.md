# ⚡ Vite 跨域 - 开发环境

### ⚡ 接口跨域 - 【仅在开发环境下】
- 根目录下新建 -> vite.config.js 👇
```typescript
server: {
	proxy: { 
		'/api': {
			target: '', // 后端服务实际地址
				changeOrigin: true, //开启代理
					rewrite: (path) => path.replace(/^\/api/, '')
		}
	}
},
```
```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  server: {
    host: '0.0.0.0',
    proxy: { 
      '/api': {
        target: 'http://api.xgtools.top', // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/fy': {
        target: 'http://api.fanyi.baidu.com/api/trans/vip/translate', 
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/fy/, '')
      },
    }
  },
  base:'./'
})
```
