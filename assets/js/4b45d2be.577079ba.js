"use strict";(self.webpackChunkhwachongrobotics_github_io=self.webpackChunkhwachongrobotics_github_io||[]).push([[353],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var o=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return m}});var o=n(7294),r=n(9443);var a=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,c=39;var m=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,m=e.values,p=e.groupId,d=e.className,h=a(),f=h.tabGroupChoices,g=h.setTabGroupChoices,y=(0,o.useState)(r),b=y[0],v=y[1],k=o.Children.toArray(e.children),w=[];if(null!=p){var E=f[p];null!=E&&E!==b&&m.some((function(e){return e.value===E}))&&v(E)}var S=function(e){var t=e.currentTarget,n=w.indexOf(t),o=m[n].value;v(o),null!=p&&(g(p,o),setTimeout((function(){var e,n,o,r,a,i,s,u;(e=t.getBoundingClientRect(),n=e.top,o=e.left,r=e.bottom,a=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&r<=s&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case c:var o=w.indexOf(e.target)+1;n=w[o]||w[0];break;case u:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:S,onClick:S},n)}))),t?(0,o.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){var o=(0,n(7294).createContext)(void 0);t.Z=o},4811:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return h}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=n(5064),s=n(8215),l=["components"],u={},c="Small Basic",m={unversionedId:"lego/programming/small-basic",id:"lego/programming/small-basic",isDocsHomePage:!1,title:"Small Basic",description:"EV3 Basic is an alternative method of programming for EV3 Mindstorms.",source:"@site/docs/lego/02-programming/00-small-basic.mdx",sourceDirName:"lego/02-programming",slug:"/lego/programming/small-basic",permalink:"/lego/programming/small-basic",editUrl:"https://github.com/hwachongrobotics/hwachongrobotics.github.io/edit/main/docs/lego/02-programming/00-small-basic.mdx",version:"current",lastUpdatedAt:1637034045,formattedLastUpdatedAt:"11/16/2021",sidebarPosition:0,frontMatter:{},sidebar:"lego",previous:{title:"The Base",permalink:"/lego/building/the-base"},next:{title:"Pybricks",permalink:"/lego/programming/pybricks"}},p=[{value:"Why use Small Basic EV3?",id:"why-use-small-basic-ev3",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Common functions you might need",id:"common-functions-you-might-need",children:[]},{value:"Basic Movment",id:"basic-movment",children:[]},{value:"Sensors",id:"sensors",children:[]}],d={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"small-basic"},"Small Basic"),(0,a.kt)("p",null,"EV3 Basic is an alternative method of programming for EV3 Mindstorms.\nIt uses Microsoft Small Basic IDE and its corresponding EV3 extension"),(0,a.kt)("p",null,"For more information visit, ",(0,a.kt)("a",{parentName:"p",href:"https://smallbasic-publicwebsite.azurewebsites.net/"},"Microsoft Small Basic")," or ",(0,a.kt)("a",{parentName:"p",href:"https://sites.google.com/site/ev3basic/ev3-basic-programming"},"EV3 Basic Extension")),(0,a.kt)("h2",{id:"why-use-small-basic-ev3"},"Why use Small Basic EV3?"),(0,a.kt)("p",null,"You might already be familiar with EV3-G and EV3 Classroom."),(0,a.kt)(i.Z,{defaultValue:"ev3-g",values:[{label:"EV3-G",value:"ev3-g"},{label:"EV3 Classroom",value:"ev3-classroom"},{label:"Small Basic EV3",value:"sbev3"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"ev3-g",mdxType:"TabItem"},(0,a.kt)("p",null,"  ",(0,a.kt)("img",{parentName:"p",src:"/img/docs/lego/ev3_g.png",alt:"Screenshot of EV3-G"}))),(0,a.kt)(s.Z,{value:"ev3-classroom",mdxType:"TabItem"},(0,a.kt)("p",null,"  ",(0,a.kt)("img",{parentName:"p",src:"/img/docs/lego/ev3_classroom.png",alt:"Screenshot of EV3 Classroom"}))),(0,a.kt)(s.Z,{value:"sbev3",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'for i = 1 to 4\n    Motor.Move("BC", 50, 720, "True")\n    Motor.MoveSync("BC", 30, 0, 320, "True")\nEndFor\n')))),(0,a.kt)("p",null,"However, they both come with their sets of issues. For example, EV3-G is known\nto be very laggy, particularly with large codebases;"),(0,a.kt)("p",null,"EV3 Classroom and Small Basic EV3 does not support the use of HiTechnic Color Sensors."),(0,a.kt)("p",null,"Small Basic doesn't require you to load up an SD card and wait spend a long time \u231b just to wait for a firmware update."),(0,a.kt)("p",null,"At the same time , you can also you full fludged programming techniques such as arrays that is not support in EV3-G or EV3 Classroom."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Before you get your hand dirty and start programming like the Russians, you might want to read up on the syntax of ",(0,a.kt)("a",{parentName:"p",href:"https://download.microsoft.com/download/9/0/6/90616372-C4BF-4628-BC82-BD709635220D/Introducing%20Small%20Basic.pdf"},"Microsoft Small Basic")," as it is a proprietary language by Microsoft."),(0,a.kt)("p",null,"Once you are done with that, go download the ",(0,a.kt)("a",{parentName:"p",href:"https://smallbasic-publicwebsite.azurewebsites.net/assets/SmallBasic_v1.2.msi"},"Small Basic IDE")," and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/c0pperdragon/EV3Basic/releases"},"EV3 Basic Extension")),(0,a.kt)("p",null,"Take note that it only works for Windows, those using macOS can just click off of this guide and miss out on the benefits of using small basic \ud83d\ude04. That is what you get for paying for an overly priced laptop \ud83d\ude08"),(0,a.kt)("p",null,"So how are you supposed to download the EV3 Basic code and run on your EV3 \ud83e\udd14"),(0,a.kt)("p",null,"Go to your Windows start menu by clicking on the little Windows icon and find for EV3 Explorer. The left side of the screen is your EV3 and the right side is your computer. Find for your code on the right, and create/navigate to a folder you made in the EV3 brick on the left. Once you are in your desired path, click ",(0,a.kt)("b",null,"Download")," on the bottom right of the screen. Then click on the file on the left side and click on ",(0,a.kt)("b",null,"Compile")," and you should be presented with an executable."),(0,a.kt)("p",null,"insert the entire EV3 explorer image"),(0,a.kt)("p",null,"Phew \ud83d\ude0c That was alot hope you caught up"),(0,a.kt)("h2",{id:"common-functions-you-might-need"},"Common functions you might need"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'TextWindow.WriteLine("Hello") #Cannot be compiled\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Program.Delay(Duration)\n")),(0,a.kt)("h2",{id:"basic-movment"},"Basic Movment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Motor.Invert("Port number")\n')),(0,a.kt)("p",null,"Like the name suggests, it inverts the motor speed automatically when the code is compiled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Motor.GetCount(port)\n")),(0,a.kt)("p",null,"This is to get the number of degrees the motor has made"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Motor.MoveSync(port,speed for port 1, speed for port 2, degrees,brake)\n")),(0,a.kt)("p",null,"This is what I would use for basic movement as you can control the speed of each motor individually. Its the excat replica of the Move Tank block in EV3-G"),(0,a.kt)("h2",{id:"sensors"},"Sensors"),(0,a.kt)("h1",{id:"light-sensor"},"Light Sensor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Sensor.SetMode(port,mode number)\n")),(0,a.kt)("p",null,"For EV3 Sensors, there are usually 3 Modes,  "),(0,a.kt)("p",null,"1 -  Color",(0,a.kt)("br",{parentName:"p"}),"\n","2 -  Reflected Light Intensity",(0,a.kt)("br",{parentName:"p"}),"\n","3 -  Ambient Light Intensity  "),(0,a.kt)("p",null,"However, for Small Basic, it opens up another mode there is more powerful and more accurate than the other three. Its called the Raw RGB mode.\nIt is the fourth mode in the EV3 Basic syntax and it reads the raw RGB value of the light sensor - Red, Green and Blue. Ranging from 0 - 500 \ud83e\udd2f.\nTherefore, it doesn't matter if your sensor position, whether it is too high or too close to the ground.\nSo once you have set your mode number to 4 and want to unlock the ",(0,a.kt)("strong",{parentName:"p"},"UNLIMITED POWERRR")," of that color sensor mode. How are you supposed to read it then?",(0,a.kt)("br",{parentName:"p"}),"\n","Well, if you have been reading the guide throughly (I know some of you do not \ud83d\ude0f) you use the ",(0,a.kt)("inlineCode",{parentName:"p"},'TextWindow.WriteLine("")')," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Sensor.ReadRaw()")," classes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"lightIntesntiy = Sensor.ReadRaw(port,3)\nTextWindow.WriteLine(lightIntenstiy)\n")),(0,a.kt)("p",null,"\u2757\u2757\u2757 Remember you cannot compile it in EV3 Explorer just run it directly from the IDE \u2757\u2757\u2757"),(0,a.kt)("p",null,"What would you see is a pop up menu that shows you three arrays, 0=x, 1=x, 2=x, (arrays start at zero). Using common sense, you would add up all of the values and\ud83d\udca5that is your reflected light value."),(0,a.kt)("h1",{id:"other-sensors"},"Other Sensors"),(0,a.kt)("p",null,"For the rest of the sensor what I can say is reflected by this image\n",(0,a.kt)("img",{parentName:"p",src:"/img/docs/lego/eyesroll.jpg",alt:"Eyes-Roll"})))}h.isMDXComponent=!0},6010:function(e,t,n){function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);