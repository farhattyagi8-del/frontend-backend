class APIError extends Error {
    constructor(
        statuscode,                      // this file is Bassiclly hanfle the error of api and we will pass the status code and the error message to the error handler
        message= "something went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statuscode = statuscode  //we handle the status code in the controller and pass it to the error handler
        this.error = error
        this.data = null
        this.message = message
        this.success = false;
        this.errors = errors


        if (statck) {
            this.stack = statck

        }else 
        {
            Error.captureStackTrace(this, this.constructor)
        }



    }
}


    export  {APIError}