import{jsx as n,jsxs as r,Fragment as a}from"react/jsx-runtime";const s=void 0,l=[{id:"description",text:"Description",depth:2},{id:"caract\xE9ristiques",text:"Caract\xE9ristiques",depth:2},{id:"installation",text:"Installation",depth:2},{id:"int\xE9gration-de-woocommerce",text:"Int\xE9gration de WooCommerce",depth:2},{id:"payment-status-handling",text:"Payment Status Handling",depth:2},{id:"webhook-integration",text:"Webhook Integration",depth:2},{id:"troubleshooting",text:"Troubleshooting",depth:2},{id:"support",text:"Support",depth:2}],d="Fusion Pay Payment Gateway";function i(t){const e=Object.assign({h1:"h1",a:"a",p:"p",img:"img",h2:"h2",ul:"ul",li:"li",ol:"ol",code:"code",strong:"strong",div:"div"},t.components);return r(a,{children:[r(e.h1,{id:"fusion-pay-payment-gateway",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#fusion-pay-payment-gateway",children:"#"}),"Fusion Pay Payment Gateway"]}),`
`,n(e.p,{children:n(e.img,{src:"https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/banner.png",alt:"banner"})}),`
`,r(e.h2,{id:"description",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#description",children:"#"}),"Description"]}),`
`,n(e.p,{children:"Fusion Pay WooCommerce Payment Gateway est un plugin WordPress personnalis\xE9 qui vous permet d'int\xE9grer le syst\xE8me de paiement MoneyFusion dans votre site WordPress WooCommerce."}),`
`,r(e.h2,{id:"caract\xE9ristiques",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#caract\xE9ristiques",children:"#"}),"Caract\xE9ristiques"]}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Installation et configuration faciles"}),`
`,n(e.li,{children:"Traitement s\xE9curis\xE9 des paiements gr\xE2ce \xE0 MoneyFusion"}),`
`,n(e.li,{children:"Param\xE8tres de passerelle de paiement personnalisables"}),`
`,n(e.li,{children:"Mises \xE0 jour en temps r\xE9el de l'\xE9tat des paiements via des webhooks"}),`
`,n(e.li,{children:"Enregistrement d\xE9taill\xE9 des transactions et options de d\xE9bogage"}),`
`,n(e.li,{children:"Statuts de commande personnalis\xE9s pour un meilleur suivi des paiements"}),`
`,n(e.li,{children:"Int\xE9gration compl\xE8te de WooCommerce pour des paiements en ligne transparents"}),`
`]}),`
`,r(e.h2,{id:"installation",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#installation",children:"#"}),"Installation"]}),`
`,r(e.ol,{children:[`
`,r(e.li,{children:["T\xE9l\xE9chargez le plugin \xE0 partir de ",n(e.a,{href:"https://docs.moneyfusion.net/fusionpay.zip",target:"_blank",rel:"nofollow",children:"ce lien"}),"."]}),`
`,r(e.li,{children:["Installez-le ou t\xE9l\xE9chargez le dossier ",n(e.code,{children:"fusionpay"})," dans le r\xE9pertoire ",n(e.code,{children:"/wp-content/plugins/"}),"."]}),`
`,n(e.li,{children:"Activez le plugin dans le menu \xAB Plugins \xBB de WordPress."}),`
`]}),`
`,r(e.h2,{id:"int\xE9gration-de-woocommerce",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#int\xE9gration-de-woocommerce",children:"#"}),"Int\xE9gration de WooCommerce"]}),`
`,n(e.p,{children:"Pour utiliser Fusion Pay avec WooCommerce :"}),`
`,r(e.ol,{children:[`
`,r(e.li,{children:[`
`,n(e.p,{children:"Assurez-vous que WooCommerce est install\xE9 et activ\xE9."}),`
`]}),`
`,r(e.li,{children:[`
`,n(e.p,{children:"Allez dans WooCommerce > Param\xE8tres > Paiements."}),`
`]}),`
`,r(e.li,{children:[`
`,r(e.p,{children:[`Activez \xAB Fusion Pay \xBB comme m\xE9thode de paiement.\r
`,n(e.img,{src:"https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/woo-activation.png",alt:"woocommerce-fusionpay-activation"})]}),`
`]}),`
`,r(e.li,{children:[`
`,n(e.p,{children:"Cliquez sur \xAB G\xE9rer \xBB \xE0 c\xF4t\xE9 de Fusion Pay pour configurer les param\xE8tres de la passerelle:"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.strong,{children:"Enable/Disable"}),": Activer ou d\xE9sactiver le mode de paiement"]}),`
`,r(e.li,{children:[n(e.strong,{children:"Title"}),": Personnaliser la fa\xE7on dont la m\xE9thode de paiement appara\xEEt aux clients (par d\xE9faut : \xAB Fusion Pay \xBB)"]}),`
`,r(e.li,{children:[n(e.strong,{children:"Description"}),": Fournir des informations sur ce mode de paiement \xE0 vos clients"]}),`
`,r(e.li,{children:[n(e.strong,{children:"API URL"}),": Entrez votre URL API Fusion Pay unique (cr\xE9ez une application sur ",n(e.a,{href:"https://moneyfusion.net/dashboard/fusionpay",target:"_blank",rel:"nofollow",children:"moneyfusion"})," pour obtenir l'url)."]}),`
`,r(e.li,{children:[n(e.strong,{children:"Return URL"}),": URL o\xF9 les clients seront redirig\xE9s apr\xE8s le paiement"]}),`
`,r(e.li,{children:[n(e.strong,{children:"Webhook URL"}),": URL que vous devez configurer pour recevoir les notifications de paiement."]}),`
`,r(e.li,{children:[n(e.strong,{children:"Debug Log"}),": Permet de r\xE9soudre les probl\xE8mes de paiement. Trouv\xE9 sur ",n(e.code,{children:"https://your-site.com/wp-admin/admin.php?page=wc-status&tab=logs"})," et source ",n(e.code,{children:"fusion-pay"})]}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-3.png",alt:"form"})}),`
`]}),`
`,r(e.li,{children:[`
`,n(e.p,{children:"Save your settings and the payment gateway will be available at checkout."}),`
`]}),`
`]}),`
`,n(e.p,{children:"Les clients peuvent d\xE9sormais s\xE9lectionner Fusion Pay comme option de paiement lors de la validation de leur commande."}),`
`,n(e.p,{children:n(e.img,{src:"https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-4.png",alt:"form"})}),`
`,r(e.h2,{id:"payment-status-handling",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#payment-status-handling",children:"#"}),"Payment Status Handling"]}),`
`,n(e.p,{children:"Le plugin g\xE8re automatiquement les statuts de paiement suivants de MoneyFusion :"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.strong,{children:"paid"})," - Paiement r\xE9ussi (commande marqu\xE9e comme termin\xE9e)"]}),`
`,r(e.li,{children:[n(e.strong,{children:"pending"})," - Le paiement est en cours de traitement (commande marqu\xE9e comme \xE9tant en cours de traitement)"]}),`
`,r(e.li,{children:[n(e.strong,{children:"failure"})," - Le paiement a \xE9chou\xE9 (la commande est marqu\xE9e comme ayant \xE9chou\xE9)"]}),`
`,r(e.li,{children:[n(e.strong,{children:"no paid"})," - Paiement non effectu\xE9 (commande marqu\xE9e comme en attente)"]}),`
`]}),`
`,r(e.h2,{id:"webhook-integration",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#webhook-integration",children:"#"}),"Webhook Integration"]}),`
`,n(e.p,{children:"Pour les mises \xE0 jour automatiques de l'\xE9tat de la commande, laissez le point de terminaison du webhook dans le tableau de bord de woocommerce :"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:["Webhook URL: ",n(e.code,{children:"https://your-site.com/wc-api/wc_fusion_pay_gateway"})]}),`
`]}),`
`,n(e.p,{children:"Cela permet \xE0 votre boutique WooCommerce de recevoir automatiquement les mises \xE0 jour de l'\xE9tat des paiements."}),`
`,r(e.h2,{id:"troubleshooting",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#troubleshooting",children:"#"}),"Troubleshooting"]}),`
`,n(e.p,{children:"Si vous rencontrez des probl\xE8mes avec la passerelle :"}),`
`,r(e.ol,{children:[`
`,n(e.li,{children:"Activez le journal de d\xE9bogage dans les param\xE8tres de la passerelle."}),`
`,n(e.li,{children:"V\xE9rifiez les journaux d'\xE9tat du syst\xE8me WooCommerce pour toute erreur."}),`
`,n(e.li,{children:"V\xE9rifiez que l'URL de votre API est correctement saisie"}),`
`,r(e.li,{children:["Si l'option de paiement n'est pas visible, allez sur la page de paiement et entrez ",n(e.code,{children:"[woocommerce_checkout]"}),` dans la section raccourci pour plus d'informations :\r
`,n(e.a,{href:"https://www.youtube.com/watch?v=sfYauEEO7S0",target:"_blank",rel:"nofollow",children:n(e.img,{src:"https://img.youtube.com/vi/sfYauEEO7S0/0.jpg",alt:"Watch the video"})})]}),`
`]}),`
`,r(e.div,{className:"island-directive danger",children:[n(e.p,{className:"island-directive-title",children:"Good to know"}),n(e.div,{className:"island-directive-content",children:n(e.p,{children:"Make sure that the currency is in CFA Franc and that the amount is 200 minimum so that all works without any problem."})})]}),`
`,r(e.h2,{id:"support",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#support",children:"#"}),"Support"]}),`
`,r(e.p,{children:["For any issues or feature requests, please visit the ",n(e.a,{href:"https://github.com/Yaya12085/wp-fusionpay/issues",target:"_blank",rel:"nofollow",children:"GitHub Issues Page"})]})]})}function c(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(i,t)})):i(t)}const u="2025/5/18 02:11:43",m=`# Fusion Pay Payment Gateway\r
\r
![banner](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/banner.png)\r
\r
## Description\r
\r
Fusion Pay WooCommerce Payment Gateway est un plugin WordPress personnalis\xE9 qui vous permet d'int\xE9grer le syst\xE8me de paiement MoneyFusion dans votre site WordPress WooCommerce.\r
\r
## Caract\xE9ristiques\r
\r
- Installation et configuration faciles\r
- Traitement s\xE9curis\xE9 des paiements gr\xE2ce \xE0 MoneyFusion\r
- Param\xE8tres de passerelle de paiement personnalisables\r
- Mises \xE0 jour en temps r\xE9el de l'\xE9tat des paiements via des webhooks\r
- Enregistrement d\xE9taill\xE9 des transactions et options de d\xE9bogage\r
- Statuts de commande personnalis\xE9s pour un meilleur suivi des paiements\r
- Int\xE9gration compl\xE8te de WooCommerce pour des paiements en ligne transparents\r
\r
## Installation\r
\r
1. T\xE9l\xE9chargez le plugin \xE0 partir de [ce lien](https://docs.moneyfusion.net/fusionpay.zip).\r
2. Installez-le ou t\xE9l\xE9chargez le dossier \`fusionpay\` dans le r\xE9pertoire \`/wp-content/plugins/\`.\r
3. Activez le plugin dans le menu \xAB Plugins \xBB de WordPress.\r
\r
## Int\xE9gration de WooCommerce\r
\r
Pour utiliser Fusion Pay avec WooCommerce :\r
\r
1. Assurez-vous que WooCommerce est install\xE9 et activ\xE9.\r
2. Allez dans WooCommerce > Param\xE8tres > Paiements.\r
3. Activez \xAB Fusion Pay \xBB comme m\xE9thode de paiement.\r
   ![woocommerce-fusionpay-activation](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/woo-activation.png)\r
\r
4. Cliquez sur \xAB G\xE9rer \xBB \xE0 c\xF4t\xE9 de Fusion Pay pour configurer les param\xE8tres de la passerelle:\r
\r
   - **Enable/Disable**: Activer ou d\xE9sactiver le mode de paiement\r
   - **Title**: Personnaliser la fa\xE7on dont la m\xE9thode de paiement appara\xEEt aux clients (par d\xE9faut : \xAB Fusion Pay \xBB)\r
   - **Description**: Fournir des informations sur ce mode de paiement \xE0 vos clients\r
   - **API URL**: Entrez votre URL API Fusion Pay unique (cr\xE9ez une application sur [moneyfusion](https://moneyfusion.net/dashboard/fusionpay) pour obtenir l'url).\r
   - **Return URL**: URL o\xF9 les clients seront redirig\xE9s apr\xE8s le paiement\r
   - **Webhook URL**: URL que vous devez configurer pour recevoir les notifications de paiement.\r
   - **Debug Log**: Permet de r\xE9soudre les probl\xE8mes de paiement. Trouv\xE9 sur \`https://your-site.com/wp-admin/admin.php?page=wc-status&tab=logs\` et source \`fusion-pay\`\r
\r
   ![form](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-3.png)\r
\r
5. Save your settings and the payment gateway will be available at checkout.\r
\r
Les clients peuvent d\xE9sormais s\xE9lectionner Fusion Pay comme option de paiement lors de la validation de leur commande.\r
\r
![form](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-4.png)\r
\r
## Payment Status Handling\r
\r
Le plugin g\xE8re automatiquement les statuts de paiement suivants de MoneyFusion :\r
\r
- **paid** - Paiement r\xE9ussi (commande marqu\xE9e comme termin\xE9e)\r
- **pending** - Le paiement est en cours de traitement (commande marqu\xE9e comme \xE9tant en cours de traitement)\r
- **failure** - Le paiement a \xE9chou\xE9 (la commande est marqu\xE9e comme ayant \xE9chou\xE9)\r
- **no paid** - Paiement non effectu\xE9 (commande marqu\xE9e comme en attente)\r
\r
## Webhook Integration\r
\r
Pour les mises \xE0 jour automatiques de l'\xE9tat de la commande, laissez le point de terminaison du webhook dans le tableau de bord de woocommerce :\r
\r
- Webhook URL: \`https://your-site.com/wc-api/wc_fusion_pay_gateway\`\r
\r
Cela permet \xE0 votre boutique WooCommerce de recevoir automatiquement les mises \xE0 jour de l'\xE9tat des paiements.\r
\r
## Troubleshooting\r
\r
Si vous rencontrez des probl\xE8mes avec la passerelle :\r
\r
1. Activez le journal de d\xE9bogage dans les param\xE8tres de la passerelle.\r
2. V\xE9rifiez les journaux d'\xE9tat du syst\xE8me WooCommerce pour toute erreur.\r
3. V\xE9rifiez que l'URL de votre API est correctement saisie\r
4. Si l'option de paiement n'est pas visible, allez sur la page de paiement et entrez \`[woocommerce_checkout]\` dans la section raccourci pour plus d'informations :\r
   [![Watch the video](https://img.youtube.com/vi/sfYauEEO7S0/0.jpg)](https://www.youtube.com/watch?v=sfYauEEO7S0)\r
\r
:::danger{title="Good to know"}\r
Make sure that the currency is in CFA Franc and that the amount is 200 minimum so that all works without any problem.\r
:::\r
\r
## Support\r
\r
For any issues or feature requests, please visit the [GitHub Issues Page](https://github.com/Yaya12085/wp-fusionpay/issues)\r
`;export{m as content,c as default,s as frontmatter,u as lastUpdatedTime,d as title,l as toc};
