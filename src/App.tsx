import styled from "styled-components";
import "./App.css";

import { Modal, StarContainer } from "./components";
import { FormEvent, useState } from "react";
import { AvaliationProps } from "./interface";
import { CreateAvaliation } from "./services";

const Title = styled.h1`
  color: black;
  font-size: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function App() {
  const [stars, setStars] = useState(0);
  const [inputValues, setInputValues] = useState({
    description: "",
  });

  const formElementsChangeHandler = (
    propName: keyof typeof inputValues,
    value: string
  ) =>
    setInputValues((prevState) => {
      return { ...prevState, [propName]: value };
    });

  const formHandleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const currentAvalation: AvaliationProps = {
      stars,
      ...inputValues,
    };
    const { data } = CreateAvaliation(currentAvalation);
    console.log("data", data);
  };

  return (
    <>
      <Modal>
        <Title>Avaliação</Title>

        <StarContainer selectedStarsState={[stars, setStars]} />
        <Form onSubmit={formHandleSubmit}>
          <textarea
            name=""
            id=""
            onChange={(event) =>
              formElementsChangeHandler("description", event.target.value)
            }
          ></textarea>
          <button type="submit">Enviar</button>
        </Form>
      </Modal>
    </>
  );
}

export default App;
