(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{28:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),o=a(6),m=(a(33),a(1)),s=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg bg-light justify-content-center"},r.a.createElement("ul",{className:"nav justify-content-center"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/",className:"nav-link text-UC"},"home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/people",className:"nav-link text-UC"},"people"))))},u=a(15),i=a(9),d=a(8),p=a.n(d),b=function(e){var t=e.person,a=Object(m.h)().search;if(!t)return r.a.createElement(r.a.Fragment,null);var n=t.name,c=t.sex,l=t.slug;return r.a.createElement(o.b,{to:"/people/".concat(l).concat(a),className:p()("normal-link",{"text-primary":"m"===c,"text-danger":"f"===c})},n)},E=function(e){var t=e.person,a=e.people,n=e.slug,c=t.sex,l=t.born,o=t.died,m=t.fatherName,s=t.motherName,u=t.slug,i=function(e){return a.find((function(t){return t.name===e}))};return r.a.createElement("tr",{className:n===u?"selected":""},r.a.createElement("td",{className:"male"},r.a.createElement(b,{person:t})),r.a.createElement("td",null,"m"===c?"male":"female"),r.a.createElement("td",null,l),r.a.createElement("td",null,o),r.a.createElement("td",null,i(s)?r.a.createElement(b,{person:i(s)}):r.a.createElement(r.a.Fragment,null," ",s," ")),r.a.createElement("td",null,i(m)?r.a.createElement(b,{person:i(m)}):r.a.createElement(r.a.Fragment,null," ",m," ")))},f=["name","sex","born","died"],h=/^[a-zA-Z\s]*$/,g=(new Date).getFullYear(),v=function(e,t,a){return e.filter((function(e){return e.sex===t&&e.born<a&&e.died>a}))},N=function(e){var t=e.header,a=Object(m.g)(),n=Object(m.h)(),c=new URLSearchParams(n.search),l=c.get("sortBy")||"",o=c.get("sortOrder")||"";return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"cust-btn",onClick:function(){return l!==(e=t)||"desc"===o?(c.set("sortBy","".concat(e)),c.set("sortOrder","asc")):c.set("sortOrder","desc"),void a.push({search:c.toString()});var e}},t.toUpperCase(),t!==l?r.a.createElement("span",null,r.a.createElement("img",{src:"images/sort_both.png",alt:"not_sorted"})):r.a.createElement("span",null,"*","asc"===o?r.a.createElement("img",{src:"images/sort_asc.png",alt:"sorted_asc"}):r.a.createElement("img",{src:"images/sort_desc.png",alt:"sorted_desc"}))))},j=function(e){var t=e.people,a=Object(m.i)().slug;return r.a.createElement("div",null,!!t.length&&r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,f.map((function(e){return r.a.createElement("th",{key:e},r.a.createElement(N,{header:e,filteredPeople:t}))})),r.a.createElement("th",null,"MOTHER"),r.a.createElement("th",null,"FATHER"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(E,{slug:a,people:t,person:e,key:e.slug})})))))},O=a(14),y=a(7),x=function(e){var t=e.people,a=e.setPeople,c=e.setIsFormRequired,l=Object(n.useState)({name:"",sex:"",born:0,died:0,fatherName:"",motherName:"",slug:""}),o=Object(i.a)(l,2),m=o[0],s=o[1],d=Object(n.useState)({name:!1,sex:!1,born:!1,died:!1}),b=Object(i.a)(d,2),E=b[0],f=b[1],N=Object(n.useMemo)((function(){return!Object.values(E).some(Boolean)}),[E]),j=Object(n.useMemo)((function(){return v(t,"m",+m.born)}),[t,m.born]),x=Object(n.useMemo)((function(){return v(t,"f",+m.born)}),[t,m.born]),k=Object(n.useCallback)((function(){var e=m.name.toLowerCase().split(" ").join("-")+"-".concat(m.born);s((function(t){return Object(y.a)(Object(y.a)({},t),{},{slug:e})}))}),[m.name,m.born]),C=Object(n.useCallback)((function(e){return!(m.died&&+m.died<+m.born)&&(+m[e]>=1400&&+m[e]<=g)}),[m]),w=Object(n.useMemo)((function(){return!!(C("born")&&C("died")&&+m.died-+m.born<=150)}),[C,m.born,m.died]),F=function(){var e=m.name.trim().length>0&&h.test(m.name);f((function(t){return Object(y.a)(Object(y.a)({},t),{},{name:!e})}))},S=function(){var e=m.sex;f((function(t){return Object(y.a)(Object(y.a)({},t),{},{sex:!e})}))},B=function(){f((function(e){return Object(y.a)(Object(y.a)({},e),{},{born:!C("born"),died:!C("died")})}))},P=function(e){var t=e.target,a=t.name,n=t.value;s((function(e){return Object(y.a)(Object(y.a)({},e),{},Object(O.a)({},a,n))})),k()};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form-floating sticky-top display-fluid",onSubmit:function(e){e.preventDefault(),N&&w?(a([].concat(Object(u.a)(t),[m])),s({name:"",sex:"",born:0,died:0,motherName:"",fatherName:"",slug:""}),c(!1),c(!1)):(F(),S(),B())}},r.a.createElement("h3",{className:"display-4 text-center"},"New Person Form"),r.a.createElement("input",{type:"text",name:"name",className:p()("form-control mb-3",{borderError:E.name}),placeholder:"Enter name",value:m.name,onChange:P,onBlur:F}),E.name&&r.a.createElement("p",{className:"text-danger"},"Name should have valid characters only"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend-inline width30 "},r.a.createElement("span",{className:"input-group-text"},"Select gender")),r.a.createElement("div",{className:p()("wrapper input-group-inline",{borderError:E.sex})},r.a.createElement("div",{className:"custom-control-inline custom-radio"},r.a.createElement("div",{className:"form-check input-group radio "},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"sex",value:"m",checked:"m"===m.sex,onChange:P,onBlur:S}),"Male")),r.a.createElement("div",{className:"custom-control-inline custom-radio"},r.a.createElement("div",{className:"form-check radio"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"sex",value:"f",checked:"f"===m.sex,onChange:P,onBlur:S}),"Female")),r.a.createElement("div",{className:"custom-control-inline custom-radio"},r.a.createElement("div",{className:"form-check radio"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"sex",disabled:!0}),"Xenomorph")))),E.sex&&r.a.createElement("p",{className:"text-danger"},"Gender is required"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Year of born")),r.a.createElement("input",{type:"number",name:"born",className:p()("form-control",{borderError:E.born}),placeholder:"Should be over 1400",value:0===m.born?"":m.born,onChange:P,onBlur:B})),(E.born||E.died)&&r.a.createElement("p",{className:"text-danger"},"Years of born & death should be in range from 1400 to ".concat(g)),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Year of death")),r.a.createElement("input",{type:"number",name:"died",className:p()("form-control",{borderError:E.died}),placeholder:"Should be less then ".concat(g),disabled:!m.born,value:0===m.died?"":m.died,onChange:P,onBlur:B})),!w&&r.a.createElement("p",{className:"text-danger"},"Difference between death and born years should not be more then 150"),r.a.createElement("select",{value:m.motherName,onChange:P,className:"form-control form-select-fluid mb-3",name:"motherName",disabled:!C("born")},r.a.createElement("option",{value:""},"Choose Mother"),+m.born>=1400&&x.map((function(e){return r.a.createElement("option",{value:e.name,key:e.name},e.name)}))),r.a.createElement("select",{value:m.fatherName,onChange:P,className:"form-control form-select-fluid mb-3",name:"fatherName",disabled:!C("born")},r.a.createElement("option",{value:""},"Choose Father"),+m.born>=1400&&j.map((function(e){return r.a.createElement("option",{value:e.name,key:e.name},e.name)}))),r.a.createElement("div",{className:"d-grid gap-2 col-4 mx-auto"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add new person"))))},k=a(19),C=a.n(k),w=a(26),F=function(){var e=Object(w.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){var t=e.query,a=e.handleQueryChange;return r.a.createElement("div",{className:"input-group input-group-lg"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Find person")),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Please enter name",value:t,onChange:function(e){var t=e.target;return a(t.value)}}))},B=a(27),P=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(i.a)(l,2),s=o[0],d=o[1],p=Object(m.g)(),b=Object(m.h)(),E=new URLSearchParams(b.search),f=E.get("query")||"",h=Object(n.useState)(f),g=Object(i.a)(h,2),v=g[0],N=g[1],O=E.get("sortBy")||"",y=E.get("sortOrder")||"";Object(n.useEffect)((function(){F().then(c)}),[]);var k=Object(n.useCallback)(Object(B.debounce)((function(e){e?E.set("query",e):E.delete("query"),p.push("?".concat(E.toString()))}),1e3),[]),C=Object(n.useMemo)((function(){var e=Object(u.a)(a);if(f){var t=v.toLowerCase().trim();e=a.filter((function(e){return(e.name+e.motherName+e.fatherName).toLowerCase().includes(t)}))}if(y)switch(O){case"name":case"sex":e.sort((function(e,t){return"asc"===y?e[O].localeCompare(t[O]):t[O].localeCompare(e[O])}));break;case"born":case"died":e.sort((function(e,t){return"asc"===y?e[O]-t[O]:t[O]-e[O]}))}return e}),[f,a,v,O,y]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-3"},"People table"),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement(j,{people:C})),r.a.createElement("div",{className:"col-4"},r.a.createElement(S,{handleQueryChange:function(e){N(e),k(e)},query:v}),s?r.a.createElement(x,{people:a,setIsFormRequired:d,setPeople:c}):r.a.createElement("div",{className:"d-grid gap-2 col-4 mx-auto sticky-top"},r.a.createElement("button",{className:"btn btn-primary isButton",type:"button",onClick:function(){return d(!0)}},"Add new person"))))))},_=function(){return r.a.createElement("h1",{className:"display-3"},"Home Page")},q=function(){return r.a.createElement("h1",{className:"display-3 text-danger"},"Page not found")},M=(a(40),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(s,null)),r.a.createElement("div",{className:"App"},r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/people/:slug?",component:P}),r.a.createElement(m.b,{exact:!0,path:"/",component:_}),r.a.createElement(m.a,{path:"/home",to:"/"}),r.a.createElement(q,null))))});l.a.render(r.a.createElement(o.a,null,r.a.createElement(M,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.ec0bb41a.chunk.js.map