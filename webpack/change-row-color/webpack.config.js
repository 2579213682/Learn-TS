const path = require('path')

//1.导入html-webpack-plugin这个插件，得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin')
    //2.new构造函数，创建插件的实例对象。
const htmlPlugin = new HtmlPlugin({
    //指定要复制哪个页面
    template: './src/index.html',
    //指定复制出来的文件名和存放路径。
    filename: './index.html'
})

//注意，左侧的{}是解构赋值
const { CleanWebpackPlugin } = require('clean-webpack-plugin')



//使用Node,js中的导出语法，向外导出一个webpack的配置对象
module.exports = {
    //在开发调试阶段，建议大家都把devtool的值设置为eval-source-map
    // devtool: 'eval-source-map',
    // devtool: 'source-map',

    //在实际发布的时候，建议大家都把devtool的值设置为nosources-source-map或者直接关机SourceMap
    devtool: 'nosources-source-map',
    //代表:webpack运行的模式，可选值有两个 development和production
    // 结论：开发的时候一定要用development，因为追求的是打包的速度，而不是体积。
    // 反过来，发布上线的时候一定能要用production，因为上线追求的是体积小，而不是打包速度快。
    mode: 'development',
    //entry:'指定要处理哪个文件'
    entry: path.join(__dirname, './src/index.js'),

    //指定生成的文件要存放到哪里
    output: {
        //存放到目录
        path: path.join(__dirname, 'dist'),
        //生成的文件名
        filename: 'js/bundle.js'
    },
    //插件的数组，将来webpack在运行时，会加载并调用这些插件。
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    devServer: {
        //首次打包成功后，自动打开浏览器
        open: true,
        //在http协议中，如果端口号为80，则可以被省略。
        //port端口号设置
        port: 5210,
        //指定运行的主机地址
        host: '127.0.0.1'
    },
    module: {
        rules: [
            //定义了不同模块对应的loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //处理 .less文件的loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            //处理图片文件的loader
            //如果需要调通的loader只有一个，则只传递一个字符串也行，如果有多个loader，则必须指定数组。
            //在配置url-loader的时候，多个参数之间，使用&符号进行分隔。
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=470&outputPath=images' },
            //使用babel-loader处理高阶的JS语法
            //在配置babel-loader的时候，程序员只需要把自己的代码进行转换即可：一定要排除node_modules目录中的JS
            //因为第三方包中的JS兼容性，不需要程序员关心
            { test: /\.js$/, use: 'babel-loader', exclude: /node-modules/ }
        ]
    },
    resolve: {
        alias: {
            // 告诉webpack，程序员写的代码中，@符号表示src这一层目录
            '@': path.join(__dirname, './src/')
        }
    }
}