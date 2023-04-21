export default (post = [], action) => {
    switch (action.type) {
        case "get_posts":
            return action.payload
        case "add_post":
            return action.payload
        default:
            return post
    }
}