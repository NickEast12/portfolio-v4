import Mixins from './Mixins'

// match bootstrap sizes, also add xxl
const sizes = {
  xs: '0px',
  s: '375px',
  ls: '414px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1440px',
  xxxl: '1920px',
}

const bootstrapGutterWidth = '15px'

const fontSizeBase = 1

const font = {
  size: {
    xs: `${fontSizeBase * 0.75}rem`, // 12px
    sm: `${fontSizeBase * 0.875}rem`, // 14px
    base: `${fontSizeBase}rem`, // 16px
    md: `${fontSizeBase * 1.125}rem`, // 18px
    lg: `${fontSizeBase * 1.25}rem`, // 20px
    xl: `${fontSizeBase * 1.5}rem`, // 24px
  },
  lineHeight: {
    sm: 1.1,
    base: 1.4,
    headings: 1.2,
  },
  h1: {
    size: `${fontSizeBase * 3}rem`,
    sm: {
      size: `${fontSizeBase * 3.5}rem`,
    },
    md: {
      size: `${fontSizeBase * 4.5}rem`,
    },
    xl: {
      size: `${fontSizeBase * 5}rem`,
    },
  },
  h2: {
    size: `${fontSizeBase * 2}rem`,
    sm: {
      size: `${fontSizeBase * 2.5}rem`,
    },
    xl: {
      size: `${fontSizeBase * 3.75}rem`,
    },
  },
  h3: {
    size: `${fontSizeBase * 1.25}rem`,
    sm: {
      size: `${fontSizeBase * 2}rem`,
    },
    xl: {
      size: `${fontSizeBase * 2.5}rem`,
    },
  },
  h4: {
    size: `${fontSizeBase * 1.25}rem`,
    sm: {
      size: `${fontSizeBase * 1.875}rem`,
    },
  },
  p: {
    size: `${fontSizeBase}rem`,
    sm: {
      size: `${fontSizeBase * 1}rem`,
    },
    xl: {
      size: `${fontSizeBase * 1.125}rem`,
    },
  },
}

const Theme = {
  sizes,
  bootstrapGutterWidth,
  font,
  Mixins,
}
export default Theme
