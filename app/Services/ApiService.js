const baseURL = 'http://localhost:4000';

const sendRequest = (url) => {
    console.log('url: ', url);
    return new Promise((resolve, reject) => {
        const queryString = `url=${encodeURIComponent(url)}`;
        fetch(`${baseURL}/getPageData?${queryString}`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                resolve(data.data)
            })
            .catch(error => {
                reject(error)
            });
    })
}

export default sendRequest;