const path=require('path')

const { override, 
  fixBabelImports,
  addWebpackResolve, 
  addWebpackAlias,
  addDecoratorsLegacy
} = require('customize-cra');


 module.exports = override(
     //按需加载
       fixBabelImports('import', {
         libraryName: 'antd-mobile',
         style: 'css',
       }),
       //resolve
       addWebpackResolve({
        extensions:[".js",".json",".jsx"]
       }),
       //给文件夹起别名
       addWebpackAlias({
         
           "@":path.resolve(__dirname,'src/'),
           "@a":path.resolve(__dirname,'src/assets'),
           "@c":path.resolve(__dirname,'src/components'),
           "@u":path.resolve(__dirname,'src/utils')

         
       }),
       addDecoratorsLegacy()
     );


    //  手机远程发送关窗信息，远程车辆接收。应用层通信及架构
    //  position属性
    //  深浅拷贝
    //  图片优化
    //  多次发送请求，后端如何知道目前操作的用户
    //  WebSocket
     

