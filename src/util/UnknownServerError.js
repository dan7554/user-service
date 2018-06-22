class UnknownServerError  {
    constructor(error) {
        this.error = error;
    }

    getMessage() {
        return {Error: error}
    }
}




module.exports = UnknownServerError; 