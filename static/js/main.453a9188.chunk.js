(this.webpackJsonpdirectory=this.webpackJsonpdirectory||[]).push([[0],{149:function(e,t,n){},176:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(46),l=n.n(c),s=(n(149),n(73)),i=n(123),o=n(124),u=n(131),d=n(129),j=n(192),h=n(189),b=n(188),O=n(7);var m=function(e){return Object(O.jsxs)(j.a,{children:[Object(O.jsx)(h.a,{children:Object(O.jsx)(h.a.Group,{children:Object(O.jsx)(h.a.Input,{label:"Search Employee",value:e.value,name:"search",type:"text",placeholder:"Search by first name",id:"search",onChange:e.handleInputChange})})}),Object(O.jsx)(b.a,{horizontal:!0,fitted:!0})]})};var p=function(){return Object(O.jsxs)(j.a,{inverted:!0,color:"blue",children:[Object(O.jsxs)("h1",{children:[Object(O.jsx)("i",{className:"fa fa-address-book-o","aria-hidden":"true"})," EMPLOYEE DIRECTORY"]}),Object(O.jsx)("p",{children:" Click on the header columns to sort or use the search field to filter by first name."})]})},f=n(130),x=n(105),C=n(190),v=n(128),g=n(103),y=n.n(g);function E(e,t){switch(t.type){case"CHANGE_SORT":return e.column===t.column?Object(x.a)(Object(x.a)({},e),{},{data:e.data.slice().reverse(),direction:"ascending"===e.direction?"descending":"ascending"}):{column:t.column,data:y.a.sortBy(e.data.result,[t.column]),direction:"ascending"};default:throw new Error}}var S=function(e){var t=a.a.useReducer(E,{column:null,data:e.results,direction:null}),n=Object(f.a)(t,2),r=n[0],c=n[1],l=r.column,s=r.data,i=r.direction;return console.log(s),Object(O.jsxs)(C.a,{color:"blue",sortable:!0,striped:!0,fixed:!0,children:[Object(O.jsx)(C.a.Header,{children:Object(O.jsxs)(C.a.Row,{children:[Object(O.jsx)(C.a.HeaderCell,{children:"Image"}),Object(O.jsx)(C.a.HeaderCell,{sorted:"name"===l?i:null,onClick:function(){return c({type:"CHANGE_SORT",column:"name"})},children:"Name"}),Object(O.jsx)(C.a.HeaderCell,{sorted:"phone"===l?i:null,onClick:function(){return c({type:"CHANGE_SORT",column:"phone"})},children:"Phone"}),Object(O.jsx)(C.a.HeaderCell,{sorted:"email"===l?i:null,onClick:function(){return c({type:"CHANGE_SORT",column:"email"})},children:"Email"}),Object(O.jsx)(C.a.HeaderCell,{sorted:"age"===l?i:null,onClick:function(){return c({type:"CHANGE_SORT",column:"age"})},children:"Date of Birth"})]})}),Object(O.jsx)(C.a.Body,{children:e.results.map((function(e,t){var n=new Date(e.dob.date).toLocaleString().split(",")[0];return console.log(e),Object(O.jsxs)(C.a.Row,{index:t,children:[Object(O.jsx)(C.a.Cell,{children:Object(O.jsx)(v.a,{src:e.picture.thumbnail,rounded:!0})}),Object(O.jsx)(C.a.Cell,{children:e.name.first+" "+e.name.last}),Object(O.jsx)(C.a.Cell,{children:e.phone}),Object(O.jsx)(C.a.Cell,{children:e.email}),Object(O.jsx)(C.a.Cell,{children:n})]},e.email)}))})]})},k=n(127),w=n.n(k),H=function(){return w.a.get("https://randomuser.me/api/?results=20&inc=picture,name,phone,email,dob")},R=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={results:[],search:""},e.handleInputChange=function(t){var n=t.target.value,r=t.target.name;e.setState(Object(s.a)({},r,n));var a=e.state.results.filter((function(t){return t.name.first.toLowerCase().includes(e.state.search.toLowerCase())}));e.setState({results:a})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;H().then((function(t){return e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e;return Object(O.jsxs)("div",{children:[Object(O.jsx)(p,{}),Object(O.jsx)(m,{value:this.state.search,handleInputChange:this.handleInputChange}),(null===(e=this.state.results)||void 0===e?void 0:e.length)?Object(O.jsx)(S,{results:this.state.results}):Object(O.jsx)("h1",{children:"Loading..."})]})}}]),n}(r.Component);var I=function(){return Object(O.jsx)(R,{})};n(175);l.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root"))}},[[176,1,2]]]);
//# sourceMappingURL=main.453a9188.chunk.js.map