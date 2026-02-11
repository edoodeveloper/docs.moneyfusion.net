import{jsx as n,jsxs as t,Fragment as r}from"react/jsx-runtime";const s=void 0,c=[{id:"description",text:"Description",depth:2},{id:"features",text:"Features",depth:2},{id:"installation",text:"Installation",depth:2},{id:"woocommerce-integration",text:"WooCommerce Integration",depth:2},{id:"payment-status-handling",text:"Payment Status Handling",depth:2},{id:"webhook-integration",text:"Webhook Integration",depth:2},{id:"troubleshooting",text:"Troubleshooting",depth:2},{id:"support",text:"Support",depth:2}],h="Fusion Pay Payment Gateway";function a(o){const e=Object.assign({h1:"h1",a:"a",p:"p",img:"img",h2:"h2",ul:"ul",li:"li",ol:"ol",code:"code",strong:"strong",div:"div"},o.components);return t(r,{children:[t(e.h1,{id:"fusion-pay-payment-gateway",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#fusion-pay-payment-gateway",children:"#"}),"Fusion Pay Payment Gateway"]}),`
`,n(e.p,{children:n(e.img,{src:"https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/banner.png",alt:"banner"})}),`
`,t(e.h2,{id:"description",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#description",children:"#"}),"Description"]}),`
`,n(e.p,{children:"Fusion Pay WooCommerce Payment Gateway is a custom WordPress plugin that allows you to integrate the MoneyFusion payment system into your WooCommerce WordPress website."}),`
`,t(e.h2,{id:"features",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#features",children:"#"}),"Features"]}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"Easy installation and setup"}),`
`,n(e.li,{children:"Secure payment processing through MoneyFusion"}),`
`,n(e.li,{children:"Customizable payment gateway settings"}),`
`,n(e.li,{children:"Real-time payment status updates via webhooks"}),`
`,n(e.li,{children:"Detailed transaction logging and debug options"}),`
`,n(e.li,{children:"Custom order statuses for better payment tracking"}),`
`,n(e.li,{children:"Complete WooCommerce integration for seamless e-commerce payments"}),`
`]}),`
`,t(e.h2,{id:"installation",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#installation",children:"#"}),"Installation"]}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:["Download the plugin from the ",n(e.a,{href:"https://docs.moneyfusion.net/fusionpay.zip",target:"_blank",rel:"nofollow",children:"this link"}),"."]}),`
`,t(e.li,{children:["Install it or upload the ",n(e.code,{children:"fusionpay"})," folder to the ",n(e.code,{children:"/wp-content/plugins/"})," directory."]}),`
`,n(e.li,{children:"Activate the plugin through the 'Plugins' menu in WordPress."}),`
`]}),`
`,t(e.h2,{id:"woocommerce-integration",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#woocommerce-integration",children:"#"}),"WooCommerce Integration"]}),`
`,n(e.p,{children:"To use Fusion Pay with WooCommerce:"}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:[`
`,n(e.p,{children:"Ensure WooCommerce is installed and activated."}),`
`]}),`
`,t(e.li,{children:[`
`,n(e.p,{children:"Go to WooCommerce > Settings > Payments."}),`
`]}),`
`,t(e.li,{children:[`
`,t(e.p,{children:[`Enable "Fusion Pay" as a payment method.\r
`,n(e.img,{src:"https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/woo-activation.png",alt:"woocommerce-fusionpay-activation"})]}),`
`]}),`
`,t(e.li,{children:[`
`,n(e.p,{children:'Click "Manage" next to Fusion Pay to configure the gateway settings:'}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.strong,{children:"Enable/Disable"}),": Activate or deactivate the payment method"]}),`
`,t(e.li,{children:[n(e.strong,{children:"Title"}),': Customize how the payment method appears to customers (default: "Fusion Pay")']}),`
`,t(e.li,{children:[n(e.strong,{children:"Description"}),": Provide information about this payment method to your customers"]}),`
`,t(e.li,{children:[n(e.strong,{children:"API URL"}),": Enter your unique Fusion Pay API URL (create an app on ",n(e.a,{href:"https://moneyfusion.net/dashboard/fusionpay",target:"_blank",rel:"nofollow",children:"moneyfusion"})," to get the url)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"Return URL"}),": URL where customers will be redirected after payment"]}),`
`,t(e.li,{children:[n(e.strong,{children:"Webhook URL"}),": URL you need to configure to receive payment notifications."]}),`
`,t(e.li,{children:[n(e.strong,{children:"Debug Log"}),": Enable for troubleshooting payment issues. Found on ",n(e.code,{children:"https://your-site.com/wp-admin/admin.php?page=wc-status&tab=logs"})," and source ",n(e.code,{children:"fusion-pay"})]}),`
`]}),`
`,n(e.p,{children:n(e.img,{src:"https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-3.png",alt:"form"})}),`
`]}),`
`,t(e.li,{children:[`
`,n(e.p,{children:"Save your settings and the payment gateway will be available at checkout."}),`
`]}),`
`]}),`
`,n(e.p,{children:"Customers can now select Fusion Pay as a payment option during checkout."}),`
`,n(e.p,{children:n(e.img,{src:"https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-4.png",alt:"form"})}),`
`,t(e.h2,{id:"payment-status-handling",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#payment-status-handling",children:"#"}),"Payment Status Handling"]}),`
`,n(e.p,{children:"The plugin automatically handles the following payment statuses from MoneyFusion:"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.strong,{children:"paid"})," - Payment successful (order marked as completed)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"pending"})," - Payment is being processed (order marked as processing)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"failure"})," - Payment failed (order marked as failed)"]}),`
`,t(e.li,{children:[n(e.strong,{children:"no paid"})," - Payment not completed (order marked as on-hold)"]}),`
`]}),`
`,t(e.h2,{id:"webhook-integration",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#webhook-integration",children:"#"}),"Webhook Integration"]}),`
`,n(e.p,{children:"For automatic order status updates, leave the webhook endpoint in the woocommerce dashboard:"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["Webhook URL: ",n(e.code,{children:"https://your-site.com/wc-api/wc_fusion_pay_gateway"})]}),`
`]}),`
`,n(e.p,{children:"This ensures your WooCommerce store automatically receives payment status updates."}),`
`,t(e.h2,{id:"troubleshooting",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#troubleshooting",children:"#"}),"Troubleshooting"]}),`
`,n(e.p,{children:"If you encounter issues with the gateway:"}),`
`,t(e.ol,{children:[`
`,n(e.li,{children:"Enable Debug Log in the gateway settings"}),`
`,n(e.li,{children:"Check the WooCommerce system status logs for any errors"}),`
`,n(e.li,{children:"Verify your API URL is correctly entered"}),`
`,t(e.li,{children:["If the payment option is not visible, go to the payment page and enter ",n(e.code,{children:"[woocommerce_checkout]"}),` in the shortcut section for more information:\r
`,n(e.a,{href:"https://www.youtube.com/watch?v=sfYauEEO7S0",target:"_blank",rel:"nofollow",children:n(e.img,{src:"https://img.youtube.com/vi/sfYauEEO7S0/0.jpg",alt:"Watch the video"})})]}),`
`]}),`
`,t(e.div,{className:"island-directive danger",children:[n(e.p,{className:"island-directive-title",children:"Good to know"}),n(e.div,{className:"island-directive-content",children:n(e.p,{children:"Make sure that the currency is in CFA Franc and that the amount is 200 minimum so that all works without any problem."})})]}),`
`,t(e.h2,{id:"support",children:[n(e.a,{className:"header-anchor","aria-hidden":"true",href:"#support",children:"#"}),"Support"]}),`
`,t(e.p,{children:["For any issues or feature requests, please visit the ",n(e.a,{href:"https://github.com/Yaya12085/wp-fusionpay/issues",target:"_blank",rel:"nofollow",children:"GitHub Issues Page"})]})]})}function l(o={}){const{wrapper:e}=o.components||{};return e?n(e,Object.assign({},o,{children:n(a,o)})):a(o)}const d="2025/5/18 02:11:43",u=`# Fusion Pay Payment Gateway\r
\r
![banner](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/banner.png)\r
\r
## Description\r
\r
Fusion Pay WooCommerce Payment Gateway is a custom WordPress plugin that allows you to integrate the MoneyFusion payment system into your WooCommerce WordPress website.\r
\r
## Features\r
\r
- Easy installation and setup\r
- Secure payment processing through MoneyFusion\r
- Customizable payment gateway settings\r
- Real-time payment status updates via webhooks\r
- Detailed transaction logging and debug options\r
- Custom order statuses for better payment tracking\r
- Complete WooCommerce integration for seamless e-commerce payments\r
\r
## Installation\r
\r
1. Download the plugin from the [this link](https://docs.moneyfusion.net/fusionpay.zip).\r
2. Install it or upload the \`fusionpay\` folder to the \`/wp-content/plugins/\` directory.\r
3. Activate the plugin through the 'Plugins' menu in WordPress.\r
\r
## WooCommerce Integration\r
\r
To use Fusion Pay with WooCommerce:\r
\r
1. Ensure WooCommerce is installed and activated.\r
2. Go to WooCommerce > Settings > Payments.\r
3. Enable "Fusion Pay" as a payment method.\r
   ![woocommerce-fusionpay-activation](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/woo-activation.png)\r
\r
4. Click "Manage" next to Fusion Pay to configure the gateway settings:\r
\r
   - **Enable/Disable**: Activate or deactivate the payment method\r
   - **Title**: Customize how the payment method appears to customers (default: "Fusion Pay")\r
   - **Description**: Provide information about this payment method to your customers\r
   - **API URL**: Enter your unique Fusion Pay API URL (create an app on [moneyfusion](https://moneyfusion.net/dashboard/fusionpay) to get the url)\r
   - **Return URL**: URL where customers will be redirected after payment\r
   - **Webhook URL**: URL you need to configure to receive payment notifications.\r
   - **Debug Log**: Enable for troubleshooting payment issues. Found on \`https://your-site.com/wp-admin/admin.php?page=wc-status&tab=logs\` and source \`fusion-pay\`\r
\r
   ![form](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-3.png)\r
\r
5. Save your settings and the payment gateway will be available at checkout.\r
\r
Customers can now select Fusion Pay as a payment option during checkout.\r
\r
![form](https://raw.githubusercontent.com/Yaya12085/wp-fusionpay/refs/heads/main/assets/screenshot-4.png)\r
\r
## Payment Status Handling\r
\r
The plugin automatically handles the following payment statuses from MoneyFusion:\r
\r
- **paid** - Payment successful (order marked as completed)\r
- **pending** - Payment is being processed (order marked as processing)\r
- **failure** - Payment failed (order marked as failed)\r
- **no paid** - Payment not completed (order marked as on-hold)\r
\r
## Webhook Integration\r
\r
For automatic order status updates, leave the webhook endpoint in the woocommerce dashboard:\r
\r
- Webhook URL: \`https://your-site.com/wc-api/wc_fusion_pay_gateway\`\r
\r
This ensures your WooCommerce store automatically receives payment status updates.\r
\r
## Troubleshooting\r
\r
If you encounter issues with the gateway:\r
\r
1. Enable Debug Log in the gateway settings\r
2. Check the WooCommerce system status logs for any errors\r
3. Verify your API URL is correctly entered\r
4. If the payment option is not visible, go to the payment page and enter \`[woocommerce_checkout]\` in the shortcut section for more information:\r
   [![Watch the video](https://img.youtube.com/vi/sfYauEEO7S0/0.jpg)](https://www.youtube.com/watch?v=sfYauEEO7S0)\r
\r
:::danger{title="Good to know"}\r
Make sure that the currency is in CFA Franc and that the amount is 200 minimum so that all works without any problem.\r
:::\r
\r
## Support\r
\r
For any issues or feature requests, please visit the [GitHub Issues Page](https://github.com/Yaya12085/wp-fusionpay/issues)\r
`;export{u as content,l as default,s as frontmatter,d as lastUpdatedTime,h as title,c as toc};
