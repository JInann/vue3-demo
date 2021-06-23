## vite+vue3+组合api+ts

1. ts

   1. 初始化 

      ```bash
      npm init vite-app todo-list-ts --template vue-ts
      ```

   2. 解决eslint不检查.ts文件

      配置vscode

      ```json
      "eslint.validate": [
      		"typescript"
      ]
      ```

   3. 解决`找不到模块“./*.vue”或其相应的类型声明。`

      在`*.d.ts`文件新增

      ```typescript
      declare module '*.vue' {
        import { App, defineComponent } from 'vue'
        const component: ReturnType<typeof defineComponent> & {
          install(app: App): void
        }
        export default component
      }
      ```

2. 在Vue文件中无法使用.d.ts文件中声明的接口（.ts文件中正常使用），开发时手动引入`import 'type.d.ts'`报错消失，但是，打包时报错，无法识别对应文件。解决方式：以模块化的方式导出接口，在需要用的地方手动引入。

3. composition API/组合api/setup

   1. 定义组件使用defineComponent，生命周期函数onMounted，计算属性computed，等等均由vue中引入。
   2. setup函数返回所有模板中要用的数据。
   3. ref处理基础数据类型，使用.value访问数据，reactive处理引用数据类型。ref也能传对象，底层还是调用了reactive。reactive只能传对象。

