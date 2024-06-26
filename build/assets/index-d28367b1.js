import{aT as bi,r as P,f as S,h as y,i as ce,j as s,l as Ue,F as g,T as X,N as $t,k as me,aU as sr,aV as ji,x as ar,o as Ci,aW as Si,O as vi,a3 as pe,a1 as Ei,aX as dn,ac as Ti,aY as Ii,I as Ai}from"./index-84e6feed.js";import{m as Pi,n as mt,A as ge,B as ue,f as zi,I as ur,h as at,i as cr,o as ut,P as Ht,C as Vt,p as _i,k as pr,d as Li,S as Bi}from"./react-toastify.esm-7ad05984.js";import{C as hr}from"./CheckIcon-67b38dee.js";import{C as dr}from"./ChevronDownIcon-a3e447bd.js";import{d as Oi}from"./ChevronUpIcon-4639abc8.js";import{F as fr,a as Mi,T as Ri}from"./Popover-7417499b.js";import{G as xr,L as Ut,B as Gt,H as Di,M as Fi,R as Ni,a as $i,S as Hi,b as Vi,N as mr,C as Ui,D as gr,c as yr,d as Gi,f as Yi,g as wr,e as qi,P as Wi,h as kr,s as fn,V as Qi,F as Xi,E as Zi,i as Ki,j as Ji,k as br,l as eo}from"./ChevronRightIcon-cc37cb2b.js";import{S as to}from"./index-e0d162b1.js";import{f as rt,o as jr,P as Cr,n as no,X as ro,Y as io,T as oo,D as lo,S as Yt,q as Sr}from"./generateCategoricalChart-2d4999d3.js";import{T as We}from"./index-7bf1e3d0.js";import{S as so}from"./Skeleton-4d2f8239.js";import{g as ao,d as uo}from"./index.esm-7bc36a0c.js";import{I as co,S as po,O as ho}from"./Select-29dc5995.js";import{I as fo}from"./InfoIcon-d232d482.js";import{P as xo}from"./PlusIcon-743a5026.js";import{u as Pt}from"./index-b5061f1d.js";import{B as mo}from"./index-7a17970d.js";import"./index-0dbd6808.js";import"./useSlotProps-d59d983c.js";const go=(e,t="down")=>{const n=bi(),[r,i]=P.useState(!1),o=n.breakpoints[t](e).split("@media")[1].trim();return P.useEffect(()=>{const l=()=>{const{matches:a}=window.matchMedia(o);i(a)};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[o]),r},yo=e=>e.filter(t=>t.tldr).length>=2&&e.some(t=>t.audio_EN);function wo(e){return e.tldr_topic??e.topic}var it=globalThis&&globalThis.__assign||function(){return it=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},it.apply(this,arguments)},ko=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},bo=Pi("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");function jo(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?"#000000":r,o=e.speedMultiplier,l=o===void 0?1:o,a=e.cssOverride,c=a===void 0?{}:a,u=e.size,p=u===void 0?15:u,d=e.margin,f=d===void 0?2:d,h=ko(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),w=it({display:"inherit"},c),k=function(T){return{display:"inline-block",backgroundColor:i,width:mt(p),height:mt(p),margin:mt(f),borderRadius:"100%",animation:"".concat(bo," ").concat(.7/l,"s ").concat(T%2?"0s":"".concat(.35/l,"s")," infinite linear"),animationFillMode:"both"}};return n?P.createElement("span",it({style:w},h),P.createElement("span",{style:k(1)}),P.createElement("span",{style:k(2)}),P.createElement("span",{style:k(3)})):null}const Co=()=>{var d;const[e,t]=P.useState(null),{sidebarFilter:n,setSidebarFilter:r,sidebarFilterCounts:i}=ce(f=>f),o=n==="undefined"?"Other":n,l=((d=i.find(f=>f.name===o))==null?void 0:d.count)||0,a=f=>f?f.charAt(0).toUpperCase()+f.slice(1):"",c=f=>{t(f.currentTarget)},u=()=>{t(null)},p=f=>{r(f),u()};return s.jsxs("div",{children:[s.jsxs(So,{onClick:c,children:[s.jsx("div",{className:"text",children:"Show"}),s.jsx("div",{className:"value","data-testid":"value",children:`${a(o)} (${l})`}),s.jsx("div",{className:"icon",children:e?s.jsx(Oi,{}):s.jsx(dr,{})})]}),s.jsx(Eo,{anchorEl:e,anchorOrigin:{vertical:"bottom",horizontal:"left"},anchorPosition:{top:62,left:0},onClose:u,open:!!e,transformOrigin:{vertical:"top",horizontal:"left"},children:s.jsx(fr,{children:i.map(({name:f,count:h})=>s.jsxs(vo,{className:Ue({active:f===n}),onClick:()=>p(f),children:[s.jsx("span",{className:"icon",children:f===n?s.jsx(hr,{}):null}),s.jsx("span",{children:`${a(f)} (${h})`})]},f))})})]})},So=S(g).attrs({direction:"row",align:"center"})`
  cursor: pointer;
  flex-grow: 1;
  color: ${y.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  padding: 0 8px;
  .value,
  .icon {
    color: ${y.white};
  }

  .value {
    margin: 0 8px 0 4px;
  }
`,vo=S(g).attrs({direction:"row",align:"center"})`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  color: ${y.GRAY3};
  height: 27px;
  cursor: pointer;
  &.active {
    color: ${y.white};
  }
  &:hover {
    color: ${y.white};
  }

  .icon {
    margin-right: 8px;
    width: 9px;
    font-size: 10px;
  }
`,Eo=S(Mi)`
  .MuiPaper-root {
    background: ${y.BUTTON1};
    min-width: 149px;
    padding: 16px;
    color: ${y.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }
`,gt=[["Searching","Podcast Index"],["Searching","YouTube"],["Searching","Twitter Spaces"],["Finding","Transcripts"],["Loading","Audio Clips"],["Loading","Video Clips"],["Preparing","Results"]],To=()=>{const[e,t]=P.useState(0);return P.useEffect(()=>{if(e===gt.length-1)return;const n=setTimeout(()=>t(r=>(r+1)%gt.length),2e3);return()=>clearTimeout(n)},[e]),s.jsx(Io,{direction:"column",children:gt.map((n,r)=>s.jsxs(g,{className:Ue("raw-wrapper",{show:e===r}),direction:"row",children:[s.jsx("div",{className:Ue("action"),children:n[0]}),s.jsx("div",{className:Ue("entity"),children:n[1]}),s.jsx("div",{children:s.jsx(jo,{color:y.SECONDARY_BLUE,size:2})})]},n[1]))})},Io=S(g)`
  overflow: hidden;
  height: 20px;
  position: relative;
  .action {
    color: ${y.white};
    margin-right: 8px;
  }

  .raw-wrapper {
    height: 0;
    overflow: hidden;
    transition: height 0.7s ease-in-out;
    align-items: flex-end;
    &.show {
      height: 20px;
    }
  }

  .entity {
    color: ${y.SECONDARY_BLUE};
  }
`,Ao=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsxs("g",{id:"browse_gallery",children:[s.jsx("mask",{id:"mask0_1360_27257",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:s.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_1360_27257)",children:s.jsx("path",{id:"browse_gallery_2",d:"M11.8 15.8442L12.8442 14.8L9.74998 11.7026V7.25003H8.25003V12.2942L11.8 15.8442ZM18 19.9615V18.3C19.2333 17.7167 20.2083 16.8583 20.925 15.725C21.6417 14.5917 22 13.35 22 12C22 10.65 21.6417 9.40834 20.925 8.27501C20.2083 7.14167 19.2333 6.28334 18 5.70001V4.03851C19.6628 4.67184 20.9952 5.71318 21.9971 7.16253C22.999 8.61188 23.5 10.2244 23.5 12C23.5 13.7756 22.999 15.3881 21.9971 16.8375C20.9952 18.2868 19.6628 19.3282 18 19.9615ZM9.00055 20.5C7.8207 20.5 6.71539 20.2769 5.68463 19.8307C4.65386 19.3846 3.75514 18.7782 2.98848 18.0115C2.22181 17.2449 1.61541 16.3463 1.16927 15.3159C0.723092 14.2855 0.5 13.1804 0.5 12.0006C0.5 10.8207 0.723083 9.7154 1.16925 8.68463C1.6154 7.65386 2.2218 6.75515 2.98845 5.98848C3.75512 5.22183 4.65365 4.61543 5.68405 4.16928C6.71445 3.72311 7.81957 3.50003 8.99942 3.50003C10.1793 3.50003 11.2846 3.72311 12.3154 4.16928C13.3461 4.61543 14.2448 5.22183 15.0115 5.98848C15.7782 6.75515 16.3846 7.65368 16.8307 8.68408C17.2769 9.71448 17.5 10.8196 17.5 11.9995C17.5 13.1793 17.2769 14.2846 16.8307 15.3154C16.3846 16.3461 15.7782 17.2449 15.0115 18.0115C14.2448 18.7782 13.3463 19.3846 12.3159 19.8307C11.2855 20.2769 10.1804 20.5 9.00055 20.5ZM9 19C10.95 19 12.6042 18.3208 13.9625 16.9625C15.3208 15.6042 16 13.95 16 12C16 10.05 15.3208 8.39584 13.9625 7.03751C12.6042 5.67917 10.95 5.00001 9 5.00001C7.05 5.00001 5.39583 5.67917 4.0375 7.03751C2.67917 8.39584 2 10.05 2 12C2 13.95 2.67917 15.6042 4.0375 16.9625C5.39583 18.3208 7.05 19 9 19Z",fill:"currentColor"})})]})}),Po=e=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",children:[s.jsx("mask",{id:"mask0_2638_2680",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20",children:s.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_2638_2680)",children:s.jsx("path",{d:"M9.99732 16C9.90858 16 9.82421 15.985 9.74419 15.9551C9.66418 15.9252 9.5909 15.8765 9.52435 15.8091L6.18835 12.4277C6.06278 12.3004 6 12.1406 6 11.9483C6 11.7559 6.06278 11.5961 6.18835 11.4689C6.32145 11.3315 6.48099 11.2648 6.66697 11.2686C6.85295 11.2724 7.00873 11.3392 7.13429 11.4689L9.32114 13.674V4.68539C9.32114 4.49306 9.3864 4.33074 9.51692 4.19845C9.64744 4.06615 9.80758 4 9.99732 4C10.1871 4 10.3472 4.06615 10.4777 4.19845C10.6082 4.33074 10.6735 4.49306 10.6735 4.68539V13.674L12.849 11.4689C12.9845 11.3315 13.1447 11.2629 13.3294 11.2629C13.5143 11.2629 13.6744 11.3315 13.8099 11.4689C13.9378 11.6062 14.0012 11.7685 14 11.9558C13.9988 12.1431 13.9354 12.3004 13.8099 12.4277L10.4738 15.8091C10.4073 15.8765 10.3334 15.9252 10.2522 15.9551C10.171 15.985 10.0861 16 9.99732 16Z",fill:"currentColor"})})]}),zo=S(g)`
  overflow-y: auto;
  overflow-x: hidden;
  background: ${y.body};
`,_o=({imageUrl:e,name:t})=>s.jsxs(g,{align:"center",direction:"row",children:[e&&s.jsx(Lo,{children:s.jsx(ge,{rounded:!0,size:64,src:e||"",type:"image"})}),t&&s.jsx(Bo,{children:t})]}),Lo=S(g)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Bo=S(g)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,Oo=({text:e,type:t,sourceLink:n})=>s.jsxs(g,{direction:"column",children:[s.jsx(g,{align:"center",direction:"row",children:s.jsx(We,{type:t})}),s.jsx(zt,{"data-testid":"episode-description",children:e}),s.jsx(g,{align:"center",direction:"row",justify:"flex-start",children:n&&s.jsxs(Mo,{href:n,onClick:r=>r.stopPropagation(),target:"_blank",children:[s.jsx(xr,{}),s.jsx(Ro,{children:n})]})})]}),Mo=S.a`
  color: ${y.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,Ro=S(X)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${y.GRAY6};
  font-family: Barlow;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,Do=({title:e,imageUrl:t,name:n})=>s.jsxs(g,{align:"center",direction:"row",children:[s.jsx(Fo,{children:s.jsx(ge,{rounded:!0,size:64,src:t||"",type:"person"})}),(e||n)&&s.jsx(No,{children:e||n})]}),Fo=S(g)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,No=S(g)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
`,$o=({text:e,imageUrl:t,date:n,twitterHandle:r,name:i,verified:o})=>s.jsxs(g,{direction:"column",children:[s.jsxs(g,{align:"center",direction:"row",pr:16,children:[s.jsx(Ho,{children:s.jsx(ge,{rounded:!0,size:27,src:t||"",type:"person"})}),s.jsxs(g,{children:[s.jsxs(Vo,{align:"center",direction:"row",children:[i,o&&s.jsx("div",{className:"verification",children:s.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),r&&s.jsxs(Uo,{children:["@",r]})]})]}),s.jsxs(g,{grow:1,shrink:1,children:[s.jsx(Go,{"data-testid":"episode-description",children:e}),s.jsx(g,{"data-testid":"date-text",direction:"row",justify:"flex-start",children:!!n&&s.jsx(ct,{children:$t.unix(n).fromNow()})})]})]}),Ho=S(g)`
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,Vo=S(g)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.2px;
  .verification {
    margin-left: 4px;
  }
`,Uo=S(g)`
  color: ${y.GRAY7};
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
`,Go=S(g)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: 0.2px;
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`,Yo=S(g).attrs({direction:"column"})`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${y.BG1};

  .type-image {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .booster__pill {
    margin-right: 0;
    margin-top: 8px;
  }
  .player-controls {
    margin-left: 4px;
  }
`,vr=({boostCount:e,date:t,episodeTitle:n,isSelectedView:r=!1,imageUrl:i,showTitle:o,type:l,text:a,name:c,sourceLink:u,verified:p=!1,twitterHandle:d,className:f="episode-wrapper",onClick:h})=>{const w=l==="show"?o:n,k=l==="show"?"":o,T=["tweet","person","guest","topic","document"],b=l==="youtube"?"video":"audio";return l?s.jsx(Yo,{className:f,onClick:h,children:T.includes(l)?s.jsxs(s.Fragment,{children:[l==="topic"&&s.jsxs(qo,{children:[s.jsx(Di,{}),s.jsx("p",{children:k})]}),["person","guest"].includes(l)&&s.jsx(Do,{imageUrl:i,name:c||"",title:o||""}),["image"].includes(l)&&s.jsx(_o,{imageUrl:u,name:c||""}),l==="tweet"&&s.jsx($o,{date:t,imageUrl:i,name:c||"",text:a||"",twitterHandle:d,verified:p}),l==="document"&&s.jsx(Oo,{sourceLink:u||"",text:a||"",type:l})]}):s.jsxs(g,{direction:"row",children:[!r&&s.jsx(g,{align:"center",pr:16,children:s.jsx(ge,{size:64,src:i||`${b}_default.svg`,type:l||""})}),s.jsxs(g,{grow:1,shrink:1,children:[s.jsxs(g,{align:"center",direction:"row",justify:"space-between",children:[s.jsx(g,{align:"center",direction:"row",children:l&&s.jsx(We,{type:l})}),l==="youtube"&&u?s.jsx(Qo,{href:`${u}?open=system`,onClick:C=>C.stopPropagation(),children:s.jsx(Ut,{})}):null]}),s.jsx(zt,{"data-testid":"episode-name",children:c}),s.jsx(zt,{"data-testid":"episode-description",children:w}),s.jsxs(g,{align:"center",direction:"row",justify:"flex-start",children:[!!t&&s.jsx(ct,{children:$t.unix(t).fromNow()}),!!k&&s.jsx(Wo,{children:k}),!r&&e>0&&s.jsx(g,{style:{marginLeft:"auto"},children:s.jsx(Gt,{amt:e})})]})]})]})}):null},zt=S(g)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  color: ${y.white};
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  letter-spacing: 0.2px;
`,ct=S(X)`
  overflow: hidden;
  color: ${y.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
  letter-spacing: 0.2pt;
`,qo=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    color: ${y.mainBottomIcons};
    margin-right: 10px;
    align-self: center;
  }

  p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    overflow: hidden;
    color: var(--Primary-Text, #fff);
    leading-trim: both;
    text-edge: cap;
    text-overflow: ellipsis;
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    margin: 0;
  }
`,Wo=S(ct)`
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  position: relative;
  padding-left: 12px;
  &:before {
    content: '';
    display: block;
    border-radius: 2px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2px;
    width: 4px;
    flex-shrink: 0;
    height: 4px;
    background: ${y.GRAY6};

    margin-top: 20px;
  }

  &.is-show {
    margin: 20px 0px;
    padding: 0px;
    color: var(--Primary-Text, #fff);
    leading-trim: both;
    text-edge: cap;
    font-family: Barlow;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 17px; /* 130.769% */
  }
`,Qo=S.a`
  color: ${y.GRAY6};
  font-size: 16px;
  height: 16px;
`,Xo=({isSearchResult:e})=>{const t=P.useRef(null),n=e?80:10,{setSelectedNode:r,setSelectedTimestamp:i}=ce(b=>b),{currentSearch:o,setSidebarOpen:l,setRelevanceSelected:a}=me(b=>b),[c,u]=P.useState(0),p=sr(),f=c*n+n,h=p&&p.length>0?p.length-1>f:!1,w=go("sm","down"),k=P.useCallback(b=>{ji(b),i(b),a(!0),r(b),w&&l(!1)},[r,a,l,i,w]),T=P.useMemo(()=>{if(p){const b=[...p].sort((C,I)=>(I.date||0)-(C.date||0));return o&&b.sort((C,I)=>{const F=C.node_type==="topic"&&C.name.toLowerCase()===o.toLowerCase()?1:0;return(I.node_type==="topic"&&I.name.toLowerCase()===o.toLowerCase()?1:0)-F}),b.slice(0,f)}return[]},[p,o,f]);return s.jsx(s.Fragment,{children:s.jsxs(zo,{ref:t,id:"search-result-list",shrink:1,children:[(T??[]).map((b,C)=>{const{image_url:I,date:F,boost:M,type:v,episode_title:$,show_title:q,node_type:z,text:O,source_link:L,link:_,name:U,verified:H=!1,twitter_handle:B}=b||{};return s.jsx(vr,{boostCount:M||0,date:F||0,episodeTitle:rt($),imageUrl:I||"",link:_,name:U||"",onClick:()=>{k(b)},showTitle:rt(q),sourceLink:L,text:O||"",twitterHandle:B,type:z||v,verified:H},C.toString())}),s.jsx(Ko,{align:"center",background:"BG1",direction:"row",justify:"center",children:h&&s.jsx(ue,{onClick:()=>{h&&u(c+1)},size:"medium",children:"Load More"})})]})})},Zo=P.memo(Xo),Ko=S(g)`
  flex: 0 0 86px;
`,Jo=({isSearchResult:e})=>{const{nodeCount:t,setNodeCount:n,setBudget:r}=ar(l=>l),{fetchData:i}=ce(l=>l),o=async()=>{t<1||(await i(r,{skip_cache:"true"}),n("CLEAR"))};return s.jsxs(nl,{children:[!e&&s.jsxs("div",{className:"heading-container",children:[s.jsxs("div",{className:"heading",children:[s.jsx("span",{className:"heading__title",children:"Latest"}),s.jsx("span",{className:"heading__icon",children:s.jsx(Ao,{})})]}),t?s.jsx("div",{className:"button_container",children:s.jsx(el,{className:"button",onClick:o,startIcon:s.jsx(Po,{}),children:`See Latest (${t})`})}):null]}),s.jsx(Zo,{isSearchResult:e})]})},el=S(ue)`
  && {
    width: 100%;
    margin-top: 1.2rem;
    font-weight: 500;
    .MuiButton-startIcon {
      color: ${y.GRAY6};
    }
  }
`,tl=P.memo(Jo),nl=S(g)`
  .heading-container {
    display: flex;
    flex-direction: column;
    padding: 16px 24px 16px 24px;
  }

  .heading {
    color: ${y.GRAY6};
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 1.12px;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    &__icon {
      margin-left: 14px;
      margin-bottom: -2px;
      font-size: 24px;
    }
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;

    &-item {
      padding: 18px 16px 18px 24px;
      overflow: hidden;
      color: ${y.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${y.SECONDARY_BLUE};
      }

      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${y.PRIMARY_BLUE};
      }
    }
  }
`,rl=S(g).attrs({direction:"column"})`
  padding: 24px;
  cursor: pointer;
  border-top: 1px solid #101317;
  background: ${y.BG1};

  .type-image {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .booster__pill {
    margin-right: 0;
    margin-top: 8px;
  }
  .player-controls {
    margin-left: 4px;
  }

  .title {
    margin: 20px 0 8px;
  }
`,Ze=S(so)`
  && {
    background: rgba(0, 0, 0, 0.15);
  }
`,il=()=>s.jsx(s.Fragment,{children:Array(7).fill(null).map((e,t)=>s.jsx(rl,{children:s.jsxs(g,{direction:"row",children:[s.jsx(g,{align:"center",pr:16,children:s.jsx(Ze,{animation:"wave",height:64,variant:"rectangular",width:64})}),s.jsxs(g,{grow:1,shrink:1,children:[s.jsx(Ze,{height:10,variant:"rectangular",width:56}),s.jsx(Ze,{className:"title",height:10,variant:"rectangular",width:262}),s.jsx(Ze,{height:10,variant:"rectangular",width:149})]})]})},t))});S(g)`
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  color: ${y.white};
  margin: 16px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to two lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`;const ol=S(X)`
  overflow: hidden;
  color: ${y.GRAY6};
  text-overflow: ellipsis;
  font-family: Barlow;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-right: 8px;
  flex-shrink: 0;
`;S(ol)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:before {
    content: '';
    display: block;
    border-radius: 2px;
    margin-right: 8px;
    width: 4px;
    flex-shrink: 0;
    height: 4px;
    background: ${y.GRAY6};
  }
`;const ll=48,sl=8,al={PaperProps:{style:{maxHeight:ll*4.5+sl,width:250}}},ul=["Beginner","Intermediate","Advanced","Expert"],cl=()=>{const e=ce(C=>C.data),[t,n]=P.useState(""),[r,i]=P.useState("Beginner"),o=me(C=>C.currentSearch),l=zi(),[a]=ar(C=>[C.setBudget]),[c,u,p,d,f]=jr(C=>[C.askedQuestions,C.askedQuestionsAnswers,C.setAskedQuestion,C.setAskedQuestionAnswer,C.hasQuestionInProgress]),h=P.useCallback(C=>{d(C.answer)},[d]);P.useEffect(()=>{l&&h&&l.on("askquestionhook",h)},[h,l]);const w=async()=>{t&&(p(t),n(""));try{const C=e==null?void 0:e.nodes.filter(M=>M.text),I=C==null?void 0:C.slice(0,5),F=(I!=null&&I.length?I.map(M=>M.text).join(" "):"").substring(0,2500).replace(/[?&=+/#]/g,M=>`\\${M}`);o&&(await Ci.enable(),await Si({expertise_level:r,question_text:t,search_term:o,transcripts:F},a),await vi(a))}catch(C){console.error(C)}},k=r&&t.trim()&&!f,T=C=>{i(C.target.value)},b=async C=>{if(f){C.preventDefault();return}C.keyCode===13&&C.shiftKey===!1&&k&&(C.preventDefault(),w())};return s.jsxs(pl,{children:[s.jsx(g,{children:s.jsx(g,{children:s.jsxs(fr,{component:"div",children:[s.jsx(dl,{id:"select-label",size:"small",children:"Expertise level"}),s.jsx(fl,{id:"demo-multiple-name",input:s.jsx(ho,{label:"Expertise level"}),labelId:"select-label",MenuProps:al,onChange:T,size:"small",value:r,children:ul.map(C=>s.jsx(Fi,{component:"li",value:C,children:C},C))})]})})}),s.jsx(gl,{children:c==null?void 0:c.map((C,I)=>s.jsxs(g,{className:"response",py:12,children:[s.jsx(X,{kind:"medium",children:C}),s.jsx(g,{py:12,children:(u==null?void 0:u[I])!==void 0?s.jsx(X,{color:"unreadMsgText",children:u[I]}):s.jsxs(g,{align:"center",py:12,children:[s.jsx(g,{align:"center",py:12,children:s.jsx(Cr,{color:y.white})}),s.jsx(g,{align:"center",py:12,children:s.jsx(X,{children:"Generating response"})})]})})]},C))}),s.jsxs(xl,{onKeyDown:b,py:12,tabIndex:-1,children:[s.jsx(hl,{disabled:f,onChange:C=>n(C.target.value),placeholder:"Enter your question",value:t}),s.jsx(ml,{children:s.jsx(ao,{color:k?y.white:y.gray300,size:"18"})})]})]})},pl=S.div`
  margin-top: 20px;
`,hl=S(Ri)`
  background: ${y.inputBg1};
  max-width: 100%;
  color: ${y.secondaryText4};
  padding: 16px 8px;
  border: none;
  outline: none;
`,dl=S(co)`
  &.MuiFormLabel-root.MuiInputLabel-root {
    color: ${y.secondaryText4};
  }
`,fl=S(po)`
  .MuiInputBase-root {
    color: blue;
  }
  background: ${y.inputBg1};

  .MuiSvgIcon-root {
    color: ${y.white};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiSelect-select {
    color: ${y.white};
  }
`,xl=S(g)`
  position: relative;
`,ml=S(g)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: rotate(-45deg);
`,gl=S(g)`
  flex-shrink: 1;
  overflow: auto;

  .response {
    border-bottom: 1px solid ${y.divider2};
  }
`,xn=({text:e})=>s.jsxs(g,{align:"center",justify:"center",py:12,children:[s.jsx(g,{align:"center",py:12,children:s.jsx(Cr,{color:y.white})}),s.jsx(g,{align:"center",py:12,children:s.jsx(X,{children:e})})]}),yl=()=>{const[e,t,n,r]=jr(o=>[o.teachMeAnswer,o.hasTeachingInProgress,o.instgraphAnswser,o.hasInstagraphInProgress]),i=!r&&!!(n!=null&&n.edges)&&!!(n!=null&&n.nodes);return s.jsxs(s.Fragment,{children:[i?s.jsx(Ni,{edges:n==null?void 0:n.edges,nodes:n==null?void 0:n.nodes}):s.jsx(xn,{text:"Generating instagraph"}),t?s.jsx(xn,{text:"Generating tutorial"}):s.jsxs(s.Fragment,{children:[s.jsx(wl,{children:s.jsx(X,{children:e})}),s.jsx(cl,{})]})]})};S(ue)``;const wl=S(g)`
  padding-left: 10px;
  padding-right: 10px;
`,kl=({cx:e,cy:t})=>s.jsx(lo,{cx:e,cy:t,fill:y.blueTextAccent,r:2}),bl=()=>{const e=pe(),t=[...(e==null?void 0:e.data)||[]].sort((i,o)=>(i.year||0)-(o.year||0)),n=t.map(i=>i.year).filter(i=>i),r=t.map(i=>i.rate).filter(i=>i);return s.jsx(jl,{direction:"column",px:24,py:16,children:s.jsx($i,{height:"100%",width:"100%",children:s.jsxs(Hi,{margin:{bottom:20,left:20,right:20,top:20},children:[s.jsx(no,{stroke:"#f5f5f5"}),s.jsx(ro,{dataKey:"year",domain:[Math.min(...n),Math.max(...n)],label:{fill:y.white,fontSize:"12px",offset:-10,position:"insideBottom",value:e.x_axis_name},name:"X",tick:{fill:y.white,fontSize:"8px"},type:"number"}),s.jsx(io,{color:"#000",dataKey:"rate",domain:[Math.min(...r),Math.max(...r)],label:{angle:-90,fill:y.white,fontSize:"12px",offset:0,position:"insideLeft",value:e.y_axis_name},name:"Y",tick:{fill:y.white,fontSize:"8px"},type:"number"}),s.jsx(oo,{cursor:{strokeDasharray:"3 3"}}),s.jsx(Vi,{data:t,fill:y.blueTextAccent,line:!0,name:"A scatter",shape:s.jsx(kl,{})})]})})})},jl=S(g)`
  width: 100%;
  height: 100%;
`;function pt(e,t){if(!(t!=null&&t.trim()))return e;const n=new RegExp(`(${t})`,"gi"),r=e.split(n);return s.jsx(s.Fragment,{children:r.map((i,o)=>n.test(i)?s.jsx(Cl,{children:i},o):i)})}const Cl=S.span`
  background-color: rgba(0, 123, 255, 0.4);
  padding: 2;
  margin: 0;
  border-radius: 3px;
  color: inherit;
`,Sl=({stateless:e,node:t,searchTerm:n})=>s.jsxs(g,{grow:1,shrink:1,children:[s.jsx(El,{children:e&&s.jsxs(vl,{children:[s.jsx("div",{className:"icon",children:s.jsx(mr,{})}),s.jsx("div",{className:"title",children:"Description"})]})}),s.jsx(X,{children:t!=null&&t.description?pt(t.description,n):"..."})]}),vl=S(g).attrs({direction:"row",align:"center"})`
  .icon {
    font-size: 16px;
    color: ${y.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${y.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`,El=S(g).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,Tl=S.span`
  color: ${y.white};
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`,Il=({stateless:e,node:t})=>{var k;const[n,r]=me(T=>[T.transcriptIsOpen,T.setTranscriptOpen]),[i,o]=P.useState(!1),[l,a]=P.useState(""),[c,u]=P.useState(!1);if(!e&&!n)return null;const p="https://knowledge-graph.sphinx.chat",d=async T=>{try{const b=await fetch(`${p}/node/text/${T}`);if(!b.ok)throw new Error("Network response was not ok");const C=await b.json();a(C.data.text),u(!0)}catch(b){console.error("Error fetching full transcript",b)}},f=()=>{w(t==null?void 0:t.text),setTimeout(()=>{o(!1)},2e3)},h=()=>{c?u(!1):t!=null&&t.ref_id&&d(t.ref_id)},w=T=>{T!==void 0&&(navigator.clipboard.writeText(T),o(!0))};return s.jsxs(g,{grow:1,shrink:1,children:[s.jsxs(Pl,{children:[e&&s.jsxs(Al,{children:[s.jsx("div",{className:"icon",children:s.jsx(mr,{})}),s.jsx("div",{className:"title",children:"Transcript"})]}),t!=null&&t.text?s.jsx(s.Fragment,{children:i?s.jsxs(Ll,{align:"center",direction:"row",justify:"flex-start",children:[s.jsx("div",{className:"icon",children:s.jsx(hr,{})}),s.jsx("div",{className:"text",children:"Copied"})]}):s.jsx(ue,{endIcon:s.jsx(Ui,{}),onPointerDown:()=>f(),size:"small",variant:"outlined",children:"Copy"})}):s.jsx("div",{}),!e&&s.jsx(zl,{onClick:()=>{r(!1)},children:s.jsx(uo,{fontSize:35})})]}),s.jsxs(_l,{children:[c?l:`${(k=t==null?void 0:t.text)==null?void 0:k.substring(0,100)}...`,s.jsx(Tl,{onClick:h,children:c?"less":"more"})]})]})},Al=S(g).attrs({direction:"row",align:"center"})`
  .icon {
    font-size: 16px;
    color: ${y.GRAY3};
    margin-right: 7px;
  }

  .title {
    color: ${y.white};
    font-family: Barlow;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1pt;
    text-transform: uppercase;
  }
`,Pl=S(g).attrs({direction:"row",align:"center",justify:"space-between"})`
  margin-bottom: 18px;
`,zl=S(g).attrs({})`
  color: ${y.mainBottomIcons};
  cursor: pointer;
  &:hover {
    color: ${y.lightBlue500};
  }
`,_l=S(g)`
  color: ${y.white};
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-family: Barlow;
  letter-spacing: 0.2pt;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px;
`,Ll=S(g)`
  color: ${y.SECONDARY_BLUE};
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  height: 28px;
  padding: 0 20px;
  .text {
    margin-left: 5px;
  }

  .icon {
    font-size: 12px;
  }
`,Er=({node:e})=>{const t=ce(k=>k.selectedNode),n=me(k=>k.currentSearch),{link:r,image_url:i,date:o,boost:l,node_type:a,type:c,id:u,show_title:p,episode_title:d,ref_id:f}=e||t||{},[h,w]=P.useState(l||0);return t?s.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:s.jsxs(Bl,{children:[s.jsx(Ml,{boostCount:h||0,date:o||0,episodeTitle:rt(d),imageUrl:i,isSelectedView:!0,link:r,onClick:()=>null,showTitle:p,type:a||c}),s.jsx(yt,{}),s.jsxs(Ol,{children:[s.jsx(Gt,{amt:h}),s.jsx(yr,{content:t,count:h,refId:f,updateCount:w})]}),s.jsx(yt,{}),s.jsx(mn,{children:s.jsx(Sl,{node:t,searchTerm:n,stateless:!0})}),s.jsx(yt,{}),s.jsx(mn,{children:s.jsx(Il,{node:t,stateless:!0},u)})]})}):null},Bl=S(g)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: -1;
`,Ol=S(g)`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 18px 18px;
`,mn=S(g)`
  padding: 18px 18px 18px;
`,Ml=S(vr)`
  & {
    border-top: none;
    padding-bottom: 18px;
    font-size: 16px;
  }
`,yt=S(gr)`
  margin: auto 0px 2px 0px;
  opacity: 75%;
`,Rl=S(g)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.2);

  .episode-title {
    font-size: 20px;
    font-weight: 600;
    color: ${y.white};
  }

  .show {
    cursor: pointer;
    &__title {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      color: ${y.white};
      margin-left: 8px;
    }
  }
`,Dl=({selectedNodeShow:e})=>{const[t,n]=ce(o=>[o.selectedNode,o.setSelectedNode]),{type:r}=t||{},i=me(o=>o.currentSearch);return s.jsxs(Rl,{p:20,children:[s.jsx(g,{align:"flex-start",children:r&&s.jsx(We,{type:r})}),s.jsx(g,{direction:"row",mb:22,mt:22,children:s.jsx(g,{grow:1,shrink:1,children:s.jsx(X,{className:"episode-title",kind:"heading",children:pt((t==null?void 0:t.episode_title)||"Unknown",i)})})}),e?s.jsxs(g,{className:"show",direction:"row",onClick:()=>n(e),children:[s.jsx(ge,{size:16,src:(e==null?void 0:e.image_url)||"",type:"show"}),s.jsx(X,{className:"show__title",color:"mainBottomIcons",kind:"regular",children:e==null?void 0:e.show_title})]}):null]})},Fl="Flow 1",Nl=0,$l=12,Hl=15,Vl={g:"LottieFiles Figma v45"},Ul=[{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[13.5,9],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[13.5,6],t:58},{s:[13.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:1},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,5],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,3],t:58},{s:[1.5,3],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,9],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,6],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[7.5,7],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[7.5,9],t:58},{s:[7.5,9],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,10],[0,10]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:2},{ty:4,nm:"Rectangle 4497",sr:1,st:0,op:60,ip:0,hd:!1,ddd:0,bm:0,hasMask:!1,ao:0,ks:{a:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,3],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},s:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100,100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100,100],t:58},{s:[100,100],t:59}]},sk:{a:0,k:0},p:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,9],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1.5,6],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1.5,6],t:58},{s:[1.5,6],t:59}]},r:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[0],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[0],t:58},{s:[0],t:59}]},sa:{a:0,k:0},o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}},shapes:[{ty:"sh",bm:0,hd:!1,nm:"",d:1,ks:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,6],[0,6]]}],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:58},{s:[{c:!0,i:[[0,0],[0,0],[0,0],[0,0]],o:[[0,0],[0,0],[0,0],[0,0]],v:[[0,0],[3,0],[3,12],[0,12]]}],t:59}]}},{ty:"fl",bm:0,hd:!1,nm:"",c:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[1,1,1],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[1,1,1],t:58},{s:[1,1,1],t:59}]},r:1,o:{a:1,k:[{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:0},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:1},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:19},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:20},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:38},{o:{x:0,y:0},i:{x:.58,y:1},s:[100],t:40},{o:{x:0,y:0},i:{x:1,y:1},s:[100],t:58},{s:[100],t:59}]}}],ind:3}],Gl="5.7.0",Yl=60,ql=57.6,Wl=0,Ql=[],Xl={nm:Fl,ddd:Nl,h:$l,w:Hl,meta:Vl,layers:Ul,v:Gl,fr:Yl,op:ql,ip:Wl,assets:Ql},Zl=()=>{const e=P.useRef(null);return P.useEffect(()=>{const t=document.getElementById("lottie-timestamp-equalizer");return t&&(e.current=Ei.loadAnimation({container:t,animationData:Xl,loop:!0,autoplay:!0})),()=>{e.current&&e.current.destroy()}},[]),s.jsx("div",{id:"lottie-timestamp-equalizer",style:{width:"18px",height:"18px"}})},Kl=S(g).attrs(()=>({direction:"row"}))`
  cursor: pointer;
  color: ${y.primaryText1};
  border-top: 1px solid ${y.black};
  background: ${e=>e.isSelected?"rgba(97, 138, 255, 0.1)":`${y.BG1}`};

  .play-pause {
    font-size: 24px;
    border-radius: 4px;
    color: ${y.GRAY7};
    cursor: pointer;
  }

  .info {
    margin-left: auto;
    color: ${y.GRAY7};
    font-size: 24px;
  }

  &:hover {
    .play-pause {
      color: ${y.white};
    }
  }
`,Jl=({onClick:e,timestamp:t,isSelected:n,setOpenClip:r})=>s.jsxs(Kl,{align:"center","data-testid":"wrapper",direction:"row",isSelected:n,justify:"flex-start",onClick:e,px:20,py:20,children:[s.jsxs("div",{children:[s.jsx(ur,{className:"play-pause",children:n?s.jsx(Zl,{}):s.jsx(Gi,{})}),!1]}),s.jsxs(es,{align:"flex-start",direction:"column",justify:"center",children:[t.timestamp&&s.jsx("span",{className:"timestamp",children:Yi(t.timestamp)}),s.jsx("span",{className:"title",children:rt(t.show_title)})]}),s.jsx("div",{className:"info",children:s.jsx(g,{"data-testid":"info-icon-wrapper",onClick:()=>r(t),pt:4,children:s.jsx(fo,{})})})]}),es=S(g)`
  font-size: 13px;
  color: ${y.white};
  font-family: 'Barlow';
  margin: 0 16px;
  flex-shrink: 1;
  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  .timestamp {
    color: ${y.GRAY6};
  }
`,ts=S(g)`
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 1px;
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 1px;
    height: 4px;
  }
`,ns=()=>{const e=pe(),t=Sr(),[n,r]=P.useState(null),[i,o]=P.useState(null),[l,a,c]=at(f=>[f.playingNode,f.setPlayingNodeLink,f.setPlayingTime]),u=P.useMemo(()=>wr((t==null?void 0:t.nodes)||[],e),[t==null?void 0:t.nodes,e]),p=P.useMemo(()=>t==null?void 0:t.nodes.find(f=>f.node_type==="show"&&f.show_title===(e==null?void 0:e.show_title)),[t==null?void 0:t.nodes,e]),d=P.useCallback(f=>{var h;l&&f.link&&(l==null?void 0:l.link)!==f.link&&a(f.link),c(cr(((h=f==null?void 0:f.timestamp)==null?void 0:h.split("-")[0])||"00:00:01")),o(f)},[l,a,o,c]);return P.useEffect(()=>{u!=null&&u.length&&!u.some(f=>f.ref_id===(i==null?void 0:i.ref_id))&&d(u[0])},[u,i,d]),e?s.jsx("div",{style:{overflow:"auto",flex:1,width:"100%"},children:s.jsxs(is,{children:[n&&s.jsx(os,{className:"slide-me",direction:"up",in:!!n,children:s.jsxs(rs,{children:[s.jsx(g,{className:"close-info",onClick:()=>r(null),children:s.jsx(dr,{})}),n&&s.jsx(Er,{node:n})]})}),s.jsx(Dl,{selectedNodeShow:p}),!!(u!=null&&u.length)&&s.jsx(ts,{children:s.jsx(g,{pb:20,children:u==null?void 0:u.map((f,h)=>s.jsx(Jl,{isSelected:(i==null?void 0:i.ref_id)===f.ref_id,onClick:()=>d(f),setOpenClip:r,timestamp:f},`${f.episode_title}_${h}`))})})]})}):null},rs=S(g)`
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  .close-info {
    position: absolute;
    color: ${y.white};
    top: 20px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`,is=S(g)`
  position: relative;
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
`,os=S(Yt)`
  && {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border-radius: 16px;
    overflow: hidden;
    background: ${y.BG1};
    z-index: 1;
  }
`,ls=()=>{const e=pe(),t=e==null?void 0:e.name;return s.jsxs(g,{direction:"column",px:24,py:16,children:[s.jsx(ge,{"data-testid":"person-image",size:80,src:(e==null?void 0:e.source_link)||"",type:"image"}),s.jsx(g,{py:20,children:s.jsx(X,{color:"primaryText1",kind:"bigHeading",children:t})})]})},ss=()=>{const{sender_pic:e,sender_alias:t,date:n,message_content:r}=pe()||{};return s.jsxs(g,{direction:"row",children:[s.jsx(cs,{src:e}),s.jsxs(as,{children:[s.jsxs(g,{align:"flex-end",className:"info",direction:"row",children:[t&&s.jsx("span",{className:"info__name",children:t}),n&&s.jsx("span",{className:"info__date",children:n})]}),r&&s.jsx(us,{dangerouslySetInnerHTML:{__html:qi(r)}})]})]})},as=S(g)`
  color: ${y.black};
  border-radius: 8px;
  font-size: 20px;
  margin-left: 8px;
  flex: 1;

  .info__date {
    color: ${y.textMessages};
    font-size: 14px;
    margin-left: 8px;
  }

  .info__name {
    color: ${y.green400};
    font-size: 16px;
  }
`,us=S.div`
  background: ${y.white};
  border-radius: 8px;
  padding: 16px;
  position: relative;
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${y.white};
    position: absolute;
    left: -6px;
    top: 0;
  }

  .username {
    color: ${y.blueTextAccent};
  }

  a {
    color: ${y.blueTextAccent};
    text-decoration: none;
  }

  a:hover,
  a:visited {
    color: ${y.blueTextAccent};
    text-decoration: none;
  }
`,cs=S.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: green;
`,ps=()=>{const e=pe(),t=(e==null?void 0:e.name)||(e==null?void 0:e.label);return s.jsxs(g,{direction:"row",px:24,py:16,children:[s.jsx(ge,{"data-testid":"person-image",size:80,src:(e==null?void 0:e.image_url)||"person_placeholder_img.png",type:"person"}),s.jsx(g,{p:20,children:s.jsx(X,{color:"primaryText1",kind:"bigHeading",children:t})})]})},hs=({node:e,onClick:t})=>{var i,o;const n=cr(e.timestamp||""),r=Math.ceil(n/60);return s.jsx(ds,{onClick:t,p:24,children:s.jsxs("div",{children:[s.jsxs(g,{align:"flex-start",direction:"row",justify:"flex-start",children:[s.jsx(g,{align:"center",children:s.jsx(ge,{size:64,src:(e==null?void 0:e.image_url)||"",type:(e==null?void 0:e.node_type)||"episode"})}),s.jsxs("div",{className:"content",children:[s.jsxs(g,{align:"center",direction:"row",children:[s.jsx(We,{type:"episode"}),r>0&&s.jsxs("div",{className:"subtitle",children:[r," ",r===1?"min":"mins"]})]}),s.jsx(X,{className:"title",color:"primaryText1",kind:"regular",children:e.episode_title})]})]}),s.jsxs(g,{align:"center",direction:"row",justify:"flex-end",pt:4,children:[s.jsxs(X,{className:"clipText",color:"mainBottomIcons",kind:"regular",children:[((i=e==null?void 0:e.children)==null?void 0:i.length)||0," ",((o=e==null?void 0:e.children)==null?void 0:o.length)===1?"Clip":"Clips"]}),s.jsx(Wi,{style:{color:y.white}})]})]})})},ds=S(g).attrs({})`
  direction: row;
  cursor: pointer;
  color: ${y.primaryText1};
  border-bottom: 1px solid #101317;

  .content {
    margin-left: 16px;
    align-self: stretch;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .title {
    margin-top: 16px;
    display: block;
  }

  .clipText {
    font-size: 12px;
    margin-right: 6px;
  }
`,fs=S(g)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: 0;

  .subtitle {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${y.GRAY6};
    margin-left: 8px;
    max-width: 160px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,xs=S(g)`
  flex-direction: column;
  border-bottom: 1px solid #101317;
  z-index: 0;
  padding: 42px 20px;
  background-color: #1c1e26;
`,ms=S(X)`
  font-size: 22px;
  font-weight: 700;
  max-width: 250px;
  -webkit-box-orient: vertical;
  max-height: calc(2 * 1.5em);
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
`,gs=S.div`
  max-height: calc(100vh - 340px);
  overflow-y: auto;
`,ys=()=>{const[e,t]=ce(l=>[l.selectedNode,l.setSelectedNode]),n=Sr(),[r,i]=P.useState([]),o=P.useMemo(()=>{var c;const l=new Set,a={};if((c=e==null?void 0:e.children)!=null&&c.length){e.children.forEach((p,d)=>{var w,k,T,b;const f=wr((n==null?void 0:n.nodes)||[],e)||[],h=n==null?void 0:n.nodes.find(C=>C.ref_id===p);if(h){h.timestamp=(w=f[0])==null?void 0:w.timestamp;const C=(b=(T=(k=f[d])==null?void 0:k.hosts)==null?void 0:T[0])==null?void 0:b.name;C&&l.add(C),a[p]=h,a[p]=h}});const u=Array.from(l);i(u)}return Object.values(a).filter(u=>u.node_type==="episode").sort((u,p)=>(p.weight||0)-(u.weight||0))},[n==null?void 0:n.nodes,e]);return s.jsxs(fs,{children:[s.jsx(xs,{children:s.jsxs(g,{direction:"row",children:[s.jsx(g,{pr:24,children:s.jsx(ge,{size:80,src:(e==null?void 0:e.image_url)||"audio_default.svg",type:"show"})}),s.jsx(g,{direction:"column",children:s.jsxs(g,{direction:"column",grow:1,justify:"space-between",children:[s.jsxs(g,{align:"center",direction:"row",justify:"flex-start",mb:16,children:[s.jsx(We,{type:"show"})," ",s.jsxs("div",{className:"subtitle",children:["by ",r.join(", ")||(e==null?void 0:e.show_title)]})]}),s.jsx(ms,{kind:"bigHeading",title:(e==null?void 0:e.show_title)||"Unknown",children:(e==null?void 0:e.show_title)||"Unknown"})]})})]})}),s.jsxs(g,{direction:"column",children:[s.jsx(g,{p:24,children:s.jsx(X,{className:"relatedHeader",kind:"medium",children:"Related Episodes"})}),s.jsx(gs,{children:o.map(l=>s.jsx(hs,{node:l,onClick:()=>t(l)},l.ref_id))})]})]})},ws=()=>{const e=pe();return s.jsx(g,{align:"center",justify:"center",children:s.jsx(X,{color:"primaryText1",kind:"hugeHeading",children:e==null?void 0:e.label})})},ks=()=>{const e=pe(),{date:t,boost:n,text:r,name:i,verified:o,profile_picture:l,twitter_handle:a,ref_id:c}=e||{},u=(e==null?void 0:e.tweet_id)||"",[p,d]=P.useState(n||0),f=me(h=>h.currentSearch);return e&&s.jsxs(s.Fragment,{children:[s.jsxs(g,{direction:"column",p:24,children:[s.jsxs(g,{align:"center",direction:"row",pr:16,children:[s.jsx(bs,{children:s.jsx(ge,{rounded:!0,size:58,src:l||"",type:"person"})}),s.jsxs(g,{children:[s.jsxs(js,{align:"center",direction:"row",children:[i,o&&s.jsx("div",{className:"verification",children:s.jsx("img",{alt:"verified",src:"verified_twitter.svg"})})]}),a&&s.jsxs(Cs,{children:["@",a]})]})]}),s.jsxs(g,{grow:1,shrink:1,children:[s.jsx(Ss,{"data-testid":"episode-description",children:pt(r||"",f)}),s.jsx(g,{direction:"row",justify:"flex-start",children:!!t&&s.jsx(ct,{children:$t.unix(t).format("ll")})})]}),s.jsx(g,{align:"stretch",mt:22,children:s.jsx("a",{href:`https://twitter.com/Interior/status/${u}?open=system`,children:s.jsx(Es,{endIcon:s.jsx(Ut,{}),children:"View Tweet "})})})]}),s.jsx(vs,{}),s.jsxs(g,{direction:"row",justify:"space-between",pt:14,px:24,children:[s.jsx(Gt,{amt:p}),s.jsx(yr,{content:e,count:p,refId:c,updateCount:d})]})]})},bs=S(g)`
  img {
    width: 64px;
    height: 64px
    border-radius: 50%;
    object-fit: cover;
  }
  margin-right: 16px;
`,js=S(g)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.22px;
  .verification {
    margin-left: 4px;
  }
`,Cs=S(g)`
  color: ${y.GRAY7};
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`,Ss=S(g)`
  color: ${y.white};
  font-family: Barlow;
  font-size: 17px;
  font-weight: 400;
  font-style: normal;
  line-height: 130%;
  letter-spacing: -0.39px;
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
`,vs=S(gr)`
  margin: 0 0 6px 0;
  opacity: 75%;
`,Es=S(ue)`
  width: 100%;
`,Ts=()=>{const e=pe();if(!e)return null;const{name:t}=e;return s.jsx(g,{align:"flex-start",basis:"100%",direction:"column",grow:1,justify:"center",shrink:1,children:s.jsx(Is,{grow:1,justify:"flex-start",p:12,shrink:1,children:s.jsxs(g,{children:[s.jsx(X,{color:"primaryText1",kind:"regular",children:"Name:"}),s.jsx(X,{color:"primaryText1",kind:"regular",children:t})]})})})},Is=S(g)`
  overflow: auto;
`,As=()=>{var a,c;const[e,t]=P.useState(!1),n=pe(),r=!!(n!=null&&n.source_link),i=P.useRef(null),o=me(u=>u.currentSearch),l=u=>{u.stopPropagation(),u.currentTarget.blur(),t(!e)};return P.useEffect(()=>{var u,p;e?(u=i.current)==null||u.play():(p=i.current)==null||p.pause()},[e]),s.jsxs(g,{align:"flex-start",basis:"100%",direction:"column",grow:1,justify:"center",pt:r?62:0,shrink:1,children:[r&&s.jsxs(Ps,{children:[s.jsx(xr,{color:y.GRAY6}),s.jsx(Ls,{children:n==null?void 0:n.source_link}),s.jsx(zs,{href:`${n==null?void 0:n.source_link}?open=system`,onClick:u=>u.stopPropagation(),target:"_blank",children:s.jsx(Ut,{})})]}),(a=n==null?void 0:n.audio)!=null&&a.length?s.jsxs(g,{justify:"flex-start",p:12,children:[s.jsx(ue,{onClick:u=>l(u),startIcon:e?s.jsx(ut,{}):s.jsx(Ht,{}),children:e?"Pause":"Play"}),s.jsx(Bs,{ref:i,src:((c=n.audio[0])==null?void 0:c.link)||"",children:s.jsx("track",{kind:"captions"})})]}):null,s.jsx(_s,{grow:1,justify:"flex-start",p:12,shrink:1,children:s.jsx(X,{color:"primaryText1",kind:"regular",children:pt((n==null?void 0:n.text)||"",o)})})]})},Ps=S(g)`
  top: 0px;
  position: absolute;
  border-radius: 16px 16px 0px 0px;
  padding: 0px 12px;
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${y.BG2};
  gap: 5px;
  color: ${y.GRAY6};

  span {
    font-family: Barlow;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    color: ${y.GRAY6};
  }
`,zs=S.a`
  color: ${y.GRAY6};
  font-size: 16px;
  height: 16px;
  display: flex;
  gap: 5px;
  align-items: center;
`,_s=S(g)`
  overflow: auto;
`,Ls=S(X)`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Bs=S.audio`
  height: 0;
  width: 0;
`,Os=["clip","twitter_space","youtube","episode","podcast"],Ms=()=>{const e=pe(),{showTeachMe:t}=ce(r=>r),{setPlayingNode:n}=at(r=>r);if(P.useEffect(()=>{Os.includes((e==null?void 0:e.node_type)||"")&&n(e)},[n,e]),t)return s.jsx(yl,{});switch(e==null?void 0:e.node_type){case"guest":case"person":return s.jsx(ps,{});case"data_series":return s.jsx(bl,{});case"tribe_message":return s.jsx(ss,{});case"tweet":return s.jsx(ks,{});case"topic":return s.jsx(ws,{});case"show":return s.jsx(ys,{});case"youtube":case"podcast":case"clip":case"twitter_space":return s.jsx(Er,{});case"document":return s.jsx(As,{});case"episode":return s.jsx(ns,{},e.ref_id);case"image":return s.jsx(ls,{});default:return s.jsx(Ts,{})}},Rs=P.memo(Ms),Ds=({isPlaying:e,isFullScreen:t,setIsPlaying:n,playingTime:r,duration:i,handleProgressChange:o,handleVolumeChange:l,onFullScreenClick:a,showToolbar:c})=>s.jsxs(g,{children:[!c&&s.jsx(Vs,{"aria-label":"Small",max:i,onChange:o,size:"small",value:r}),s.jsxs(Fs,{align:"center",direction:"row",showToolbar:c,children:[s.jsx(Ns,{onClick:n,size:"small",children:e?s.jsx(ut,{}):s.jsx(Ht,{})}),s.jsxs(Us,{direction:"row",children:[s.jsx("span",{children:fn(r)}),s.jsx("span",{className:"separator",children:"/"}),s.jsx("span",{className:"duration",children:fn(i)})]}),s.jsxs($s,{direction:"row",px:9,children:[s.jsx(kr,{className:"volume-slider",defaultValue:.5,max:1,min:0,onChange:l,size:"small",step:.1}),s.jsx(Qi,{})]}),s.jsx(Hs,{onClick:()=>a(),children:t?s.jsx(Zi,{}):s.jsx(Xi,{})})]})]}),Fs=S(g)`
  height: 60px;
  padding: 12px 16px;
  ${e=>e.showToolbar&&`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index:1;
    background-color: rgba(0, 0, 0, 0.6);
  `}

  &.error-wrapper {
    color: ${y.primaryRed};
  }
`,Ns=S(ur)`
  && {
    font-size: 36px;
    padding: 2px;
    margin-left: 8px;
  }
`,$s=S(g)`
  height: 28px;
  font-size: 26px;
  border-radius: 200px;
  color: ${y.white};
  margin-left: auto;

  .volume-slider {
    display: none;
    color: ${y.white};
    height: 3px;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 2px;
      height: 10px;
      background-color: ${y.white};
      &:before {
        box-shadow: '0 4px 8px rgba(0,0,0,0.4)';
      }
      &:hover,
      &.Mui-focusVisible,
      &.Mui-active {
        box-shadow: none;
      }
    }
  }

  &:hover {
    background: rgba(42, 44, 55, 1);
    .volume-slider {
      width: 62px;
      margin-right: 4px;
      display: block;
    }
  }
