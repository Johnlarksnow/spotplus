import{H as r,I as a}from"./entry.0819dfc5.js";import{u as o}from"./store.138f40b4.js";const u=r(e=>{const t=o();if(e.path.includes("/dashboard")&&!t.checkJwt())return a("/login");if((e.path==="/login"||e.path==="/register")&&t.checkJwt())return a("/dashboard")});export{u as default};
