import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

/* 
Although Next.js handles most of our site's routing, this route is a special case as it is where we will be calling our DALL-E API.
We have the OpenAI key and organization ID stored in our .env file, which we can access using the process.env object.
However, this alone if not enough to keep the key secure. Using this 'backend' route to make the call ensures that the key is not exposed to the client.
*/

// Create a new OpenAI API instance
const configuration = new Configuration({
	organization: process.env.OPENAI_ORG,
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// Middleware function that takes request, parses it for the prompt, sends prompt to OAI, and returns the url of the generated image
export default async function callDalle (req: NextApiRequest, res: NextApiResponse) {
	try {
		const response = await openai.createImage({
			prompt: `${req.body.prompt}`,
			n: 4,
			size: "1024x1024",
		});
		res.status(200).json({ image_url: response.data.data })
	} catch (error) {
		res.status(500).json({ error: 'failed to get image information from Dall-E' })
	}
}