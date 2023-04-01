const GPT_KEY = import.meta.env.VITE_API_KEY;

const headers = {
	'Content-Type': 'application/json',
	Authorization: `Bearer ${GPT_KEY}`,
};

export const promptCompletion: string = `Je suis un débutant en cuisine, je cherche une recette facile et rapide à rapide. Tout en gardant ta réponse concise (inférieure à 400 caractères), propose moi un plat que je puisse faire avec uniquement les ingrédients suivants : tomates, riz`;

export async function getOpenAIData(): Promise<string> {
	let request = {
		method: 'POST',
		headers,
		body: JSON.stringify({
			model: 'text-davinci-003',
			prompt: promptCompletion,
			temperature: 0,
			max_tokens: 550,
		}),
	};

	const res = await fetch('https://api.openai.com/v1/completions', request);
	const data = await res.json();
	let result: string = data;
	//let result: string = data.choices[0].text;
	console.log(result);

	return result;
}
