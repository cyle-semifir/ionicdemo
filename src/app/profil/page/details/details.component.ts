import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProfilService} from "../../service/profil.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  private id: string = '1';
  private user : any;
  private img = '/assets/img/cat.jpeg'
  private avatar = '/assets/icon/profilIcon.png'

  // on récupère le module activateroute, le router et le service
  constructor(private route : ActivatedRoute, private service: ProfilService, private router: Router) { }

  ngOnInit() {
    // on récupère l'id dans l'url
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUserById();
    this.service.getUserById(this.id);
  }

  getUserById = () : any => {
    // on récupère les données du service
    this.service.subject.subscribe(value => this.user = value)
  }

  deleteUser = () : any => {
    // on redirige vers la page des users
    this.service.deleteById(this.id).subscribe(value => {
        this.router.navigate(['/profil'])
    })
  }



}
