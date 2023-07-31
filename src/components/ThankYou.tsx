import icon from '../images/icon-complete.svg'
import "./ThankYou.css";

export default function ThankYou(){
    return (
        <div className="container">
            <img src={icon} alt="icon" />
            <h2>THANK YOU!</h2>
            <p>We've added your card details</p>
            <button>Continue</button>
        </div>
    )
}





export{}