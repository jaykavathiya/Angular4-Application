/**
 * Created by Jay on 7/17/2017.
 */
export class LoggingService{
  OnStatusChange(status:string){
    console.log('A server status changed, new status: ' + status);
  }
}
