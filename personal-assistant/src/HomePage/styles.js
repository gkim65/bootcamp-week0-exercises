import styled from 'styled-components'

export const Title1 = styled.text`

  font:${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.green};
`
export const Title2 = styled.text`
  font:${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.purple};
`
export const Title3 = styled.text`
  font:${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.pink};
`
export const Title4 = styled.text`
  font:${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.yellow};
`
export const Title5 = styled.text`
  font:${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.blue};
  
`
export const Title6 = styled.div`
  font:${({ theme }) => theme.fonts.TitleNotBold};
  color: lightgrey;
  padding-bottom: 10px;
`
export const Title7 = styled.text`
  font:${({ theme }) => theme.fonts.Title};
  color: darkgrey;

`
export const TitleBox = styled.div`
  width: 100%;
  justify-content:space-around;
  margin:auto;
  text-align:center;

`

export const Container = styled.div`
  height: 100vh;
  align-items: center;
  text-align:center;
  flex-direction: column;
  background-color:white;
`
