# Usar a imagem oficial do Node.js
FROM node:17
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
