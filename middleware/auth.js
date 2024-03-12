async function authLogin(req,res,next){
    try {
        if(req.session.user){
            // res.redirect("/error")
        }else{
            res.redirect("/")
        }
        next()
    } catch (error) {
        console.log(error);
    }
}

async function authLogout(req,res,next){
    try {
        if(req.session.user){
            res.redirect("/deshboard")
        }else{
            // res.redirect("/error")
            // res.redirect("/")
        }
        next()
    } catch (error) {
        console.log(error);
    }
}

module.exports = {authLogin,authLogout}

