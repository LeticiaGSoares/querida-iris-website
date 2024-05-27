import {Content} from '../styles/Main'
import Form from './Form'
import { ColorPalette } from '../styles/ColorPalette'

const Login = () => {
    return (
        <Content style={{"background-color": `${ColorPalette.colors.Primary}`}}>
            <Form alternativa={"cadastro"}/>
        </Content>
    )
}

export default Login