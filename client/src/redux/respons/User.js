export default (user = [], action) => {
    switch(action.type){
        case "get_user":
            return action.payload;
        default:
            return user;
    }
}