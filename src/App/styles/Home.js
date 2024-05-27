import {styled} from 'styled-components'
import { ColorPalette } from './ColorPalette'

export const BookTitle = styled.h1`
    color: ${ColorPalette.colors.BgLightMode};
    font-size: 50px;
`

export const BookSubtitle = styled.h2`
color: ${ColorPalette.colors.BgLightMode};
    font-size: 30px;
`

export const BookCover = styled.img`
color: ${ColorPalette.colors.BgLightMode};
    max-height: 500px;
    max-width: 350px;

`
