import {Content, AutoLayout, SectionHalf} from '../styles/Main'
import {BookTitle, BookSubtitle, BookCover} from '../styles/Home'
import {Title, Text} from '../styles/Main'
import websiteData from '../../assets/data/websiteData.json'
import bookCover from '../../assets/images/book-cover.png'
import { ColorPalette } from '../styles/ColorPalette'

const Hero = () => {
    return(
            <Content style={{"background-color": `${ColorPalette.colors.Primary}`}}>
                <SectionHalf>
                    <BookTitle>{websiteData.bookDetails.title}
                    <BookSubtitle>{websiteData.bookDetails.subtitle}</BookSubtitle>
                    </BookTitle>
                    <Text>{websiteData.bookDetails.synopsis}</Text>
                </SectionHalf>
                <SectionHalf style={{"align-items": "center"}}>
                    <BookCover src={bookCover}/>
                </SectionHalf>
            </Content>
    )
}

const Characters = () => {
    return(
        <Content>
            <Title>Conheça os protagonistas</Title>
        </Content>
    )
}

const Home = () => {
    return (
        <>
            <Hero/>
        </>
    )
}

export default Home