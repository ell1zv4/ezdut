exports.handler = async function(event, context) {
    const url = process.env.PRIVATE_URL;
    return {
        statusCode: 200,
        body: JSON.stringify({ url: url })
    };
};
