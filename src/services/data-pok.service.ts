import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataPokService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  //Obtiene pokemon
  getPokemons(index: any){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
}
