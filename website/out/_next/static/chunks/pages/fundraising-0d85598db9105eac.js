(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[703],{4184:function(e,t){var i;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var a=typeof i;if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i)){if(i.length){var r=s.apply(null,i);r&&e.push(r)}}else if("object"===a)if(i.toString===Object.prototype.toString)for(var o in i)n.call(i,o)&&i[o]&&e.push(o);else e.push(i.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(i=function(){return s}.apply(t,[]))||(e.exports=i)}()},3027:function(e,t,i){"use strict";i.d(t,{E:function(){return d}});var n=i(4184),s=i.n(n),a=i(1163),r=i(7294),o=i(7592),l=i(7379),c=i(6992),m=i(5893),d=function(e){var t,i=s()("mt-10","mb-12","md:mx-8","mr-4","flex",{"flex-row-reverse":e.reverse}),n=(0,r.useRef)(),d=(0,r.useRef)(),u=(0,a.useRouter)(),h={img:{display:e.icon?"":"none"},title:{display:e.title?"":"none"},subContainer:{flexDirection:e.reverse?"row-reverse":"row"},span:{display:e.line?"block":"none",width:"76px",borderTop:"3px solid #2C4DCA",marginBottom:"18px"},button:{display:e.link?"flex":"none",margin:"15px 0"},buttonLink:{borderColor:"#707070",width:"165px"},div:{border:e.imageFilter?"1px solid #EEEEEE":"",paddingBottom:"25px",paddingLeft:"25px"}};return(0,m.jsx)(o.E.div,{className:"\n        ".concat(i," vertical-feature-class \n        ").concat(e.hoverShadow?"hover:shadow-[0_0px_20px_4px_rgba(0,0,0,0.1)]":""),onMouseOver:function(){e.imageFilter&&n.current.classList.remove("image-gray-filter")},onMouseLeave:function(){e.imageFilter&&n.current.classList.add("image-gray-filter")},ref:d,style:h.div,initial:l.Z.hidden,variants:l.Z,whileInView:l.Z.visible,viewport:{once:!0},children:(0,m.jsxs)("div",{className:"flex flex-col",style:{marginTop:e.marginTop?e.marginTop:"",marginBottom:e.marginBottom?e.marginBottom:""},children:[(0,m.jsxs)("div",{className:"mobTitle flex-col",children:[(0,m.jsxs)("div",{className:"flex items-center ".concat(e.icon?"ml-0 mr-0 marginLeft":""),children:[(0,m.jsx)("div",{className:"".concat(e.icon?"w-5 sm:w-8":""),children:(0,m.jsx)("img",{src:"/assets/images/symbol.svg",alt:"icon",style:h.img})}),(0,m.jsx)("h3",{className:"text-xl sm:text-2xl text-gray-900 font-semibold ".concat(e.icon?"ml-2 mr-2 sm:ml-3 sm:mr-3":""),style:h.title,children:e.title})]}),(0,m.jsx)("span",{style:h.span}),(0,m.jsx)("div",{className:"p-3 md:w-64 lg:w-80 lg:max-h-56 flex items-center justify-center",children:(0,m.jsx)("img",{src:"".concat(u.basePath).concat(e.image),alt:e.imageAlt,style:{maxWidth:"85%"},className:"mb-3 sm:mb-0"})})]}),(0,m.jsxs)("div",{className:"flex flex-col-reverse items-center verticalFeatureRow-text ".concat(e.reverse?"md:flex-row-reverse":"md:flex-row"),children:[(0,m.jsxs)("div",{className:"mt-6 md:mt-0 flex flex-col ml-[16px] \n              ".concat(e.fullRow?"md:w-4/5":"md:w-1/2"," \n              text-sm text-black leading-4"),children:[(0,m.jsxs)("div",{className:"desktopTitle flex-col",children:[(0,m.jsxs)("div",{className:"flex items-center ".concat(e.reverse?"flex-row-reverse justify-between":e.icon&&""," ").concat(e.icon?"ml-0 mr-0":""," ").concat(e.reverse?e.icon&&"marginRight":""),children:[(0,m.jsx)("div",{className:"".concat(e.icon?"w-5 sm:w-8 marginLeft":"md:h-14"," verticalFutureRow-imgCont "),children:(0,m.jsx)("img",{src:"/assets/images/symbol.svg",alt:"icon",style:{display:e.icon?"":"none",marginLeft:(e.reverse,"-21px")}})}),(0,m.jsx)("h3",{className:"text-xl sm:text-2xl text-gray-900 font-semibold ".concat(e.icon?"ml-1 mr-1 sm:ml-3 sm:mr-3":""," ").concat(e.reverse?"ml-0 sm:ml-0":""),style:h.title,children:e.title})]}),(0,m.jsx)("span",{style:h.span})]}),(0,m.jsx)("div",{style:{width:e.descriptionWidth?e.descriptionWidth:"100%"},children:e.description}),null===(t=e.listItems)||void 0===t?void 0:t.map((function(t){return(0,m.jsxs)("div",{className:"flex items-start mt-1 ml-[2px]",style:{width:e.descriptionWidth?e.descriptionWidth:"100%"},children:[(0,m.jsx)("img",{src:"".concat(u.basePath,"/assets/images/ul_elem.svg"),style:{marginTop:"5px"},alt:"ul"}),(0,m.jsx)("p",{className:"ml-3",children:t})]},t)})),(0,m.jsx)("div",{style:h.button,children:(0,m.jsx)(c.c,{title:"Read More",width:146,inputWidth:"87px",top:"5px",onClick:function(){return e.link&&u.push(e.link)},link:e.link?e.link:""})})]}),(0,m.jsx)("div",{className:"p-3 md:mt-12 md:ml-auto md:mr-auto lg:max-h-56 flex items-center justify-center desktopTitle",children:(0,m.jsx)("img",{src:"".concat(u.basePath).concat(e.image),alt:e.imageAlt,style:{maxWidth:e.imageSize?e.imageSize:"100%",width:e.imageWidth?e.imageWidth:"",height:e.imageHeight?e.imageHeight:""},className:"mb-3 sm:mb-0 ".concat(e.imageFilter?"image-gray-filter":""),ref:n})})]})]})})}},3952:function(e,t,i){"use strict";i.r(t);var n=i(3027),s=i(2699),a=i(5893);t.default=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.j,{title:"Fundraising"}),(0,a.jsxs)("div",{className:"max-w-[1400px] mx-auto mb-28",children:[(0,a.jsx)(n.E,{title:"Introduction",description:"Raising finance is an important component of starting and growing a business. After all, having enough funding  to launch a new product or expand into a new market might spell the difference between success and failure. This crucial  responsibility frequently falls on the founder. Even though fundraising is a crucial task, the process can be challenging.  Despite the fact that few founders start out as fundraising specialists, some do eventually get the hang of it. Early  funding sources like as incubators, accelerators, and angel investors, typically start with a pre-seed or seed round. These  rounds can range from EUR 10,000 to EUR 2 million. Companies can use early investment rounds to fund things like market  research and development.",image:"/assets/images/fund-photo1.svg",imageWidth:"400px",imageHeight:"315px",imageAlt:"image",icon:!0}),(0,a.jsx)(n.E,{title:"Strategy",description:"Different investors have their own set of criteria that we should be aware of before approaching them for  investment. We will not just express your own idea in order to receive investment; we will also comprehend the investor,  their concerns, and what they are looking for. Researching the potential investor in addition to improving your proposal.  Our team will find out if they've already invested in a business that's similar to yours. If this is the case, they  may find it difficult to invest in you as well. Companies then raise higher sums in series A, B, C, and beyond. Family  offices, venture capital, hedge funds, and other investment businesses may be among the investors. Businesses may need to  raise additional capital as they get larger in order to acquire companies, expand into new markets, or develop new products.  Private equity, strategic partners, or an initial public offering are all options for investors at this point.",image:"/assets/images/fund-photo2.svg",imageAlt:"image",imageWidth:"400px",imageHeight:"315px",imageSize:"120%",reverse:!0}),(0,a.jsx)(n.E,{title:"Process",description:"We invest time in developing diligence documents for a seed round, an executive summary and a slide deck we can  walk investors through and, potentially, leave behind so VCs can show to other partners. FINHUB is an expert in creating  accurate financial models and business plans that allow everyone to understand how numbers work, not just what numbers are.  We include vision, product, team (location, contact info), traction, market size, and minimum financials (revenue, if any,  and fundraising prior and current).  Generally, we make sure the slide deck is well structured. Graphics, charts,  screenshots are more powerful than lots of words. Consider it a framework around which we will hang a more detailed  version of your story. There is no fixed format or order, but the following parts are usually present. We create the pitch  that matches you, how you present, and how you want to represent your company.",image:"/assets/images/fund-photo3.svg",imageSize:"120%",imageWidth:"400px",imageHeight:"315px",imageAlt:"image"}),(0,a.jsx)(n.E,{title:"Activity",description:"There 2 fundraising mechanisms at FINHUB. The Crowdfunding App and the Investment Fund. Place your project on  the platform, as soon as you pass verification, you will be contacted by one of our analysts that will assist you throughout  the entire process. Our team will help you collect and/or create all the necessary documentation to ensure the highest  possible success rate. We will concentrate our efforts to become your ambassador within our own network of private and  institutional investors. The Finhub Capital Fund is constantly evaluating new investment opportunities. We are glad to meet  talented entrepreneurs and create strong, long-term partnerships. Feel free to contact Mr. Artiom Cebanu - Director of  Corporate Affairs & Communications.",image:"/assets/images/fund-photo4.svg",imageAlt:"image",imageWidth:"450px",imageHeight:"315px",imageSize:"120%",reverse:!0})]})]})}},2699:function(e,t,i){"use strict";i.d(t,{j:function(){return r}});var n=i(7592),s=i(7379),a=i(5893),r=function(e){var t={bannerContainer:{background:"url('/assets/images/home-banner-opacity.jpg') no-repeat",borderBottom:"3px solid #2C4DCA",backgroundSize:"cover",height:"270px",padding:"1rem",display:"flex",justifyContent:"center",alignItems:"center",color:"white"},bannerContent:{display:"flex",justifyContent:"space-between",margin:"0 20px"},title:{fontSize:"20pt",marginTop:"10px"},span:{display:e.description?"block":"none",width:"1px",borderLeft:"2px solid #ffffff",margin:"0 60px"},description:{display:e.description?"block":"none",width:"62vw",fontSize:"10pt",marginTop:"10px",marginRight:"50px"}};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.E.div,{style:t.bannerContainer,className:"teamBannerContainer",initial:s.Z.hidden,variants:s.Z,whileInView:s.Z.visible,viewport:{once:!0},children:(0,a.jsxs)("div",{style:t.bannerContent,className:"teamBannerContent",children:[(0,a.jsx)("div",{style:t.title,className:"teamBannerTitle whitespace-nowrap",children:e.title}),(0,a.jsx)("span",{style:t.span}),(0,a.jsx)("div",{style:t.description,className:"teamBannerText",children:e.description})]})})})}},7379:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n={visible:{opacity:1,transition:{delay:.3}},hidden:{opacity:0,transition:{when:"afterChildren",staggerChildren:.3}}}},1571:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fundraising",function(){return i(3952)}])}},function(e){e.O(0,[774,888,179],(function(){return t=1571,e(e.s=t);var t}));var t=e.O();_N_E=t}]);