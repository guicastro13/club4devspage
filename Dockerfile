    FROM node:20-alpine as build-stage

    WORKDIR /app
    
    COPY package.json yarn.lock* ./
    
    RUN yarn install --frozen-lockfile --non-interactive || npm install --legacy-peer-deps
    
    COPY . .
    
    RUN yarn build || npm run build
    
    FROM nginx:alpine as production-stage
    
    COPY --from=build-stage /app/dist /usr/share/nginx/html
    
    COPY nginx.conf /etc/nginx/conf.d/default.conf

    EXPOSE 80
    
    CMD ["nginx", "-g", "daemon off;"]