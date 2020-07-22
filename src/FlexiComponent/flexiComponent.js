import React, { useState, useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap"
import './../App.css'

// const submitButtonStyle = { 'marginLeft': '0.3em', 'background': 'blue', 'color': 'black' }

/**
 * Function component that receive props - onSubmitFunc function and config data as object
 */
const Flexi = ({ onSubmitFunc, config }) => {
  const [inputVal, setInput] = useState("");
  const [DDVal, setDD] = useState("");

  useEffect(() => {
  }, []);

  const changeHandler = event => setInput(event.target.value);

  const changeHandlerDD = event => setDD(event.target.value);

  const formSubmitHandler = event => {
    event.preventDefault();
    onSubmitFunc({ name: inputVal, place: DDVal })
  }


  return (
    <div className="flexi">
      <Card bg='light' border="secondary" text='dark' style={{ width: '18rem' }} >
        <Card.Header as="h5">Flexi React Component</Card.Header>
        <Card.Body>
          <Form>
            {(config.items.length > 0)
              && config.items.map((value, index) => {
                if (value.type === "TextField") {
                  return (
                    <div key={index} >
                      <Form.Group controlId="formBasic">
                        <Form.Label>{value.label}</Form.Label>
                        <Form.Control size="sm" type="input" placeholder="Enter Name" id={value.label} onChange={changeHandler} />
                        {/* <label htmlFor={value.label}>{value.label}:</label>
                    <input type="text" id={value.label} onChange={changeHandler} /> */}
                      </Form.Group>
                    </div>
                  );
                }
                if (value.type === "DropDown") {
                  return (
                    <div key={index}>
                      <Form.Group controlId="formBasic  Select">
                        <Form.Label>{value.label}</Form.Label>
                        <Form.Control as="select" size="sm" id={value.label} onChange={changeHandlerDD}>
                          <option>Select from options</option>
                          {value.values.map((ddOption, index) => {
                            return <option key={index} value={ddOption}>{ddOption}</option>;
                          })}
                        </Form.Control>
                        {/* <label htmlFor={value.label}>{value.label}:</label>
                  <select type="text" id={value.label} onChange={changeHandlerDD}>
                    <option value="">select from options</option>
                    {value.values.map((ddOption, index) => {
                      return <option key={index} value={ddOption}>{ddOption}</option>;
                    })}
                  </select> */}
                      </Form.Group>
                    </div>
                  );
                }
              })
              || <p>No data received</p>
            }
            <Button variant="secondary" size="nm" type="submit" onClick={formSubmitHandler}>
              Submit
        </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>

  );
};

export default Flexi;





