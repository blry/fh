(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4184:function(e,t){var i;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var a=typeof i;if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i)){if(i.length){var r=s.apply(null,i);r&&e.push(r)}}else if("object"===a)if(i.toString===Object.prototype.toString)for(var o in i)n.call(i,o)&&i[o]&&e.push(o);else e.push(i.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(i=function(){return s}.apply(t,[]))||(e.exports=i)}()},3027:function(e,t,i){"use strict";i.d(t,{E:function(){return m}});var n=i(4184),s=i.n(n),a=i(1163),r=i(7294),o=i(7592),l=i(7379),c=i(6992),d=i(5893),m=function(e){var t,i=s()("mt-10","mb-12","md:mx-8","mr-4","flex",{"flex-row-reverse":e.reverse}),n=(0,r.useRef)(),m=(0,r.useRef)(),u=(0,a.useRouter)(),p={img:{display:e.icon?"":"none"},title:{display:e.title?"":"none"},subContainer:{flexDirection:e.reverse?"row-reverse":"row"},span:{display:e.line?"block":"none",width:"76px",borderTop:"3px solid #2C4DCA",marginBottom:"18px"},button:{display:e.link?"flex":"none",margin:"15px 0"},buttonLink:{borderColor:"#707070",width:"165px"},div:{border:e.imageFilter?"1px solid #EEEEEE":"",paddingBottom:"25px",paddingLeft:"25px"}};return(0,d.jsx)(o.E.div,{className:"\n        ".concat(i," vertical-feature-class \n        ").concat(e.hoverShadow?"hover:shadow-[0_0px_20px_4px_rgba(0,0,0,0.1)]":""),onMouseOver:function(){e.imageFilter&&n.current.classList.remove("image-gray-filter")},onMouseLeave:function(){e.imageFilter&&n.current.classList.add("image-gray-filter")},ref:m,style:p.div,initial:l.Z.hidden,variants:l.Z,whileInView:l.Z.visible,viewport:{once:!0},children:(0,d.jsxs)("div",{className:"flex flex-col",style:{marginTop:e.marginTop?e.marginTop:"",marginBottom:e.marginBottom?e.marginBottom:""},children:[(0,d.jsxs)("div",{className:"mobTitle flex-col",children:[(0,d.jsxs)("div",{className:"flex items-center ".concat(e.icon?"ml-0 mr-0 marginLeft":""),children:[(0,d.jsx)("div",{className:"".concat(e.icon?"w-5 sm:w-8":""),children:(0,d.jsx)("img",{src:"/assets/images/symbol.svg",alt:"icon",style:p.img})}),(0,d.jsx)("h3",{className:"text-xl sm:text-2xl text-gray-900 font-semibold ".concat(e.icon?"ml-2 mr-2 sm:ml-3 sm:mr-3":""),style:p.title,children:e.title})]}),(0,d.jsx)("span",{style:p.span}),(0,d.jsx)("div",{className:"p-3 md:w-64 lg:w-80 lg:max-h-56 flex items-center justify-center",children:(0,d.jsx)("img",{src:"".concat(u.basePath).concat(e.image),alt:e.imageAlt,style:{maxWidth:"85%"},className:"mb-3 sm:mb-0"})})]}),(0,d.jsxs)("div",{className:"flex flex-col-reverse items-center verticalFeatureRow-text ".concat(e.reverse?"md:flex-row-reverse":"md:flex-row"),children:[(0,d.jsxs)("div",{className:"mt-6 md:mt-0 flex flex-col ml-[16px] \n              ".concat(e.fullRow?"md:w-4/5":"md:w-1/2"," \n              text-sm text-black leading-4"),children:[(0,d.jsxs)("div",{className:"desktopTitle flex-col",children:[(0,d.jsxs)("div",{className:"flex items-center ".concat(e.reverse?"flex-row-reverse justify-between":e.icon&&""," ").concat(e.icon?"ml-0 mr-0":""," ").concat(e.reverse?e.icon&&"marginRight":""),children:[(0,d.jsx)("div",{className:"".concat(e.icon?"w-5 sm:w-8 marginLeft":"md:h-14"," verticalFutureRow-imgCont "),children:(0,d.jsx)("img",{src:"/assets/images/symbol.svg",alt:"icon",style:{display:e.icon?"":"none",marginLeft:(e.reverse,"-21px")}})}),(0,d.jsx)("h3",{className:"text-xl sm:text-2xl text-gray-900 font-semibold ".concat(e.icon?"ml-1 mr-1 sm:ml-3 sm:mr-3":""," ").concat(e.reverse?"ml-0 sm:ml-0":""),style:p.title,children:e.title})]}),(0,d.jsx)("span",{style:p.span})]}),(0,d.jsx)("div",{style:{width:e.descriptionWidth?e.descriptionWidth:"100%"},children:e.description}),null===(t=e.listItems)||void 0===t?void 0:t.map((function(t){return(0,d.jsxs)("div",{className:"flex items-start mt-1 ml-[2px]",style:{width:e.descriptionWidth?e.descriptionWidth:"100%"},children:[(0,d.jsx)("img",{src:"".concat(u.basePath,"/assets/images/ul_elem.svg"),style:{marginTop:"5px"},alt:"ul"}),(0,d.jsx)("p",{className:"ml-3",children:t})]},t)})),(0,d.jsx)("div",{style:p.button,children:(0,d.jsx)(c.c,{title:"Read More",width:146,inputWidth:"87px",top:"5px",onClick:function(){return e.link&&u.push(e.link)},link:e.link?e.link:""})})]}),(0,d.jsx)("div",{className:"p-3 md:mt-12 md:ml-auto md:mr-auto lg:max-h-56 flex items-center justify-center desktopTitle",children:(0,d.jsx)("img",{src:"".concat(u.basePath).concat(e.image),alt:e.imageAlt,style:{maxWidth:e.imageSize?e.imageSize:"100%",width:e.imageWidth?e.imageWidth:"",height:e.imageHeight?e.imageHeight:""},className:"mb-3 sm:mb-0 ".concat(e.imageFilter?"image-gray-filter":""),ref:n})})]})]})})}},2003:function(e,t,i){"use strict";i.r(t);var n=i(3027),s=i(2699),a=i(5893);t.default=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.j,{title:"About Us",description:"Finhub Scaling Solutions is a B2B consulting company, offering a broad range of professional services, primarily within Sales, IT and Finances & Legal. Based on our experience of over a decade within the EU market and highly skillful and dedicated team of experts, we deliver personalized and cost-effective solutions to our customers. Our values of Loyalty, Perseverence and Team-work ensure that we are always there for our customers by working the extra mile to exceed their expectations, while providing an inclusive and learning-friendly working environment for our employees. With offices in both Vienna, Austria and Chisinau, Republic of Moldova, our teams share the same high standards and are open for everyone with respect to the local COVID-19 measures."}),(0,a.jsxs)("div",{className:"max-w-[1427px] mx-auto px-3 mb-28",children:[(0,a.jsx)(n.E,{title:"Product Development",description:"A good understanding of the requirements, users, target audience, and prospective market is required for  creating a successful product. We take all of these factors into account and create a well-defined plan that outlines  our approach and strategy for converting your concept into a marketable product. During the first stage, we\u2019ll try to  figure out what we need to know about the product and the company that\u2019s behind it. We accomplish this by conducting  extensive research that provides us with a clear picture of what the product is all about, what it offers users, and what  they require. The research produces a list of Requirement Specifications. The intricacies of the interface, navigation,  and how the information is displayed are identified and defined by functional and visual design.",image:"/assets/images/about-photo1.svg",imageWidth:"400px",imageHeight:"300px",imageAlt:"image",icon:!0,link:"product-development"}),(0,a.jsx)(n.E,{title:"Fundraising",description:"Raising finance is an important component of starting and growing a business. After all, having enough funding  to launch a new product or expand into a new market might spell the difference between success and failure. This crucial  responsibility frequently falls on the founder. Even though fundraising is a crucial task, the process can be challenging.  Despite the fact that few founders start out as fundraising specialists, some do eventually get the hang of it. Early funding  sources like as incubators, accelerators, and angel investors, typically start with a pre-seed or seed round. These rounds  can range from EUR 10,000 to EUR 2 million. Companies can use early investment rounds to fund things like market research and  development.",descriptionWidth:"92%",image:"/assets/images/about-photo2.svg",imageWidth:"430px",imageHeight:"330px",imageAlt:"image",icon:!0,reverse:!0,imageSize:"110%",link:"fundraising"}),(0,a.jsx)(n.E,{title:"Sales Solutions",description:"For startups, an outsourced sales force can assist the company in identifying untapped market possibilities.  It's difficult for an already overworked team to overcome technological obstacles, or perhaps not having enough manpower to  compete. Finhub helps organizations that wish to scale swiftly without recruiting more full-time employees save time and money.  Since it might be difficult for your employees to try new things, an outsider's perspective is always helpful. Furthermore, we  assist businesses in expanding into new markets or establishing a presence in new geographic areas. Outsourcing is advantageous  when there are linguistic or cultural difficulties to overcome. We specialize in B2B Sales Development within the European  markets. Our team consists of experienced, motivated, and intelligent individuals that speak English, German, French, Spanish,  Italian and Russian.",image:"/assets/images/about-photo3.svg",imageWidth:"400px",imageHeight:"330px",imageAlt:"image",icon:!0,link:"sales-solution"}),(0,a.jsx)(n.E,{title:"Team Extension",description:"If you don\u2019t have specific knowledge in-house, can\u2019t locate the proper personnel locally, or recruiting takes too  long when you\u2019re trying to build new products and grow your business, team extension is the service for you. Finhub can help  you expand your software development team with specialized expertise. We assist businesses in a variety of industries with  augmenting their teams with our professionals to meet the demands of their cutting edge products. We employ young and motivated  IT professionals through a rigorous recruitment process that combines a variety of soft & hard skills assessments. It allows us  to identify and secure top tier candidates only. Learning & Development is an essential part of Finhub\u2019s culture. Thanks to our  dedicated L&D experts, we keep our employees up to date with the latest technology & market trends. We consider language and  communication skills a key factor for personal growth. Offering a comprehensive English course, for business and IT, we ensure  best quality cooperation with all of our partners and customers worldwide.",descriptionWidth:"92%",image:"/assets/images/about-photo4.svg",imageWidth:"490px",imageHeight:"330px",imageAlt:"image",icon:!0,imageSize:"125%",reverse:!0,link:"team-extension"})]})]})}},2699:function(e,t,i){"use strict";i.d(t,{j:function(){return r}});var n=i(7592),s=i(7379),a=i(5893),r=function(e){var t={bannerContainer:{background:"url('/assets/images/home-banner-opacity.jpg') no-repeat",borderBottom:"3px solid #2C4DCA",backgroundSize:"cover",height:"270px",padding:"1rem",display:"flex",justifyContent:"center",alignItems:"center",color:"white"},bannerContent:{display:"flex",justifyContent:"space-between",margin:"0 20px"},title:{fontSize:"20pt",marginTop:"10px"},span:{display:e.description?"block":"none",width:"1px",borderLeft:"2px solid #ffffff",margin:"0 60px"},description:{display:e.description?"block":"none",width:"62vw",fontSize:"10pt",marginTop:"10px",marginRight:"50px"}};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(n.E.div,{style:t.bannerContainer,className:"teamBannerContainer",initial:s.Z.hidden,variants:s.Z,whileInView:s.Z.visible,viewport:{once:!0},children:(0,a.jsxs)("div",{style:t.bannerContent,className:"teamBannerContent",children:[(0,a.jsx)("div",{style:t.title,className:"teamBannerTitle whitespace-nowrap",children:e.title}),(0,a.jsx)("span",{style:t.span}),(0,a.jsx)("div",{style:t.description,className:"teamBannerText",children:e.description})]})})})}},7379:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n={visible:{opacity:1,transition:{delay:.3}},hidden:{opacity:0,transition:{when:"afterChildren",staggerChildren:.3}}}},4613:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return i(2003)}])}},function(e){e.O(0,[774,888,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);