export default function handler(
  req: {
    body: { email: string; name: string; message: string };
    method: string;
  },
  res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { name: string; }): void; new(): any; }; }; } 
) {
    if(req.method==='post'){
        alert('Done request')
    }
  res.status(200).json({ name: "John Doe" });
}

// const nodemailer = require("nodemailer");

// export default function handler(
//   req: { body: { email: string; name: string; message: string }; method: string },
//   res: {
//     status: (arg0: number) => {
//       (): any;
//       new (): any;
//       json: { (arg0: { error?: string; success?: string }): void; new (): any };
//     };
//   }
// ) {
//     console.log('request received')
//   const message = {
//     from: req.body.email,
//     to: process.env.GMAIL_EMAIL_ADDRESS,
//     name: req.body.name,
//     text: req.body.message,
//     html: `<p>${req.body.message}</p>`,
//   };

//   let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.GMAIL_EMAIL_ADDRESS || 'jadhavatharva499@gmail.com',
//       pass: process.env.GMAIL_APP_PASSWORD || 'ajaxAtharva',
//     },
//   });

//   if (req.method === "POST") {
//     transporter.sendMail(
//       message,
//       (err: { address: any }, info: { accepted: any }) => {
//         if (err) {
//           res.status(404).json({
//             error: `Connection refused at ${err.address}`,
//           });
//         } else {
//           res.status(250).json({
//             success: `Message delivered to ${info.accepted}`,
//           });
//         }
//       }
//     );
//   }

//   if (req.method === "post") {
//     transporter.sendMail(message, (err:string, info:string) => {
//       if (err) {
//         res.status(404).json({
//           error: `Connection refused at {err.address}`,
//         });
//       } else {
//         res.status(250).json({
//           success: `Message delivered to {info.accepted}`,
//         });
//       }
//     });
//   }

// }
