## vite+vue3+eslint

1. 安装sass，默认不支持

2. eslint配置,需要手动安装依赖，配置文件

   1. 依赖：

   ```
   {
     ...
     "devDependencies": {
       ...
       "@vue/eslint-config-prettier": "^6.0.0",
       "babel-eslint": "^10.1.0",
       "eslint": "^7.29.0",
       "eslint-plugin-prettier": "^3.4.0",
       "eslint-plugin-vue": "^7.11.1",
       "prettier": "^2.3.1",
       ...
     }
   }
   
   ```

   2. 配置文件：

   ```javascript
   module.exports = {
     root: true,
     env: {
       node: true,
     },
     extends: ["plugin:vue/vue3-essential", "@vue/prettier"],
     rules: {
       "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
       "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
       "no-undef": "off",
       "no-unreachable": "off",
     },
     parserOptions: {
       parser: "babel-eslint",
     },
   };
   
   ```

3. vue3相关

   1. 挂载方式变更 

      ```javascript
      import { createApp } from "vue";
      import App from "./App.vue";
      
      createApp(App).mount("#app");
      ```

   2. 根Template支持多标签

      ```vue
      <template>
      	<div>1</div>
      	<div>2</div>
      </template>
      ```

      

   