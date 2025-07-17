// inside src/components/mains/Projects.tsx
import { useState } from 'react';
import styled from 'styled-components';

/* 1️⃣ Styled-components matching your MP-1 CSS: */
const CalcSection = styled.section.attrs({ id: 'calculator' })`
  background: var(--mid);
  padding: var(--gutter);
  margin: var(--gutter) auto;
  max-width: 500px;
  border-radius: 4px;
`;
const CalcInput = styled.input.attrs({ type: 'number' })`
  width: calc(50% - 12px);
  padding: 8px;
  margin: 4px;
`;
const Buttons = styled.div`
  margin-top: var(--gutter);
`;
const CalcButton = styled.button`
  padding: 8px 12px;
  margin: 4px;
  font-size: calc(16px + 0.5vw);
  cursor: pointer;
`;
const Result = styled.div<{ negative: boolean }>`
  margin-top: var(--gutter);
  font-size: calc(18px + 0.5vw);
  font-weight: bold;
  color: ${props => (props.negative ? 'red' : 'inherit')};
`;

export default function SimpleCalculator() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [res, setRes] = useState<string>('');
  const [neg, setNeg] = useState(false);

  function calculate(op: 'add' | 'subtract' | 'multiply' | 'divide' | 'power') {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    if (isNaN(num1) || isNaN(num2)) {
      setRes('Enter two valid numbers.');
      setNeg(false);
      return;
    }
    let val: number | string;
    switch (op) {
      case 'add':      val = num1 + num2; break;
      case 'subtract': val = num1 - num2; break;
      case 'multiply': val = num1 * num2; break;
      case 'divide':   val = num2 !== 0 ? num1 / num2 : 'Error: cannot divide by 0'; break;
      case 'power':
        val = 1;
        for (let i = 0; i < num2; i++) val = (val as number) * num1;
        break;
    }
    if (typeof val === 'number' && val < 0) {
      setNeg(true);
    } else {
      setNeg(false);
    }
    setRes(String(val));
  }

  return (
    <CalcSection>
      <h2>Simple Calculator</h2>
      <CalcInput
        placeholder="First number"
        value={a}
        onChange={e => setA(e.target.value)}
      />
      <CalcInput
        placeholder="Second number"
        value={b}
        onChange={e => setB(e.target.value)}
      />
      <Buttons>
        <CalcButton onClick={() => calculate('add')}>+</CalcButton>
        <CalcButton onClick={() => calculate('subtract')}>−</CalcButton>
        <CalcButton onClick={() => calculate('multiply')}>×</CalcButton>
        <CalcButton onClick={() => calculate('divide')}>÷</CalcButton>
        <CalcButton onClick={() => calculate('power')}>^</CalcButton>
        <CalcButton onClick={() => { setA(''); setB(''); setRes(''); setNeg(false); }}>C</CalcButton>
      </Buttons>
      <Result negative={neg}>{res}</Result>
    </CalcSection>
  );
}
