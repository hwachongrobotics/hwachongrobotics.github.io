(self.webpackChunkhwachongrobo_github_io=self.webpackChunkhwachongrobo_github_io||[]).push([[217],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9443:function(e,r,t){"use strict";var n=(0,t(7294).createContext)(void 0);r.Z=n},9068:function(e,r,t){"use strict";t.r(r),t.d(r,{contentTitle:function(){return y},default:function(){return _},frontMatter:function(){return v},metadata:function(){return g},toc:function(){return k}});var n=t(2122),o=t(9756),a=t(7294),i=t(3905),s=t(9443);var l=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(6010),u="tabItem_1uMI",p="tabItemActive_2DSg";var m=37,d=39;var f=function(e){var r=e.lazy,t=e.block,n=e.defaultValue,o=e.values,i=e.groupId,s=e.className,f=l(),h=f.tabGroupChoices,b=f.setTabGroupChoices,v=(0,a.useState)(n),y=v[0],g=v[1],k=a.Children.toArray(e.children),w=[];if(null!=i){var _=h[i];null!=_&&_!==y&&o.some((function(e){return e.value===_}))&&g(_)}var E=function(e){var r=e.currentTarget,t=w.indexOf(r),n=o[t].value;g(n),null!=i&&(b(i,n),setTimeout((function(){var e,t,n,o,a,i,s,l;(e=r.getBoundingClientRect(),t=e.top,n=e.left,o=e.bottom,a=e.right,i=window,s=i.innerHeight,l=i.innerWidth,t>=0&&a<=l&&o<=s&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(p),setTimeout((function(){return r.classList.remove(p)}),2e3))}),150))},P=function(e){var r,t;switch(e.keyCode){case d:var n=w.indexOf(e.target)+1;t=w[n]||w[0];break;case m:var o=w.indexOf(e.target)-1;t=w[o]||w[w.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":t},s)},o.map((function(e){var r=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:y===r?0:-1,"aria-selected":y===r,className:(0,c.Z)("tabs__item",u,{"tabs__item--active":y===r}),key:r,ref:function(e){return w.push(e)},onKeyDown:P,onFocus:E,onClick:E},t)}))),r?(0,a.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==y})}))))};var h=function(e){var r=e.children,t=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:n},r)},b=["components"],v={sidebar_position:1},y="Pybricks",g={unversionedId:"lego/programming/pybricks",id:"lego/programming/pybricks",isDocsHomePage:!1,title:"Pybricks",description:"Pybricks is an alternative method of programming for EV3 Mindstorms endorsed by",source:"@site/docs/lego/programming/pybricks.mdx",sourceDirName:"lego/programming",slug:"/lego/programming/pybricks",permalink:"/lego/programming/pybricks",editUrl:"https://github.com/hwachongrobo/hwachongrobo.github.io/edit/main/docs/lego/programming/pybricks.mdx",version:"current",lastUpdatedBy:"Ivan Tung",lastUpdatedAt:1626545098,formattedLastUpdatedAt:"7/17/2021",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"What can you be benefitted from this guide?",permalink:"/lego/building/the-base"},next:{title:"PID Controller",permalink:"/lego/programming/pid-controller"}},k=[{value:"Why use Pybricks?",id:"why-use-pybricks",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Using Pybricks",id:"using-pybricks",children:[{value:"HiTechnic Color Sensor",id:"hitechnic-color-sensor",children:[]}]}],w={toc:k};function _(e){var r=e.components,t=(0,o.Z)(e,b);return(0,i.kt)("wrapper",(0,n.Z)({},w,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pybricks"},"Pybricks"),(0,i.kt)("p",null,"Pybricks is an alternative method of programming for EV3 Mindstorms endorsed by\nLEGO\xae."),(0,i.kt)("p",null,"For more information, visit ",(0,i.kt)("a",{parentName:"p",href:"https://pybricks.com/"},"pybricks.com"),"."),(0,i.kt)("h2",{id:"why-use-pybricks"},"Why use Pybricks?"),(0,i.kt)("p",null,"You might already be familiar with EV3-G and EV3 Classroom."),(0,i.kt)(f,{defaultValue:"ev3-g",values:[{label:"EV3-G",value:"ev3-g"},{label:"EV3 Classroom",value:"ev3-classroom"},{label:"Pybricks",value:"pybricks"}],mdxType:"Tabs"},(0,i.kt)(h,{value:"ev3-g",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"/img/docs/lego/ev3_g.png",alt:"Screenshot of EV3-G"}))),(0,i.kt)(h,{value:"ev3-classroom",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"/img/docs/lego/ev3_classroom.png",alt:"Screenshot of EV3 Classroom"}))),(0,i.kt)(h,{value:"pybricks",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/env pybricks-micropython\nfrom pybricks.hubs import EV3Brick\nfrom pybricks.ev3devices import Motor\nfrom pybricks.parameters import Port\n\n# Create your objects here\n\n# Initialize the EV3 Brick.\nev3 = EV3Brick()\n\n# Initialize a motor at port B.\ntest_motor = Motor(Port.B)\n\n# Write your program here\n\n# Play a sound.\nev3.speaker.beep()\n\n# Run the motor up to 500 degrees per second.\n# To a target angle of 90 degrees.\ntest_motor.run_target(500, 90)\n\n# Play another beep sound.\nev3.speaker.beep(frequency=1000, duration=500)\n")))),(0,i.kt)("p",null,"However, they both come with their sets of issues. For example, EV3-G is known\nto be very laggy, particularly with large codebases; and EV3 Classroom does not\nsupport the use of HiTechnic Color Sensors."),(0,i.kt)("p",null,"Pybricks uses Python, a text-based programming language, allowing for much more\ncustomisation at the expense of a greater learning curve. It is also based on\nev3dev, a very mature open-source library."),(0,i.kt)("p",null,"Note that Pybricks requires the use of a MicroSD card as it needs to be run on\ncustom firmware."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"The Pybricks team has already written a very well-documented tutorial on how to\nget started ",(0,i.kt)("a",{parentName:"p",href:"https://pybricks.com/install/mindstorms-ev3/installation/"},"here"),"."),(0,i.kt)("p",null,"You would need to flash the firmware onto a MicroSD card and set-up the Visual\nStudio Code IDE for EV3 MicroPython development."),(0,i.kt)("h2",{id:"using-pybricks"},"Using Pybricks"),(0,i.kt)("p",null,"The full documentation is available ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pybricks.com/en/latest/"},"here"),"."),(0,i.kt)("p",null,"Instructions on how to interface with EV3 devices can be found more specifically\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.pybricks.com/en/latest/ev3devices.html"},"here")," and there is also a ",(0,i.kt)("inlineCode",{parentName:"p"},"DriveBase")," class that you\ncan use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pybricks.com/en/latest/robotics.html"},"here"),"."),(0,i.kt)("h3",{id:"hitechnic-color-sensor"},"HiTechnic Color Sensor"),(0,i.kt)("p",null,"As the HiTechnic Color Sensor is not an official product provided by Lego,\nPybricks does not natively support it. However, we can still use it as the\nev3dev community has already written code to work with it."),(0,i.kt)("p",null,"The documentation for using ev3dev sensors with Pybricks can be found\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.pybricks.com/en/latest/iodevices/ev3devsensor.html"},"here"),"."),(0,i.kt)("p",null,"Conveniently, someone has also written code to use the Hitechnic Color Sensor at\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ev3dev/ev3dev/issues/1292#issuecomment-508627948"},"this random GitHub issue"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from pybricks.ev3devio import Ev3devSensor\n\n\nclass HTColorSensor(Ev3devSensor):\n    _ev3dev_driver_name = "ht-nxt-color-v2"\n    _number_of_values = 4\n\n    def _open_files(self):\n        super()._open_files()\n        self._command_file = open(self.path + "command", "w")\n\n    def _close_files(self):\n        super()._close_files()\n        self._command_file.close()\n\n    # Set the scan frequency to 50 Hz.\n    def set_frequency_50hz(self):\n        self._command_file.write("50HZ")\n        self._command_file.flush()\n\n    # Set the scan frequency to 60 Hz.\n    def set_frequency_60hz(self):\n        self._command_file.write("60HZ")\n        self._command_file.flush()\n\n    # Returns a tuple of color values: (red, blue, green, white). Ranges from 0 to 255 for each.\n    def rgbw(self):\n        self._mode("RGB")\n        errors = 0\n        while True:\n            try:\n                return self._value(0), self._value(1), self._value(2), self._value(3)\n            except:\n                errors += 1  # may raise ENODEV error\n                # returns tuple of zeros if there are two consecutive errors\n                if errors > 1:\n                    return 0, 0, 0, 0\n\n    # Returns the color index. Ranges from 0 to 17.\n    def color(self):\n        self._mode("COLOR")\n        errors = 0\n        while True:\n            try:\n                return self._value(0)\n            except:\n                errors += 1  # may raise ENODEV error\n                # returns zero if there are two consecutive errors\n                if errors > 1:\n                    return 0\n')),(0,i.kt)("p",null,"You can use it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"ht_color_sensor = HTColorSensor(Port.S1)  # initialise sensor at port 1\n\ncolor = ht_color_sensor.color()\nprint(color)  # prints number from 0 to 17 corresponding to the detected color\n\nr, g, b, w = ht_color_sensor.rgbw()\nprint(r, g, b, w)  # prints the raw values for red, green, blue, and white\n")))}_.isMDXComponent=!0},6010:function(e,r,t){"use strict";function n(e){var r,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function o(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{Z:function(){return o}})}}]);