`,Hs=S(g)`
  cursor: pointer;
  padding: 8px;
  font-size: 32px;
  color: #d9d9d9;
`,Vs=S(kr)`
  && {
    z-index: 20;
    color: ${y.white};
    height: 3px;
    width: calc(100% - 12px);
    margin: -12px auto;
    box-sizing: border-box;
    .MuiSlider-track {
      border: none;
    }
    .MuiSlider-thumb {
      width: 10px;
      height: 10px;
      background-color: ${y.white};
      &:before {
        box-shadow: '0 4px 8px rgba(0,0,0,0.4)';
      }
      &:hover,
      &.Mui-focusVisible,
      &.Mui-active {
        box-shadow: none;
      }
    }
  }
`,Us=S(g)`
  color: ${y.white};
  font-size: 13px;
  margin-left: 16px;
  font-weight: 500;

  .separator {
    color: ${y.GRAY6};
    margin: 0 4px;
  }

  .duration {
    color: ${y.GRAY6};
  }
`,Gs=({hidden:e})=>{const t=P.useRef(null),n=P.useRef(null),[r,i]=P.useState(!1),[o,l]=P.useState(!1),[a,c]=P.useState("ready"),{isPlaying:u,playingTime:p,duration:d,setIsPlaying:f,setPlayingTime:h,setDuration:w,playingNode:k,volume:T,setVolume:b,setHasError:C,resetPlayer:I}=at(H=>H);P.useEffect(()=>()=>I(),[I]);const F=()=>{f(!u)},M=()=>{f(!0)},v=()=>{f(!1)},$=(H,B)=>{const Z=Array.isArray(B)?B[0]:B;t.current&&(t.current.seekTo(Z),h(Z))},q=(H,B)=>{const Z=Array.isArray(B)?B[0]:B;b(Z)},z=()=>{C(!0),c("error")},O=H=>{const B=H.playedSeconds;h(B)},L=()=>{if(t.current){c("ready");const H=t.current.getDuration();w(H)}},_=()=>{n.current&&(document.fullscreenElement?(document.exitFullscreen(),i(!1)):n.current.requestFullscreen().then(()=>{document.addEventListener("fullscreenchange",U)}))},U=()=>{i(!!document.fullscreenElement),document.removeEventListener("fullscreenchange",U)};return P.useEffect(()=>()=>{document.removeEventListener("fullscreenchange",U)}),P.useEffect(()=>{const H=B=>{if(r){const Z=window.screen.height,J=B.clientY,ie=Z-J;l(ie<=50)}};return document.addEventListener("mousemove",H),()=>{document.removeEventListener("mousemove",H)}},[r,o]),P.useEffect(()=>{const H=B=>{r&&B.key==="Escape"&&(B.preventDefault(),B.stopPropagation())};return document.addEventListener("fullscreenchange",U),document.addEventListener("keydown",H),()=>{document.removeEventListener("fullscreenchange",U),document.removeEventListener("keydown",H)}}),k!=null&&k.link?s.jsxs(Ys,{ref:n,hidden:e,children:[s.jsx(qs,{children:s.jsx(ge,{size:120,src:(k==null?void 0:k.image_url)||"",type:"clip"})}),s.jsx(Ki,{ref:t,controls:!1,height:r?window.screen.height:"200px",onBuffer:()=>c("buffering"),onBufferEnd:()=>c("ready"),onError:z,onPause:v,onPlay:M,onProgress:O,onReady:L,playing:u,url:(k==null?void 0:k.link)||"",volume:T,width:"100%"}),a==="error"?s.jsx(Qs,{className:"error-wrapper",children:"Error happened, please try later"}):null,a==="ready"?s.jsx(Ds,{duration:d,handleProgressChange:$,handleVolumeChange:q,isFullScreen:r,isPlaying:u,onFullScreenClick:_,playingTime:p,setIsPlaying:F,showToolbar:o&&r}):null,a==="buffering"?s.jsx(Ws,{children:s.jsx(Vt,{color:y.lightGray})}):null]}):null},Ys=S(g)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  overflow: hidden;
  height: ${e=>e.hidden?"0px":"auto"};
`,qs=S(g)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`,Ws=S(g)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`,Qs=S(g)`
  height: 60px;
  padding: 12px 16px;
  color: ${y.primaryRed};
`,Xs=P.memo(Gs),Zs=({open:e})=>{const{setSelectedNode:t,setTeachMe:n,showTeachMe:r}=ce(a=>a),i=pe(),{setSidebarOpen:o}=me(a=>a),{playingNode:l}=at(a=>a);return s.jsx(Yt,{"data-testid":"sidebar-sub-view",direction:"right",in:e,style:{width:r?"700px":"",position:e?"relative":"absolute"},children:s.jsxs(Ks,{children:[s.jsx(Xs,{hidden:(i==null?void 0:i.ref_id)!==(l==null?void 0:l.ref_id)},l==null?void 0:l.ref_id),s.jsx(ea,{children:s.jsx(Rs,{})}),s.jsx(Js,{onClick:()=>{t(null),n(!1)},children:s.jsx(Ji,{})}),s.jsx(ta,{onClick:()=>{o(!1)},children:s.jsx(br,{})})]})})},Ks=S(g)(({theme:e})=>({position:"relative",background:y.BG1,width:"100%",margin:"64px auto 20px 10px",borderRadius:"16px",zIndex:29,[e.breakpoints.up("sm")]:{width:"390px"}})),Js=S(g)`
  font-size: 32px;
  color: ${y.white};
  cursor: pointer;
  position: absolute;
  right: 3px;
  top: 3px;

  &:hover {
    color: ${y.GRAY6};
  }

  &:active {
  }
`,ea=S(g)`
  flex: 1 1 100%;
`,ta=S(g).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:y.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:y.white,[e.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:y.BG1_HOVER},"&:active":{backgroundColor:y.BG1_PRESS,color:y.GRAY6}})),na=()=>{const e=me(t=>t.setSidebarOpen);return s.jsx(ra,{onClick:()=>{e(!0)},children:s.jsx(eo,{})})},ra=S(g).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:y.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:y.white,[e.breakpoints.up("sm")]:{left:"64px"},"&:hover":{backgroundColor:y.BG1_HOVER},"&:active":{backgroundColor:y.BG1_PRESS,color:y.GRAY6}})),ia=e=>s.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("mask",{id:"mask0_5099_7163",maskUnits:"userSpaceOnUse",x:"2",y:"2",width:"16",height:"16",children:s.jsx("rect",{x:"2",y:"2",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_5099_7163)",children:s.jsx("path",{d:"M10 16.6667C9.16667 16.6667 8.38611 16.5083 7.65833 16.1917C6.93056 15.875 6.29722 15.4472 5.75833 14.9083C5.21944 14.3695 4.79167 13.7361 4.475 13.0083C4.15833 12.2806 4 11.5 4 10.6667C4 10.4778 4.06389 10.3195 4.19167 10.1917C4.31944 10.0639 4.47778 10 4.66667 10C4.85556 10 5.01389 10.0639 5.14167 10.1917C5.26944 10.3195 5.33333 10.4778 5.33333 10.6667C5.33333 11.9667 5.78611 13.0695 6.69167 13.975C7.59722 14.8806 8.7 15.3333 10 15.3333C11.3 15.3333 12.4028 14.8806 13.3083 13.975C14.2139 13.0695 14.6667 11.9667 14.6667 10.6667C14.6667 9.36667 14.2139 8.2639 13.3083 7.35834C12.4028 6.45279 11.3 6.00001 10 6.00001H9.9L10.4667 6.56667C10.6 6.70001 10.6639 6.85556 10.6583 7.03334C10.6528 7.21112 10.5889 7.36667 10.4667 7.50001C10.3333 7.63334 10.175 7.70279 9.99167 7.70834C9.80833 7.7139 9.65 7.65001 9.51667 7.51667L7.8 5.80001C7.66667 5.66667 7.6 5.51112 7.6 5.33334C7.6 5.15556 7.66667 5.00001 7.8 4.86667L9.51667 3.15001C9.65 3.01667 9.80833 2.95279 9.99167 2.95834C10.175 2.9639 10.3333 3.03334 10.4667 3.16667C10.5889 3.30001 10.6528 3.45556 10.6583 3.63334C10.6639 3.81112 10.6 3.96667 10.4667 4.10001L9.9 4.66667H10C10.8333 4.66667 11.6139 4.82501 12.3417 5.14167C13.0694 5.45834 13.7028 5.88612 14.2417 6.42501C14.7806 6.9639 15.2083 7.59723 15.525 8.32501C15.8417 9.05279 16 9.83334 16 10.6667C16 11.5 15.8417 12.2806 15.525 13.0083C15.2083 13.7361 14.7806 14.3695 14.2417 14.9083C13.7028 15.4472 13.0694 15.875 12.3417 16.1917C11.6139 16.5083 10.8333 16.6667 10 16.6667Z",fill:"currentColor"})})]}),oa=e=>s.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("mask",{id:"mask0_1259_28",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"24",height:"24",children:s.jsx("rect",{width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_1259_28)",children:s.jsx("path",{d:"M3 20.75L2.91345 19.4327L4.74998 17.6058V20.75H3ZM7.25003 20.75V15.1058L8.74998 13.6058V20.75H7.25003ZM11.25 20.75V13.6058L12.75 15.1308V20.75H11.25ZM15.25 20.75V15.1308L16.75 13.6308V20.75H15.25ZM19.25 20.75V11.1058L20.75 9.60583V20.75H19.25ZM3.25003 15.2192V13.1058L10 6.35581L14 10.3558L20.75 3.60583V5.71924L14 12.4692L10 8.46921L3.25003 15.2192Z",fill:"currentColor"})})]});function la(e,t){const n=t||{};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const sa=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,aa=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,ua={};function gn(e,t){return((t||ua).jsx?aa:sa).test(e)}const ca=/[ \t\n\f\r]/g;function pa(e){return typeof e=="object"?e.type==="text"?yn(e.value):!1:yn(e)}function yn(e){return e.replace(ca,"")===""}class Qe{constructor(t,n,r){this.property=t,this.normal=n,r&&(this.space=r)}}Qe.prototype.property={};Qe.prototype.normal={};Qe.prototype.space=null;function Tr(e,t){const n={},r={};let i=-1;for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal);return new Qe(n,r,t)}function _t(e){return e.toLowerCase()}class he{constructor(t,n){this.property=t,this.attribute=n}}he.prototype.space=null;he.prototype.boolean=!1;he.prototype.booleanish=!1;he.prototype.overloadedBoolean=!1;he.prototype.number=!1;he.prototype.commaSeparated=!1;he.prototype.spaceSeparated=!1;he.prototype.commaOrSpaceSeparated=!1;he.prototype.mustUseProperty=!1;he.prototype.defined=!1;let ha=0;const N=_e(),K=_e(),Ir=_e(),E=_e(),W=_e(),Me=_e(),le=_e();function _e(){return 2**++ha}const Lt=Object.freeze(Object.defineProperty({__proto__:null,boolean:N,booleanish:K,commaOrSpaceSeparated:le,commaSeparated:Me,number:E,overloadedBoolean:Ir,spaceSeparated:W},Symbol.toStringTag,{value:"Module"})),wt=Object.keys(Lt);class qt extends he{constructor(t,n,r,i){let o=-1;if(super(t,n),wn(this,"space",i),typeof r=="number")for(;++o<wt.length;){const l=wt[o];wn(this,wt[o],(r&Lt[l])===Lt[l])}}}qt.prototype.defined=!0;function wn(e,t,n){n&&(e[t]=n)}const da={}.hasOwnProperty;function De(e){const t={},n={};let r;for(r in e.properties)if(da.call(e.properties,r)){const i=e.properties[r],o=new qt(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[_t(r)]=r,n[_t(o.attribute)]=r}return new Qe(t,n,e.space)}const Ar=De({space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Pr=De({space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function zr(e,t){return t in e?e[t]:t}function _r(e,t){return zr(e,t.toLowerCase())}const Lr=De({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:_r,properties:{xmlns:null,xmlnsXLink:null}}),Br=De({transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:K,ariaAutoComplete:null,ariaBusy:K,ariaChecked:K,ariaColCount:E,ariaColIndex:E,ariaColSpan:E,ariaControls:W,ariaCurrent:null,ariaDescribedBy:W,ariaDetails:null,ariaDisabled:K,ariaDropEffect:W,ariaErrorMessage:null,ariaExpanded:K,ariaFlowTo:W,ariaGrabbed:K,ariaHasPopup:null,ariaHidden:K,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:W,ariaLevel:E,ariaLive:null,ariaModal:K,ariaMultiLine:K,ariaMultiSelectable:K,ariaOrientation:null,ariaOwns:W,ariaPlaceholder:null,ariaPosInSet:E,ariaPressed:K,ariaReadOnly:K,ariaRelevant:null,ariaRequired:K,ariaRoleDescription:W,ariaRowCount:E,ariaRowIndex:E,ariaRowSpan:E,ariaSelected:K,ariaSetSize:E,ariaSort:null,ariaValueMax:E,ariaValueMin:E,ariaValueNow:E,ariaValueText:null,role:null}}),fa=De({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:_r,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Me,acceptCharset:W,accessKey:W,action:null,allow:null,allowFullScreen:N,allowPaymentRequest:N,allowUserMedia:N,alt:null,as:null,async:N,autoCapitalize:null,autoComplete:W,autoFocus:N,autoPlay:N,blocking:W,capture:N,charSet:null,checked:N,cite:null,className:W,cols:E,colSpan:null,content:null,contentEditable:K,controls:N,controlsList:W,coords:E|Me,crossOrigin:null,data:null,dateTime:null,decoding:null,default:N,defer:N,dir:null,dirName:null,disabled:N,download:Ir,draggable:K,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:N,formTarget:null,headers:W,height:E,hidden:N,high:E,href:null,hrefLang:null,htmlFor:W,httpEquiv:W,id:null,imageSizes:null,imageSrcSet:null,inert:N,inputMode:null,integrity:null,is:null,isMap:N,itemId:null,itemProp:W,itemRef:W,itemScope:N,itemType:W,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:N,low:E,manifest:null,max:null,maxLength:E,media:null,method:null,min:null,minLength:E,multiple:N,muted:N,name:null,nonce:null,noModule:N,noValidate:N,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:N,optimum:E,pattern:null,ping:W,placeholder:null,playsInline:N,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:N,referrerPolicy:null,rel:W,required:N,reversed:N,rows:E,rowSpan:E,sandbox:W,scope:null,scoped:N,seamless:N,selected:N,shadowRootDelegatesFocus:N,shadowRootMode:null,shape:null,size:E,sizes:null,slot:null,span:E,spellCheck:K,src:null,srcDoc:null,srcLang:null,srcSet:null,start:E,step:null,style:null,tabIndex:E,target:null,title:null,translate:null,type:null,typeMustMatch:N,useMap:null,value:K,width:E,wrap:null,align:null,aLink:null,archive:W,axis:null,background:null,bgColor:null,border:E,borderColor:null,bottomMargin:E,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:N,declare:N,event:null,face:null,frame:null,frameBorder:null,hSpace:E,leftMargin:E,link:null,longDesc:null,lowSrc:null,marginHeight:E,marginWidth:E,noResize:N,noHref:N,noShade:N,noWrap:N,object:null,profile:null,prompt:null,rev:null,rightMargin:E,rules:null,scheme:null,scrolling:K,standby:null,summary:null,text:null,topMargin:E,valueType:null,version:null,vAlign:null,vLink:null,vSpace:E,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:N,disableRemotePlayback:N,prefix:null,property:null,results:E,security:null,unselectable:null}}),xa=De({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:zr,properties:{about:le,accentHeight:E,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:E,amplitude:E,arabicForm:null,ascent:E,attributeName:null,attributeType:null,azimuth:E,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:E,by:null,calcMode:null,capHeight:E,className:W,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:E,diffuseConstant:E,direction:null,display:null,dur:null,divisor:E,dominantBaseline:null,download:N,dx:null,dy:null,edgeMode:null,editable:null,elevation:E,enableBackground:null,end:null,event:null,exponent:E,externalResourcesRequired:null,fill:null,fillOpacity:E,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Me,g2:Me,glyphName:Me,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:E,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:E,horizOriginX:E,horizOriginY:E,id:null,ideographic:E,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:E,k:E,k1:E,k2:E,k3:E,k4:E,kernelMatrix:le,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:E,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:E,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:E,overlineThickness:E,paintOrder:null,panose1:null,path:null,pathLength:E,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:W,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:E,pointsAtY:E,pointsAtZ:E,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:le,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:le,rev:le,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:le,requiredFeatures:le,requiredFonts:le,requiredFormats:le,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:E,specularExponent:E,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:E,strikethroughThickness:E,string:null,stroke:null,strokeDashArray:le,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:E,strokeOpacity:E,strokeWidth:null,style:null,surfaceScale:E,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:le,tabIndex:E,tableValues:null,target:null,targetX:E,targetY:E,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:le,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:E,underlineThickness:E,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:E,values:null,vAlphabetic:E,vMathematical:E,vectorEffect:null,vHanging:E,vIdeographic:E,version:null,vertAdvY:E,vertOriginX:E,vertOriginY:E,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:E,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),ma=/^data[-\w.:]+$/i,kn=/-[a-z]/g,ga=/[A-Z]/g;function ya(e,t){const n=_t(t);let r=t,i=he;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&ma.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(kn,ka);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!kn.test(o)){let l=o.replace(ga,wa);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=qt}return new i(r,t)}function wa(e){return"-"+e.toLowerCase()}function ka(e){return e.charAt(1).toUpperCase()}const ba={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},ja=Tr([Pr,Ar,Lr,Br,fa],"html"),Wt=Tr([Pr,Ar,Lr,Br,xa],"svg");function Ca(e){return e.join(" ").trim()}var Or={},bn=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Sa=/\n/g,va=/^\s*/,Ea=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Ta=/^:\s*/,Ia=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Aa=/^[;\s]*/,Pa=/^\s+|\s+$/g,za=`
`,jn="/",Cn="*",ze="",_a="comment",La="declaration",Ba=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(w){var k=w.match(Sa);k&&(n+=k.length);var T=w.lastIndexOf(za);r=~T?w.length-T:r+w.length}function o(){var w={line:n,column:r};return function(k){return k.position=new l(w),u(),k}}function l(w){this.start=w,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function a(w){var k=new Error(t.source+":"+n+":"+r+": "+w);if(k.reason=w,k.filename=t.source,k.line=n,k.column=r,k.source=e,!t.silent)throw k}function c(w){var k=w.exec(e);if(k){var T=k[0];return i(T),e=e.slice(T.length),k}}function u(){c(va)}function p(w){var k;for(w=w||[];k=d();)k!==!1&&w.push(k);return w}function d(){var w=o();if(!(jn!=e.charAt(0)||Cn!=e.charAt(1))){for(var k=2;ze!=e.charAt(k)&&(Cn!=e.charAt(k)||jn!=e.charAt(k+1));)++k;if(k+=2,ze===e.charAt(k-1))return a("End of comment missing");var T=e.slice(2,k-2);return r+=2,i(T),e=e.slice(k),r+=2,w({type:_a,comment:T})}}function f(){var w=o(),k=c(Ea);if(k){if(d(),!c(Ta))return a("property missing ':'");var T=c(Ia),b=w({type:La,property:Sn(k[0].replace(bn,ze)),value:T?Sn(T[0].replace(bn,ze)):ze});return c(Aa),b}}function h(){var w=[];p(w);for(var k;k=f();)k!==!1&&(w.push(k),p(w));return w}return u(),h()};function Sn(e){return e?e.replace(Pa,ze):ze}var Oa=dn&&dn.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Or,"__esModule",{value:!0});var Ma=Oa(Ba);function Ra(e,t){var n=null;if(!e||typeof e!="string")return n;var r=(0,Ma.default)(e),i=typeof t=="function";return r.forEach(function(o){if(o.type==="declaration"){var l=o.property,a=o.value;i?t(l,a,o):a&&(n=n||{},n[l]=a)}}),n}var vn=Or.default=Ra;const Da=vn.default||vn,Mr=Rr("end"),Qt=Rr("start");function Rr(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function Fa(e){const t=Qt(e),n=Mr(e);if(t&&n)return{start:t,end:n}}function Ge(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?En(e.position):"start"in e||"end"in e?En(e):"line"in e||"column"in e?Bt(e):""}function Bt(e){return Tn(e&&e.line)+":"+Tn(e&&e.column)}function En(e){return Bt(e&&e.start)+"-"+Bt(e&&e.end)}function Tn(e){return e&&typeof e=="number"?e:1}class te extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},l=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(l=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?o.ruleId=r:(o.source=r.slice(0,c),o.ruleId=r.slice(c+1))}if(!o.place&&o.ancestors&&o.ancestors){const c=o.ancestors[o.ancestors.length-1];c&&(o.place=c.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=i,this.line=a?a.line:void 0,this.name=Ge(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=l&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual,this.expected,this.note,this.url}}te.prototype.file="";te.prototype.name="";te.prototype.reason="";te.prototype.message="";te.prototype.stack="";te.prototype.column=void 0;te.prototype.line=void 0;te.prototype.ancestors=void 0;te.prototype.cause=void 0;te.prototype.fatal=void 0;te.prototype.place=void 0;te.prototype.ruleId=void 0;te.prototype.source=void 0;const Xt={}.hasOwnProperty,Na=new Map,$a=/[A-Z]/g,Ha=/-([a-z])/g,Va=new Set(["table","tbody","thead","tfoot","tr"]),Ua=new Set(["td","th"]),Dr="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Ga(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=Ja(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=Ka(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Wt:ja,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=Fr(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Fr(e,t,n){if(t.type==="element")return Ya(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return qa(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Qa(e,t,n);if(t.type==="mdxjsEsm")return Wa(e,t);if(t.type==="root")return Xa(e,t,n);if(t.type==="text")return Za(e,t)}function Ya(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Wt,e.schema=i),e.ancestors.push(t);const o=$r(e,t.tagName,!1),l=eu(e,t);let a=Kt(e,t);return Va.has(t.tagName)&&(a=a.filter(function(c){return typeof c=="string"?!pa(c):!0})),Nr(e,l,o,t),Zt(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function qa(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}qe(e,t.position)}function Wa(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);qe(e,t.position)}function Qa(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=Wt,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:$r(e,t.name,!0),l=tu(e,t),a=Kt(e,t);return Nr(e,l,o,t),Zt(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function Xa(e,t,n){const r={};return Zt(r,Kt(e,t)),e.create(t,e.Fragment,r,n)}function Za(e,t){return t.value}function Nr(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function Zt(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Ka(e,t,n){return r;function r(i,o,l,a){const u=Array.isArray(l.children)?n:t;return a?u(o,l,a):u(o,l)}}function Ja(e,t){return n;function n(r,i,o,l){const a=Array.isArray(o.children),c=Qt(r);return t(i,o,l,a,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function eu(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&Xt.call(t.properties,i)){const o=nu(e,i,t.properties[i]);if(o){const[l,a]=o;e.tableCellAlignToStyle&&l==="align"&&typeof a=="string"&&Ua.has(t.tagName)?r=a:n[l]=a}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function tu(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const l=o.expression;l.type;const a=l.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else qe(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else qe(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function Kt(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:Na;for(;++r<t.children.length;){const o=t.children[r];let l;if(e.passKeys){const c=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(c){const u=i.get(c)||0;l=c+"-"+u,i.set(c,u+1)}}const a=Fr(e,o,l);a!==void 0&&n.push(a)}return n}function nu(e,t,n){const r=ya(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?la(n):Ca(n)),r.property==="style"){let i=typeof n=="object"?n:ru(e,String(n));return e.stylePropertyNameCase==="css"&&(i=iu(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?ba[r.property]||r.property:r.attribute,n]}}function ru(e,t){const n={};try{Da(t,r)}catch(i){if(!e.ignoreInvalidStyle){const o=i,l=new te("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw l.file=e.filePath||void 0,l.url=Dr+"#cannot-parse-style-attribute",l}}return n;function r(i,o){let l=i;l.slice(0,2)!=="--"&&(l.slice(0,4)==="-ms-"&&(l="ms-"+l.slice(4)),l=l.replace(Ha,lu)),n[l]=o}}function $r(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,l;for(;++o<i.length;){const a=gn(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};l=l?{type:"MemberExpression",object:l,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=l}else r=gn(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return Xt.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);qe(e)}function qe(e,t){const n=new te("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=Dr+"#cannot-handle-mdx-estrees-without-createevaluater",n}function iu(e){const t={};let n;for(n in e)Xt.call(e,n)&&(t[ou(n)]=e[n]);return t}function ou(e){let t=e.replace($a,su);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function lu(e,t){return t.toUpperCase()}function su(e){return"-"+e.toLowerCase()}const kt={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},au={};function uu(e,t){const n=t||au,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Hr(e,r,i)}function Hr(e,t,n){if(cu(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return In(e.children,t,n)}return Array.isArray(e)?In(e,t,n):""}function In(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Hr(e[i],t,n);return r.join("")}function cu(e){return!!(e&&typeof e=="object")}const An=document.createElement("i");function Jt(e){const t="&"+e+";";An.innerHTML=t;const n=An.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function be(e,t,n,r){const i=e.length;let o=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);o<r.length;)l=r.slice(o,o+1e4),l.unshift(t,0),e.splice(...l),o+=1e4,t+=1e4}function ae(e,t){return e.length>0?(be(e,e.length,0,t),e):t}const Pn={}.hasOwnProperty;function pu(e){const t={};let n=-1;for(;++n<e.length;)hu(t,e[n]);return t}function hu(e,t){let n;for(n in t){const i=(Pn.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let l;if(o)for(l in o){Pn.call(i,l)||(i[l]=[]);const a=o[l];du(i[l],Array.isArray(a)?a:a?[a]:[])}}}function du(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);be(e,0,0,r)}function Vr(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Re(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const fu=Te(/\p{P}/u),ke=Te(/[A-Za-z]/),se=Te(/[\dA-Za-z]/),xu=Te(/[#-'*+\--9=?A-Z^-~]/);function Ot(e){return e!==null&&(e<32||e===127)}const Mt=Te(/\d/),mu=Te(/[\dA-Fa-f]/),Ur=Te(/[!-/:-@[-`{-~]/);function R(e){return e!==null&&e<-2}function re(e){return e!==null&&(e<0||e===32)}function G(e){return e===-2||e===-1||e===32}function gu(e){return Ur(e)||fu(e)}const yu=Te(/\s/);function Te(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Fe(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let l="";if(o===37&&se(e.charCodeAt(n+1))&&se(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(l=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(l=String.fromCharCode(o,a),i=1):l="�"}else l=String.fromCharCode(o);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function Q(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(c){return G(c)?(e.enter(n),a(c)):t(c)}function a(c){return G(c)&&o++<i?(e.consume(c),a):(e.exit(n),t(c))}}const wu={tokenize:ku};function ku(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),Q(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return R(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),l)}}const bu={tokenize:ju},zn={tokenize:Cu};function ju(e){const t=this,n=[];let r=0,i,o,l;return a;function a(I){if(r<n.length){const F=n[r];return t.containerState=F[1],e.attempt(F[0].continuation,c,u)(I)}return u(I)}function c(I){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&C();const F=t.events.length;let M=F,v;for(;M--;)if(t.events[M][0]==="exit"&&t.events[M][1].type==="chunkFlow"){v=t.events[M][1].end;break}b(r);let $=F;for(;$<t.events.length;)t.events[$][1].end=Object.assign({},v),$++;return be(t.events,M+1,0,t.events.slice(F)),t.events.length=$,u(I)}return a(I)}function u(I){if(r===n.length){if(!i)return f(I);if(i.currentConstruct&&i.currentConstruct.concrete)return w(I);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(zn,p,d)(I)}function p(I){return i&&C(),b(r),f(I)}function d(I){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,w(I)}function f(I){return t.containerState={},e.attempt(zn,h,w)(I)}function h(I){return r++,n.push([t.currentConstruct,t.containerState]),f(I)}function w(I){if(I===null){i&&C(),b(0),e.consume(I);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:o,_tokenizer:i}),k(I)}function k(I){if(I===null){T(e.exit("chunkFlow"),!0),b(0),e.consume(I);return}return R(I)?(e.consume(I),T(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(I),k)}function T(I,F){const M=t.sliceStream(I);if(F&&M.push(null),I.previous=o,o&&(o.next=I),o=I,i.defineSkip(I.start),i.write(M),t.parser.lazy[I.start.line]){let v=i.events.length;for(;v--;)if(i.events[v][1].start.offset<l&&(!i.events[v][1].end||i.events[v][1].end.offset>l))return;const $=t.events.length;let q=$,z,O;for(;q--;)if(t.events[q][0]==="exit"&&t.events[q][1].type==="chunkFlow"){if(z){O=t.events[q][1].end;break}z=!0}for(b(r),v=$;v<t.events.length;)t.events[v][1].end=Object.assign({},O),v++;be(t.events,q+1,0,t.events.slice($)),t.events.length=v}}function b(I){let F=n.length;for(;F-- >I;){const M=n[F];t.containerState=M[1],M[0].exit.call(t,e)}n.length=I}function C(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Cu(e,t,n){return Q(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function _n(e){if(e===null||re(e)||yu(e))return 1;if(gu(e))return 2}function en(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const Rt={name:"attention",tokenize:vu,resolveAll:Su};function Su(e,t){let n=-1,r,i,o,l,a,c,u,p;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const d=Object.assign({},e[r][1].end),f=Object.assign({},e[n][1].start);Ln(d,-c),Ln(f,c),l={type:c>1?"strongSequence":"emphasisSequence",start:d,end:Object.assign({},e[r][1].end)},a={type:c>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[n][1].start),end:f},o={type:c>1?"strongText":"emphasisText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},i={type:c>1?"strong":"emphasis",start:Object.assign({},l.start),end:Object.assign({},a.end)},e[r][1].end=Object.assign({},l.start),e[n][1].start=Object.assign({},a.end),u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=ae(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=ae(u,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",o,t]]),u=ae(u,en(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=ae(u,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(p=2,u=ae(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):p=0,be(e,r-1,n-r+3,u),n=r+u.length-p-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function vu(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=_n(r);let o;return l;function l(c){return o=c,e.enter("attentionSequence"),a(c)}function a(c){if(c===o)return e.consume(c),a;const u=e.exit("attentionSequence"),p=_n(c),d=!p||p===2&&i||n.includes(c),f=!i||i===2&&p||n.includes(r);return u._open=!!(o===42?d:d&&(i||!f)),u._close=!!(o===42?f:f&&(p||!d)),t(c)}}function Ln(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Eu={name:"autolink",tokenize:Tu};function Tu(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(h){return ke(h)?(e.consume(h),l):u(h)}function l(h){return h===43||h===45||h===46||se(h)?(r=1,a(h)):u(h)}function a(h){return h===58?(e.consume(h),r=0,c):(h===43||h===45||h===46||se(h))&&r++<32?(e.consume(h),a):(r=0,u(h))}function c(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||Ot(h)?n(h):(e.consume(h),c)}function u(h){return h===64?(e.consume(h),p):xu(h)?(e.consume(h),u):n(h)}function p(h){return se(h)?d(h):n(h)}function d(h){return h===46?(e.consume(h),r=0,p):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):f(h)}function f(h){if((h===45||se(h))&&r++<63){const w=h===45?f:d;return e.consume(h),w}return n(h)}}const ht={tokenize:Iu,partial:!0};function Iu(e,t,n){return r;function r(o){return G(o)?Q(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||R(o)?t(o):n(o)}}const Gr={name:"blockQuote",tokenize:Au,continuation:{tokenize:Pu},exit:zu};function Au(e,t,n){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),o}return n(l)}function o(l){return G(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function Pu(e,t,n){const r=this;return i;function i(l){return G(l)?Q(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return e.attempt(Gr,t,n)(l)}}function zu(e){e.exit("blockQuote")}const Yr={name:"characterEscape",tokenize:_u};function _u(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return Ur(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const qr={name:"characterReference",tokenize:Lu};function Lu(e,t,n){const r=this;let i=0,o,l;return a;function a(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),c}function c(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,l=se,p(d))}function u(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,l=mu,p):(e.enter("characterReferenceValue"),o=7,l=Mt,p(d))}function p(d){if(d===59&&i){const f=e.exit("characterReferenceValue");return l===se&&!Jt(r.sliceSerialize(f))?n(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(d)&&i++<o?(e.consume(d),p):n(d)}}const Bn={tokenize:Ou,partial:!0},On={name:"codeFenced",tokenize:Bu,concrete:!0};function Bu(e,t,n){const r=this,i={tokenize:M,partial:!0};let o=0,l=0,a;return c;function c(v){return u(v)}function u(v){const $=r.events[r.events.length-1];return o=$&&$[1].type==="linePrefix"?$[2].sliceSerialize($[1],!0).length:0,a=v,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),p(v)}function p(v){return v===a?(l++,e.consume(v),p):l<3?n(v):(e.exit("codeFencedFenceSequence"),G(v)?Q(e,d,"whitespace")(v):d(v))}function d(v){return v===null||R(v)?(e.exit("codeFencedFence"),r.interrupt?t(v):e.check(Bn,k,F)(v)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(v))}function f(v){return v===null||R(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(v)):G(v)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Q(e,h,"whitespace")(v)):v===96&&v===a?n(v):(e.consume(v),f)}function h(v){return v===null||R(v)?d(v):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(v))}function w(v){return v===null||R(v)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(v)):v===96&&v===a?n(v):(e.consume(v),w)}function k(v){return e.attempt(i,F,T)(v)}function T(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),b}function b(v){return o>0&&G(v)?Q(e,C,"linePrefix",o+1)(v):C(v)}function C(v){return v===null||R(v)?e.check(Bn,k,F)(v):(e.enter("codeFlowValue"),I(v))}function I(v){return v===null||R(v)?(e.exit("codeFlowValue"),C(v)):(e.consume(v),I)}function F(v){return e.exit("codeFenced"),t(v)}function M(v,$,q){let z=0;return O;function O(B){return v.enter("lineEnding"),v.consume(B),v.exit("lineEnding"),L}function L(B){return v.enter("codeFencedFence"),G(B)?Q(v,_,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(B):_(B)}function _(B){return B===a?(v.enter("codeFencedFenceSequence"),U(B)):q(B)}function U(B){return B===a?(z++,v.consume(B),U):z>=l?(v.exit("codeFencedFenceSequence"),G(B)?Q(v,H,"whitespace")(B):H(B)):q(B)}function H(B){return B===null||R(B)?(v.exit("codeFencedFence"),$(B)):q(B)}}}function Ou(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const bt={name:"codeIndented",tokenize:Ru},Mu={tokenize:Du,partial:!0};function Ru(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),Q(e,o,"linePrefix",4+1)(u)}function o(u){const p=r.events[r.events.length-1];return p&&p[1].type==="linePrefix"&&p[2].sliceSerialize(p[1],!0).length>=4?l(u):n(u)}function l(u){return u===null?c(u):R(u)?e.attempt(Mu,l,c)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||R(u)?(e.exit("codeFlowValue"),l(u)):(e.consume(u),a)}function c(u){return e.exit("codeIndented"),t(u)}}function Du(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):R(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):Q(e,o,"linePrefix",4+1)(l)}function o(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):R(l)?i(l):n(l)}}const Fu={name:"codeText",tokenize:Hu,resolve:Nu,previous:$u};function Nu(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function $u(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Hu(e,t,n){let r=0,i,o;return l;function l(d){return e.enter("codeText"),e.enter("codeTextSequence"),a(d)}function a(d){return d===96?(e.consume(d),r++,a):(e.exit("codeTextSequence"),c(d))}function c(d){return d===null?n(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),c):d===96?(o=e.enter("codeTextSequence"),i=0,p(d)):R(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),c):(e.enter("codeTextData"),u(d))}function u(d){return d===null||d===32||d===96||R(d)?(e.exit("codeTextData"),c(d)):(e.consume(d),u)}function p(d){return d===96?(e.consume(d),i++,p):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(d)):(o.type="codeTextData",u(d))}}function Wr(e){const t={};let n=-1,r,i,o,l,a,c,u;for(;++n<e.length;){for(;n in t;)n=t[n];if(r=e[n],n&&r[1].type==="chunkFlow"&&e[n-1][1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,o=0,o<c.length&&c[o][1].type==="lineEndingBlank"&&(o+=2),o<c.length&&c[o][1].type==="content"))for(;++o<c.length&&c[o][1].type!=="content";)c[o][1].type==="chunkText"&&(c[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,Vu(e,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--&&(l=e[o],l[1].type==="lineEnding"||l[1].type==="lineEndingBlank");)l[0]==="enter"&&(i&&(e[i][1].type="lineEndingBlank"),l[1].type="lineEnding",i=o);i&&(r[1].end=Object.assign({},e[i][1].start),a=e.slice(i,n),a.unshift(r),be(e,i,n-i+1,a))}}return!u}function Vu(e,t){const n=e[t][1],r=e[t][2];let i=t-1;const o=[],l=n._tokenizer||r.parser[n.contentType](n.start),a=l.events,c=[],u={};let p,d,f=-1,h=n,w=0,k=0;const T=[k];for(;h;){for(;e[++i][1]!==h;);o.push(i),h._tokenizer||(p=r.sliceStream(h),h.next||p.push(null),d&&l.defineSkip(h.start),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(p),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),d=h,h=h.next}for(h=n;++f<a.length;)a[f][0]==="exit"&&a[f-1][0]==="enter"&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(k=f+1,T.push(k),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(l.events=[],h?(h._tokenizer=void 0,h.previous=void 0):T.pop(),f=T.length;f--;){const b=a.slice(T[f],T[f+1]),C=o.pop();c.unshift([C,C+b.length-1]),be(e,C,2,b)}for(f=-1;++f<c.length;)u[w+c[f][0]]=w+c[f][1],w+=c[f][1]-c[f][0]-1;return u}const Uu={tokenize:qu,resolve:Yu},Gu={tokenize:Wu,partial:!0};function Yu(e){return Wr(e),e}function qu(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):R(a)?e.check(Gu,l,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function l(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function Wu(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Q(e,o,"linePrefix")}function o(l){if(l===null||R(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function Qr(e,t,n,r,i,o,l,a,c){const u=c||Number.POSITIVE_INFINITY;let p=0;return d;function d(b){return b===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(b),e.exit(o),f):b===null||b===32||b===41||Ot(b)?n(b):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),k(b))}function f(b){return b===62?(e.enter(o),e.consume(b),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),h(b))}function h(b){return b===62?(e.exit("chunkString"),e.exit(a),f(b)):b===null||b===60||R(b)?n(b):(e.consume(b),b===92?w:h)}function w(b){return b===60||b===62||b===92?(e.consume(b),h):h(b)}function k(b){return!p&&(b===null||b===41||re(b))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(b)):p<u&&b===40?(e.consume(b),p++,k):b===41?(e.consume(b),p--,k):b===null||b===32||b===40||Ot(b)?n(b):(e.consume(b),b===92?T:k)}function T(b){return b===40||b===41||b===92?(e.consume(b),k):k(b)}}function Xr(e,t,n,r,i,o){const l=this;let a=0,c;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(o),p}function p(h){return a>999||h===null||h===91||h===93&&!c||h===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(h):h===93?(e.exit(o),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):R(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),p):(e.enter("chunkString",{contentType:"string"}),d(h))}function d(h){return h===null||h===91||h===93||R(h)||a++>999?(e.exit("chunkString"),p(h)):(e.consume(h),c||(c=!G(h)),h===92?f:d)}function f(h){return h===91||h===92||h===93?(e.consume(h),a++,d):d(h)}}function Zr(e,t,n,r,i,o){let l;return a;function a(f){return f===34||f===39||f===40?(e.enter(r),e.enter(i),e.consume(f),e.exit(i),l=f===40?41:f,c):n(f)}function c(f){return f===l?(e.enter(i),e.consume(f),e.exit(i),e.exit(r),t):(e.enter(o),u(f))}function u(f){return f===l?(e.exit(o),c(l)):f===null?n(f):R(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),Q(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),p(f))}function p(f){return f===l||f===null||R(f)?(e.exit("chunkString"),u(f)):(e.consume(f),f===92?d:p)}function d(f){return f===l||f===92?(e.consume(f),p):p(f)}}function Ye(e,t){let n;return r;function r(i){return R(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):G(i)?Q(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const Qu={name:"definition",tokenize:Zu},Xu={tokenize:Ku,partial:!0};function Zu(e,t,n){const r=this;let i;return o;function o(h){return e.enter("definition"),l(h)}function l(h){return Xr.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function a(h){return i=Re(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),c):n(h)}function c(h){return re(h)?Ye(e,u)(h):u(h)}function u(h){return Qr(e,p,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function p(h){return e.attempt(Xu,d,d)(h)}function d(h){return G(h)?Q(e,f,"whitespace")(h):f(h)}function f(h){return h===null||R(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function Ku(e,t,n){return r;function r(a){return re(a)?Ye(e,i)(a):n(a)}function i(a){return Zr(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return G(a)?Q(e,l,"whitespace")(a):l(a)}function l(a){return a===null||R(a)?t(a):n(a)}}const Ju={name:"hardBreakEscape",tokenize:ec};function ec(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return R(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const tc={name:"headingAtx",tokenize:rc,resolve:nc};function nc(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},be(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function rc(e,t,n){let r=0;return i;function i(p){return e.enter("atxHeading"),o(p)}function o(p){return e.enter("atxHeadingSequence"),l(p)}function l(p){return p===35&&r++<6?(e.consume(p),l):p===null||re(p)?(e.exit("atxHeadingSequence"),a(p)):n(p)}function a(p){return p===35?(e.enter("atxHeadingSequence"),c(p)):p===null||R(p)?(e.exit("atxHeading"),t(p)):G(p)?Q(e,a,"whitespace")(p):(e.enter("atxHeadingText"),u(p))}function c(p){return p===35?(e.consume(p),c):(e.exit("atxHeadingSequence"),a(p))}function u(p){return p===null||p===35||re(p)?(e.exit("atxHeadingText"),a(p)):(e.consume(p),u)}}const ic=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Mn=["pre","script","style","textarea"],oc={name:"htmlFlow",tokenize:uc,resolveTo:ac,concrete:!0},lc={tokenize:pc,partial:!0},sc={tokenize:cc,partial:!0};function ac(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function uc(e,t,n){const r=this;let i,o,l,a,c;return u;function u(m){return p(m)}function p(m){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(m),d}function d(m){return m===33?(e.consume(m),f):m===47?(e.consume(m),o=!0,k):m===63?(e.consume(m),i=3,r.interrupt?t:x):ke(m)?(e.consume(m),l=String.fromCharCode(m),T):n(m)}function f(m){return m===45?(e.consume(m),i=2,h):m===91?(e.consume(m),i=5,a=0,w):ke(m)?(e.consume(m),i=4,r.interrupt?t:x):n(m)}function h(m){return m===45?(e.consume(m),r.interrupt?t:x):n(m)}function w(m){const fe="CDATA[";return m===fe.charCodeAt(a++)?(e.consume(m),a===fe.length?r.interrupt?t:_:w):n(m)}function k(m){return ke(m)?(e.consume(m),l=String.fromCharCode(m),T):n(m)}function T(m){if(m===null||m===47||m===62||re(m)){const fe=m===47,Ie=l.toLowerCase();return!fe&&!o&&Mn.includes(Ie)?(i=1,r.interrupt?t(m):_(m)):ic.includes(l.toLowerCase())?(i=6,fe?(e.consume(m),b):r.interrupt?t(m):_(m)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(m):o?C(m):I(m))}return m===45||se(m)?(e.consume(m),l+=String.fromCharCode(m),T):n(m)}function b(m){return m===62?(e.consume(m),r.interrupt?t:_):n(m)}function C(m){return G(m)?(e.consume(m),C):O(m)}function I(m){return m===47?(e.consume(m),O):m===58||m===95||ke(m)?(e.consume(m),F):G(m)?(e.consume(m),I):O(m)}function F(m){return m===45||m===46||m===58||m===95||se(m)?(e.consume(m),F):M(m)}function M(m){return m===61?(e.consume(m),v):G(m)?(e.consume(m),M):I(m)}function v(m){return m===null||m===60||m===61||m===62||m===96?n(m):m===34||m===39?(e.consume(m),c=m,$):G(m)?(e.consume(m),v):q(m)}function $(m){return m===c?(e.consume(m),c=null,z):m===null||R(m)?n(m):(e.consume(m),$)}function q(m){return m===null||m===34||m===39||m===47||m===60||m===61||m===62||m===96||re(m)?M(m):(e.consume(m),q)}function z(m){return m===47||m===62||G(m)?I(m):n(m)}function O(m){return m===62?(e.consume(m),L):n(m)}function L(m){return m===null||R(m)?_(m):G(m)?(e.consume(m),L):n(m)}function _(m){return m===45&&i===2?(e.consume(m),Z):m===60&&i===1?(e.consume(m),J):m===62&&i===4?(e.consume(m),de):m===63&&i===3?(e.consume(m),x):m===93&&i===5?(e.consume(m),ye):R(m)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(lc,je,U)(m)):m===null||R(m)?(e.exit("htmlFlowData"),U(m)):(e.consume(m),_)}function U(m){return e.check(sc,H,je)(m)}function H(m){return e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),B}function B(m){return m===null||R(m)?U(m):(e.enter("htmlFlowData"),_(m))}function Z(m){return m===45?(e.consume(m),x):_(m)}function J(m){return m===47?(e.consume(m),l="",ie):_(m)}function ie(m){if(m===62){const fe=l.toLowerCase();return Mn.includes(fe)?(e.consume(m),de):_(m)}return ke(m)&&l.length<8?(e.consume(m),l+=String.fromCharCode(m),ie):_(m)}function ye(m){return m===93?(e.consume(m),x):_(m)}function x(m){return m===62?(e.consume(m),de):m===45&&i===2?(e.consume(m),x):_(m)}function de(m){return m===null||R(m)?(e.exit("htmlFlowData"),je(m)):(e.consume(m),de)}function je(m){return e.exit("htmlFlow"),t(m)}}function cc(e,t,n){const r=this;return i;function i(l){return R(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):n(l)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function pc(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(ht,t,n)}}const hc={name:"htmlText",tokenize:dc};function dc(e,t,n){const r=this;let i,o,l;return a;function a(x){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(x),c}function c(x){return x===33?(e.consume(x),u):x===47?(e.consume(x),M):x===63?(e.consume(x),I):ke(x)?(e.consume(x),q):n(x)}function u(x){return x===45?(e.consume(x),p):x===91?(e.consume(x),o=0,w):ke(x)?(e.consume(x),C):n(x)}function p(x){return x===45?(e.consume(x),h):n(x)}function d(x){return x===null?n(x):x===45?(e.consume(x),f):R(x)?(l=d,J(x)):(e.consume(x),d)}function f(x){return x===45?(e.consume(x),h):d(x)}function h(x){return x===62?Z(x):x===45?f(x):d(x)}function w(x){const de="CDATA[";return x===de.charCodeAt(o++)?(e.consume(x),o===de.length?k:w):n(x)}function k(x){return x===null?n(x):x===93?(e.consume(x),T):R(x)?(l=k,J(x)):(e.consume(x),k)}function T(x){return x===93?(e.consume(x),b):k(x)}function b(x){return x===62?Z(x):x===93?(e.consume(x),b):k(x)}function C(x){return x===null||x===62?Z(x):R(x)?(l=C,J(x)):(e.consume(x),C)}function I(x){return x===null?n(x):x===63?(e.consume(x),F):R(x)?(l=I,J(x)):(e.consume(x),I)}function F(x){return x===62?Z(x):I(x)}function M(x){return ke(x)?(e.consume(x),v):n(x)}function v(x){return x===45||se(x)?(e.consume(x),v):$(x)}function $(x){return R(x)?(l=$,J(x)):G(x)?(e.consume(x),$):Z(x)}function q(x){return x===45||se(x)?(e.consume(x),q):x===47||x===62||re(x)?z(x):n(x)}function z(x){return x===47?(e.consume(x),Z):x===58||x===95||ke(x)?(e.consume(x),O):R(x)?(l=z,J(x)):G(x)?(e.consume(x),z):Z(x)}function O(x){return x===45||x===46||x===58||x===95||se(x)?(e.consume(x),O):L(x)}function L(x){return x===61?(e.consume(x),_):R(x)?(l=L,J(x)):G(x)?(e.consume(x),L):z(x)}function _(x){return x===null||x===60||x===61||x===62||x===96?n(x):x===34||x===39?(e.consume(x),i=x,U):R(x)?(l=_,J(x)):G(x)?(e.consume(x),_):(e.consume(x),H)}function U(x){return x===i?(e.consume(x),i=void 0,B):x===null?n(x):R(x)?(l=U,J(x)):(e.consume(x),U)}function H(x){return x===null||x===34||x===39||x===60||x===61||x===96?n(x):x===47||x===62||re(x)?z(x):(e.consume(x),H)}function B(x){return x===47||x===62||re(x)?z(x):n(x)}function Z(x){return x===62?(e.consume(x),e.exit("htmlTextData"),e.exit("htmlText"),t):n(x)}function J(x){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),ie}function ie(x){return G(x)?Q(e,ye,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(x):ye(x)}function ye(x){return e.enter("htmlTextData"),l(x)}}const tn={name:"labelEnd",tokenize:wc,resolveTo:yc,resolveAll:gc},fc={tokenize:kc},xc={tokenize:bc},mc={tokenize:jc};function gc(e){let t=-1;for(;++t<e.length;){const n=e[t][1];(n.type==="labelImage"||n.type==="labelLink"||n.type==="labelEnd")&&(e.splice(t+1,n.type==="labelImage"?4:2),n.type="data",t++)}return e}function yc(e,t){let n=e.length,r=0,i,o,l,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const c={type:e[o][1].type==="labelLink"?"link":"image",start:Object.assign({},e[o][1].start),end:Object.assign({},e[e.length-1][1].end)},u={type:"label",start:Object.assign({},e[o][1].start),end:Object.assign({},e[l][1].end)},p={type:"labelText",start:Object.assign({},e[o+r+2][1].end),end:Object.assign({},e[l-2][1].start)};return a=[["enter",c,t],["enter",u,t]],a=ae(a,e.slice(o+1,o+r+3)),a=ae(a,[["enter",p,t]]),a=ae(a,en(t.parser.constructs.insideSpan.null,e.slice(o+r+4,l-3),t)),a=ae(a,[["exit",p,t],e[l-2],e[l-1],["exit",u,t]]),a=ae(a,e.slice(l+1)),a=ae(a,[["exit",c,t]]),be(e,o,e.length,a),e}function wc(e,t,n){const r=this;let i=r.events.length,o,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(f){return o?o._inactive?d(f):(l=r.parser.defined.includes(Re(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(fc,p,l?p:d)(f):f===91?e.attempt(xc,p,l?u:d)(f):l?p(f):d(f)}function u(f){return e.attempt(mc,p,d)(f)}function p(f){return t(f)}function d(f){return o._balanced=!0,n(f)}}function kc(e,t,n){return r;function r(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),i}function i(d){return re(d)?Ye(e,o)(d):o(d)}function o(d){return d===41?p(d):Qr(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function l(d){return re(d)?Ye(e,c)(d):p(d)}function a(d){return n(d)}function c(d){return d===34||d===39||d===40?Zr(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):p(d)}function u(d){return re(d)?Ye(e,p)(d):p(d)}function p(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),t):n(d)}}function bc(e,t,n){const r=this;return i;function i(a){return Xr.call(r,e,o,l,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(Re(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function l(a){return n(a)}}function jc(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const Cc={name:"labelStartImage",tokenize:Sc,resolveAll:tn.resolveAll};function Sc(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const vc={name:"labelStartLink",tokenize:Ec,resolveAll:tn.resolveAll};function Ec(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const jt={name:"lineEnding",tokenize:Tc};function Tc(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Q(e,t,"linePrefix")}}const tt={name:"thematicBreak",tokenize:Ic};function Ic(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),l(u)}function l(u){return i=u,a(u)}function a(u){return u===i?(e.enter("thematicBreakSequence"),c(u)):r>=3&&(u===null||R(u))?(e.exit("thematicBreak"),t(u)):n(u)}function c(u){return u===i?(e.consume(u),r++,c):(e.exit("thematicBreakSequence"),G(u)?Q(e,a,"whitespace")(u):a(u))}}const ne={name:"list",tokenize:zc,continuation:{tokenize:_c},exit:Bc},Ac={tokenize:Oc,partial:!0},Pc={tokenize:Lc,partial:!0};function zc(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(h){const w=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:Mt(h)){if(r.containerState.type||(r.containerState.type=w,e.enter(w,{_container:!0})),w==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(tt,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(h)}return n(h)}function c(h){return Mt(h)&&++l<10?(e.consume(h),c):(!r.interrupt||l<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(ht,r.interrupt?n:p,e.attempt(Ac,f,d))}function p(h){return r.containerState.initialBlankLine=!0,o++,f(h)}function d(h){return G(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),f):n(h)}function f(h){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function _c(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(ht,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Q(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!G(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Pc,t,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,Q(e,e.attempt(ne,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Lc(e,t,n){const r=this;return Q(e,i,"listItemIndent",r.containerState.size+1);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(o):n(o)}}function Bc(e){e.exit(this.containerState.type)}function Oc(e,t,n){const r=this;return Q(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4+1);function i(o){const l=r.events[r.events.length-1];return!G(o)&&l&&l[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const Rn={name:"setextUnderline",tokenize:Rc,resolveTo:Mc};function Mc(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const l={type:"setextHeading",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",l,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end=Object.assign({},e[o][1].end)):e[r][1]=l,e.push(["exit",l,t]),e}function Rc(e,t,n){const r=this;let i;return o;function o(u){let p=r.events.length,d;for(;p--;)if(r.events[p][1].type!=="lineEnding"&&r.events[p][1].type!=="linePrefix"&&r.events[p][1].type!=="content"){d=r.events[p][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(e.enter("setextHeadingLine"),i=u,l(u)):n(u)}function l(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),G(u)?Q(e,c,"lineSuffix")(u):c(u))}function c(u){return u===null||R(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const Dc={tokenize:Fc};function Fc(e){const t=this,n=e.attempt(ht,r,e.attempt(this.parser.constructs.flowInitial,i,Q(e,e.attempt(this.parser.constructs.flow,i,e.attempt(Uu,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Nc={resolveAll:Jr()},$c=Kr("string"),Hc=Kr("text");function Kr(e){return{tokenize:t,resolveAll:Jr(e==="text"?Vc:void 0)};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,l,a);return l;function l(p){return u(p)?o(p):a(p)}function a(p){if(p===null){n.consume(p);return}return n.enter("data"),n.consume(p),c}function c(p){return u(p)?(n.exit("data"),o(p)):(n.consume(p),c)}function u(p){if(p===null)return!0;const d=i[p];let f=-1;if(d)for(;++f<d.length;){const h=d[f];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Jr(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function Vc(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,l=-1,a=0,c;for(;o--;){const u=i[o];if(typeof u=="string"){for(l=u.length;u.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(u===-2)c=!0,a++;else if(u!==-1){o++;break}}if(a){const u={type:n===e.length||c||a<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-a,offset:r.end.offset-a,_index:r.start._index+o,_bufferIndex:o?l:r.start._bufferIndex+l},end:Object.assign({},r.end)};r.end=Object.assign({},u.start),r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}function Uc(e,t,n){let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const i={},o=[];let l=[],a=[];const c={consume:C,enter:I,exit:F,attempt:$(M),check:$(v),interrupt:$(v,{interrupt:!0})},u={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:h,sliceSerialize:f,now:w,defineSkip:k,write:d};let p=t.tokenize.call(u,c);return t.resolveAll&&o.push(t),u;function d(L){return l=ae(l,L),T(),l[l.length-1]!==null?[]:(q(t,0),u.events=en(o,u.events,u),u.events)}function f(L,_){return Yc(h(L),_)}function h(L){return Gc(l,L)}function w(){const{line:L,column:_,offset:U,_index:H,_bufferIndex:B}=r;return{line:L,column:_,offset:U,_index:H,_bufferIndex:B}}function k(L){i[L.line]=L.column,O()}function T(){let L;for(;r._index<l.length;){const _=l[r._index];if(typeof _=="string")for(L=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===L&&r._bufferIndex<_.length;)b(_.charCodeAt(r._bufferIndex));else b(_)}}function b(L){p=p(L)}function C(L){R(L)?(r.line++,r.column=1,r.offset+=L===-3?2:1,O()):L!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=L}function I(L,_){const U=_||{};return U.type=L,U.start=w(),u.events.push(["enter",U,u]),a.push(U),U}function F(L){const _=a.pop();return _.end=w(),u.events.push(["exit",_,u]),_}function M(L,_){q(L,_.from)}function v(L,_){_.restore()}function $(L,_){return U;function U(H,B,Z){let J,ie,ye,x;return Array.isArray(H)?je(H):"tokenize"in H?je([H]):de(H);function de(ee){return Ne;function Ne(ve){const Le=ve!==null&&ee[ve],Ae=ve!==null&&ee.null,xt=[...Array.isArray(Le)?Le:Le?[Le]:[],...Array.isArray(Ae)?Ae:Ae?[Ae]:[]];return je(xt)(ve)}}function je(ee){return J=ee,ie=0,ee.length===0?Z:m(ee[ie])}function m(ee){return Ne;function Ne(ve){return x=z(),ye=ee,ee.partial||(u.currentConstruct=ee),ee.name&&u.parser.constructs.disable.null.includes(ee.name)?Ie():ee.tokenize.call(_?Object.assign(Object.create(u),_):u,c,fe,Ie)(ve)}}function fe(ee){return L(ye,x),B}function Ie(ee){return x.restore(),++ie<J.length?m(J[ie]):Z}}}function q(L,_){L.resolveAll&&!o.includes(L)&&o.push(L),L.resolve&&be(u.events,_,u.events.length-_,L.resolve(u.events.slice(_),u)),L.resolveTo&&(u.events=L.resolveTo(u.events,u))}function z(){const L=w(),_=u.previous,U=u.currentConstruct,H=u.events.length,B=Array.from(a);return{restore:Z,from:H};function Z(){r=L,u.previous=_,u.currentConstruct=U,u.events.length=H,a=B,O()}}function O(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Gc(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,o)];else{if(l=e.slice(n,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}o>0&&l.push(e[i].slice(0,o))}return l}function Yc(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(o)}i=o===-2,r.push(l)}return r.join("")}const qc={42:ne,43:ne,45:ne,48:ne,49:ne,50:ne,51:ne,52:ne,53:ne,54:ne,55:ne,56:ne,57:ne,62:Gr},Wc={91:Qu},Qc={[-2]:bt,[-1]:bt,32:bt},Xc={35:tc,42:tt,45:[Rn,tt],60:oc,61:Rn,95:tt,96:On,126:On},Zc={38:qr,92:Yr},Kc={[-5]:jt,[-4]:jt,[-3]:jt,33:Cc,38:qr,42:Rt,60:[Eu,hc],91:vc,92:[Ju,Yr],93:tn,95:Rt,96:Fu},Jc={null:[Rt,Nc]},ep={null:[42,95]},tp={null:[]},np=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:ep,contentInitial:Wc,disable:tp,document:qc,flow:Xc,flowInitial:Qc,insideSpan:Jc,string:Zc,text:Kc},Symbol.toStringTag,{value:"Module"}));function rp(e){const n=pu([np,...(e||{}).extensions||[]]),r={defined:[],lazy:{},constructs:n,content:i(wu),document:i(bu),flow:i(Dc),string:i($c),text:i(Hc)};return r;function i(o){return l;function l(a){return Uc(r,o,a)}}}function ip(e){for(;!Wr(e););return e}const Dn=/[\0\t\n\r]/g;function op(){let e=1,t="",n=!0,r;return i;function i(o,l,a){const c=[];let u,p,d,f,h;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(l||void 0).decode(o)),d=0,t="",n&&(o.charCodeAt(0)===65279&&d++,n=void 0);d<o.length;){if(Dn.lastIndex=d,u=Dn.exec(o),f=u&&u.index!==void 0?u.index:o.length,h=o.charCodeAt(f),!u){t=o.slice(d);break}if(h===10&&d===f&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),d<f&&(c.push(o.slice(d,f)),e+=f-d),h){case 0:{c.push(65533),e++;break}case 9:{for(p=Math.ceil(e/4)*4,c.push(-2);e++<p;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}d=f+1}return a&&(r&&c.push(-5),t&&c.push(t),c.push(null)),c}}const lp=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function sp(e){return e.replace(lp,ap)}function ap(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return Vr(n.slice(o?2:1),o?16:10)}return Jt(n)||e}const ei={}.hasOwnProperty;function up(e,t,n){return typeof t!="string"&&(n=t,t=void 0),cp(n)(ip(rp(n).document().write(op()(e,t,!0))))}function cp(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(pn),autolinkProtocol:z,autolinkEmail:z,atxHeading:o(an),blockQuote:o(Le),characterEscape:z,characterReference:z,codeFenced:o(Ae),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(Ae,l),codeText:o(xt,l),codeTextData:z,data:z,codeFlowValue:z,definition:o(di),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(fi),hardBreakEscape:o(un),hardBreakTrailing:o(un),htmlFlow:o(cn,l),htmlFlowData:z,htmlText:o(cn,l),htmlTextData:z,image:o(xi),label:l,link:o(pn),listItem:o(mi),listItemValue:f,listOrdered:o(hn,d),listUnordered:o(hn),paragraph:o(gi),reference:m,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(an),strong:o(yi),thematicBreak:o(ki)},exit:{atxHeading:c(),atxHeadingSequence:M,autolink:c(),autolinkEmail:ve,autolinkProtocol:Ne,blockQuote:c(),characterEscapeValue:O,characterReferenceMarkerHexadecimal:Ie,characterReferenceMarkerNumeric:Ie,characterReferenceValue:ee,codeFenced:c(T),codeFencedFence:k,codeFencedFenceInfo:h,codeFencedFenceMeta:w,codeFlowValue:O,codeIndented:c(b),codeText:c(B),codeTextData:O,data:O,definition:c(),definitionDestinationString:F,definitionLabelString:C,definitionTitleString:I,emphasis:c(),hardBreakEscape:c(_),hardBreakTrailing:c(_),htmlFlow:c(U),htmlFlowData:O,htmlText:c(H),htmlTextData:O,image:c(J),label:ye,labelText:ie,lineEnding:L,link:c(Z),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:fe,resourceDestinationString:x,resourceTitleString:de,resource:je,setextHeading:c(q),setextHeadingLineSequence:$,setextHeadingText:v,strong:c(),thematicBreak:c()}};ti(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(j){let A={type:"root",children:[]};const D={stack:[A],tokenStack:[],config:t,enter:a,exit:u,buffer:l,resume:p,data:n},V=[];let Y=-1;for(;++Y<j.length;)if(j[Y][1].type==="listOrdered"||j[Y][1].type==="listUnordered")if(j[Y][0]==="enter")V.push(Y);else{const xe=V.pop();Y=i(j,xe,Y)}for(Y=-1;++Y<j.length;){const xe=t[j[Y][0]];ei.call(xe,j[Y][1].type)&&xe[j[Y][1].type].call(Object.assign({sliceSerialize:j[Y][2].sliceSerialize},D),j[Y][1])}if(D.tokenStack.length>0){const xe=D.tokenStack[D.tokenStack.length-1];(xe[1]||Fn).call(D,void 0,xe[0])}for(A.position={start:Ee(j.length>0?j[0][1].start:{line:1,column:1,offset:0}),end:Ee(j.length>0?j[j.length-2][1].end:{line:1,column:1,offset:0})},Y=-1;++Y<t.transforms.length;)A=t.transforms[Y](A)||A;return A}function i(j,A,D){let V=A-1,Y=-1,xe=!1,Pe,Ce,$e,He;for(;++V<=D;){const oe=j[V];switch(oe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{oe[0]==="enter"?Y++:Y--,He=void 0;break}case"lineEndingBlank":{oe[0]==="enter"&&(Pe&&!He&&!Y&&!$e&&($e=V),He=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:He=void 0}if(!Y&&oe[0]==="enter"&&oe[1].type==="listItemPrefix"||Y===-1&&oe[0]==="exit"&&(oe[1].type==="listUnordered"||oe[1].type==="listOrdered")){if(Pe){let Be=V;for(Ce=void 0;Be--;){const Se=j[Be];if(Se[1].type==="lineEnding"||Se[1].type==="lineEndingBlank"){if(Se[0]==="exit")continue;Ce&&(j[Ce][1].type="lineEndingBlank",xe=!0),Se[1].type="lineEnding",Ce=Be}else if(!(Se[1].type==="linePrefix"||Se[1].type==="blockQuotePrefix"||Se[1].type==="blockQuotePrefixWhitespace"||Se[1].type==="blockQuoteMarker"||Se[1].type==="listItemIndent"))break}$e&&(!Ce||$e<Ce)&&(Pe._spread=!0),Pe.end=Object.assign({},Ce?j[Ce][1].start:oe[1].end),j.splice(Ce||V,0,["exit",Pe,oe[2]]),V++,D++}if(oe[1].type==="listItemPrefix"){const Be={type:"listItem",_spread:!1,start:Object.assign({},oe[1].start),end:void 0};Pe=Be,j.splice(V,0,["enter",Be,oe[2]]),V++,D++,$e=void 0,He=!0}}}return j[A][1]._spread=xe,D}function o(j,A){return D;function D(V){a.call(this,j(V),V),A&&A.call(this,V)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(j,A,D){this.stack[this.stack.length-1].children.push(j),this.stack.push(j),this.tokenStack.push([A,D]),j.position={start:Ee(A.start),end:void 0}}function c(j){return A;function A(D){j&&j.call(this,D),u.call(this,D)}}function u(j,A){const D=this.stack.pop(),V=this.tokenStack.pop();if(V)V[0].type!==j.type&&(A?A.call(this,j,V[0]):(V[1]||Fn).call(this,j,V[0]));else throw new Error("Cannot close `"+j.type+"` ("+Ge({start:j.start,end:j.end})+"): it’s not open");D.position.end=Ee(j.end)}function p(){return uu(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(j){if(this.data.expectingFirstListItemValue){const A=this.stack[this.stack.length-2];A.start=Number.parseInt(this.sliceSerialize(j),10),this.data.expectingFirstListItemValue=void 0}}function h(){const j=this.resume(),A=this.stack[this.stack.length-1];A.lang=j}function w(){const j=this.resume(),A=this.stack[this.stack.length-1];A.meta=j}function k(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function T(){const j=this.resume(),A=this.stack[this.stack.length-1];A.value=j.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function b(){const j=this.resume(),A=this.stack[this.stack.length-1];A.value=j.replace(/(\r?\n|\r)$/g,"")}function C(j){const A=this.resume(),D=this.stack[this.stack.length-1];D.label=A,D.identifier=Re(this.sliceSerialize(j)).toLowerCase()}function I(){const j=this.resume(),A=this.stack[this.stack.length-1];A.title=j}function F(){const j=this.resume(),A=this.stack[this.stack.length-1];A.url=j}function M(j){const A=this.stack[this.stack.length-1];if(!A.depth){const D=this.sliceSerialize(j).length;A.depth=D}}function v(){this.data.setextHeadingSlurpLineEnding=!0}function $(j){const A=this.stack[this.stack.length-1];A.depth=this.sliceSerialize(j).codePointAt(0)===61?1:2}function q(){this.data.setextHeadingSlurpLineEnding=void 0}function z(j){const D=this.stack[this.stack.length-1].children;let V=D[D.length-1];(!V||V.type!=="text")&&(V=wi(),V.position={start:Ee(j.start),end:void 0},D.push(V)),this.stack.push(V)}function O(j){const A=this.stack.pop();A.value+=this.sliceSerialize(j),A.position.end=Ee(j.end)}function L(j){const A=this.stack[this.stack.length-1];if(this.data.atHardBreak){const D=A.children[A.children.length-1];D.position.end=Ee(j.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(A.type)&&(z.call(this,j),O.call(this,j))}function _(){this.data.atHardBreak=!0}function U(){const j=this.resume(),A=this.stack[this.stack.length-1];A.value=j}function H(){const j=this.resume(),A=this.stack[this.stack.length-1];A.value=j}function B(){const j=this.resume(),A=this.stack[this.stack.length-1];A.value=j}function Z(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const A=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=A,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function J(){const j=this.stack[this.stack.length-1];if(this.data.inReference){const A=this.data.referenceType||"shortcut";j.type+="Reference",j.referenceType=A,delete j.url,delete j.title}else delete j.identifier,delete j.label;this.data.referenceType=void 0}function ie(j){const A=this.sliceSerialize(j),D=this.stack[this.stack.length-2];D.label=sp(A),D.identifier=Re(A).toLowerCase()}function ye(){const j=this.stack[this.stack.length-1],A=this.resume(),D=this.stack[this.stack.length-1];if(this.data.inReference=!0,D.type==="link"){const V=j.children;D.children=V}else D.alt=A}function x(){const j=this.resume(),A=this.stack[this.stack.length-1];A.url=j}function de(){const j=this.resume(),A=this.stack[this.stack.length-1];A.title=j}function je(){this.data.inReference=void 0}function m(){this.data.referenceType="collapsed"}function fe(j){const A=this.resume(),D=this.stack[this.stack.length-1];D.label=A,D.identifier=Re(this.sliceSerialize(j)).toLowerCase(),this.data.referenceType="full"}function Ie(j){this.data.characterReferenceType=j.type}function ee(j){const A=this.sliceSerialize(j),D=this.data.characterReferenceType;let V;D?(V=Vr(A,D==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):V=Jt(A);const Y=this.stack.pop();Y.value+=V,Y.position.end=Ee(j.end)}function Ne(j){O.call(this,j);const A=this.stack[this.stack.length-1];A.url=this.sliceSerialize(j)}function ve(j){O.call(this,j);const A=this.stack[this.stack.length-1];A.url="mailto:"+this.sliceSerialize(j)}function Le(){return{type:"blockquote",children:[]}}function Ae(){return{type:"code",lang:null,meta:null,value:""}}function xt(){return{type:"inlineCode",value:""}}function di(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function fi(){return{type:"emphasis",children:[]}}function an(){return{type:"heading",depth:0,children:[]}}function un(){return{type:"break"}}function cn(){return{type:"html",value:""}}function xi(){return{type:"image",title:null,url:"",alt:null}}function pn(){return{type:"link",title:null,url:"",children:[]}}function hn(j){return{type:"list",ordered:j.type==="listOrdered",start:null,spread:j._spread,children:[]}}function mi(j){return{type:"listItem",spread:j._spread,checked:null,children:[]}}function gi(){return{type:"paragraph",children:[]}}function yi(){return{type:"strong",children:[]}}function wi(){return{type:"text",value:""}}function ki(){return{type:"thematicBreak"}}}function Ee(e){return{line:e.line,column:e.column,offset:e.offset}}function ti(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?ti(e,r):pp(e,r)}}function pp(e,t){let n;for(n in t)if(ei.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Fn(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ge({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ge({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ge({start:t.start,end:t.end})+") is still open")}function hp(e){const t=this;t.parser=n;function n(r){return up(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function dp(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function fp(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function xp(e,t){const n=t.value?t.value+`
`:"",r={};t.lang&&(r.className=["language-"+t.lang]);let i={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(i.data={meta:t.meta}),e.patch(t,i),i=e.applyData(t,i),i={type:"element",tagName:"pre",properties:{},children:[i]},e.patch(t,i),i}function mp(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function gp(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function yp(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=Fe(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let l,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=o+1,a+=1,e.footnoteCounts.set(r,a);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,c);const u={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,u),e.applyData(t,u)}function wp(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function kp(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function ni(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function bp(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ni(e,t);const i={src:Fe(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function jp(e,t){const n={src:Fe(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Cp(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Sp(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return ni(e,t);const i={href:Fe(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function vp(e,t){const n={href:Fe(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ep(e,t,n){const r=e.all(t),i=n?Tp(n):ri(t),o={},l=[];if(typeof t.checked=="boolean"){const p=r[0];let d;p&&p.type==="element"&&p.tagName==="p"?d=p:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const p=r[a];(i||a!==0||p.type!=="element"||p.tagName!=="p")&&l.push({type:"text",value:`
`}),p.type==="element"&&p.tagName==="p"&&!i?l.push(...p.children):l.push(p)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&l.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:l};return e.patch(t,u),e.applyData(t,u)}function Tp(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=ri(n[r])}return t}function ri(e){const t=e.spread;return t??e.children.length>1}function Ip(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function Ap(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Pp(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function zp(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function _p(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=Qt(t.children[1]),c=Mr(t.children[t.children.length-1]);a&&c&&(l.position={start:a,end:c}),i.push(l)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function Lp(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:t.children.length;let c=-1;const u=[];for(;++c<a;){const d=t.children[c],f={},h=l?l[c]:void 0;h&&(f.align=h);let w={type:"element",tagName:o,properties:f,children:[]};d&&(w.children=e.all(d),e.patch(d,w),w=e.applyData(d,w)),u.push(w)}const p={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,p),e.applyData(t,p)}function Bp(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Nn=9,$n=32;function Op(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Hn(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Hn(t.slice(i),i>0,!1)),o.join("")}function Hn(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===Nn||o===$n;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===Nn||o===$n;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function Mp(e,t){const n={type:"text",value:Op(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Rp(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const Dp={blockquote:dp,break:fp,code:xp,delete:mp,emphasis:gp,footnoteReference:yp,heading:wp,html:kp,imageReference:bp,image:jp,inlineCode:Cp,linkReference:Sp,link:vp,listItem:Ep,list:Ip,paragraph:Ap,root:Pp,strong:zp,table:_p,tableCell:Bp,tableRow:Lp,text:Mp,thematicBreak:Rp,toml:Ke,yaml:Ke,definition:Ke,footnoteDefinition:Ke};function Ke(){}const ii=-1,dt=0,ot=1,lt=2,nn=3,rn=4,on=5,ln=6,oi=7,li=8,Vn=typeof self=="object"?self:globalThis,Fp=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,l]=t[i];switch(o){case dt:case ii:return n(l,i);case ot:{const a=n([],i);for(const c of l)a.push(r(c));return a}case lt:{const a=n({},i);for(const[c,u]of l)a[r(c)]=r(u);return a}case nn:return n(new Date(l),i);case rn:{const{source:a,flags:c}=l;return n(new RegExp(a,c),i)}case on:{const a=n(new Map,i);for(const[c,u]of l)a.set(r(c),r(u));return a}case ln:{const a=n(new Set,i);for(const c of l)a.add(r(c));return a}case oi:{const{name:a,message:c}=l;return n(new Vn[a](c),i)}case li:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i)}return n(new Vn[o](l),i)};return r},Un=e=>Fp(new Map,e)(0),Oe="",{toString:Np}={},{keys:$p}=Object,Ve=e=>{const t=typeof e;if(t!=="object"||!e)return[dt,t];const n=Np.call(e).slice(8,-1);switch(n){case"Array":return[ot,Oe];case"Object":return[lt,Oe];case"Date":return[nn,Oe];case"RegExp":return[rn,Oe];case"Map":return[on,Oe];case"Set":return[ln,Oe]}return n.includes("Array")?[ot,n]:n.includes("Error")?[oi,n]:[lt,n]},Je=([e,t])=>e===dt&&(t==="function"||t==="symbol"),Hp=(e,t,n,r)=>{const i=(l,a)=>{const c=r.push(l)-1;return n.set(a,c),c},o=l=>{if(n.has(l))return n.get(l);let[a,c]=Ve(l);switch(a){case dt:{let p=l;switch(c){case"bigint":a=li,p=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);p=null;break;case"undefined":return i([ii],l)}return i([a,p],l)}case ot:{if(c)return i([c,[...l]],l);const p=[],d=i([a,p],l);for(const f of l)p.push(o(f));return d}case lt:{if(c)switch(c){case"BigInt":return i([c,l.toString()],l);case"Boolean":case"Number":case"String":return i([c,l.valueOf()],l)}if(t&&"toJSON"in l)return o(l.toJSON());const p=[],d=i([a,p],l);for(const f of $p(l))(e||!Je(Ve(l[f])))&&p.push([o(f),o(l[f])]);return d}case nn:return i([a,l.toISOString()],l);case rn:{const{source:p,flags:d}=l;return i([a,{source:p,flags:d}],l)}case on:{const p=[],d=i([a,p],l);for(const[f,h]of l)(e||!(Je(Ve(f))||Je(Ve(h))))&&p.push([o(f),o(h)]);return d}case ln:{const p=[],d=i([a,p],l);for(const f of l)(e||!Je(Ve(f)))&&p.push(o(f));return d}}const{message:u}=l;return i([a,{name:c,message:u}],l)};return o},Gn=(e,{json:t,lossy:n}={})=>{const r=[];return Hp(!(t||n),!!t,new Map,r)(e),r},st=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Un(Gn(e,t)):structuredClone(e):(e,t)=>Un(Gn(e,t));function Vp(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Up(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function Gp(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||Vp,r=e.options.footnoteBackLabel||Up,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let c=-1;for(;++c<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[c]);if(!u)continue;const p=e.all(u),d=String(u.identifier).toUpperCase(),f=Fe(d.toLowerCase());let h=0;const w=[],k=e.footnoteCounts.get(d);for(;k!==void 0&&++h<=k;){w.length>0&&w.push({type:"text",value:" "});let C=typeof n=="string"?n:n(c,h);typeof C=="string"&&(C={type:"text",value:C}),w.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,h),className:["data-footnote-backref"]},children:Array.isArray(C)?C:[C]})}const T=p[p.length-1];if(T&&T.type==="element"&&T.tagName==="p"){const C=T.children[T.children.length-1];C&&C.type==="text"?C.value+=" ":T.children.push({type:"text",value:" "}),T.children.push(...w)}else p.push(...w);const b={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(p,!0)};e.patch(u,b),a.push(b)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...st(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const si=function(e){if(e==null)return Qp;if(typeof e=="function")return ft(e);if(typeof e=="object")return Array.isArray(e)?Yp(e):qp(e);if(typeof e=="string")return Wp(e);throw new Error("Expected function, string, or object as test")};function Yp(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=si(e[n]);return ft(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function qp(e){const t=e;return ft(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function Wp(e){return ft(t);function t(n){return n&&n.type===e}}function ft(e){return t;function t(n,r,i){return!!(Xp(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function Qp(){return!0}function Xp(e){return e!==null&&typeof e=="object"&&"type"in e}const ai=[],Zp=!0,Yn=!1,Kp="skip";function Jp(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=si(i),l=r?-1:1;a(e,void 0,[])();function a(c,u,p){const d=c&&typeof c=="object"?c:{};if(typeof d.type=="string"){const h=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(h?"<"+h+">":""))+")"})}return f;function f(){let h=ai,w,k,T;if((!t||o(c,u,p[p.length-1]||void 0))&&(h=eh(n(c,p)),h[0]===Yn))return h;if("children"in c&&c.children){const b=c;if(b.children&&h[0]!==Kp)for(k=(r?b.children.length:-1)+l,T=p.concat(b);k>-1&&k<b.children.length;){const C=b.children[k];if(w=a(C,k,T)(),w[0]===Yn)return w;k=typeof w[1]=="number"?w[1]:k+l}}return h}}}function eh(e){return Array.isArray(e)?e:typeof e=="number"?[Zp,e]:e==null?ai:[e]}function ui(e,t,n,r){let i,o,l;typeof t=="function"&&typeof n!="function"?(o=void 0,l=t,i=n):(o=t,l=n,i=r),Jp(e,o,a,i);function a(c,u){const p=u[u.length-1],d=p?p.children.indexOf(c):void 0;return l(c,d,p)}}const Dt={}.hasOwnProperty,th={};function nh(e,t){const n=t||th,r=new Map,i=new Map,o=new Map,l={...Dp,...n.handlers},a={all:u,applyData:ih,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:l,one:c,options:n,patch:rh,wrap:lh};return ui(e,function(p){if(p.type==="definition"||p.type==="footnoteDefinition"){const d=p.type==="definition"?r:i,f=String(p.identifier).toUpperCase();d.has(f)||d.set(f,p)}}),a;function c(p,d){const f=p.type,h=a.handlers[f];if(Dt.call(a.handlers,f)&&h)return h(a,p,d);if(a.options.passThrough&&a.options.passThrough.includes(f)){if("children"in p){const{children:k,...T}=p,b=st(T);return b.children=a.all(p),b}return st(p)}return(a.options.unknownHandler||oh)(a,p,d)}function u(p){const d=[];if("children"in p){const f=p.children;let h=-1;for(;++h<f.length;){const w=a.one(f[h],p);if(w){if(h&&f[h-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=qn(w.value)),!Array.isArray(w)&&w.type==="element")){const k=w.children[0];k&&k.type==="text"&&(k.value=qn(k.value))}Array.isArray(w)?d.push(...w):d.push(w)}}}return d}}function rh(e,t){e.position&&(t.position=Fa(e))}function ih(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&o&&Object.assign(n.properties,st(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function oh(e,t){const n=t.data||{},r="value"in t&&!(Dt.call(n,"hProperties")||Dt.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function lh(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function qn(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Wn(e,t){const n=nh(e,t),r=n.one(e,void 0),i=Gp(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function sh(e,t){return e&&"run"in e?async function(n,r){const i=Wn(n,t);await e.run(i,r)}:function(n){return Wn(n,t||e)}}function Qn(e){if(e)throw e}var nt=Object.prototype.hasOwnProperty,ci=Object.prototype.toString,Xn=Object.defineProperty,Zn=Object.getOwnPropertyDescriptor,Kn=function(t){return typeof Array.isArray=="function"?Array.isArray(t):ci.call(t)==="[object Array]"},Jn=function(t){if(!t||ci.call(t)!=="[object Object]")return!1;var n=nt.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&nt.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||nt.call(t,i)},er=function(t,n){Xn&&n.name==="__proto__"?Xn(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},tr=function(t,n){if(n==="__proto__")if(nt.call(t,n)){if(Zn)return Zn(t,n).value}else return;return t[n]},ah=function e(){var t,n,r,i,o,l,a=arguments[0],c=1,u=arguments.length,p=!1;for(typeof a=="boolean"&&(p=a,a=arguments[1]||{},c=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});c<u;++c)if(t=arguments[c],t!=null)for(n in t)r=tr(a,n),i=tr(t,n),a!==i&&(p&&i&&(Jn(i)||(o=Kn(i)))?(o?(o=!1,l=r&&Kn(r)?r:[]):l=r&&Jn(r)?r:{},er(a,{name:n,newValue:e(p,l,i)})):typeof i<"u"&&er(a,{name:n,newValue:i}));return a};const Ct=Ti(ah);function Ft(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function uh(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(c,...u){const p=e[++o];let d=-1;if(c){l(c);return}for(;++d<i.length;)(u[d]===null||u[d]===void 0)&&(u[d]=i[d]);i=u,p?ch(p,a)(...u):l(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function ch(e,t){let n;return r;function r(...l){const a=e.length>l.length;let c;a&&l.push(i);try{c=e.apply(this,l)}catch(u){const p=u;if(a&&n)throw p;return i(p)}a||(c instanceof Promise?c.then(o,i):c instanceof Error?i(c):o(c))}function i(l,...a){n||(n=!0,t(l,...a))}function o(l){i(null,l)}}const we={basename:ph,dirname:hh,extname:dh,join:fh,sep:"/"};function ph(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Xe(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else l<0&&(o=!0,l=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function hh(e){if(Xe(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function dh(e){Xe(e);let t=e.length,n=-1,r=0,i=-1,o=0,l;for(;t--;){const a=e.codePointAt(t);if(a===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function fh(...e){let t=-1,n;for(;++t<e.length;)Xe(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":xh(n)}function xh(e){Xe(e);const t=e.codePointAt(0)===47;let n=mh(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function mh(e,t){let n="",r=0,i=-1,o=0,l=-1,a,c;for(;++l<=e.length;){if(l<e.length)a=e.codePointAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||o===1))if(i!==l-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf("/")),i=l,o=0;continue}}else if(n.length>0){n="",r=0,i=l,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,o=0}else a===46&&o>-1?o++:o=-1}return n}function Xe(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const gh={cwd:yh};function yh(){return"/"}function Nt(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function wh(e){if(typeof e=="string")e=new URL(e);else if(!Nt(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return kh(e)}function kh(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const St=["history","path","basename","stem","extname","dirname"];class pi{constructor(t){let n;t?Nt(t)?n={path:t}:typeof t=="string"||bh(t)?n={value:t}:n=t:n={},this.cwd=gh.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<St.length;){const o=St[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)St.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?we.basename(this.path):void 0}set basename(t){Et(t,"basename"),vt(t,"basename"),this.path=we.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?we.dirname(this.path):void 0}set dirname(t){nr(this.basename,"dirname"),this.path=we.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?we.extname(this.path):void 0}set extname(t){if(vt(t,"extname"),nr(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=we.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Nt(t)&&(t=wh(t)),Et(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?we.basename(this.path,this.extname):void 0}set stem(t){Et(t,"stem"),vt(t,"stem"),this.path=we.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new te(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function vt(e,t){if(e&&e.includes(we.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+we.sep+"`")}function Et(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function nr(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function bh(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const jh=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};Object.setPrototypeOf(o,r);const l=Object.getOwnPropertyNames(i);for(const a of l){const c=Object.getOwnPropertyDescriptor(i,a);c&&Object.defineProperty(o,a,c)}return o},Ch={}.hasOwnProperty;class sn extends jh{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=uh()}copy(){const t=new sn;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Ct(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(At("data",this.frozen),this.namespace[t]=n,this):Ch.call(this.namespace,t)&&this.namespace[t]||void 0:t?(At("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=et(t),r=this.parser||this.Parser;return Tt("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Tt("process",this.parser||this.Parser),It("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,l){const a=et(t),c=r.parse(a);r.run(c,a,function(p,d,f){if(p||!d||!f)return u(p);const h=d,w=r.stringify(h,f);Eh(w)?f.value=w:f.result=w,u(p,f)});function u(p,d){p||!d?l(p):o?o(d):n(void 0,d)}}}processSync(t){let n=!1,r;return this.freeze(),Tt("processSync",this.parser||this.Parser),It("processSync",this.compiler||this.Compiler),this.process(t,i),ir("processSync","process",n),r;function i(o,l){n=!0,Qn(o),r=l}}run(t,n,r){rr(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(l,a){const c=et(n);i.run(t,c,u);function u(p,d,f){const h=d||t;p?a(p):l?l(h):r(void 0,h,f)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),ir("runSync","run",r),i;function o(l,a){Qn(l),i=a,r=!0}}stringify(t,n){this.freeze();const r=et(n),i=this.compiler||this.Compiler;return It("stringify",i),rr(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(At("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")c(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[p,...d]=u;c(p,d)}else l(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function l(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=Ct(!0,i.settings,u.settings))}function a(u){let p=-1;if(u!=null)if(Array.isArray(u))for(;++p<u.length;){const d=u[p];o(d)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function c(u,p){let d=-1,f=-1;for(;++d<r.length;)if(r[d][0]===u){f=d;break}if(f===-1)r.push([u,...p]);else if(p.length>0){let[h,...w]=p;const k=r[f][1];Ft(k)&&Ft(h)&&(h=Ct(!0,k,h)),r[f]=[u,h,...w]}}}}const Sh=new sn().freeze();function Tt(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function It(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function At(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function rr(e){if(!Ft(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function ir(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function et(e){return vh(e)?e:new pi(e)}function vh(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Eh(e){return typeof e=="string"||Th(e)}function Th(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Ih="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",or=[],lr={allowDangerousHtml:!0},Ah=/^(https?|ircs?|mailto|xmpp)$/i,Ph=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function zh(e){const t=e.allowedElements,n=e.allowElement,r=e.children||"",i=e.className,o=e.components,l=e.disallowedElements,a=e.rehypePlugins||or,c=e.remarkPlugins||or,u=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...lr}:lr,p=e.skipHtml,d=e.unwrapDisallowed,f=e.urlTransform||_h,h=Sh().use(hp).use(c).use(sh,u).use(a),w=new pi;typeof r=="string"&&(w.value=r);for(const C of Ph)Object.hasOwn(e,C.from)&&(""+C.from+(C.to?"use `"+C.to+"` instead":"remove it")+Ih+C.id,void 0);const k=h.parse(w);let T=h.runSync(k,w);return i&&(T={type:"element",tagName:"div",properties:{className:i},children:T.type==="root"?T.children:[T]}),ui(T,b),Ga(T,{Fragment:s.Fragment,components:o,ignoreInvalidStyle:!0,jsx:s.jsx,jsxs:s.jsxs,passKeys:!0,passNode:!0});function b(C,I,F){if(C.type==="raw"&&F&&typeof I=="number")return p?F.children.splice(I,1):F.children[I]={type:"text",value:C.value},I;if(C.type==="element"){let M;for(M in kt)if(Object.hasOwn(kt,M)&&Object.hasOwn(C.properties,M)){const v=C.properties[M],$=kt[M];($===null||$.includes(C.tagName))&&(C.properties[M]=f(String(v||""),M,C))}}if(C.type==="element"){let M=t?!t.includes(C.tagName):l?l.includes(C.tagName):!1;if(!M&&n&&typeof I=="number"&&(M=!n(C,I,F)),M&&F&&typeof I=="number")return d&&C.children?F.children.splice(I,1,...C.children):F.children.splice(I,1),I}}}function _h(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t<0||i>-1&&t>i||n>-1&&t>n||r>-1&&t>r||Ah.test(e.slice(0,t))?e:""}const Lh=e=>s.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:s.jsxs("g",{id:"brand_awareness",children:[s.jsx("mask",{id:"mask0_3696_4540",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20",children:s.jsx("rect",{id:"Bounding box",width:"1em",height:"1em",fill:"currentColor"})}),s.jsx("g",{mask:"url(#mask0_3696_4540)",children:s.jsx("path",{id:"brand_awareness_2",d:"M15.577 10.625H13.8142C13.6368 10.625 13.4883 10.5652 13.3687 10.4455C13.249 10.3259 13.1892 10.1774 13.1892 10C13.1892 9.82269 13.249 9.67419 13.3687 9.55454C13.4883 9.43489 13.6368 9.37506 13.8142 9.37506H15.577C15.7543 9.37506 15.9028 9.43489 16.0225 9.55454C16.1421 9.67419 16.202 9.82269 16.202 10C16.202 10.1774 16.1421 10.3259 16.0225 10.4455C15.9028 10.5652 15.7543 10.625 15.577 10.625ZM12.1106 13.9279C12.2175 13.7816 12.354 13.6972 12.5201 13.6747C12.6862 13.6523 12.8425 13.6945 12.9888 13.8013L14.3943 14.8574C14.5406 14.9642 14.625 15.1007 14.6475 15.2669C14.6699 15.433 14.6277 15.5892 14.5209 15.7356C14.4141 15.882 14.2776 15.9664 14.1114 15.9888C13.9453 16.0112 13.7891 15.969 13.6427 15.8622L12.2372 14.8061C12.0909 14.6993 12.0065 14.5628 11.9841 14.3967C11.9616 14.2305 12.0038 14.0743 12.1106 13.9279ZM14.3622 5.1106L12.9568 6.16671C12.8104 6.27354 12.6542 6.31574 12.488 6.29331C12.3219 6.27087 12.1854 6.18646 12.0786 6.0401C11.9718 5.89374 11.9296 5.7375 11.952 5.57137C11.9744 5.40525 12.0588 5.26876 12.2052 5.16192L13.6106 4.10583C13.757 3.999 13.9133 3.9568 14.0794 3.97923C14.2455 4.00166 14.382 4.08606 14.4888 4.23244C14.5957 4.3788 14.6379 4.53504 14.6154 4.70116C14.593 4.86729 14.5086 5.00377 14.3622 5.1106ZM6.05778 12.0834H3.71805C3.5033 12.0834 3.32408 12.0115 3.18039 11.8678C3.03669 11.7241 2.96484 11.5449 2.96484 11.3301V8.66994C2.96484 8.4552 3.03669 8.27599 3.18039 8.13229C3.32408 7.98858 3.5033 7.91673 3.71805 7.91673H6.05778L8.55134 5.42317C8.75114 5.22339 8.9811 5.17771 9.24124 5.28614C9.50138 5.39459 9.63145 5.5909 9.63145 5.87508V14.125C9.63145 14.4092 9.50138 14.6055 9.24124 14.7139C8.9811 14.8224 8.75114 14.7767 8.55134 14.5769L6.05778 12.0834Z",fill:"currentColor"})})]})}),Bh=({trend:e,onClose:t,selectTrending:n})=>{const[r,i]=P.useState(!1),{close:o}=Pt("briefDescription"),l=P.useRef(null),a=()=>{n(e.topic)},c=P.useCallback(()=>{t(),o()},[t,o]),u=()=>{l.current&&(r?l.current.pause():l.current.play(),i(!r)),i(!r)};return P.useEffect(()=>(window.addEventListener("keydown",c),()=>{window.removeEventListener("keydown",c)}),[c]),s.jsxs(mo,{id:"briefDescription",kind:"regular",noWrap:!0,onClose:c,children:[e.audio_EN?s.jsxs(s.Fragment,{children:[s.jsxs(g,{direction:"row",justify:"flex-start",m:20,children:[s.jsx(ue,{onClick:u,size:"small",startIcon:r?s.jsx(ut,{}):s.jsx(Lh,{}),style:{marginRight:"10px"},children:"Listen"}),s.jsx(ue,{onClick:a,size:"small",startIcon:s.jsx(_i,{}),children:"Learn More"})]}),s.jsx(Dh,{ref:l,src:e.audio_EN,children:s.jsx("track",{kind:"captions"})})]}):null,s.jsx(Rh,{children:e.tldr_topic??e.topic}),s.jsx(Oh,{children:s.jsx(g,{children:s.jsx(Mh,{children:e.tldr&&s.jsx(zh,{children:e.tldr})})})})]})},Oh=S.div`
  max-height: 300px;
  overflow-y: auto;
  margin: 8px 0;
  padding: 0 20px;
`,Mh=S(X)`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Barlow';
  * {
    all: revert;
  }
`,Rh=S(X)`
  font-weight: 600;
  font-size: 20px;
  padding: 0 20px;
`,Dh=S.audio`
  height: 0;
  width: 0;
`,Fh=["Drivechain","Ordinals","L402","Nostr","AI"],Nh=({onSubmit:e})=>{var q;const{open:t}=Pt("addContent"),[n,r]=P.useState(!1),[i,o]=P.useState(!1),[l,a]=P.useState(null),c=P.useRef(null),[u,p]=P.useState(0),[d,f]=P.useState(!1),{open:h}=Pt("briefDescription"),{trendingTopics:w,setTrendingTopics:k}=ce(z=>z),{setValue:T}=pr(),b=P.useCallback(async()=>{r(!0),o(!1);try{const z=await Ii();z.length&&Array.isArray(z)&&k(z)}catch{k(Fh.map(O=>({topic:O,count:0})))}finally{r(!1)}},[k,o]);P.useEffect(()=>{w.length||b()},[b,w.length]),P.useEffect(()=>{const z=setTimeout(()=>{o(!0)},5e3);return()=>clearTimeout(z)},[o,n]);const C=z=>{T("search",z),e==null||e()},I=(z,O)=>{z.stopPropagation(),z.currentTarget.blur(),O!=null&&O.tldr&&(a(O),h())},F=()=>{a(null)},M=z=>{z.stopPropagation(),z.currentTarget.blur(),f(!d)};P.useEffect(()=>{var z,O;d?(z=c.current)==null||z.play():(O=c.current)==null||O.pause()},[u,d]);const v=()=>{p(z=>{var L,_;let O=(z+1)%w.length;for(;O!==z&&!((L=w[O])!=null&&L.audio_EN);)O=(O+1)%w.length;return O===z?(f(!1),O):((_=c.current)==null||_.load(),O===0&&(f(!1),p(0)),O)})},$=n?"Loading":"No new trending topics in the last 24 hours";return s.jsxs(Hh,{"data-testid":"trending-component",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"heading-container",children:[s.jsxs("div",{className:"heading",children:[s.jsx("span",{className:"heading__title",children:"Trending Topics"}),s.jsx("span",{className:"heading__icon",children:n?s.jsx(Vt,{color:y.white,size:16}):s.jsx(s.Fragment,{children:i?s.jsx(Uh,{onClick:b,size:"small",startIcon:s.jsx(ia,{})}):s.jsx(oa,{})})})]}),yo(w)?s.jsxs("div",{children:[s.jsx(ue,{onClick:z=>M(z),startIcon:d?s.jsx(ut,{}):s.jsx(Ht,{}),children:d?"Pause":"Play All"}),s.jsx(Gh,{ref:c,onEnded:v,src:(q=w[u])==null?void 0:q.audio_EN,children:s.jsx("track",{kind:"captions"})})]}):null]}),w.length===0?s.jsxs("div",{className:"trending-empty",children:[s.jsx(Vh,{children:$}),s.jsx(ue,{color:"secondary",disabled:n,onClick:t,size:"medium",startIcon:s.jsx(xo,{}),sx:{alignSelf:"flex-end",m:"0 36px 16px 0"},variant:"contained",children:"Add Content"})]}):s.jsx("ul",{className:"list",children:w.map(z=>s.jsxs(g,{align:"center",className:"list-item",direction:"row",justify:"space-between",onClick:()=>C(z.topic),children:[s.jsxs($h,{children:[" #",wo(z)]}),z.tldr&&s.jsx(ue,{onClick:O=>I(O,z),children:"TLDR"})]},z.topic))})]}),l&&s.jsx(Bh,{onClose:F,selectTrending:C,trend:l})]})},$h=S.div`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  letter-spacing: 0.3pt;
`,Hh=S(g)`
  .heading-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 12px 16px 24px;
  }
  .heading {
    display: flex;
    align-items: center;
    color: ${y.GRAY6};
    padding-right: 24px;
    font-family: Barlow;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 1.12px;
    text-transform: uppercase;
    &__icon {
      margin-left: 16px;
      font-size: 23px;
      height: 24px;
    }
  }
  .trending-empty {
    padding: 0 24px;
    color: ${y.GRAY6};
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    &-item {
      padding: 18px 16px 18px 24px;
      overflow: hidden;
      color: ${y.white};
      text-overflow: ellipsis;
      font-family: Barlow;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 11px;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        color: ${y.SECONDARY_BLUE};
      }
      &:active {
        background: rgba(0, 0, 0, 0.2);
        color: ${y.PRIMARY_BLUE};
      }
    }
  }
`,Vh=S.p`
  color: ${y.GRAY6};
  margin-bottom: 20px;
`,Uh=S(ue)`
  && {
    min-width: 28px;
    width: 28px;
    padding: 0;
    height: 28px;
    .MuiButton-startIcon {
      color: ${y.white};
      margin: auto;
      display: flex;
      align-items: center;
    }
  }
`,Gh=S.audio`
  height: 0;
  width: 0;
`,Yh=390,qh=P.forwardRef(({onSubmit:e,subViewOpen:t},n)=>{const{isFetching:r,setTeachMe:i,setSidebarFilter:o}=ce(T=>T),l=sr(),{setSidebarOpen:a,currentSearch:c,clearSearch:u,searchFormValue:p}=me(T=>T),[d]=Ai(T=>[T.trendingTopicsFlag]),{setValue:f}=pr(),h=P.useRef(null),[w,k]=P.useState(!1);return P.useEffect(()=>{f("search",p)},[f,p]),P.useEffect(()=>{const T=h.current;if(!T)return;const b=()=>{k((T==null?void 0:T.scrollTop)>0)};T.addEventListener("scroll",b)},[]),s.jsxs(Xh,{ref:n,id:"sidebar-wrapper",children:[s.jsx(n0,{}),s.jsxs(hi,{className:Ue({"has-shadow":w}),children:[s.jsxs(Zh,{children:[s.jsx(to,{onSubmit:e}),s.jsx(Jh,{onClick:()=>{if(c){f("search",""),u(),o("all");return}e==null||e()},children:r?s.jsx(Vt,{color:y.SECONDARY_BLUE,"data-testid":"loader",size:"20"}):s.jsx(s.Fragment,{children:c?s.jsx(Li,{}):s.jsx(Bi,{})})})]}),c&&s.jsx(Kh,{children:r?s.jsx(To,{}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"left",children:[s.jsx("span",{className:"count",children:l.length}),s.jsx("span",{className:"label",children:" results"})]}),s.jsx("div",{className:"right",style:{alignItems:"center"},children:s.jsx(Co,{})})]})})]}),!t&&s.jsx(e0,{onClick:()=>{a(!1),i(!1)},children:s.jsx(br,{})}),s.jsxs(t0,{ref:h,children:[!c&&d&&s.jsx(r0,{children:s.jsx(Nh,{onSubmit:e})}),s.jsx(g,{children:r?s.jsx(il,{}):s.jsx(tl,{isSearchResult:!!c})})]})]})}),Wh=["topic","person","guest","event","organization","place","project","software"],Qh=({onSubmit:e})=>{const{sidebarIsOpen:t}=me(o=>o),n=pe(),r=!!n&&t&&!Wh.includes(n.node_type),{showTeachMe:i}=ce(o=>o);return s.jsxs(s.Fragment,{children:[s.jsx(Yt,{direction:"right",in:t,mountOnEnter:!0,unmountOnExit:!0,children:s.jsx(qh,{onSubmit:e,subViewOpen:r})}),s.jsx(Zs,{open:r||!!i}),!t&&s.jsx(na,{})]})},Xh=S(g)(({theme:e})=>({position:"relative",background:y.BG1,height:"100vh",width:"100%",zIndex:30,[e.breakpoints.up("sm")]:{width:Yh}})),hi=S(g).attrs({direction:"column",justify:"center",align:"stretch"})(({theme:e})=>({padding:e.spacing(3.75,2),[e.breakpoints.up("sm")]:{padding:"12px"},"&.has-shadow":{borderBottom:"1px solid rgba(0, 0, 0, 0.25)",background:y.BG1,boxShadow:"0px 1px 6px 0px rgba(0, 0, 0, 0.20)"}})),Zh=S(g).attrs({direction:"row",justify:"center",align:"center"})`
  flex-grow: 1;
`,Kh=S(g).attrs({direction:"row",justify:"space-between",align:"center"})`
  flex-grow: 1;
  color: ${y.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 10px;
  padding: 0 8px;
  .count {
    color: ${y.white};
  }

  .right {
    display: flex;
  }
`,Jh=S(g).attrs({align:"center",justify:"center",p:5})`
  font-size: 32px;
  color: ${y.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;

  &:hover {
    /* background-color: ${y.gray200}; */
  }

  ${hi} input:focus + & {
    color: ${y.primaryBlue};
  }
`,e0=S(g).attrs({align:"center",justify:"center",p:8})(({theme:e})=>({backgroundColor:y.BG1_NORMAL,cursor:"pointer",transitionDuration:"0.2s",position:"absolute",right:"0px",top:"50%",zIndex:1,width:"24px",height:"48px",transform:"translateY(-50%)",borderRadius:"0px 6px 6px 0px",boxShadow:"2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset",color:y.white,[e.breakpoints.up("sm")]:{left:"100%"},"&:hover":{backgroundColor:y.BG1_HOVER},"&:active":{backgroundColor:y.BG1_PRESS,color:y.GRAY6}})),t0=S(g)(()=>({overflow:"auto",flex:1,width:"100%"})),n0=S(g)`
  height: 64px;
  background: ${y.BG2};
`,r0=S(g)`
  padding: 0;
  margin-bottom: 36px;
  margin-top: 20px;
`;Qh.displayName="Sidebar";export{Yh as MENU_WIDTH,Qh as SideBar};
