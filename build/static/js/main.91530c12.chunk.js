(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(13),c=t.n(r),u=(t(19),t(2)),l=t(3),i=t.n(l),s="/api/persons",m=function(){return i.a.get(s).then((function(e){return e.data}))},f=function(e){return i.a.post(s,e).then((function(e){return e.data}))},d=function(e){return i.a.delete(s+"/".concat(e.id)).then((function(e){return e.data}))},h=function(e){var n=e.onClick,t=e.person,a=e.text,r=e.persons;return o.a.createElement("button",{onClick:function(){return n(t,r)}},a)},b=function(e){var n=e.persons,t=e.handleDeleButton;return n.map((function(e){return o.a.createElement("p",{key:e.id},e.name+" "+e.number,o.a.createElement(h,{onClick:t,person:e,persons:n,text:"Delete"}))}))},p=function(e){var n=e.addPerson,t=Object(a.useState)("Add a name..."),r=Object(u.a)(t,2),c=r[0],l=r[1],i=Object(a.useState)("Add phone number..."),s=Object(u.a)(i,2),m=s[0],f=s[1];return o.a.createElement("form",{onSubmit:function(e){return n(e,c,m)}},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:c,onChange:function(e){l(e.target.value)}})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:m,onChange:function(e){f(e.target.value)}})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},v=function(e){var n=e.onFilterChange,t=e.persons,r=Object(a.useState)(""),c=Object(u.a)(r,2),l=c[0],i=c[1];return o.a.createElement("form",null,o.a.createElement("div",null,"filter shown with: ",o.a.createElement("input",{value:l,onChange:function(e){if(i(e.target.value),""===e.target.value)console.log("empty search field"),n(t);else{console.log(t);var a=t.filter((function(e){return e.name.toLocaleLowerCase().includes(l.toLocaleLowerCase())}));console.log("new filter PASSED",a),n(t.filter((function(n){return n.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())})))}}})))},E=function(e){var n=e.message,t=e.style;return null===n?null:o.a.createElement("div",{className:t},n)},w=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(t),l=Object(u.a)(c,2),i=l[0],s=l[1],h=Object(a.useState)(null),w=Object(u.a)(h,2),g=w[0],j=w[1],O=Object(a.useState)("success"),k=Object(u.a)(O,2),C=k[0],S=k[1];Object(a.useEffect)((function(){m().then((function(e){r(e),s(e)}))}),[]);return o.a.createElement("div",null,o.a.createElement("h1",null,"Phonebook"),o.a.createElement(E,{message:g,style:C}),o.a.createElement(v,{persons:t,onFilterChange:s}),o.a.createElement("h3",null,"add a new person"),o.a.createElement(p,{addPerson:function(e,n,a){e.preventDefault();var o={name:n,number:a};f(o).then((function(e){r(t.concat(e)),s(t.concat(e))})),j("Added ".concat(o.name," to phone book")),S("success"),setTimeout((function(){j(null)}),5e3)}}),o.a.createElement("h3",null,"Numbers"),o.a.createElement(b,{persons:i,handleDeleButton:function(e){console.log("Deleting item with id",e.id),window.confirm("Delete ".concat(e.name,"?"))&&(d(e).then((function(n){return r((function(n){r(n.filter((function(n){return n.id!==e.id}))),s(n.filter((function(n){return n.id!==e.id})))}))})).catch((function(n){j("".concat(e.name," has already been removed from server")),S("fail"),setTimeout((function(){j(null)}),5e3),r(t.filter((function(n){return n.id!==e.id}))),s(t.filter((function(n){return n.id!==e.id})))})),j("".concat(e.name," has been removed from phonebook")),setTimeout((function(){j(null)}),5e3))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.91530c12.chunk.js.map