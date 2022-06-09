(()=>{"use strict";var e,t={content:document.getElementById("content"),buildHomePage:function(){let e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("img"),o=document.createElement("div");e.className="bodyContainer",t.className="bodyTitle",n.className="bodyTagline",a.classname="bodyImage",o.classname="bodyCTA",t.innerText="Taiwan's Best Italian Restaurant!",n.innerText="Open to the world since 2022!",o.innerText="Order online or visit our nearest location!",e.append(t,n,a,o),this.content.appendChild(e),console.log("body test!")}},n={content:document.getElementById("content"),buildMenuPage:function(){let e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("img"),o=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),m=document.createElement("img"),d=document.createElement("div"),l=document.createElement("div"),s=document.createElement("div"),r=document.createElement("img"),u=document.createElement("div"),b=document.createElement("div"),h=document.createElement("div"),E=document.createElement("img"),T=document.createElement("div"),g=document.createElement("div");a.src="../img/fries.png",m.src="../img/salad.png",r.src="../img/steak.png",E.src="../img/tiramisu.png",e.className="menuContainer",t.className="menuTitle",n.className="foodBox",a.className="foodPic",o.className="foodName",c.className="foodAbout",i.className="foodBox",m.className="foodPic",d.className="foodName",l.className="foodAbout",s.className="foodBox",r.className="foodPic",u.className="foodName",b.className="foodAbout",h.className="foodBox",E.className="foodPic",T.className="foodName",g.className="foodAbout",o.innerText="Garlic Fries",c.innerText="Fresh cut spuds",d.innerText="Green Goddess Salad",l.innerText="You've seen this one too many times on tiki toki",u.innerText="Rosemary Steak",b.innerText="Choice sirloin basted in rosemary, garlic, and butter",T.innerText="Tiramisu",g.innerText="It tastes just like putting a Chanel bag in your mouth",n.append(a,o,c),i.append(m,d,l),s.append(r,u,b),h.append(E,T,g),e.append(n,i,s,h),this.content.appendChild(e),console.log("Menu Test!")}},a={content:document.getElementById("content"),buildContactPage:function(){let e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div");e.className="contactContainer",t.className="contactTitle",n.className="contactPhone",t.innerText="Please Contact Us",n.innerText="123 456 789",e.append(t,n),this.content.appendChild(e),console.log("Contact Test!")}},o={content:document.getElementById("content"),buildHeader:function(){let e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("button"),c=document.createElement("button"),i=document.createElement("button");e.className="headerContainer",t.className="headerTitle",n.className="headerSubtitle",a.className="tabContainer",o.className="homeTab",c.className="menuTab",i.className="contactTab",t.innerText="La Luna",n.innerText="Italiano Ristorante",o.innerText="Home",c.innerText="Menu",i.innerText="Contact",a.append(o,c,i),e.append(t,n,a),this.content.appendChild(e)}},c={content:document.getElementById("content"),buildFooter:function(){let e=document.createElement("div"),t=document.createElement("div");e.className="footerContainer",t.className="footerText",t.innerText="This website was built by Jacob",e.appendChild(t),this.content.appendChild(e),console.log("foot test!")}};(e={init:function(){this.homePageInit(),this.cacheDom(),this.bindEvents(),console.log("this is a big test")},cacheDom:function(){this.el=document.getElementById("content"),this.homeTab=this.el.querySelector(".homeTab"),this.menuTab=this.el.querySelector(".menuTab"),this.contactTab=this.el.querySelector(".contactTab")},bindEvents:function(){this.homeTab.onclick=this.homePage,this.menuTab.onclick=this.menuPage,this.contactTab.onclick=this.contactPage},homePageInit:function(){o.buildHeader(),t.buildHomePage(),c.buildFooter()},homePage:function(){e.el.innerHTML="",o.buildHeader(),t.buildHomePage(),c.buildFooter(),e.cacheDom(),e.bindEvents()},menuPage:function(){e.el.innerHTML="",o.buildHeader(),n.buildMenuPage(),c.buildFooter(),e.cacheDom(),e.bindEvents()},contactPage:function(){e.el.innerHTML="",o.buildHeader(),a.buildContactPage(),c.buildFooter(),e.cacheDom(),e.bindEvents()}}).init()})();