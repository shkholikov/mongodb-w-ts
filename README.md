### MongoDB w/ Express in TypeScript 🧩

ℹ️ This is an Express REST API application that store/retrieve/update/delete data in MongoDB. 

Very soon I will also add a Swagger page with endpoints and deploy the application to make it accessible for everyone.  

For now you can clone it to test locally. Clone this repo using the following command: 
```
git clone https://github.com/shkholikov/mongodb-w-ts.git
```
Install all dependencies: 
```
npm i
```
Take a look at .env.example to configure this app with your MongoDB Instance.
```
DB_CONN_STRING=""
DB_NAME=""
LANGUAGES_COLLECTION_NAME=""
```
Once you have done this, let's explore the application. Run the application by running the following command:
```
npm run start
```
The application listens on http://localhost:8080. You can use an API Platform [Postman](https://www.postman.com) to test CRUD operations.

*Swagger and Live demo coming soon!* ℹ️

