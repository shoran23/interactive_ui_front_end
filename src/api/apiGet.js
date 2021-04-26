import Cookies from 'universal-cookie'

export let apiGet = (url,port,route) => {
    const cookies = new Cookies
    let key = cookies.get('key')
    return (
        // get key
        fetch(url + port + route, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + key
            }
        })
        .then(res => res.json())
    )
}