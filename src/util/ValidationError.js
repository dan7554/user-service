class ValidationError  {
    constructor(error) {
        this.error = error;
    }

    getMessage() {
        return  {
            type: 'ValidationError',
            message: this.error
        }
    }
}

module.exports = ValidationError; 