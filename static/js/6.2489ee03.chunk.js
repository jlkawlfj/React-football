(this["webpackJsonpfootball-react"]=this["webpackJsonpfootball-react"]||[]).push([[6],{124:function(e,a,t){"use strict";var r=t(0),i=t.n(r).a.createContext({controlId:void 0});a.a=i},125:function(e,a,t){"use strict";var r=t(1),i=t(2),s=t(6),l=t.n(s),o=t(0),c=t.n(o),n=t(22),d=t.n(n),m={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},b=c.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,o=e.className,n=e.type,d=void 0===n?"valid":n,m=e.tooltip,b=void 0!==m&&m,f=Object(i.a)(e,["as","className","type","tooltip"]);return c.a.createElement(s,Object(r.a)({},f,{ref:a,className:l()(o,d+"-"+(b?"tooltip":"feedback"))}))}));b.displayName="Feedback",b.propTypes=m,a.a=b},128:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(51);function i(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,i=!1,s=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(t.push(l.value),!a||t.length!==a);r=!0);}catch(c){i=!0,s=c}finally{try{r||null==o.return||o.return()}finally{if(i)throw s}}return t}}(e,a)||Object(r.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},129:function(e,a,t){"use strict";var r=t(1),i=t(2),s=t(6),l=t.n(s),o=(t(71),t(0)),c=t.n(o),n=(t(72),t(125)),d=t(124),m=t(8),b=c.a.forwardRef((function(e,a){var t,s,n=e.bsPrefix,b=e.bsCustomPrefix,f=e.type,u=e.size,v=e.htmlSize,p=e.id,O=e.className,j=e.isValid,y=void 0!==j&&j,x=e.isInvalid,N=void 0!==x&&x,h=e.plaintext,P=e.readOnly,I=e.custom,C=e.as,E=void 0===C?"input":C,w=Object(i.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),k=Object(o.useContext)(d.a).controlId,F=I?[b,"custom"]:[n,"form-control"],g=F[0],R=F[1];if(n=Object(m.a)(g,R),h)(s={})[n+"-plaintext"]=!0,t=s;else if("file"===f){var S;(S={})[n+"-file"]=!0,t=S}else if("range"===f){var z;(z={})[n+"-range"]=!0,t=z}else if("select"===E&&I){var V;(V={})[n+"-select"]=!0,V[n+"-select-"+u]=u,t=V}else{var L;(L={})[n]=!0,L[n+"-"+u]=u,t=L}return c.a.createElement(E,Object(r.a)({},w,{type:f,size:v,ref:a,readOnly:P,id:p||k,className:l()(O,t,y&&"is-valid",N&&"is-invalid")}))}));b.displayName="FormControl",a.a=Object.assign(b,{Feedback:n.a})},133:function(e,a,t){"use strict";var r=t(1),i=t(2),s=t(6),l=t.n(s),o=t(0),c=t.n(o),n=(t(71),t(125)),d=t(124),m=t(8),b=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,n=e.bsCustomPrefix,b=e.className,f=e.type,u=void 0===f?"checkbox":f,v=e.isValid,p=void 0!==v&&v,O=e.isInvalid,j=void 0!==O&&O,y=e.isStatic,x=e.as,N=void 0===x?"input":x,h=Object(i.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),P=Object(o.useContext)(d.a),I=P.controlId,C=P.custom?[n,"custom-control-input"]:[s,"form-check-input"],E=C[0],w=C[1];return s=Object(m.a)(E,w),c.a.createElement(N,Object(r.a)({},h,{ref:a,type:u,id:t||I,className:l()(b,s,p&&"is-valid",j&&"is-invalid",y&&"position-static")}))}));b.displayName="FormCheckInput";var f=b,u=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,n=e.className,b=e.htmlFor,f=Object(i.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(o.useContext)(d.a),v=u.controlId,p=u.custom?[s,"custom-control-label"]:[t,"form-check-label"],O=p[0],j=p[1];return t=Object(m.a)(O,j),c.a.createElement("label",Object(r.a)({},f,{ref:a,htmlFor:b||v,className:l()(n,t)}))}));u.displayName="FormCheckLabel";var v=u,p=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,b=e.bsCustomPrefix,u=e.inline,p=void 0!==u&&u,O=e.disabled,j=void 0!==O&&O,y=e.isValid,x=void 0!==y&&y,N=e.isInvalid,h=void 0!==N&&N,P=e.feedbackTooltip,I=void 0!==P&&P,C=e.feedback,E=e.className,w=e.style,k=e.title,F=void 0===k?"":k,g=e.type,R=void 0===g?"checkbox":g,S=e.label,z=e.children,V=e.custom,L=e.as,T=void 0===L?"input":L,A=Object(i.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),G="switch"===R||V,K=G?[b,"custom-control"]:[s,"form-check"],M=K[0],B=K[1];s=Object(m.a)(M,B);var H=Object(o.useContext)(d.a).controlId,J=Object(o.useMemo)((function(){return{controlId:t||H,custom:G}}),[H,G,t]),D=G||null!=S&&!1!==S&&!z,q=c.a.createElement(f,Object(r.a)({},A,{type:"switch"===R?"checkbox":R,ref:a,isValid:x,isInvalid:h,isStatic:!D,disabled:j,as:T}));return c.a.createElement(d.a.Provider,{value:J},c.a.createElement("div",{style:w,className:l()(E,s,G&&"custom-"+R,p&&s+"-inline")},z||c.a.createElement(c.a.Fragment,null,q,D&&c.a.createElement(v,{title:F},S),(x||h)&&c.a.createElement(n.a,{type:x?"valid":"invalid",tooltip:I},C))))}));p.displayName="FormCheck",p.Input=f,p.Label=v;var O=p,j=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,n=e.bsCustomPrefix,b=e.className,f=e.isValid,u=e.isInvalid,v=e.lang,p=e.as,O=void 0===p?"input":p,j=Object(i.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),y=Object(o.useContext)(d.a),x=y.controlId,N=y.custom?[n,"custom-file-input"]:[s,"form-control-file"],h=N[0],P=N[1];return s=Object(m.a)(h,P),c.a.createElement(O,Object(r.a)({},j,{ref:a,id:t||x,type:"file",lang:v,className:l()(b,s,f&&"is-valid",u&&"is-invalid")}))}));j.displayName="FormFileInput";var y=j,x=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,n=e.className,b=e.htmlFor,f=Object(i.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),u=Object(o.useContext)(d.a),v=u.controlId,p=u.custom?[s,"custom-file-label"]:[t,"form-file-label"],O=p[0],j=p[1];return t=Object(m.a)(O,j),c.a.createElement("label",Object(r.a)({},f,{ref:a,htmlFor:b||v,className:l()(n,t),"data-browse":f["data-browse"]}))}));x.displayName="FormFileLabel";var N=x,h=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,b=e.bsCustomPrefix,f=e.disabled,u=void 0!==f&&f,v=e.isValid,p=void 0!==v&&v,O=e.isInvalid,j=void 0!==O&&O,x=e.feedbackTooltip,h=void 0!==x&&x,P=e.feedback,I=e.className,C=e.style,E=e.label,w=e.children,k=e.custom,F=e.lang,g=e["data-browse"],R=e.as,S=void 0===R?"div":R,z=e.inputAs,V=void 0===z?"input":z,L=Object(i.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),T=k?[b,"custom"]:[s,"form-file"],A=T[0],G=T[1];s=Object(m.a)(A,G);var K=Object(o.useContext)(d.a).controlId,M=Object(o.useMemo)((function(){return{controlId:t||K,custom:k}}),[K,k,t]),B=null!=E&&!1!==E&&!w,H=c.a.createElement(y,Object(r.a)({},L,{ref:a,isValid:p,isInvalid:j,disabled:u,as:V,lang:F}));return c.a.createElement(d.a.Provider,{value:M},c.a.createElement(S,{style:C,className:l()(I,s,k&&"custom-file")},w||c.a.createElement(c.a.Fragment,null,k?c.a.createElement(c.a.Fragment,null,H,B&&c.a.createElement(N,{"data-browse":g},E)):c.a.createElement(c.a.Fragment,null,B&&c.a.createElement(N,null,E),H),(p||j)&&c.a.createElement(n.a,{type:p?"valid":"invalid",tooltip:h},P))))}));h.displayName="FormFile",h.Input=y,h.Label=N;var P=h,I=t(129),C=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.children,b=e.controlId,f=e.as,u=void 0===f?"div":f,v=Object(i.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(m.a)(t,"form-group");var p=Object(o.useMemo)((function(){return{controlId:b}}),[b]);return c.a.createElement(d.a.Provider,{value:p},c.a.createElement(u,Object(r.a)({},v,{ref:a,className:l()(s,t)}),n))}));C.displayName="FormGroup";var E=C,w=(t(72),["xl","lg","md","sm","xs"]),k=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.as,n=void 0===o?"div":o,d=Object(i.a)(e,["bsPrefix","className","as"]),b=Object(m.a)(t,"col"),f=[],u=[];return w.forEach((function(e){var a,t,r,i=d[e];if(delete d[e],"object"===typeof i&&null!=i){var s=i.span;a=void 0===s||s,t=i.offset,r=i.order}else a=i;var l="xs"!==e?"-"+e:"";a&&f.push(!0===a?""+b+l:""+b+l+"-"+a),null!=r&&u.push("order"+l+"-"+r),null!=t&&u.push("offset"+l+"-"+t)})),f.length||f.push(b),c.a.createElement(n,Object(r.a)({},d,{ref:a,className:l.a.apply(void 0,[s].concat(f,u))}))}));k.displayName="Col";var F=k,g=c.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,n=e.bsPrefix,b=e.column,f=e.srOnly,u=e.className,v=e.htmlFor,p=Object(i.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),O=Object(o.useContext)(d.a).controlId;n=Object(m.a)(n,"form-label");var j="col-form-label";"string"===typeof b&&(j=j+" "+j+"-"+b);var y=l()(u,n,f&&"sr-only",b&&j);return v=v||O,b?c.a.createElement(F,Object(r.a)({as:"label",className:y,htmlFor:v},p)):c.a.createElement(s,Object(r.a)({ref:a,className:y,htmlFor:v},p))}));g.displayName="FormLabel",g.defaultProps={column:!1,srOnly:!1};var R=g,S=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.as,n=void 0===o?"small":o,d=e.muted,b=Object(i.a)(e,["bsPrefix","className","as","muted"]);return t=Object(m.a)(t,"form-text"),c.a.createElement(n,Object(r.a)({},b,{ref:a,className:l()(s,t,d&&"text-muted")}))}));S.displayName="FormText";var z=S,V=c.a.forwardRef((function(e,a){return c.a.createElement(O,Object(r.a)({},e,{ref:a,type:"switch"}))}));V.displayName="Switch",V.Input=O.Input,V.Label=O.Label;var L=V,T=t(48),A=Object(T.a)("form-row"),G=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.inline,o=e.className,n=e.validated,d=e.as,b=void 0===d?"form":d,f=Object(i.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(m.a)(t,"form"),c.a.createElement(b,Object(r.a)({},f,{ref:a,className:l()(o,n&&"was-validated",s&&t+"-inline")}))}));G.displayName="Form",G.defaultProps={inline:!1},G.Row=A,G.Group=E,G.Control=I.a,G.Check=O,G.File=P,G.Switch=L,G.Label=R,G.Text=z;a.a=G},137:function(e,a,t){"use strict";var r=t(1),i=t(2),s=t(6),l=t.n(s),o=t(0),c=t.n(o),n=t(8),d=t(53),m=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.variant,o=e.size,m=e.active,b=e.className,f=e.block,u=e.type,v=e.as,p=Object(i.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),O=Object(n.a)(t,"btn"),j=l()(b,O,m&&"active",s&&O+"-"+s,f&&O+"-block",o&&O+"-"+o);if(p.href)return c.a.createElement(d.a,Object(r.a)({},p,{as:v,ref:a,className:l()(j,p.disabled&&"disabled")}));a&&(p.ref=a),u?p.type=u:v||(p.type="button");var y=v||"button";return c.a.createElement(y,Object(r.a)({},p,{className:j}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=m},150:function(e,a,t){"use strict";var r=t(1),i=t(2),s=t(6),l=t.n(s),o=t(0),c=t.n(o),n=t(8),d=t(48),m=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:l()(a.className,e)}))}))},b=t(52),f=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.variant,d=e.as,m=void 0===d?"img":d,b=Object(i.a)(e,["bsPrefix","className","variant","as"]),f=Object(n.a)(t,"card-img");return c.a.createElement(m,Object(r.a)({ref:a,className:l()(o?f+"-"+o:f,s)},b))}));f.displayName="CardImg",f.defaultProps={variant:null};var u=f,v=m("h5"),p=m("h6"),O=Object(d.a)("card-body"),j=Object(d.a)("card-title",{Component:v}),y=Object(d.a)("card-subtitle",{Component:p}),x=Object(d.a)("card-link",{Component:"a"}),N=Object(d.a)("card-text",{Component:"p"}),h=Object(d.a)("card-header"),P=Object(d.a)("card-footer"),I=Object(d.a)("card-img-overlay"),C=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,d=e.bg,m=e.text,f=e.border,u=e.body,v=e.children,p=e.as,j=void 0===p?"div":p,y=Object(i.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(n.a)(t,"card"),N=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return c.a.createElement(b.a.Provider,{value:N},c.a.createElement(j,Object(r.a)({ref:a},y,{className:l()(s,x,d&&"bg-"+d,m&&"text-"+m,f&&"border-"+f)}),u?c.a.createElement(O,null,v):v))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=u,C.Title=j,C.Subtitle=y,C.Body=O,C.Link=x,C.Text=N,C.Header=h,C.Footer=P,C.ImgOverlay=I;a.a=C},265:function(e,a,t){"use strict";var r=t(1),i=t(2),s=t(6),l=t.n(s),o=t(0),c=t.n(o),n=(t(72),t(26)),d=t(8),m=t(67),b=t(54),f=t(17),u={variant:void 0,active:!1,disabled:!1},v=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.active,n=e.disabled,m=e.className,u=e.variant,v=e.action,p=e.as,O=e.eventKey,j=e.onClick,y=Object(i.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(d.a)(t,"list-group-item");var x=Object(o.useCallback)((function(e){if(n)return e.preventDefault(),void e.stopPropagation();j&&j(e)}),[n,j]);return n&&void 0===y.tabIndex&&(y.tabIndex=-1,y["aria-disabled"]=!0),c.a.createElement(b.a,Object(r.a)({ref:a},y,{eventKey:Object(f.b)(O,y.href),as:p||(v?y.href?"a":"button":"div"),onClick:x,className:l()(m,t,s&&"active",n&&"disabled",u&&t+"-"+u,v&&t+"-action")}))}));v.defaultProps=u,v.displayName="ListGroupItem";var p=v,O={variant:void 0,horizontal:void 0},j=c.a.forwardRef((function(e,a){var t,s=Object(n.a)(e,{activeKey:"onSelect"}),o=s.className,b=s.bsPrefix,f=s.variant,u=s.horizontal,v=s.as,p=void 0===v?"div":v,O=Object(i.a)(s,["className","bsPrefix","variant","horizontal","as"]),j=Object(d.a)(b,"list-group");return t=u?!0===u?"horizontal":"horizontal-"+u:null,c.a.createElement(m.a,Object(r.a)({ref:a},O,{as:p,className:l()(o,j,f&&j+"-"+f,t&&j+"-"+t)}))}));j.defaultProps=O,j.displayName="ListGroup",j.Item=p;a.a=j}}]);
//# sourceMappingURL=6.2489ee03.chunk.js.map