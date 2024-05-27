import {Content} from '../styles/Main'
import Form from './Form'
import { ColorPalette } from '../styles/ColorPalette'

const SignUp = () => {
    return (
        <Content style={{"background-color": `${ColorPalette.colors.Primary}`}}>
            <Form alternativa={"login"}/>
        </Content>
    )
}

export default SignUp