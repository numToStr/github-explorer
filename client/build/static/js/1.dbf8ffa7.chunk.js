webpackJsonp([1],{835:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),c=n.n(i),u=n(837),l=n(842),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement(l.a,null))}}]),t}(i.Component);t.default=f},837:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(154),i=function(e){e.palette.primary;return{form:{marginTop:"5rem"}}},c=function(e){var t=e.children,n=e.classes.form;return o.a.createElement(a.e,{container:!0,justify:"center"},o.a.createElement(a.e,{item:!0,xs:9,sm:5,md:3,classes:{item:n}},t))};t.a=Object(a.k)(i)(c)},838:function(e,t,n){"use strict";var r=function(e){var t={};return e.name?e.name.length>15&&(t.name="Must be 15 characters or less"):t.name="Required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<6&&(t.password="Must be 6 characters or more"):t.password="Required",t};t.a=r},839:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}n.d(t,"c",function(){return c}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return l});var o=n(1),a=n.n(o),i=n(154),c=function(e){var t=e.input,n=e.meta,o=n.error,c=n.touched,u=r(e,["input","meta"]);return a.a.createElement(i.h,Object.assign({},t,u,{margin:"normal",error:!(!c||!o),helperText:c&&o?o:null,InputLabelProps:{shrink:!0},fullWidth:!0}))},u=function(e){var t=e.error,n=e.props;return t?a.a.createElement(i.g,Object.assign({square:!0},n,{elevation:0}),a.a.createElement(i.i,{variant:"caption",color:"inherit",align:"center"},t)):null},l=function(e){var t=e.loading,n=e.pristine;return a.a.createElement(i.d,{margin:"normal",fullWidth:!0},a.a.createElement(i.a,{variant:"raised",type:"Submit",color:"primary",disabled:n||t},t?a.a.createElement(i.b,{size:20,thickness:4}):"Login"))}},842:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),c=n.n(i),u=n(30),l=n(843),s=n(275),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){var e,n,a,i;r(this,t);for(var c=arguments.length,u=Array(c),l=0;l<c;l++)u[l]=arguments[l];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),a.onLogin=function(e){(0,a.props.userLogin)(e,function(){console.log("[Redirect]")})},i=n,o(a,i)}return a(t,e),f(t,[{key:"render",value:function(){var e=this.onLogin;return c.a.createElement(l.a,{onSubmit:e})}}]),t}(i.Component),m=function(e){return{userLogin:function(t,n){return e(Object(s.b)(t,n))}}};t.a=Object(u.b)(null,m)(p)},843:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),c=n.n(i),u=n(154),l=n(274),s=n(838),f=n(839),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e){var t=e.palette.error;return{errorPaper:{background:t.main,color:t.contrastText,padding:".5rem 0",marginBottom:".5rem"}}},b=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.loading,r=e.handleSubmit,o=e.pristine,a=e.formError;return c.a.createElement(i.Fragment,null,c.a.createElement(f.a,{error:a,classes:{root:t.errorPaper}}),c.a.createElement(l.b,{onSubmit:r,noValidate:!0},c.a.createElement(l.a,{name:"email",label:"Email",placeholder:"johndoe@email.com",type:"email",component:f.c}),c.a.createElement(l.a,{name:"password",label:"Password",placeholder:"It should be correct",type:"password",component:f.c}),c.a.createElement(f.b,{loading:n,pristine:o})))}}]),t}(i.Component);b=Object(l.d)({form:"login",validate:s.a})(b),t.a=Object(u.k)(m)(b)}});
//# sourceMappingURL=1.dbf8ffa7.chunk.js.map