import{g7 as v,j as e,P as y,u as P,a5 as H,h as _,r as u,g8 as $,g0 as G,n as K,g9 as U,e as z,aE as J,aG as k,ab as o,T as f,F as Q,I as C,ax as V,D as Y,aJ as q,aK as X,aL as Z,aM as ee,ga as m}from"./strapi-CQ80_AWb.js";import{u as te,H as se,R as oe}from"./Layout-27uslS7w-rStBoIOC.js";import"./useDragLayer-BA9i9W5S.js";const ie=()=>{const{formatMessage:s}=P(),l=H(),{trackUsage:L}=_(),[d,c]=u.useState(null),[M,w]=u.useState(!1),{data:S,isLoading:T}=$(),{meta:i,workflows:g,isLoading:r,delete:b}=te(),{getFeature:R,isLoading:p}=G(),D=v(t=>t.admin_app.permissions.settings?.["review-workflows"]),{allowedActions:{canCreate:h,canRead:E,canUpdate:W,canDelete:F}}=K(D),a=R("review-workflows")?.[U],I=t=>{c(t)},A=()=>{c(null)},N=async()=>{d&&(await b(d),c(null))},x=t=>{t.preventDefault(),a&&i&&i?.workflowCount>=parseInt(a,10)?(t.preventDefault(),w(!0)):(l("create"),L("willCreateWorkflow"))};u.useEffect(()=>{!r&&!p&&a&&i&&i?.workflowCount>parseInt(a,10)&&w(!0)},[p,r,i,i?.workflowCount,a]);const j=[{label:s({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"}),name:"name"},{label:s({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"}),name:"stages"},{label:s({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"}),name:"content-types"}];if(r||T)return e.jsx(y.Loading,{});const B=Object.values(S??{}).reduce((t,n)=>(t.push(...n),t),[]);return e.jsxs(e.Fragment,{children:[e.jsx(se,{primaryAction:h?e.jsx(z,{startIcon:e.jsx(k,{}),size:"S",tag:J,to:"create",onClick:x,children:s({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}):null,subtitle:s({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:s({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),e.jsxs(oe,{children:[e.jsx(o.Root,{isLoading:r,rows:g,footer:h?e.jsx(X,{cursor:"pointer",icon:e.jsx(k,{}),onClick:x,children:s({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}):null,headers:j,children:e.jsxs(o.Content,{children:[e.jsx(o.Head,{children:j.map(t=>e.jsx(o.HeaderCell,{...t},t.name))}),e.jsx(o.Body,{children:g.map(t=>e.jsxs(o.Row,{onClick:()=>{l(`${t.id}`)},children:[e.jsx(o.Cell,{width:"25rem",children:e.jsx(f,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:t.name})}),e.jsx(o.Cell,{children:e.jsx(f,{textColor:"neutral800",children:t.stages.length})}),e.jsx(o.Cell,{children:e.jsx(f,{textColor:"neutral800",children:t.contentTypes.map(n=>B.find(O=>O.uid===n)?.info.displayName??"").join(", ")})}),e.jsx(o.Cell,{children:e.jsxs(Q,{alignItems:"center",justifyContent:"end",children:[E||W?e.jsx(C,{tag:V,to:t.id.toString(),label:s({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:t.name}),variant:"ghost",children:e.jsx(Y,{})}):null,g.length>1&&F?e.jsx(C,{withTooltip:!1,label:s({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),variant:"ghost",onClick:n=>{n.stopPropagation(),I(String(t.id))},children:e.jsx(q,{})}):null]})})]},t.id))})]})}),e.jsx(Z.Root,{open:!!d,onOpenChange:A,children:e.jsx(ee,{onConfirm:N,children:s({id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"})})}),e.jsxs(m.Root,{open:M,onOpenChange:()=>w(!1),children:[e.jsx(m.Title,{children:s({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You’ve reached the limit of workflows in your plan"})}),e.jsx(m.Body,{children:s({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},ce=()=>{const s=v(l=>l.admin_app.permissions.settings?.["review-workflows"]?.main);return e.jsx(y.Protect,{permissions:s,children:e.jsx(ie,{})})};export{ce as ProtectedListPage,ie as ReviewWorkflowsListView};
