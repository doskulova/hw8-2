const getPosts = async() => {
    let post = await fetch ('https://jsonplaceholder.typicode.com/posts')
    let posts  = await post.json()
    let p = posts.map(posts => ({id: posts.id, title:posts.title}))
    
    console.log(p)
}
getPosts()