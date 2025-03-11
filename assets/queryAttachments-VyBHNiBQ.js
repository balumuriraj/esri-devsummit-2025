import{a9 as m,fS as u,fT as f}from"./CodeBlock-DBIw63CI.js";import{t as h}from"./query-DTz_QEX_.js";import{a as l}from"./AttachmentInfo-CAtThIQa.js";import"./index-BYYG-xAB.js";import"./pbfQueryUtils-CBubhGp0.js";import"./pbf-Ckxyvybt.js";import"./memoryEstimations-DG877__o.js";import"./OptimizedFeature-C7vq2Etq.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";function y(s){const t=s.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t.orderByFields&&(t.orderByFields=t.orderByFields.join(",")),t}function k(s,t){const e={};for(const a of t){const{parentObjectId:o,parentGlobalId:r,attachmentInfos:c}=a;for(const n of c){const{id:p}=n,d=u(f(`${s.path}/${o}/attachments/${p}`)),i=l.fromJSON(n);i.set({url:d,parentObjectId:o,parentGlobalId:r}),e[o]?e[o].push(i):e[o]=[i]}}return e}function w(s,t,e){let a={query:h({...s.query,f:"json",...y(t)})};return e&&(a={...e,...a,query:{...e.query,...a.query}}),m(s.path+"/queryAttachments",a).then(o=>o.data.attachmentGroups)}async function z(s,t,e){const{objectIds:a}=t,o=[];for(const r of a)o.push(m(s.path+"/"+r+"/attachments",e));return Promise.all(o).then(r=>a.map((c,n)=>({parentObjectId:c,attachmentInfos:r[n].data.attachmentInfos})))}export{w as executeAttachmentQuery,z as fetchAttachments,k as processAttachmentQueryResult};
