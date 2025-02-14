import{j as e,i as v,aY as y,a5 as M,u as U,r as c,by as L,aZ as C,az as S,aA as k,aB as B,F as i,aD as T,B as d,T as P,W as o,bz as R,bA as _,Y as O,U as A,bo as F}from"./strapi-CQ80_AWb.js";import{P as w}from"./PrivateRoute-BYKd2yE4-CkaJa1hD.js";const N=[{intlLabel:{id:"Usecase.front-end",defaultMessage:"Front-end developer"},value:"front_end_developer"},{intlLabel:{id:"Usecase.back-end",defaultMessage:"Back-end developer"},value:"back_end_developer"},{intlLabel:{id:"Usecase.full-stack",defaultMessage:"Full-stack developer"},value:"full_stack_developer"},{intlLabel:{id:"global.content-manager",defaultMessage:"Content Manager"},value:"content_manager"},{intlLabel:{id:"Usecase.content-creator",defaultMessage:"Content Creator"},value:"content_creator"},{intlLabel:{id:"Usecase.other",defaultMessage:"Other"},value:"other"}],z=()=>{const{toggleNotification:u}=v(),h=y(),g=M(),{formatMessage:s}=U(),[n,p]=c.useState(null),[l,f]=c.useState(""),{firstname:x,email:m}=L("UseCasePage",t=>t.user)??{},{hasAdmin:j}=C.parse(h.search,{ignoreQueryPrefix:!0}),b=n==="other",r=async(t,a)=>{t.preventDefault();try{await fetch("https://analytics.strapi.io/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:m,username:x,firstAdmin:!j,persona:{role:a?void 0:n,otherRole:a?void 0:l}})}),u({type:"success",message:s({id:"Usecase.notification.success.project-created",defaultMessage:"Project has been successfully created"})}),g("/")}catch{}};return e.jsx(S,{children:e.jsxs(k,{labelledBy:"usecase-title",children:[e.jsx(B,{children:e.jsxs("form",{onSubmit:t=>r(t,!1),children:[e.jsxs(i,{direction:"column",paddingBottom:7,children:[e.jsx(T,{}),e.jsx(d,{paddingTop:6,paddingBottom:1,width:"25rem",children:e.jsx(P,{textAlign:"center",variant:"alpha",tag:"h1",id:"usecase-title",children:s({id:"Usecase.title",defaultMessage:"Tell us a bit more about yourself"})})})]}),e.jsxs(i,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsxs(o.Root,{name:"usecase",children:[e.jsx(o.Label,{children:s({id:"Usecase.input.work-type",defaultMessage:"What type of work do you do?"})}),e.jsx(R,{onChange:t=>p(t),value:n,children:N.map(({intlLabel:t,value:a})=>e.jsx(_,{value:a,children:s(t)},a))})]}),b&&e.jsxs(o.Root,{name:"other",children:[e.jsx(o.Label,{children:s({id:"Usecase.other",defaultMessage:"Other"})}),e.jsx(O,{value:l,onChange:t=>f(t.target.value)})]}),e.jsx(A,{type:"submit",size:"L",fullWidth:!0,disabled:!n,children:s({id:"global.finish",defaultMessage:"Finish"})})]})]})}),e.jsx(i,{justifyContent:"center",children:e.jsx(d,{paddingTop:4,children:e.jsx(F,{onClick:t=>r(t,!0),children:s({id:"Usecase.button.skip",defaultMessage:"Skip this question"})})})})]})})},E=()=>e.jsx(w,{children:e.jsx(z,{})});export{E as PrivateUseCasePage,z as UseCasePage,N as options};
