(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(13),c=t.n(a),u=(t(20),t(14)),i=t(2),l=t(3),s=t.n(l),f="api/persons",m=function(){return s.a.get(f).then((function(e){return e.data}))},d=function(e){return s.a.post(f,e).then((function(e){return e.data}))},p=function(e){return s.a.delete(f+"/".concat(e.id)).then((function(e){return e.data}))},b=function(e,n){return s.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){var n=e.onClick,t=e.person,o=e.text,a=e.persons;return r.a.createElement("button",{onClick:function(){return n(t,a)}},o)},v=function(e){var n=e.persons,t=e.handleDeleButton;return n.map((function(e){return r.a.createElement("p",{key:e.id},e.name+" "+e.number,r.a.createElement(h,{onClick:t,person:e,persons:n,text:"Delete"}))}))},g=function(e){var n=e.addPerson,t=Object(o.useState)("Add a name..."),a=Object(i.a)(t,2),c=a[0],u=a[1],l=Object(o.useState)("Add phone number..."),s=Object(i.a)(l,2),f=s[0],m=s[1];return r.a.createElement("form",{onSubmit:function(e){return n(e,c,f)}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:c,onChange:function(e){u(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:f,onChange:function(e){m(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},w=function(e){var n=e.onFilterChange,t=e.persons,a=Object(o.useState)(""),c=Object(i.a)(a,2),u=c[0],l=c[1];return r.a.createElement("form",null,r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{value:u,onChange:function(e){if(l(e.target.value),""===e.target.value)console.log("empty search field"),n(t);else{console.log(t);var o=t.filter((function(e){return e.name.toLocaleLowerCase().includes(u.toLocaleLowerCase())}));console.log("new filter PASSED",o),n(t.filter((function(n){return n.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())})))}}})))},O=function(e){var n=e.message,t=e.style;return null===n?null:r.a.createElement("div",{className:t},n)};function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}var j=function(){var e=Object(o.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],c=Object(o.useState)(t),l=Object(i.a)(c,2),s=l[0],f=l[1],h=Object(o.useState)(null),j=Object(i.a)(h,2),y=j[0],k=j[1],S=Object(o.useState)("success"),C=Object(i.a)(S,2),P=C[0],D=C[1];Object(o.useEffect)((function(){m().then((function(e){a(e),f(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(O,{message:y,style:P}),r.a.createElement(w,{persons:t,onFilterChange:f}),r.a.createElement("h3",null,"add a new person"),r.a.createElement(g,{addPerson:function(e,n,o){e.preventDefault();var r={name:n,number:o};if(0!==t.filter((function(e){return e.name===n})).length){var c=t.find((function(e){return e.name===n}));console.log(c);var i=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(t,!0).forEach((function(n){Object(u.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},c,{number:o});if(console.log("name EXISTS already"),window.confirm("".concat(c.name," has already been added to phonebook, replace the old number with a new one?"))){console.log("replacing phonenumber of id ".concat(c.id," with ").concat(o));var l=c.id;b(l,i).then((function(e){a(t.map((function(n){return n.id!==l?n:e}))),f(t.map((function(n){return n.id!==l?n:e})))})),k("Updated ".concat(c.name,"'s phone number")),D("success"),setTimeout((function(){k(null)}),5e3)}}else d(r).then((function(e){a(t.concat(e)),f(t.concat(e))})),k("Added ".concat(r.name," to phone book")),D("success"),setTimeout((function(){k(null)}),5e3)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(v,{persons:s,handleDeleButton:function(e){console.log("Deleting item with id",e.id),window.confirm("Delete ".concat(e.name,"?"))&&(p(e).then((function(n){return a((function(n){a(n.filter((function(n){return n.id!==e.id}))),f(n.filter((function(n){return n.id!==e.id})))}))})).catch((function(n){k("".concat(e.name," has already been removed from server")),D("fail"),setTimeout((function(){k(null)}),5e3),a(t.filter((function(n){return n.id!==e.id}))),f(t.filter((function(n){return n.id!==e.id})))})),k("".concat(e.name," has been removed from phonebook")),setTimeout((function(){k(null)}),5e3))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.e3aac7ef.chunk.js.map