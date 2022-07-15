import {Component, OnInit} from '@angular/core';
import {ProfilService} from "../../service/profil.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  private users : [] = []

  // on importe le service
  constructor(private service: ProfilService) {
  }

  ngOnInit() {
    this.getUsers()
  }

  // on récupère les datas du service
  getUsers = () => {
    this.service.getUsers().subscribe(data => {
      this.users = data
    })
  }

}
