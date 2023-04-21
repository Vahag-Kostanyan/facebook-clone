export default (user = {}, action) => {
    switch(action.type){
        case "GET_USER":
            return action.payload;
        case "upload_avatar":
            return {
                ...user,
                avatar: action.payload
            };
        case "upload_cover_photo": 
            return {
                ...user,
                cover: action.payload
            }
        case "remove_cover_photo":
            if(user.cover){
                return delete user.cover;
            }
            return user;
        case "edit_bio":
            return {
                ...user, 
                bio: action.payload
            }
        default:
            return user;
    }
}