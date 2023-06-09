import { Tilt } from "react-tilt";
import { Body, TiltImage } from "./styled";

export default function HomePage() {
  return (
    <Body>
      <Tilt>
        <TiltImage src="/UnChickenApp2.0.jpg"></TiltImage>
      </Tilt>

      <h1>
        Bem-vindo ao <span>UnChicken</span>!
      </h1>
      <h2>
        Melhore seu desempenho em treinos livres e calistenia. Supere limites,
        deixe de ser um <span>FRANGO</span> e alcance resultados incríveis com
        desafios constantes. Junte-se a nós!
      </h2>
    </Body>
  );
}
