import Header from "@/components/layout/header";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Header />
      <Body>
        <img src="/UnChickenApp2.0.jpg"></img>
        <h1>
          Bem-vindo ao <span>UnChicken</span>!
        </h1>
        <h2>
          Melhore seu desempenho em treinos livres e calistenia. Supere limites,
          deixe de ser um <span>FRANGO</span> e alcance resultados incríveis com
          desafios constantes. Junte-se a nós!
        </h2>
      </Body>
    </>
  );
}

const Body = styled.div`
  background-image: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.5) 0%,
      rgba(0, 0, 0, 1) 57%
    ),
    url("acad_led_1.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-family: "Roboto", sans-serif;

  h1 {
    width: 500px;
    margin-bottom: 20px;
    color: #00d9ff;
    text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    font-size: 40px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
  }
  h2 {
    width: 500px;
    margin-bottom: 20px;
    color: #00d9ff;
    text-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    font-size: 20px;
    font-weight: bold;
    line-height: 27px;
  }
  span {
    -webkit-text-stroke: 1px #00d9ff;
    -webkit-text-fill-color: transparent;
    text-shadow: 0px 0px 30px #00d9ff, 0px 0px 5px #00d9ffc0;
  }
  img {
    height: 250px;
    border-radius: 200px;
    border: 2px solid #00d9ff;
    box-shadow: 0px 0px 10px #00d9ffcc, 0px 0px 3px #00d9ff;
    margin-bottom: 20px;
  }
`;
