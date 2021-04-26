import Cookies from 'universal-cookie'

export let apiPost = (url,port,route,body) => {
    // get key
    const cookies = new Cookies
    const key = cookies.get('key')
    return (
        fetch(url + port + route, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + key
            },
            method: 'POST',
            body: body
        })
        .then(res => res.json())
        .then(resJson => {
            return {response: resJson}
        })
    )
}
export default apiPost