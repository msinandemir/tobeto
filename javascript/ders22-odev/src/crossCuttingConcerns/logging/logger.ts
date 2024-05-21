export  class BaseLogger{

    log(data:string){
        console.log("default logger");
        
    }
}

export class ElasticLogger extends BaseLogger{
    log(data:string){
        console.log("logged by elastic", data);
        
    }
}

export class MongoLogger extends BaseLogger{
    log(data:string){
        console.log("logged by mongo",data);
        
    }
}