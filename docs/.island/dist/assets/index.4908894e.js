import{jsx as n,jsxs as i,Fragment as a}from"react/jsx-runtime";const c=void 0,s=[{id:"overview",text:"Overview",depth:2},{id:"prerequisites",text:"Prerequisites",depth:2},{id:"money-fusion-enterprise-account",text:"Money Fusion Enterprise Account",depth:3},{id:"getting-started",text:"Getting Started",depth:2},{id:"step-1-account-setup",text:"Step 1: Account Setup",depth:3},{id:"step-2-account-access",text:"Step 2: Account Access",depth:3},{id:"step-3-application-creation",text:"Step 3: Application Creation",depth:3},{id:"next-steps",text:"Next Steps",depth:2}],d="Fusion Pay";function r(t){const e=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",div:"div",h3:"h3",ul:"ul",li:"li",ol:"ol",img:"img",code:"code"},t.components);return i(a,{children:[i(e.h1,{id:"fusion-pay",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#fusion-pay",children:"#"}),"Fusion Pay"]}),`
`,i(e.h2,{id:"overview",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#overview",children:"#"}),"Overview"]}),`
`,n(e.p,{children:"Simplify your payment processing with Fusion Pay integration."}),`
`,i(e.div,{className:"island-directive danger",children:[n(e.p,{className:"island-directive-title",children:"Important"}),n(e.div,{className:"island-directive-content",children:n(e.p,{children:"Please read all sections thoroughly to understand the documentation."})})]}),`
`,n(e.p,{children:"This documentation will guide you through integrating Fusion Pay APIs into your e-commerce website and/or mobile application."}),`
`,i(e.h2,{id:"prerequisites",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#prerequisites",children:"#"}),"Prerequisites"]}),`
`,i(e.h3,{id:"money-fusion-enterprise-account",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#money-fusion-enterprise-account",children:"#"}),"Money Fusion Enterprise Account"]}),`
`,n(e.p,{children:"Your information, entered during account creation, serves as your digital reference within Money Fusion systems. We use this information to identify your account and the applications you create."}),`
`,n(e.p,{children:"This information is necessary for verification purposes."}),`
`,i(e.h2,{id:"getting-started",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#getting-started",children:"#"}),"Getting Started"]}),`
`,i(e.h3,{id:"step-1-account-setup",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#step-1-account-setup",children:"#"}),"Step 1: Account Setup"]}),`
`,i(e.ul,{children:[`
`,n(e.li,{children:"Ensure you have a Money Fusion account"}),`
`,n(e.li,{children:"Create one if needed"}),`
`]}),`
`,i(e.h3,{id:"step-2-account-access",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#step-2-account-access",children:"#"}),"Step 2: Account Access"]}),`
`,i(e.ol,{children:[`
`,i(e.li,{children:["Log into ",n(e.a,{href:"https://moneyfusion.net/dashboard",target:"_blank",rel:"nofollow",children:"your account"})]}),`
`,i(e.li,{children:["Click on ",n(e.a,{href:"https://moneyfusion.net/dashboard/fusionpay",target:"_blank",rel:"nofollow",children:'"Fusion Pay"'})," in the left menu"]}),`
`]}),`
`,i(e.h3,{id:"step-3-application-creation",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#step-3-application-creation",children:"#"}),"Step 3: Application Creation"]}),`
`,n(e.p,{children:n(e.img,{src:"https://sc-digital.nyc3.cdn.digitaloceanspaces.com/sc-digital/images/1770812734849-Capture_d_____cran_2026-02-11_122044.png",alt:"Application Creation Illustration"})}),`
`,n(e.p,{children:"Once you create an application, an API link will be generated that can be implemented across multiple sites and applications."}),`
`,i(e.div,{className:"island-directive danger",children:[n(e.p,{className:"island-directive-title",children:"Important"}),n(e.div,{className:"island-directive-content",children:i(e.ul,{children:[`
`,n(e.li,{children:"The site URL must be valid and accessible."}),`
`,i(e.li,{children:["The ",n(e.code,{children:"callback_url"})," must belong to the main domain or an authorized subdomain."]}),`
`,n(e.li,{children:"Only registered IP addresses can make API requests."}),`
`,n(e.li,{children:"Any unregistered IP will be automatically blocked."}),`
`]})})]}),`
`,i(e.h2,{id:"next-steps",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#next-steps",children:"#"}),"Next Steps"]}),`
`,n(e.p,{children:"You can now start using your API key for integration."}),`
`,i(e.div,{className:"island-directive tip",children:[n(e.p,{className:"island-directive-title",children:"Note"}),n(e.div,{className:"island-directive-content",children:n(e.p,{children:"Detailed integration procedures will be covered in subsequent sections."})})]})]})}function l(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(r,t)})):r(t)}const u="2024/12/2 00:07:25",h=`# Fusion Pay\r
\r
## Overview\r
\r
Simplify your payment processing with Fusion Pay integration.\r
\r
:::danger{title='Important'}\r
Please read all sections thoroughly to understand the documentation.\r
:::\r
\r
This documentation will guide you through integrating Fusion Pay APIs into your e-commerce website and/or mobile application.\r
\r
## Prerequisites\r
\r
### Money Fusion Enterprise Account\r
\r
Your information, entered during account creation, serves as your digital reference within Money Fusion systems. We use this information to identify your account and the applications you create.\r
\r
This information is necessary for verification purposes.\r
\r
## Getting Started\r
\r
### Step 1: Account Setup\r
\r
- Ensure you have a Money Fusion account\r
- Create one if needed\r
\r
### Step 2: Account Access\r
\r
1. Log into [your account](https://moneyfusion.net/dashboard)\r
2. Click on ["Fusion Pay"](https://moneyfusion.net/dashboard/fusionpay) in the left menu\r
\r
### Step 3: Application Creation\r
\r
![Application Creation Illustration](https://sc-digital.nyc3.cdn.digitaloceanspaces.com/sc-digital/images/1770812734849-Capture_d_____cran_2026-02-11_122044.png)\r
\r
Once you create an application, an API link will be generated that can be implemented across multiple sites and applications.\r
\r
:::danger{title='Important'}\r
\r
- The site URL must be valid and accessible.\r
- The \`callback_url\` must belong to the main domain or an authorized subdomain.\r
- Only registered IP addresses can make API requests.\r
- Any unregistered IP will be automatically blocked.\r
  :::\r
\r
## Next Steps\r
\r
You can now start using your API key for integration.\r
\r
:::tip{title='Note'}\r
Detailed integration procedures will be covered in subsequent sections.\r
:::\r
`;export{h as content,l as default,c as frontmatter,u as lastUpdatedTime,d as title,s as toc};
