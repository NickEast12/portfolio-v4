import { css } from 'styled-components'

const Vars = css`
  :root {
    //* Colours Main
    --main: #30e87a;
    --secondary: #008897;
    --alt: #ff575f;
    --background: #363d47;
    --grey: #333333;
    --white: #ffffff;
    --black: #000000;
    //* Colours Secondary
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray-dark: #343a40;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;

    //* Fonts
    --fontMain: roc-grotesk, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    --fontSecondary: Nunito Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';

    //* Widths
    --maxWidth: 1300px;
    --auto: 0 auto;

    //* Transition
    --transition: all 0.25s ease-in-out;
  }
`
export default Vars
