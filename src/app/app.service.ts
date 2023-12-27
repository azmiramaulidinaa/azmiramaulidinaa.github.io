import { Injectable } from '@angular/core';
import { AppRepository } from './app.repository';
import { ResponseCollection } from './app.collection';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private repository: AppRepository) {}

  getProfileData(): Observable<ResponseCollection> {
    return this.repository.getData();
  }
}
