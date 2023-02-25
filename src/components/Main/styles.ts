import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 3rem;
  color: #ffffff;
  background-color: #06092b;
  text-align: center;
`

export const Ufo = styled.img`
  position: absolute;
  width: 15rem;
  top: 0;
  margin: 16rem 0 0 5rem;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.5s ease-in-out;
  }
`

export const Illustration = styled.img`
  width: 35rem;
  z-index: 1;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 2rem 0 1rem;
  text-shadow: 2px 2px 2px #000000;
  z-index: 1;

  &:hover {
    color: #ccff33;
  }
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  text-shadow: 2px 2px 2px #000000;
  z-index: 1;

  &:hover {
    color: #ccff33;
  }
`
