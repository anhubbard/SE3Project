FROM node:current-alpine
RUN apk update && apk add git
ARG CACHEBUST=1
RUN git clone https://github.com/anhubbard/SE3Project.git
WORKDIR /SE3Project/OrderingService
RUN npm install
CMD ["git", "pull"]
CMD ["node", "index.js"]  
