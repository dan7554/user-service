class UnknownServerError  {
    constructor(error) {
        this.error = error;
    }

    getMessage() {
        return  {
            type: 'UnknownServerError',
            message: this.error
        }
    }
}

module.exports = UnknownServerError; 