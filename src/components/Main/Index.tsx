import * as S from './styles'

const Main = ({
  title = 'Boilerplate NextJS',
  description = 'ReactJS, TypeScript and Styled-Components'
}) => (
  <S.Wrapper>
    <S.Ufo
      src="/img/logo-ufo.png"
      alt="Imagem de um átomo simbolizando o icone do ReactJS com um texto ao lado escrito Boilerplate NextJS"
    />
    <S.Illustration
      src="/img/hero-illustration.png"
      alt="Imagem ilustrativa do ufo no abduzindo o logo do React numa barraca de acampamento "
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
