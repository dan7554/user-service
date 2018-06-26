class UpstreamError  {
    constructor(error) {
        this.error = error;
    }

    getMessage() {
        return  {
            type: 'UpstreamError',
            message: this.error
        }
    }
}

module.exports = UpstreamError; 