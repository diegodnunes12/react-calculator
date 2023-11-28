import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Container, Content, Row } from "./styles";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  const handleClearNumber = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleSum = () => {
    setFirstNumber(String(currentNumber))
    setCurrentNumber('0');
    setOperation('+');
  }

  const handleMinus = () => {
    setFirstNumber(String(currentNumber))
    setCurrentNumber('0');
    setOperation('-');
  }

  const handleTimes = () => {
    setFirstNumber(String(currentNumber))
    setCurrentNumber('0');
    setOperation('*');
  }

  const handleDivide = () => {
    setFirstNumber(String(currentNumber))
    setCurrentNumber('0');
    setOperation('/');
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      let result = Number(firstNumber) + operation + Number(currentNumber);
      let resultValue = eval(result);
      setCurrentNumber(String(resultValue));
      setFirstNumber(String(resultValue));
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="/" onClick={handleDivide} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="X" onClick={handleTimes} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={handleSum} />
        </Row>
        <Row>
          <Button label="C" onClick={handleClearNumber} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="=" onClick={handleEquals} />
          <Button label="-" onClick={handleMinus} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
