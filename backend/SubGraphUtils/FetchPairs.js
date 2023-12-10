const { createClient, cacheExchange, fetchExchange } = require("urql");
const { graphURLs } = require("./constants");
const pairQuery = `
    query {
        pairs {
            id
        }
    }
`;

const getPairs = async (chain) => {
    const client = createClient({
        url: graphURLs()[chain],
        exchanges: [cacheExchange, fetchExchange],
    });

    console.log(graphURLs()[chain]);
    console.log(client);

    try {
        const result = await client.query(pairQuery).toPromise();
        console.log(result.data);
        return result;
    } catch (error) {
        console.error('Error fetching pairs:', error);
        throw error; // You might want to handle or propagate the error depending on your use case.
    }
};

// Call the getPairs function
getPairs(8453);
