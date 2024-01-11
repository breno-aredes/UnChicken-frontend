import { Tilt } from "react-tilt";
import { Body, TiltImage } from "./styled";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const bodyImage = new Image();
    bodyImage.src = "acad_led_1.jpg";

    bodyImage.onload = () => {
      setImageLoaded(true);
    };

    bodyImage.onerror = () => {
      console.error("Erro ao carregar a imagem de fundo");
    };
  }, []);

  return (
    <Body loaded={imageLoaded}>
      {imageLoaded && (
        <>
          <Tilt>
            <TiltImage src="/UnChickenApp2.0.jpg" alt="UnChicken App" />
          </Tilt>

          <h1>
            Bem-vindo ao <span>UnChicken</span>!
          </h1>
          <h2>
            Melhore seu desempenho em treinos livres e calistenia. Supere
            limites, deixe de ser um <span>FRANGO</span> e alcance resultados
            incríveis com desafios constantes. Junte-se a nós!
          </h2>
        </>
      )}
    </Body>
  );
}
