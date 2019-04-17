import axios from "axios";

// import Cookies from "universal-cookie";
// const cookies = new Cookies();

export const verifyToken = (token) =>{
    console.error("verifyToken", token);

    return axios.post(`http://localhost:5000/auth/verifyToken`,
        { token })
        .then(res => {
            console.log('verifyToken  then', res);
            if(res.data.response === "success"){
                return true;
            }
            else{
                return false;
            }
        })
        .catch(err=>{
            console.error('verifyToken catch', err);
            return err;
        });
};


export const authenticate =  (token) =>{
    console.error("authenticate", token);

    return new Promise(async(resolve, reject)=>{
        const hasAccess = await verifyToken(token);
        console.error("authenticate hasAccess", hasAccess);

        if(hasAccess){
            console.error("resolve");
            resolve(true);
        }else{
            console.error("reject");
            reject();
        }
    });
};

// export const isAuthorized =()=>{
//
// };

export const getUserToken =()=>{
    return axios.get(`/auth/userToken`)
        .then(res => {
            console.log('userToken  then', res);
            return res.data.token;
        })
        .catch(err=>{
            console.error('userToken catch', err);
            return err;
        });
};

