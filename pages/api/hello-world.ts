// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface HelloResponse {
    message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelloResponse>
) {
  return res
    .status(200)
    .json({ message: "Hello from Next JS Starter Project!" });
}
