export class UserResponse{
  public alert_time:number;
  public authentication_token:string;
  public refresh_token:string;
  public refresh_token_expire_time:string;
  public user:Object;
  constructor(alert_time:number,authentication_token:string,refresh_token:string,refresh_token_expire_time:string,user:Object){
    this.alert_time = alert_time;
    this.authentication_token = authentication_token;
    this.refresh_token = refresh_token;
    this.refresh_token_expire_time=refresh_token_expire_time;
    this.refresh_token_expire_time=refresh_token_expire_time;
    this.user = user;
}

}
