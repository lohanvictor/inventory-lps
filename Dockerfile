FROM node:18-alpine as base_target

WORKDIR /app

COPY package*.json .

RUN npm install --force

COPY . .

# Dev section
FROM base_target as dev

COPY .env.development .env

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]

# Prod section

FROM base_target as prod

COPY .env.production .env

EXPOSE 3001

CMD ["npm", "run", "start:prod"]