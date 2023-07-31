import "./Card.css";

interface propsTypes{
  cardNumber: string;
  personName: string;
  MM:string;
  YY:string;
  CVV:string;
}

export default function Card(props: propsTypes) {

const {cardNumber,personName,MM,YY,CVV} = props


  return (
    <div className="cards-bg">
      <div className="front-card">
        <div className="card-div">
          <div className="circle-div">
            <div className="full-circle"></div>
            <div className="ghost-circle"></div>
          </div>
          <div className="second-div">
            <h2 className="card-number">
              {cardNumber
                ? cardNumber
                    .split("")
                    .map((el: string, index: number) =>
                      (index + 1) % 4 === 0 ? (el = el + " ") : el
                    )
                : "0000 0000 0000 0000"}
            </h2>
            
            <div className="name-date-div">
              <p className="name">{personName ? personName : "Name Surname"}</p>
              <p className="date">
                {MM ? MM : "00"}/{YY ? YY : "00"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="back-card">
        <div className="cvv">{CVV ? CVV : "000"}</div>
      </div>
    </div>
  );
}

export {};
