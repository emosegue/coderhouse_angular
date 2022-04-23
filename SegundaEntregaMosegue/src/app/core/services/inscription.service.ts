import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscription } from '../models/inscription.model';

@Injectable({
  providedIn: 'root',
})
export class InscriptionService {
  private inscriptionsUrl =
    'https://625eb1fd873d6798e2ac43d3.mockapi.io/api/v1/inscriptions';

  constructor(private httpClient: HttpClient) {}

  getInscriptions$(): Observable<Inscription[]> {
    return this.httpClient.get<Inscription[]>(this.inscriptionsUrl);
  }

  deleteInscription(idInscription: number): Observable<any> {
    return this.httpClient.delete(`${this.inscriptionsUrl}/${idInscription}`);
  }

  //indico a traves del subject que se genero un nuevo evento.
  addInscription(newInscription: Inscription): Observable<any> {
    return this.httpClient.post(`${this.inscriptionsUrl}`, newInscription);
  }

  updateInscription(modifiedInscription: Inscription): Observable<any> {
    return this.httpClient.put(
      `${this.inscriptionsUrl}/${modifiedInscription.idInscription}`,
      modifiedInscription
    );
  }

  getNewId() {
    this.httpClient.get(this.inscriptionsUrl).subscribe(inscriptions => {
      let inscriptionsArray = inscriptions as Inscription[];
      return inscriptionsArray.length + 1;
    });
    return 0;
  }
}
