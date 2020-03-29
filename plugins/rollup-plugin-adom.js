import fs from 'fs'
import Adom from 'adom-js'
import chokidar from 'chokidar'

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

  chokidar.watch('src-adom').on('all', (event, path) => {
    onChange()
  })

  const onChange = () => {
    const [err, html] = tryCompile('App.adom')
    if (err) return console.error(err)
    fs.writeFileSync('dist/index.html', html, 'utf-8')
    console.log('Compiled App.adom -> index.html')
  }

  const tryCompile = (file) => {
    try {
      return [undefined, compiler.render(file)]
    } catch (err) {
      return [err]
    }
  }

  return {
    transform: (code) => { return '' },
    buildEnd: () => { onChange() }
  }
}
