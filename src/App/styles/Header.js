import {styled} from 'styled-components'

export const NavBar = styled.nav`
    position:fixed;
    z-index: 9999;
    width: 100%;
    display: flex;
    max-height: 104px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    background: linear-gradient(rgba(39, 116, 198, 0.93), transparent);
`

export const NavImg = styled.img`
    height: 60px;
    width: 75px;
    transition: all .2s ease-in-out;
    cursor: pointer;

    &&:hover{
        transform: scale(0.85)
    }
`

export const NavLink = styled.a`
    text-decoration: none;
`