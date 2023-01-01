import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';


const configuration = new Configuration({
	organization: process.env.OPENAI_ORG,
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


export default async function callDalle (req: NextApiRequest, res: NextApiResponse) {
	const response = await openai.createImage({
		prompt: "A cute baby sea otter",
		n: 1,
		size: "1024x1024",
	});
	console.log(response.data.data);
	res.status(200).json({ image_url: response.data.data })
}
