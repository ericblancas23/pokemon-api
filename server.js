const app = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');

app.use(cors());

app.us('/graphql', graphqlHTTP({
    schema,
    graphql: true
}))


const PORT = process.env.PORT || 9000;
app.listen(PORT);