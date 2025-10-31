import React, { useState } from "react";
import styled from "styled-components";
import { SendHorizontal } from "lucide-react";
import LogoBis from "/logobis.svg";
import MapImg from "/Map.svg";

const Container = styled.section`
  background-color: #00113B;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 400px;
`;

const InnerContainer = styled.article`
  width: 1010px;
  height: 230px;;
  background-color: #4C40F7;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px 40px 20px;
  margin-top: -160px;
`;

const TextContainer = styled.div`
  text-align: center;
  color: #ffffff;
  margin-top: 20px;
  margin-bottom: 32px;

  & p {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
  }

  & span {
    font-size: 36px;
    font-weight: 600;
    line-height: 1.3;
    margin-top: 12px;
    display: block;
  }
`;

const InputForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 400px;
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 18px 20px;
  border-radius: 10px 0 0 10px;
  border: none;
  font-size: 15px;
  outline: none;
`;

const SendButton = styled.button`
  width: 60px;
  background-color: white;
  border: none;
  border-radius: 0 10px 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  & svg {
    color: #ABAFC7;
    width: 24px;
    height: 24px;
  }
`;

const Footer = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  padding: 40px 20px 60px 20px;
  box-sizing: border-box;
  color: #ffffff;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  img[src*="logobis"] {
    width: 48px;
    height: 48px;
    margin-bottom: 25px;
    border-radius: 18px;
    box-shadow: -5px 5px 25px rgba(9, 0, 255, 0.6);
  }

  img[src*="Map"] {
    width: 388px; 
    height: 228px;
  }

  &.col1 p {
    margin: 0;
    max-width: 360px;
    font-size: 16px;
    font-weight: 300;
    opacity: 0.8;
  }

  &.col3 p {
    margin: 0;
    max-width: 172px; 
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 20px;
    opacity: 0.8;
  }

  span {
    margin: 0;
    max-width: 360px;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 25px;
  }
`;

function End() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email submitted: ${email}`);
        setEmail("");
    };

    return (
        <Container>
            <InnerContainer>
                <TextContainer>
                    <p>Get Notified About Project</p>
                    <span>Subscribe Now</span>
                </TextContainer>

                <InputForm onSubmit={handleSubmit}>
                    <EmailInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <SendButton type="submit">
                        <SendHorizontal />
                    </SendButton>
                </InputForm>
            </InnerContainer>

            <Footer>
                <Column className="col1">
                    <img src={LogoBis} alt="Logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </Column>

                <Column>
                    <span>Our Office</span>
                    <img src={MapImg} alt="Map" />
                </Column>

                <Column className="col3">
                    <span>Our Office</span>
                    <p>Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta</p>
                    <p>info@yourdomain.com</p>
                    <p>+62 (0) 000 0000 00</p>
                </Column>
            </Footer>
        </Container>
    );
}

export default End;