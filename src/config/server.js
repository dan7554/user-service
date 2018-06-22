module.exports =  {
    default: {
        env: "default",
        userLoopbackClient: {
            register: {
                method: 'POST',
                uri: 'localhost:3333/Users',
                body: {
                    email: '', 
                    password: ''
                },
                json: true 
            },
            login: {
                method: 'POST',
                uri: 'localhost:3333/Users/login',
                body: {
                    email: '',
                    password: ''
                },
                json: true 
            },
            logout: {
                method: 'POST',
                uri: 'localhost:3333/Users/logout',
                body: {},
                json: true 
            },
            resetPass: {
                method: 'POST',
                uri: 'localhost:3333/Users/reset-password',
                body: {},
                json: true 
            }
        }
    },
    production: {
        env: "prod"
    }
}