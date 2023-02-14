exports.handler = async function (context, event, callback) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World',
    }),
  }
}
