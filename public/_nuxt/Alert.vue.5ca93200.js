import l from"./Icon.ea438a13.js";import{f as p,E as u,C as d,o as m,c as f,a as t,b as _,n as s,z as n}from"./entry.0819dfc5.js";const y={initial:{opacity:0,y:20},enter:{opacity:1,y:0},leave:{opacity:0,y:20},class:"fixed left-0 bottom-4 z-50 w-full flex justify-center items-center"},x={class:"flex flex-col gap-2 text-right"},v=p({__name:"Alert",props:{icon:{type:String,required:!0},type:{type:String,required:!0}},emits:["close"],setup(c){const o=c;function e(){switch(o.type){case"success":return"green";case"error":return"red";case"warning":return"yellow";default:return"blue"}}return(r,g)=>{const a=l,i=u("motion");return d((m(),f("div",y,[t("div",{class:s(`p-4 rounded-md justify-between flex items-center md:w-8/12 w-11/12 bg-${e()}-500 gap-2`)},[_(a,{name:o.icon,class:s(`w-12 h-12 text-${e()}-200`)},null,8,["name","class"]),t("div",x,[t("h3",{class:s(`text-xl text-${e()}-200 font-bold`)},[n(r.$slots,"title")],2),t("p",{class:s(`text-${e()}-200`)},[n(r.$slots,"default")],2)])],2)])),[[i]])}}});export{v as _};
