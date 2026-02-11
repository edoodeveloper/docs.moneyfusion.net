import{jsx as n,jsxs as e,Fragment as c}from"react/jsx-runtime";const a=void 0,i=[{id:"installation",text:"Installation",depth:2},{id:"utilisation",text:"Utilisation",depth:2},{id:"importation",text:"Importation",depth:3},{id:"initialisation-du-client",text:"Initialisation du client",depth:3},{id:"cr\xE9er-un-paiement",text:"Cr\xE9er un paiement",depth:3},{id:"r\xE9cup\xE9rer-un-paiement",text:"R\xE9cup\xE9rer un paiement",depth:3}],t="API MONEY FUSION PYTHON";function s(r){const l=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",span:"span",pre:"pre",code:"code",h3:"h3"},r.components);return e(c,{children:[e(l.h1,{id:"api-money-fusion-python",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#api-money-fusion-python",children:"#"}),"API MONEY FUSION PYTHON"]}),`
`,n(l.p,{children:"Elle permet d'int\xE9ragir avec l'API de paiement de MoneyFusion. Elle facilite la cr\xE9ation et la r\xE9cup\xE9ration des paiements via des requ\xEAtes HTTP."}),`
`,e(l.h2,{id:"installation",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#installation",children:"#"}),"Installation"]}),`
`,n(l.p,{children:"vous pourrez l'installer avec :"}),`
`,e(l.div,{className:"language-sh",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"sh"}),n(l.pre,{children:e(l.code,{className:"",children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#D8DEE9FF"},children:"pip install apiMoneyFusion"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h2,{id:"utilisation",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#utilisation",children:"#"}),"Utilisation"]}),`
`,e(l.h3,{id:"importation",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#importation",children:"#"}),"Importation"]}),`
`,e(l.div,{className:"language-python",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"python"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#81A1C1"},children:"from"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" apiMoneyFusion "}),n(l.span,{style:{color:"#81A1C1"},children:"import"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" PaymentClient"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h3,{id:"initialisation-du-client",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#initialisation-du-client",children:"#"}),"Initialisation du client"]}),`
`,e(l.div,{className:"language-python",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"python"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"client "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#88C0D0"},children:"PaymentClient"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9"},children:"api_key_url"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"https://api.moneyfusion.net"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:")"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h3,{id:"cr\xE9er-un-paiement",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#cr\xE9er-un-paiement",children:"#"}),"Cr\xE9er un paiement"]}),`
`,e(l.div,{className:"language-python",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"python"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"payment "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" client"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"create_payment"}),n(l.span,{style:{color:"#ECEFF4"},children:"("})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"total_price"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"10000"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"articles"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:"[{"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"name"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"Article 1"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"price"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"5000"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"quantity"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#ECEFF4"},children:"}],"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"numero_send"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"0101010101"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"nom_client"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"assemienDev"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"user_id"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"order_id"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#B48EAD"},children:"123"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#D8DEE9"},children:"return_url"}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"https://votre-domaine.com/callback"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:")"})}),`
`,n(l.span,{className:"line"}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#88C0D0"},children:"print"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9FF"},children:"payment"}),n(l.span,{style:{color:"#ECEFF4"},children:")"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.p,{children:"R\xE9ponse attendue :"}),`
`,e(l.div,{className:"language-json",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"json"}),n(l.pre,{children:e(l.code,{className:"",children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"{"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"statut"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"true"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"token"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"f5EJ33JYmxqosi8BvaEt"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"message"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"paiement en cours"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"url"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"https://payin.moneyfusion.net/payment/f5EJ33JYmxqosi8BvaEt/10000/John Doe"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]}),`
`,e(l.h3,{id:"r\xE9cup\xE9rer-un-paiement",children:[n(l.a,{className:"header-anchor","aria-hidden":"true",href:"#r\xE9cup\xE9rer-un-paiement",children:"#"}),"R\xE9cup\xE9rer un paiement"]}),`
`,e(l.div,{className:"language-python",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"python"}),n(l.pre,{children:e(l.code,{className:"",children:[e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"payment_info "}),n(l.span,{style:{color:"#81A1C1"},children:"="}),n(l.span,{style:{color:"#D8DEE9FF"},children:" client"}),n(l.span,{style:{color:"#ECEFF4"},children:"."}),n(l.span,{style:{color:"#88C0D0"},children:"get_payment"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"8L5teSc5TaIkP3ds9Dlx"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:")"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#88C0D0"},children:"print"}),n(l.span,{style:{color:"#ECEFF4"},children:"("}),n(l.span,{style:{color:"#D8DEE9FF"},children:"payment_info"}),n(l.span,{style:{color:"#ECEFF4"},children:")"})]}),`
`,n(l.span,{className:"line"})]})})]}),`
`,n(l.p,{children:"R\xE9ponse attendue :"}),`
`,e(l.div,{className:"language-json",style:{backgroundColor:"#2e3440ff"},children:[n(l.button,{className:"copy"}),n(l.span,{className:"lang",children:"json"}),n(l.pre,{children:e(l.code,{className:"",children:[n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"{"})}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"statut"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#81A1C1"},children:"true"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"data"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"_id"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"6748d365967cb4766fdd1616"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"tokenPay"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"8L5teSc5TaIkP3ds9Dlx"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"numeroSend"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"None"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"nomclient"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"assemienDev"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"personal_Info"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:"[{"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"userId"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"1"}),n(l.span,{style:{color:"#ECEFF4"},children:","}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"orderId"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"123"}),n(l.span,{style:{color:"#ECEFF4"},children:"}],"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"numeroTransaction"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'""'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"Montant"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"475"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"frais"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#B48EAD"},children:"25"}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"statut"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"paid"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"moyen"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"card"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"return_url"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"https://votre-domaine.com/callback"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"createdAt"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"2024-11-28T20:32:37.037Z"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,e(l.span,{className:"line",children:[n(l.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#8FBCBB"},children:"message"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#ECEFF4"},children:":"}),n(l.span,{style:{color:"#D8DEE9FF"},children:" "}),n(l.span,{style:{color:"#ECEFF4"},children:'"'}),n(l.span,{style:{color:"#A3BE8C"},children:"details paiement"}),n(l.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(l.span,{className:"line",children:n(l.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(l.span,{className:"line"})]})})]})]})}function d(r={}){const{wrapper:l}=r.components||{};return l?n(l,Object.assign({},r,{children:n(s,r)})):s(r)}const E="2025/2/6 13:44:59",p=`# API MONEY FUSION PYTHON\r
\r
Elle permet d'int\xE9ragir avec l'API de paiement de MoneyFusion. Elle facilite la cr\xE9ation et la r\xE9cup\xE9ration des paiements via des requ\xEAtes HTTP.\r
\r
## Installation\r
\r
vous pourrez l'installer avec :\r
\r
\`\`\`sh\r
pip install apiMoneyFusion\r
\`\`\`\r
\r
## Utilisation\r
\r
### Importation\r
\r
\`\`\`python\r
from apiMoneyFusion import PaymentClient\r
\`\`\`\r
\r
### Initialisation du client\r
\r
\`\`\`python\r
client = PaymentClient(api_key_url="https://api.moneyfusion.net")\r
\`\`\`\r
\r
### Cr\xE9er un paiement\r
\r
\`\`\`python\r
payment = client.create_payment(\r
    total_price="10000",\r
    articles=[{"name": "Article 1", "price": "5000", "quantity": 1}],\r
    numero_send="0101010101",\r
    nom_client="assemienDev",\r
    user_id=1,\r
    order_id=123,\r
    return_url="https://votre-domaine.com/callback"\r
)\r
\r
print(payment)\r
\`\`\`\r
\r
R\xE9ponse attendue :\r
\r
\`\`\`json\r
{\r
    "statut": true,\r
    "token": "f5EJ33JYmxqosi8BvaEt",\r
    "message": "paiement en cours",\r
    "url": "https://payin.moneyfusion.net/payment/f5EJ33JYmxqosi8BvaEt/10000/John Doe"\r
}\r
\`\`\`\r
\r
### R\xE9cup\xE9rer un paiement\r
\r
\`\`\`python\r
payment_info = client.get_payment("8L5teSc5TaIkP3ds9Dlx")\r
print(payment_info)\r
\`\`\`\r
\r
R\xE9ponse attendue :\r
\r
\`\`\`json\r
{\r
    "statut": true,\r
    "data": {\r
        "_id": "6748d365967cb4766fdd1616",\r
        "tokenPay": "8L5teSc5TaIkP3ds9Dlx",\r
        "numeroSend": "None",\r
        "nomclient": "assemienDev",\r
        "personal_Info": [{"userId": 1, "orderId": 123}],\r
        "numeroTransaction": "",\r
        "Montant": 475,\r
        "frais": 25,\r
        "statut": "paid",\r
        "moyen": "card",\r
        "return_url": "https://votre-domaine.com/callback",\r
        "createdAt": "2024-11-28T20:32:37.037Z"\r
    },\r
    "message": "details paiement"\r
}\r
\`\`\`\r
\r
\r
`;export{p as content,d as default,a as frontmatter,E as lastUpdatedTime,t as title,i as toc};
