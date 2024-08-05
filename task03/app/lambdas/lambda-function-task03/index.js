exports.handler = async (event) => {
    const method = event.requestContext.http.method;
    const path = event.requestContext.http.path;

    const goodRes = {
        'statusCode': 200,
        'message': "Hello from Lambda"
    }

    const badRes = {
        'statusCode': 400,
        'message': `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`
    }

    if (JSON.stringify(path) === JSON.stringify("/hello")) {
        return JSON.stringify(goodRes);
    }
    else {
        return JSON.stringify(badRes);
    }
};
