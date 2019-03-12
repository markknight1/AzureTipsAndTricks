(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{345:function(t,e,o){"use strict";o.r(e);var n=o(43),r=Object(n.a)({},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h4",{attrs:{id:"the-series-so-far"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-series-so-far","aria-hidden":"true"}},[t._v("#")]),t._v(" The Series So Far")]),t._v(" "),o("p",[t._v("At Build 2018, we first saw the "),o("a",{attrs:{href:"http://aka.ms/button",target:"_blank",rel:"noopener noreferrer"}},[t._v("IoT Button"),o("OutboundLink")],1),t._v(". I started "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=OdGHWwRBf_c",target:"_blank",rel:"noopener noreferrer"}},[t._v("exploring the device"),o("OutboundLink")],1),t._v(" with the very first unboxing and decided to create a mini-series to walk you how to use the device from start to finish. The series (so far) is located below")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks122/",target:"_blank",rel:"noopener noreferrer"}},[t._v("This post - Creating an IoT for the IoT Button"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks123/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuring and Setting up the IoT Button"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks124/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating the Azure Logic App for our IoT Button"),o("OutboundLink")],1)]),t._v(" "),o("li",[o("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks125/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Azure Function to call our Logic App with the IoT Button"),o("OutboundLink")],1)])]),t._v(" "),o("p",[t._v("In the blog post, I spent time walking you through creating an IoT Hub that we'll be using in the rest of this series. Now we're going to take a look at configuring the actual IoT Button to make use of our IoT Hub.")]),t._v(" "),o("h4",{attrs:{id:"configuring-and-setting-up-the-iot-button"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-and-setting-up-the-iot-button","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuring and Setting up the IoT Button")]),t._v(" "),o("p",[t._v("You first need to take the button and hold it down until you see a yellow LED and then release. This will give you access to the AP which you will connect to on your Windows or Mac. Once connected, go to the device configuration page in a web browser http://192.168.4.1 and you'll see the following:")]),t._v(" "),o("p",[t._v("Click on the "),o("strong",[t._v("IoT Hub Configuration")]),t._v(" page and provide the Azure IoT Hub, IoT Device name and secret (that you got out of Device Explorer) and click Save.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/iotbutton9.png")}}),t._v(" "),o("p",[t._v("If you click on "),o("strong",[t._v("TimeServer")]),t._v(", then you can change the default time server. It should be fine as is.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/iotbutton10.png")}}),t._v(" "),o("p",[t._v("Now you'll need to configure the Wifi that the device connects to when you click the button. You need to use 2.4 wireless and WPA-PSK2. At least that is what works at my home. Make sure you save the information after entering it.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/iotbutton11.png")}}),t._v(" "),o("p",[t._v("Next up, is "),o("strong",[t._v("IP Configuration")]),t._v(", I am using DHCP so left this as "),o("strong",[t._v("yes")]),t._v(" and 0.0.0.0 for everything except "),o("strong",[t._v("Netmask")]),t._v(". This needs to be 255.255.255.0.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/iotbutton12.png")}}),t._v(" "),o("p",[t._v("On the "),o("strong",[t._v("User JSON")]),t._v(" screen, this is a great paste to paste some sample JSON that you wish to test with.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/iotbutton13.png")}}),t._v(" "),o("p",[t._v("Finally, on the "),o("strong",[t._v("Shutdown")]),t._v(" page, it allows you to save all settings and exit.")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/iotbutton14.png")}}),t._v(" "),o("p",[t._v("Once this is complete, switch back over to "),o("strong",[t._v("Device Explorer")]),t._v(" and click on the "),o("strong",[t._v("Data")]),t._v(" tab and ensure the right EventHub and DeviceID is selected and press "),o("strong",[t._v("Monitor")]),t._v(". Press you button one time and you should see the sample data coming through. Nice!")]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/iotbutton15.png")}})])},[],!1,null,null,null);e.default=r.exports}}]);