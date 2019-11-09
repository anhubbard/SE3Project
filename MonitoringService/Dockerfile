FROM node:current-alpine
VOLUME /Test
RUN apk update && apk add git
RUN git clone https://github.com/anhubbard/SE3Project.git
WORKDIR /SE3Project/MonitoringService
RUN npm install
CMD ["git", "pull"]
CMD ["node", "index.js"]
