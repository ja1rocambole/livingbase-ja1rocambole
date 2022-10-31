const baseUrl = "https://m2-api-living.herokuapp.com/";

async function getPosts() {
    const request = await fetch(baseUrl + "news");
    console.log(request)
    const response = await request.json()
    console.log(response.news)
    return response
}

async function getPostId(idPost) {
     const request = await fetch(baseUrl + `news/${idPost}`);
    console.log(request)
    const response = await request.json()
    console.log(response)
    return response
}

export{getPosts, getPostId}