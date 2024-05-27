import {Link} from 'react-router-dom'
import {Title, Text} from '../styles/Main'
import {FormStyle} from '../styles/Forms'

const Form = ({ alternativa }) => {
    return (
      <FormStyle>
        <input placeholder='Seu melhor e-mail' name="email" type="email" />
        <input placeholder='Senha' name="password" type="password" />
        <button>Entrar</button>
        <Text>
          Ainda não tem uma conta? Faça seu{' '}
          <Link style={{ textDecoration: 'none', color: 'blue' }} to={`/${alternativa}`}>
            {alternativa}
          </Link>
        </Text>
      </FormStyle>
    );
  };

export default Form