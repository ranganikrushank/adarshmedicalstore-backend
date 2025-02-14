import{u as I,h as G,i as N,l as Y,cn as k,cv as Q,eO as q,r as f,ev as X,j as e,ay as J,P as L,L as P,aA as K,a0 as z,F as S,av as Z,aP as ee,bk as x,er as u,eP as H,U as A,aU as te,cl as se,m as ae,T as O,S as w,a1 as _,ci as ne,eI as oe,B as U,eL as D,V as ie,aG as re,eQ as le,eR as de,M as C,D as ce,bj as ue,d as T,ah as pe,v as ge,H as me,G as fe}from"./strapi-CQ80_AWb.js";import{u as he}from"./hooks-DMvik5y_-MqDTg6YH.js";import{s as be}from"./objects-wl73iEma-4C1U7HSM.js";import{C as B}from"./CardDragPreview-DwuraT0K-mJftzPSh.js";import{u as ye,I as je}from"./useDragAndDrop-HYwNDExe-BHcRPRUD.js";import{F as xe}from"./FieldTypeIcon-BY6MrVF4-BqKd_A_C.js";import{g as Se}from"./getEmptyImage-CjqolaH3.js";const Me=({name:t})=>{const{formatMessage:c}=I(),l=ee(),n=x("Header",p=>p.modified),m=x("Header",p=>p.isSubmitting);return e.jsx(P.Header,{navigationAction:e.jsx(te,{fallback:`../${se}/${l.slug}`}),primaryAction:e.jsx(A,{size:"S",disabled:!n,type:"submit",loading:m,children:c({id:"global.save",defaultMessage:"Save"})}),subtitle:c({id:u("components.SettingsViewWrapper.pluginHeader.description.list-settings"),defaultMessage:"Define the settings of the list view."}),title:c({id:u("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:"Configure the view - {name}"},{name:H(t)})})},ve=["media","richtext","dynamiczone","relation","component","json","blocks"],Ce=()=>{const{formatMessage:t,locale:c}=I(),l=ae(c,{sensitivity:"base"}),{schema:n}=k(),m=x("Settings",o=>o.values.layout??[]),p=x("Settings",o=>o.values.settings.defaultSortBy),b=x("Settings",o=>o.onChange),i=f.useMemo(()=>Object.values(m).reduce((o,a)=>(n&&!ve.includes(n.attributes[a.name].type)&&o.push({value:a.name,label:typeof a.label!="string"?t(a.label):a.label}),o),[]),[t,m,n]).sort((o,a)=>l.compare(o.label,a.label));f.useEffect(()=>{i.findIndex(o=>o.value===p)===-1&&b("settings.defaultSortBy",i[0]?.value)},[p,b,i]);const h=f.useMemo(()=>Fe.map(o=>o.map(a=>a.type==="enumeration"?{...a,hint:a.hint?t(a.hint):void 0,label:t(a.label),options:a.name==="settings.defaultSortBy"?i:a.options}:{...a,hint:a.hint?t(a.hint):void 0,label:t(a.label)})),[t,i]);return e.jsxs(S,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(O,{variant:"delta",tag:"h2",children:t({id:u("containers.SettingPage.settings"),defaultMessage:"Settings"})}),e.jsx(w.Root,{gap:4,children:h.map(o=>o.map(({size:a,...g})=>e.jsx(w.Item,{s:12,col:a,direction:"column",alignItems:"stretch",children:e.jsx(_,{...g})},g.name)))},"bottom")]})},Fe=[[{label:{id:u("form.Input.search"),defaultMessage:"Enable search"},name:"settings.searchable",size:4,type:"boolean"},{label:{id:u("form.Input.filters"),defaultMessage:"Enable filters"},name:"settings.filterable",size:4,type:"boolean"},{label:{id:u("form.Input.bulkActions"),defaultMessage:"Enable bulk actions"},name:"settings.bulkable",size:4,type:"boolean"}],[{hint:{id:u("form.Input.pageEntries.inputDescription"),defaultMessage:"Note: You can override this value in the Collection Type settings page."},label:{id:u("form.Input.pageEntries"),defaultMessage:"Entries per page"},name:"settings.pageSize",options:["10","20","50","100"].map(t=>({value:t,label:t})),size:6,type:"enumeration"},{label:{id:u("form.Input.defaultSort"),defaultMessage:"Default sort attribute"},name:"settings.defaultSortBy",options:[],size:3,type:"enumeration"},{label:{id:u("form.Input.sort.order"),defaultMessage:"Default sort order"},name:"settings.defaultSortOrder",options:["ASC","DESC"].map(t=>({value:t,label:t})),size:3,type:"enumeration"}]],Ie=ge().shape({label:fe().required(),sortable:me()}),Re=({attribute:t,name:c,onClose:l})=>{const{formatMessage:n}=I(),{toggleNotification:m}=N(),{value:p,onChange:b}=pe(c);if(!p)return console.error("You've opened a field to edit without it being part of the form, this is likely a bug with Strapi. Please open an issue."),m({message:n({id:"content-manager.containers.list-settings.modal-form.error",defaultMessage:"An error occurred while trying to open the form."}),type:"danger"}),null;let d=!["media","relation"].includes(t.type);return"relation"in t&&["oneWay","oneToOne","manyToOne"].includes(t.relation)&&(d=!0),e.jsx(C.Content,{children:e.jsxs(z,{method:"PUT",initialValues:p,validationSchema:Ie,onSubmit:i=>{b(c,i),l()},children:[e.jsx(C.Header,{children:e.jsxs(Te,{children:[e.jsx(xe,{type:t.type}),e.jsx(C.Title,{children:n({id:u("containers.list-settings.modal-form.label"),defaultMessage:"Edit {fieldName}"},{fieldName:H(p.label)})})]})}),e.jsx(C.Body,{children:e.jsx(w.Root,{gap:4,children:[{name:"label",label:n({id:u("form.Input.label"),defaultMessage:"Label"}),hint:n({id:u("form.Input.label.inputDescription"),defaultMessage:"This value overrides the label displayed in the table's head"}),size:6,type:"string"},{label:n({id:u("form.Input.sort.field"),defaultMessage:"Enable sort on this field"}),name:"sortable",size:6,type:"boolean"}].filter(i=>i.name!=="sortable"||i.name==="sortable"&&d).map(({size:i,...h})=>e.jsx(w.Item,{s:12,col:i,direction:"column",alignItems:"stretch",children:e.jsx(_,{...h})},h.name))})}),e.jsxs(C.Footer,{children:[e.jsx(A,{onClick:l,variant:"tertiary",children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),e.jsx(A,{type:"submit",children:n({id:"global.finish",defaultMessage:"Finish"})})]})]})})},Te=T(S)`
  svg {
    width: 3.2rem;
    margin-right: ${({theme:t})=>t.spaces[3]};
  }
`,Ee=({attribute:t,index:c,isDraggingSibling:l,label:n,name:m,onMoveField:p,onRemoveField:b,setIsDraggingSibling:d})=>{const[i,h]=f.useState(!1),{formatMessage:o}=I(),[,a]=f.useState(!1),[{isDragging:g},y,M,F,j]=ye(!0,{type:je.FIELD,item:{index:c,label:n,name:m},index:c,onMoveItem:p,onEnd:()=>d(!1)});f.useEffect(()=>{j(Se(),{captureDraggingState:!1})},[j]),f.useEffect(()=>{g&&d(!0)},[g,d]),f.useEffect(()=>{l||a(r=>!r)},[l]);const s=le(M,y);return e.jsxs(Le,{ref:s,children:[g&&e.jsx(B,{label:n}),!g&&l&&e.jsx(B,{isSibling:!0,label:n}),!g&&!l&&e.jsxs(we,{borderColor:"neutral150",background:"neutral100",hasRadius:!0,justifyContent:"space-between",onClick:()=>h(!0),children:[e.jsxs(S,{gap:3,children:[e.jsx(De,{ref:F,"aria-label":o({id:u("components.DraggableCard.move.field"),defaultMessage:"Move {item}"},{item:n}),onClick:r=>r.stopPropagation(),children:e.jsx(de,{})}),e.jsx(O,{fontWeight:"bold",children:n})]}),e.jsxs(S,{paddingLeft:3,onClick:r=>r.stopPropagation(),children:[e.jsxs(C.Root,{open:i,onOpenChange:h,children:[e.jsx(C.Trigger,{children:e.jsx($,{onClick:r=>{r.stopPropagation()},"aria-label":o({id:u("components.DraggableCard.edit.field"),defaultMessage:"Edit {item}"},{item:n}),type:"button",children:e.jsx(ce,{width:"1.2rem",height:"1.2rem"})})}),e.jsx(Re,{attribute:t,name:`layout.${c}`,onClose:()=>{h(!1)}})]}),e.jsx($,{onClick:b,"data-testid":`delete-${m}`,"aria-label":o({id:u("components.DraggableCard.delete.field"),defaultMessage:"Delete {item}"},{item:n}),type:"button",children:e.jsx(ue,{width:"1.2rem",height:"1.2rem"})})]})]})]})},$=T.button`
  display: flex;
  align-items: center;
  height: ${({theme:t})=>t.spaces[7]};
  color: ${({theme:t})=>t.colors.neutral600};

  &:hover {
    color: ${({theme:t})=>t.colors.neutral700};
  }

  &:last-child {
    padding: 0 ${({theme:t})=>t.spaces[3]};
  }
`,De=T($)`
  padding: 0 ${({theme:t})=>t.spaces[3]};
  border-right: 1px solid ${({theme:t})=>t.colors.neutral150};
  cursor: all-scroll;
`,we=T(S)`
  max-height: 3.2rem;
  cursor: pointer;
`,Le=T(U)`
  &:last-child {
    padding-right: ${({theme:t})=>t.spaces[3]};
  }
`,Pe=()=>{const{formatMessage:t}=I(),{model:c,schema:l}=k(),[n,m]=f.useState(!1),[p,b]=f.useState(null),d=f.useRef(null),i=x("SortDisplayedFields",s=>s.values.layout??[]),h=x("SortDisplayedFields",s=>s.addFieldRow),o=x("SortDisplayedFields",s=>s.removeFieldRow),a=x("SortDisplayedFields",s=>s.moveFieldRow),{metadata:g}=ne(c,{selectFromResult:({data:s})=>({metadata:s?.contentType.metadatas??{}})}),y=f.useMemo(()=>{if(!l)return[];const s=i.map(r=>r.name);return Object.entries(l.attributes).reduce((r,[v,R])=>{if(!s.includes(v)&&oe(R)){const{list:E}=g[v];r.push({name:v,label:E.label||v,sortable:E.sortable})}return r},[])},[g,i,l]),M=s=>{b("add"),h("layout",s)},F=s=>{b("remove"),o("layout",s)},j=(s,r)=>{a("layout",s,r)};return f.useEffect(()=>{p==="add"&&d?.current&&(d.current.scrollLeft=d.current.scrollWidth)},[p]),e.jsxs(S,{alignItems:"stretch",direction:"column",gap:4,children:[e.jsx(O,{variant:"delta",tag:"h2",children:t({id:u("containers.SettingPage.view"),defaultMessage:"View"})}),e.jsxs(S,{padding:4,borderColor:"neutral300",borderStyle:"dashed",borderWidth:"1px",hasRadius:!0,children:[e.jsx(U,{flex:"1",overflow:"auto hidden",ref:d,children:e.jsx(S,{gap:3,children:i.map((s,r)=>e.jsx(Ee,{index:r,isDraggingSibling:n,onMoveField:j,onRemoveField:()=>F(r),setIsDraggingSibling:m,...s,attribute:l.attributes[s.name],label:typeof s.label=="object"?t(s.label):s.label},s.name))})}),e.jsxs(D.Root,{children:[e.jsxs(D.Trigger,{paddingLeft:2,paddingRight:2,justifyContent:"center",endIcon:null,disabled:y.length===0,variant:"tertiary",children:[e.jsx(ie,{tag:"span",children:t({id:u("components.FieldSelect.label"),defaultMessage:"Add a field"})}),e.jsx(re,{"aria-hidden":!0,focusable:!1,style:{position:"relative",top:2}})]}),e.jsx(D.Content,{children:y.map(s=>e.jsx(D.Item,{onSelect:()=>M(s),children:typeof s.label=="object"?t(s.label):s.label},s.name))})]})]})]})},Ae=()=>{const{formatMessage:t}=I(),{trackUsage:c}=G(),{toggleNotification:l}=N(),{_unstableFormatAPIError:n}=Y(),{model:m,collectionType:p}=k(),{isLoading:b,list:d,edit:i}=Q(),[h]=q(),o=async g=>{try{c("willSaveContentTypeLayout");const y=g.layout??[],M=Object.entries(i.metadatas).reduce((j,[s,r])=>{const{mainField:v,...R}=d.metadatas[s],{label:E,sortable:V}=y.find(W=>W.name===s)??{};return j[s]={edit:r,list:{...R,label:E||R.label,sortable:V||R.sortable}},j},{}),F=await h({layouts:{edit:i.layout.flatMap(j=>j.map(s=>s.map(({name:r,size:v})=>({name:r,size:v})))),list:y.map(j=>j.name)},settings:be(g.settings,"displayName",void 0),metadatas:M,uid:m});"data"in F?(c("didEditListSettings"),l({type:"success",message:t({id:"notification.success.saved",defaultMessage:"Saved"})})):l({type:"danger",message:n(F.error)})}catch(y){console.error(y),l({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})}},a=f.useMemo(()=>({layout:d.layout.map(({label:g,sortable:y,name:M})=>({label:typeof g=="string"?g:t(g),sortable:y,name:M})),settings:d.settings}),[t,d.layout,d.settings]);return p===X?e.jsx(J,{to:`/single-types/${m}`}):b?e.jsx(L.Loading,{}):e.jsxs(P.Root,{children:[e.jsx(L.Title,{children:`Configure ${d.settings.displayName} List View`}),e.jsx(K,{children:e.jsxs(z,{initialValues:a,onSubmit:o,method:"PUT",children:[e.jsx(Me,{collectionType:p,model:m,name:d.settings.displayName??""}),e.jsx(P.Content,{children:e.jsxs(S,{alignItems:"stretch",background:"neutral0",direction:"column",gap:6,hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[e.jsx(Ce,{}),e.jsx(Z,{}),e.jsx(Pe,{})]})})]})})]})},_e=()=>{const t=he(c=>c.admin_app.permissions.contentManager?.collectionTypesConfigurations);return e.jsx(L.Protect,{permissions:t,children:e.jsx(Ae,{})})};export{Ae as ListConfiguration,_e as ProtectedListConfiguration};
