FROM node:current-alpine
RUN apk update && apk add git
RUN git clone https://github.com/anhubbard/SE3Project.git
WORKDIR /SE3Project/OrderingService
#COPY log.log /SE3Project
RUN npm install
CMD ["node", "index.js"]  
