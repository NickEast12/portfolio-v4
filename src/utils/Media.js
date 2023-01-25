import theme from './Theme.js'

export const media = Object.keys(theme.sizes).reduce((acc, cur) => {
  acc[cur] = `(min-width: ${theme.sizes[cur]})`
  return acc
}, {})
