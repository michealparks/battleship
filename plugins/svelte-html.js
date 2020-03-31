import fs from 'fs'

const html = `
<link href="main.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Reenie+Beanie|Rock+Salt&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Material+Icons&display=block" rel="stylesheet">
<script type="module" src="mwc.js"></script>
<script type="module">
  import('./svelte.js').then(m => new m.default({
    target: document.body
  })) 
</script>
`

export default () => {
  return {
    name: 'svelte-html',
    writeBundle: () => {
      fs.writeFileSync('./dist/svelte.html', html, 'utf-8')
      console.log('svelte.html compiled.')
    }
  }
}