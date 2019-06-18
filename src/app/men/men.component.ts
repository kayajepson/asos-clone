import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  mensCategories: Array<string> = ['socks', 'pants', 'underwear', 'shirts', 'shoes', 'coats', 'hats', 'accessories']

  constructor(private router: Router){}

  goToDetailPage(clickedCat: string){
    this.router.navigate(['men', clickedCat]);
  }
}
