import { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

function Question2() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function maxProductOfThree(arr) {
    arr.sort((a, b) => a - b);
    const n = arr.length;
    const option1 = arr[n - 1] * arr[n - 2] * arr[n - 3];
    const option2 = arr[0] * arr[1] * arr[n - 1];
    return Math.max(option1, option2);
  }

  function calculateMaxProduct() {
    const inputArray = input.split(",").map(Number);
    const maxProduct = maxProductOfThree(inputArray);
    setResult(`Max Product: ${maxProduct}`);
  }

  return (
    <Container className="question-1 mt-3 p-3 rounded-1">
      <Form>
        <h3>Max Product Calculator</h3>
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
            <Button 
              type="button"
              variant="dark" 
              onClick={calculateMaxProduct}
            >
              Calculate
            </Button>
          </Col>
        </Row>
        <Row className="align-items-center" id="result">
          <Col xs={12}>
            <Form.Label className="m-0">
              {result}
            </Form.Label>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default Question2