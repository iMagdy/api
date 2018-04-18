# Node LTS 
# https://github.com/nodejs/docker-node/blob/b3ca6573b5c179148b446107386ae96ac6204ad3/8/alpine/Dockerfile
FROM node:8.11.1-alpine

# Update OS packages
RUN apk update

# Add yarn 
# https://yarnpkg.com
RUN apk add yarn

# Add pm2 globally
# http://pm2.keymetrics.io
RUN yarn global add pm2

# Copy process config
COPY processes.config.js /

# Change work directory to /app
WORKDIR /app

# Install node modules, then run process file, and finally 
# keep tailing pm2 logs.
# NOTE: change --env production to --env development if you want to enable 
# auto-reload on change (watch mode), extra debugging, and NODE_ENV=development
# --env production will set NODE_ENV=production
CMD yarn install && pm2 start /processes.config.js --env production && pm2 logs