const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')
const { version } = require('vue-demi')

const pkgPath = path.join(__dirname, '../package.json')

function switchVersion() {
  if (typeof version !== 'string' || !(version.startsWith('2.') || version.startsWith('3.'))) {
    throw new Error('[vue-demi-component-template] not current Vue version, please use vue2/3')
  }

  const distDir = `./dist/${version.startsWith('2.') ? 'v2' : 'v3'}`

  const exportJson = {
    main: `${distDir}/vue-tree.umd.js`,
    module: `${distDir}/vue-tree.mjs`,
    exports: {
      '.': {
        types: `./types${version.startsWith('2.') ? '2' : '3'}/index.d.ts`,
        import: `${distDir}/vue-tree.mjs`,
        require: `${distDir}/vue-tree.umd.js`
      },
      './style.css': `${distDir}/style.css`,
      './*': './*',
    }
  }

  const newPkg = Object.assign(pkg, exportJson)

  fs.writeFileSync(pkgPath, JSON.stringify(newPkg, null, 2))
  console.log(`[vue-demi-component-template] Switch packageJson fields for Vue${version}`)
}

switchVersion()