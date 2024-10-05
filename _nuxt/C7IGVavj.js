import{i as h,o as n,c as l,a as i,n as o,t as r,s as N,x as O,_ as m,k as g,w as y,h as k,F as $,f as b,y as f,j as I,b as w,d as E,z as T,e as D}from"./DjEpf0Z5.js";const S={class:"BaseWrapper"},L=h({__name:"BaseWrapper",props:{title:{},description:{}},setup(p){return(e,s)=>(n(),l("section",S,[i("div",{class:o(e.$style.wrapper)},[i("aside",{class:o(e.$style.aside)},[i("h2",{class:o(e.$style.title)},r(e.title),3),e.description?(n(),l("div",{key:0,class:o(e.$style.description)},r(e.description),3)):N("",!0)],2),i("article",{class:o(e.$style.article)},[O(e.$slots,"default")],2)],2)]))}}),x="_wrapper_a8bxx_7",P="_aside_a8bxx_24",j="_title_a8bxx_38",C="_description_a8bxx_49",M="_article_a8bxx_55",R={wrapper:x,aside:P,title:j,description:C,article:M},F={$style:R},v=m(L,[["__cssModules",F]]),A=["innerHTML"],B=h({__name:"IndexEmployment",setup(p){const e=new Date().getFullYear()-new Date("08.09.2020").getFullYear();return(s,_)=>{const d=v;return n(),g(d,{title:s.$t("pages.index.employment.title"),description:s.$t("pages.index.employment.amount",{amount:e}),class:"IndexEmployment"},{default:y(()=>[i("div",{class:o(s.$style.wrapper)},[(n(!0),l($,null,k(s.$tm("pages.index.employment.list"),(c,a)=>(n(),l("div",{key:a},[i("div",{class:o(s.$style.title)},r(s.$rt(c.title))+", "+r(s.$rt(c.company))+", "+r(s.$rt(c.type)),3),i("div",{class:o(s.$style.date)},r(s.$rt(c.startDate))+" - "+r(s.$rt(c.endDate)),3),i("div",{class:o(s.$style.description),innerHTML:s.$rt(c.description)},null,10,A)]))),128))],2)]),_:1},8,["title","description"])}}}),W="_wrapper_rv5nk_7",K="_title_rv5nk_15",z="_date_rv5nk_19",G="_description_rv5nk_25",V={wrapper:W,title:K,date:z,description:G},Y={$style:V},De=m(B,[["__cssModules",Y]]),U="_wrapper_1r3q7_7",H="_text_1r3q7_12",Z={wrapper:U,text:H},q={};function J(p,e){const s=v;return n(),g(s,{title:p.$t("pages.index.profile.title"),class:"IndexProfile"},{default:y(()=>[i("div",{class:o(p.$style.wrapper)},[i("div",{class:o(p.$style.text)},r(p.$t("pages.index.profile.text")),3)],2)]),_:1},8,["title"])}const Q={$style:Z},Se=m(q,[["render",J],["__cssModules",Q]]),X={class:"IndexProjectsTag"},ee=h({__name:"IndexProjectsTag",props:{tag:{}},setup(p){const e=p,s=b(()=>({"--current-color":`var(--color-${e.tag})`}));return(_,d)=>(n(),l("span",X,[i("span",{style:f(I(s)),class:o(_.$style.wrapper)},r(_.$t(`pages.index.projects.tags.${_.tag}`)),7)]))}}),se="_wrapper_nj355_7",te={wrapper:se},oe={$style:te},ne=m(ee,[["__cssModules",oe]]),ie={itemscope:"",itemtype:"http://schema.org/CreativeWork",class:"IndexProjectsItem"},ae=["innerHTML"],re=h({__name:"IndexProjectsItem",props:{id:{},source:{},links:{},tags:{}},setup(p){return(e,s)=>{const _=T,d=D,c=ne;return n(),l("div",ie,[i("div",{class:o(e.$style.wrapper)},[i("h3",{itemprop:"name",class:o(e.$style.name)},[w(d,{to:e.source,title:e.id,external:"",target:"_blank",class:o(e.$style.title)},{default:y(()=>[E(r(e.id)+" ",1),w(_,{name:"uil:arrow-up-right"})]),_:1},8,["to","title","class"])],2),i("div",{class:o(e.$style.tags)},[(n(!0),l($,null,k(e.tags,a=>(n(),g(c,{key:a,tag:a},null,8,["tag"]))),128))],2),i("div",{itemprop:"description",class:o(e.$style.description),innerHTML:e.$t(`pages.index.projects.${e.id}.description`)},null,10,ae),e.links?(n(),l("div",{key:0,class:o(e.$style.actions)},[(n(!0),l($,null,k(e.links,(a,u)=>(n(),g(d,{key:u,external:"",itemprop:"url",title:e.$t(`pages.index.projects.links.${u}`),to:a,target:"_blank"},{default:y(()=>[E(r(e.$t(`pages.index.projects.links.${u}`)),1)]),_:2},1032,["title","to"]))),128))],2)):N("",!0)],2)])}}}),le="_wrapper_1vsek_7",ce="_title_1vsek_12",pe="_tags_1vsek_18",de="_description_1vsek_26",_e="_actions_1vsek_31",ue={wrapper:le,title:ce,tags:pe,description:de,actions:_e},ge={$style:ue},me=m(re,[["__cssModules",ge]]),t={IN_WORKING:"in-working",COMPLETE:"complete",NEED_TO_ACTUALIZE:"need-to-actualize",OLD:"old",FRONTEND:"frontend",BACKEND:"backend",DESKTOP_ONLY:"desktop-only",TEST:"test"},ye=h({__name:"IndexProjects",setup(p){const e=[{id:"n3-workspace",source:"https://github.com/ovchinnikov-lxs/n3-workspace",tags:[t.IN_WORKING,t.FRONTEND]},{id:"n3-workspace/dev-kit-layer",source:"https://github.com/ovchinnikov-lxs/n3-workspace/tree/master/packages/dev-kit-layer",tags:[t.IN_WORKING,t.FRONTEND]},{id:"n3-workspace/converter",source:"https://github.com/ovchinnikov-lxs/n3-workspace/tree/master/apps/converter",links:{homepage:"https://ovchinnikov-lxs.github.io/n3-workspace/converter"},tags:[t.COMPLETE,t.FRONTEND,t.TEST]},{id:"n3-workspace/shopping-list",source:"https://github.com/ovchinnikov-lxs/n3-workspace/tree/master/apps/shopping-list",links:{homepage:"https://ovchinnikov-lxs.github.io/n3-workspace/shopping-list"},tags:[t.COMPLETE,t.FRONTEND]},{id:"task-trackers",source:"https://github.com/ovchinnikov-lxs/task-trackers",links:{design:"https://www.figma.com/community/file/1260446927126496958"},tags:[t.IN_WORKING,t.FRONTEND,t.BACKEND,t.DESKTOP_ONLY]},{id:"groom-crm",source:"https://github.com/ovchinnikov-lxs/groom-crm",tags:[t.IN_WORKING,t.FRONTEND,t.NEED_TO_ACTUALIZE,t.DESKTOP_ONLY]},{id:"portfolio_gallery",source:"https://github.com/ovchinnikov-lxs/portfolio_gallery",links:{homepage:"https://ovchinnikov-lxs.github.io/portfolio_gallery",design:"https://www.figma.com/community/file/1250984082985732893"},tags:[t.COMPLETE,t.FRONTEND,t.NEED_TO_ACTUALIZE,t.DESKTOP_ONLY]},{id:"web-layout-practice",source:"https://github.com/ovchinnikov-lxs/web-layout-practice",links:{homepage:"https://ovchinnikov-lxs.github.io/web-layout-practice"},tags:[t.FRONTEND,t.NEED_TO_ACTUALIZE,t.DESKTOP_ONLY]},{id:"nuxt3-template",source:"hsttps://github.com/ovchinnikov-lxs/nuxt3-template",tags:[t.OLD,t.FRONTEND,t.NEED_TO_ACTUALIZE]},{id:"todo-back",source:"https://github.com/ovchinnikov-lxs/todo-back",tags:[t.OLD,t.BACKEND]},{id:"todo-front",source:"https://github.com/ovchinnikov-lxs/todo-front",tags:[t.OLD,t.FRONTEND]}];return(s,_)=>{const d=me,c=v;return n(),g(c,{title:s.$t("pages.index.projects.title"),description:s.$t("pages.index.projects.description"),class:"IndexProject"},{default:y(()=>[i("div",{class:o(s.$style.wrapper)},[(n(),l($,null,k(e,a=>w(d,{id:a.id,key:a.id,source:a.source,links:a.links,tags:a.tags},null,8,["id","source","links","tags"])),64))],2)]),_:1},8,["title","description"])}}}),ke="_wrapper_10gph_7",$e={wrapper:ke},he={$style:$e},Le=m(ye,[["__cssModules",he]]),ve=h({__name:"IndexSkills",setup(p){const e=[{category:"Frontend",skills:[{id:"logos:html-5",name:"HTML"},{id:"logos:css-3",name:"CSS"},{id:"logos:javascript",name:"JavaScript"},{id:"logos:typescript-icon",name:"Typescript"},{id:"logos:vue",name:"Vue"},{id:"uil:web-grid",name:"Responsive Design"}]},{category:"Backend",skills:[{id:"logos:nodejs-icon",name:"Node.js"},{id:"logos:express",name:"Express.js"},{id:"logos:nestjs",name:"Nest.js"},{id:"logos:supabase-icon",name:"Supabase"},{id:"logos:postgresql",name:"PostgreSQL"},{id:"uil:laptop-connection",name:"SSE/WebSockets"}]},{category:"Tooling",skills:[{id:"logos:sass",name:"SCSS"},{id:"uil:web-grid-alt",name:"BEM"},{id:"logos:vueuse",name:"VueUse"},{id:"logos:vue",name:"Vuelidate"},{id:"vscode-icons:file-type-style",name:"Style Modules"},{id:"logos:python",name:"Python"},{id:"logos:lodash",name:"Lodash"},{id:"logos:pinia",name:"Pinia"},{id:"logos:strapi-icon",name:"Strapi"},{id:"logos:vue",name:"i18n"},{id:"uil:arrows-h-alt",name:"Swiper"},{id:"logos:pwa",name:"PWA"},{id:"logos:git-icon",name:"Git"},{id:"logos:github-actions",name:"CI/CD"},{id:"logos:prettier",name:"Prettier"},{id:"logos:eslint",name:"ESLint"},{id:"logos:stylelint",name:"Stylelint"},{id:"logos:figma",name:"Figma"},{id:"logos:figma",name:"Figma Tokens"},{id:"logos:storybook-icon",name:"Storybook"}]},{category:"Testing",skills:[{id:"logos:cypress-icon",name:"Cypress"},{id:"logos:jest",name:"Jest"}]},{category:"Optimization",skills:[{id:"uil:robot",name:"SEO Optimization"},{id:"logos:lighthouse",name:"Project Optimization"}]},{category:"Code Quality",skills:[{id:"uil:brackets-curly",name:"Code Review"},{id:"vscode-icons:folder-type-docs",name:"Documentation"}]}];return(s,_)=>{const d=T,c=v;return n(),g(c,{title:s.$t("pages.index.skills.title"),description:s.$t("pages.index.skills.description"),class:"IndexSkills"},{default:y(()=>[i("div",{class:o(s.$style.wrapper)},[(n(),l($,null,k(e,a=>i("div",{key:a.category,class:o(s.$style.category)},[i("div",{class:o(s.$style.header)},r(a.category),3),i("div",{class:o(s.$style.skills)},[(n(!0),l($,null,k(a.skills,u=>(n(),l("div",{key:u.id,class:o(s.$style.item)},[u.id?(n(),g(d,{key:0,name:u.id},null,8,["name"])):N("",!0),E(" "+r(u.name),1)],2))),128))],2)],2)),64))],2)]),_:1},8,["title","description"])}}}),we="_wrapper_12cdl_7",Ee="_category_12cdl_15",Ne="_header_12cdl_22",Te="_skills_12cdl_27",Oe="_item_12cdl_34",be={wrapper:we,category:Ee,header:Ne,skills:Te,item:Oe},fe={$style:be},xe=m(ve,[["__cssModules",fe]]);export{Se as I,xe as a,De as b,Le as c};