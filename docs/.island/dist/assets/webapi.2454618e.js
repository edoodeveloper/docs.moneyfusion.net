import{jsx as n,jsxs as l,Fragment as c}from"react/jsx-runtime";const a=void 0,i=[{id:"demande-de-paiement",text:"Demande de paiement",depth:3},{id:"exemple-de-donn\xE9es-de-paiement",text:"Exemple de donn\xE9es de paiement",depth:3},{id:"champs",text:"Champs",depth:3},{id:"exemple-de-r\xE9ponse",text:"Exemple de r\xE9ponse",depth:3},{id:"objet-de-la-r\xE9ponse",text:"Objet de la r\xE9ponse",depth:3},{id:"v\xE9rification-de-l\xE9tat-des-paiements",text:"V\xE9rification de l'\xE9tat des paiements",depth:2},{id:"v\xE9rifier-l\xE9tat-du-paiement",text:"V\xE9rifier l'\xE9tat du paiement",depth:3},{id:"exemple-de-r\xE9ponse-1",text:"Exemple de r\xE9ponse",depth:3},{id:"types-de-statut-de-paiement",text:"Types de statut de paiement",depth:3},{id:"champs-de-donn\xE9es-de-la-r\xE9ponse-d\xE9tat",text:"Champs de donn\xE9es de la r\xE9ponse d'\xE9tat",depth:3},{id:"suivi-des-transactions-en-temps-r\xE9el-via-webhook",text:"Suivi des Transactions en Temps R\xE9el via Webhook",depth:2},{id:"structure-des-donn\xE9es-re\xE7ues",text:"Structure des donn\xE9es re\xE7ues",depth:3},{id:"liste-des-\xE9v\xE9nements-webhook-disponibles",text:"Liste des \xC9v\xE9nements Webhook Disponibles",depth:3},{id:"gestion-des-notifications-multiples-pour-le-webhook",text:"Gestion des Notifications Multiples pour le Webhook",depth:2},{id:"important-\xE0-savoir",text:"Important \xE0 savoir",depth:3},{id:"recommandations-de-traitement",text:"Recommandations de traitement",depth:3},{id:"exemple-de-logique-de-filtrage",text:"Exemple de logique de filtrage",depth:3}],t="L'API Web : un moyen flexible de d\xE9velopper";function s(r){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h3:"h3",div:"div",button:"button",span:"span",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h2:"h2",strong:"strong",ul:"ul",li:"li",ol:"ol"},r.components);return l(c,{children:[l(e.h1,{id:"lapi-web--un-moyen-flexible-de-d\xE9velopper",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#lapi-web--un-moyen-flexible-de-d\xE9velopper",children:"#"}),"L'API Web : un moyen flexible de d\xE9velopper"]}),`
`,n(e.p,{children:"Vous pouvez utiliser l'api web pour d\xE9velopper votre application."}),`
`,l(e.p,{children:["Pour commencer, j'utiliserai ",n(e.code,{children:"axios"}),". N'h\xE9sitez pas \xE0 utiliser n'importe quel client http, par exemple ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",target:"_blank",rel:"nofollow",children:"fetch"})]}),`
`,l(e.h3,{id:"demande-de-paiement",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#demande-de-paiement",children:"#"}),"Demande de paiement"]}),`
`,l(e.div,{className:"language-javascript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"javascript"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"axios"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"require"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"axios"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"apiUrl"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"YOUR_API_URL"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#616E88"},children:"// Obtenez ceci depuis votre tableau de bord"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"makePayment"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"async"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"paymentData"}),n(e.span,{style:{color:"#ECEFF4"},children:")"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"try"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"response"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"await"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"axios"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"post"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"apiUrl"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"paymentData"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#88C0D0"},children:"headers "}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"Content-Type"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#88C0D0"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"application/json"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"return"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"response"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"data"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"catch"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"error"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#D8DEE9"},children:"lancer"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"l"}),n(e.span,{style:{color:"#ECEFF4"},children:"'"}),n(e.span,{style:{color:"#A3BE8C"},children:"erreur "}),n(e.span,{style:{color:"#D8DEE9"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"exemple-de-donn\xE9es-de-paiement",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#exemple-de-donn\xE9es-de-paiement",children:"#"}),"Exemple de donn\xE9es de paiement"]}),`
`,l(e.div,{className:"language-javascript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"javascript"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"paymentData"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"totalPrice"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"200"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"article"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ["})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#88C0D0"},children:"sac"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"100"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#88C0D0"},children:"chaussure"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"100"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  ]"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"personal_Info"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ["})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#88C0D0"},children:"userId"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"1"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#88C0D0"},children:"orderId"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"123"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  ]"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"numeroSend"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:" 01010101 "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"nomclient"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:" John Doe "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"return_url"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:" https://your-domain.com/callback "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"webhook_url"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"https://your-domain.com/my-webhook-url"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#616E88"},children:"// Le webhook doit accepter les requ\xEAtes POST pour recevoir les donn\xE9es."})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"champs",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#champs",children:"#"}),"Champs"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Champ"}),n(e.th,{children:"Type"}),n(e.th,{children:"Description"}),n(e.th,{children:"Exemple"}),n(e.th,{children:"Exig\xE9"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"totalPrice"})}),n(e.td,{children:"Number"}),n(e.td,{children:"Montant total \xE0 payer"}),n(e.td,{children:"200"}),n(e.td,{children:"Oui"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"article"})}),n(e.td,{children:n(e.code,{children:"Array<Object>"})}),n(e.td,{children:"Liste des articles avec leur prix"}),n(e.td,{children:n(e.code,{children:'[{"sac": 100, "chaussure": 100}]'})}),n(e.td,{children:"Oui"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"numeroSend"})}),n(e.td,{children:"String"}),n(e.td,{children:"Num\xE9ro de t\xE9l\xE9phone du client"}),n(e.td,{children:'"01010101"'}),n(e.td,{children:"Oui"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"nomclient"})}),n(e.td,{children:"String"}),n(e.td,{children:"Nom du client"}),n(e.td,{children:'"John Doe"'}),n(e.td,{children:"Oui"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"personal_Info"})}),n(e.td,{children:n(e.code,{children:"Array<Object>"})}),n(e.td,{children:"Autres informations personnelles"}),n(e.td,{children:n(e.code,{children:'[{"userId": 1, "orderId": 123}]'})}),n(e.td,{children:"Non"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"return_url"})}),n(e.td,{children:"String"}),n(e.td,{children:"url \xE0 rediriger apr\xE8s le paiement"}),n(e.td,{children:n(e.code,{children:"https://your-domain.com/callback"})}),n(e.td,{children:"Non"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"webhook_url"})}),n(e.td,{children:"String"}),n(e.td,{children:"url (POST) de o\xF9 seront renvoy\xE9s les d\xE9tails de la transaction"}),n(e.td,{children:n(e.code,{children:"https://your-domain.com/my-webhook-url"})}),n(e.td,{children:"Non"})]})]})]}),`
`,l(e.h3,{id:"exemple-de-r\xE9ponse",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#exemple-de-r\xE9ponse",children:"#"}),"Exemple de r\xE9ponse"]}),`
`,l(e.div,{className:"language-json",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"json"}),n(e.pre,{children:l(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"{"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"statut"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"true"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"token"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"5d58823b084564"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"message"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"paiement en cours"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"url"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"https://www.pay.moneyfusion.net/pay/6596aded36bd58823b084564"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"objet-de-la-r\xE9ponse",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#objet-de-la-r\xE9ponse",children:"#"}),"Objet de la r\xE9ponse"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Field"}),n(e.th,{children:"Type"}),n(e.th,{children:"Description"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"statut"})}),n(e.td,{children:"Boolean"}),n(e.td,{children:"Statut de la demande de paiement"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"token"})}),n(e.td,{children:"String"}),n(e.td,{children:"Jeton de paiement unique pour le suiv"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"message"})}),n(e.td,{children:"String"}),n(e.td,{children:"Message d'\xE9tat"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"url"})}),n(e.td,{children:"String"}),n(e.td,{children:"URL de la page de paiement"})]})]})]}),`
`,l(e.h2,{id:"v\xE9rification-de-l\xE9tat-des-paiements",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#v\xE9rification-de-l\xE9tat-des-paiements",children:"#"}),"V\xE9rification de l'\xE9tat des paiements"]}),`
`,l(e.h3,{id:"v\xE9rifier-l\xE9tat-du-paiement",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#v\xE9rifier-l\xE9tat-du-paiement",children:"#"}),"V\xE9rifier l'\xE9tat du paiement"]}),`
`,l(e.div,{className:"language-javascript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"javascript"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"checkPaymentStatus"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"async"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"token"}),n(e.span,{style:{color:"#ECEFF4"},children:")"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"try"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"response"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"await"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"axios"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"get"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#ECEFF4"},children:"`"}),n(e.span,{style:{color:"#A3BE8C"},children:"https://www.pay.moneyfusion.net/paiementNotif/"}),n(e.span,{style:{color:"#81A1C1"},children:"${"}),n(e.span,{style:{color:"#D8DEE9"},children:"token"}),n(e.span,{style:{color:"#81A1C1"},children:"}"}),n(e.span,{style:{color:"#ECEFF4"},children:"`"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    )"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"return"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"response"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"data"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"catch"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"error"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"throw"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"error"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"exemple-de-r\xE9ponse-1",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#exemple-de-r\xE9ponse-1",children:"#"}),"Exemple de r\xE9ponse"]}),`
`,l(e.div,{className:"language-json",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"json"}),n(e.pre,{children:l(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"{"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"statut"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"true"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"data"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"_id"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"65df163b11ab882694573060"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"tokenPay"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"0d1d8bc9b6d2819c"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"numeroSend"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"01010101"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"nomclient"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"John Doe"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"personal_Info"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"["})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"userId"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"1"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"orderId"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"123"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"],"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"numeroTransaction"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"0708889205"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"Montant"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"200"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"frais"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"5"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"statut"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"paid"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"moyen"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"orange"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"return_url"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"https://your-domain.com/callback"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"createdAt"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"2024-02-28T11:17:15.285Z"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"message"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"details paiement"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"types-de-statut-de-paiement",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#types-de-statut-de-paiement",children:"#"}),"Types de statut de paiement"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Status"}),n(e.th,{children:"Description"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"pending"})}),n(e.td,{children:"Le paiement est en cours de traitement"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"failure"})}),n(e.td,{children:"\xC9chec du paiement"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"no paid"})}),n(e.td,{children:"Paiement non effectu\xE9"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"paid"})}),n(e.td,{children:"Paiement r\xE9ussi"})]})]})]}),`
`,l(e.h3,{id:"champs-de-donn\xE9es-de-la-r\xE9ponse-d\xE9tat",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#champs-de-donn\xE9es-de-la-r\xE9ponse-d\xE9tat",children:"#"}),"Champs de donn\xE9es de la r\xE9ponse d'\xE9tat"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Field"}),n(e.th,{children:"Type"}),n(e.th,{children:"Description"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_id"})}),n(e.td,{children:"String"}),n(e.td,{children:"Transaction ID"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"tokenPay"})}),n(e.td,{children:"String"}),n(e.td,{children:"Payment token"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"numeroSend"})}),n(e.td,{children:"String"}),n(e.td,{children:"Num\xE9ro de t\xE9l\xE9phone du client"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"nomclient"})}),n(e.td,{children:"String"}),n(e.td,{children:"Nom du client"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"personal_Info"})}),n(e.td,{children:n(e.code,{children:"Array<Object>"})}),n(e.td,{children:"Autres informations personnelles"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"Montant"})}),n(e.td,{children:"Number"}),n(e.td,{children:"Montant de la transaction"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"frais"})}),n(e.td,{children:"Number"}),n(e.td,{children:"Frais de transaction"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"statut"})}),n(e.td,{children:"String"}),n(e.td,{children:"\xC9tat des paiements"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"moyen"})}),n(e.td,{children:"String"}),n(e.td,{children:"Mode de paiement"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"createdAt"})}),n(e.td,{children:"String"}),n(e.td,{children:"Horaire de la transaction"})]})]})]}),`
`,l(e.h2,{id:"suivi-des-transactions-en-temps-r\xE9el-via-webhook",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#suivi-des-transactions-en-temps-r\xE9el-via-webhook",children:"#"}),"Suivi des Transactions en Temps R\xE9el via Webhook"]}),`
`,l(e.h3,{id:"structure-des-donn\xE9es-re\xE7ues",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#structure-des-donn\xE9es-re\xE7ues",children:"#"}),"Structure des donn\xE9es re\xE7ues"]}),`
`,l(e.div,{className:"language-json",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"json"}),n(e.pre,{children:l(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"{"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"event"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"payin.session.pending"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"personal_Info"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"["})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"userId"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"1"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"orderId"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"123"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"],"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"tokenPay"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"Le4Cnmm1Ac9yTgZMKQbz"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"numeroSend"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"01010101"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"nomclient"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"Kwameson"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"numeroTransaction"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"01010101"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"Montant"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"194"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"frais"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#B48EAD"},children:"6"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"return_url"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:" https://your-domain.com/callback "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"webhook_url"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"https://your-domain.com/my-webhook-url"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"createdAt"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"2025-05-09T12:50:45.412Z"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"liste-des-\xE9v\xE9nements-webhook-disponibles",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#liste-des-\xE9v\xE9nements-webhook-disponibles",children:"#"}),"Liste des \xC9v\xE9nements Webhook Disponibles"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"\xC9v\xE9nement"}),n(e.th,{children:"Description"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"payin.session.pending"})}),n(e.td,{children:"Paiement initi\xE9 et en attente de traitement"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"payin.session.completed"})}),n(e.td,{children:"Paiement effectu\xE9 avec succ\xE8s"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"payin.session.cancelled"})}),n(e.td,{children:"Paiement annul\xE9 ou \xE9chou\xE9"})]})]})]}),`
`,l(e.h2,{id:"gestion-des-notifications-multiples-pour-le-webhook",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#gestion-des-notifications-multiples-pour-le-webhook",children:"#"}),"Gestion des Notifications Multiples pour le Webhook"]}),`
`,l(e.h3,{id:"important-\xE0-savoir",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#important-\xE0-savoir",children:"#"}),"Important \xE0 savoir"]}),`
`,l(e.p,{children:["Il est possible que moneyfusion envoie ",n(e.strong,{children:"plusieurs notifications"})," pour une m\xEAme transaction, notamment dans les cas suivants :"]}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:["R\xE9p\xE9tition de l\u2019\xE9v\xE9nement ",n(e.code,{children:"payin.session.pending"})," pendant la phase de traitement."]}),`
`,l(e.li,{children:["Envoi de l\u2019\xE9v\xE9nement ",n(e.code,{children:"payin.session.completed"})," apr\xE8s confirmation du paiement."]}),`
`,l(e.li,{children:["\xC9ventuel ",n(e.code,{children:"payin.session.cancelled"})," en cas d\u2019\xE9chec ou d\u2019annulation."]}),`
`]}),`
`,l(e.h3,{id:"recommandations-de-traitement",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#recommandations-de-traitement",children:"#"}),"Recommandations de traitement"]}),`
`,n(e.p,{children:"Pour garantir un traitement fiable et \xE9viter les doublons :"}),`
`,l(e.ol,{children:[`
`,l(e.li,{children:[n(e.strong,{children:"Identifie chaque transaction"})," de mani\xE8re unique gr\xE2ce au champ ",n(e.code,{children:"tokenPay"}),"."]}),`
`,l(e.li,{children:[n(e.strong,{children:"V\xE9rifie l\u2019\xE9tat actuel de la transaction"})," dans ta base de donn\xE9es avant d\u2019effectuer une mise \xE0 jour."]}),`
`,l(e.li,{children:[n(e.strong,{children:"Ignore les \xE9v\xE9nements d\xE9j\xE0 trait\xE9s"})," ou ceux qui ne repr\xE9sentent pas une \xE9volution de statut."]}),`
`]}),`
`,l(e.h3,{id:"exemple-de-logique-de-filtrage",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#exemple-de-logique-de-filtrage",children:"#"}),"Exemple de logique de filtrage"]}),`
`,l(e.div,{className:"language-javascript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"javascript"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"if"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"transactionExists"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"&&"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"incomingStatus"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"==="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"currentStatus"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Ne rien faire : notification redondante"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"else"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Mettre \xE0 jour le statut de la transaction"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]})]})}function d(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(s,r)})):s(r)}const h="2025/5/15 18:14:00",p=`# L'API Web : un moyen flexible de d\xE9velopper\r
\r
Vous pouvez utiliser l'api web pour d\xE9velopper votre application.\r
\r
Pour commencer, j'utiliserai \`axios\`. N'h\xE9sitez pas \xE0 utiliser n'importe quel client http, par exemple [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)\r
\r
### Demande de paiement\r
\r
\`\`\`javascript\r
const axios = require("axios") ;\r
\r
const apiUrl = "YOUR_API_URL" ; // Obtenez ceci depuis votre tableau de bord\r
const makePayment = async (paymentData) => {\r
  try {\r
    const response = await axios.post(apiUrl, paymentData, {\r
      headers : {\r
        "Content-Type" : "application/json",\r
      },\r
    }) ;\r
    return response.data ;\r
  } catch (error) {\r
    lancer l'erreur ;\r
  }\r
};\r
\`\`\`\r
\r
### Exemple de donn\xE9es de paiement\r
\r
\`\`\`javascript\r
const paymentData = {\r
  totalPrice: 200,\r
  article: [\r
    {\r
      sac: 100,\r
      chaussure: 100,\r
    },\r
  ],\r
  personal_Info: [\r
    {\r
      userId: 1,\r
      orderId: 123,\r
    },\r
  ],\r
  numeroSend: " 01010101 ",\r
  nomclient: " John Doe ",\r
  return_url: " https://your-domain.com/callback ",\r
  webhook_url: "https://your-domain.com/my-webhook-url", // Le webhook doit accepter les requ\xEAtes POST pour recevoir les donn\xE9es.\r
};\r
\`\`\`\r
\r
### Champs\r
\r
| Champ           | Type            | Description                                                    | Exemple                                  | Exig\xE9 |\r
| --------------- | --------------- | -------------------------------------------------------------- | ---------------------------------------- | ----- |\r
| \`totalPrice\`    | Number          | Montant total \xE0 payer                                          | 200                                      | Oui   |\r
| \`article\`       | \`Array<Object>\` | Liste des articles avec leur prix                              | \`[{"sac": 100, "chaussure": 100}]\`       | Oui   |\r
| \`numeroSend\`    | String          | Num\xE9ro de t\xE9l\xE9phone du client                                  | "01010101"                               | Oui   |\r
| \`nomclient\`     | String          | Nom du client                                                  | "John Doe"                               | Oui   |\r
| \`personal_Info\` | \`Array<Object>\` | Autres informations personnelles                               | \`[{"userId": 1, "orderId": 123}]\`        | Non   |\r
| \`return_url\`    | String          | url \xE0 rediriger apr\xE8s le paiement                              | \`https://your-domain.com/callback\`       | Non   |\r
| \`webhook_url\`   | String          | url (POST) de o\xF9 seront renvoy\xE9s les d\xE9tails de la transaction | \`https://your-domain.com/my-webhook-url\` | Non   |\r
\r
### Exemple de r\xE9ponse\r
\r
\`\`\`json\r
{\r
  "statut": true,\r
  "token": "5d58823b084564",\r
  "message": "paiement en cours",\r
  "url": "https://www.pay.moneyfusion.net/pay/6596aded36bd58823b084564"\r
}\r
\`\`\`\r
\r
### Objet de la r\xE9ponse\r
\r
| Field     | Type    | Description                           |\r
| --------- | ------- | ------------------------------------- |\r
| \`statut\`  | Boolean | Statut de la demande de paiement      |\r
| \`token\`   | String  | Jeton de paiement unique pour le suiv |\r
| \`message\` | String  | Message d'\xE9tat                        |\r
| \`url\`     | String  | URL de la page de paiement            |\r
\r
## V\xE9rification de l'\xE9tat des paiements\r
\r
### V\xE9rifier l'\xE9tat du paiement\r
\r
\`\`\`javascript\r
const checkPaymentStatus = async (token) => {\r
  try {\r
    const response = await axios.get(\r
      \`https://www.pay.moneyfusion.net/paiementNotif/\${token}\`\r
    );\r
    return response.data;\r
  } catch (error) {\r
    throw error;\r
  }\r
};\r
\`\`\`\r
\r
### Exemple de r\xE9ponse\r
\r
\`\`\`json\r
{\r
  "statut": true,\r
  "data": {\r
    "_id": "65df163b11ab882694573060",\r
    "tokenPay": "0d1d8bc9b6d2819c",\r
    "numeroSend": "01010101",\r
    "nomclient": "John Doe",\r
    "personal_Info": [\r
      {\r
        "userId": 1,\r
        "orderId": 123\r
      }\r
    ],\r
    "numeroTransaction": "0708889205",\r
    "Montant": 200,\r
    "frais": 5,\r
    "statut": "paid",\r
    "moyen": "orange",\r
    "return_url": "https://your-domain.com/callback",\r
    "createdAt": "2024-02-28T11:17:15.285Z"\r
  },\r
  "message": "details paiement"\r
}\r
\`\`\`\r
\r
### Types de statut de paiement\r
\r
| Status    | Description                            |\r
| --------- | -------------------------------------- |\r
| \`pending\` | Le paiement est en cours de traitement |\r
| \`failure\` | \xC9chec du paiement                      |\r
| \`no paid\` | Paiement non effectu\xE9                  |\r
| \`paid\`    | Paiement r\xE9ussi                        |\r
\r
### Champs de donn\xE9es de la r\xE9ponse d'\xE9tat\r
\r
| Field           | Type            | Description                      |\r
| --------------- | --------------- | -------------------------------- |\r
| \`_id\`           | String          | Transaction ID                   |\r
| \`tokenPay\`      | String          | Payment token                    |\r
| \`numeroSend\`    | String          | Num\xE9ro de t\xE9l\xE9phone du client    |\r
| \`nomclient\`     | String          | Nom du client                    |\r
| \`personal_Info\` | \`Array<Object>\` | Autres informations personnelles |\r
| \`Montant\`       | Number          | Montant de la transaction        |\r
| \`frais\`         | Number          | Frais de transaction             |\r
| \`statut\`        | String          | \xC9tat des paiements               |\r
| \`moyen\`         | String          | Mode de paiement                 |\r
| \`createdAt\`     | String          | Horaire de la transaction        |\r
\r
## Suivi des Transactions en Temps R\xE9el via Webhook\r
\r
### Structure des donn\xE9es re\xE7ues\r
\r
\`\`\`json\r
{\r
  "event": "payin.session.pending",\r
  "personal_Info": [\r
    {\r
      "userId": 1,\r
      "orderId": 123\r
    }\r
  ],\r
  "tokenPay": "Le4Cnmm1Ac9yTgZMKQbz",\r
  "numeroSend": "01010101",\r
  "nomclient": "Kwameson",\r
  "numeroTransaction": "01010101",\r
  "Montant": 194,\r
  "frais": 6,\r
  "return_url": " https://your-domain.com/callback ",\r
  "webhook_url": "https://your-domain.com/my-webhook-url",\r
  "createdAt": "2025-05-09T12:50:45.412Z"\r
}\r
\`\`\`\r
\r
### Liste des \xC9v\xE9nements Webhook Disponibles\r
\r
| \xC9v\xE9nement                 | Description                                 |\r
| ------------------------- | ------------------------------------------- |\r
| \`payin.session.pending\`   | Paiement initi\xE9 et en attente de traitement |\r
| \`payin.session.completed\` | Paiement effectu\xE9 avec succ\xE8s               |\r
| \`payin.session.cancelled\` | Paiement annul\xE9 ou \xE9chou\xE9                   |\r
\r
## Gestion des Notifications Multiples pour le Webhook\r
\r
### Important \xE0 savoir\r
\r
Il est possible que moneyfusion envoie **plusieurs notifications** pour une m\xEAme transaction, notamment dans les cas suivants :\r
\r
- R\xE9p\xE9tition de l\u2019\xE9v\xE9nement \`payin.session.pending\` pendant la phase de traitement.\r
- Envoi de l\u2019\xE9v\xE9nement \`payin.session.completed\` apr\xE8s confirmation du paiement.\r
- \xC9ventuel \`payin.session.cancelled\` en cas d\u2019\xE9chec ou d\u2019annulation.\r
\r
### Recommandations de traitement\r
\r
Pour garantir un traitement fiable et \xE9viter les doublons :\r
\r
1. **Identifie chaque transaction** de mani\xE8re unique gr\xE2ce au champ \`tokenPay\`.\r
2. **V\xE9rifie l\u2019\xE9tat actuel de la transaction** dans ta base de donn\xE9es avant d\u2019effectuer une mise \xE0 jour.\r
3. **Ignore les \xE9v\xE9nements d\xE9j\xE0 trait\xE9s** ou ceux qui ne repr\xE9sentent pas une \xE9volution de statut.\r
\r
### Exemple de logique de filtrage\r
\r
\`\`\`javascript\r
if (transactionExists && incomingStatus === currentStatus) {\r
  // Ne rien faire : notification redondante\r
} else {\r
  // Mettre \xE0 jour le statut de la transaction\r
}\r
\`\`\`\r
`;export{p as content,d as default,a as frontmatter,h as lastUpdatedTime,t as title,i as toc};
