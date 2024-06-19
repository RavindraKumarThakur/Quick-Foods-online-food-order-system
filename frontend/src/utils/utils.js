export function checkAccessToken(){
    const tokenData = localStorage.getItem("accessToken")
    if(!tokenData){
        return false
    }
    return tokenData;
}
export function handleLogOut(){
    localStorage.removeItem("accessToken")
    return true
}
