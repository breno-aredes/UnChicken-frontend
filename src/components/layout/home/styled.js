import styled from "styled-components";

export const Body = styled.div`
  background-image: ${({ loaded }) =>
    loaded
      ? 'linear-gradient(90deg, rgba(2, 0, 36, 0.5) 0%, rgba(0, 0, 0, 1) 57%), url("acad_led_1.jpg")'
      : "none"};
  background-repeat: no-repeat;
  background-size: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-family: "Roboto", sans-serif;
  perspective: 1000px;
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
`;

export const TiltImage = styled.img`
  height: 250px;
  border-radius: 200px;
  border: 2px solid #00d9ff;
  margin-bottom: 40px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform-style: preserve-3d;
  box-shadow: 0px 0px 40px #00d9ffcc, 0px 0px 12px #00d9ff;
  object-fit: cover;

  &:hover {
    transform: perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1);
    box-shadow: 0px 0px 30px #00d9ffcc, 0px 0px 9px #00d9ff;
  }
`;
