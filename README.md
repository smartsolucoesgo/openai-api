# Microserviços com IA

Este projeto demonstra a implementação de microserviços utilizando inteligência artificial.

## Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- [Docker](https://www.docker.com/)

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/smartsolucoesgo/openai-api.git
    cd openai-api
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Configure as variáveis de ambiente:
    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
    ```env
    PORT=3000
    DB_HOST=localhost
    DB_USER=root
    ASSISTANT_PERSONA=e quem vai ser seu assistente de inteligencia artificial
    ```

## Executando o Projeto

### Usando Node.js

1. Inicie o servidor:
    ```sh
    npm start
    ```

2. Acesse o projeto em `http://localhost:3000`.

### Usando Docker

1. Construa a imagem Docker:
    ```sh
    docker build -t openai-api .
    ```

2. Execute o container:
    ```sh
    docker run -p 3000:3000 openai-api
    ```

3. Acesse o projeto em `http://localhost:3000`.

## Uso

### Endpoints Assistente

- `POST /assistants/create`: Cria um novo assistente.
- `PUT /assistants/edit`: Atualiza os dados do seu assistente.
- `DELETE /assistants/delete`: Remove seu assistente.

### Endpoints Perguntas

- `POST /ia/ask`: Pergunta ao assistente automatico.
- `POST /ia/ask-assistant`: Pergunta ao assistente especifico

### Exemplo de Requisição


#### Criar Assistente

```sh
curl -X POST http://localhost:3000/assistants/create \
-H "Content-Type: application/json" \
-d '{
    "apiKey": "SUA_API_KEY_OPENAI",
    "model": "gpt-4o-mini" - Ou outro modelo que quiser, basta olhar na doc da openai
    "name": "Assistente 1",
    "instructions": "Instrucoes de quem e o seu assistente e o que ele pode fazer ou responder",
    "temperature": 0.5 - É o nivel de temperatura das respostas, de 0-2 sendo 2 bem flexivel, quanto menor mais serio ele fica,
    "response_format": "text" - a forma que ele ira responder
}'
```

#### Editar Assistente

```sh
curl -X PUT http://localhost:3000/assistants/edit \
-H "Content-Type: application/json" \
-d '{
    "apiKey": "SUA_API_KEY_OPENAI",
    "assistantId": "ID_DO_ASSISTENTE",
    "model": "gpt-4o-mini" - Ou outro modelo que quiser, basta olhar na doc da openai - Opcional
    "name": "Assistente 1",  - Opcional
    "instructions": "Instrucoes de quem e o seu assistente e o que ele pode fazer ou responder",  - Opcional
    "temperature": 0.5 - É o nivel de temperatura das respostas, de 0-2 sendo 2 bem flexivel, quanto menor mais serio ele fica,  - Opcional
}'
```

#### Deletar Assistente

```sh
curl -X DELETE http://localhost:3000/assistants/delete \
-H "Content-Type: application/json" \
-d '{
    "apiKey": "SUA_API_KEY_OPENAI",
    "assistantId": "ID_DO_ASSISTENTE"
}'
```
### Exemplo de Requisição do Assistente

#### Gerar Resposta

```sh
curl -X POST http://localhost:3000/ia/ask \
-H "Content-Type: application/json" \
-d '{
    "apiKey": "SUA_API_KEY_OPENAI",
    "question": "sua pergunta ao assistente"
}'
```

#### Listar Assistentes

```sh
curl -X GET http://localhost:3000/ia/ask-assistant \
-H "Content-Type: application/json" \
-d '{
    "apiKey": "SUA_API_KEY_OPENAI",    
    "assistantId": "ID_DO_ASSISTENTE",
    "question": "sua pergunta ao assistente especifico"
}'
```

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Faça um push para a branch (`git push origin feature/nova-feature`).
5. Crie um novo Pull Request.

## Licença

Este projeto foi feito com muita dedicaçao e espero que seja util para voce, caso queira implementar melhorias fique a vontade, faca a melhoria e crie o seu PR.