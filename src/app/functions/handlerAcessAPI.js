'use server'
const url="https://aula-17-10-m2vq19h7a-y1asz.vercel.app";

const getUserAuthenticated = async (user) => {
    console.log(user)
   const responseOfApi = await fetch(url + "/user/authenticated",
    {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    });
    const useAuth = await responseOfApi.json();
    console.log(useAuth);
    return useAuth;
}

const getUsers = async () =>{
    const responseOfApi = await fetch(url+ "/users", {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });
    const users = await responseOfApi.json();
    return users
}
export { getUsers, getUserAuthenticated };