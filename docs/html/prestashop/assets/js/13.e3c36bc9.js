(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{200:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"more"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more","aria-hidden":"true"}},[e._v("#")]),e._v(" More")]),e._v(" "),a("p",[e._v("Each of the following solutions has been proven to be effective and we hope to be helpful to you.")]),e._v(" "),a("h2",{attrs:{id:"domain-binding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domain-binding","aria-hidden":"true"}},[e._v("#")]),e._v(" Domain binding")]),e._v(" "),a("p",[e._v("The precondition for "),a("strong",[e._v("Domain binding")]),e._v(" is have completed the "),a("strong",[e._v("Domain resolution")]),e._v(" for PrestaShop Instance.")]),e._v(" "),a("p",[e._v("From the perspective of server security and subsequent maintenance considerations, the "),a("strong",[e._v("Domain Binding")]),e._v(" step cannot be omitted.")]),e._v(" "),a("p",[e._v("PrestaShop domain name binding steps:")]),e._v(" "),a("ol",[a("li",[e._v("Connect your Cloud Server")]),e._v(" "),a("li",[e._v("Modify "),a("router-link",{attrs:{to:"/stack-components.html#apache"}},[e._v("vhost configuration file")]),e._v(", change the domain name item for you"),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('#### PrestaShop (LAMP) bind domain #### \n\n  <VirtualHost *:80>\n  ServerName prestaShop.mydomain.com # modify it for you\n  DocumentRoot "/data/wwwroot/PrestaShop"\n  ...\n  \n#### PrestaShop (LEMP) bind domain #### \n\n  server {\n   listen 80;\n   server_name    prestaShop.example.com; # modify it for you\n  ...\n\n')])])])],1),e._v(" "),a("li",[e._v("Save it and restart "),a("router-link",{attrs:{to:"/admin-services.html#apache"}},[e._v("Web Service")])],1)]),e._v(" "),a("h2",{attrs:{id:"prestashop-maintenance-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prestashop-maintenance-mode","aria-hidden":"true"}},[e._v("#")]),e._v(" PrestaShop Maintenance mode")]),e._v(" "),a("p",[e._v("Log in PrestaShop console, open:【Shop Parameters】>【General】>【Maintenance】\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-mantmode-websoft9.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"prestashop-change-domain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prestashop-change-domain","aria-hidden":"true"}},[e._v("#")]),e._v(" Prestashop change domain")]),e._v(" "),a("p",[e._v("If you want to change domain for PrestaShop, these steps you need to do:")]),e._v(" "),a("ol",[a("li",[e._v("Completed domain resolution and domain binding")]),e._v(" "),a("li",[e._v("Enable PrestaShop's Maintenance mode")]),e._v(" "),a("li",[e._v("Edit the PrestaShop's configuration file("),a("router-link",{attrs:{to:"/stack-components.html#prestashop"}},[e._v("path")]),e._v("), modify the domain")],1),e._v(" "),a("li",[e._v("Log in PrestaShop console, open:【Shop Parameters】>【Traffic&SEO】, modify the shop URL\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-seturl-websoft9.png",alt:""}})])]),e._v(" "),a("h2",{attrs:{id:"prestashop-import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prestashop-import","aria-hidden":"true"}},[e._v("#")]),e._v(" PrestaShop import")]),e._v(" "),a("p",[e._v("Log in PrestaShop console, open:【Advanced Parameters】>【Import】\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-importdb-websoft9.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"prestashop-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prestashop-modules","aria-hidden":"true"}},[e._v("#")]),e._v(" PrestaShop Modules")]),e._v(" "),a("p",[e._v("Modules is a very import function for PrestaShop to extend the business requirement")]),e._v(" "),a("ol",[a("li",[e._v("Log in PrestaShop console,")]),e._v(" "),a("li",[e._v("Open:【Modules】>【Module Catalog】, find the module you want to install and click the【Install】button\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-installmd-websoft9.png",alt:""}})]),e._v(" "),a("li",[e._v("Open:【Modules】>【Module Manager】, find the module you want to upgrade and click the【Upgrade】button\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-upgrademodules-websoft9.png",alt:""}})])]),e._v(" "),a("h2",{attrs:{id:"prestashop-connect-marketplace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prestashop-connect-marketplace","aria-hidden":"true"}},[e._v("#")]),e._v(" Prestashop connect Marketplace")]),e._v(" "),a("p",[e._v("Completed installation of PrestaShop, suggest you make your PrestaShop system connect PrestaShop's Marketplace. Once you have connected it, you can use many resourses on Marketplace. Refer to "),a("router-link",{attrs:{to:"/stack-installation.html#connect-prestashop-marketplace"}},[e._v("Connect Marketplace")])],1),e._v(" "),a("h2",{attrs:{id:"prestashop-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prestashop-language","aria-hidden":"true"}},[e._v("#")]),e._v(" PrestaShop language")]),e._v(" "),a("p",[e._v("Prestashop's multi-language support is very mature. The system has a multi-language system built in the background. You only need to select the corresponding language and import it online to your PrestaShop system.")]),e._v(" "),a("h3",{attrs:{id:"import-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-language","aria-hidden":"true"}},[e._v("#")]),e._v(" Import language")]),e._v(" "),a("ol",[a("li",[e._v("Log in PrestaShop console, open:【International】>【Localization】>【language】, enter the interface of language settings\n"),a("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/en/prestashop/prestashop-local-websoft9.png",alt:""}})]),e._v(" "),a("li",[e._v("Select the language you want to use and click【import】 icon to import online")]),e._v(" "),a("li",[e._v("Click 【language】 tab, you can see all language packages been installed successfully\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/prestashop/prestashop-alllanguage-websoft9.png",alt:""}})])]),e._v(" "),a("blockquote",[a("p",[e._v("When add new language for PrestaShop, it will add redirects rules in the  "),a("code",[e._v(".htaccess")]),e._v(" file of PrestaShop root directory.")])]),e._v(" "),a("h3",{attrs:{id:"delete-language"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-language","aria-hidden":"true"}},[e._v("#")]),e._v(" Delete language")]),e._v(" "),a("ol",[a("li",[e._v("Log in PrestaShop console, open:【International】>【Localization】>【language】,edit your language\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/en/prestashop/prestashop-dellanguage001-websoft9.png",alt:""}})]),e._v(" "),a("li",[e._v("Set the Status to 【No】")]),e._v(" "),a("li",[e._v("Click 【language】 tab, you can delete the language you have disabled\n"),a("img",{attrs:{src:"https://libs.websoft9.com/Websoft9/DocsPicture/zh/prestashop/prestashop-dellanguage002-websoft9.png",alt:""}})])]),e._v(" "),a("h2",{attrs:{id:"prestashop-api-web-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prestashop-api-web-service","aria-hidden":"true"}},[e._v("#")]),e._v(" PrestaShop API (Web Service)")]),e._v(" "),a("p",[e._v("PrestaShop enables merchants to give third-party tools access to their shop's database through a CRUD API, otherwise called a web service.")]),e._v(" "),a("p",[e._v("Refer to official docs: "),a("a",{attrs:{href:"https://doc.prestashop.com/display/PS16/Using+the+PrestaShop+Web+Service",target:"_blank",rel:"noopener noreferrer"}},[e._v("PrestaShop API"),a("OutboundLink")],1)])])},[],!1,null,null,null);t.default=o.exports}}]);