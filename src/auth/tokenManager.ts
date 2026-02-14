let accessToken: string | null = null;

export default {
    setAccessToken(token: string) {
        accessToken = token;
    },
    getAccessToken() {
        return accessToken;
    },
    clearAccessToken() {
        accessToken = null;
    }
}