import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

type GenericObject = { [key: string]: any };

type params = HttpParams | {[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>}

@Injectable({
    providedIn: 'root',
  })
  export class ApiService {

     http:HttpClient = inject(HttpClient);

     callApi(
        api_name:string,
        flag:number,
        payload:GenericObject | null = null,
        params:params | undefined = undefined,
        observe:undefined | 'body' = 'body'){
            if(flag == 0){
                return this.http.get(
                    api_name,
                    {
                        params:params,
                        observe:observe
                    }
                )
            }
            else if(flag == 1){
                return this.http.post(
                    api_name,payload,
                    {
                        params:params,
                        observe:observe
                    }
                )
            }
            else {
                return this.http.delete(
                    api_name,
                    {
                        params:params,
                        observe:observe
                    }
                )  
            }
     }

  }