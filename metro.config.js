const { getDefaultConfig } = require('metro-config')

const SVG = 'svg'

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig()

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: [...assetExts.filter(ext => ext !== SVG), 'bin'],
      sourceExts: [...sourceExts, SVG],
    },
  }
})()
