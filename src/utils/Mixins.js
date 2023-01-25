import { css } from 'styled-components'

export const Inset = () => css`
    @supports (inset: 0) {
        inset: 0;
    }
    @supports not (inset: 0) {
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`;