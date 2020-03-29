import fs from 'fs'
import Adom from 'adom-js'

export default (config = {}) => {
  const {
    cache = false,
    root = 'src',
    filters
  } = config

  const compiler = new Adom({
    cache,
    root,
    filters
  })

  const tryCompile = (file) => {
    try {
      return [undefined, compiler.render(file)]
    } catch (err) {
      return [err]
    }
  }

  return {
    transform: (code) => {
      return ''
    },
    buildEnd: () => {
      const [err, html] = tryCompile('App.adom')
      if (err) return console.error(err)
      fs.writeFileSync('dist/index.html', html, 'utf-8')
    }
  }
}
