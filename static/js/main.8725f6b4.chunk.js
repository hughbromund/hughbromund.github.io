(this.webpackJsonpv2=this.webpackJsonpv2||[]).push([[0],{105:function(e,a,t){e.exports=t.p+"static/media/Boilermake1.696c7abf.JPG"},106:function(e,a,t){e.exports=t.p+"static/media/Boilermake2.aa7d9dbb.JPG"},107:function(e,a,t){e.exports=t.p+"static/media/Boilermake3.39737cc6.jpg"},108:function(e,a,t){},109:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),o=t.n(l),c=t(11),s=t(12),i=t(14),m=t(13),u=t(47),d=t.n(u),h=(t(65),t(83),t(35)),p=t(19),E=t(71),b=t.n(E),g=t(10),f=t(22),v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).scrollToTop=function(){f.animateScroll.scrollToTop()},e}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,{fixed:"top",expand:"md",variant:"dark",className:b.a.navbar},r.a.createElement(h.a.Brand,{onClick:this.scrollToTop},r.a.createElement("strong",null,"Hugh Bromund")),r.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,null,r.a.createElement(f.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:500},"About Me")),r.a.createElement(p.a.Link,null,r.a.createElement(f.Link,{activeClass:"active",to:"experience",spy:!0,smooth:!0,offset:-70,duration:500},"Experience")),r.a.createElement(p.a.Link,null,r.a.createElement(f.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:-70,duration:500},"Projects")),r.a.createElement(p.a.Link,null,r.a.createElement(f.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},"Contact Me"))),r.a.createElement(p.a.Link,{target:"_blank",href:"https://github.com/hughbromund"},r.a.createElement(g.a,{icon:["fab","github"],color:"white",size:"2x"})),r.a.createElement(p.a.Link,{target:"_blank",href:"https://www.linkedin.com/in/hughbromund/"},r.a.createElement(g.a,{icon:["fab","linkedin"],color:"white",size:"2x"})),r.a.createElement(p.a.Link,{target:"_blank",href:"mailto:hughbromund44@gmail.com"},r.a.createElement(g.a,{icon:["fas","envelope"],color:"white",size:"2x"})))))}}]),t}(n.Component),C=t(44),w=t(77),y=t(73),_=t(4),N=t(8),k=t(61),S=t.n(k),I=function(e){Object(i.a)(n,e);var a=Object(m.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:S.a.wrapper},r.a.createElement(_.a,null,r.a.createElement(N.a,{sm:!0},r.a.createElement("span",{style:{float:"right"}},r.a.createElement("div",{className:S.a.picture},r.a.createElement(y.a,{fluid:!0,rounded:!0,src:t(97)})))),r.a.createElement(N.a,{sm:!0},r.a.createElement("h3",null,"Hi there"," ",r.a.createElement("span",{role:"img","aria-label":"waving hand"},"\ud83d\udc4b"),", I'm"),r.a.createElement("h1",null,r.a.createElement("strong",null,"Hugh Bromund")),r.a.createElement("h3",null,"I"," ",r.a.createElement(w.a,{children:["build awesome websites","go to Purdue University","compete at Hackathons","teach programming","study Computer Science"]})),r.a.createElement("p",{style:{"max-width":"30rem"}},"I'm a full-time student studying Computer Science at"," ",r.a.createElement("i",null,"Purdue University"),". I have a passion for all things Computer Science. In my free time I am a ",r.a.createElement("i",null,"Teaching Assistant")," for a Fundamentals of C programming class. I am also a member of"," ",r.a.createElement("i",null,"Hack the Future")," where I lead a team of 6 to create projects for non-profits near Purdue's campus."),r.a.createElement(C.a,{variant:"primary"},r.a.createElement(f.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:500},"About Me")))))}}]),n}(n.Component),j=t(34),x=t.n(j),T=t(9),A=t(26),O=t(17),P=t.n(O),B=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={activeSection:"role"},n}return Object(s.a)(t,[{key:"render",value:function(){for(var e=this,a=[],t=0;t<this.props.techNames.length;t++)a.push(r.a.createElement(N.a,null,r.a.createElement(_.a,{className:P.a.techCol},r.a.createElement(g.a,{icon:["fab",this.props.techCodes[t]],size:"2x"})),r.a.createElement(_.a,{className:P.a.techCol},this.props.techNames[t])));var n=[];if(void 0!==this.props.awardsNames)for(t=0;t<this.props.awardsNames.length;t++)n.push(r.a.createElement(_.a,null,r.a.createElement("a",{href:this.props.awardsLinks[t]},r.a.createElement("span",{role:"img","aria-label":"trophy"},"\ud83c\udfc6")," ","- ",this.props.awardsNames[t])));return 0===n.length&&n.push(r.a.createElement(_.a,null,"No Awards")),r.a.createElement("div",null,r.a.createElement(T.a,{className:P.a.card},r.a.createElement(T.a.Body,null,r.a.createElement(T.a.Title,null,r.a.createElement("b",null,this.props.name)," ",this.props.demo?"| ":"",r.a.createElement("a",{hidden:!this.props.demo,target:"_blank",rel:"noopener noreferrer",href:this.props.demo},"Demo"),r.a.createElement("span",{style:{float:"right"}},r.a.createElement("a",{hidden:!this.props.repo,target:"_blank",rel:"noopener noreferrer",href:this.props.repo},r.a.createElement(g.a,{icon:["fab","github"],size:"lg"})))),r.a.createElement(T.a.Subtitle,null,this.props.description)),r.a.createElement(A.a,{defaultActiveKey:"role",onSelect:function(a){console.log(a),e.setState({activeSection:a})}},r.a.createElement(T.a,{className:P.a.accordionCard},r.a.createElement(A.a.Toggle,{as:T.a.Header,className:"role"===this.state.activeSection?P.a.accordionToggleActive:P.a.accordionToggle,eventKey:"role"},r.a.createElement("b",null,"My Role")),r.a.createElement(A.a.Collapse,{eventKey:"role"},r.a.createElement(T.a.Body,null,this.props.role))),r.a.createElement(T.a,{className:P.a.accordionCard},r.a.createElement(A.a.Toggle,{as:T.a.Header,eventKey:"tech",className:"tech"===this.state.activeSection?P.a.accordionToggleActive:P.a.accordionToggle},r.a.createElement("b",null,"Technologies")),r.a.createElement(A.a.Collapse,{eventKey:"tech"},r.a.createElement(T.a.Body,null,r.a.createElement(_.a,null,a)))),r.a.createElement(T.a,{className:P.a.accordionCard},r.a.createElement(A.a.Toggle,{as:T.a.Header,eventKey:"awards",className:"awards"===this.state.activeSection?P.a.accordionToggleActive:P.a.accordionToggle},r.a.createElement("b",null,"Awards")),r.a.createElement(A.a.Collapse,{eventKey:"awards"},r.a.createElement(T.a.Body,null,r.a.createElement(N.a,null,n)))))))}}]),t}(n.Component),L=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:x.a.wrapper},r.a.createElement("h1",{className:x.a.title},r.a.createElement("strong",null,"Projects"),r.a.createElement("hr",null)),r.a.createElement("div",{className:x.a.cards},r.a.createElement(_.a,{xs:1,md:2,lg:2,xl:2,className:x.a.projectsRow},r.a.createElement(N.a,null,r.a.createElement(B,{name:"FINEX",description:"A team based project to build a website that helps track spending and stock information",role:"I created the initial designs and then worked on the frontend team to bring those designs to life. I specifically worked on the design and functionality of the budgeting feature. Additionally, I took on the task of hosting the website once it was completed.",techNames:["React","Bootstrap","JavaScript","node","HTML","CSS","npm"],techCodes:["react","bootstrap","js","node","html5","css3-alt","npm"],repo:"https://github.com/hughbromund/FINEX",demo:"https://finex.money"})),r.a.createElement(N.a,null,r.a.createElement(B,{name:"StarStats",description:"An iOS app that displays player stats from the game BrawlStars",role:"I worked on a number of different components for this project. My first job was building the backend for our app. I built the backend using NodeJS and hosted it in Google Cloud. I then moved on to creating the trophy graphing system and our persistent data system.",techNames:["Swift","JavaScript","node","Sketch"],techCodes:["swift","js","node","sketch"],repo:"https://github.com/BrawlStats-Purdue/BrawlStats",awardsNames:["Best Design - 2020 CodePath National Demo Day"],awardsLinks:["https://blog.codepath.org/codepath-hosts-first-national-virtual-demo-day/"]})),r.a.createElement(N.a,null,r.a.createElement(B,{name:"AdventurousSloth",description:"A web app that helps create an itinerary based on a simple set of questions.",role:"I came up with the initial idea for the website and then worked on the frontend team. I built the home page and the results page using React.",techNames:["React","JavaScript","node","HTML","CSS","npm","Tripadvisor API"],techCodes:["react","js","node","html5","css3-alt","npm","tripadvisor"],repo:"https://github.com/hughbromund/AdventurousSloth",demo:"https://adventurous-sloth-1.ue.r.appspot.com/",awardsNames:["3rd Place Overall - Boilermake VII"],awardsLinks:["https://devpost.com/software/adventurous-sloth"]})),r.a.createElement(N.a,null,r.a.createElement(B,{name:"HughBromund.com",description:"My personal Portfolio website.",role:"I designed and built my personal website from scratch. I realized that template sites weren't letting me create the design I wanted so I decided to make my own design.",techNames:["React","Bootstrap","JavaScript","node","HTML","CSS","npm"],techCodes:["react","bootstrap","js","node","html5","css3-alt","npm"],repo:"https://github.com/hughbromund/hughbromund.github.io",demo:"https://hughbromund.com"})))))}}]),t}(n.Component),M=t(25),H=t(5),R=t.n(H),z=t(49),J=t(63),D=t.n(J),G=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=[];e.push(r.a.createElement(z.a.Item,{variant:"primary"},r.a.createElement("b",null,this.props.responsibilitiesTitle)));for(var a=0;a<this.props.responsibilities.length;a++)e.push(r.a.createElement(z.a.Item,null,this.props.responsibilities[a]));return r.a.createElement("div",null,r.a.createElement(T.a,{className:D.a.ExperienceCard},r.a.createElement(T.a.Body,null,r.a.createElement(T.a.Title,null,r.a.createElement("strong",null,this.props.company)," |"," ",r.a.createElement("i",null,this.props.position)),r.a.createElement(T.a.Subtitle,null,r.a.createElement(_.a,{xs:1,sm:2},r.a.createElement(N.a,null,this.props.location),r.a.createElement(N.a,{className:D.a.dateCol},this.props.dates))),r.a.createElement("hr",null),r.a.createElement(T.a.Text,null,this.props.about)),r.a.createElement(z.a,{variant:"flush"},e)))}}]),t}(n.Component),W=function(e){Object(i.a)(n,e);var a=Object(m.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:R.a.wrapper},r.a.createElement("h1",{className:R.a.title},r.a.createElement("strong",null,"About Me"),r.a.createElement("hr",null)),r.a.createElement("br",null),r.a.createElement("div",{className:R.a.inner},r.a.createElement("h2",null,r.a.createElement("strong",null,"Skills")),r.a.createElement(_.a,{xs:1,sm:1,md:2},r.a.createElement(N.a,null,r.a.createElement(T.a,{className:R.a.card},r.a.createElement(T.a.Body,null,r.a.createElement(T.a.Title,null,r.a.createElement("strong",null,"Programming Languages")),r.a.createElement("hr",null),r.a.createElement(_.a,null,r.a.createElement(N.a,null,r.a.createElement(_.a,{className:R.a.techCol},r.a.createElement(g.a,{icon:["fab","java"],size:"2x"})),r.a.createElement(_.a,{className:R.a.techCol},"Java")),r.a.createElement(N.a,null,r.a.createElement(_.a,{className:R.a.techCol},r.a.createElement(g.a,{icon:["fab","js"],size:"2x"})),r.a.createElement(_.a,{className:R.a.techCol},"JavaScript")),r.a.createElement(N.a,null,r.a.createElement(_.a,{className:R.a.techCol},r.a.createElement(g.a,{icon:["fab","python"],size:"2x"})),r.a.createElement(_.a,{className:R.a.techCol},"Python")),r.a.createElement(N.a,null,r.a.createElement(_.a,{className:R.a.techCol},r.a.createElement(g.a,{icon:["fab","swift"],size:"2x"})),r.a.createElement(_.a,{className:R.a.techCol},"Swift")),r.a.createElement(N.a,null,r.a.createElement(_.a,{className:R.a.techCol},r.a.createElement(g.a,{icon:["fab","html5"],size:"2x"})),r.a.createElement(_.a,{className:R.a.techCol},"HTML")),r.a.createElement(N.a,null,r.a.createElement(_.a,{className:R.a.techCol},r.a.createElement(g.a,{icon:["fab","css3-alt"],size:"2x"})),r.a.createElement(_.a,{className:R.a.techCol},"CSS")),r.a.createElement(N.a,null,r.a.createElement(_.a,{className:R.a.techCol},"C/C++")))))),r.a.createElement(N.a,null,r.a.createElement(T.a,{className:R.a.card},r.a.createElement(T.a.Body,null,r.a.createElement(T.a.Title,null,r.a.createElement("strong",null,"Technologies")),r.a.createElement("hr",null),r.a.createElement(_.a,null,r.a.createElement(N.a,null,r.a.createElement(_.a,{className:R.a.techCol},r.a.createElement(g.a,{icon:["fab","react"],size:"2x"})),r.a.createElement(_.a,{className:R.a.techCol},"React")),r.a.createElement(N.a,null,r.a.createElement(_.a,{className:R.a.techCol},r.a.createElement(g.a,{icon:["fab","node"],size:"2x"})),r.a.createElement(_.a,{className:R.a.techCol},"node")),r.a.createElement(N.a,null,r.a.createElement(_.a,{className:R.a.techCol},r.a.createElement(g.a,{icon:["fab","npm"],size:"2x"})),r.a.createElement(_.a,{className:R.a.techCol},"npm")),r.a.createElement(N.a,null,r.a.createElement(_.a,{className:R.a.techCol},r.a.createElement(g.a,{icon:["fab","bootstrap"],size:"2x"})),r.a.createElement(_.a,{className:R.a.techCol},"Bootstrap")),r.a.createElement(N.a,null,r.a.createElement(_.a,{className:R.a.techCol},r.a.createElement(g.a,{icon:["fab","ubuntu"],size:"2x"})),r.a.createElement(_.a,{className:R.a.techCol},"Linux")),r.a.createElement(N.a,null,r.a.createElement(_.a,{className:R.a.techCol},r.a.createElement(g.a,{icon:["fab","github"],size:"2x"})),r.a.createElement(_.a,{className:R.a.techCol},"GitHub CI/CD")),r.a.createElement(N.a,null,r.a.createElement(_.a,{className:R.a.techCol},"Google Cloud Platform")),r.a.createElement(N.a,null,r.a.createElement(_.a,{className:R.a.techCol},"Electron.js")))))))),r.a.createElement("div",{className:R.a.inner},r.a.createElement("h2",null,r.a.createElement("strong",null,"Outside of Class"))),r.a.createElement("div",{className:R.a.carousel},r.a.createElement(T.a,{className:R.a.card},r.a.createElement(M.a,{interval:"5000"},r.a.createElement(M.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:t(105),alt:"the Adventurous Sloth Team"}),r.a.createElement(M.a.Caption,null,r.a.createElement("h2",null,"The Adventurous Sloth Team"),r.a.createElement("p",null,"After competing for 36 hours, our team took home 3rd Place Overall at Boilermake VII"))),r.a.createElement(M.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:t(106),alt:"the Adventurous Sloth Demo"}),r.a.createElement(M.a.Caption,null,r.a.createElement("h2",null,"Live Demo of Adventurous Sloth"),r.a.createElement("p",null,"We were one of only a few teams that were invited to demo our product at the end of the Hackathon"))),r.a.createElement(M.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:t(107),alt:"the Adventurous Sloth judging"}),r.a.createElement(M.a.Caption,null,r.a.createElement("h2",null,"Judging for Boilermake VII")))),r.a.createElement(T.a.Body,null,r.a.createElement(T.a.Title,null,r.a.createElement("b",null,"Boilermake VII")," | ",r.a.createElement("i",null,"Hackathon")),r.a.createElement(T.a.Subtitle,null,"West Lafayette, IN"),r.a.createElement("hr",null),r.a.createElement(T.a.Text,null,"I recently had the opportunity to compete at Purdue's largest Hackathon, Boilermake VII. This years theme was Hack Your Adventure, and so our team created the website Adventurous Sloth. The goal of Adventurous Sloth was to allow users to answer a simple set of questions and then receive a full travel itinerary based upon those choices. Boilermake VII was a great experience for me because of how much new material I leanred in just 36 hours. I am looking forward to competing in Boilermake VIII next year.")))),r.a.createElement("h1",{className:R.a.title},r.a.createElement("strong",null,"Education & Experience"),r.a.createElement("hr",null)),r.a.createElement("div",{className:R.a.inner},r.a.createElement("h2",null,r.a.createElement("strong",null,"Education")),r.a.createElement(G,{company:"Purdue University",position:"B.S. Computer Science Honors",location:"West Lafayette, IN",dates:"2022 Graduation",about:"GPA: 3.72 / 4.00 | Semester Honors and Deans List",responsibilities:["Computer Architecture (CS 25000)","Data Structures and Algorithms (CS 25100)","Fundamentals of Computer Science (CS 18200)","Problem Solving and Object-Oriented Programming ( CS 18000)","Programming in C (CS 24000)","Software Engineering I (CS 30700)","Systems Programming (CS 25200)","iOS Development In Swift (CS 49000-iOS)"],responsibilitiesTitle:"Coursework"}),r.a.createElement("div",{id:"experience"},r.a.createElement("h2",null,r.a.createElement("strong",null,"Experience")),r.a.createElement("br",null),r.a.createElement(_.a,{xs:1,sm:1,md:2,lg:3,xl:3,className:R.a.experienceRow},r.a.createElement(N.a,null,r.a.createElement(G,{company:"LincLogix LLC",position:"Software Developer Intern",location:"Indianapolis, IN",about:"Working with the LincLogix Engineering Team for the 2020 summer. Creating applications that help save LincLogix employees time and automate repetitive processes.",dates:"May 2020 - Present",responsibilities:["Built data processing and validation tool that automates over 15 hours of work per month with Python","Built data aggregation web app that saves 5+ hours of work per week with React, NodeJS, and Express","Modernized company website with new responsive design using React (viewable at LincLogix.com)"],responsibilitiesTitle:"Responsibilities"})),r.a.createElement(N.a,null,r.a.createElement(G,{company:"Purdue University",location:"West Lafayette, IN",position:"Teaching Assistant",about:"Assisted and helped teach 40+ students in the Fundamentals of C class",dates:"Jan. 2020 - May 2020",responsibilities:["Work with students one-on-one to help them with all aspects of the class","Grade Code-Standard for student homework submissions"],responsibilitiesTitle:"Responsibilities"})),r.a.createElement(N.a,null,r.a.createElement(G,{company:"iD Tech Camps",location:"West Lafayette, IN",position:"Lead Instructor",about:"I am the Lead Instructor for iD Camps during the 2019 summer. I worked at Purdue University and University of Alabama Birmingham",dates:"May 2019 - July 2019",responsibilities:["Taught classes focusing on machine learning and artificial intelligence to 100+ students","Named the best instructor in the \u201cTeaching\u201d, \u201cLeadership\u201d, and \u201cOrganization\u201d categories","Monitored Progress of all students and made sure every student completed the curriculum"],responsibilitiesTitle:"Responsibilities"})),r.a.createElement(N.a,{hidden:!0},r.a.createElement(G,{company:"Brebeuf Jesuit Preparatory School",location:"Indianapolis, IN",position:"IT Summer Intern",about:"I am the summer intern for my high school's IT department",dates:"May 2016 - Aug. 2017",responsibilities:["Help teachers setup and use new technology in the school","Run new CAT6 Ethernet cables throughout the building","Setup and maintain the Brebeuf Jesuit Maker Space"],responsibilitiesTitle:"Responsibilities"}))))))}}]),n}(n.Component),V=t(48),F=t.n(V),K=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:F.a.wrapper},r.a.createElement("h1",{className:F.a.title},r.a.createElement("strong",null,"Get In Touch"),r.a.createElement("hr",null)),r.a.createElement("div",{className:F.a.inner},r.a.createElement("h3",null,"Interested in Talking?"),r.a.createElement(C.a,{href:"mailto:hughbromund44@gmail.com"},"Email"," ",r.a.createElement("span",{role:"img","aria-label":"e-mail"},"\u2709\ufe0f"))))}}]),t}(n.Component),U=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center",paddingBottom:"2%"}},"Designed and Built with"," ",r.a.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f")," ","by Hugh Bromund",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/hughbromund/hughbromund.github.io"},"Open Source Website Source Code")," - Hosted by GitHub Pages")}}]),t}(n.Component),q=t(30),X=t(75),Y=t(76);q.b.add(X.a),q.b.add(Y.a);var Z=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:d.a.container},r.a.createElement("div",{className:d.a.navContainer},r.a.createElement(v,null)),r.a.createElement("div",{className:d.a.bodyDiv},r.a.createElement(I,{id:"home"}),r.a.createElement("div",{id:"projects"},r.a.createElement(L,null)),r.a.createElement("div",{id:"about"},r.a.createElement(W,null)),r.a.createElement("div",{id:"contact"},r.a.createElement(K,null)),r.a.createElement(U,null)))}}]),t}(n.Component);t(108),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},17:function(e,a,t){e.exports={accordionCard:"ProjectCard_accordionCard__3_kAa",accordionToggle:"ProjectCard_accordionToggle__3ByfQ",accordionToggleActive:"ProjectCard_accordionToggleActive__2CwmR",card:"ProjectCard_card__1VhrG",techCol:"ProjectCard_techCol__F3j_A"}},34:function(e,a,t){e.exports={cards:"Projects_cards__1I6Py",wrapper:"Projects_wrapper__2WbCB",title:"Projects_title__FCsvv",card:"Projects_card__-ev6G",projectsRow:"Projects_projectsRow__3qxap"}},47:function(e,a,t){e.exports={all:"App_all__2lp7V",header:"App_header__3ZZ1n",bodyDiv:"App_bodyDiv__ytX-z",navContainer:"App_navContainer__32B3M",container:"App_container__1MQN3"}},48:function(e,a,t){e.exports={wrapper:"ContactMe_wrapper__Gm1Nc",title:"ContactMe_title__W3YO4",inner:"ContactMe_inner__3O3-Y"}},5:function(e,a,t){e.exports={wrapper:"AboutMe_wrapper__3LC-8",title:"AboutMe_title__1R3Su",inner:"AboutMe_inner__3vb6u",carousel:"AboutMe_carousel__2aMJF",experienceRow:"AboutMe_experienceRow__jiTm_",card:"AboutMe_card__88FOI",techCol:"AboutMe_techCol__C5CyV"}},61:function(e,a,t){e.exports={wrapper:"HomePage_wrapper__Tpt6K",container:"HomePage_container__310er",title:"HomePage_title__3J7RG",picture:"HomePage_picture__1eIhH"}},63:function(e,a,t){e.exports={ExperienceCard:"ExperienceCard_ExperienceCard__1qonn",dateCol:"ExperienceCard_dateCol__2V3t6"}},71:function(e,a,t){e.exports={navbar:"NavigationBar_navbar__2MEaZ","navbar-default":"NavigationBar_navbar-default__5UHIx"}},78:function(e,a,t){e.exports=t(109)},83:function(e,a,t){},97:function(e,a,t){e.exports=t.p+"static/media/hugh.7dd215df.JPG"}},[[78,1,2]]]);
//# sourceMappingURL=main.8725f6b4.chunk.js.map