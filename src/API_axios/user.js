import axios from "./http"
import base from "./base"

// 获取数据库的所有博客
export function allBlogs(){
    return axios({
        url:`${base.url}/search`,
        method:'post',
    })
};

//更新阅读数量
export function Update_read(data){
    return axios({
        url:`${base.url}/id_UpData`,
        method:'post',
        data: data,
    })
}

// 删除博客
export function dele_Data(id){
    return axios({
        url: `${base.url}/dele_Data`,
        method: 'post',
        data:id
    })
}