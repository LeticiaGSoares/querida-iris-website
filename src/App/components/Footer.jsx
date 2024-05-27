import { Link } from "react-router-dom"
import { AutoLayout, Text} from "../styles/Main"
import spotifyIcon from "../../assets/images/spotify-footer.png"
import youtubeIcon from "../../assets/images/youtube-footer.png"
import instagramIcon from "../../assets/images/instagram-footer.png"
import {NavBar, NavLink, NavElement} from '../styles/Header'


const Footer = () => {
    return (
        <>
            <NavBar>
                <NavLink>&copy; Copyright 2024 | Letícia G. Soares | Todo os direitos reservados</NavLink>

                <AutoLayout>
                    <Link to={"https://google.com"}>
                        <img src={spotifyIcon} />
                    </Link>
                    <Link to={"https://google.com"}>
                        <img src={youtubeIcon} />
                    </Link>
                    <Link to={"https://google.com"}>
                        <img src={instagramIcon} />
                    </Link>
                </AutoLayout>
            </NavBar>
        </>
    )
}

export default Footer