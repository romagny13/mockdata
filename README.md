# Mock data example with Faker.js and Node.js

##1.Create schema "mockDataSchema.js"

<a href="https://github.com/marak/Faker.js/">Documentation Faker.js</a>

##2.generate json db 

install "json-schema-faker"

Create a node server "generateMockData.js"

Script (package.js)
```
 "scripts": {
    "generate-mock-data": "babel-node build/generateMockData",
  },
```

(install babel packages for es6 support)

##3.serve data

Install "json-server"

```
  "scripts": {
    "prestart-mockapi": "npm run generate-mock-data",
    "start-mockapi": "json-server --watch ./db.json --port 3001",
  },
```

start

```
npm run start-mockapi
```

Go "http://localhost:3001/posts"

Use DHC, Postman,... (chrome extensions) for testing get,post,delete requests




