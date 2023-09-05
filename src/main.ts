import './app.css'
import App from './App.svelte'
import "@statsforvalteren/staf-komponentbibliotek-svelte/src/custom.css";

const app = new App({
  target: document.getElementById('app'),
})

export default app
