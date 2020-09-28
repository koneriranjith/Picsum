export const getImages = ({limit, page}) => {
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`).then((response)=>{
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
            throw new Error('Something went wrong');
        }

        return response.json().then(function(data) {
           return data
        });
    })
}
