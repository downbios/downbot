# Usa a imagem oficial do Node.js como base
FROM node:latest

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código fonte para o diretório de trabalho
COPY . .

# Expõe a porta em que o servidor Express está rodando
EXPOSE 3000

# Comando para iniciar o servidor quando o contêiner for iniciado
CMD ["node", "./downbot.js"]
