import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"



export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:ankitgala00@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:ankitgala00@gmail.com">ankitgala00@gmail.com</a>
        </div>
        <div>
        <a href="tel:+919769424782"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919769424782">(+91) 9769424782</a>
        </div>  
      </div>
    </Container>
  )
}