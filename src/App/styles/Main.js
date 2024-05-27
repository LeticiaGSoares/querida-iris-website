import {styled} from 'styled-components'
import { ColorPalette } from './ColorPalette'

export const Title = styled.h3`
    color: ${ColorPalette.colors.Primary};
`

export const Text = styled.p`
    font-size: 16px;
    color:${ColorPalette.colors.BgLightMode};
`

export const primaryButton = styled.button`

`

export const secondaryButton = styled.button`

`

export const AutoLayout = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 0 7%;
    padding: 50px 0;
    min-height: calc(100vh - 148px);
`

export const SectionHalf = styled.section`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    flex-direction: column;
`