import{g7 as fe,j as e,P as ae,aP as Te,u as $,l as Ce,a5 as Me,i as pe,n as Ae,r as E,g0 as De,g9 as Ee,gf as Ie,a0 as Pe,v as te,U as Oe,$ as _e,aU as Le,F as O,aL as ne,aM as he,T as V,ga as H,cy as Ne,G as U,ao as re,bv as qe,S as Y,a1 as we,h as me,bk as W,ah as Q,B as X,gg as de,g8 as Fe,m as We,W as C,aq as be,gh as ve,bz as ye,bA as ie,d as _,eQ as $e,V as ce,gi as K,eL as J,gj as Be,gk as ke,I as xe,eR as Ge,b_ as Ve,ar as je,cz as ze,cA as He,gl as Ue,Y as Ke,gm as Ye,aI as Qe,gn as Xe,go as ge}from"./strapi-CQ80_AWb.js";import{u as Re,D as Ze,H as Je,R as es,a as ss}from"./Layout-27uslS7w-rStBoIOC.js";import{g as ts}from"./getEmptyImage-CjqolaH3.js";import"./useDragLayer-BA9i9W5S.js";const rs=Ue.injectEndpoints({endpoints(s){return{getAdminRoles:s.query({query:()=>({url:"/admin/roles",method:"GET"}),transformResponse:t=>t.data})}}}),{useGetAdminRolesQuery:os}=rs,as=(s,t,{onCancel:r,onDropItem:n,onGrabItem:l,onMoveItem:d})=>{const[u,a]=E.useState(!1),v=m=>{u&&typeof t=="number"&&d&&(m==="UP"?d(t-1,t):m==="DOWN"&&d(t+1,t))},x=()=>{u?(n&&n(t),a(!1)):(l&&l(t),a(!0))},h=()=>{u&&(a(!1),r&&r(t))};return m=>{if(s&&!(m.key==="Tab"&&!u))switch(m.preventDefault(),m.key){case" ":case"Enter":x();break;case"Escape":h();break;case"ArrowDown":case"ArrowRight":v("DOWN");break;case"ArrowUp":case"ArrowLeft":v("UP");break}}},ue={UPWARD:"upward",DOWNWARD:"downward"},oe={REGULAR:"regular"},ns=(s,{type:t="STRAPI_DND",index:r,item:n,onStart:l,onEnd:d,onGrabItem:u,onDropItem:a,onCancel:v,onMoveItem:x,dropSensitivity:h=oe.REGULAR})=>{const g=E.useRef(null),[{handlerId:m,isOver:M},c]=ze({accept:t,collect(i){return{handlerId:i.getHandlerId(),isOver:i.isOver({shallow:!0})}},drop(i){const w=i.index;M&&a&&a(w,r)},hover(i,w){if(!g.current||!x)return;const j=i.index,k=r,I=g.current?.getBoundingClientRect(),A=(I.bottom-I.top)/2,q=w.getClientOffset();if(!q)return;const F=q&&q.y-I.top;if(typeof j=="number"&&typeof k=="number"){if(j===k||h===oe.REGULAR&&(j<k&&F<A||j>k&&F>A))return;x(k,j),i.index=k}else{if(Array.isArray(j)&&Array.isArray(k)){const z=Math.min(j.length,k.length);let B=!0,G=!1,f=!1;for(let o=0;o<z;o++)if(j[o]<k[o]){G=!0,B=!1;break}else if(j[o]>k[o]){f=!0,B=!1;break}if(B&&j.length===k.length||h===oe.REGULAR&&(G&&!f&&F<A||f&&!G&&F>A))return}x(k,j),i.index=k}}}),b=i=>{if(i&&i.isDragging()&&!i.didDrop()&&i.getInitialClientOffset()&&i.getClientOffset()){const w=i.getInitialClientOffset().y-i.getClientOffset().y;return w>0?ue.UPWARD:w<0?ue.DOWNWARD:null}return null},[{isDragging:T,direction:y},p,L]=He({type:t,item(){l&&l();const{width:i}=g.current?.getBoundingClientRect()??{};return{index:r,width:i,...n}},end(){d&&d()},canDrag:s,isDragging:n?.id?i=>n.id===i.getItem().id:void 0,collect:i=>({isDragging:i.isDragging(),initialOffset:i.getInitialClientOffset(),currentOffset:i.getClientOffset(),direction:b(i)})}),N=as(s,r,{onGrabItem:u,onDropItem:a,onCancel:v,onMoveItem:x});return[{handlerId:m,isDragging:T,handleKeyDown:N,isOverDropTarget:M,direction:y},g,c,p,L]},is=({children:s,...t})=>e.jsx(ls,{tag:"button",background:"neutral0",borderColor:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...t,children:e.jsx(V,{variant:"pi",fontWeight:"bold",children:e.jsxs(O,{tag:"span",gap:2,children:[e.jsx(Ve,{width:"2.4rem",height:"2.4rem","aria-hidden":!0}),s]})})}),ls=_(X)`
  border-radius: 26px;
  color: ${({theme:s})=>s.colors.neutral500};

  &:hover {
    color: ${({theme:s})=>s.colors.primary600};
  }

  &:active {
    color: ${({theme:s})=>s.colors.primary600};
  }
`,ds=({canDelete:s=!0,canUpdate:t=!0,isCreating:r})=>{const{formatMessage:n}=$(),{trackUsage:l}=me(),d=W("Stages",a=>a.addFieldRow),{value:u=[]}=Q("stages");return e.jsxs(O,{direction:"column",gap:6,width:"100%",children:[e.jsxs(X,{position:"relative",width:"100%",children:[e.jsx(cs,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2}),e.jsx(O,{direction:"column",alignItems:"stretch",gap:6,position:"relative",tag:"ol",children:u.map((a,v)=>e.jsx(X,{tag:"li",children:e.jsx(gs,{index:v,canDelete:u.length>1&&s,canReorder:u.length>1,canUpdate:t,stagesCount:u.length,defaultOpen:!a.id,...a})},a.__temp_key__))})]}),t&&e.jsx(is,{type:"button",onClick:()=>{d("stages",{name:""}),l("willCreateStage")},children:n({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})})]})},cs=_(X)`
  transform: translateX(-50%);
`,gs=({index:s,canDelete:t=!1,canReorder:r=!1,canUpdate:n=!1,stagesCount:l,name:d,permissions:u,color:a,defaultOpen:v})=>{const[x,h]=E.useState(),{formatMessage:g}=$(),{trackUsage:m}=me(),c=W("Stages",o=>o.errors.stages)?.[s],b=W("Stage",o=>o.addFieldRow),T=W("Stage",o=>o.moveFieldRow),y=W("Stage",o=>o.removeFieldRow),p=o=>`${o+1} of ${l}`,L=o=>{h(g({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:d,position:p(o)}))},N=o=>{h(g({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:d,position:p(o)}))},i=()=>{h(g({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:d}))},w=(o,R)=>{h(g({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:d,position:p(o)})),T("stages",R,o)},[{handlerId:j,isDragging:k,handleKeyDown:I},A,q,F,z]=ns(r,{index:s,item:{index:s,name:d},onGrabItem:L,onDropItem:N,onMoveItem:w,onCancel:i,type:ss.STAGE}),B=$e(A,q);E.useEffect(()=>{z(ts(),{captureDraggingState:!1})},[z,s]);const G=()=>{b("stages",{name:d,color:a,permissions:u})},f=E.useId();return e.jsxs(X,{ref:B,shadow:"tableShadow",children:[x&&e.jsx(ce,{"aria-live":"assertive",children:x}),k?e.jsx(X,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6}):e.jsx(us,{onValueChange:o=>{o&&m("willEditStage")},defaultValue:v?f:void 0,$error:Object.values(c??{}).length>0,children:e.jsxs(K.Item,{value:f,children:[e.jsxs(K.Header,{children:[e.jsx(K.Trigger,{children:d}),e.jsx(K.Actions,{children:t||n?e.jsxs(e.Fragment,{children:[e.jsxs(J.Root,{children:[e.jsxs(ps,{size:"S",endIcon:null,paddingLeft:2,paddingRight:2,children:[e.jsx(Be,{"aria-hidden":!0,focusable:!1}),e.jsx(ce,{tag:"span",children:g({id:"[tbdb].components.DynamicZone.more-actions",defaultMessage:"More actions"})})]}),e.jsx(J.Content,{popoverPlacement:"bottom-end",zIndex:2,children:e.jsxs(J.SubRoot,{children:[n&&e.jsx(ke,{onClick:G,children:g({id:"Settings.review-workflows.stage.delete",defaultMessage:"Duplicate stage"})}),t&&e.jsx(fs,{onClick:()=>y("stages",s),children:g({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete"})})]})})]}),n&&e.jsx(xe,{background:"transparent",hasRadius:!0,variant:"ghost","data-handler-id":j,ref:F,label:g({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:o=>o.stopPropagation(),onKeyDown:I,children:e.jsx(Ge,{})})]}):null})]}),e.jsx(K.Content,{children:e.jsx(Y.Root,{gap:4,padding:6,children:[{disabled:!n,label:g({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),name:`stages.${s}.name`,required:!0,size:6,type:"string"},{disabled:!n,label:g({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),name:`stages.${s}.color`,required:!0,size:6,type:"color"},{disabled:!n,label:g({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"}),name:`stages.${s}.permissions`,placeholder:g({id:"Settings.review-workflows.stage.permissions.placeholder",defaultMessage:"Select a role"}),required:!0,size:6,type:"permissions"}].map(({size:o,...R})=>e.jsx(Y.Item,{col:o,direction:"column",alignItems:"stretch",children:e.jsx(hs,{...R})},R.name))})})]})})]})},us=_(K.Root)`
  border: 1px solid
    ${({theme:s,$error:t})=>t?s.colors.danger600:s.colors.neutral200};
`,fs=_(ke)`
  color: ${({theme:s})=>s.colors.danger600};
`,ps=_(J.Trigger)`
  :hover,
  :focus {
    background-color: ${({theme:s})=>s.colors.neutral100};
  }

  > span {
    font-size: 0;
  }
`,hs=s=>{switch(s.type){case"color":return e.jsx(ws,{...s});case"permissions":return e.jsx(ms,{...s});default:return e.jsx(we,{...s})}},ws=({disabled:s,label:t,name:r,required:n})=>{const{formatMessage:l}=$(),{value:d,error:u,onChange:a}=Q(r),v=Xe.map(({hex:h,name:g})=>({value:h,label:l({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:g}),color:h})),{themeColorName:x}=ge(d)??{};return e.jsxs(C.Root,{error:u,name:r,required:n,children:[e.jsx(C.Label,{children:t}),e.jsx(ye,{disabled:s,onChange:h=>{a(r,h.toString())},value:d?.toUpperCase(),startIcon:e.jsx(O,{tag:"span",height:2,background:d,borderColor:x==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:v.map(({value:h,label:g,color:m})=>{const{themeColorName:M}=ge(m)||{};return e.jsx(ie,{value:h,startIcon:e.jsx(O,{tag:"span",height:2,background:m,borderColor:M==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),children:g},h)})}),e.jsx(C.Error,{})]})},ms=({disabled:s,name:t,placeholder:r,required:n})=>{const{formatMessage:l}=$(),{toggleNotification:d}=pe(),[u,a]=E.useState(!1),{value:v=[],error:x,onChange:h}=Q(t),g=W("PermissionsField",p=>p.values.stages),m=W("PermissionsField",p=>p.onChange),M=E.useRef(0),{data:c=[],isLoading:b,error:T}=os(),y=c?.filter(p=>p.code!=="strapi-super-admin")??[];return E.useEffect(()=>{!b&&T&&"status"in T&&T.status==403&&M.current===0&&(M.current=1,d({blockTransition:!0,type:"danger",message:l({id:"review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don’t have the permission to see roles. Contact your administrator."})}))},[l,b,c,d,T]),!b&&y.length===0?e.jsxs(C.Root,{name:t,hint:l({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don’t have the permission to see roles"}),required:n,children:[e.jsx(C.Label,{children:l({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"})}),e.jsx(Ke,{disabled:!0,placeholder:l({id:"components.NotAllowedInput.text",defaultMessage:"No permissions to see this field"}),startAction:e.jsx(Ye,{fill:"neutral600"}),type:"text",value:""}),e.jsx(C.Hint,{})]}):e.jsx(e.Fragment,{children:e.jsxs(O,{alignItems:"flex-end",gap:3,children:[e.jsx(vs,{grow:1,children:e.jsxs(C.Root,{error:x,name:t,required:!0,children:[e.jsx(C.Label,{children:l({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"})}),e.jsx(be,{disabled:s,onChange:p=>{const L=p.map(N=>({role:parseInt(N,10),action:"admin::review-workflows.stage.transition"}));h(t,L)},placeholder:r,value:v.map(p=>`${p.role}`),withTags:!0,children:e.jsx(ve,{label:l({id:"Settings.review-workflows.stage.permissions.allRoles.label",defaultMessage:"All roles"}),values:y.map(p=>`${p.id}`),children:y.map(p=>e.jsx(bs,{value:`${p.id}`,children:p.name},p.id))})}),e.jsx(C.Error,{})]})}),e.jsxs(ne.Root,{open:u,onOpenChange:a,children:[e.jsx(ne.Trigger,{children:e.jsx(xe,{disabled:s,label:l({id:"Settings.review-workflows.stage.permissions.apply.label",defaultMessage:"Apply to all stages"}),size:"L",children:e.jsx(Qe,{})})}),e.jsx(he,{onConfirm:()=>{m("stages",g.map(p=>({...p,permissions:v}))),a(!1),d({type:"success",message:l({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy.success",defaultMessage:"Applied roles to all other stages of the workflow"})})},variant:"default",children:l({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy",defaultMessage:"Roles that can change that stage will be applied to all the other stages."})})]})]})})},bs=_(je)`
  padding-left: ${({theme:s})=>s.spaces[7]};
`,vs=_(O)`
  > * {
    flex-grow: 1;
  }
`,ys=({canUpdate:s=!0})=>{const{formatMessage:t}=$();return e.jsxs(Y.Root,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow",children:[e.jsx(Y.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsx(we,{disabled:!s,label:t({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),name:"name",required:!0,type:"string"})}),e.jsx(Y.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsx(ks,{disabled:!s})}),e.jsx(Y.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsx(Rs,{disabled:!s})})]})},ks=({disabled:s})=>{const{formatMessage:t,locale:r}=$(),{data:n,isLoading:l}=Fe(),{workflows:d}=Re(),u=W("ContentTypesSelector",c=>c.values),{error:a,value:v,onChange:x}=Q("contentTypes"),h=We(r,{sensitivity:"base"}),g=s||l||!n||n.collectionType.length===0&&n.singleType.length===0,m=(n?.collectionType??[]).toSorted((c,b)=>h.compare(c.info.displayName,b.info.displayName)).map(c=>({label:c.info.displayName,value:c.uid})),M=(n?.singleType??[]).map(c=>({label:c.info.displayName,value:c.uid}));return e.jsxs(C.Root,{error:a,name:"contentTypes",children:[e.jsx(C.Label,{children:t({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"})}),e.jsx(be,{customizeContent:c=>t({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:c?.length}),disabled:g,onChange:c=>{x("contentTypes",c)},value:v,placeholder:t({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"}),children:[...m.length>0?[{label:t({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:m}]:[],...M.length>0?[{label:t({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:M}]:[]].map(c=>e.jsx(ve,{label:c.label,values:c.children.map(b=>b.value.toString()),children:c.children.map(b=>{const{name:T}=d?.find(y=>(u&&y.id!==u.id||!u)&&y.contentTypes.includes(b.value))??{};return e.jsx(xs,{value:b.value,children:e.jsx(V,{children:t({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:b.label,name:T,em:(...y)=>e.jsx(V,{tag:"em",fontWeight:"bold",children:y}),i:(...y)=>e.jsx(js,{children:y})})})},b.value)})},c.label))})]})},xs=_(je)`
  padding-left: ${({theme:s})=>s.spaces[7]};
`,js=_(V)`
  font-style: italic;
`,Rs=({disabled:s})=>{const{value:t=[]}=Q("stages"),{formatMessage:r}=$(),{error:n,value:l,onChange:d}=Q("stageRequiredToPublish"),u=t.filter(a=>a.name);return e.jsxs(C.Root,{error:n,name:"stageRequiredToPublish",hint:r({id:"settings.review-workflows.workflow.stageRequiredToPublish.hint",defaultMessage:"Prevents entries from being published if they are not at the required stage."}),children:[e.jsx(C.Label,{children:r({id:"settings.review-workflows.workflow.stageRequiredToPublish.label",defaultMessage:"Required stage for publishing"})}),e.jsxs(ye,{disabled:s,onChange:a=>{d("stageRequiredToPublish",a)},value:l,children:[e.jsx(ie,{value:"",children:r({id:"settings.review-workflows.workflow.stageRequiredToPublish.any",defaultMessage:"Any stage"})}),u.map((a,v)=>e.jsx(ie,{value:a.id?.toString()||a.__temp_key__,children:a.name},`requiredToPublishStage-${a.id||a.__temp_key__}`))]}),e.jsx(C.Hint,{})]})},Ss=te({contentTypes:re().of(U()),name:U().max(255,{id:"review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"}).required().nullable(),stages:re().of(te().shape({name:U().nullable().required({id:"review-workflows.validation.stage.name",defaultMessage:"Name is required"}).max(255,{id:"review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"}).test("unique-name",{id:"review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"},(s,t)=>{const{stages:r}=t.from[1].value;return r.filter(n=>n.name===s).length===1}),color:U().nullable().required({id:"review-workflows.validation.stage.color",defaultMessage:"Color is required"}).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i),permissions:re(te({role:qe().strict().typeError({id:"review-workflows.validation.stage.permissions.role.number",defaultMessage:"Role must be of type number"}).required(),action:U().required({id:"review-workflows.validation.stage.permissions.action.required",defaultMessage:"Action is a required argument"})})).strict()})).min(1),stageRequiredToPublish:U().nullable()}),Ts=()=>{const{id:s=""}=Te(),t=s==="create",{formatMessage:r}=$(),{_unstableFormatValidationErrors:n}=Ce(),l=Me(),{toggleNotification:d}=pe(),{isLoading:u,meta:a,workflows:v,error:x,update:h,create:g}=Re(),m=fe(f=>f.admin_app.permissions.settings?.["review-workflows"]),{allowedActions:{canDelete:M,canUpdate:c,canCreate:b}}=Ae(m),[T,y]=E.useState({}),{getFeature:p,isLoading:L}=De(),[N,i]=E.useState(null),w=v?.find(f=>f.id===parseInt(s,10)),j=v?.filter(f=>f.id!==parseInt(s,10)).flatMap(f=>f.contentTypes),k=p("review-workflows"),I=k?.[Ee],A=k?.[Ie],q=async(f,o)=>{try{const{stageRequiredToPublish:R,...P}=f,D=R===""?null:P.stages.find(S=>S.id===Number(R)||S.__temp_key__===R)?.name;if(t){const S=await g({...P,stageRequiredToPublishName:D});"error"in S&&de(S.error)&&S.error.name==="ValidationError"?o.setErrors(n(S.error)):"data"in S&&l(`../${S.data.id}`,{replace:!0})}else{const S=await h(s,{...P,stages:P.stages.map(Z=>{let le=!0;const ee=w?.stages?.find(se=>se.id===Z?.id);return ee&&(le=ee.permissions?.length!==Z.permissions?.length||!ee.permissions?.every(se=>!!Z.permissions?.find(Se=>Se.role===se.role))),{...Z,permissions:le?Z.permissions:void 0}}),stageRequiredToPublishName:D});"error"in S&&de(S.error)&&S.error.name==="ValidationError"&&o.setErrors(n(S.error))}}catch{d({type:"danger",message:r({id:"notification.error",defaultMessage:"An error occurred"})})}y({})},F=(f,o)=>async()=>{await q(f,o)},z=()=>{y({})},B=async(f,o)=>{const R=f.contentTypes.some(D=>j?.includes(D)),P=!t&&!w?.stages.every(D=>f.stages.some(S=>S.id===D.id));a&&I&&a?.workflowCount>parseInt(I,10)?i("workflow"):f.stages&&A&&f.stages.length>parseInt(A,10)?i("stage"):P||R?(P&&y(D=>({...D,hasDeletedServerStages:!0})),R&&y(D=>({...D,hasReassignedContentTypes:!0}))):await q(f,o)};E.useEffect(()=>{!u&&!L&&(a&&I&&a?.workflowCount>parseInt(I,10)?i("workflow"):w&&w.stages&&A&&w.stages.length>parseInt(A,10)&&i("stage"))},[w,L,u,k,a,I,A]);const G=E.useMemo(()=>t||!w?{name:"",stages:[],contentTypes:[],stageRequiredToPublish:""}:{name:w.name,stages:Cs(w.stages),contentTypes:w.contentTypes,stageRequiredToPublish:w.stageRequiredToPublish?.id.toString()??""},[w,t]);return u?e.jsx(ae.Loading,{}):x?e.jsx(ae.Error,{}):e.jsxs(e.Fragment,{children:[e.jsx(Ze,{}),e.jsx(Pe,{method:t?"POST":"PUT",initialValues:G,validationSchema:Ss,onSubmit:B,children:({modified:f,isSubmitting:o,values:R,setErrors:P})=>e.jsxs(e.Fragment,{children:[e.jsx(Je,{navigationAction:e.jsx(Le,{fallback:".."}),primaryAction:c||b?e.jsx(Oe,{startIcon:e.jsx(_e,{}),type:"submit",disabled:!f||o||R.stages.length===0,loading:!(Object.keys(T).length>0)&&o,children:r({id:"global.save",defaultMessage:"Save"})}):null,subtitle:r({id:"review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:w?.stages?.length??0}),title:w?.name||r({id:"Settings.review-workflows.create.page.title",defaultMessage:"Create Review Workflow"})}),e.jsx(es,{children:e.jsxs(O,{alignItems:"stretch",direction:"column",gap:7,children:[e.jsx(ys,{canUpdate:c||b}),e.jsx(ds,{canDelete:M,canUpdate:c||b,isCreating:t})]})}),e.jsx(ne.Root,{open:Object.keys(T).length>0,onOpenChange:z,children:e.jsx(he,{onConfirm:F(R,{setErrors:P}),children:e.jsxs(O,{direction:"column",gap:5,children:[T.hasDeletedServerStages&&e.jsx(V,{textAlign:"center",variant:"omega",children:r({id:"review-workflows.page.delete.confirm.stages.body",defaultMessage:"All entries assigned to deleted stages will be moved to the previous stage."})}),T.hasReassignedContentTypes&&e.jsx(V,{textAlign:"center",variant:"omega",children:r({id:"review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:j?.filter(D=>R.contentTypes.includes(D)).length??0})}),e.jsx(V,{textAlign:"center",variant:"omega",children:r({id:"review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})})]})}),e.jsxs(H.Root,{open:N==="workflow",onOpenChange:()=>i(null),children:[e.jsx(H.Title,{children:r({id:"review-workflows.edit.page.workflows.limit.title",defaultMessage:"You’ve reached the limit of workflows in your plan"})}),e.jsx(H.Body,{children:r({id:"review-workflows.edit.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),e.jsxs(H.Root,{open:N==="stage",onOpenChange:()=>i(null),children:[e.jsx(H.Title,{children:r({id:"review-workflows.edit.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),e.jsx(H.Body,{children:r({id:"review-workflows.edit.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})},Cs=s=>{const t=Ne(void 0,void 0,s.length);return s.map((r,n)=>({...r,__temp_key__:t[n]}))},Is=()=>{const s=fe(t=>{const{create:r=[],update:n=[],read:l=[]}=t.admin_app.permissions.settings?.["review-workflows"]??{};return[...r,...n,...l]});return e.jsx(ae.Protect,{permissions:s,children:e.jsx(Ts,{})})};export{Is as ProtectedEditPage};
