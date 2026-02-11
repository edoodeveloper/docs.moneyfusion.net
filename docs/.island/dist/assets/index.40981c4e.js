import{jsx as n,jsxs as i,Fragment as a}from"react/jsx-runtime";const o=void 0,c=[{id:"vue-densemble",text:"Vue d'ensemble",depth:2},{id:"pr\xE9requis",text:"Pr\xE9requis",depth:2},{id:"compte-money-fusion-enterprise",text:"Compte Money Fusion Enterprise",depth:3},{id:"pour-commencer",text:"Pour commencer",depth:2},{id:"\xE9tape-1--configuration-du-compte",text:"\xC9tape 1 : Configuration du compte",depth:3},{id:"\xE9tape-2--acc\xE8s-au-compte",text:"\xC9tape 2 : Acc\xE8s au compte",depth:3},{id:"\xE9tape-3--cr\xE9ation-dune-application",text:"\xC9tape 3 : Cr\xE9ation d'une application",depth:3},{id:"prochaines-\xE9tapes",text:"Prochaines \xE9tapes",depth:2}],d="Fusion Pay";function t(r){const e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",h3:"h3",ul:"ul",li:"li",ol:"ol",img:"img",code:"code"},r.components);return i(a,{children:[i(e.h1,{id:"fusion-pay",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#fusion-pay",children:"#"}),"Fusion Pay"]}),`
`,i(e.h2,{id:"vue-densemble",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#vue-densemble",children:"#"}),"Vue d'ensemble"]}),`
`,n(e.p,{children:"Simplifiez le traitement de vos paiements gr\xE2ce \xE0 l'int\xE9gration de Fusion Pay."}),`
`,i(e.div,{className:"island-directive danger",children:[n(e.p,{className:"island-directive-title",children:"Important"}),n(e.div,{className:"island-directive-content",children:n(e.p,{children:"Veuillez lire attentivement toutes les sections pour comprendre la documentation."})})]}),`
`,n(e.p,{children:"Cette documentation vous guidera dans l'int\xE9gration des API de Fusion Pay dans votre site e-commerce et/ou votre application mobile."}),`
`,i(e.h2,{id:"pr\xE9requis",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#pr\xE9requis",children:"#"}),"Pr\xE9requis"]}),`
`,i(e.h3,{id:"compte-money-fusion-enterprise",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#compte-money-fusion-enterprise",children:"#"}),"Compte Money Fusion Enterprise"]}),`
`,n(e.p,{children:"Vos informations, saisies lors de la cr\xE9ation du compte, servent de r\xE9f\xE9rence num\xE9rique au sein des syst\xE8mes Money Fusion. Nous utilisons ces informations pour identifier votre compte et les applications que vous cr\xE9ez."}),`
`,n(e.p,{children:"Ces informations sont n\xE9cessaires \xE0 des fins de v\xE9rification."}),`
`,i(e.h2,{id:"pour-commencer",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#pour-commencer",children:"#"}),"Pour commencer"]}),`
`,i(e.h3,{id:"\xE9tape-1--configuration-du-compte",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\xE9tape-1--configuration-du-compte",children:"#"}),"\xC9tape 1 : Configuration du compte"]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Assurez-vous d'avoir un compte Money Fusion"}),`
`,n(e.li,{children:"Cr\xE9ez-en un si n\xE9cessaire"}),`
`]}),`
`,i(e.h3,{id:"\xE9tape-2--acc\xE8s-au-compte",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\xE9tape-2--acc\xE8s-au-compte",children:"#"}),"\xC9tape 2 : Acc\xE8s au compte"]}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["Connectez-vous \xE0 ",n(e.a,{href:"https://moneyfusion.net/dashboard",target:"_blank",rel:"nofollow",children:"votre compte"})]}),`
`,i(e.li,{children:["Cliquez sur ",n(e.a,{href:"https://moneyfusion.net/dashboard/fusionpay",target:"_blank",rel:"nofollow",children:'"Fusion Pay"'})," dans le menu de gauche."]}),`
`]}),`
`,i(e.h3,{id:"\xE9tape-3--cr\xE9ation-dune-application",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#\xE9tape-3--cr\xE9ation-dune-application",children:"#"}),"\xC9tape 3 : Cr\xE9ation d'une application"]}),`
`,n(e.p,{children:n(e.img,{src:"https://sc-digital.nyc3.cdn.digitaloceanspaces.com/sc-digital/images/1770812734849-Capture_d_____cran_2026-02-11_122044.png",alt:"Illustration cr\xE9ation d'application"})}),`
`,n(e.p,{children:"Une fois que vous avez cr\xE9\xE9 une application, un lien API sera g\xE9n\xE9r\xE9 qui peut \xEAtre mis en \u0153uvre sur plusieurs sites et applications."}),`
`,i(e.div,{className:"island-directive danger",children:[n(e.p,{className:"island-directive-title",children:"Important"}),n(e.div,{className:"island-directive-content",children:i(e.ul,{children:[`
`,n(e.li,{children:"L\u2019URL du site doit \xEAtre valide et accessible."}),`
`,i(e.li,{children:["Le ",n(e.code,{children:"callback_url"})," doit appartenir au domaine principal ou \xE0 un sous-domaine autoris\xE9."]}),`
`,n(e.li,{children:"Seules les adresses IP server enregistr\xE9es pourront consommer l\u2019API."}),`
`,n(e.li,{children:"Toute IP non d\xE9clar\xE9e sera automatiquement bloqu\xE9e."}),`
`]})})]}),`
`,i(e.h2,{id:"prochaines-\xE9tapes",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#prochaines-\xE9tapes",children:"#"}),"Prochaines \xE9tapes"]}),`
`,n(e.p,{children:"Vous pouvez maintenant commencer \xE0 utiliser votre cl\xE9 API pour l'int\xE9gration."}),`
`,i(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title",children:"Note"}),n(e.div,{className:"island-directive-content",children:n(e.p,{children:"Les proc\xE9dures d'int\xE9gration d\xE9taill\xE9es seront abord\xE9es dans les sections suivantes."})})]})]})}function l(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(t,r)})):t(r)}const u="2024/12/2 00:07:25",p=`# Fusion Pay\r
\r
## Vue d'ensemble\r
\r
Simplifiez le traitement de vos paiements gr\xE2ce \xE0 l'int\xE9gration de Fusion Pay.\r
\r
:::danger{title='Important'}\r
Veuillez lire attentivement toutes les sections pour comprendre la documentation.\r
:::\r
\r
Cette documentation vous guidera dans l'int\xE9gration des API de Fusion Pay dans votre site e-commerce et/ou votre application mobile.\r
\r
## Pr\xE9requis\r
\r
### Compte Money Fusion Enterprise\r
\r
Vos informations, saisies lors de la cr\xE9ation du compte, servent de r\xE9f\xE9rence num\xE9rique au sein des syst\xE8mes Money Fusion. Nous utilisons ces informations pour identifier votre compte et les applications que vous cr\xE9ez.\r
\r
Ces informations sont n\xE9cessaires \xE0 des fins de v\xE9rification.\r
\r
## Pour commencer\r
\r
### \xC9tape 1 : Configuration du compte\r
\r
- Assurez-vous d'avoir un compte Money Fusion\r
- Cr\xE9ez-en un si n\xE9cessaire\r
\r
### \xC9tape 2 : Acc\xE8s au compte\r
\r
1. Connectez-vous \xE0 [votre compte](https://moneyfusion.net/dashboard)\r
2. Cliquez sur ["Fusion Pay"](https://moneyfusion.net/dashboard/fusionpay) dans le menu de gauche.\r
\r
### \xC9tape 3 : Cr\xE9ation d'une application\r
\r
![Illustration cr\xE9ation d'application](https://sc-digital.nyc3.cdn.digitaloceanspaces.com/sc-digital/images/1770812734849-Capture_d_____cran_2026-02-11_122044.png)\r
\r
Une fois que vous avez cr\xE9\xE9 une application, un lien API sera g\xE9n\xE9r\xE9 qui peut \xEAtre mis en \u0153uvre sur plusieurs sites et applications.\r
\r
:::danger{title='Important'}\r
\r
- L\u2019URL du site doit \xEAtre valide et accessible.\r
- Le \`callback_url\` doit appartenir au domaine principal ou \xE0 un sous-domaine autoris\xE9.\r
- Seules les adresses IP server enregistr\xE9es pourront consommer l\u2019API.\r
- Toute IP non d\xE9clar\xE9e sera automatiquement bloqu\xE9e.\r
  :::\r
\r
## Prochaines \xE9tapes\r
\r
Vous pouvez maintenant commencer \xE0 utiliser votre cl\xE9 API pour l'int\xE9gration.\r
\r
:::tip{title='Note'}\r
Les proc\xE9dures d'int\xE9gration d\xE9taill\xE9es seront abord\xE9es dans les sections suivantes.\r
:::\r
`;export{p as content,l as default,o as frontmatter,u as lastUpdatedTime,d as title,c as toc};
