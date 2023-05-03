const loggedIn = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
        return true;
    } else {
        return false;
    }
    };

    const setToken = (token: string) => {
        sessionStorage.setItem("token", token);
    };

    const getToken = () => {
        const token = sessionStorage.getItem("token");
        if (token) {
            return token;
        } else {
            return "";
        }
    };

    const removeToken = () => {
        sessionStorage.removeItem("token");
    };

    const decodeToken = () => {
        const token = sessionStorage.getItem("token");
        if (token) {
            const base64Url = token.split(".")[1];
            const base64 = base64Url.replace("-", "+").replace("_", "/");
            return JSON.parse(window.atob(base64));
        } else {
            return {};
        }
    };


const JWTHandler = {
    loggedIn,
    setToken,
    getToken,
    removeToken,
    decodeToken,
    };

export default JWTHandler;
