module.exports =  {
    default: {
        env: "default",
        userLoopbackClient: {
            register: {
                method: 'POST',
                uri: 'http://localhost:3333/api/Users',
                body: {
                    email: '', 
                    password: ''
                },
                json: true 
            },
            login: {
                method: 'POST',
                uri: 'http://localhost:3333/api/Users/login',
                body: {
                    email: '',
                    password: ''
                },
                json: true
            },
            logout: {
                method: 'POST',
                uri: 'http://localhost:3333/api/Users/logout',
                body: {},
                json: true,
                headers: {
                    Authorization: ''
                }
            }
        }
    },
    production: {
        env: "prod"
    }
}