exports.handler = async (event) => {
  const url = process.env.PRIVATE_URL;
  return {
    statusCode: 200,
    body: JSON.stringify({ url }), 
  };
};
