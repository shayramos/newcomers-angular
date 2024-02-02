import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NifValidatorService {

  private baseUrl = 'https://www.nif.pt';
  private apiKey = '94a411826e8b20a596e7d001cda4f7fb';

  private headers= new HttpHeaders()
    // .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private readonly httpService: HttpClient) { }
  
  // http://www.nif.pt/?json=1&q=509442013&key=key
  getNIF(nif: string): Observable<any> {
    return this.httpService.get(`${this.baseUrl}\?json=1&q=${nif}&key=${this.apiKey}`,
    { 'headers': this.headers });
  }
}
