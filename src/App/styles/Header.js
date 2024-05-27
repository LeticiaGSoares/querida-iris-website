import {styled} from 'styled-components'
import { ColorPalette } from './ColorPalette'

export const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${ColorPalette.colors.BarColor};
    padding: 20px 5%;
`

export const NavElement = styled.img`
    height: 30px;
    width: 30px;
    cursor: pointer;

    &&:hover{
        transform: scale(0.85)
    }
`

export const NavLink = styled.a`
    text-decoration: none;
    color: ${ColorPalette.colors.BarElements}
`