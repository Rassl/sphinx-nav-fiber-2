import{Y as f,a0 as y,a1 as L,r as h,j as e,X as t,Z as p,ab as C,e as R,a as U,aW as V,aX as g,d as G,U as J}from"./index-84f904c4.js";import{cn as X,bO as j,bJ as Y,co as q,ck as v,u as W,ch as Z,aA as H,ca as K,cj as Q}from"./index-2093139b.js";import{n as b}from"./toastMessage-2f4d9c5b.js";import{i as B,O as E,A as ee}from"./constants-87bd1147.js";import"./index-fd21ce99.js";import"./Select-5691e4c7.js";const te=({onClick:n,loading:i})=>{const d=L(l=>l.budget),[c,x]=h.useState(10),o="node";return h.useEffect(()=>{(async()=>{try{const r=await q(o);x(r.data.price)}catch(r){console.error("cannot fetch",r)}})()},[o]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(oe,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ne,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[c," sats"]})]}),e.jsxs(se,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[X(d)," sats"]})]})]}),e.jsx(t,{children:e.jsx(j,{color:"secondary","data-testid":"check-icon",disabled:i,onClick:n,size:"large",startIcon:e.jsx(Y,{}),type:"submit",variant:"contained",children:"Approve"})})]})},ne=f(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  width: 141px;
  height: 61px;
  border: 1px solid ${y.GRAY7};
  border-radius: 6px;
  padding: 16px;
  .title {
    font-family: Barlow;
    color: ${y.secondaryText4};
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    color: ${y.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
  }
`,se=f(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
  color: ${y.secondaryText4};
  .title {
    font-family: Barlow;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
  }

  .value {
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`,oe=f(p)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,re=({type:n,onNextStep:i,onPrevStep:d,name:c,sourceLink:x})=>{const o=n==="Image"?c&&x:c;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ae,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(p,{children:[n," name"]})}),e.jsx(t,{mb:12,children:e.jsx(v,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...C}})}),n==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(p,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(v,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...C}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(j,{color:"secondary",onClick:d,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(j,{color:"secondary",disabled:!o,onClick:i,size:"large",variant:"contained",children:"Next"})})]})]})},ae=f(p)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ie=({onNextStep:n,allowNextStep:i,onSelectType:d,selectedType:c})=>{const[x,o]=h.useState(B);h.useEffect(()=>{o(r=>r.value===c?r:E.find(s=>s.value===c)||B)},[c]);const l=r=>{d((r==null?void 0:r.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ce,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(ee,{onSelect:l,options:E,selectedValue:x})}),e.jsx(t,{children:e.jsx(j,{color:"secondary",disabled:!i,onClick:n,size:"large",type:"button",variant:"contained",children:"Next"})})]})},ce=f(p)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,le=async(n,i,d,c)=>{var r;const x="node",o={};o.node_type=n.nodeType,o.name=n.name,n.nodeType==="Image"&&(o.node_data={source_link:n.sourceLink});let l="";await R(async()=>{const s=await G.enable();o.pubkey=s==null?void 0:s.pubkey,l=await J()});try{const s=await U.post(`/${x}`,JSON.stringify(o),{Authorization:l});if(s.error){const{message:m}=s.error;throw new Error(m)}c(n,(r=s==null?void 0:s.data)==null?void 0:r.ref_id),b(V),i()}catch(s){let m=g;if(s.status===400){const u=await s.json();m=u.errorCode||(u==null?void 0:u.status)||g}else s instanceof Error&&(m=s.message);b(m),i()}},fe=()=>{const[n,i]=h.useState(0),{close:d,visible:c}=W("addItem"),[x]=L(a=>[a.setBudget]),o=Z({mode:"onChange"}),{watch:l,setValue:r,reset:s}=o,[m,u]=h.useState(!1),[z,I]=H(a=>[a.addNewNode,a.setSelectedNode]);h.useEffect(()=>()=>{i(0),s()},[c,s]);const w=l("nodeType"),O=l("name"),A=l("sourceLink"),P=()=>{d()},S=()=>{i(n+1)},_=()=>{i(n-1)},D=(a,F)=>{const k=F||`new-id-${Math.random()}`,T=a.nodeType.toLocaleLowerCase(),N={name:a.name,type:T,label:a.name,node_type:T,id:k,ref_id:k,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...a.sourceLink?{source_link:a.sourceLink}:{}};z(N),I(N)},M=o.handleSubmit(async a=>{u(!0);try{await le(a,P,x,D)}catch{b(g)}finally{u(!1)}}),$=a=>r("nodeType",a);return e.jsx(K,{id:"addItem",kind:"small",onClose:d,preventOutsideClose:!0,children:e.jsx(Q,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:M,children:[n===0&&e.jsx(ie,{allowNextStep:!!w,onNextStep:S,onSelectType:$,selectedType:w}),n===1&&e.jsx(re,{name:O,onNextStep:S,onPrevStep:_,sourceLink:A||"",type:w}),n===2&&e.jsx(te,{loading:m,onClick:()=>null})]})})})};export{fe as AddItemModal};