import config from '../config/server';
import base64 from 'base-64';
import rp from 'request-promise';
import UpstreamError from '../util/UpstreamError';

class UserLoopbackClient {
    static async register(user) {
        console.log('register', user)
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
}

export default UserLoopbackClient;