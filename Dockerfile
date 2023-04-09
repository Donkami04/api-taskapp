FROM alpine:3.16

ENV NODE_VERSION 18.15.0

WORKDIR /app

RUN apk add --update nodejs npm

# Copia el package.json y el package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Expone el puerto 3000 para que pueda ser accedido desde fuera del contenedor
EXPOSE 3000

# Comando que se ejecuta al iniciar el contenedor
CMD ["node", "index.js"]
