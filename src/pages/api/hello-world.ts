// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { HelloWorldResponse } from '@lib/api/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelloWorldResponse>
) {
  let name: string;
  try {
    name = (req.query.name as string) ?? '';

    if (name && name !== '') {
      return res.status(200).json({
        data: { message: `Hello ${name}, welcome to Next JS Starter Project!` }
      });
    }
  } catch (e) {}

  return res.status(200).json({ data: { message: 'Hello from Next JS Starter Project!' } });
}
