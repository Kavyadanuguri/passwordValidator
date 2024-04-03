import {useState} from 'react'
import {
  Container1,
  Container2,
  Heading1,
  P1,
  InputElement,
  P2,
} from './styledComponents'
// Write your code here
const PasswordValidator = () => {
  const [inputValue, setValue] = useState('')
  const onInputValue = event => {
    setValue(event.target.value)
    console.log(inputValue)
  }
  const value1 = inputValue.length < 8

  return (
    <Container1>
      <Container2>
        <Heading1>Password Validator</Heading1>
        <P1>check how strong and secure is your password</P1>
        <InputElement
          value={inputValue}
          onChange={onInputValue}
          type="password"
        />
        <P2>{value1 && 'Your password must be at least 8 characters'}</P2>
      </Container2>
    </Container1>
  )
}
export default PasswordValidator
