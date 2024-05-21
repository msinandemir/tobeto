export default class DataError{
    message:string
    data:object
    
    constructor(message:string,data:object){
        this.message = message,
        this.data = data
    }
}