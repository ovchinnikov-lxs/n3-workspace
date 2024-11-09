import{i as h,o as n,c as a,a as i,n as o,t as r,s as N,x as O,_ as k,k as y,w as $,h as m,F as g,f,y as I,j as D,b as T,d as E,z as b,e as L}from"./pk9xBqCG.js";const S={class:"BaseWrapper"},M=h({__name:"BaseWrapper",props:{title:{},description:{}},setup(p){return(e,s)=>(n(),a("section",S,[i("div",{class:o(e.$style.wrapper)},[i("aside",{class:o(e.$style.aside)},[i("h2",{class:o(e.$style.title)},r(e.title),3),e.description?(n(),a("div",{key:0,class:o(e.$style.description)},r(e.description),3)):N("",!0)],2),i("article",{class:o(e.$style.article)},[O(e.$slots,"default")],2)],2)]))}}),P="_wrapper_a8bxx_7",j="_aside_a8bxx_24",x="_title_a8bxx_38",C="_description_a8bxx_49",R="_article_a8bxx_55",F={wrapper:P,aside:j,title:x,description:C,article:R},A={$style:F},v=k(M,[["__cssModules",A]]),B=["innerHTML"],W=["innerHTML"],K=h({__name:"IndexEmployment",setup(p){const e=new Date().getFullYear()-new Date("08.09.2020").getFullYear();return(s,_)=>{const u=v;return n(),y(u,{title:s.$t("pages.index.employment.title"),description:s.$t("pages.index.employment.amount",{amount:e}),class:"IndexEmployment"},{default:$(()=>[i("div",{class:o(s.$style.wrapper)},[(n(!0),a(g,null,m(s.$tm("pages.index.employment.list"),(c,l)=>(n(),a("div",{key:l},[i("div",{class:o(s.$style.title)},r(s.$rt(c.title))+", "+r(s.$rt(c.company))+", "+r(s.$rt(c.type)),3),i("div",{class:o(s.$style.date)},r(s.$rt(c.startDate))+" - "+r(s.$rt(c.endDate)),3),i("div",{class:o(s.$style.subtitle)},r(s.$t("pages.index.employment.tasksTitle")),3),i("div",{class:o(s.$style.description)},[i("ul",null,[(n(!0),a(g,null,m(c.tasks,(d,w)=>(n(),a("li",{key:w,innerHTML:d},null,8,B))),128))])],2),i("div",{class:o(s.$style.subtitle)},r(s.$t("pages.index.employment.achievementsTitle")),3),i("ul",{class:o(s.$style.description)},[(n(!0),a(g,null,m(c.achievements,(d,w)=>(n(),a("li",{key:w,innerHTML:d},null,8,W))),128))],2)]))),128))],2)]),_:1},8,["title","description"])}}}),z="_wrapper_1kzvu_7",H="_title_1kzvu_15",G="_subtitle_1kzvu_19",V="_date_1kzvu_24",Y="_description_1kzvu_31",U={wrapper:z,title:H,subtitle:G,date:V,description:Y},Z={$style:U},Pe=k(K,[["__cssModules",Z]]),J="_wrapper_kuoc9_7",Q="_text_kuoc9_12",q={wrapper:J,text:Q},X={},ee=["innerHTML"];function se(p,e){const s=v;return n(),y(s,{title:p.$t("pages.index.profile.title"),class:"IndexProfile"},{default:$(()=>[i("div",{class:o(p.$style.wrapper)},[i("div",{class:o(p.$style.text)},[(n(!0),a(g,null,m(p.$tm("pages.index.profile.text"),(_,u)=>(n(),a("p",{key:u,innerHTML:p.$rt(_)},null,8,ee))),128))],2)],2)]),_:1},8,["title"])}const te={$style:q},je=k(X,[["render",se],["__cssModules",te]]),oe={class:"IndexProjectsTag"},ne=h({__name:"IndexProjectsTag",props:{tag:{}},setup(p){const e=p,s=f(()=>({"--current-color":`var(--color-${e.tag})`}));return(_,u)=>(n(),a("span",oe,[i("span",{style:I(D(s)),class:o(_.$style.wrapper)},r(_.$t(`pages.index.projects.tags.${_.tag}`)),7)]))}}),ie="_wrapper_nj355_7",ae={wrapper:ie},le={$style:ae},re=k(ne,[["__cssModules",le]]),ce={itemscope:"",itemtype:"http://schema.org/CreativeWork",class:"IndexProjectsItem"},pe=["innerHTML"],de=h({__name:"IndexProjectsItem",props:{id:{},source:{},links:{},tags:{}},setup(p){return(e,s)=>{const _=b,u=L,c=re;return n(),a("div",ce,[i("div",{class:o(e.$style.wrapper)},[i("h3",{itemprop:"name",class:o(e.$style.name)},[T(u,{to:e.source,title:e.id,external:"",target:"_blank",class:o(e.$style.title)},{default:$(()=>[E(r(e.id)+" ",1),T(_,{name:"uil:arrow-up-right"})]),_:1},8,["to","title","class"])],2),i("div",{class:o(e.$style.tags)},[(n(!0),a(g,null,m(e.tags,l=>(n(),y(c,{key:l,tag:l},null,8,["tag"]))),128))],2),i("div",{itemprop:"description",class:o(e.$style.description),innerHTML:e.$t(`pages.index.projects.${e.id}.description`)},null,10,pe),e.links?(n(),a("div",{key:0,class:o(e.$style.actions)},[(n(!0),a(g,null,m(e.links,(l,d)=>(n(),y(u,{key:d,external:"",itemprop:"url",title:e.$t(`pages.index.projects.links.${d}`),to:l,target:"_blank"},{default:$(()=>[E(r(e.$t(`pages.index.projects.links.${d}`)),1)]),_:2},1032,["title","to"]))),128))],2)):N("",!0)],2)])}}}),ue="_wrapper_1vsek_7",_e="_title_1vsek_12",me="_tags_1vsek_18",ge="_description_1vsek_26",ye="_actions_1vsek_31",ke={wrapper:ue,title:_e,tags:me,description:ge,actions:ye},$e={$style:ke},he=k(de,[["__cssModules",$e]]),t={IN_WORKING:"in-working",COMPLETE:"complete",NEED_TO_ACTUALIZE:"need-to-actualize",OLD:"old",FRONTEND:"frontend",BACKEND:"backend",DESKTOP_ONLY:"desktop-only",TEST:"test"},ve=h({__name:"IndexProjects",setup(p){const e=[{id:"n3-workspace",source:"https://github.com/ovchinnikov-lxs/n3-workspace",tags:[t.IN_WORKING,t.FRONTEND]},{id:"n3-workspace/dev-kit-layer",source:"https://github.com/ovchinnikov-lxs/n3-workspace/tree/master/packages/dev-kit-layer",tags:[t.IN_WORKING,t.FRONTEND]},{id:"n3-workspace/converter",source:"https://github.com/ovchinnikov-lxs/n3-workspace/tree/master/apps/converter",links:{homepage:"https://ovchinnikov-lxs.github.io/n3-workspace/converter"},tags:[t.COMPLETE,t.FRONTEND,t.TEST]},{id:"n3-workspace/shopping-list",source:"https://github.com/ovchinnikov-lxs/n3-workspace/tree/master/apps/shopping-list",links:{homepage:"https://ovchinnikov-lxs.github.io/n3-workspace/shopping-list"},tags:[t.COMPLETE,t.FRONTEND]},{id:"task-trackers",source:"https://github.com/ovchinnikov-lxs/task-trackers",links:{design:"https://www.figma.com/community/file/1260446927126496958"},tags:[t.IN_WORKING,t.FRONTEND,t.BACKEND,t.DESKTOP_ONLY]},{id:"groom-crm",source:"https://github.com/ovchinnikov-lxs/groom-crm",tags:[t.IN_WORKING,t.FRONTEND,t.NEED_TO_ACTUALIZE,t.DESKTOP_ONLY]},{id:"portfolio_gallery",source:"https://github.com/ovchinnikov-lxs/portfolio_gallery",links:{homepage:"https://ovchinnikov-lxs.github.io/portfolio_gallery",design:"https://www.figma.com/community/file/1250984082985732893"},tags:[t.COMPLETE,t.FRONTEND,t.NEED_TO_ACTUALIZE,t.DESKTOP_ONLY]},{id:"web-layout-practice",source:"https://github.com/ovchinnikov-lxs/web-layout-practice",links:{homepage:"https://ovchinnikov-lxs.github.io/web-layout-practice"},tags:[t.FRONTEND,t.NEED_TO_ACTUALIZE,t.DESKTOP_ONLY]},{id:"nuxt3-template",source:"hsttps://github.com/ovchinnikov-lxs/nuxt3-template",tags:[t.OLD,t.FRONTEND,t.NEED_TO_ACTUALIZE]},{id:"todo-back",source:"https://github.com/ovchinnikov-lxs/todo-back",tags:[t.OLD,t.BACKEND]},{id:"todo-front",source:"https://github.com/ovchinnikov-lxs/todo-front",tags:[t.OLD,t.FRONTEND]}];return(s,_)=>{const u=he,c=v;return n(),y(c,{title:s.$t("pages.index.projects.title"),description:s.$t("pages.index.projects.description"),class:"IndexProject"},{default:$(()=>[i("div",{class:o(s.$style.wrapper)},[(n(),a(g,null,m(e,l=>T(u,{id:l.id,key:l.id,source:l.source,links:l.links,tags:l.tags},null,8,["id","source","links","tags"])),64))],2)]),_:1},8,["title","description"])}}}),we="_wrapper_10gph_7",Te={wrapper:we},Ee={$style:Te},xe=k(ve,[["__cssModules",Ee]]),Ne=h({__name:"IndexSkills",setup(p){const e=[{category:"Frontend",skills:[{id:"logos:html-5",name:"HTML"},{id:"logos:css-3",name:"CSS"},{id:"logos:javascript",name:"JavaScript"},{id:"logos:typescript-icon",name:"Typescript"},{id:"logos:vue",name:"Vue"},{id:"uil:web-grid",name:"Responsive Design"}]},{category:"Backend",skills:[{id:"logos:nodejs-icon",name:"Node.js"},{id:"logos:express",name:"Express.js"},{id:"logos:nestjs",name:"Nest.js"},{id:"logos:supabase-icon",name:"Supabase"},{id:"logos:postgresql",name:"PostgreSQL"},{id:"uil:laptop-connection",name:"SSE/WebSockets"}]},{category:"Tooling",skills:[{id:"logos:sass",name:"SCSS"},{id:"uil:web-grid-alt",name:"BEM"},{id:"logos:vueuse",name:"VueUse"},{id:"logos:vue",name:"Vuelidate"},{id:"vscode-icons:file-type-style",name:"Style Modules"},{id:"logos:python",name:"Python"},{id:"logos:lodash",name:"Lodash"},{id:"logos:pinia",name:"Pinia"},{id:"logos:strapi-icon",name:"Strapi"},{id:"logos:vue",name:"i18n"},{id:"uil:arrows-h-alt",name:"Swiper"},{id:"logos:pwa",name:"PWA"},{id:"logos:git-icon",name:"Git"},{id:"logos:github-actions",name:"CI/CD"},{id:"logos:prettier",name:"Prettier"},{id:"logos:eslint",name:"ESLint"},{id:"logos:stylelint",name:"Stylelint"},{id:"logos:figma",name:"Figma"},{id:"logos:figma",name:"Figma Tokens"},{id:"logos:storybook-icon",name:"Storybook"}]},{category:"Testing",skills:[{id:"logos:cypress-icon",name:"Cypress"},{id:"logos:jest",name:"Jest"}]},{category:"Optimization",skills:[{id:"uil:robot",name:"SEO Optimization"},{id:"logos:lighthouse",name:"Project Optimization"}]},{category:"Code Quality",skills:[{id:"uil:brackets-curly",name:"Code Review"},{id:"vscode-icons:folder-type-docs",name:"Documentation"}]}];return(s,_)=>{const u=b,c=v;return n(),y(c,{title:s.$t("pages.index.skills.title"),description:s.$t("pages.index.skills.description"),class:"IndexSkills"},{default:$(()=>[i("div",{class:o(s.$style.wrapper)},[(n(),a(g,null,m(e,l=>i("div",{key:l.category,class:o(s.$style.category)},[i("div",{class:o(s.$style.header)},r(l.category),3),i("div",{class:o(s.$style.skills)},[(n(!0),a(g,null,m(l.skills,d=>(n(),a("div",{key:d.id,class:o(s.$style.item)},[d.id?(n(),y(u,{key:0,name:d.id},null,8,["name"])):N("",!0),E(" "+r(d.name),1)],2))),128))],2)],2)),64))],2)]),_:1},8,["title","description"])}}}),be="_wrapper_12cdl_7",Oe="_category_12cdl_15",fe="_header_12cdl_22",Ie="_skills_12cdl_27",De="_item_12cdl_34",Le={wrapper:be,category:Oe,header:fe,skills:Ie,item:De},Se={$style:Le},Ce=k(Ne,[["__cssModules",Se]]);export{je as I,Ce as a,Pe as b,xe as c};
