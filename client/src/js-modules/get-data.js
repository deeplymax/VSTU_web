export function getDataFromServer(url, renderCallback) {
    fetch(url)
    .then(response => {
        if(response.ok) return response.json();
        throw new Error('Can`t find file');
    })
    .then(db => {
        renderCallback(db);
    })
    .catch(err => {
        console.error(err.message);
    });
}