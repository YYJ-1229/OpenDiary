FROM bitnami/node:9 as builder
ENV NODE_ENV="production"

# Copy app's source code to the /app directory
COPY . /app

# The application's directory will be the working directory
WORKDIR /app

# Install Node.js dependencies defined in '/app/packages.json'
RUN npm install

FROM bitnami/node:9-prod
ENV NODE_ENV="production"
COPY --from=builder /app /app
WORKDIR /app
ENV PORT 3000
# ENV DATABASE_HOST '34.64.84.49'
# ENV DATABASE_NAME 'opendiary'
# ENV DATABASE_USERNAME 'opendiary'
# ENV DATABASE_PASSWORD 'oss'
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
