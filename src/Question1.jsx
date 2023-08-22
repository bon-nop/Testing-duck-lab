import { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

function Question1() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function sumOfEvenNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
      if (num % 2 === 0) {
        sum += num;
      }
    }
    return sum;
  }

  function calculateSum() {
    const numbers = input.split(",").map(Number);
    const evenSum = sumOfEvenNumbers(numbers);
    setResult(`Result : ${evenSum}`);
  }

  return (
    <Container className="question-1 mt-3 p-3 rounded-1">
      <Form>
        <h3>Sum of Even Numbers Calculator</h3>
        <Row className="align-items-center">
          <Col xs={12}>
            <Form.Label className="m-0">
              Enter integers (comma-separated):
            </Form.Label>
          </Col>
          <Col xs={8} md={5} lg={4} className="my-2">
            <Form.Control
              type="text"
              id="numberInput"
              name="numbers"
              placeholder="e.g. 1, 2, 3, 4, 5"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
            />
          </Col>
          <Col>
            <Button type="button" variant="dark" onClick={calculateSum}>
              Calculate
            </Button>
          </Col>
        </Row>
        <Row className="align-items-center" id="result">
          <Col xs={12}>
            <Form.Label className="m-0">{result}</Form.Label>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Question1;
