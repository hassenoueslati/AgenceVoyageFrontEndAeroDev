FROM node:16.15.1
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g @angular/cli@
COPY . /usr/src/app
CMD ng serve --host 0.0.0.0 --port 4200