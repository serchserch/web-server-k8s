FROM node:10.15

# Set Workdir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install project
COPY . /usr/src/app

RUN npm install --production

# Expose port
EXPOSE 3000

# Start server
CMD ["npm", "start"]