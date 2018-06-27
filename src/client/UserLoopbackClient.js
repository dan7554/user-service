import config from '../config/server';
import base64 from 'base-64';
import rp from 'request-promise';
import UpstreamError from '../util/UpstreamError';

class UserLoopbackClient {
    static async logout(auth) {
        try {
            return await rp({
                ...config.default.userLoopbackClient.logout,
                headers: {
                    Authorization: auth
                }
            })
        } catch (error) {
            throw new UpstreamError(error);
        }
    }
    static async register(user) {
        try {
            return await rp({
                ...config.default.userLoopbackClient.register,
                body: {
                    email: user.email, 
                    password: base64.decode(user.password) 
                }
            })
        } catch (error) {
            throw new UpstreamError(error);
        }
    }
    static async login(user) {
        try {
            return await rp({
                ...config.default.userLoopbackClient.login,
                body: {
                    email: user.email,
                    password: base64.decode(user.password)
                }
            })
        } catch (error) {
            throw new UpstreamError(error);
        }
    }
}

export default UserLoopbackClient;