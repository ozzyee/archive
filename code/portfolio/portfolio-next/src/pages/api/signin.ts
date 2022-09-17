// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

type Data = {
   success: boolean;
};

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   const token = req.body.token;
   res.setHeader(
      "set-cookie",
      cookie.serialize("token", token, {
         httpOnly: true,
         maxAge: 60 * 60 * 3,
         sameSite: true,
         path: "/",
      })
   );

   res.status(200);
   res.json({ success: true });
}
