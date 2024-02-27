# DownBot - Bot Telegram para Interações Simples.

Este é um projeto de bot Telegram chamado DownBot, desenvolvido para fornecer respostas simples a mensagens recebidas no Telegram. Abaixo estão detalhes sobre o projeto e instruções para configurá-lo.

Ambiente de Produção
O Downbot, foi construído e implementado, usando contâiners Docker, para execução em Linux RaspbianOSX64, mas pode ser implementado em qualquer ambiente, respeitando suas devidas configurações.

Linguagem Utilizada
O DownBot foi desenvolvido principalmente em JavaScript utilizando a imagem oficial do Node.js como base no Docker.

Serviço de Tunnels
Para garantir que o webhook do Telegram possa se comunicar com o bot, é necessário um serviço de tunelamento para disponibilizar um URL público. Recomendamos o uso de serviços como ngrok para criar um túnel seguro entre a internet pública e o seu ambiente local.

Webhooks
O bot Telegram utiliza webhooks para receber atualizações de mensagens. O webhook é configurado para enviar atualizações para a URL pública onde o aplicativo está hospedado.

Configurações de Ambientes
O projeto utiliza variáveis de ambiente para configurar o token do bot, a URL do webhook e a porta do servidor Express.

Para configurar as variáveis de ambiente, crie um arquivo .env na raiz do projeto e defina as seguintes variáveis:

BOT_TOKEN=seu_token_do_bot_aqui
WEBHOOK_URL=sua_url_publica_aqui
PORT=porta_do_servidor_express

# Certifique-se de que o serviço de tunelamento está em execução e que a URL pública foi definida corretamente no arquivo .env.

Crie uma conta em https://ngrok.com/, após fazer login, você será direcionado para seu DASHBOARD, procure por DOMAIN, o ngrok fornece uma url estática
gratuita, crie a sua ela não mudará a menos que você a exclua, isto é importante pois ela será definida na sua WEBHOOK_URL.

Após criar seu domain, volte para a aba SETUP & INSTALLATION, procure por DOCKER, NA LISTA DE AGENTS, vamos usar docker para manter o ngrok em execução disponibilizando sua url/domain no servidor.

Se você já criou seu domain, clique na aba STATIC DOMAIN, o ngrok já irá fonecer os comandos para criação de imagem e execução do seu container devidamente configurados.

SERIA ALGO COMO :

docker pull ngrok/ngrok

docker run --net=host -it -e NGROK_AUTHTOKEN=<YOUR_NGROK_AUTHTOKEN> ngrok/ngrok:latest http <YOUR DOMAIN> <PORT>

- Pontos importantes:
  1 - por padrão o ngrok define a porta 80, na execução do comando, altere <PORT> caso sua aplicação esteja sendo escutada em outra porta.
  2 - <YOUR_NGROK_AUTHTOKEN> É gerado automaticamente pelo ngrok, caso isso não ocorra vc pode gerá-lo no menu de Tunnels.
  3 - caso não crie um domain, uma url temporária será gerada, o que pode acarretar em falhas de comunicação com seu webhook.

# Como Executar o Projeto

Certifique-se de ter o Docker instalado na sua máquina.
Clone o repositório do projeto.
Crie um arquivo .env na raiz do projeto e defina as variáveis de ambiente conforme descrito acima.
Execute os seguintes comandos no terminal:

# Build da imagem Docker

docker build -t <YOUR_BOT_DOCKER_IMAGE> .

# Execute o contêiner

docker run -d --name <YOUR_BOT_CONTAINER> -p 3000:3000 <YOUR_BOT_DOCKER_IMAGE>

# Considerações Finais

Isso iniciará o servidor do DownBot e estará pronto para receber e responder às mensagens no Telegram. Até o momento a lógica do DownBot está bem simples, pois o foco era trabalhar na implementação de um bot, funcional, continue acompanhando sua evolução.

Contribuindo
Sinta-se à vontade para contribuir com melhorias para o projeto. Basta enviar um pull request para o repositório.

Este projeto foi desenvolvido como uma forma simples de interação com os usuários do Telegram. Se você tiver alguma dúvida ou sugestão, não hesite em entrar em contato. Aproveite o DownBot! 🤖🚀
