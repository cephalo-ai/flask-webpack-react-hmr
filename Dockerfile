FROM continuumio/miniconda3

RUN apt-get update && apt-get install -y libpng-dev

RUN pip install Flask-Webpack
RUN pip install flask_restplus
RUN apt-get install -y libpng-dev

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g webpack && \
    npm install -g webpack-dev-server

ADD ./ /fork-project/

RUN npm install webpack -g
RUN npm install webpack-dev-server -g

RUN cd /fork-project && \
    npm install && \
    npm run build

WORKDIR /fork-project/

EXPOSE 5000
CMD python test_app/app.py
