# Stage 1: Build the Angular application
From node:lts-alpine as build

#working root directory for image
workdir /app 

copy package*.json ./

run npm install

copy . . 

run npm run build --prod

# Stage 2: Serve the app with NGINX
From nginx:alpine 

COPY --from=build /app/dist/SampleSite/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]