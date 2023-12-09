const axios = require('axios');

class ApiCallHelper {
    async apiCall(
        url = '',
        method = 'GET',
        payload = {},
        headers = { 'content-type': 'application/json' }
    ) {
        try {

            const options = {
                method,
                url,
            };

            if (headers && Object.keys(headers).length > 0) {
                options.headers = headers;
            }

            if (payload && Object.keys(payload).length > 0) {
                options.data = JSON.stringify(payload);
            }

            const result = await axios(options);
            return result.data;

        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = new ApiCallHelper();
