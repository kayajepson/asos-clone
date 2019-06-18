import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  womensCategories: Array<string> = ['socks', 'pants', 'underwear', 'shirts', 'shoes', 'coats', 'hats', 'accessories']

  constructor(private router: Router){}

  goToDetailPage(clickedCat: string){
    this.router.navigate(['women', clickedCat]);
  }

}
