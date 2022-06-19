import request from '../utils/request'


export const getNewsSearch = (query) => {
    return request({
            url: 'jianli/getNewsSearch',
            method: 'post',
            data:JSON.stringify(query)
        }
    )
}