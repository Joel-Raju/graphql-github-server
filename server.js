import express from 'express';
import GraphQLHTTP from 'express-graphql';
import schema from './schema';

const app = express();
const PORT = "5000";

app.use("/GraphQL", GraphQLHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
	console.log("Server listening at port:" + PORT);
});