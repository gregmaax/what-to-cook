import { getOpenAIData } from '.';
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <div class="blocTitre">
      <h1>What can I cook ?</h1>
    </div>
    <div class="blocInput">
      <input type="text" id="inputDataId" placeholder="Entrez vos ingrédients...">
    <button id="validerId">Valider</button>
    </div>
    <div class="blocResultat">
      <span id="resultatId">Placeholder</span>
    </div>
  </div>
`;

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

const input = document.querySelector<HTMLInputElement>('#inputDataId');
const boutonValider = document.querySelector<HTMLButtonElement>('#validerId');

boutonValider?.addEventListener('click', () => {
	console.log(input?.value);
});

getOpenAIData();
