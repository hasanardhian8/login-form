import bcrypt from 'bcrypt';
const SALT_ROUND = 10;

const signup = async (req, res) => {
    const { username,email, password,handphone } = req.body;

    let hashPassword = password;
    hashPassword = await bcrypt.hash(hashPassword, SALT_ROUND);
    try {
        const result = await req.context.models.users.create({
            user_name : username,
            user_email : email,
            user_password: hashPassword,
            user_handphone : handphone,
            user_roles :{
                usro_role_id:1
            }
        },{
            include:req.context.models.user_roles
        });
        const {user_name,user_email} = result.dataValues;
        res.send({user_name,user_email});
    } catch (error) {
        res.status(404).send(error.message);
    }
}

// use sigin with token in authJWT
const signin = async(req,res)=>{
    const {email,password} = req.body;
    console.log(email);

    try {
        const result = await req.context.models.users.findOne({
            where : {user_email : email}
        });
        const {user_name,user_email,user_password} = result.dataValues;
        const compare = await bcrypt.compare(password,user_password);
        if(compare){
            return res.send({user_name,user_email});
        }else{
            console.log("bukan");
            return res.sendStatus(404);
        }
        
    } catch (error) {
        console.log("ini");
        return res.sendStatus(404);
    }
}

export default {
    signup,
    signin
}