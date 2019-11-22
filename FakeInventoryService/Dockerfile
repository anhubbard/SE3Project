FROM node:current-alpine
RUN apk update && apk add git
RUN git clone https://github.com/anhubbard/SE3Project.git
WORKDIR /SE3Project/FakeInventoryService
RUN npm install
CMD ["git", "pull"]
CMD ["touch", "invetory.txt"]
CMD ["node", "index.js"]
