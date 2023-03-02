exports.login = async(req, res) => {
    try{
        res.status(200).json("login");
    }catch(error) {
        console.log(error);
    }
}


exports.signUp = async(req, res) => {
    try{
        console.log(req.body);
    }catch(error) {
        console.log(error);
    }
}