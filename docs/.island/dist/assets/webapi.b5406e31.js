import{jsx as n,jsxs as l,Fragment as c}from"react/jsx-runtime";const a=void 0,t=[{id:"make-payment-request",text:"Make Payment Request",depth:3},{id:"example-paymentdata",text:"Example paymentData",depth:3},{id:"fields",text:"Fields",depth:3},{id:"example-response",text:"Example Response",depth:3},{id:"response-object",text:"Response Object",depth:3},{id:"payment-status-verification",text:"Payment Status Verification",depth:2},{id:"check-payment-status",text:"Check Payment Status",depth:3},{id:"example-response-1",text:"Example Response",depth:3},{id:"payment-status-types",text:"Payment Status Types",depth:3},{id:"status-response-data-fields",text:"Status Response data fields",depth:3},{id:"real-time-transaction-monitoring-via-webhook",text:"Real-Time Transaction Monitoring via Webhook",depth:2},{id:"structure-of-received-data",text:"Structure of Received Data",depth:3},{id:"list-of-available-webhook-events",text:"List of Available Webhook Events",depth:3},{id:"handling-multiple-webhook-notifications",text:"Handling Multiple Webhook Notifications",depth:2},{id:"important-to-know",text:"Important to Know",depth:3},{id:"processing-recommendations",text:"Processing Recommendations",depth:3},{id:"example-filtering-logic",text:"Example Filtering Logic",depth:3}],i="Web API: he flexible way to develop";function s(r){const e=Object.assign({h1:"h1",a:"a",p:"p",code:"code",h3:"h3",div:"div",button:"button",span:"span",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h2:"h2",ul:"ul",li:"li",ol:"ol",strong:"strong"},r.components);return l(c,{children:[l(e.h1,{id:"web-api-he-flexible-way-to-develop",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#web-api-he-flexible-way-to-develop",children:"#"}),"Web API: he flexible way to develop"]}),`
`,n(e.p,{children:"You can use the web api to develop your app."}),`
`,l(e.p,{children:["To get started I will use ",n(e.code,{children:"axios"}),". Feel free to use any http client you want. e.g. ",n(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",target:"_blank",rel:"nofollow",children:"fetch"})]}),`
`,l(e.h3,{id:"make-payment-request",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#make-payment-request",children:"#"}),"Make Payment Request"]}),`
`,l(e.div,{className:"language-javascript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"javascript"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"axios"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"require"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"axios"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"apiUrl"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"YOUR_API_URL"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#81A1C1"},children:";"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#616E88"},children:"// Get this from your dashboard"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#88C0D0"},children:"makePayment"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"async"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"paymentData"}),n(e.span,{style:{color:"#ECEFF4"},children:")"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"=>"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#81A1C1"},children:"try"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"const"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"response"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"await"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"axios"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#88C0D0"},children:"post"}),n(e.span,{style:{color:"#D8DEE9FF"},children:"("}),n(e.span,{style:{color:"#D8DEE9"},children:"apiUrl"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"paymentData"}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#88C0D0"},children:"headers"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"        "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"Content-Type"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"application/json"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),n(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:")"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"return"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"response"}),n(e.span,{style:{color:"#ECEFF4"},children:"."}),n(e.span,{style:{color:"#D8DEE9"},children:"data"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"catch"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"error"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),n(e.span,{style:{color:"#81A1C1"},children:"throw"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"error"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:"}"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"example-paymentdata",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example-paymentdata",children:"#"}),"Example paymentData"]}),`
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
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"numeroSend"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"01010101"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"nomclient"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"John Doe"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"return_url"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"https://your-domain.com/callback"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#88C0D0"},children:"webhook_url"}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"https://your-domain.com/my-webhook-url"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#616E88"},children:"// The webhook must accept POST requests to receive data."})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#81A1C1"},children:";"})]}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"fields",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#fields",children:"#"}),"Fields"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Field"}),n(e.th,{children:"Type"}),n(e.th,{children:"Description"}),n(e.th,{children:"Example"}),n(e.th,{children:"Required"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"totalPrice"})}),n(e.td,{children:"Number"}),n(e.td,{children:"Total amount to be paid"}),n(e.td,{children:"200"}),n(e.td,{children:"Yes"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"article"})}),n(e.td,{children:n(e.code,{children:"Array<Object>"})}),n(e.td,{children:"List of items with their prices"}),n(e.td,{children:n(e.code,{children:'[{"sac": 100, "chaussure": 100}]'})}),n(e.td,{children:"Yes"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"numeroSend"})}),n(e.td,{children:"String"}),n(e.td,{children:"Customer phone number"}),n(e.td,{children:'"01010101"'}),n(e.td,{children:"Yes"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"nomclient"})}),n(e.td,{children:"String"}),n(e.td,{children:"Customer name"}),n(e.td,{children:'"John Doe"'}),n(e.td,{children:"Yes"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"personal_Info"})}),n(e.td,{children:n(e.code,{children:"Array<Object>"})}),n(e.td,{children:"Personal information"}),n(e.td,{children:n(e.code,{children:'[{"userId": 1, "orderId": 123}]'})}),n(e.td,{children:"No"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"return_url"})}),n(e.td,{children:"String"}),n(e.td,{children:"url to be redirected after payment"}),n(e.td,{children:n(e.code,{children:"https://your-domain.com/callback"})}),n(e.td,{children:"No"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"webhook_url"})}),n(e.td,{children:"String"}),n(e.td,{children:"url (POST) from which transaction details will be returned"}),n(e.td,{children:n(e.code,{children:"https://your-domain.com/my-webhook-url"})}),n(e.td,{children:"Non"})]})]})]}),`
`,l(e.h3,{id:"example-response",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example-response",children:"#"}),"Example Response"]}),`
`,l(e.div,{className:"language-json",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"json"}),n(e.pre,{children:l(e.code,{className:"",children:[n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"{"})}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"statut"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"true"}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"token"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"5d58823b084564"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"message"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"paiement en cours"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:","})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#8FBCBB"},children:"url"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#ECEFF4"},children:":"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:'"'}),n(e.span,{style:{color:"#A3BE8C"},children:"https://www.pay.moneyfusion.net/pay/6596aded36bd58823b084564"}),n(e.span,{style:{color:"#ECEFF4"},children:'"'})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]}),`
`,l(e.h3,{id:"response-object",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#response-object",children:"#"}),"Response Object"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Field"}),n(e.th,{children:"Type"}),n(e.th,{children:"Description"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"statut"})}),n(e.td,{children:"Boolean"}),n(e.td,{children:"Payment request status"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"token"})}),n(e.td,{children:"String"}),n(e.td,{children:"Unique payment token for tracking"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"message"})}),n(e.td,{children:"String"}),n(e.td,{children:"Status message"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"url"})}),n(e.td,{children:"String"}),n(e.td,{children:"Payment page URL"})]})]})]}),`
`,l(e.h2,{id:"payment-status-verification",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#payment-status-verification",children:"#"}),"Payment Status Verification"]}),`
`,l(e.h3,{id:"check-payment-status",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#check-payment-status",children:"#"}),"Check Payment Status"]}),`
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
`,l(e.h3,{id:"example-response-1",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example-response-1",children:"#"}),"Example Response"]}),`
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
`,l(e.h3,{id:"payment-status-types",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#payment-status-types",children:"#"}),"Payment Status Types"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Status"}),n(e.th,{children:"Description"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"pending"})}),n(e.td,{children:"Payment is being processed"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"failure"})}),n(e.td,{children:"Payment failed"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"no paid"})}),n(e.td,{children:"Payment not completed"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"paid"})}),n(e.td,{children:"Payment successful"})]})]})]}),`
`,l(e.h3,{id:"status-response-data-fields",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#status-response-data-fields",children:"#"}),"Status Response data fields"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Field"}),n(e.th,{children:"Type"}),n(e.th,{children:"Description"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_id"})}),n(e.td,{children:"String"}),n(e.td,{children:"Transaction ID"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"tokenPay"})}),n(e.td,{children:"String"}),n(e.td,{children:"Payment token"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"numeroSend"})}),n(e.td,{children:"String"}),n(e.td,{children:"Customer phone number"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"nomclient"})}),n(e.td,{children:"String"}),n(e.td,{children:"Customer name"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"personal_Info"})}),n(e.td,{children:n(e.code,{children:"Array<Object>"})}),n(e.td,{children:"List of items with their prices"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"Montant"})}),n(e.td,{children:"Number"}),n(e.td,{children:"Transaction amount"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"frais"})}),n(e.td,{children:"Number"}),n(e.td,{children:"Transaction fees"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"statut"})}),n(e.td,{children:"String"}),n(e.td,{children:"Payment status"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"moyen"})}),n(e.td,{children:"String"}),n(e.td,{children:"Payment method"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"createdAt"})}),n(e.td,{children:"String"}),n(e.td,{children:"Transaction timestamp"})]})]})]}),`
`,l(e.h2,{id:"real-time-transaction-monitoring-via-webhook",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#real-time-transaction-monitoring-via-webhook",children:"#"}),"Real-Time Transaction Monitoring via Webhook"]}),`
`,l(e.h3,{id:"structure-of-received-data",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#structure-of-received-data",children:"#"}),"Structure of Received Data"]}),`
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
`,l(e.h3,{id:"list-of-available-webhook-events",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#list-of-available-webhook-events",children:"#"}),"List of Available Webhook Events"]}),`
`,l(e.table,{children:[n(e.thead,{children:l(e.tr,{children:[n(e.th,{children:"Event"}),n(e.th,{children:"Description"})]})}),l(e.tbody,{children:[l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"payin.session.pending"})}),n(e.td,{children:"Payment initiated and pending processing"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"payin.session.completed"})}),n(e.td,{children:"Payment successfully completed"})]}),l(e.tr,{children:[n(e.td,{children:n(e.code,{children:"payin.session.cancelled"})}),n(e.td,{children:"Payment failed or was cancelled"})]})]})]}),`
`,l(e.h2,{id:"handling-multiple-webhook-notifications",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#handling-multiple-webhook-notifications",children:"#"}),"Handling Multiple Webhook Notifications"]}),`
`,l(e.h3,{id:"important-to-know",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#important-to-know",children:"#"}),"Important to Know"]}),`
`,n(e.p,{children:"Moneyfusion may send multiple notifications for the same transaction, especially in the following cases:"}),`
`,l(e.ul,{children:[`
`,l(e.li,{children:["Repeated ",n(e.code,{children:"payin.session.pending"})," events during the processing phase."]}),`
`,l(e.li,{children:["A ",n(e.code,{children:"payin.session.completed"})," event after the payment is confirmed."]}),`
`,l(e.li,{children:["A ",n(e.code,{children:"possible payin.session.cancelled"})," event in case of failure or cancellation."]}),`
`]}),`
`,l(e.h3,{id:"processing-recommendations",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#processing-recommendations",children:"#"}),"Processing Recommendations"]}),`
`,n(e.p,{children:"To ensure reliable processing and avoid duplicates :"}),`
`,l(e.ol,{children:[`
`,l(e.li,{children:[n(e.strong,{children:"Identify each transaction uniquely"})," using the ",n(e.code,{children:"tokenPay"})," field."]}),`
`,l(e.li,{children:[n(e.strong,{children:"Check the current transaction status"})," in your database before updating."]}),`
`,l(e.li,{children:[n(e.strong,{children:"Ignore already processed events"})," or those that do not represent a status change."]}),`
`]}),`
`,l(e.h3,{id:"example-filtering-logic",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example-filtering-logic",children:"#"}),"Example Filtering Logic"]}),`
`,l(e.div,{className:"language-javascript",style:{backgroundColor:"#2e3440ff"},children:[n(e.button,{className:"copy"}),n(e.span,{className:"lang",children:"javascript"}),n(e.pre,{children:l(e.code,{className:"",children:[l(e.span,{className:"line",children:[n(e.span,{style:{color:"#81A1C1"},children:"if"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" ("}),n(e.span,{style:{color:"#D8DEE9"},children:"transactionExists"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"&&"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"incomingStatus"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"==="}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#D8DEE9"},children:"currentStatus"}),n(e.span,{style:{color:"#D8DEE9FF"},children:") "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Do nothing: redundant notification"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"}"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#81A1C1"},children:"else"}),n(e.span,{style:{color:"#D8DEE9FF"},children:" "}),n(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),`
`,l(e.span,{className:"line",children:[n(e.span,{style:{color:"#ECEFF4"},children:"  "}),n(e.span,{style:{color:"#616E88"},children:"// Update the transaction status"})]}),`
`,n(e.span,{className:"line",children:n(e.span,{style:{color:"#ECEFF4"},children:"}"})}),`
`,n(e.span,{className:"line"})]})})]})]})}function d(r={}){const{wrapper:e}=r.components||{};return e?n(e,Object.assign({},r,{children:n(s,r)})):s(r)}const h="2025/5/15 18:14:00",p=`# Web API: he flexible way to develop\r
\r
You can use the web api to develop your app.\r
\r
To get started I will use \`axios\`. Feel free to use any http client you want. e.g. [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)\r
\r
### Make Payment Request\r
\r
\`\`\`javascript\r
const axios = require("axios");\r
\r
const apiUrl = "YOUR_API_URL"; // Get this from your dashboard\r
const makePayment = async (paymentData) => {\r
  try {\r
    const response = await axios.post(apiUrl, paymentData, {\r
      headers: {\r
        "Content-Type": "application/json",\r
      },\r
    });\r
    return response.data;\r
  } catch (error) {\r
    throw error;\r
  }\r
};\r
\`\`\`\r
\r
### Example paymentData\r
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
  numeroSend: "01010101",\r
  nomclient: "John Doe",\r
  return_url: "https://your-domain.com/callback",\r
  webhook_url: "https://your-domain.com/my-webhook-url", // The webhook must accept POST requests to receive data.\r
};\r
\`\`\`\r
\r
### Fields\r
\r
| Field           | Type            | Description                                                | Example                                  | Required |\r
| --------------- | --------------- | ---------------------------------------------------------- | ---------------------------------------- | -------- |\r
| \`totalPrice\`    | Number          | Total amount to be paid                                    | 200                                      | Yes      |\r
| \`article\`       | \`Array<Object>\` | List of items with their prices                            | \`[{"sac": 100, "chaussure": 100}]\`       | Yes      |\r
| \`numeroSend\`    | String          | Customer phone number                                      | "01010101"                               | Yes      |\r
| \`nomclient\`     | String          | Customer name                                              | "John Doe"                               | Yes      |\r
| \`personal_Info\` | \`Array<Object>\` | Personal information                                       | \`[{"userId": 1, "orderId": 123}]\`        | No       |\r
| \`return_url\`    | String          | url to be redirected after payment                         | \`https://your-domain.com/callback\`       | No       |\r
| \`webhook_url\`   | String          | url (POST) from which transaction details will be returned | \`https://your-domain.com/my-webhook-url\` | Non      |\r
\r
### Example Response\r
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
### Response Object\r
\r
| Field     | Type    | Description                       |\r
| --------- | ------- | --------------------------------- |\r
| \`statut\`  | Boolean | Payment request status            |\r
| \`token\`   | String  | Unique payment token for tracking |\r
| \`message\` | String  | Status message                    |\r
| \`url\`     | String  | Payment page URL                  |\r
\r
## Payment Status Verification\r
\r
### Check Payment Status\r
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
### Example Response\r
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
### Payment Status Types\r
\r
| Status    | Description                |\r
| --------- | -------------------------- |\r
| \`pending\` | Payment is being processed |\r
| \`failure\` | Payment failed             |\r
| \`no paid\` | Payment not completed      |\r
| \`paid\`    | Payment successful         |\r
\r
### Status Response data fields\r
\r
| Field           | Type            | Description                     |\r
| --------------- | --------------- | ------------------------------- |\r
| \`_id\`           | String          | Transaction ID                  |\r
| \`tokenPay\`      | String          | Payment token                   |\r
| \`numeroSend\`    | String          | Customer phone number           |\r
| \`nomclient\`     | String          | Customer name                   |\r
| \`personal_Info\` | \`Array<Object>\` | List of items with their prices |\r
| \`Montant\`       | Number          | Transaction amount              |\r
| \`frais\`         | Number          | Transaction fees                |\r
| \`statut\`        | String          | Payment status                  |\r
| \`moyen\`         | String          | Payment method                  |\r
| \`createdAt\`     | String          | Transaction timestamp           |\r
\r
## Real-Time Transaction Monitoring via Webhook\r
\r
### Structure of Received Data\r
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
### List of Available Webhook Events\r
\r
| Event                     | Description                              |\r
| ------------------------- | ---------------------------------------- |\r
| \`payin.session.pending\`   | Payment initiated and pending processing |\r
| \`payin.session.completed\` | Payment successfully completed           |\r
| \`payin.session.cancelled\` | Payment failed or was cancelled          |\r
\r
## Handling Multiple Webhook Notifications\r
\r
### Important to Know\r
\r
Moneyfusion may send multiple notifications for the same transaction, especially in the following cases:\r
\r
- Repeated \`payin.session.pending\` events during the processing phase.\r
- A \`payin.session.completed\` event after the payment is confirmed.\r
- A \`possible payin.session.cancelled\` event in case of failure or cancellation.\r
\r
### Processing Recommendations\r
\r
To ensure reliable processing and avoid duplicates :\r
\r
1. **Identify each transaction uniquely** using the \`tokenPay\` field.\r
2. **Check the current transaction status** in your database before updating.\r
3. **Ignore already processed events** or those that do not represent a status change.\r
\r
### Example Filtering Logic\r
\r
\`\`\`javascript\r
if (transactionExists && incomingStatus === currentStatus) {\r
  // Do nothing: redundant notification\r
} else {\r
  // Update the transaction status\r
}\r
\`\`\`\r
`;export{p as content,d as default,a as frontmatter,h as lastUpdatedTime,i as title,t as toc};
