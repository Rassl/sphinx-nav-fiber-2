import{Y as N,Z as b,j as e,X as n,ab as L,r as a,a0 as v}from"./index-32144865.js";import{ck as B,u as h,cr as C,ch as k,az as z,cj as D,bO as F,aS as I,cs as M,ct as R,ca as _}from"./index-a820256c.js";import{S as A}from"./Skeleton-d791a65b.js";const O=()=>e.jsxs(n,{children:[e.jsx(n,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(n,{align:"center",direction:"row",children:e.jsx(P,{children:"Edit node name"})})}),e.jsx(n,{mb:12,children:e.jsx(B,{id:"cy-topic",maxLength:50,name:"topic",placeholder:"Node name",rules:{...L}})})]}),P=N(b)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,V=()=>{const{close:c}=h("editNodeName"),[r]=C(o=>[o.data]),l=k({mode:"onChange"}),{watch:j,setValue:d,reset:u}=l,[m,p]=a.useState(!1),[f,x]=a.useState(!1),[t,g]=a.useState(),s=z();a.useEffect(()=>(t&&d("topic",t==null?void 0:t.topic),()=>{u()}),[t,d,u]),a.useEffect(()=>{(async()=>{if(s){x(!0);try{const{data:i}=await M({search:s==null?void 0:s.name}),E=i.find(T=>T.topic===s.name);g(E)}catch(i){console.log(i)}finally{x(!1)}}})()},[s]);const y=j("topic"),S=()=>{c()},w=async()=>{p(!0);try{if(await R((t==null?void 0:t.ref_id)||"",{topic:y.trim()}),r){const o={...r};console.log(o)}S()}catch(o){console.warn(o)}finally{p(!1)}};return e.jsxs(D,{...l,children:[f?e.jsx(n,{my:24,children:e.jsx(A,{})}):e.jsx(O,{}),e.jsxs(F,{color:"secondary",disabled:m||f,onClick:w,size:"large",variant:"contained",children:["Save",m&&e.jsx(I,{color:v.BLUE_PRESS_STATE,size:10})]})]})},X=()=>{const{close:c}=h("editNodeName");return e.jsx(_,{id:"editNodeName",kind:"regular",onClose:c,preventOutsideClose:!0,children:e.jsx(V,{})})};export{X as EditNodeNameModal};