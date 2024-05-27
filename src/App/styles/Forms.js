import {styled} from 'styled-components'
import { ColorPalette } from '../styles/ColorPalette'

export const FormStyle = styled.form`
    border-radius: 20px;
    padding: 50px;
    width: 400px;
    background-color: ${ColorPalette.colors.WhiteLowOpacity};
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
`
