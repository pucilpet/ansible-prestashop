# More

Each of the following solutions has been proven to be effective and we hope to be helpful to you.

## Domain binding

The precondition for **Domain binding** is have completed the **Domain resolution** for PrestaShop Instance.

From the perspective of server security and subsequent maintenance considerations, the **Domain Binding** step cannot be omitted.

PrestaShop domain name binding steps:

1. Connect your Cloud Server
2. Modify [vhost configuration file](/stack-components.md#apache), change the domain name item for you
   ```text
   #### PrestaShop (LAMP) bind domain #### 

     <VirtualHost *:80>
     ServerName prestaShop.mydomain.com # modify it for you
     DocumentRoot "/data/wwwroot/PrestaShop"
     ...
     
   #### PrestaShop (LEMP) bind domain #### 

     server {
      listen 80;
      server_name    prestaShop.example.com; # modify it for you
     ...

   ```
3. Save it and restart [Web Service](/admin-services.md#apache)


## PrestaShop Maintenance mode

Log in PrestaShop console, open:【Shop Parameters】>【General】>【Maintenance】
![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-mantmode-websoft9.png)


## Prestashop change domain

If you want to change domain for PrestaShop, these steps you need to do:

1. Completed domain resolution and domain binding
2. Enable PrestaShop's Maintenance mode
3. Edit the PrestaShop's configuration file([path](/stack-components.html#prestashop)), modify the domain
4. Log in PrestaShop console, open:【Shop Parameters】>【Traffic&SEO】, modify the shop URL
  ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-seturl-websoft9.png)

## PrestaShop import

Log in PrestaShop console, open:【Advanced Parameters】>【Import】
![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-importdb-websoft9.png)

## PrestaShop Modules

Modules is a very import function for PrestaShop to extend the business requirement

1. Log in PrestaShop console,
2. Open:【Modules】>【Module Catalog】, find the module you want to install and click the【Install】button
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-installmd-websoft9.png)
3. Open:【Modules】>【Module Manager】, find the module you want to upgrade and click the【Upgrade】button
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-upgrademodules-websoft9.png)

## Prestashop connect Marketplace

Completed installation of PrestaShop, suggest you make your PrestaShop system connect PrestaShop's Marketplace. Once you have connected it, you can use many resourses on Marketplace.

1. Log in PrestaShop Console as administrator
2. Open 【Modules】>【Module Manager】, click【Connect to Addons marketplace】
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-connectmk-websoft9.png)  
3. Register an account if you don't have it
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-registeraccount-websoft9.png)  
4. Connect to Marketplace using your Marketplace's account
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/prestashop/prestashop-marketplace-websoft9.png)

## PrestaShop language

Prestashop's multi-language support is very mature. The system has a multi-language system built in the background. You only need to select the corresponding language and import it online to your PrestaShop system.

### Import language

1. Log in PrestaShop console, open:【International】>【Localization】>【language】, enter the interface of language settings
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/en/prestashop/prestashop-local-websoft9.png)
2. Select the language you want to use and click【import】 icon to import online
3. Click 【language】 tab, you can see all language packages been installed successfully
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/prestashop/prestashop-alllanguage-websoft9.png) 

> When add new language for PrestaShop, it will add redirects rules in the  `.htaccess` file of PrestaShop root directory.

### Delete language

1. Log in PrestaShop console, open:【International】>【Localization】>【language】,edit your language
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/en/prestashop/prestashop-dellanguage001-websoft9.png)
2. Set the Status to 【No】
3. Click 【language】 tab, you can delete the language you have disabled
   ![](https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-dellanguage002-websoft9.png)

## PrestaShop API (Web Service)

PrestaShop enables merchants to give third-party tools access to their shop's database through a CRUD API, otherwise called a web service.

Refer to official docs: [PrestaShop API](https://doc.prestashop.com/display/PS16/Using+the+PrestaShop+Web+Service)