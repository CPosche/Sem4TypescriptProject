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

    const verifyToken = () => {
        const token = sessionStorage.getItem("token");
        if (token) {
            const base64Url = token.split(".")[1];
            const base64 = base64Url.replace("-", "+").replace("_", "/");
            const decoded = JSON.parse(window.atob(base64));
            const exp = decoded.exp;
            const now = Date.now() / 1000;
            if (exp < now) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    };


const JWTHandler = {
    loggedIn,
    setToken,
    getToken,
    removeToken,
    decodeToken,
    verifyToken,
    };

export default JWTHandler;
