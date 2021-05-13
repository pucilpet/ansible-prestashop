# 初始化安装

在云服务器上部署 PrestaShop 预装包之后，请参考下面的步骤快速入门。

## 准备

1. 在云控制台获取您的 **服务器公网IP地址** 
2. 在云控制台安全组中，检查 **Inbound（入）规则** 下的 **TCP:80** 端口是否开启
3. 若想用域名访问 PrestaShop，请先到 **域名控制台** 完成一个域名解析

## PrestaShop 安装向导

1. 使用本地电脑的 Chrome 或 Firefox 浏览器访问网址：*http://域名* 或 *http://Internet IP*, 就进入引导首页  

   可能会有小版本的升级提醒，建议点击【yes,please!】
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-installupdate-websoft9.png)
   
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-language-websoft9.png)
   
2. 选择语言，接受许可协议，继续下一步

4. 安装进入管理员账号设置界面，牢记之，点击“下一步”
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-adminconf-websoft9.png)
   
4. 安装进入数据库配置界面（[不知道数据库密码？](/zh/stack-accounts.html#mysql)）然后点击”保存”
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-dbconfig-websoft9.png)
   
5. 系统安装成功，分别进入后台和前台体验
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-installss-websoft9.png)
   
6. 登录后台，系统提示删除intall文件夹
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-delinstall-websoft9.png)
   
7. 使用WinSCP登录到服务器，进入 */data/wwwroot/prestashop*，删除 **install** 文件夹
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-delinstallftp-websoft9.png)
   
8. 删除完成后，点击第六步的后台链接，开始体验后台（请牢记后台地址）
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-login-websoft9.png)
   
9. 登录成功，体验后台
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-backend-websoft9.png)

> 需要了解更多 PrestaShop 的使用，请参考官方文档：[PrestaShop Docs](https://www.prestashop.com/en/resources/documentations)

## 连接 PrestaShop Marketplace

安装 PrestaShop 后，建议把你安装的 PrestaShop 系统与 PrestaShop 官方的 Marketplace 资源进行在线连接，这样便可以在线使用 Marketplace 上的大量资源

1. 登录 PrestaShop 后台
2. 依次打开：【Modules】>【Module Manager】，点击【Connect to Addons marketplace】
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-connectmk-websoft9.png)  
3. 开始注册账号
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-registeraccount-websoft9.png)  
4. 注册完成后，登录连接
5. 连接后，就可以很方便的使用 Marketplace 上的资源
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/prestashop/prestashop-marketplace-websoft9.png)

## 常见问题

#### 浏览器打开IP地址，无法访问 PrestaShop（白屏没有结果）？

您的服务器对应的安全组80端口没有开启（入规则），导致浏览器无法访问到服务器的任何内容

#### 本部署包采用的哪个数据库来存储 PrestaShop 数据？

是MySQL

#### 是否可以采用云厂商提供的 RDS 来存储 PrestaShop 数据？

可以
