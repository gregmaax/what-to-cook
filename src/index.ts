import { Configuration, OpenAIApi } from 'openai';

export const placeholder: string = 'Placeholder';

const configuration = new Configuration({
	apiKey: import.meta.env.VITE_API_KEY,
});

const openai = new OpenAIApi(configuration);

const promptCompletion: string = `Je suis un débutant en cuisine, je cherche une recette facile et rapide à rapide. Tout en gardant ta réponse concise (inférieure à 400 caractères), propose moi un plat que je puisse faire avec uniquement les ingrédients suivants : ${placeholder}`;

const completion = await openai.createCompletion({
	model: '',
	prompt: promptCompletion,
});

console.log(configuration.apiKey);
