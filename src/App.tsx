import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import ThankYou from "./components/ThankYou";
import "./App.css";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [personName, setPersonName] = useState("");
  const [MM, setMM] = useState("");
  const [YY, setYY] = useState("");
  const [CVV, setCVV] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  
  return (
    <div className="flex">
      <Card
        cardNumber={cardNumber}
        personName={personName}
        MM={MM}
        YY={YY}
        CVV={CVV}
      />
      {isVisible ? (
        <Form
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          personName={personName}
          setPersonName={setPersonName}
          MM={MM}
          YY={YY}
          setMM={setMM}
          setYY={setYY}
          CVV={CVV}
          setCVV={setCVV}
          setIsVisible={setIsVisible}
        />
      ) : (
        <ThankYou />
      )}
    </div>
  );
}

export default App;
