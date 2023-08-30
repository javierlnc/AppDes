import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtRequest } from '../models/jwt-request';
import { JwtResponse } from '../models/jwt-response';
import { tap, shareReplay } from 'rxjs/operators';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private dateService : DateService) { }

  login(username:string, password: string): Observable<JwtResponse>{
    let jwtRequest: JwtRequest = { username: username, password: password };
    return this.http.post<JwtResponse>('http://localhost:8080/authenticate',
    jwtRequest).pipe(
        tap((resp: JwtResponse) => this.setSesion(resp)),
        shareReplay()
    );
  }
  private setSesion(authResult: JwtResponse){
    const expiresAt = authResult.expirationDate;
    console.log("Token expires at " + expiresAt);
    console.log("Token expires at " + expiresAt);
    console.log("Token date and time is " + this.dateService.getShortDateAndTimeDisplay(expiresAt));
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }
  logout(){
    localStorage.removeItem('id_token');
    localStorage.removeItem('expire_at');
  }
  public isLoggedIn(): boolean {
    return Date.now() < this.getExpiration();
}

isLoggedOut(): boolean {
    return !this.isLoggedIn();
}

getExpiration(): number {
    const expiration = localStorage.getItem("expires_at");
    if(expiration === null){
      console.log("Ocurrio un error en experition date es igual a null")
      return 0;
    }else{
      const expiresAt = JSON.parse(expiration);
      return expiresAt;
    }
}    
}

