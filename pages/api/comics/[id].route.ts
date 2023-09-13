import { getComic } from 'dh-marvel/services/marvel/marvel.service';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  const { id } = req.query;
  const idInt = parseInt(id as string);
  res.setHeader('Content-Type', 'application/json');

  try {
    // Este servicio se encarga de obtener el comic por id y le pega a la api de marvel con la key y el hash
    const result = await getComic(idInt);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    // res.status(500).json({ error: error.message });
  }

}