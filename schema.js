const axios = require('axios');

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList
} = require('graphql');

const Pokemons = GraphQLObjectType({
    name: 'Pokemon', 
    fields: () => ({
        id: { GraphQLInt },
        is_default: { GraphQLBoolean },
        name: { GraphQLString },
        base_experience: { GraphQLInt }
    })
});

const Abilities = GraphQLObjectType({
    name: 'Abilities',
    fields: () => ({
        id: { GraphQLInt },
        name: { GraphQLString},
        is_main_series: { GraphQLBoolean }
    })
});

const RootQuery = GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        
    }
})