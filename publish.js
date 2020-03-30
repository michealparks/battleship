const ghpages = require('gh-pages')
 
ghpages.publish('dist', (err) => {
  if (err) throw new Error(err)

  return console.log('Published.')
})
