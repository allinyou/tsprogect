import axios from 'axios';
import qs from 'qs';
// import VueCookie from 'vue-cookie';

const instance:any = axios.create({
    baseURL: process.env.VUE_APP_API_HOST,
    transformRequest: [(data:any) =>  {
        if (!data.uploadFlag){
            if (!data){
                data = {};
            }
            return  qs.stringify(data);
        }
        const params = new FormData();
        Object.keys(data).forEach(element => {
           params.append(element,data[element]);
        }); 
        return params;
    }],
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // application/x-www-form-urlencoded
    },
});

// 登录
const LoginAPI = {
     login: (data:any) => instance.post('/login', { ...data })
};




export { LoginAPI };
