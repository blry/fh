(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,t){var i;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var a=typeof i;if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i)){if(i.length){var r=s.apply(null,i);r&&e.push(r)}}else if("object"===a)if(i.toString===Object.prototype.toString)for(var o in i)n.call(i,o)&&i[o]&&e.push(o);else e.push(i.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(i=function(){return s}.apply(t,[]))||(e.exports=i)}()},3027:function(e,t,i){"use strict";i.d(t,{E:function(){return u}});var n=i(4184),s=i.n(n),a=i(1664),r=i(1163),o=i(7294),l=i(664),c=i(7379),d=i(5893),u=function(e){var t,i=s()("mt-10","mb-12","flex",{"flex-row-reverse":e.reverse}),n=(0,o.useRef)(),u=(0,o.useRef)(),m=(0,r.useRouter)(),h={img:{display:e.icon?"":"none"},title:{display:e.title?"":"none"},subContainer:{flexDirection:e.reverse?"row-reverse":"row"},span:{display:e.line?"block":"none",width:"76px",borderTop:"3px solid #2C4DCA",marginBottom:"18px"},button:{display:e.link?"flex":"none",margin:"15px 0"},buttonLink:{borderColor:"#707070",width:"165px"},div:{boxShadow:e.imageFilter?"0px 0px 10px #cdc3c3":"",borderRadius:"10px",paddingBottom:"25px"}};return(0,d.jsx)(l.E.div,{className:"".concat(i," vertical-feature-class"),onMouseOver:function(){e.imageFilter&&n.current.classList.remove("image-gray-filter")},onMouseLeave:function(){e.imageFilter&&n.current.classList.add("image-gray-filter")},ref:u,style:h.div,initial:c.Z.hidden,variants:c.Z,whileInView:c.Z.visible,viewport:{once:!0},children:(0,d.jsxs)("div",{className:"flex flex-col",children:[(0,d.jsxs)("div",{className:"mobTitle flex-col",children:[(0,d.jsxs)("div",{className:"flex items-center ".concat(e.icon?"ml-0 mr-0 marginLeft":""),children:[(0,d.jsx)("div",{className:"".concat(e.icon?"w-5 sm:w-8":""," verticalFutureRow-imgCont"),children:(0,d.jsx)("img",{src:"/assets/images/symbol.svg",alt:"icon",style:h.img})}),(0,d.jsx)("h3",{className:"text-xl sm:text-2xl text-gray-900 font-semibold ".concat(e.icon?"ml-2 mr-2 sm:ml-3 sm:mr-3":""),style:h.title,children:e.title})]}),(0,d.jsx)("span",{style:h.span}),(0,d.jsx)("div",{className:"p-3 md:w-64 lg:w-80 lg:max-h-56 flex items-center justify-center",children:(0,d.jsx)("img",{src:"".concat(m.basePath).concat(e.image),alt:e.imageAlt,style:{maxWidth:"85%"},className:"mb-3 sm:mb-0"})})]}),(0,d.jsxs)("div",{className:"flex flex-col-reverse items-center verticalFeatureRow-text ".concat(e.reverse?"md:flex-row-reverse":"md:flex-row"),children:[(0,d.jsxs)("div",{className:"mt-6 md:mt-0 ml-0 flex flex-col md:w-4/5 text-sm text-black leading-4 sm:ml-12",children:[(0,d.jsxs)("div",{className:"desktopTitle flex-col",children:[(0,d.jsxs)("div",{className:"flex items-center ".concat(e.reverse?"flex-row-reverse justify-between":e.icon&&""," ").concat(e.icon?"ml-0 mr-0":""," ").concat(e.reverse?e.icon&&"marginRight":""),children:[(0,d.jsx)("div",{className:"".concat(e.icon?"w-5 sm:w-8 marginLeft":"md:h-14"," verticalFutureRow-imgCont"),children:(0,d.jsx)("img",{src:"/assets/images/symbol.svg",alt:"icon",style:h.img})}),(0,d.jsx)("h3",{className:"text-xl sm:text-2xl text-gray-900 font-semibold ".concat(e.icon?"ml-1 mr-1 sm:ml-3 sm:mr-3":""," ").concat(e.reverse?"ml-0 sm:ml-0":""),style:h.title,children:e.title})]}),(0,d.jsx)("span",{style:h.span})]}),e.description,null===(t=e.listItems)||void 0===t?void 0:t.map((function(e){return(0,d.jsxs)("div",{className:"flex items-start mt-1",children:[(0,d.jsx)("img",{src:"".concat(m.basePath,"/assets/images/ul_elem.svg"),style:{marginTop:"5px"},alt:"ul"}),(0,d.jsx)("p",{className:"ml-3",children:e})]},e)})),(0,d.jsx)("div",{style:h.button,children:(0,d.jsx)(a.default,{href:"".concat(e.link),passHref:!0,children:(0,d.jsx)(l.E.div,{whileTap:{scale:.9},children:(0,d.jsxs)("a",{className:"float-right text-gray-800 w-32 flex text-sm font-bold border-2 p-1.5 mr-4 mt-4 border-l-8 border-gray-800 modal-contactus-send-button",children:["Read More",(0,d.jsx)("img",{src:"/icons/Blue Arrow.svg",alt:"",className:"h-4 mt-0.5 ml-1 text-gray-900"})]})})})})]}),(0,d.jsx)("div",{className:"p-3 md:w-64 md:mt-12 md:ml-5 lg:w-80 lg:max-h-56 flex items-center justify-center desktopTitle",children:(0,d.jsx)("img",{src:"".concat(m.basePath).concat(e.image),alt:e.imageAlt,style:{maxWidth:"100%"},className:"mb-3 sm:mb-0 ".concat(e.imageFilter?"image-gray-filter":""),ref:n})})]})]})})}},2342:function(e,t,i){"use strict";i.d(t,{$:function(){return o}});var n=i(1163),s=i(664),a=i(7379),r=i(5893),o=function(e){var t=(0,n.useRouter)(),i={sectionContainer:{marginLeft:e.reverse?"0":"-4rem",marginRight:e.reverse?"-4rem":"0"},content:{width:"100%",flexDirection:e.reverse?"row-reverse":"row"},logoImg:{height:"65px",width:"36px",margin:"0 auto"},title:{margin:"0 6px",backgroundColor:"white",borderBottom:"1px solid #2C4DCA",lineHeight:"0",padding:"0",width:"100%",textAlign:e.reverse?"end":"start"},titleSpan:{background:"#fff",padding:"0 15px"}};return(0,r.jsxs)("div",{className:"max-w-screen-xl mx-auto px-3 ".concat(e.yPadding?e.yPadding:"py-6"),children:[(e.title||e.description)&&(0,r.jsxs)(s.E.div,{className:"mb-12 text-left flex items-center flex-start section-container",style:i.sectionContainer,initial:a.Z.hidden,variants:a.Z,whileInView:a.Z.visible,viewport:{once:!0},children:[(0,r.jsxs)("div",{className:"flex items-center",style:i.content,children:[e.image&&(0,r.jsx)("img",{src:"".concat(t.basePath).concat(e.image),alt:e.title,style:i.logoImg}),e.title&&(0,r.jsx)("h2",{className:"text-2xl text-gray-900 font-bold margin",style:i.title,children:(0,r.jsx)("span",{style:i.titleSpan,children:e.title})})]}),e.description&&(0,r.jsx)("div",{className:"mt-4 text-xl md:px-20",children:e.description})]}),e.children]})}},2267:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return I}});var n=i(1664),s=i(1163),a=i(664),r=i(7379),o=i(5893),l={imgContainer:{height:"185px",display:"flex",alignItems:"flex-end"}},c=function(e){var t=(0,s.useRouter)();return(0,o.jsxs)(a.E.div,{className:"p-3 border-2 relative pb-9 boxshadow-animation",initial:r.Z.hidden,variants:r.Z,whileInView:r.Z.visible,viewport:{once:!0},children:[(0,o.jsx)("div",{style:l.imgContainer,className:"mb-3",children:(0,o.jsx)("img",{src:"".concat(t.basePath).concat(e.image),alt:e.imageAlt,style:{margin:"0 auto"}})}),(0,o.jsxs)("div",{className:"",children:[(0,o.jsx)("h4",{className:"text-2xl text-gray-900 font-semibold",children:e.title}),(0,o.jsx)("div",{className:"mt-3 text-sm",children:e.description})]}),(0,o.jsx)("div",{className:"bottom-2 absolute right-3 mt-5",children:(0,o.jsx)(n.default,{href:encodeURIComponent(e.link),passHref:!0,children:(0,o.jsx)(a.E.div,{whileHover:{scale:1.1},children:(0,o.jsxs)("a",{className:"float-right text-primary-500 flex text-sm font-bold",style:{color:"rgb(59 130 246)"},children:["Read More",(0,o.jsx)("img",{src:"/icons/Blue Arrow.svg",alt:"",className:"h-4 mt-0.5 ml-1"})]})})})})]})},d=i(2342),u=function(){return(0,o.jsx)(d.$,{image:"/assets/images/symbol.svg",title:"About Us",children:(0,o.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[(0,o.jsx)(c,{title:"Fundraising",description:"We invest time in developing diligence documents for a seed round, an executive summary and a slide deck we can walk investors through and, potentially, leave behind so VCs can show to other partners.  FINHUB is an expert in creating accurate financial models and business plans that allow everyone to understand how numbers work, not just what numbers are.   We include vision, product, team (location, contact info), traction, market size, and minimum financials are all included.",image:"/assets/images/AboutUs_fundraising.svg",imageAlt:"First feature alt text",link:"fundraising"}),(0,o.jsx)(c,{title:"Product Development",description:"A good understanding of the requirements, users, target audience, and prospective market is required for creating a successful product. We take all of these factors into account and create a well-defined plan that outlines our approach and strategy for converting your concept into a marketable product. During the first stage, we'll try to figure out what we need to know about the product and the company that's behind it. We accomplish this by conducting extensive research.",image:"/assets/images/AboutUs_ProductDevelopment.svg",imageAlt:"Product Development",link:"product-development"}),(0,o.jsx)(c,{title:"Sales Solutions",description:"For startups, an outsourced sales force can assist the company in identifying untapped market possibilities. It's difficult for an already overworked team to overcome technological obstacles, or perhaps not having enough manpower to compete. Finhub helps organizations that wish to scale swiftly without recruiting more full-time employees save time and money. Since it might be difficult for your employees to try new things, an outsider's perspective is always helpful.",image:"/assets/images/AboutUs_SalesSolutions.svg",imageAlt:"Sales Solutions",link:"sales-solution"})]})})},m={start:{y:[-50,0],opacity:[0,1],transition:{ease:"easeOut",duration:.7}},stop:{y:[0,50],opacity:[1,0],transition:{ease:"easeOut",duration:.7}}},h=function(e){return(0,o.jsx)(a.E.div,{variants:m,animate:e.start?m.start:m.stop,children:e.logo?(0,o.jsxs)("div",{className:"text-lg sm:text-3xl lg:text-4xl flex items-center text-black",children:[(0,o.jsx)("img",{src:"/assets/images/logo_white.svg",className:"h-6 sm:h-16",alt:"Finhub Software Solutions logo"}),"Scaling Solutions"]}):e.title})},g=i(7294),f={backgroundImage:{background:"url('/assets/images/home-banner-opacity.jpg') no-repeat",backgroundSize:"cover",height:"calc(100vh - 75px)"},backgroundColor:{backgroundColor:"white",height:"calc(100vh - 75px)",transition:"1s"}},p=function(){var e=(0,g.useState)(""),t=e[0],i=e[1],n=(0,g.useState)(!1),s=n[0],a=n[1],r=(0,g.useState)(!0),l=r[0],c=r[1],d=(0,g.useState)(!1),u=d[0],m=d[1],p=(0,g.useState)(!1),v=p[0],x=p[1],y=(0,g.useState)(!1),w=y[0],b=y[1],j=(0,g.useState)(!1),C=j[0],k=j[1],N=(0,g.useState)(0),_=N[0],A=N[1];return(0,g.useEffect)((function(){k(!1),b(!0),setTimeout((function(){a(!0),i("Trusted partner for thriving businesses")}),1e3),setTimeout((function(){a(!1),m(!0),k(!0)}),5e3),setTimeout((function(){k(!0)}),5200),setTimeout((function(){b(!1),c(!1)}),5500),setTimeout((function(){m(!1),a(!0),x(!0)}),5900),setTimeout((function(){a(!1),m(!0),k(!0)}),9900),setTimeout((function(){i(""),c(!0),m(!1),x(!1),A(_+1)}),10900)}),[_]),(0,o.jsx)("div",{style:l?f.backgroundImage:f.backgroundColor,className:"\n        ".concat(u?"opacity-0":"opacity-100"," \n        ").concat(w?"scale-125":""," \n        ").concat(C?"transition-2s":"transition-30s","\n      "),children:(0,o.jsx)("div",{className:"container h-full flex flex-col justify-center items-center text-center text-white",children:(0,o.jsx)("p",{className:"text-3xl lg:text-6xl sm:my-8 transition",style:{filter:"".concat(v?"":"drop-shadow(2px 4px 6px black)")},children:(0,o.jsx)(h,{title:t,start:s,logo:v})})})})},v=function(e){var t=(0,s.useRouter)(),i={span:{display:e.title?"block":"none",height:"50px",borderLeft:"4px solid #2C4DCA",margin:"0 8px"}};return(0,o.jsxs)(a.E.div,{className:"mb-8 p-3",initial:r.Z.hidden,variants:r.Z,whileInView:r.Z.visible,viewport:{once:!0},children:[(0,o.jsxs)("div",{className:"mb-2 flex items-center",children:[(0,o.jsx)("div",{className:"col-span-1 pr-2 pl-1",children:(0,o.jsx)("img",{src:"".concat(t.basePath).concat(e.image),alt:e.imageAlt,style:{margin:"0 auto"}})}),(0,o.jsx)("span",{style:i.span}),(0,o.jsx)("div",{className:"col-span-5 pl-1 border-l-slate-900",children:(0,o.jsx)("div",{className:"text-xl lg:text-3xl font-light text-gray-900",children:e.title})})]}),(0,o.jsxs)("div",{className:"flex flex-col-reverse sm:flex-row sm:grid-container sm:grid-cols-6 mb-2",children:[(0,o.jsx)("div",{className:"w-36 sm:col-span-1",children:(0,o.jsx)(a.E.div,{whileTap:{scale:.9},children:(0,o.jsxs)("a",{href:e.link,className:"float-right text-gray-800 w-32 flex text-sm font-bold border-2 p-1.5 mr-4 mt-4 border-l-8 border-gray-800 modal-contactus-send-button",children:["Read More",(0,o.jsx)("img",{src:"/icons/Blue Arrow.svg",alt:"",className:"h-4 mt-0.5 ml-1 text-gray-900"})]})})}),(0,o.jsx)("div",{className:"w-full sm:col-span-5 pl-1",children:(0,o.jsx)("div",{className:"text-sm",children:e.description})})]})]})},x=function(){return(0,o.jsx)(d.$,{title:"Other Links",image:"/assets/images/symbol.svg",reverse:"True",children:(0,o.jsxs)("div",{className:"w-full",children:[(0,o.jsx)(v,{title:"Capital Fund",description:"Finhub Capital is a soci\xe9t\xe9 en commandite sp\xe9ciale (SCSp) registered under the laws of the Grand-Duchy of Luxembourg having its registered office at 26, Boulevard Royal Luxembourg, 2449 Luxembourg and which is registered with the Luxembourg Trade and Companies Registry with number B246268. The Fund established with a subscribed capital of one hundred million euros (100,000,000 euros.- ) based on the financial assessment of liquid tangible assets, including 50 million ordinary shares and 50 million secured shares. Additionally, 100 (one hundred) voting shares were issued, including 1 share belonging to the General Partner & ICOD  Partners S.\xe0 r.l. The Fund aims to produce positive returns with medium/high volatility (range and frequency of price movement). Part of net income the Fund generates will be reinvested and reflected in the value of your Shares.",image:"/icons/icon-finhub.svg",imageAlt:"Finhub image",link:"https://www.finhubfund.com/"}),(0,o.jsx)(v,{title:"Crowdfunding",description:"Finhub is an online platform that was created to communicate potential investors with promising projects in one trading arena, where the borrower quickly and profitably receives the amount he needs, and the investor invests profitably. Use our platform to invest in the project you like, regardless of the geographic location. We offer a progresive service created to show that common open-space funding environment works. Finhub unites projects in all countries of the world, with a strong focus on the DACH market, enabling users to view, analyze, invest and request investments for a particular project unlimitedly. We will advise you on all challenges as an investor or as an investment seeker for your project. Acting as financial operators we are ready to accompany your investments or projects from initial analysis to managing your assets.",image:"/icons/icon-finhub.svg",imageAlt:"Finhub image",link:"https://finhubfund.co.uk/"}),(0,o.jsx)(v,{description:"Anders Capital GMbH is a financial consulting company, specialising in the development of projects in various sectors and industries: manufacturing, energy, construction, development, legal services and others. Our team assists your business on any step of its existence in terms of financial, development or managerial perspective. We offer a wide range of financial services, that insure high quality and loyalty to our customers.",image:"/icons/icon-anders.svg",imageAlt:"Finhub image",link:"https://anderscapital.eu/"})]})})},y=function(){return(y=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var s in t=arguments[i])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function w(e,t){void 0===t&&(t={});var i=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===i&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}w(".styles-module_carousel-base__3keqD {\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\toutline: none;\n}\n\n.styles-module_item-provider__YgMwz {\n\toverflow: hidden;\n\twidth: 100%;\n\tcursor: pointer;\n}\n\n.styles-module_item-container__a8zaY img {\n\t-webkit-user-select: none;\n\t        user-select: none;\n\t-webkit-user-drag: none;\n}\n\n.styles-module_item-tracker__3bypy {\n\theight: 100%;\n\tdisplay: flex;\n}\n\n.styles-module_carousel-arrow__26sRw {\n\tz-index: 1;\n}\n");var b,j=function(e){return g.createElement("button",{className:"styles-module_carousel-arrow__26sRw",onClick:e.onClick,"data-direction":e.direction})};!function(e){e[e.Right=-1]="Right",e[e.Left=1]="Left"}(b||(b={}));var C=function(){function e(e,t){this.arr=e,this.currentIndex=t}return e.prototype.next=function(){var e=this.currentIndex,t=this.arr;return this.currentIndex=e<t.length-1?e+1:0,this.current()},e.prototype.prev=function(){var e=this.currentIndex,t=this.arr;return this.currentIndex=e>0&&e<t.length?e-1:t.length-1,this.current()},e.prototype.current=function(){return this.arr[this.currentIndex]},e}(),k=function(e,t,i){return i*e*t},N=function(e,t,i,n){var s=e>t;return i?{left:s,right:s}:{left:s&&0!==n,right:s&&n+t<e}},_=function(e,t,i){if(!i)return e;for(var n=Array.from(e),s=new C(e,0),a=0;a<t;a++)n.unshift(s.prev());return n};function A(e){return e.nativeEvent instanceof MouseEvent?e.nativeEvent.pageX:e.nativeEvent instanceof TouchEvent?e.nativeEvent.changedTouches[0].pageX:0}var S=function(e){var t=(0,g.useState)(200),i=t[0],n=t[1],s=(0,g.useCallback)((function(t){if(null!==t){var i=t.getBoundingClientRect().width/e.show;n(i),e.widthCallBack(i)}}),[i]);e.responsive&&function(e){var t=(0,g.useState)(window.innerWidth),s=t[0],a=t[1];(0,g.useLayoutEffect)((function(){var e=function(){var e=s-window.innerWidth;a(window.innerWidth),function(e){n(i-e)}(e)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[])}();var a=(0,g.useState)({initial:e.transform,start:0,isDown:!1,drag:0,finished:!0,pointers:!0}),r=a[0],o=a[1],l=function(t){t.persist(),o(y(y({},r),{isDown:!0,start:A(t),initial:e.transform,finished:!1}))},c=function(t){if(t.persist(),!r.finished){if(Math.abs(r.drag)<i*e.swipeOn)return e.dragCallback(e.transform),o({initial:e.transform,start:0,isDown:!1,drag:0,finished:!0,pointers:!0});e.slideCallback(r.drag>0?b.Right:b.Left),o(y(y({},r),{drag:0,isDown:!1,finished:!0,pointers:!0}))}},d=function(e){if(e.persist(),r.isDown){var t=A(e);o(y(y({},r),{drag:r.start-t,pointers:!1}))}},u=e.swiping?{onTouchCancel:c,onTouchEnd:c,onTouchMove:d,onTouchStart:l,onMouseDown:l,onMouseLeave:c,onMouseUp:c,onMouseMove:d}:{};return g.createElement("div",{ref:s,className:"styles-module_item-provider__YgMwz"},g.createElement("div",y({"data-testid":"trackList"},u,{className:"styles-module_item-tracker__3bypy",style:{transform:"translateX("+(e.transform-r.drag)+"px)",transition:"transform "+e.transition+"s ease 0s",width:i*e.items.length}}),e.items.map((function(e,t){return g.createElement("div",{key:t,style:{width:i,pointerEvents:r.pointers?"all":"none"},className:"styles-module_item-container__a8zaY"},e)}))))},E={children:[],show:1,slide:1,transition:.5,swiping:!1,swipeOn:1,responsive:!1,infinite:!0,className:"",useArrowKeys:!1,a11y:{},dynamic:!1,paginationCallback:null,pageCount:0,rightArrow:null,leftArrow:null},R=function(e){var t,i,n,s,a=y(y({},E),e),r=(0,g.useState)(_(a.children,a.slide,a.infinite)),o=r[0],l=r[1],c=(0,g.useState)(0),d=c[0],u=c[1],m=(0,g.useState)({transform:0,transition:0,isSliding:!1}),h=m[0],f=m[1],p=(0,g.useState)(0),v=p[0],x=p[1],w=(0,g.useState)(N(a.children.length,a.show,a.infinite,v)),A=w[0],R=w[1],T=(n=e.children,s=(0,g.useRef)(),(0,g.useEffect)((function(){s.current=n})),s.current),F=(0,g.useState)(0),P=F[0],M=F[1],I=(0,g.useRef)(_(a.children,a.slide,a.infinite)),L=(0,g.useRef)(!1);a.dynamic&&(0,g.useEffect)((function(){var e=function(e,t,i,n,s){if(i&&i.length<t.length)return _(t,n,s);var a=e.map((function(e){return t.find((function(t){return e.key===t.key}))}));return a.some((function(e){return void 0===e}))?_(t,n,s):a}(I.current,a.children,T,a.slide,a.infinite);l(e),I.current=e,P<a.pageCount&&T&&(null==T?void 0:T.length)<a.children.length&&(D(b.Right),M(P+1))}),[a.children]);var D=function(e){if(!(h.isSliding||e===b.Right&&!A.right||e===b.Left&&!A.left)){if(a.paginationCallback&&e===b.Right&&P<a.pageCount-1&&!L.current)return L.current=!0,void a.paginationCallback(e);var t=a.children,i=function(e,t,i,n){var s=e-n*t;return s<0?i+s:i<=s?s-i:s}(v,a.slide,t.length,e),n=a.infinite?function(e,t,i,n,s,a){var r=new C(e,i),o=Array.from(t);switch(+a){case b.Left:for(var l=s;l>=0;l--)(s-l<0||!o[l-s])&&o.unshift(r.current()),r.prev();break;case b.Right:for(l=0;l<n+s;l++)o[2*s+l]||o.push(r.current()),r.next()}return o}(t,o,i,a.show,a.slide,e):o;a.infinite&&e===b.Right&&(l(n),I.current=n),f({transform:h.transform+k(d,a.slide,e),transition:a.transition,isSliding:!0}),x(i),R(N(t.length,a.show,a.infinite,i)),setTimeout((function(){if(a.infinite){var t=function(e,t,i){return i===b.Left?e.slice(0,-1*t):e.slice(t)}(e===b.Right?I.current:n,a.slide,e);l(t),I.current=t}f({transform:a.infinite?k(d,a.slide,b.Right):h.transform+k(d,a.slide,e),transition:0,isSliding:!1})}),1e3*a.transition),L.current=!1}};return g.createElement("div",y({},a.a11y,{"data-testid":"carousel",tabIndex:0},a.useArrowKeys?{onKeyDown:function(e){37===e.keyCode?D(b.Left):39===e.keyCode&&D(b.Right)}}:{},{className:"styles-module_carousel-base__3keqD "+a.className}),A.left&&g.createElement("div",{onClick:function(){return D(b.Left)}},null!==(t=a.leftArrow)&&void 0!==t?t:g.createElement(j,{direction:"left"})),g.createElement(S,y({},a,{transition:h.transition,items:I.current,transform:h.transform,slideCallback:function(e){D(e)},dragCallback:function(e){f({transform:e,transition:a.transition,isSliding:!1}),setTimeout((function(){return f(y(y({},h),{transition:0}))}),1e3*a.transition)},widthCallBack:function(e){u(e),f({transform:a.infinite?k(e,a.slide,b.Right):0,transition:0,isSliding:!1})}})),A.right&&g.createElement("div",{onClick:function(){return D(b.Right)}},null!==(i=a.rightArrow)&&void 0!==i?i:g.createElement(j,{direction:"right"})))};w(".styles-module_sliderBase__swkx1 {\n\twidth: 100%;\n\tposition: relative;\n}\n\n.styles-module_slider__o0fqa {\n\tdisplay: flex;\n\toverflow-x: auto;\n\tscrollbar-width: none; /* Firefox 64 */\n\t-ms-overflow-style: none; /* Internet Explorer 11 */\n}\n\n.styles-module_slider__o0fqa::-webkit-scrollbar {\n\t/** WebKit */\n\tdisplay: none;\n}\n\n.styles-module_slider__o0fqa > * {\n\tflex: 0 0 auto;\n}\n\n.styles-module_sliding__3T6T6 > * {\n\tpointer-events: none;\n}\n");var T=function(e){var t=(0,s.useRouter)();return(0,o.jsx)("div",{style:{margin:"0 15px 0 15px"},children:(0,o.jsx)("img",{src:"".concat(t.basePath).concat(e.image),alt:e.imageAlt,style:{height:"120px"}})})};var F=function(){var e=function(){var e=!0;function t(){return{width:window.innerWidth,height:window.innerHeight}}var i=(0,g.useState)(t()),n=i[0],s=i[1];return(0,g.useEffect)((function(){function e(){s(t())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[e]),n}().width,t=null!=e&&e<=950?3:5;return(0,o.jsx)(d.$,{title:"Our Partners & Clients",image:"/assets/images/symbol.svg",reverse:"true",children:(0,o.jsxs)(R,{show:t,slide:2,transition:.5,swiping:!0,useArrowKeys:!1,className:"carousel-container",children:[(0,o.jsx)(T,{image:"/assets/images/our partners/Andy's.svg",imageAlt:""}),(0,o.jsx)(T,{image:"/assets/images/our partners/DAAC Hermes.svg",imageAlt:""}),(0,o.jsx)(T,{image:"/assets/images/our partners/EKSON.svg",imageAlt:""}),(0,o.jsx)(T,{image:"/assets/images/our partners/GREEN LANDSCAPE.svg",imageAlt:""}),(0,o.jsx)(T,{image:"/assets/images/our partners/Healthity.svg",imageAlt:""}),(0,o.jsx)(T,{image:"/assets/images/our partners/ICOD.svg",imageAlt:""}),(0,o.jsx)(T,{image:"/assets/images/our partners/Novello.svg",imageAlt:""}),(0,o.jsx)(T,{image:"/assets/images/our partners/Tecnogen.svg",imageAlt:""}),(0,o.jsx)(T,{image:"/assets/images/our partners/Vioinox.svg",imageAlt:""})]})})},P=i(3027),M=function(){return(0,o.jsxs)(d.$,{title:"Social Responsibility",image:"/assets/images/symbol.svg",children:[(0,o.jsx)(P.E,{title:"About",description:"FINHUB AC GmbH & Co KG supports the Cycling Federation as well as the Paralympic Committee of Moldova. We are contributing to the organization of various regional and national events and competitions for juniors, seniors, amateur, and professional athletes. Our strong relationship with both organizations has a significant impact on the development of sports; education; mental, social, and physical well-being of the community. We are truly proud to partner with organizations that bring value to the society.",image:"/assets/images/index-photo1.svg",imageAlt:"Second feature alt text",reverse:!0}),(0,o.jsx)(P.E,{title:"Paralympic Committee",description:"The committee supervises and coordinates the Paralympic multi-disability, regional and national competitions in the  Republic of Moldova. It is a non-profit organisation, recognized by the National Olympic Committee of the Republic of Moldova,  by the Ministry of Education, Culture and Research of the Republic of Moldova, as well as by the International Paralympic  Committee (IPC). Moldova competed in the Paralympic Games for the first time at the 1996 Summer Paralympics. Since then,  they have competed in every Summer Paralympic Games, making Tokyo their seventh appearance. They have never competed in the  Winter Paralympic Games, although they have won two medals at the Summer Paralympics (one each in athletics and table tennis).  A total of 4403 competitors representing 162 National Paralympic Committees competed in the 2020 Summer Paralympics, which took place from August 24 to September 5, 2021.",image:"/assets/images/index-photo2.svg",imageFilter:!0,imageAlt:"two feature alt text",line:!0}),(0,o.jsx)(P.E,{title:"Moldavian Cycling Federation",description:"The Moldavian Cycling Federation (FCRM) is a public sports organization founded in late 1993. Today it includes 8  members. The Moldavian Cycling Federation is recognized by the National Olympic Committee of the Republic of Moldova, by the  Ministry of Education, Culture and Research of the Republic of Moldova, as well as by the International Cycling Union (UCI) and  the European Cycling Union (UEC) as the exclusive organization in Moldova having priority right to control the development of  cycling at the national level.",image:"/assets/images/index-photo3.png",imageFilter:!0,imageAlt:"feature alt text",line:!0})]})},I=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p,{}),(0,o.jsx)(u,{}),(0,o.jsx)(x,{}),(0,o.jsx)(M,{}),(0,o.jsx)(F,{})]})}},7379:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n={visible:{opacity:1,transition:{delay:.3}},hidden:{opacity:0,transition:{when:"afterChildren",staggerChildren:.3}}}},5301:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(2267)}])}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);