import{Y as f,a0 as y,a1 as L,r as h,j as e,X as t,Z as p,ac as C,e as R,a as U,aW as V,aX as g,d as q,U as G}from"./index-7d13a00d.js";import{cp as J,bP as j,bJ as X,cq as Y,cm as v,u as W,cj as Z,aA as H,cc as K,cl as Q}from"./index-e18b682b.js";import{n as S}from"./toastMessage-beb52b8d.js";import{i as B,O as E,A as ee}from"./constants-098283ff.js";import"./index-321b91cc.js";import"./Select-e00ee68e.js";const te=({onClick:n,loading:a})=>{const d=L(l=>l.budget),[c,m]=h.useState(10),o="node";return h.useEffect(()=>{(async()=>{try{const r=await Y(o);m(r.data.price)}catch(r){console.error("cannot fetch",r)}})()},[o]),e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(oe,{children:"Approve Cost"})})}),e.jsxs(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:[e.jsxs(ne,{children:[e.jsx("div",{className:"title",children:"COST"}),e.jsxs("div",{className:"value","data-testid":"check-price",children:[c," sats"]})]}),e.jsxs(se,{children:[e.jsx("div",{className:"title",children:"BUDGET"}),e.jsxs("div",{className:"value",children:[J(d)," sats"]})]})]}),e.jsx(t,{children:e.jsx(j,{color:"secondary","data-testid":"check-icon",disabled:a,onClick:n,size:"large",startIcon:e.jsx(X,{}),type:"submit",variant:"contained",children:"Approve"})})]})},ne=f(t).attrs({direction:"column",align:"space-between",justify:"flex-start"})`
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
`,re=({type:n,onNextStep:a,onPrevStep:d,name:c,sourceLink:m})=>{const o=n==="Image"?c&&m:c;return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:18,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ie,{children:"Enter details"})})}),e.jsx(t,{mb:4,children:e.jsxs(p,{children:[n," name"]})}),e.jsx(t,{mb:12,children:e.jsx(v,{id:"cy-item-name",maxLength:250,name:"name",placeholder:"Paste name here...",rules:{...C}})}),n==="Image"?e.jsxs(e.Fragment,{children:[e.jsx(t,{mb:4,children:e.jsx(p,{children:"Link"})}),e.jsx(t,{mb:12,children:e.jsx(v,{id:"cy-item-link",maxLength:250,name:"sourceLink",placeholder:"Paste link here...",rules:{...C}})})]}):null,e.jsxs(t,{direction:"row",children:[e.jsx(t,{grow:1,children:e.jsx(j,{color:"secondary",onClick:d,size:"large",variant:"contained",children:"Prev"})}),e.jsx(t,{grow:1,ml:20,children:e.jsx(j,{color:"secondary",disabled:!o,onClick:a,size:"large",variant:"contained",children:"Next"})})]})]})},ie=f(p)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,ae=({onNextStep:n,allowNextStep:a,onSelectType:d,selectedType:c})=>{const[m,o]=h.useState(B);h.useEffect(()=>{o(r=>r.value===c?r:E.find(s=>s.value===c)||B)},[c]);const l=r=>{d((r==null?void 0:r.label)||"")};return e.jsxs(t,{children:[e.jsx(t,{align:"center",direction:"row",justify:"space-between",mb:20,children:e.jsx(t,{align:"center",direction:"row",children:e.jsx(ce,{children:"Select Type"})})}),e.jsx(t,{direction:"row",mb:20,children:e.jsx(ee,{onSelect:l,options:E,selectedValue:m})}),e.jsx(t,{children:e.jsx(j,{color:"secondary",disabled:!a,onClick:n,size:"large",type:"button",variant:"contained",children:"Next"})})]})},ce=f(p)`
  font-size: 22px;
  font-weight: 600;
  font-family: 'Barlow';
`,le=async(n,a,d,c)=>{var r;const m="node",o={};o.node_type=n.nodeType,o.name=n.name,n.nodeType==="Image"&&(o.node_data={source_link:n.sourceLink});let l="";await R(async()=>{const s=await q.enable();o.pubkey=s==null?void 0:s.pubkey,l=await G()});try{const s=await U.post(`/${m}`,JSON.stringify(o),{Authorization:l});if(s.error){const{message:x}=s.error;throw new Error(x)}c(n,(r=s==null?void 0:s.data)==null?void 0:r.ref_id),S(V),a()}catch(s){let x=g;if(s.status===400){const u=await s.json();x=u.errorCode||(u==null?void 0:u.status)||g}else s instanceof Error&&(x=s.message);S(x),a()}},fe=()=>{const[n,a]=h.useState(0),{close:d,visible:c}=W("addItem"),[m]=L(i=>[i.setBudget]),o=Z({mode:"onChange"}),{watch:l,setValue:r,reset:s}=o,[x,u]=h.useState(!1),[z,I]=H(i=>[i.addNewNode,i.setSelectedNode]);h.useEffect(()=>()=>{a(0),s()},[c,s]);const w=l("nodeType"),P=l("name"),A=l("sourceLink"),O=()=>{d()},b=()=>{a(n+1)},_=()=>{a(n-1)},D=(i,F)=>{const k=F||`new-id-${Math.random()}`,T=i.nodeType.toLocaleLowerCase(),N={name:i.name,type:T,label:i.name,node_type:T,id:k,ref_id:k,x:Math.random(),y:Math.random(),z:Math.random(),date:parseInt((new Date().getTime()/1e3).toFixed(0),10),weight:4,...i.sourceLink?{source_link:i.sourceLink}:{}};z(N),I(N)},M=o.handleSubmit(async i=>{u(!0);try{await le(i,O,m,D)}catch{S(g)}finally{u(!1)}}),$=i=>r("nodeType",i);return e.jsx(K,{id:"addItem",kind:"small",onClose:d,preventOutsideClose:!0,children:e.jsx(Q,{...o,children:e.jsxs("form",{id:"add-node-form",onSubmit:M,children:[n===0&&e.jsx(ae,{allowNextStep:!!w,onNextStep:b,onSelectType:$,selectedType:w}),n===1&&e.jsx(re,{name:P,onNextStep:b,onPrevStep:_,sourceLink:A||"",type:w}),n===2&&e.jsx(te,{loading:x,onClick:()=>null})]})})})};export{fe as AddItemModal};