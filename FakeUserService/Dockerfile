FROM node:current-alpine
RUN apk update && apk add git
RUN git clone https://github.com/anhubbard/SE3Project.git
WORKDIR /SE3Project/FakeUserService
RUN npm install
CMD ["git", "pull"]
CMD ["node", "index.js"]
