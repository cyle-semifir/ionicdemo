import {CompanyModel} from "./companyModel";

export class ProfilModel {
  public name: string
  public email: string
  public company: CompanyModel

  constructor(name, email, company) {
    this.name = name
    this.email = email
    this.company = company
  }
}
