// export default function handler(
//   req: {
//     body: { email: string; name: string; message: string };
//     method: string;
//   },
//   res: {
//     status: (arg0: number) => {
//       (): any;
//       new (): any;
//       json: { (arg0: { name: string }): void; new (): any };
//     };
//   }
// ) {
//     console.log('fuckkkkkkkkkkk')
//   if (req.method === "post") {
//     alert("Done request");
//   }
//   res.status(200).json({ name: "John Doe" });
// }

export default function POST(request: Request) {
      console.log('fuckkkkkkkkkkk')
  console.log(request.body);
}
