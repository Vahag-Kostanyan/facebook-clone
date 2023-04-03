export default (photo = {}, action) => {
    switch(action.type){
        case "get_images": 
            return action.payload
        default:
            return photo
    }
}