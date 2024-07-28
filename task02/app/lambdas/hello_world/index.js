
exports.handler = async (event) => {
    const method = JSON.stringify(event.requestContext.http.method);
    const path = JSON.stringify(event.requestContext.http.path);

    const goodRes = {
        statusCode: 200,
        body: JSON.stringify("Hello from Lambda")
    }

    const badRes = {
        statusCode: 400,
        body: JSON.stringify(`Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`)
    }

    if (path === JSON.stringify("/hello")) {
        return goodRes;
    }
    else {
        return badRes;
    }
};
