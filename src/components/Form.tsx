import "./Form.css";
import { useState, useRef } from "react";

interface propsTypes {
  cardNumber: string;
  setCardNumber: (value: string) => void;
  personName: any;
  setPersonName: (value: any) => void;
  MM: string;
  YY: string;
  setMM: (value: string) => void;
  setYY: (value: string) => void;
  CVV: string;
  setCVV: (value: string) => void;
  setIsVisible: (value: boolean) => void;
}

export default function Form(props: propsTypes) {
  const {
    cardNumber,
    setCardNumber,
    personName,
    setPersonName,
    MM,
    setMM,
    YY,
    setYY,
    CVV,
    setCVV,
    setIsVisible,
  } = props;

  const handleChange = (event: any) => {
    if (event.target.value.length <= 21) {
      const onlyLettersAndSpaces = /^[a-zA-Z\s]*$/;
      const inputValueWithoutSymbols = event.target.value.replace(
        /[^a-zA-Z\s]/g,
        ""
      );
      if (onlyLettersAndSpaces.test(inputValueWithoutSymbols)) {
        setPersonName(inputValueWithoutSymbols);
      }
    }
  };

  const [Error, setError] = useState(false);
  const [Error1, setError1] = useState(false);
  const ref = useRef<any>(null);
  const ref1 = useRef<any>(null);
  const ref2 = useRef<any>(null);

  return (
    <form>
      <div className="form-name">
        <label>CARD HOLDER NAME</label>
        <input type="text" value={personName} onChange={handleChange} />
      </div>
      <div className="form-num">
        <label>CARD NUMBER</label>
        <input
          className={Error ? "error" : "not-error"}
          type="number"
          value={cardNumber}
          onChange={(e) => {
            if (e.target.value.length <= 16) {
              setCardNumber(e.target.value);
            }
            {
              e.target.value.length >= 16 || e.target.value.length === 0
                ? setError(false)
                : setError(true);
            }
          }}
        />
        {Error ? (
          <p className="error-message">Wrong format, must be 16 digits</p>
        ) : null}
      </div>
      <div className="wrapper">
        <div className="exp-div">
          <label>EXP. DATE (MM/YY)</label>
          <div className="input-wrapper">
            <input
              ref={ref}
              className={
                0 < ref.current?.value.length && ref.current?.value.length < 2
                  ? "error"
                  : "not-error"
              }
              type="number"
              value={MM}
              onChange={(e) => {
                if (e.target.value.length < 3 && e.target.value < "13") {
                  setMM(e.target.value);
                }
              }}
            />
            {(!ref.current?.value && !ref1.current?.value) ||
            (ref.current?.value.length >= 2 &&
              ref1.current?.value.length >= 2) ? null : (
              <p ref={ref2}>Can't be blank</p>
            )}

            <input
              ref={ref1}
              className={
                0 < ref1.current?.value.length && ref1.current?.value.length < 2
                  ? "error"
                  : "not-error"
              }
              type="number"
              value={YY}
              onChange={(e) => {
                if (e.target.value.length < 3) {
                  setYY(e.target.value);
                }
              }}
            />
          </div>
        </div>
        <div className="cvv-div">
          <label>CVV</label>
          <input
            className={Error1 ? "error" : "not-error"}
            type="number"
            value={CVV}
            onChange={(e) => {
              if (e.target.value.length < 4) {
                setCVV(e.target.value);
                e.target.value.length >= 3 || e.target.value.length === 0
                  ? setError1(false)
                  : setError1(true);
              }
            }}
          />
          {Error1 ? <p>Must be 3 digits</p> : null}
        </div>
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          if (!Error && !Error1) setIsVisible(false);
        }}
      >
        Confirm
      </button>
    </form>
  );
}

export {};
