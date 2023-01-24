FROM quay.io/teamolduser/filedckr

COPY package.json .

RUN yarn install

RUN yarn add @adiwajshing/baileys@4.4.0

RUN yarn global add forever 

COPY . .

CMD ["forever", "index.js"]