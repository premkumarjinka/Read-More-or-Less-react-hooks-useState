// Write your code here
import {useState} from 'react'

import {
  Heading,
  Para,
  Img,
  Button,
  Container,
  ImgContainer,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [b, setText] = useState(true)

  const a = reactHooksDescription

  const text = b ? a.slice(0, 170) : a
  console.log(text)
  const ButtonText = b ? 'Read More' : 'Read Less'

  const onButton = () => {
    setText(prevState => !prevState)
  }

  return (
    <>
      <Container>
        <Heading>React Hooks</Heading>
        <Para>Hooks are a new addition to React</Para>
        <ImgContainer>
          <Img
            src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
            alt="react hooks"
          />
          <Para>{text}</Para>
        </ImgContainer>
        <Button type="button" onClick={onButton}>
          {ButtonText}
        </Button>
      </Container>
    </>
  )
}
export default ReadMore
