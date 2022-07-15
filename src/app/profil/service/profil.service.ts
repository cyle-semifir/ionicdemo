import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment as env} from "../../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {ProfilModel} from "../model/profilModel";
import {CompanyModel} from "../model/companyModel";

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private company = new CompanyModel('','')
  private profil = new ProfilModel('','', this.company)

  public subject = new BehaviorSubject(this.profil)

  constructor(private http : HttpClient) { }

  getUsers = (): any => {
    return this.http.get<any>(env.URL)
  }

  getUserById = (id: string): any => {
    this.http.get<any>(`${env.URL}/${id}`).subscribe(value => this.subject.next(value))
  }

  deleteById = (id: string): any => {
    return this.http.delete(`${env.URL}/${id}`)
  }

}
