const path=require('path');
const HtmlWebpackPlugin =require("html-webpack-plugin");
module.exports=function(env,argv){
    const isEnvDevelopment =argv.mode === 'development'|| !argv.mode;
    const isEnvProduction  =argv.mode === 'production';
    return {
        mode:isEnvProduction ? 'production' :isEnvDevelopment && 'development',
        devtool:isEnvProduction ? 'source-map': isEnvDevelopment && 'cheap-module-source-map',
        entry:'./src/index.js',
        output:{
            filename:'bundle.js',
            path:path.resolve(__dirname,'dist')
        },
        devServer:{
            contentBase:'./dist',
        },
        plugins:[
            new HtmlWebpackPlugin({
                template:"public/index.html"
            })
        ],
        module:{
            rules:[
                { test:/\.js$/ ,
                    exclude:/node_modules/,
                    enforce:"pre",
                    use:"eslint-loader"},
                { test:/\.js$/ ,
                  exclude:/node_modules/,
                  use:'babel-loader'}
            ]
         }
    }
}