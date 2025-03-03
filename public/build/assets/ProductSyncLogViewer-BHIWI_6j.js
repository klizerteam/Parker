import{t as P,r as i,j as He}from"./app-DCMehKZM.js";var G=function(){return G=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},G.apply(this,arguments)};function ft(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var _="-ms-",qe="-moz-",j="-webkit-",Gn="comm",xt="rule",Vt="decl",Zr="@import",Un="@keyframes",Xr="@layer",Vn=Math.abs,Yt=String.fromCharCode,Lt=Object.assign;function Qr(e,t){return z(e,0)^45?(((t<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3):0}function Yn(e){return e.trim()}function pe(e,t){return(e=t.exec(e))?e[0]:e}function E(e,t,n){return e.replace(t,n)}function lt(e,t,n){return e.indexOf(t,n)}function z(e,t){return e.charCodeAt(t)|0}function Le(e,t,n){return e.slice(t,n)}function le(e){return e.length}function Kn(e){return e.length}function Ke(e,t){return t.push(e),e}function Jr(e,t){return e.map(t).join("")}function xn(e,t){return e.filter(function(n){return!pe(n,t)})}var Ct=1,Ne=1,qn=0,te=0,T=0,Ge="";function St(e,t,n,r,o,a,s,c){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:Ct,column:Ne,length:s,return:"",siblings:c}}function ye(e,t){return Lt(St("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Te(e){for(;e.root;)e=ye(e.root,{children:[e]});Ke(e,e.siblings)}function eo(){return T}function to(){return T=te>0?z(Ge,--te):0,Ne--,T===10&&(Ne=1,Ct--),T}function oe(){return T=te<qn?z(Ge,te++):0,Ne++,T===10&&(Ne=1,Ct++),T}function Oe(){return z(Ge,te)}function ct(){return te}function vt(e,t){return Le(Ge,e,t)}function Nt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function no(e){return Ct=Ne=1,qn=le(Ge=e),te=0,[]}function ro(e){return Ge="",e}function At(e){return Yn(vt(te-1,Mt(e===91?e+2:e===40?e+1:e)))}function oo(e){for(;(T=Oe())&&T<33;)oe();return Nt(e)>2||Nt(T)>3?"":" "}function ao(e,t){for(;--t&&oe()&&!(T<48||T>102||T>57&&T<65||T>70&&T<97););return vt(e,ct()+(t<6&&Oe()==32&&oe()==32))}function Mt(e){for(;oe();)switch(T){case e:return te;case 34:case 39:e!==34&&e!==39&&Mt(T);break;case 40:e===41&&Mt(e);break;case 92:oe();break}return te}function so(e,t){for(;oe()&&e+T!==57;)if(e+T===84&&Oe()===47)break;return"/*"+vt(t,te-1)+"*"+Yt(e===47?e:oe())}function io(e){for(;!Nt(Oe());)oe();return vt(e,te)}function lo(e){return ro(dt("",null,null,null,[""],e=no(e),0,[0],e))}function dt(e,t,n,r,o,a,s,c,d){for(var h=0,u=0,g=s,y=0,f=0,x=0,R=1,O=1,$=1,S=0,m="",C=o,D=a,v=r,p=m;O;)switch(x=S,S=oe()){case 40:if(x!=108&&z(p,g-1)==58){lt(p+=E(At(S),"&","&\f"),"&\f",Vn(h?c[h-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:p+=At(S);break;case 9:case 10:case 13:case 32:p+=oo(x);break;case 92:p+=ao(ct()-1,7);continue;case 47:switch(Oe()){case 42:case 47:Ke(co(so(oe(),ct()),t,n,d),d);break;default:p+="/"}break;case 123*R:c[h++]=le(p)*$;case 125*R:case 59:case 0:switch(S){case 0:case 125:O=0;case 59+u:$==-1&&(p=E(p,/\f/g,"")),f>0&&le(p)-g&&Ke(f>32?Sn(p+";",r,n,g-1,d):Sn(E(p," ","")+";",r,n,g-2,d),d);break;case 59:p+=";";default:if(Ke(v=Cn(p,t,n,h,u,o,c,m,C=[],D=[],g,a),a),S===123)if(u===0)dt(p,t,v,v,C,a,g,c,D);else switch(y===99&&z(p,3)===110?100:y){case 100:case 108:case 109:case 115:dt(e,v,v,r&&Ke(Cn(e,v,v,0,0,o,c,m,o,C=[],g,D),D),o,D,g,c,r?C:D);break;default:dt(p,v,v,v,[""],D,0,c,D)}}h=u=f=0,R=$=1,m=p="",g=s;break;case 58:g=1+le(p),f=x;default:if(R<1){if(S==123)--R;else if(S==125&&R++==0&&to()==125)continue}switch(p+=Yt(S),S*R){case 38:$=u>0?1:(p+="\f",-1);break;case 44:c[h++]=(le(p)-1)*$,$=1;break;case 64:Oe()===45&&(p+=At(oe())),y=Oe(),u=g=le(m=p+=io(ct())),S++;break;case 45:x===45&&le(p)==2&&(R=0)}}return a}function Cn(e,t,n,r,o,a,s,c,d,h,u,g){for(var y=o-1,f=o===0?a:[""],x=Kn(f),R=0,O=0,$=0;R<r;++R)for(var S=0,m=Le(e,y+1,y=Vn(O=s[R])),C=e;S<x;++S)(C=Yn(O>0?f[S]+" "+m:E(m,/&\f/g,f[S])))&&(d[$++]=C);return St(e,t,n,o===0?xt:c,d,h,u,g)}function co(e,t,n,r){return St(e,t,n,Gn,Yt(eo()),Le(e,2,-2),0,r)}function Sn(e,t,n,r,o){return St(e,t,n,Vt,Le(e,0,r),Le(e,r+1,-1),r,o)}function Zn(e,t,n){switch(Qr(e,t)){case 5103:return j+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return j+e+e;case 4789:return qe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return j+e+qe+e+_+e+e;case 5936:switch(z(e,t+11)){case 114:return j+e+_+E(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return j+e+_+E(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return j+e+_+E(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return j+e+_+e+e;case 6165:return j+e+_+"flex-"+e+e;case 5187:return j+e+E(e,/(\w+).+(:[^]+)/,j+"box-$1$2"+_+"flex-$1$2")+e;case 5443:return j+e+_+"flex-item-"+E(e,/flex-|-self/g,"")+(pe(e,/flex-|baseline/)?"":_+"grid-row-"+E(e,/flex-|-self/g,""))+e;case 4675:return j+e+_+"flex-line-pack"+E(e,/align-content|flex-|-self/g,"")+e;case 5548:return j+e+_+E(e,"shrink","negative")+e;case 5292:return j+e+_+E(e,"basis","preferred-size")+e;case 6060:return j+"box-"+E(e,"-grow","")+j+e+_+E(e,"grow","positive")+e;case 4554:return j+E(e,/([^-])(transform)/g,"$1"+j+"$2")+e;case 6187:return E(E(E(e,/(zoom-|grab)/,j+"$1"),/(image-set)/,j+"$1"),e,"")+e;case 5495:case 3959:return E(e,/(image-set\([^]*)/,j+"$1$`$1");case 4968:return E(E(e,/(.+:)(flex-)?(.*)/,j+"box-pack:$3"+_+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+j+e+e;case 4200:if(!pe(e,/flex-|baseline/))return _+"grid-column-align"+Le(e,t)+e;break;case 2592:case 3360:return _+E(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,pe(r.props,/grid-\w+-end/)})?~lt(e+(n=n[t].value),"span",0)?e:_+E(e,"-start","")+e+_+"grid-row-span:"+(~lt(n,"span",0)?pe(n,/\d+/):+pe(n,/\d+/)-+pe(e,/\d+/))+";":_+E(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return pe(r.props,/grid-\w+-start/)})?e:_+E(E(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return E(e,/(.+)-inline(.+)/,j+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(le(e)-1-t>6)switch(z(e,t+1)){case 109:if(z(e,t+4)!==45)break;case 102:return E(e,/(.+:)(.+)-([^]+)/,"$1"+j+"$2-$3$1"+qe+(z(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~lt(e,"stretch",0)?Zn(E(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return E(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,a,s,c,d,h){return _+o+":"+a+h+(s?_+o+"-span:"+(c?d:+d-+a)+h:"")+e});case 4949:if(z(e,t+6)===121)return E(e,":",":"+j)+e;break;case 6444:switch(z(e,z(e,14)===45?18:11)){case 120:return E(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+j+(z(e,14)===45?"inline-":"")+"box$3$1"+j+"$2$3$1"+_+"$2box$3")+e;case 100:return E(e,":",":"+_)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return E(e,"scroll-","scroll-snap-")+e}return e}function ht(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function uo(e,t,n,r){switch(e.type){case Xr:if(e.children.length)break;case Zr:case Vt:return e.return=e.return||e.value;case Gn:return"";case Un:return e.return=e.value+"{"+ht(e.children,r)+"}";case xt:if(!le(e.value=e.props.join(",")))return""}return le(n=ht(e.children,r))?e.return=e.value+"{"+n+"}":""}function po(e){var t=Kn(e);return function(n,r,o,a){for(var s="",c=0;c<t;c++)s+=e[c](n,r,o,a)||"";return s}}function go(e){return function(t){t.root||(t=t.return)&&e(t)}}function fo(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Vt:e.return=Zn(e.value,e.length,n);return;case Un:return ht([ye(e,{value:E(e.value,"@","@"+j)})],r);case xt:if(e.length)return Jr(n=e.props,function(o){switch(pe(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Te(ye(e,{props:[E(o,/:(read-\w+)/,":"+qe+"$1")]})),Te(ye(e,{props:[o]})),Lt(e,{props:xn(n,r)});break;case"::placeholder":Te(ye(e,{props:[E(o,/:(plac\w+)/,":"+j+"input-$1")]})),Te(ye(e,{props:[E(o,/:(plac\w+)/,":"+qe+"$1")]})),Te(ye(e,{props:[E(o,/:(plac\w+)/,_+"input-$1")]})),Te(ye(e,{props:[o]})),Lt(e,{props:xn(n,r)});break}return""})}}var ho={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Q={},Me=typeof process<"u"&&Q!==void 0&&(Q.REACT_APP_SC_ATTR||Q.SC_ATTR)||"data-styled",Xn="active",Qn="data-styled-version",Rt="6.1.14",Kt=`/*!sc*/
`,mt=typeof window<"u"&&"HTMLElement"in window,mo=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Q!==void 0&&Q.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Q.REACT_APP_SC_DISABLE_SPEEDY!==""?Q.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Q.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Q!==void 0&&Q.SC_DISABLE_SPEEDY!==void 0&&Q.SC_DISABLE_SPEEDY!==""&&Q.SC_DISABLE_SPEEDY!=="false"&&Q.SC_DISABLE_SPEEDY),$t=Object.freeze([]),ze=Object.freeze({});function bo(e,t,n){return n===void 0&&(n=ze),e.theme!==n.theme&&e.theme||t||n.theme}var Jn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),wo=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yo=/(^-|-$)/g;function vn(e){return e.replace(wo,"-").replace(yo,"")}var xo=/(a)(d)/gi,ot=52,Rn=function(e){return String.fromCharCode(e+(e>25?39:97))};function zt(e){var t,n="";for(t=Math.abs(e);t>ot;t=t/ot|0)n=Rn(t%ot)+n;return(Rn(t%ot)+n).replace(xo,"$1-$2")}var jt,er=5381,Fe=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},tr=function(e){return Fe(er,e)};function Co(e){return zt(tr(e)>>>0)}function So(e){return e.displayName||e.name||"Component"}function _t(e){return typeof e=="string"&&!0}var nr=typeof Symbol=="function"&&Symbol.for,rr=nr?Symbol.for("react.memo"):60115,vo=nr?Symbol.for("react.forward_ref"):60112,Ro={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},or={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Eo=((jt={})[vo]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jt[rr]=or,jt);function $n(e){return("type"in(t=e)&&t.type.$$typeof)===rr?or:"$$typeof"in e?Eo[e.$$typeof]:Ro;var t}var Oo=Object.defineProperty,Po=Object.getOwnPropertyNames,En=Object.getOwnPropertySymbols,ko=Object.getOwnPropertyDescriptor,Do=Object.getPrototypeOf,On=Object.prototype;function ar(e,t,n){if(typeof t!="string"){if(On){var r=Do(t);r&&r!==On&&ar(e,r,n)}var o=Po(t);En&&(o=o.concat(En(t)));for(var a=$n(e),s=$n(t),c=0;c<o.length;++c){var d=o[c];if(!(d in $o||n&&n[d]||s&&d in s||a&&d in a)){var h=ko(t,d);try{Oo(e,d,h)}catch{}}}}return e}function ke(e){return typeof e=="function"}function qt(e){return typeof e=="object"&&"styledComponentId"in e}function Ee(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Pn(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Qe(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Wt(e,t,n){if(n===void 0&&(n=!1),!n&&!Qe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Wt(e[r],t[r]);else if(Qe(t))for(var r in t)e[r]=Wt(e[r],t[r]);return e}function Zt(e,t){Object.defineProperty(e,"toString",{value:t})}function De(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Io=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,a=o;t>=a;)if((a<<=1)<0)throw De(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var s=o;s<a;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(t+1),d=(s=0,n.length);s<d;s++)this.tag.insertRule(c,n[s])&&(this.groupSizes[t]++,c++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var a=r;a<o;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),a=o+r,s=o;s<a;s++)n+="".concat(this.tag.getRule(s)).concat(Kt);return n},e}(),ut=new Map,bt=new Map,pt=1,at=function(e){if(ut.has(e))return ut.get(e);for(;bt.has(pt);)pt++;var t=pt++;return ut.set(e,t),bt.set(t,e),t},Ao=function(e,t){pt=t+1,ut.set(e,t),bt.set(t,e)},jo="style[".concat(Me,"][").concat(Qn,'="').concat(Rt,'"]'),_o=new RegExp("^".concat(Me,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ho=function(e,t,n){for(var r,o=n.split(","),a=0,s=o.length;a<s;a++)(r=o[a])&&e.registerName(t,r)},To=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Kt),o=[],a=0,s=r.length;a<s;a++){var c=r[a].trim();if(c){var d=c.match(_o);if(d){var h=0|parseInt(d[1],10),u=d[2];h!==0&&(Ao(u,h),Ho(e,u,d[3]),e.getTag().insertRules(h,o)),o.length=0}else o.push(c)}}},kn=function(e){for(var t=document.querySelectorAll(jo),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(Me)!==Xn&&(To(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Fo(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(c){var d=Array.from(c.querySelectorAll("style[".concat(Me,"]")));return d[d.length-1]}(n),a=o!==void 0?o.nextSibling:null;r.setAttribute(Me,Xn),r.setAttribute(Qn,Rt);var s=Fo();return s&&r.setAttribute("nonce",s),n.insertBefore(r,a),r},Lo=function(){function e(t){this.element=sr(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,a=r.length;o<a;o++){var s=r[o];if(s.ownerNode===n)return s}throw De(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),No=function(){function e(t){this.element=sr(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Mo=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Dn=mt,zo={isServer:!mt,useCSSOMInjection:!mo},ir=function(){function e(t,n,r){t===void 0&&(t=ze),n===void 0&&(n={});var o=this;this.options=G(G({},zo),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&mt&&Dn&&(Dn=!1,kn(this)),Zt(this,function(){return function(a){for(var s=a.getTag(),c=s.length,d="",h=function(g){var y=function($){return bt.get($)}(g);if(y===void 0)return"continue";var f=a.names.get(y),x=s.getGroup(g);if(f===void 0||!f.size||x.length===0)return"continue";var R="".concat(Me,".g").concat(g,'[id="').concat(y,'"]'),O="";f!==void 0&&f.forEach(function($){$.length>0&&(O+="".concat($,","))}),d+="".concat(x).concat(R,'{content:"').concat(O,'"}').concat(Kt)},u=0;u<c;u++)h(u);return d}(o)})}return e.registerId=function(t){return at(t)},e.prototype.rehydrate=function(){!this.server&&mt&&kn(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(G(G({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Mo(o):r?new Lo(o):new No(o)}(this.options),new Io(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(at(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(at(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(at(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Wo=/&/g,Bo=/^\s*\/\/.*$/gm;function lr(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=lr(n.children,t)),n})}function Go(e){var t,n,r,o=ze,a=o.options,s=a===void 0?ze:a,c=o.plugins,d=c===void 0?$t:c,h=function(y,f,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):y},u=d.slice();u.push(function(y){y.type===xt&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(Wo,n).replace(r,h))}),s.prefix&&u.push(fo),u.push(uo);var g=function(y,f,x,R){f===void 0&&(f=""),x===void 0&&(x=""),R===void 0&&(R="&"),t=R,n=f,r=new RegExp("\\".concat(n,"\\b"),"g");var O=y.replace(Bo,""),$=lo(x||f?"".concat(x," ").concat(f," { ").concat(O," }"):O);s.namespace&&($=lr($,s.namespace));var S=[];return ht($,po(u.concat(go(function(m){return S.push(m)})))),S};return g.hash=d.length?d.reduce(function(y,f){return f.name||De(15),Fe(y,f.name)},er).toString():"",g}var Uo=new ir,Bt=Go(),cr=P.createContext({shouldForwardProp:void 0,styleSheet:Uo,stylis:Bt});cr.Consumer;P.createContext(void 0);function In(){return i.useContext(cr)}var Vo=function(){function e(t,n){var r=this;this.inject=function(o,a){a===void 0&&(a=Bt);var s=r.name+a.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,a(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Zt(this,function(){throw De(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Bt),this.name+t.hash},e}(),Yo=function(e){return e>="A"&&e<="Z"};function An(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Yo(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var dr=function(e){return e==null||e===!1||e===""},ur=function(e){var t,n,r=[];for(var o in e){var a=e[o];e.hasOwnProperty(o)&&!dr(a)&&(Array.isArray(a)&&a.isCss||ke(a)?r.push("".concat(An(o),":"),a,";"):Qe(a)?r.push.apply(r,ft(ft(["".concat(o," {")],ur(a),!1),["}"],!1)):r.push("".concat(An(o),": ").concat((t=o,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ho||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Pe(e,t,n,r){if(dr(e))return[];if(qt(e))return[".".concat(e.styledComponentId)];if(ke(e)){if(!ke(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var o=e(t);return Pe(o,t,n,r)}var a;return e instanceof Vo?n?(e.inject(n,r),[e.getName(r)]):[e]:Qe(e)?ur(e):Array.isArray(e)?Array.prototype.concat.apply($t,e.map(function(s){return Pe(s,t,n,r)})):[e.toString()]}function Ko(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ke(n)&&!qt(n))return!1}return!0}var qo=tr(Rt),Zo=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ko(t),this.componentId=n,this.baseHash=Fe(qo,n),this.baseStyle=r,ir.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Ee(o,this.staticRulesId);else{var a=Pn(Pe(this.rules,t,n,r)),s=zt(Fe(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,s)){var c=r(a,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,c)}o=Ee(o,s),this.staticRulesId=s}else{for(var d=Fe(this.baseHash,r.hash),h="",u=0;u<this.rules.length;u++){var g=this.rules[u];if(typeof g=="string")h+=g;else if(g){var y=Pn(Pe(g,t,n,r));d=Fe(d,y+u),h+=y}}if(h){var f=zt(d>>>0);n.hasNameForId(this.componentId,f)||n.insertRules(this.componentId,f,r(h,".".concat(f),void 0,this.componentId)),o=Ee(o,f)}}return o},e}(),wt=P.createContext(void 0);wt.Consumer;function Xo(e){var t=P.useContext(wt),n=i.useMemo(function(){return function(r,o){if(!r)throw De(14);if(ke(r)){var a=r(o);return a}if(Array.isArray(r)||typeof r!="object")throw De(8);return o?G(G({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?P.createElement(wt.Provider,{value:n},e.children):null}var Ht={};function Qo(e,t,n){var r=qt(e),o=e,a=!_t(e),s=t.attrs,c=s===void 0?$t:s,d=t.componentId,h=d===void 0?function(C,D){var v=typeof C!="string"?"sc":vn(C);Ht[v]=(Ht[v]||0)+1;var p="".concat(v,"-").concat(Co(Rt+v+Ht[v]));return D?"".concat(D,"-").concat(p):p}(t.displayName,t.parentComponentId):d,u=t.displayName,g=u===void 0?function(C){return _t(C)?"styled.".concat(C):"Styled(".concat(So(C),")")}(e):u,y=t.displayName&&t.componentId?"".concat(vn(t.displayName),"-").concat(t.componentId):t.componentId||h,f=r&&o.attrs?o.attrs.concat(c).filter(Boolean):c,x=t.shouldForwardProp;if(r&&o.shouldForwardProp){var R=o.shouldForwardProp;if(t.shouldForwardProp){var O=t.shouldForwardProp;x=function(C,D){return R(C,D)&&O(C,D)}}else x=R}var $=new Zo(n,y,r?o.componentStyle:void 0);function S(C,D){return function(v,p,A){var Y=v.attrs,U=v.componentStyle,J=v.defaultProps,ae=v.foldedComponentIds,H=v.styledComponentId,ge=v.target,Ce=P.useContext(wt),fe=In(),se=v.shouldForwardProp||fe.shouldForwardProp,Ie=bo(p,Ce,J)||ze,K=function(de,Z,me){for(var ue,ee=G(G({},Z),{className:void 0,theme:me}),ve=0;ve<de.length;ve+=1){var X=ke(ue=de[ve])?ue(ee):ue;for(var W in X)ee[W]=W==="className"?Ee(ee[W],X[W]):W==="style"?G(G({},ee[W]),X[W]):X[W]}return Z.className&&(ee.className=Ee(ee.className,Z.className)),ee}(Y,p,Ie),he=K.as||ge,ce={};for(var M in K)K[M]===void 0||M[0]==="$"||M==="as"||M==="theme"&&K.theme===Ie||(M==="forwardedAs"?ce.as=K.forwardedAs:se&&!se(M,he)||(ce[M]=K[M]));var Se=function(de,Z){var me=In(),ue=de.generateAndInjectStyles(Z,me.styleSheet,me.stylis);return ue}(U,K),q=Ee(ae,H);return Se&&(q+=" "+Se),K.className&&(q+=" "+K.className),ce[_t(he)&&!Jn.has(he)?"class":"className"]=q,A&&(ce.ref=A),i.createElement(he,ce)}(m,C,D)}S.displayName=g;var m=P.forwardRef(S);return m.attrs=f,m.componentStyle=$,m.displayName=g,m.shouldForwardProp=x,m.foldedComponentIds=r?Ee(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=y,m.target=r?o.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(D){for(var v=[],p=1;p<arguments.length;p++)v[p-1]=arguments[p];for(var A=0,Y=v;A<Y.length;A++)Wt(D,Y[A],!0);return D}({},o.defaultProps,C):C}}),Zt(m,function(){return".".concat(m.styledComponentId)}),a&&ar(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function jn(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var _n=function(e){return Object.assign(e,{isCss:!0})};function N(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ke(e)||Qe(e))return _n(Pe(jn($t,ft([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Pe(r):_n(Pe(jn(r,t)))}function Gt(e,t,n){if(n===void 0&&(n=ze),!t)throw De(1,t);var r=function(o){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,n,N.apply(void 0,ft([o],a,!1)))};return r.attrs=function(o){return Gt(e,t,G(G({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Gt(e,t,G(G({},n),o))},r}var pr=function(e){return Gt(Qo,e)},k=pr;Jn.forEach(function(e){k[e]=pr(e)});var xe;function We(e,t){return e[t]}function Jo(e=[],t,n=0){return[...e.slice(0,n),t,...e.slice(n)]}function ea(e=[],t,n="id"){const r=e.slice(),o=We(t,n);return o?r.splice(r.findIndex(a=>We(a,n)===o),1):r.splice(r.findIndex(a=>a===t),1),r}function Hn(e){return e.map((t,n)=>{const r=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(r.id=n+1),r})}function Ze(e,t){return Math.ceil(e/t)}function Tt(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(xe||(xe={}));const L=()=>null;function gr(e,t=[],n=[]){let r={},o=[...n];return t.length&&t.forEach(a=>{if(!a.when||typeof a.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');a.when(e)&&(r=a.style||{},a.classNames&&(o=[...o,...a.classNames]),typeof a.style=="function"&&(r=a.style(e)||{}))}),{conditionalStyle:r,classNames:o.join(" ")}}function gt(e,t=[],n="id"){const r=We(e,n);return r?t.some(o=>We(o,n)===r):t.some(o=>o===e)}function st(e,t){return t?e.findIndex(n=>Xe(n.id,t)):-1}function Xe(e,t){return e==t}function ta(e,t){const n=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:r,rows:o,rowCount:a,mergeSelections:s}=t,c=!e.allSelected,d=!e.toggleOnSelectedRowsChange;if(s){const h=c?[...e.selectedRows,...o.filter(u=>!gt(u,e.selectedRows,r))]:e.selectedRows.filter(u=>!gt(u,o,r));return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:h.length,selectedRows:h,toggleOnSelectedRowsChange:d})}return Object.assign(Object.assign({},e),{allSelected:c,selectedCount:c?a:0,selectedRows:c?o:[],toggleOnSelectedRowsChange:d})}case"SELECT_SINGLE_ROW":{const{keyField:r,row:o,isSelected:a,rowCount:s,singleSelect:c}=t;return c?a?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[o],toggleOnSelectedRowsChange:n}):a?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:ea(e.selectedRows,o,r),toggleOnSelectedRowsChange:n}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===s,selectedRows:Jo(e.selectedRows,o),toggleOnSelectedRowsChange:n})}case"SELECT_MULTIPLE_ROWS":{const{keyField:r,selectedRows:o,totalRows:a,mergeSelections:s}=t;if(s){const c=[...e.selectedRows,...o.filter(d=>!gt(d,e.selectedRows,r))];return Object.assign(Object.assign({},e),{selectedCount:c.length,allSelected:!1,selectedRows:c,toggleOnSelectedRowsChange:n})}return Object.assign(Object.assign({},e),{selectedCount:o.length,allSelected:o.length===a,selectedRows:o,toggleOnSelectedRowsChange:n})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:r}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:r})}case"SORT_CHANGE":{const{sortDirection:r,selectedColumn:o,clearSelectedOnSort:a}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:o,sortDirection:r,currentPage:1}),a&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_PAGE":{const{page:r,paginationServer:o,visibleOnly:a,persistSelectedOnPageChange:s}=t,c=o&&s,d=o&&!s||a;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:r}),c&&{allSelected:!1}),d&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:n})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:r,page:o}=t;return Object.assign(Object.assign({},e),{currentPage:o,rowsPerPage:r})}}}const na=N`
	pointer-events: none;
	opacity: 0.4;
`,ra=k.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&na};
	${({theme:e})=>e.table.style};
`,oa=N`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,aa=k.div`
	display: flex;
	width: 100%;
	${({$fixedHeader:e})=>e&&oa};
	${({theme:e})=>e.head.style};
`,sa=k.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({$dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,fr=(e,...t)=>N`
		@media screen and (max-width: ${599}px) {
			${N(e,...t)}
		}
	`,ia=(e,...t)=>N`
		@media screen and (max-width: ${959}px) {
			${N(e,...t)}
		}
	`,la=(e,...t)=>N`
		@media screen and (max-width: ${1280}px) {
			${N(e,...t)}
		}
	`,ca=e=>(t,...n)=>N`
			@media screen and (max-width: ${e}px) {
				${N(t,...n)}
			}
		`,Ue=k.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,$headCell:t})=>e[t?"headCells":"cells"].style};
	${({$noPadding:e})=>e&&"padding: 0"};
`,hr=k(Ue)`
	flex-grow: ${({button:e,grow:t})=>t===0||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&N`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&e==="sm"&&fr`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&ia`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&la`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&ca(e)`
    display: none;
  `};
`,da=N`
	div:first-child {
		white-space: ${({$wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({$allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,ua=k(hr).attrs(e=>({style:e.style}))`
	${({$renderAsCell:e})=>!e&&da};
	${({theme:e,$isDragging:t})=>t&&e.cells.draggingStyle};
	${({$cellStyle:e})=>e};
`;var pa=i.memo(function({id:e,column:t,row:n,rowIndex:r,dataTag:o,isDragging:a,onDragStart:s,onDragOver:c,onDragEnd:d,onDragEnter:h,onDragLeave:u}){const{conditionalStyle:g,classNames:y}=gr(n,t.conditionalCellStyles,["rdt_TableCell"]);return i.createElement(ua,{id:e,"data-column-id":t.id,role:"cell",className:y,"data-tag":o,$cellStyle:t.style,$renderAsCell:!!t.cell,$allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,$wrapCell:t.wrap,style:g,$isDragging:a,onDragStart:s,onDragOver:c,onDragEnd:d,onDragEnter:h,onDragLeave:u},!t.cell&&i.createElement("div",{"data-tag":o},function(f,x,R,O){return x?R&&typeof R=="function"?R(f,O):x(f,O):null}(n,t.selector,t.format,r)),t.cell&&t.cell(n,r,t,e))});const Tn="input";var mr=i.memo(function({name:e,component:t=Tn,componentOptions:n={style:{}},indeterminate:r=!1,checked:o=!1,disabled:a=!1,onClick:s=L}){const c=t,d=c!==Tn?n.style:(u=>Object.assign(Object.assign({fontSize:"18px"},!u&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(a),h=i.useMemo(()=>function(u,...g){let y;return Object.keys(u).map(f=>u[f]).forEach((f,x)=>{typeof f=="function"&&(y=Object.assign(Object.assign({},u),{[Object.keys(u)[x]]:f(...g)}))}),y||u}(n,r),[n,r]);return i.createElement(c,Object.assign({type:"checkbox",ref:u=>{u&&(u.indeterminate=r)},style:d,onClick:a?L:s,name:e,"aria-label":e,checked:o,disabled:a},h,{onChange:L}))});const ga=k(Ue)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function fa({name:e,keyField:t,row:n,rowCount:r,selected:o,selectableRowsComponent:a,selectableRowsComponentProps:s,selectableRowsSingle:c,selectableRowDisabled:d,onSelectedRow:h}){const u=!(!d||!d(n));return i.createElement(ga,{onClick:g=>g.stopPropagation(),className:"rdt_TableCell",$noPadding:!0},i.createElement(mr,{name:e,component:a,componentOptions:s,checked:o,"aria-checked":o,onClick:()=>{h({type:"SELECT_SINGLE_ROW",row:n,isSelected:o,keyField:t,rowCount:r,singleSelect:c})},disabled:u}))}const ha=k.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function ma({disabled:e=!1,expanded:t=!1,expandableIcon:n,id:r,row:o,onToggled:a}){const s=t?n.expanded:n.collapsed;return i.createElement(ha,{"aria-disabled":e,onClick:()=>a&&a(o),"data-testid":`expander-button-${r}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const ba=k(Ue)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function wa({row:e,expanded:t=!1,expandableIcon:n,id:r,onToggled:o,disabled:a=!1}){return i.createElement(ba,{onClick:s=>s.stopPropagation(),$noPadding:!0},i.createElement(ma,{id:r,row:e,expanded:t,expandableIcon:n,disabled:a,onToggled:o}))}const ya=k.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({$extendedRowStyle:e})=>e};
`;var xa=i.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:n,extendedRowStyle:r,extendedClassNames:o}){const a=["rdt_ExpanderRow",...o.split(" ").filter(s=>s!=="rdt_TableRow")].join(" ");return i.createElement(ya,{className:a,$extendedRowStyle:r},i.createElement(t,Object.assign({data:e},n)))});const Ft="allowRowEvents";var yt,Ut,Fn;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(yt||(yt={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(Ut||(Ut={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(Fn||(Fn={}));const Ca=N`
	&:hover {
		${({$highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,Sa=N`
	&:hover {
		cursor: pointer;
	}
`,va=k.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({$dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({$striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({$highlightOnHover:e})=>e&&Ca};
	${({$pointerOnHover:e})=>e&&Sa};
	${({$selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
	${({$conditionalStyle:e})=>e};
`;function Ra({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:n=!1,defaultExpanderDisabled:r=!1,dense:o=!1,expandableIcon:a,expandableRows:s=!1,expandableRowsComponent:c,expandableRowsComponentProps:d,expandableRowsHideExpander:h,expandOnRowClicked:u=!1,expandOnRowDoubleClicked:g=!1,highlightOnHover:y=!1,id:f,expandableInheritConditionalStyles:x,keyField:R,onRowClicked:O=L,onRowDoubleClicked:$=L,onRowMouseEnter:S=L,onRowMouseLeave:m=L,onRowExpandToggled:C=L,onSelectedRow:D=L,pointerOnHover:v=!1,row:p,rowCount:A,rowIndex:Y,selectableRowDisabled:U=null,selectableRows:J=!1,selectableRowsComponent:ae,selectableRowsComponentProps:H,selectableRowsHighlight:ge=!1,selectableRowsSingle:Ce=!1,selected:fe,striped:se=!1,draggingColumnId:Ie,onDragStart:K,onDragOver:he,onDragEnd:ce,onDragEnter:M,onDragLeave:Se}){const[q,de]=i.useState(n);i.useEffect(()=>{de(n)},[n]);const Z=i.useCallback(()=>{de(!q),C(!q,p)},[q,C,p]),me=v||s&&(u||g),ue=i.useCallback(F=>{F.target.getAttribute("data-tag")===Ft&&(O(p,F),!r&&s&&u&&Z())},[r,u,s,Z,O,p]),ee=i.useCallback(F=>{F.target.getAttribute("data-tag")===Ft&&($(p,F),!r&&s&&g&&Z())},[r,g,s,Z,$,p]),ve=i.useCallback(F=>{S(p,F)},[S,p]),X=i.useCallback(F=>{m(p,F)},[m,p]),W=We(p,R),{conditionalStyle:et,classNames:tt}=gr(p,t,["rdt_TableRow"]),Et=ge&&fe,Ot=x?et:{},Pt=se&&Y%2==0;return i.createElement(i.Fragment,null,i.createElement(va,{id:`row-${f}`,role:"row",$striped:Pt,$highlightOnHover:y,$pointerOnHover:!r&&me,$dense:o,onClick:ue,onDoubleClick:ee,onMouseEnter:ve,onMouseLeave:X,className:tt,$selected:Et,$conditionalStyle:et},J&&i.createElement(fa,{name:`select-row-${W}`,keyField:R,row:p,rowCount:A,selected:fe,selectableRowsComponent:ae,selectableRowsComponentProps:H,selectableRowDisabled:U,selectableRowsSingle:Ce,onSelectedRow:D}),s&&!h&&i.createElement(wa,{id:W,expandableIcon:a,expanded:q,row:p,onToggled:Z,disabled:r}),e.map(F=>F.omit?null:i.createElement(pa,{id:`cell-${F.id}-${W}`,key:`cell-${F.id}-${W}`,dataTag:F.ignoreRowClick||F.button?null:Ft,column:F,row:p,rowIndex:Y,isDragging:Xe(Ie,F.id),onDragStart:K,onDragOver:he,onDragEnd:ce,onDragEnter:M,onDragLeave:Se}))),s&&q&&i.createElement(xa,{key:`expander-${W}`,data:p,extendedRowStyle:Ot,extendedClassNames:tt,ExpanderComponent:c,expanderComponentProps:d}))}const $a=k.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({$sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,Ea=({sortActive:e,sortDirection:t})=>P.createElement($a,{$sortActive:e,$sortDirection:t},"▲"),Oa=k(hr)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,$isDragging:t})=>t&&e.headCells.draggingStyle};
`,Pa=N`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({$sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({$sortActive:e})=>!e&&N`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,ka=k.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&Pa};
`,Da=k.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var Ia=i.memo(function({column:e,disabled:t,draggingColumnId:n,selectedColumn:r={},sortDirection:o,sortIcon:a,sortServer:s,pagination:c,paginationServer:d,persistSelectedOnSort:h,selectableRowsVisibleOnly:u,onSort:g,onDragStart:y,onDragOver:f,onDragEnd:x,onDragEnter:R,onDragLeave:O}){i.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[$,S]=i.useState(!1),m=i.useRef(null);if(i.useEffect(()=>{m.current&&S(m.current.scrollWidth>m.current.clientWidth)},[$]),e.omit)return null;const C=()=>{if(!e.sortable&&!e.selector)return;let H=o;Xe(r.id,e.id)&&(H=o===xe.ASC?xe.DESC:xe.ASC),g({type:"SORT_CHANGE",sortDirection:H,selectedColumn:e,clearSelectedOnSort:c&&d&&!h||s||u})},D=H=>i.createElement(Ea,{sortActive:H,sortDirection:o}),v=()=>i.createElement("span",{className:[o,"__rdt_custom_sort_icon__"].join(" ")},a),p=!(!e.sortable||!Xe(r.id,e.id)),A=!e.sortable||t,Y=e.sortable&&!a&&!e.right,U=e.sortable&&!a&&e.right,J=e.sortable&&a&&!e.right,ae=e.sortable&&a&&e.right;return i.createElement(Oa,{"data-column-id":e.id,className:"rdt_TableCol",$headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,$isDragging:Xe(e.id,n),onDragStart:y,onDragOver:f,onDragEnd:x,onDragEnter:R,onDragLeave:O},e.name&&i.createElement(ka,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:A?void 0:C,onKeyPress:A?void 0:H=>{H.key==="Enter"&&C()},$sortActive:!A&&p,disabled:A},!A&&ae&&v(),!A&&U&&D(p),typeof e.name=="string"?i.createElement(Da,{title:$?e.name:void 0,ref:m,"data-column-id":e.id},e.name):e.name,!A&&J&&v(),!A&&Y&&D(p)))});const Aa=k(Ue)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function ja({headCell:e=!0,rowData:t,keyField:n,allSelected:r,mergeSelections:o,selectedRows:a,selectableRowsComponent:s,selectableRowsComponentProps:c,selectableRowDisabled:d,onSelectAllRows:h}){const u=a.length>0&&!r,g=d?t.filter(x=>!d(x)):t,y=g.length===0,f=Math.min(t.length,g.length);return i.createElement(Aa,{className:"rdt_TableCol",$headCell:e,$noPadding:!0},i.createElement(mr,{name:"select-all-rows",component:s,componentOptions:c,onClick:()=>{h({type:"SELECT_ALL_ROWS",rows:g,rowCount:f,mergeSelections:o,keyField:n})},checked:r,indeterminate:u,disabled:y}))}function br(e=yt.AUTO){const t=typeof window=="object",[n,r]=i.useState(!1);return i.useEffect(()=>{if(t)if(e!=="auto")r(e==="rtl");else{const o=!(!window.document||!window.document.createElement),a=document.getElementsByTagName("BODY")[0],s=document.getElementsByTagName("HTML")[0],c=a.dir==="rtl"||s.dir==="rtl";r(o&&c)}},[e,t]),n}const _a=k.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,Ha=k.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,Ln=k.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({$rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,$visible:t})=>t&&e.contextMenu.activeStyle};
`;function Ta({contextMessage:e,contextActions:t,contextComponent:n,selectedCount:r,direction:o}){const a=br(o),s=r>0;return n?i.createElement(Ln,{$visible:s},i.cloneElement(n,{selectedCount:r})):i.createElement(Ln,{$visible:s,$rtl:a},i.createElement(_a,null,((c,d,h)=>{if(d===0)return null;const u=d===1?c.singular:c.plural;return h?`${d} ${c.message||""} ${u}`:`${d} ${u} ${c.message||""}`})(e,r,a)),i.createElement(Ha,null,t))}const Fa=k.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,La=k.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,Na=k.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,Ma=({title:e,actions:t=null,contextMessage:n,contextActions:r,contextComponent:o,selectedCount:a,direction:s,showMenu:c=!0})=>i.createElement(Fa,{className:"rdt_TableHeader",role:"heading","aria-level":1},i.createElement(La,null,e),t&&i.createElement(Na,null,t),c&&i.createElement(Ta,{contextMessage:n,contextActions:r,contextComponent:o,direction:s,selectedCount:a}));function wr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}const za={left:"flex-start",right:"flex-end",center:"center"},Wa=k.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>za[e]};
	flex-wrap: ${({$wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,Ba=e=>{var{align:t="right",wrapContent:n=!0}=e,r=wr(e,["align","wrapContent"]);return i.createElement(Wa,Object.assign({align:t,$wrapContent:n},r))},Ga=k.div`
	display: flex;
	flex-direction: column;
`,Ua=k.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({$responsive:e,$fixedHeader:t})=>e&&N`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({$fixedHeader:e=!1,$fixedHeaderScrollHeight:t="100vh"})=>e&&N`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,Nn=k.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,Va=k.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,Ya=k(Ue)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,Ka=k.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,qa=()=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},P.createElement("path",{d:"M7 10l5 5 5-5z"}),P.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),Za=k.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,Xa=k.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,Qa=e=>{var{defaultValue:t,onChange:n}=e,r=wr(e,["defaultValue","onChange"]);return i.createElement(Xa,null,i.createElement(Za,Object.assign({onChange:n,defaultValue:t},r)),i.createElement(qa,null))},l={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return P.createElement("div",null,"To add an expander pass in a component instance via ",P.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:P.createElement(()=>P.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},P.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),P.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:P.createElement(()=>P.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},P.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),P.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:P.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:P.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:Ut.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:P.createElement(()=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},P.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),P.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:P.createElement(()=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},P.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),P.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:P.createElement(()=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},P.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),P.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:P.createElement(()=>P.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},P.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),P.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:yt.AUTO,onChangePage:L,onChangeRowsPerPage:L,onRowClicked:L,onRowDoubleClicked:L,onRowMouseEnter:L,onRowMouseLeave:L,onRowExpandToggled:L,onSelectedRowsChange:L,onSort:L,onColumnOrderChange:L},Ja={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},es=k.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,it=k.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({$isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,ts=k.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${fr`
    width: 100%;
    justify-content: space-around;
  `};
`,yr=k.span`
	flex-shrink: 1;
	user-select: none;
`,ns=k(yr)`
	margin: 0 24px;
`,rs=k(yr)`
	margin: 0 4px;
`;var os=i.memo(function({rowsPerPage:e,rowCount:t,currentPage:n,direction:r=l.direction,paginationRowsPerPageOptions:o=l.paginationRowsPerPageOptions,paginationIconLastPage:a=l.paginationIconLastPage,paginationIconFirstPage:s=l.paginationIconFirstPage,paginationIconNext:c=l.paginationIconNext,paginationIconPrevious:d=l.paginationIconPrevious,paginationComponentOptions:h=l.paginationComponentOptions,onChangeRowsPerPage:u=l.onChangeRowsPerPage,onChangePage:g=l.onChangePage}){const y=(()=>{const H=typeof window=="object";function ge(){return{width:H?window.innerWidth:void 0,height:H?window.innerHeight:void 0}}const[Ce,fe]=i.useState(ge);return i.useEffect(()=>{if(!H)return()=>null;function se(){fe(ge())}return window.addEventListener("resize",se),()=>window.removeEventListener("resize",se)},[]),Ce})(),f=br(r),x=y.width&&y.width>599,R=Ze(t,e),O=n*e,$=O-e+1,S=n===1,m=n===R,C=Object.assign(Object.assign({},Ja),h),D=n===R?`${$}-${t} ${C.rangeSeparatorText} ${t}`:`${$}-${O} ${C.rangeSeparatorText} ${t}`,v=i.useCallback(()=>g(n-1),[n,g]),p=i.useCallback(()=>g(n+1),[n,g]),A=i.useCallback(()=>g(1),[g]),Y=i.useCallback(()=>g(Ze(t,e)),[g,t,e]),U=i.useCallback(H=>u(Number(H.target.value),n),[n,u]),J=o.map(H=>i.createElement("option",{key:H,value:H},H));C.selectAllRowsItem&&J.push(i.createElement("option",{key:-1,value:t},C.selectAllRowsItemText));const ae=i.createElement(Qa,{onChange:U,defaultValue:e,"aria-label":C.rowsPerPageText},J);return i.createElement(es,{className:"rdt_Pagination"},!C.noRowsPerPage&&x&&i.createElement(i.Fragment,null,i.createElement(rs,null,C.rowsPerPageText),ae),x&&i.createElement(ns,null,D),i.createElement(ts,null,i.createElement(it,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":S,onClick:A,disabled:S,$isRTL:f},s),i.createElement(it,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":S,onClick:v,disabled:S,$isRTL:f},d),!C.noRowsPerPage&&!x&&ae,i.createElement(it,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":m,onClick:p,disabled:m,$isRTL:f},c),i.createElement(it,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":m,onClick:Y,disabled:m,$isRTL:f},a)))});const $e=(e,t)=>{const n=i.useRef(!0);i.useEffect(()=>{n.current?n.current=!1:e()},t)};function as(e){return e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ss=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var n=Object.prototype.toString.call(t);return n==="[object RegExp]"||n==="[object Date]"||function(r){return r.$$typeof===is}(t)}(e)},is=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function Je(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Be((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function ls(e,t,n){return e.concat(t).map(function(r){return Je(r,n)})}function Mn(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(n){return Object.propertyIsEnumerable.call(t,n)}):[]}(e))}function zn(e,t){try{return t in e}catch{return!1}}function cs(e,t,n){var r={};return n.isMergeableObject(e)&&Mn(e).forEach(function(o){r[o]=Je(e[o],n)}),Mn(t).forEach(function(o){(function(a,s){return zn(a,s)&&!(Object.hasOwnProperty.call(a,s)&&Object.propertyIsEnumerable.call(a,s))})(e,o)||(zn(e,o)&&n.isMergeableObject(t[o])?r[o]=function(a,s){if(!s.customMerge)return Be;var c=s.customMerge(a);return typeof c=="function"?c:Be}(o,n)(e[o],t[o],n):r[o]=Je(t[o],n))}),r}function Be(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||ls,n.isMergeableObject=n.isMergeableObject||ss,n.cloneUnlessOtherwiseSpecified=Je;var r=Array.isArray(t);return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):cs(e,t,n):Je(t,n)}Be.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,r){return Be(n,r,t)},{})};var ds=as(Be);const Wn={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Bn={default:Wn,light:Wn,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function us(e,t,n,r){const[o,a]=i.useState(()=>Hn(e)),[s,c]=i.useState(""),d=i.useRef("");$e(()=>{a(Hn(e))},[e]);const h=i.useCallback(O=>{var $,S,m;const{attributes:C}=O.target,D=($=C.getNamedItem("data-column-id"))===null||$===void 0?void 0:$.value;D&&(d.current=((m=(S=o[st(o,D)])===null||S===void 0?void 0:S.id)===null||m===void 0?void 0:m.toString())||"",c(d.current))},[o]),u=i.useCallback(O=>{var $;const{attributes:S}=O.target,m=($=S.getNamedItem("data-column-id"))===null||$===void 0?void 0:$.value;if(m&&d.current&&m!==d.current){const C=st(o,d.current),D=st(o,m),v=[...o];v[C]=o[D],v[D]=o[C],a(v),t(v)}},[t,o]),g=i.useCallback(O=>{O.preventDefault()},[]),y=i.useCallback(O=>{O.preventDefault()},[]),f=i.useCallback(O=>{O.preventDefault(),d.current="",c("")},[]),x=function(O=!1){return O?xe.ASC:xe.DESC}(r),R=i.useMemo(()=>o[st(o,n==null?void 0:n.toString())]||{},[n,o]);return{tableColumns:o,draggingColumnId:s,handleDragStart:h,handleDragEnter:u,handleDragOver:g,handleDragLeave:y,handleDragEnd:f,defaultSortDirection:x,defaultSortColumn:R}}var ps=i.memo(function(e){const{data:t=l.data,columns:n=l.columns,title:r=l.title,actions:o=l.actions,keyField:a=l.keyField,striped:s=l.striped,highlightOnHover:c=l.highlightOnHover,pointerOnHover:d=l.pointerOnHover,dense:h=l.dense,selectableRows:u=l.selectableRows,selectableRowsSingle:g=l.selectableRowsSingle,selectableRowsHighlight:y=l.selectableRowsHighlight,selectableRowsNoSelectAll:f=l.selectableRowsNoSelectAll,selectableRowsVisibleOnly:x=l.selectableRowsVisibleOnly,selectableRowSelected:R=l.selectableRowSelected,selectableRowDisabled:O=l.selectableRowDisabled,selectableRowsComponent:$=l.selectableRowsComponent,selectableRowsComponentProps:S=l.selectableRowsComponentProps,onRowExpandToggled:m=l.onRowExpandToggled,onSelectedRowsChange:C=l.onSelectedRowsChange,expandableIcon:D=l.expandableIcon,onChangeRowsPerPage:v=l.onChangeRowsPerPage,onChangePage:p=l.onChangePage,paginationServer:A=l.paginationServer,paginationServerOptions:Y=l.paginationServerOptions,paginationTotalRows:U=l.paginationTotalRows,paginationDefaultPage:J=l.paginationDefaultPage,paginationResetDefaultPage:ae=l.paginationResetDefaultPage,paginationPerPage:H=l.paginationPerPage,paginationRowsPerPageOptions:ge=l.paginationRowsPerPageOptions,paginationIconLastPage:Ce=l.paginationIconLastPage,paginationIconFirstPage:fe=l.paginationIconFirstPage,paginationIconNext:se=l.paginationIconNext,paginationIconPrevious:Ie=l.paginationIconPrevious,paginationComponent:K=l.paginationComponent,paginationComponentOptions:he=l.paginationComponentOptions,responsive:ce=l.responsive,progressPending:M=l.progressPending,progressComponent:Se=l.progressComponent,persistTableHead:q=l.persistTableHead,noDataComponent:de=l.noDataComponent,disabled:Z=l.disabled,noTableHead:me=l.noTableHead,noHeader:ue=l.noHeader,fixedHeader:ee=l.fixedHeader,fixedHeaderScrollHeight:ve=l.fixedHeaderScrollHeight,pagination:X=l.pagination,subHeader:W=l.subHeader,subHeaderAlign:et=l.subHeaderAlign,subHeaderWrap:tt=l.subHeaderWrap,subHeaderComponent:Et=l.subHeaderComponent,noContextMenu:Ot=l.noContextMenu,contextMessage:Pt=l.contextMessage,contextActions:F=l.contextActions,contextComponent:xr=l.contextComponent,expandableRows:nt=l.expandableRows,onRowClicked:Xt=l.onRowClicked,onRowDoubleClicked:Qt=l.onRowDoubleClicked,onRowMouseEnter:Jt=l.onRowMouseEnter,onRowMouseLeave:en=l.onRowMouseLeave,sortIcon:Cr=l.sortIcon,onSort:Sr=l.onSort,sortFunction:tn=l.sortFunction,sortServer:kt=l.sortServer,expandableRowsComponent:vr=l.expandableRowsComponent,expandableRowsComponentProps:Rr=l.expandableRowsComponentProps,expandableRowDisabled:nn=l.expandableRowDisabled,expandableRowsHideExpander:rn=l.expandableRowsHideExpander,expandOnRowClicked:$r=l.expandOnRowClicked,expandOnRowDoubleClicked:Er=l.expandOnRowDoubleClicked,expandableRowExpanded:on=l.expandableRowExpanded,expandableInheritConditionalStyles:Or=l.expandableInheritConditionalStyles,defaultSortFieldId:Pr=l.defaultSortFieldId,defaultSortAsc:kr=l.defaultSortAsc,clearSelectedRows:an=l.clearSelectedRows,conditionalRowStyles:Dr=l.conditionalRowStyles,theme:sn=l.theme,customStyles:ln=l.customStyles,direction:Ve=l.direction,onColumnOrderChange:Ir=l.onColumnOrderChange,className:Ar}=e,{tableColumns:cn,draggingColumnId:dn,handleDragStart:un,handleDragEnter:pn,handleDragOver:gn,handleDragLeave:fn,handleDragEnd:hn,defaultSortDirection:jr,defaultSortColumn:_r}=us(n,Ir,Pr,kr),[{rowsPerPage:be,currentPage:ne,selectedRows:Dt,allSelected:mn,selectedCount:bn,selectedColumn:ie,sortDirection:Ae,toggleOnSelectedRowsChange:Hr},Re]=i.useReducer(ta,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:_r,toggleOnSelectedRowsChange:!1,sortDirection:jr,currentPage:J,rowsPerPage:H,selectedRowsFlag:!1,contextMessage:l.contextMessage}),{persistSelectedOnSort:wn=!1,persistSelectedOnPageChange:rt=!1}=Y,yn=!(!A||!rt&&!wn),Tr=X&&!M&&t.length>0,Fr=K||os,Lr=i.useMemo(()=>((b={},I="default",V="default")=>{const re=Bn[I]?I:V;return ds({table:{style:{color:(w=Bn[re]).text.primary,backgroundColor:w.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:w.text.primary,backgroundColor:w.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:w.background.default,minHeight:"52px"}},head:{style:{color:w.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:w.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:w.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:w.context.background,fontSize:"18px",fontWeight:400,color:w.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:w.text.primary,backgroundColor:w.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:w.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:w.selected.text,backgroundColor:w.selected.default,borderBottomColor:w.background.default}},highlightOnHoverStyle:{color:w.highlightOnHover.text,backgroundColor:w.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:w.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:w.background.default},stripedStyle:{color:w.striped.text,backgroundColor:w.striped.default}},expanderRow:{style:{color:w.text.primary,backgroundColor:w.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:w.button.default,fill:w.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:w.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:w.button.hover},"&:focus":{outline:"none",backgroundColor:w.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:w.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:w.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:w.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:w.button.default,fill:w.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:w.button.disabled,fill:w.button.disabled},"&:hover:not(:disabled)":{backgroundColor:w.button.hover},"&:focus":{outline:"none",backgroundColor:w.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:w.text.primary,backgroundColor:w.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:w.text.primary,backgroundColor:w.background.default}}},b);var w})(ln,sn),[ln,sn]),Nr=i.useMemo(()=>Object.assign({},Ve!=="auto"&&{dir:Ve}),[Ve]),B=i.useMemo(()=>{if(kt)return t;if(ie!=null&&ie.sortFunction&&typeof ie.sortFunction=="function"){const b=ie.sortFunction,I=Ae===xe.ASC?b:(V,re)=>-1*b(V,re);return[...t].sort(I)}return function(b,I,V,re){return I?re&&typeof re=="function"?re(b.slice(0),I,V):b.slice(0).sort((w,It)=>{const _e=I(w),we=I(It);if(V==="asc"){if(_e<we)return-1;if(_e>we)return 1}if(V==="desc"){if(_e>we)return-1;if(_e<we)return 1}return 0}):b}(t,ie==null?void 0:ie.selector,Ae,tn)},[kt,ie,Ae,t,tn]),Ye=i.useMemo(()=>{if(X&&!A){const b=ne*be,I=b-be;return B.slice(I,b)}return B},[ne,X,A,be,B]),Mr=i.useCallback(b=>{Re(b)},[]),zr=i.useCallback(b=>{Re(b)},[]),Wr=i.useCallback(b=>{Re(b)},[]),Br=i.useCallback((b,I)=>Xt(b,I),[Xt]),Gr=i.useCallback((b,I)=>Qt(b,I),[Qt]),Ur=i.useCallback((b,I)=>Jt(b,I),[Jt]),Vr=i.useCallback((b,I)=>en(b,I),[en]),je=i.useCallback(b=>Re({type:"CHANGE_PAGE",page:b,paginationServer:A,visibleOnly:x,persistSelectedOnPageChange:rt}),[A,rt,x]),Yr=i.useCallback(b=>{const I=Ze(U||Ye.length,b),V=Tt(ne,I);A||je(V),Re({type:"CHANGE_ROWS_PER_PAGE",page:V,rowsPerPage:b})},[ne,je,A,U,Ye.length]);if(X&&!A&&B.length>0&&Ye.length===0){const b=Ze(B.length,be),I=Tt(ne,b);je(I)}$e(()=>{C({allSelected:mn,selectedCount:bn,selectedRows:Dt.slice(0)})},[Hr]),$e(()=>{Sr(ie,Ae,B.slice(0))},[ie,Ae]),$e(()=>{p(ne,U||B.length)},[ne]),$e(()=>{v(be,ne)},[be]),$e(()=>{je(J)},[J,ae]),$e(()=>{if(X&&A&&U>0){const b=Ze(U,be),I=Tt(ne,b);ne!==I&&je(I)}},[U]),i.useEffect(()=>{Re({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:an})},[g,an]),i.useEffect(()=>{if(!R)return;const b=B.filter(V=>R(V)),I=g?b.slice(0,1):b;Re({type:"SELECT_MULTIPLE_ROWS",keyField:a,selectedRows:I,totalRows:B.length,mergeSelections:yn})},[t,R]);const Kr=x?Ye:B,qr=rt||g||f;return i.createElement(Xo,{theme:Lr},!ue&&(!!r||!!o)&&i.createElement(Ma,{title:r,actions:o,showMenu:!Ot,selectedCount:bn,direction:Ve,contextActions:F,contextComponent:xr,contextMessage:Pt}),W&&i.createElement(Ba,{align:et,wrapContent:tt},Et),i.createElement(Ua,Object.assign({$responsive:ce,$fixedHeader:ee,$fixedHeaderScrollHeight:ve,className:Ar},Nr),i.createElement(Va,null,M&&!q&&i.createElement(Nn,null,Se),i.createElement(ra,{disabled:Z,className:"rdt_Table",role:"table"},!me&&(!!q||B.length>0&&!M)&&i.createElement(aa,{className:"rdt_TableHead",role:"rowgroup",$fixedHeader:ee},i.createElement(sa,{className:"rdt_TableHeadRow",role:"row",$dense:h},u&&(qr?i.createElement(Ue,{style:{flex:"0 0 48px"}}):i.createElement(ja,{allSelected:mn,selectedRows:Dt,selectableRowsComponent:$,selectableRowsComponentProps:S,selectableRowDisabled:O,rowData:Kr,keyField:a,mergeSelections:yn,onSelectAllRows:zr})),nt&&!rn&&i.createElement(Ya,null),cn.map(b=>i.createElement(Ia,{key:b.id,column:b,selectedColumn:ie,disabled:M||B.length===0,pagination:X,paginationServer:A,persistSelectedOnSort:wn,selectableRowsVisibleOnly:x,sortDirection:Ae,sortIcon:Cr,sortServer:kt,onSort:Mr,onDragStart:un,onDragOver:gn,onDragEnd:hn,onDragEnter:pn,onDragLeave:fn,draggingColumnId:dn})))),!B.length&&!M&&i.createElement(Ka,null,de),M&&q&&i.createElement(Nn,null,Se),!M&&B.length>0&&i.createElement(Ga,{className:"rdt_TableBody",role:"rowgroup"},Ye.map((b,I)=>{const V=We(b,a),re=function(we=""){return typeof we!="number"&&(!we||we.length===0)}(V)?I:V,w=gt(b,Dt,a),It=!!(nt&&on&&on(b)),_e=!!(nt&&nn&&nn(b));return i.createElement(Ra,{id:re,key:re,keyField:a,"data-row-id":re,columns:cn,row:b,rowCount:B.length,rowIndex:I,selectableRows:u,expandableRows:nt,expandableIcon:D,highlightOnHover:c,pointerOnHover:d,dense:h,expandOnRowClicked:$r,expandOnRowDoubleClicked:Er,expandableRowsComponent:vr,expandableRowsComponentProps:Rr,expandableRowsHideExpander:rn,defaultExpanderDisabled:_e,defaultExpanded:It,expandableInheritConditionalStyles:Or,conditionalRowStyles:Dr,selected:w,selectableRowsHighlight:y,selectableRowsComponent:$,selectableRowsComponentProps:S,selectableRowDisabled:O,selectableRowsSingle:g,striped:s,onRowExpandToggled:m,onRowClicked:Br,onRowDoubleClicked:Gr,onRowMouseEnter:Ur,onRowMouseLeave:Vr,onSelectedRow:Wr,draggingColumnId:dn,onDragStart:un,onDragOver:gn,onDragEnd:hn,onDragEnter:pn,onDragLeave:fn})}))))),Tr&&i.createElement("div",null,i.createElement(Fr,{onChangePage:je,onChangeRowsPerPage:Yr,rowCount:U||B.length,currentPage:ne,rowsPerPage:be,direction:Ve,paginationRowsPerPageOptions:ge,paginationIconLastPage:Ce,paginationIconFirstPage:fe,paginationIconNext:se,paginationIconPrevious:Ie,paginationComponentOptions:he})))});const gs=e=>{switch(e){case"Success":return"bg-green-100 text-green-800 px-2 py-1 rounded-full";case"Failed":return"bg-red-100 text-red-800 px-2 py-1 rounded-full";case"Pending":return"bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full";default:return"bg-gray-100 text-gray-800 px-2 py-1 rounded-full"}},hs=()=>{const e=[{id:1,product:"SKU-12345",status:"Success",message:"Product synced successfully",timestamp:"2025-01-29 10:15:00"},{id:2,product:"SKU-54321",status:"Failed",message:"Price update failed due to missing data",timestamp:"2025-01-29 10:16:30"},{id:3,product:"SKU-67890",status:"Pending",message:"Sync scheduled",timestamp:"2025-01-29 10:17:45"},{id:4,product:"SKU-11111",status:"Success",message:"Stock updated",timestamp:"2025-01-29 10:18:15"},{id:5,product:"SKU-22222",status:"Failed",message:"Image URL not accessible",timestamp:"2025-01-29 10:19:00"}],[t]=i.useState(e),[n,r]=i.useState(""),o=t.filter(s=>s.product.toLowerCase().includes(n.toLowerCase())||s.status.toLowerCase().includes(n.toLowerCase())||s.message.toLowerCase().includes(n.toLowerCase())),a=[{name:"ID",selector:s=>s.id,sortable:!0},{name:"Product SKU",selector:s=>s.product,sortable:!0},{name:"Sync Status",selector:s=>s.status,sortable:!0,cell:s=>He.jsx("span",{className:`badge ${gs(s.status)}`,children:s.status})},{name:"Message",selector:s=>s.message,wrap:!0},{name:"Timestamp",selector:s=>s.timestamp,sortable:!0}];return He.jsxs("div",{className:"p-6 bg-white shadow-sm rounded-lg",children:[He.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Product Sync Logs"}),He.jsx("div",{className:"flex justify-end items-center mb-4",children:He.jsx("input",{type:"text",placeholder:"Search by SKU, Status, or Message...",value:n,onChange:s=>r(s.target.value),className:"p-2 border rounded w-1/3"})}),He.jsx(ps,{columns:a,data:o,pagination:!0,highlightOnHover:!0,striped:!0})]})};export{hs as default};
