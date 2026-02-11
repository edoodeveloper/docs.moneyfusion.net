import{jsx as e,jsxs as l,Fragment as c}from"react/jsx-runtime";const o=void 0,t=[{id:"installation",text:"Installation",depth:2},{id:"usage",text:"Usage",depth:2},{id:"initializing-fusionpay",text:"Initializing FusionPay",depth:3},{id:"setting-payment-data",text:"Setting Payment Data",depth:3},{id:"making-a-payment",text:"Making a Payment",depth:3},{id:"payment-response-structure",text:"Payment Response Structure",depth:4},{id:"handling-payment-callback",text:"Handling Payment Callback",depth:3},{id:"checking-payment-status",text:"Checking Payment Status",depth:3},{id:"payment-verification-response-structure",text:"Payment Verification Response Structure",depth:4},{id:"custom-data-examples",text:"Custom Data Examples",depth:2},{id:"api-reference",text:"API Reference",depth:2},{id:"constructor",text:"Constructor",depth:3},{id:"methods",text:"Methods",depth:3},{id:"error-handling",text:"Error Handling",depth:2}],i="Node.js package: The flexible way to use";function s(r){const n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",button:"button",span:"span",pre:"pre",code:"code",h3:"h3",h4:"h4",ul:"ul",li:"li"},r.components);return l(c,{children:[l(n.h1,{id:"nodejs-package-the-flexible-way-to-use",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#nodejs-package-the-flexible-way-to-use",children:"#"}),"Node.js package: The flexible way to use"]}),`
`,l(n.h2,{id:"installation",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#installation",children:"#"}),"Installation"]}),`
`,e(n.p,{children:"Install FusionPay using npm or yarn:"}),`
`,l(n.div,{className:"language-bash",style:{backgroundColor:"#2e3440ff"},children:[e(n.button,{className:"copy"}),e(n.span,{className:"lang",children:"bash"}),e(n.pre,{children:l(n.code,{className:"",children:[e(n.span,{className:"line",children:e(n.span,{style:{color:"#D8DEE9FF"},children:"npm install fusionpay"})}),`
`,e(n.span,{className:"line"})]})})]}),`
`,l(n.h2,{id:"usage",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"}),"Usage"]}),`
`,l(n.h3,{id:"initializing-fusionpay",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initializing-fusionpay",children:"#"}),"Initializing FusionPay"]}),`
`,l(n.div,{className:"language-typescript",style:{backgroundColor:"#2e3440ff"},children:[e(n.button,{className:"copy"}),e(n.span,{className:"lang",children:"typescript"}),e(n.pre,{children:l(n.code,{className:"",children:[l(n.span,{className:"line",children:[e(n.span,{style:{color:"#81A1C1"},children:"import"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:"{"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"FusionPay"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:"}"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"from"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"fusionpay"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#616E88"},children:"// Basic initialization"})}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#81A1C1"},children:"const"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"fusionPay"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"="}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"new"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#88C0D0"},children:"FusionPay"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"("}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"https://your-api-url.com"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#D8DEE9FF"},children:")"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#616E88"},children:"// With custom data type"})}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#81A1C1"},children:"interface"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#8FBCBB"},children:"OrderData"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  orderId"}),e(n.span,{style:{color:"#81A1C1"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#8FBCBB"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  customerEmail"}),e(n.span,{style:{color:"#81A1C1"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#8FBCBB"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#81A1C1"},children:"const"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"typedFusionPay"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"="}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"new"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#88C0D0"},children:"FusionPay"}),e(n.span,{style:{color:"#ECEFF4"},children:"<"}),e(n.span,{style:{color:"#8FBCBB"},children:"OrderData"}),e(n.span,{style:{color:"#ECEFF4"},children:">"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"("}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"https://your-api-url.com"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#D8DEE9FF"},children:")"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line"})]})})]}),`
`,l(n.h3,{id:"setting-payment-data",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#setting-payment-data",children:"#"}),"Setting Payment Data"]}),`
`,l(n.div,{className:"language-typescript",style:{backgroundColor:"#2e3440ff"},children:[e(n.button,{className:"copy"}),e(n.span,{className:"lang",children:"typescript"}),e(n.pre,{children:l(n.code,{className:"",children:[e(n.span,{className:"line",children:e(n.span,{style:{color:"#D8DEE9"},children:"fusionPay"})}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#88C0D0"},children:"totalPrice"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"("}),e(n.span,{style:{color:"#B48EAD"},children:"200"}),e(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#88C0D0"},children:"addArticle"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"("}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"Sac"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#ECEFF4"},children:","}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#B48EAD"},children:"100"}),e(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#88C0D0"},children:"addArticle"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"("}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"Veste"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#ECEFF4"},children:","}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#B48EAD"},children:"100"}),e(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#88C0D0"},children:"addInfo"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"("}),e(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(n.span,{style:{color:"#D8DEE9"},children:"orderId"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"12345"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(n.span,{style:{color:"#D8DEE9"},children:"customerEmail"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"customer@example.com"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#ECEFF4"},children:"}"}),e(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#88C0D0"},children:"clientName"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"("}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"M. Yaya"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#88C0D0"},children:"clientNumber"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"("}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"01010101"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#D8DEE9FF"},children:")"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#88C0D0"},children:"returnUrl"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"("}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"https://my_callback_url.com"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#D8DEE9FF"},children:")"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line"})]})})]}),`
`,l(n.h3,{id:"making-a-payment",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#making-a-payment",children:"#"}),"Making a Payment"]}),`
`,l(n.div,{className:"language-typescript",style:{backgroundColor:"#2e3440ff"},children:[e(n.button,{className:"copy"}),e(n.span,{className:"lang",children:"typescript"}),e(n.pre,{children:l(n.code,{className:"",children:[l(n.span,{className:"line",children:[e(n.span,{style:{color:"#81A1C1"},children:"try"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#81A1C1"},children:"const"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"response"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"="}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"await"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"fusionPay"}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#88C0D0"},children:"makePayment"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"()"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#D8DEE9"},children:"console"}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#88C0D0"},children:"log"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"("}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"Payment initiated:"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#ECEFF4"},children:","}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"response"}),e(n.span,{style:{color:"#D8DEE9FF"},children:")"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#ECEFF4"},children:"  "}),e(n.span,{style:{color:"#616E88"},children:"// Redirect user to payment URL or send url to client"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#ECEFF4"},children:"}"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"catch"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(n.span,{style:{color:"#D8DEE9"},children:"error"}),e(n.span,{style:{color:"#D8DEE9FF"},children:") "}),e(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#D8DEE9"},children:"console"}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#88C0D0"},children:"error"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"("}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"Payment initiation failed:"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#ECEFF4"},children:","}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"error"}),e(n.span,{style:{color:"#D8DEE9FF"},children:")"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(n.span,{className:"line"})]})})]}),`
`,l(n.h4,{id:"payment-response-structure",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#payment-response-structure",children:"#"}),"Payment Response Structure"]}),`
`,l(n.div,{className:"language-typescript",style:{backgroundColor:"#2e3440ff"},children:[e(n.button,{className:"copy"}),e(n.span,{className:"lang",children:"typescript"}),e(n.pre,{children:l(n.code,{className:"",children:[e(n.span,{className:"line",children:e(n.span,{style:{color:"#ECEFF4"},children:"{"})}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  statut"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"boolean"}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#616E88"},children:"// Payment initiation status"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  token"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#616E88"},children:"// Token for payment verification"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  message"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#616E88"},children:"// Status message"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  url"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#616E88"},children:"// Payment gateway URL for user redirection"})]}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(n.span,{className:"line"})]})})]}),`
`,l(n.h3,{id:"handling-payment-callback",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#handling-payment-callback",children:"#"}),"Handling Payment Callback"]}),`
`,e(n.p,{children:"When the payment is completed, the user will be redirected to your return URL with a token parameter:"}),`
`,l(n.div,{className:"island-directive tip",children:[e(n.p,{className:"island-directive-title"}),e(n.div,{className:"island-directive-content",children:e(n.p,{children:"https://my_callback_url.com?token=payment_token_here"})})]}),`
`,l(n.h3,{id:"checking-payment-status",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#checking-payment-status",children:"#"}),"Checking Payment Status"]}),`
`,l(n.div,{className:"language-typescript",style:{backgroundColor:"#2e3440ff"},children:[e(n.button,{className:"copy"}),e(n.span,{className:"lang",children:"typescript"}),e(n.pre,{children:l(n.code,{className:"",children:[e(n.span,{className:"line",children:e(n.span,{style:{color:"#616E88"},children:"//extract token in your url"})}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#616E88"},children:"//eg: Nodejs -> const {token} = req.query"})}),`
`,e(n.span,{className:"line"}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#81A1C1"},children:"try"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#ECEFF4"},children:"  "}),e(n.span,{style:{color:"#616E88"},children:"// Verify payment status"})]}),`
`,e(n.span,{className:"line"}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#81A1C1"},children:"const"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"status"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"="}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"await"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"fusionPay"}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#88C0D0"},children:"checkPaymentStatus"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"("}),e(n.span,{style:{color:"#D8DEE9"},children:"token"}),e(n.span,{style:{color:"#D8DEE9FF"},children:")"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#81A1C1"},children:"if"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(n.span,{style:{color:"#D8DEE9"},children:"status"}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#D8DEE9"},children:"statut"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"&&"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"status"}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#D8DEE9"},children:"data"}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#D8DEE9"},children:"statut"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"==="}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"paid"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#D8DEE9FF"},children:") "}),e(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#ECEFF4"},children:"    "}),e(n.span,{style:{color:"#616E88"},children:"// Payment successful"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(n.span,{style:{color:"#81A1C1"},children:"const"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"customData"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"="}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"status"}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#D8DEE9"},children:"data"}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#D8DEE9"},children:"personal_Info"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"["}),e(n.span,{style:{color:"#B48EAD"},children:"0"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"]"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#ECEFF4"},children:"    "}),e(n.span,{style:{color:"#616E88"},children:"// Handle success..."})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#ECEFF4"},children:"}"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"catch"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" ("}),e(n.span,{style:{color:"#D8DEE9"},children:"error"}),e(n.span,{style:{color:"#D8DEE9FF"},children:") "}),e(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#D8DEE9"},children:"console"}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#88C0D0"},children:"error"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"("}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"Status check failed:"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#ECEFF4"},children:","}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"error"}),e(n.span,{style:{color:"#D8DEE9FF"},children:")"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(n.span,{className:"line"})]})})]}),`
`,l(n.h4,{id:"payment-verification-response-structure",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#payment-verification-response-structure",children:"#"}),"Payment Verification Response Structure"]}),`
`,l(n.div,{className:"language-typescript",style:{backgroundColor:"#2e3440ff"},children:[e(n.button,{className:"copy"}),e(n.span,{className:"lang",children:"typescript"}),e(n.pre,{children:l(n.code,{className:"",children:[e(n.span,{className:"line",children:e(n.span,{style:{color:"#ECEFF4"},children:"{"})}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  statut"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"boolean"}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(n.span,{style:{color:"#616E88"},children:"// Verification request status"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  message"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(n.span,{style:{color:"#616E88"},children:"// Status message"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  data"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"    _id"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"        "}),e(n.span,{style:{color:"#616E88"},children:"// Payment record ID"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"    tokenPay"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"   "}),e(n.span,{style:{color:"#616E88"},children:"// Payment token"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"    numeroSend"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#616E88"},children:"// Customer phone number"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"    nomclient"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#616E88"},children:"// Customer name"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"    personal_Info"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"T"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"[]"}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#616E88"},children:"// Your custom data array"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"    numeroTransaction"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#616E88"},children:"// Transaction reference"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"    Montant"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"number"}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"    "}),e(n.span,{style:{color:"#616E88"},children:"// Payment amount"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"    frais"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"number"}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(n.span,{style:{color:"#616E88"},children:"// Transaction fees"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"    statut"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"pending"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"|"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"paid"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"|"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"failed"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#616E88"},children:"// Payment status"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"    moyen"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"      "}),e(n.span,{style:{color:"#616E88"},children:"// Payment method used"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"    return_url"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#616E88"},children:"// Callback URL"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"    createdAt"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#616E88"},children:"// Transaction timestamp"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(n.span,{className:"line"})]})})]}),`
`,l(n.h2,{id:"custom-data-examples",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-data-examples",children:"#"}),"Custom Data Examples"]}),`
`,e(n.p,{children:"Here are some examples of custom data you might want to store:"}),`
`,l(n.div,{className:"language-typescript",style:{backgroundColor:"#2e3440ff"},children:[e(n.button,{className:"copy"}),e(n.span,{className:"lang",children:"typescript"}),e(n.pre,{children:l(n.code,{className:"",children:[e(n.span,{className:"line",children:e(n.span,{style:{color:"#616E88"},children:"// E-commerce order"})}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#81A1C1"},children:"interface"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#8FBCBB"},children:"OrderData"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  orderId"}),e(n.span,{style:{color:"#81A1C1"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#8FBCBB"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  customerEmail"}),e(n.span,{style:{color:"#81A1C1"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#8FBCBB"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#616E88"},children:"// Subscription"})}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#81A1C1"},children:"interface"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#8FBCBB"},children:"SubscriptionData"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  planId"}),e(n.span,{style:{color:"#81A1C1"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#8FBCBB"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  subscriberId"}),e(n.span,{style:{color:"#81A1C1"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#8FBCBB"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  period"}),e(n.span,{style:{color:"#81A1C1"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"monthly"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"|"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"yearly"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#616E88"},children:"// Event ticket"})}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#81A1C1"},children:"interface"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#8FBCBB"},children:"TicketData"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  eventId"}),e(n.span,{style:{color:"#81A1C1"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#8FBCBB"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  ticketType"}),e(n.span,{style:{color:"#81A1C1"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#8FBCBB"},children:"string"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  quantity"}),e(n.span,{style:{color:"#81A1C1"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#8FBCBB"},children:"number"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,e(n.span,{className:"line"}),`
`,e(n.span,{className:"line",children:e(n.span,{style:{color:"#616E88"},children:"// Usage"})}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#81A1C1"},children:"const"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#D8DEE9"},children:"payment"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"="}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#81A1C1"},children:"new"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#88C0D0"},children:"FusionPay"}),e(n.span,{style:{color:"#ECEFF4"},children:"<"}),e(n.span,{style:{color:"#8FBCBB"},children:"OrderData"}),e(n.span,{style:{color:"#ECEFF4"},children:">"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"("}),e(n.span,{style:{color:"#D8DEE9"},children:"apiUrl"}),e(n.span,{style:{color:"#D8DEE9FF"},children:")"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9"},children:"payment"}),e(n.span,{style:{color:"#ECEFF4"},children:"."}),e(n.span,{style:{color:"#88C0D0"},children:"addInfo"}),e(n.span,{style:{color:"#D8DEE9FF"},children:"("}),e(n.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#D8DEE9"},children:"orderId"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"ORD-123"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#D8DEE9FF"},children:"  "}),e(n.span,{style:{color:"#D8DEE9"},children:"customerEmail"}),e(n.span,{style:{color:"#ECEFF4"},children:":"}),e(n.span,{style:{color:"#D8DEE9FF"},children:" "}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#A3BE8C"},children:"customer@example.com"}),e(n.span,{style:{color:"#ECEFF4"},children:'"'}),e(n.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(n.span,{className:"line",children:[e(n.span,{style:{color:"#ECEFF4"},children:"}"}),e(n.span,{style:{color:"#D8DEE9FF"},children:")"}),e(n.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,e(n.span,{className:"line"})]})})]}),`
`,l(n.h2,{id:"api-reference",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api-reference",children:"#"}),"API Reference"]}),`
`,l(n.h3,{id:"constructor",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#constructor",children:"#"}),"Constructor"]}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:e(n.code,{children:"new FusionPay<T = CustomPaymentData>(apiUrl: string)"})}),`
`]}),`
`,l(n.h3,{id:"methods",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#methods",children:"#"}),"Methods"]}),`
`,l(n.p,{children:["All methods (except ",e(n.code,{children:"makePayment"})," and ",e(n.code,{children:"checkPaymentStatus"}),") support method chaining."]}),`
`,l(n.ul,{children:[`
`,e(n.li,{children:e(n.code,{children:"totalPrice(amount: number): this"})}),`
`,e(n.li,{children:e(n.code,{children:"addArticle(name: string, value: number): this"})}),`
`,e(n.li,{children:e(n.code,{children:"addInfo(data: T): this"})}),`
`,e(n.li,{children:e(n.code,{children:"clientName(name: string): this"})}),`
`,e(n.li,{children:e(n.code,{children:"clientNumber(number: string): this"})}),`
`,e(n.li,{children:e(n.code,{children:"returnUrl(url: string): this"})}),`
`,e(n.li,{children:e(n.code,{children:"makePayment(): Promise<PaymentResponse>"})}),`
`,e(n.li,{children:e(n.code,{children:"checkPaymentStatus(token: string): Promise<PaymentVerificationResponse<T>>"})}),`
`]}),`
`,l(n.h2,{id:"error-handling",children:[e(n.a,{className:"header-anchor","aria-hidden":"true",href:"#error-handling",children:"#"}),"Error Handling"]}),`
`,e(n.p,{children:"The library throws errors for failed API calls and invalid parameters. Always wrap API calls in try-catch blocks for proper error handling."})]})}function d(r={}){const{wrapper:n}=r.components||{};return n?e(n,Object.assign({},r,{children:e(s,r)})):s(r)}const h="2024/11/12 17:56:25",p=`# Node.js package: The flexible way to use\r
\r
## Installation\r
\r
Install FusionPay using npm or yarn:\r
\r
\`\`\`bash\r
npm install fusionpay\r
\`\`\`\r
\r
## Usage\r
\r
### Initializing FusionPay\r
\r
\`\`\`typescript\r
import { FusionPay } from "fusionpay";\r
\r
// Basic initialization\r
const fusionPay = new FusionPay("https://your-api-url.com");\r
\r
// With custom data type\r
interface OrderData {\r
  orderId: string;\r
  customerEmail: string;\r
}\r
const typedFusionPay = new FusionPay<OrderData>("https://your-api-url.com");\r
\`\`\`\r
\r
### Setting Payment Data\r
\r
\`\`\`typescript\r
fusionPay\r
  .totalPrice(200)\r
  .addArticle("Sac", 100)\r
  .addArticle("Veste", 100)\r
  .addInfo({\r
    orderId: "12345",\r
    customerEmail: "customer@example.com",\r
  })\r
  .clientName("M. Yaya")\r
  .clientNumber("01010101")\r
  .returnUrl("https://my_callback_url.com");\r
\`\`\`\r
\r
### Making a Payment\r
\r
\`\`\`typescript\r
try {\r
  const response = await fusionPay.makePayment();\r
  console.log("Payment initiated:", response);\r
  // Redirect user to payment URL or send url to client\r
} catch (error) {\r
  console.error("Payment initiation failed:", error);\r
}\r
\`\`\`\r
\r
#### Payment Response Structure\r
\r
\`\`\`typescript\r
{\r
  statut: boolean; // Payment initiation status\r
  token: string; // Token for payment verification\r
  message: string; // Status message\r
  url: string; // Payment gateway URL for user redirection\r
}\r
\`\`\`\r
\r
### Handling Payment Callback\r
\r
When the payment is completed, the user will be redirected to your return URL with a token parameter:\r
\r
:::tip{title=''}\r
https://my_callback_url.com?token=payment_token_here\r
:::\r
\r
### Checking Payment Status\r
\r
\`\`\`typescript\r
//extract token in your url\r
//eg: Nodejs -> const {token} = req.query\r
\r
try {\r
  // Verify payment status\r
\r
  const status = await fusionPay.checkPaymentStatus(token);\r
  if (status.statut && status.data.statut === "paid") {\r
    // Payment successful\r
    const customData = status.data.personal_Info[0];\r
    // Handle success...\r
  }\r
} catch (error) {\r
  console.error("Status check failed:", error);\r
}\r
\`\`\`\r
\r
#### Payment Verification Response Structure\r
\r
\`\`\`typescript\r
{\r
  statut: boolean;      // Verification request status\r
  message: string;      // Status message\r
  data: {\r
    _id: string;        // Payment record ID\r
    tokenPay: string;   // Payment token\r
    numeroSend: string; // Customer phone number\r
    nomclient: string;  // Customer name\r
    personal_Info: T[]; // Your custom data array\r
    numeroTransaction: string;  // Transaction reference\r
    Montant: number;    // Payment amount\r
    frais: number;      // Transaction fees\r
    statut: "pending" | "paid" | "failed";  // Payment status\r
    moyen: string;      // Payment method used\r
    return_url: string; // Callback URL\r
    createdAt: string;  // Transaction timestamp\r
  }\r
}\r
\`\`\`\r
\r
## Custom Data Examples\r
\r
Here are some examples of custom data you might want to store:\r
\r
\`\`\`typescript\r
// E-commerce order\r
interface OrderData {\r
  orderId: string;\r
  customerEmail: string;\r
}\r
\r
// Subscription\r
interface SubscriptionData {\r
  planId: string;\r
  subscriberId: string;\r
  period: "monthly" | "yearly";\r
}\r
\r
// Event ticket\r
interface TicketData {\r
  eventId: string;\r
  ticketType: string;\r
  quantity: number;\r
}\r
\r
// Usage\r
const payment = new FusionPay<OrderData>(apiUrl);\r
payment.addInfo({\r
  orderId: "ORD-123",\r
  customerEmail: "customer@example.com",\r
});\r
\`\`\`\r
\r
## API Reference\r
\r
### Constructor\r
\r
- \`new FusionPay<T = CustomPaymentData>(apiUrl: string)\`\r
\r
### Methods\r
\r
All methods (except \`makePayment\` and \`checkPaymentStatus\`) support method chaining.\r
\r
- \`totalPrice(amount: number): this\`\r
- \`addArticle(name: string, value: number): this\`\r
- \`addInfo(data: T): this\`\r
- \`clientName(name: string): this\`\r
- \`clientNumber(number: string): this\`\r
- \`returnUrl(url: string): this\`\r
- \`makePayment(): Promise<PaymentResponse>\`\r
- \`checkPaymentStatus(token: string): Promise<PaymentVerificationResponse<T>>\`\r
\r
## Error Handling\r
\r
The library throws errors for failed API calls and invalid parameters. Always wrap API calls in try-catch blocks for proper error handling.\r
`;export{p as content,d as default,o as frontmatter,h as lastUpdatedTime,i as title,t as toc};
