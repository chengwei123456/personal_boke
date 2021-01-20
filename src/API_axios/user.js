import axios from "./http"
import base from "./base"

// 获取数据库的所有博客
export function allBlogs(endID){
    return axios({
        url:`${base.url}/search`,
        method:'post',
        data:endID,
    })
};

// 按ID查询
export function search_id(id){
    return axios({
        url: `${base.url}/search_id`,
        method:'post',
        data: id
    })
}

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

//获取java类别的所有博客

export function get_java_blogs(tag){
    return axios({
        url: `${base.url}/get_java_blogs`,
        method: 'post',
        data: tag,
    })
}
// 获取web类别的所有博客
export function get_web_blogs(tag){
    return axios({
        url: `${base.url}/get_web_blogs`,
        method: 'post',
        data: tag,
    })
}
// 获取python类别的所有博客
export function get_python_blogs(tag){
    return axios({
        url: `${base.url}/get_python_blogs`,
        method: 'post',
        data: tag,
    })
}
// 获取php类别的所有博客
export function get_php_blogs(tag){
    return axios({
        url: `${base.url}/get_php_blogs`,
        method: 'post',
        data: tag,
    })
}
// 获取其他类别的所有博客
export function get_other_blogs(tag){
    return axios({
        url: `${base.url}/get_other_blogs`,
        method: 'post',
        data: tag,
    })
}

// 获取各个类别博客的数量
export function get_blogs_count(){
    return axios({
        url: `${base.url}/get_blogs_count`,
        method: 'post'
    })
}

// 按顺序排序
export function read_sort(){
    return axios({
        url: `${base.url}/read_sort`,
        method: 'post'
    })
}