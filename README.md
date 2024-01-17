# Unchicken - Frontend

O Unchicken é uma aplicação web que permite aos usuários cadastrar rotinas de treinos de calistenia, registrar seus treinos individuais e visualizar sua progressão ao longo do tempo.

## Status do Projeto

Em desenvolvimento

## Tecnologias Utilizadas

- [React](https://react.dev/) : Biblioteca JavaScript para construção de interfaces de usuário.
  
- [Next](https://nextjs.org/) : Framework React que permite renderização do lado do servidor e facilita o desenvolvimento eficiente.

- [Axios](https://axios-http.com/) : Cliente HTTP para requisições à API do Unchicken.

- [Styled-Components](https://styled-components.com/) : Biblioteca para estilizar componentes React usando estilos no próprio arquivo do componente.

- [React-Icons](https://react-icons.github.io/react-icons/) : Conjunto de ícones React customizáveis.

- [React-Tilt](https://www.npmjs.com/package/react-tilt) : Biblioteca que adiciona efeitos de inclinação a elementos para uma experiência visual agradável (usada na Home).

- [Validator](https://www.npmjs.com/package/validator) : Biblioteca para validação de dados antes do envio ou processamento.

## Rotas

- **/**: Home da aplicação.

- **/signin**: Para efetuar o login.

- **/signup**: Para criar uma nova conta de usuário.

- **/createtraining**: Para criar uma nova ficha de treino.

- **/training**: Para visualizar todas as fichas de treino cadastradas.
  
   -  **/training/[id]**: Para visualizar detalhes de uma ficha específica, começar a preenchê-la ou excluí-la.
     
      - **/training/[id]/report**: Rota para visualizar uma média dos preenchimentos e analisar a progressão nos treino.


## Instalação e uso

1. Clone o repositório:

   ```bash
     git clone git@github.com:UnChicken-App/UnChicken-frontend.git
     ```

2. Instale as dependências:

   ```bash
     cd UnChicken-front-end
     npm install
   ```
3. siga as instruções no README do backend [Unchicken-back-end](https://github.com/UnChicken-App/UnChicken-backend) e certifique-se de que esteja em execução

4. Execute o seguinte comando para iniciar o aplicativo:

    ```bash
     npm run dev
     ```
5. Acesse o aplicativo no seu navegador em [http://localhost:3000](http://localhost:3000).

## Contato

Para mais informações ou dúvidas, entre em contato através do e-mail [breno_mg10@hotmail.com].
