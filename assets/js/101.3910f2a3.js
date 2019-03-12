(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{408:function(e,n,t){"use strict";t.r(n);var s=t(43),a=Object(s.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h4",{attrs:{id:"deploy-an-azure-web-app-using-only-the-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-an-azure-web-app-using-only-the-cli","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploy an Azure Web App using only the CLI")]),e._v(" "),t("p",[e._v("While I love working with the Azure Portal or even Visual Studio, it is sometimes nice to do everything from the command line. While I'm a power Windows user, in this tutorial I'll be using a Linux VM and BASH to do everything.")]),e._v(" "),t("p",[e._v("Step 1) Ensure you have the following stack installed.")]),e._v(" "),t("p",[e._v("*This will give us a full web development stack we can work with in the future. *")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("mbcrump@crumplinux:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" --version\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" version 2.7.4\nmbcrump@crumplinux:~$ nodejs --version\nv4.2.6\nmbcrump@crumplinux:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" --version\n3.5.2\nmbcrump@crumplinux:~$ gulp --version\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("20:05:28"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" CLI version 1.4.0\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("20:05:28"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Local version 3.9.1\nmbcrump@crumplinux:~$ mongod --version\ndb version v2.6.10\n2017-09-20T20:11:43.087+0000 "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" version: nogitversion\n2017-09-20T20:11:43.095+0000 OpenSSL version: OpenSSL 1.0.2g  1 Mar 2016\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br")])]),t("p",[e._v("I'm particularly interested in the "),t("a",{attrs:{href:"https://github.com/meanjs/mean",target:"_blank",rel:"noopener noreferrer"}},[e._v("MEAN.JS"),t("OutboundLink")],1),e._v(" stack.")]),e._v(" "),t("p",[t("strong",[e._v("What is MEAN.JS?")]),e._v(" MEAN.JS is a Full-Stack JavaScript Using MongoDB, Express, AngularJS, and Node.js -")]),e._v(" "),t("p",[e._v("Step 2) Create a folder such as "),t("code",[e._v("webapp")]),e._v(" and then "),t("code",[e._v("cd webapp")]),e._v(".")]),e._v(" "),t("p",[e._v("Step 3) Run the following command "),t("code",[e._v("git clone https://github.com/crpietschmann/jsQuizEngine.git")]),e._v(". This is a JavaScript based quiz engine by "),t("a",{attrs:{href:"https://github.com/crpietschmann",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chris Pietschmann"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Step 4) Change your working directory to "),t("code",[e._v("jsQuizEngine/src")]),e._v(" and now we'll need to create a deployment user that can deploy web app through Git.")]),e._v(" "),t("pre",[t("code",[e._v("az webapp deployment user set --user-name mbcrump --password AREALLYLONGPW\n")])]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("Name    PublishingUserName\n------  --------------------\nweb     mbcrump\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("Step 5) We'll need a resource group. I'm going to put mine in the West US.")]),e._v(" "),t("pre",[t("code",[e._v('az group create --name StaticResourceGroup --location "West US"\n')])]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("Location    Name\n----------  -------------------\nwestus      StaticResourceGroup\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("Step 6) We'll also need an Azure App Service Plan. I'll use the free one for this example.")]),e._v(" "),t("pre",[t("code",[e._v("az appservice plan create --name StaticAppServicePlan --resource-group StaticResourceGroup --sku FREE\n")])]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("AppServicePlanName    GeoRegion    Kind    Location      MaximumNumberOfWorkers  Name                  ProvisioningState    ResourceGroup        Status    Subscription\n--------------------  -----------  ------  ----------  ------------------------  --------------------  -------------------  -------------------  --------  ------------------------------------\nStaticAppServicePlan  West US      app     West US                            1  StaticAppServicePlan  Succeeded            StaticResourceGroup  Ready     d1ecc7ac-c1d8-40dc-97d6-2507597e7404\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("Step 7) We'll create an Azure Web App and deploy it using local Git.")]),e._v(" "),t("pre",[t("code",[e._v("az webapp create --name MyQuizApplication --resource-group StaticResourceGroup --plan StaticAppServicePlan --deployment-local-git\n")])]),e._v(" "),t("p",[e._v("You should see in the output "),t("code",[e._v("Local git is configured with url of 'https://mbcrump@myquizapplication.scm.azurewebsites.net/MyQuizApplication.git'")]),e._v(" Copy and paste this to your editor of choice.")]),e._v(" "),t("p",[e._v("Step 8) We'll need to add azure to our local Git repo.")]),e._v(" "),t("pre",[t("code",[e._v("git remote add azure https://mbcrump@myquizapplication.scm.azurewebsites.net/MyQuizApplication.git\n")])]),e._v(" "),t("p",[e._v("Step 9) Push the changes.")]),e._v(" "),t("pre",[t("code",[e._v("git push azure master\n")])]),e._v(" "),t("p",[e._v("Step 10) Nice! We can now browse to our "),t("a",{attrs:{href:"http://myquizapplication.azurewebsites.net/#",target:"_blank",rel:"noopener noreferrer"}},[e._v("new site"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/azureappservicequiz.png")}})])},[],!1,null,null,null);n.default=a.exports}}]);