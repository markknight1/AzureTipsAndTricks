(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{428:function(t,e,a){"use strict";a.r(e);var s=a(43),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h4",{attrs:{id:"my-scenario-tracking-run-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#my-scenario-tracking-run-data","aria-hidden":"true"}},[t._v("#")]),t._v(" My Scenario - Tracking Run Data")]),t._v(" "),a("p",[t._v("I thought I'd use this week's Tip and Tricks series to show a practical example of how I am using Azure. I've started running outdoors and would like to extract several links that my app generates via email and send them to my OneDrive account automatically vs doing it manually after each run. I'm also concerned that the app that generates my data may be abandoned one day. In order to secure my data, I used a combination of "),a("a",{attrs:{href:"http://www.zapier.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zappier.com"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"http://www.azure.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure"),a("OutboundLink")],1),t._v(" to solve my problem and over the course of this week, we'll cover the following sections needed in order to implement this:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks37/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Parse Emails to be used in a Azure Logic Apps"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks38/",target:"_blank",rel:"noopener noreferrer"}},[t._v("This post - Create JSON Schema to be used in a Azure Logic Apps"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks39/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Setup an HTTP Request Trigger that is used in an Azure Logic Apps"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks40/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Upload Files from a URL with Azure Logic Apps"),a("OutboundLink")],1)])]),t._v(" "),a("h4",{attrs:{id:"create-json-schema-to-be-used-in-a-azure-logic-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-json-schema-to-be-used-in-a-azure-logic-apps","aria-hidden":"true"}},[t._v("#")]),t._v(" Create JSON Schema to be used in a Azure Logic Apps")]),t._v(" "),a("p",[t._v("In the "),a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks37/",target:"_blank",rel:"noopener noreferrer"}},[t._v("last post"),a("OutboundLink")],1),t._v(", we decided that we'd extract the following 4 pieces of information from the email.")]),t._v(" "),a("ul",[a("li",[t._v("Filename - This is the general filename that the app uses and I think it's a piece of data we may want to store.")]),t._v(" "),a("li",[t._v("CSV URL - A URL to the CSV File that we'll be posting to OneDrive.")]),t._v(" "),a("li",[t._v("GPX URL - A URL to the GPX File that we'll be posting to OneDrive.")]),t._v(" "),a("li",[t._v("KML URL - A URL to the KML File that we'll be posting to OneDrive.")])]),t._v(" "),a("p",[t._v("We need to create the JSON body which we'll use to create the schema. I used "),a("a",{attrs:{href:"http://www.objgen.com/json",target:"_blank",rel:"noopener noreferrer"}},[t._v("objgen.com/json"),a("OutboundLink")],1),t._v(" to quickly create this piece, but you can just manually type it if you want.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/schemablog1.gif")}}),t._v(" "),a("p",[t._v("Here is the JSON payload with some sample data.")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "filename": "myfilename",\n  "gpx": "http://www.someurl.com",\n  "csv": "http://www.someurl.com",\n  "kml": "http://www.someurl.com"\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v('OK, now I clicked the "Copy" Button and headed over to '),a("a",{attrs:{href:"https://jsonschema.net/#/editor",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsonschema.net"),a("OutboundLink")],1),t._v(" and pasted it in and my JSON schema was generated.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/jsonschema2.png")}}),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"$schema"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://json-schema.org/draft-06/schema#"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"definitions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/example.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"csv"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/properties/csv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"filename"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/properties/filename"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"gpx"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/properties/gpx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kml"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/properties/kml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])]),a("p",[t._v("Too easy! Now head over to the "),a("a",{attrs:{href:"https://zapier.com/app/editor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zappier Editor"),a("OutboundLink")],1),t._v(" and create a new app.")]),t._v(" "),a("p",[t._v("You'll want to use the "),a("strong",[t._v("New Email")]),t._v(" Trigger and use the "),a("strong",[t._v("Email Parser by Zappier")]),t._v(" and allow it to connect to your mailbox that you "),a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks37/",target:"_blank",rel:"noopener noreferrer"}},[t._v("created earlier"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("For the next step, you'll want to use an "),a("strong",[t._v("Action")]),t._v(" that is a "),a("strong",[t._v("POST")]),t._v(" request that uses "),a("strong",[t._v("Webhooks by Zappier")]),t._v(". When you get to the point to where it asks you for a URL, then use "),a("a",{attrs:{href:"https://requestb.in/",target:"_blank",rel:"noopener noreferrer"}},[t._v("requestb.in"),a("OutboundLink")],1),t._v(" to see what your HTTP client is sending or to inspect and debug webhook requests. Now you have a URL that you can use for testing. Ensure your payload is set to "),a("strong",[t._v("JSON")]),t._v(" and now you can select the data from your parsed email (filename, csv, kml, gpx). You can leave the rest of the fields as-is. When you finish your screen should look like the following:")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/schemablog3.png")}}),t._v(" "),a("p",[t._v("Go ahead and save and run the test. After you switch over to your "),a("a",{attrs:{href:"https://requestb.in/",target:"_blank",rel:"noopener noreferrer"}},[t._v("requestb.in"),a("OutboundLink")],1),t._v(". You should see the output that matches the parsed data from the email.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/schemablog4.png")}})])},[],!1,null,null,null);e.default=r.exports}}]);