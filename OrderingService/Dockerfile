FROM node:current-alpine
RUN apk update && apk add git
RUN git clone https://github.com/anhubbard/SE3Project.git
WORKDIR /SE3Project/OrderingService
RUN npm install
CMD ["git", "pull"]
CMD ["rm", "log/log.log"]
CMD ["touch", "log/log.log"]
CMD ["node", "index.js"]  
