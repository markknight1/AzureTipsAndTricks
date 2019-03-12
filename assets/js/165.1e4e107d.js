(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{471:function(t,a,n){"use strict";n.r(a);var s=n(43),e=Object(s.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h4",{attrs:{id:"copy-azure-storage-blobs-and-files-via-c"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copy-azure-storage-blobs-and-files-via-c","aria-hidden":"true"}},[t._v("#")]),t._v(" Copy Azure Storage Blobs and Files via C#")]),t._v(" "),n("p",[t._v("Last week we've reviewed the following options with Azure Storage :")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks74/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with Azure Storage Blobs and Files through the Portal"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks75/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create an Azure Storage Blob Container through C#"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks76/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Uploading and Downloading a Stream into an Azure Storage Blob"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks77/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Working with Azure Storage Explorer"),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("Today, we are going to copy Azure Storage Blobs (and Files) via C#. Go ahead and open the Azure Portal and open the C# app that we worked with "),n("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks75/",target:"_blank",rel:"noopener noreferrer"}},[t._v("earlier"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("The goal of this exercise is to copy a file inside our Azure Storage Container to a new file. So for example, our Azure Storage Container only contains one file now:")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/storageacct4.png")}}),t._v(" "),n("p",[t._v("We are going to copy a new file inside of it with the name "),n("strong",[t._v("mikepic-backup.png")]),t._v(".")]),t._v(" "),n("p",[t._v("Now that we've created the Azure Storage Blob Container, we'll upload a file to it. We'll build off our "),n("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks76/",target:"_blank",rel:"noopener noreferrer"}},[t._v("previous post"),n("OutboundLink")],1),t._v(" and add the following lines of code to upload a file off our local hard disk:")]),t._v(" "),n("div",{staticClass:"language-csharp line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" storageAccount "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CloudStorageAccount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Parse")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CloudConfigurationManager"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetSetting")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"StorageConnection"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myClient "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" storageAccount"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateCloudBlobClient")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" container "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myClient"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetContainerReference")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images-backup"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateIfNotExists")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BlobContainerPublicAccessType"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Blob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" blockBlob "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBlockBlobReference")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mikepic.png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//lines added")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" copyBlockBlob "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBlockBlobReference")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mikepic-backup.png"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cb "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AsyncCallback")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"copy completed"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    copyBlockBlob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("BeginStartCopy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blockBlob"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cb"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//end lines added")]),t._v("\n\n    Console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadLine")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br")])]),n("p",[t._v("If we run the application and switch over to our Storage Account and navigate inside the container, we'll see our file has copied successfully:")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/azasynccopy1.png")}})])},[],!1,null,null,null);a.default=e.exports}}]);