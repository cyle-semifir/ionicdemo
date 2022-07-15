import {Component, OnInit} from '@angular/core';
import {ProfilService} from "../../service/profil.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  private users : [] = []

  constructor(private service: ProfilService) {
  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers = () => {
    this.service.getUsers().subscribe(data => {
      console.log(data)
      this.users = data
    })
  }

}
