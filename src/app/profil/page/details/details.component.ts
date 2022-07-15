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

  constructor(private route : ActivatedRoute, private service: ProfilService, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUserById();
    this.service.getUserById(this.id);
  }

  getUserById = () : any => {
    this.service.subject.subscribe(value => this.user = value)
  }

  deleteUser = () : any => {
    this.service.deleteById(this.id).subscribe(value => {
        this.router.navigate(['/profil'])
    })
  }



}
