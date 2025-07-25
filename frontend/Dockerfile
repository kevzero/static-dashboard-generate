FROM node:18

WORKDIR /app
COPY . .

# Installa dipendenze e builda il progetto
RUN npm install && npm run build

# Installa un server statico per servire i file buildati
RUN npm install -g serve

# Espone la porta 5173 e serve il build
EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]

