import{s as Me,B as Ke,r as Y,f as v,g as w,h as Ne,d as i,C as xe,G as W,i as a,H as F,D as Xe,E as Ye,F as Ze,I as et,z as be,A as tt,J,a as $,R as y,c as h,j as g,S as He,l as Q,m as V,y as je}from"../chunks/scheduler.894ff9b9.js";import{S as qe,i as ke,a as x,t as b,b as H,d as L,m as T,e as M}from"../chunks/index.1328acbf.js";import{a as Le}from"../chunks/paths.65f0e7f7.js";import{g as st}from"../chunks/spread.84d39b6c.js";function lt(f){let e,s,n,o;const u=f[2].default,m=Ke(u,f,f[1],null);let l=[f[0]],p={};for(let r=0;r<l.length;r+=1)p=Y(p,l[r]);return{c(){e=v("li"),m&&m.c(),this.h()},l(r){e=w(r,"LI",{});var _=Ne(e);m&&m.l(_),_.forEach(i),this.h()},h(){xe(e,p),W(e,"bx--list__item",!0)},m(r,_){a(r,e,_),m&&m.m(e,null),s=!0,n||(o=[F(e,"click",f[3]),F(e,"mouseover",f[4]),F(e,"mouseenter",f[5]),F(e,"mouseleave",f[6])],n=!0)},p(r,[_]){m&&m.p&&(!s||_&2)&&Xe(m,u,r,r[1],s?Ze(u,r[1],_,null):Ye(r[1]),null),xe(e,p=st(l,[_&1&&r[0]])),W(e,"bx--list__item",!0)},i(r){s||(x(m,r),s=!0)},o(r){b(m,r),s=!1},d(r){r&&i(e),m&&m.d(r),n=!1,et(o)}}}function it(f,e,s){const n=[];let o=be(e,n),{$$slots:u={},$$scope:m}=e;function l(d){J.call(this,f,d)}function p(d){J.call(this,f,d)}function r(d){J.call(this,f,d)}function _(d){J.call(this,f,d)}return f.$$set=d=>{e=Y(Y({},e),tt(d)),s(0,o=be(e,n)),"$$scope"in d&&s(1,m=d.$$scope)},[o,m,u,l,p,r,_]}class nt extends qe{constructor(e){super(),ke(this,e,it,lt,Me,{})}}const O=nt;function at(f){let e,s,n,o;const u=f[4].default,m=Ke(u,f,f[3],null);let l=[f[2]],p={};for(let r=0;r<l.length;r+=1)p=Y(p,l[r]);return{c(){e=v("ul"),m&&m.c(),this.h()},l(r){e=w(r,"UL",{});var _=Ne(e);m&&m.l(_),_.forEach(i),this.h()},h(){xe(e,p),W(e,"bx--list--unordered",!0),W(e,"bx--list--nested",f[0]),W(e,"bx--list--expressive",f[1])},m(r,_){a(r,e,_),m&&m.m(e,null),s=!0,n||(o=[F(e,"click",f[5]),F(e,"mouseover",f[6]),F(e,"mouseenter",f[7]),F(e,"mouseleave",f[8])],n=!0)},p(r,[_]){m&&m.p&&(!s||_&8)&&Xe(m,u,r,r[3],s?Ze(u,r[3],_,null):Ye(r[3]),null),xe(e,p=st(l,[_&4&&r[2]])),W(e,"bx--list--unordered",!0),W(e,"bx--list--nested",r[0]),W(e,"bx--list--expressive",r[1])},i(r){s||(x(m,r),s=!0)},o(r){b(m,r),s=!1},d(r){r&&i(e),m&&m.d(r),n=!1,et(o)}}}function ut(f,e,s){const n=["nested","expressive"];let o=be(e,n),{$$slots:u={},$$scope:m}=e,{nested:l=!1}=e,{expressive:p=!1}=e;function r(C){J.call(this,f,C)}function _(C){J.call(this,f,C)}function d(C){J.call(this,f,C)}function Z(C){J.call(this,f,C)}return f.$$set=C=>{e=Y(Y({},e),tt(C)),s(2,o=be(e,n)),"nested"in C&&s(0,l=C.nested),"expressive"in C&&s(1,p=C.expressive),"$$scope"in C&&s(3,m=C.$$scope)},[l,p,o,m,u,r,_,d,Z]}class ot extends qe{constructor(e){super(),ke(this,e,ut,at,Me,{nested:0,expressive:1})}}const Te=ot;function rt(f){let e;return{c(){e=Q("A demo of a micro-frontend architecture")},l(s){e=V(s,"A demo of a micro-frontend architecture")},m(s,n){a(s,e,n)},d(s){s&&i(e)}}}function ft(f){let e;return{c(){e=Q("It is a proof of concept to demonstrate how to dynamically load views from an external source")},l(s){e=V(s,"It is a proof of concept to demonstrate how to dynamically load views from an external source")},m(s,n){a(s,e,n)},d(s){s&&i(e)}}}function mt(f){let e;return{c(){e=Q("Each view is a self-contained app that are loaded dynamically")},l(s){e=V(s,"Each view is a self-contained app that are loaded dynamically")},m(s,n){a(s,e,n)},d(s){s&&i(e)}}}function ct(f){let e,s,n,o,u,m;return e=new O({props:{$$slots:{default:[rt]},$$scope:{ctx:f}}}),n=new O({props:{$$slots:{default:[ft]},$$scope:{ctx:f}}}),u=new O({props:{$$slots:{default:[mt]},$$scope:{ctx:f}}}),{c(){H(e.$$.fragment),s=$(),H(n.$$.fragment),o=$(),H(u.$$.fragment)},l(l){L(e.$$.fragment,l),s=h(l),L(n.$$.fragment,l),o=h(l),L(u.$$.fragment,l)},m(l,p){T(e,l,p),a(l,s,p),T(n,l,p),a(l,o,p),T(u,l,p),m=!0},p(l,p){const r={};p&1&&(r.$$scope={dirty:p,ctx:l}),e.$set(r);const _={};p&1&&(_.$$scope={dirty:p,ctx:l}),n.$set(_);const d={};p&1&&(d.$$scope={dirty:p,ctx:l}),u.$set(d)},i(l){m||(x(e.$$.fragment,l),x(n.$$.fragment,l),x(u.$$.fragment,l),m=!0)},o(l){b(e.$$.fragment,l),b(n.$$.fragment,l),b(u.$$.fragment,l),m=!1},d(l){l&&(i(s),i(o)),M(e,l),M(n,l),M(u,l)}}}function pt(f){let e;return{c(){e=Q("Employees: displays all employees and can turn them into admins")},l(s){e=V(s,"Employees: displays all employees and can turn them into admins")},m(s,n){a(s,e,n)},d(s){s&&i(e)}}}function _t(f){let e;return{c(){e=Q("Admins: display only the employees that are admins")},l(s){e=V(s,"Admins: display only the employees that are admins")},m(s,n){a(s,e,n)},d(s){s&&i(e)}}}function $t(f){let e,s,n,o;return e=new O({props:{$$slots:{default:[pt]},$$scope:{ctx:f}}}),n=new O({props:{$$slots:{default:[_t]},$$scope:{ctx:f}}}),{c(){H(e.$$.fragment),s=$(),H(n.$$.fragment)},l(u){L(e.$$.fragment,u),s=h(u),L(n.$$.fragment,u)},m(u,m){T(e,u,m),a(u,s,m),T(n,u,m),o=!0},p(u,m){const l={};m&1&&(l.$$scope={dirty:m,ctx:u}),e.$set(l);const p={};m&1&&(p.$$scope={dirty:m,ctx:u}),n.$set(p)},i(u){o||(x(e.$$.fragment,u),x(n.$$.fragment,u),o=!0)},o(u){b(e.$$.fragment,u),b(n.$$.fragment,u),o=!1},d(u){u&&i(s),M(e,u),M(n,u)}}}function ht(f){let e,s,n="poc_dynmic_views_host";return{c(){e=Q("Repo of the Host app: "),s=v("a"),s.textContent=n,this.h()},l(o){e=V(o,"Repo of the Host app: "),s=w(o,"A",{target:!0,href:!0,"data-svelte-h":!0}),y(s)!=="svelte-15qse9a"&&(s.textContent=n),this.h()},h(){g(s,"target","_blank"),g(s,"href","https://github.com/trusz/poc_dynmic_views_host")},m(o,u){a(o,e,u),a(o,s,u)},p:je,d(o){o&&(i(e),i(s))}}}function dt(f){let e,s,n="poc_dynmic_views_admins";return{c(){e=Q("Repo of the Admins plugin: "),s=v("a"),s.textContent=n,this.h()},l(o){e=V(o,"Repo of the Admins plugin: "),s=w(o,"A",{target:!0,href:!0,"data-svelte-h":!0}),y(s)!=="svelte-192jznm"&&(s.textContent=n),this.h()},h(){g(s,"target","_blank"),g(s,"href","https://github.com/trusz/poc_dynmic_views_admins")},m(o,u){a(o,e,u),a(o,s,u)},p:je,d(o){o&&(i(e),i(s))}}}function vt(f){let e,s,n="poc_dynmic_views_employees";return{c(){e=Q("Repo of the Employees plugin: "),s=v("a"),s.textContent=n,this.h()},l(o){e=V(o,"Repo of the Employees plugin: "),s=w(o,"A",{target:!0,href:!0,"data-svelte-h":!0}),y(s)!=="svelte-1svx3fs"&&(s.textContent=n),this.h()},h(){g(s,"target","_blank"),g(s,"href","https://github.com/trusz/poc_dynmic_views_employees")},m(o,u){a(o,e,u),a(o,s,u)},p:je,d(o){o&&(i(e),i(s))}}}function wt(f){let e,s,n,o,u,m;return e=new O({props:{$$slots:{default:[ht]},$$scope:{ctx:f}}}),n=new O({props:{$$slots:{default:[dt]},$$scope:{ctx:f}}}),u=new O({props:{$$slots:{default:[vt]},$$scope:{ctx:f}}}),{c(){H(e.$$.fragment),s=$(),H(n.$$.fragment),o=$(),H(u.$$.fragment)},l(l){L(e.$$.fragment,l),s=h(l),L(n.$$.fragment,l),o=h(l),L(u.$$.fragment,l)},m(l,p){T(e,l,p),a(l,s,p),T(n,l,p),a(l,o,p),T(u,l,p),m=!0},p(l,p){const r={};p&1&&(r.$$scope={dirty:p,ctx:l}),e.$set(r);const _={};p&1&&(_.$$scope={dirty:p,ctx:l}),n.$set(_);const d={};p&1&&(d.$$scope={dirty:p,ctx:l}),u.$set(d)},i(l){m||(x(e.$$.fragment,l),x(n.$$.fragment,l),x(u.$$.fragment,l),m=!0)},o(l){b(e.$$.fragment,l),b(n.$$.fragment,l),b(u.$$.fragment,l),m=!1},d(l){l&&(i(s),i(o)),M(e,l),M(n,l),M(u,l)}}}function gt(f){let e,s="Dynamic Views",n,o,u="A POC to demonstrate a micro-frontend architecture",m,l,p,r,_,d,Z="What is this Demo?",C,j,ee,te,se,le,ie,K,Ae="Architecture",ne,q,Ie="The host app defines how a plugin looks like.<br/>",ae,k,Pe=`Currently it needs to be an esmodule and its default export has to be
	an <code>init()</code> function. <br/>
	The plugins can use <code>div[id=&quot;view-root&quot;]</code> as their root element.
	Every time we navigate to a new view we clear this element and load the defined
	plugin and execute its <code>init()</code> function.
	The plugins can use any technology until they can attache themselves to the
	the <code>div[id=&quot;view-root&quot;]</code> element.`,ue,A,Re=`The plugins are cached so in case the plugin&#39;s host is offline we still 
	can use the last version we loaded. <br/>`,oe,N,Ee="Example",re,I,ze="In this demo we have two views:",fe,P,me,R,Be=`We persist a few users in the local storage and we use them as our employees
	to show that different plugins can have access to the same data source and 
	that they are really part of the same website.`,ce,E,Ge,pe,z,De=`If you navigate to the <code>/employees</code> through the menu or through the url
	the host will fetch the the employee plugin and execute its <code>init()</code> function`,_e,B,Se,$e,G,Ue=`If you navigate to the <code>/admins</code> through the menu or through the url
	the host will fetch the the admin plugin and execute its <code>init()</code> function`,he,D,We,de,ve,we,X,Fe="Links",ge,S,Ce,U,Je="",ye;return j=new Te({props:{$$slots:{default:[ct]},$$scope:{ctx:f}}}),P=new Te({props:{$$slots:{default:[$t]},$$scope:{ctx:f}}}),S=new Te({props:{$$slots:{default:[wt]},$$scope:{ctx:f}}}),{c(){e=v("h1"),e.textContent=s,n=$(),o=v("q"),o.textContent=u,m=$(),l=v("br"),p=$(),r=v("br"),_=$(),d=v("h2"),d.textContent=Z,C=$(),H(j.$$.fragment),ee=$(),te=v("br"),se=$(),le=v("br"),ie=$(),K=v("h2"),K.textContent=Ae,ne=$(),q=v("p"),q.innerHTML=Ie,ae=$(),k=v("p"),k.innerHTML=Pe,ue=$(),A=v("p"),A.innerHTML=Re,oe=$(),N=v("h2"),N.textContent=Ee,re=$(),I=v("p"),I.textContent=ze,fe=$(),H(P.$$.fragment),me=$(),R=v("p"),R.textContent=Be,ce=$(),E=v("img"),pe=$(),z=v("p"),z.innerHTML=De,_e=$(),B=v("img"),$e=$(),G=v("p"),G.innerHTML=Ue,he=$(),D=v("img"),de=$(),ve=v("hr"),we=$(),X=v("h2"),X.textContent=Fe,ge=$(),H(S.$$.fragment),Ce=$(),U=v("p"),U.innerHTML=Je,this.h()},l(t){e=w(t,"H1",{"data-svelte-h":!0}),y(e)!=="svelte-mof38v"&&(e.textContent=s),n=h(t),o=w(t,"Q",{"data-svelte-h":!0}),y(o)!=="svelte-awlfbj"&&(o.textContent=u),m=h(t),l=w(t,"BR",{}),p=h(t),r=w(t,"BR",{}),_=h(t),d=w(t,"H2",{"data-svelte-h":!0}),y(d)!=="svelte-1vkef90"&&(d.textContent=Z),C=h(t),L(j.$$.fragment,t),ee=h(t),te=w(t,"BR",{}),se=h(t),le=w(t,"BR",{}),ie=h(t),K=w(t,"H2",{"data-svelte-h":!0}),y(K)!=="svelte-1s9yvrp"&&(K.textContent=Ae),ne=h(t),q=w(t,"P",{class:!0,"data-svelte-h":!0}),y(q)!=="svelte-9ffe0q"&&(q.innerHTML=Ie),ae=h(t),k=w(t,"P",{class:!0,"data-svelte-h":!0}),y(k)!=="svelte-3by4uu"&&(k.innerHTML=Pe),ue=h(t),A=w(t,"P",{class:!0,"data-svelte-h":!0}),y(A)!=="svelte-140c1g4"&&(A.innerHTML=Re),oe=h(t),N=w(t,"H2",{"data-svelte-h":!0}),y(N)!=="svelte-1jcu5zc"&&(N.textContent=Ee),re=h(t),I=w(t,"P",{class:!0,"data-svelte-h":!0}),y(I)!=="svelte-gqlzqk"&&(I.textContent=ze),fe=h(t),L(P.$$.fragment,t),me=h(t),R=w(t,"P",{class:!0,"data-svelte-h":!0}),y(R)!=="svelte-1e4tuet"&&(R.textContent=Be),ce=h(t),E=w(t,"IMG",{src:!0,alt:!0,width:!0}),pe=h(t),z=w(t,"P",{class:!0,"data-svelte-h":!0}),y(z)!=="svelte-1gl58ct"&&(z.innerHTML=De),_e=h(t),B=w(t,"IMG",{src:!0,alt:!0,width:!0}),$e=h(t),G=w(t,"P",{class:!0,"data-svelte-h":!0}),y(G)!=="svelte-1mod1ij"&&(G.innerHTML=Ue),he=h(t),D=w(t,"IMG",{src:!0,alt:!0,width:!0}),de=h(t),ve=w(t,"HR",{}),we=h(t),X=w(t,"H2",{"data-svelte-h":!0}),y(X)!=="svelte-fnq65"&&(X.textContent=Fe),ge=h(t),L(S.$$.fragment,t),Ce=h(t),U=w(t,"P",{class:!0,"data-svelte-h":!0}),y(U)!=="svelte-9hyf74"&&(U.innerHTML=Je),this.h()},h(){g(q,"class","svelte-wyijvh"),g(k,"class","svelte-wyijvh"),g(A,"class","svelte-wyijvh"),g(I,"class","svelte-wyijvh"),g(R,"class","svelte-wyijvh"),He(E.src,Ge=`${Le}/architecture.svg`)||g(E,"src",Ge),g(E,"alt","architecture"),g(E,"width","50%"),g(z,"class","svelte-wyijvh"),He(B.src,Se=`${Le}/nav_1.svg`)||g(B,"src",Se),g(B,"alt","architecture"),g(B,"width","50%"),g(G,"class","svelte-wyijvh"),He(D.src,We=`${Le}/nav_2.svg`)||g(D,"src",We),g(D,"alt","architecture"),g(D,"width","50%"),g(U,"class","svelte-wyijvh")},m(t,c){a(t,e,c),a(t,n,c),a(t,o,c),a(t,m,c),a(t,l,c),a(t,p,c),a(t,r,c),a(t,_,c),a(t,d,c),a(t,C,c),T(j,t,c),a(t,ee,c),a(t,te,c),a(t,se,c),a(t,le,c),a(t,ie,c),a(t,K,c),a(t,ne,c),a(t,q,c),a(t,ae,c),a(t,k,c),a(t,ue,c),a(t,A,c),a(t,oe,c),a(t,N,c),a(t,re,c),a(t,I,c),a(t,fe,c),T(P,t,c),a(t,me,c),a(t,R,c),a(t,ce,c),a(t,E,c),a(t,pe,c),a(t,z,c),a(t,_e,c),a(t,B,c),a(t,$e,c),a(t,G,c),a(t,he,c),a(t,D,c),a(t,de,c),a(t,ve,c),a(t,we,c),a(t,X,c),a(t,ge,c),T(S,t,c),a(t,Ce,c),a(t,U,c),ye=!0},p(t,[c]){const Oe={};c&1&&(Oe.$$scope={dirty:c,ctx:t}),j.$set(Oe);const Qe={};c&1&&(Qe.$$scope={dirty:c,ctx:t}),P.$set(Qe);const Ve={};c&1&&(Ve.$$scope={dirty:c,ctx:t}),S.$set(Ve)},i(t){ye||(x(j.$$.fragment,t),x(P.$$.fragment,t),x(S.$$.fragment,t),ye=!0)},o(t){b(j.$$.fragment,t),b(P.$$.fragment,t),b(S.$$.fragment,t),ye=!1},d(t){t&&(i(e),i(n),i(o),i(m),i(l),i(p),i(r),i(_),i(d),i(C),i(ee),i(te),i(se),i(le),i(ie),i(K),i(ne),i(q),i(ae),i(k),i(ue),i(A),i(oe),i(N),i(re),i(I),i(fe),i(me),i(R),i(ce),i(E),i(pe),i(z),i(_e),i(B),i($e),i(G),i(he),i(D),i(de),i(ve),i(we),i(X),i(ge),i(Ce),i(U)),M(j,t),M(P,t),M(S,t)}}}class Ht extends qe{constructor(e){super(),ke(this,e,null,gt,Me,{})}}export{Ht as component};