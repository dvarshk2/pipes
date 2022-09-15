import { Component, OnInit } from '@angular/core';
interface Ifiles {
  name:string;
  size : number;
  type :string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  title = 'pipes';
  text = 'This is Varshketu Dadhale from Basmathnagar Dist. Hingoli';
  texT = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laboriosam! Vitae ut tempore soluta corporis, non recusandae. Voluptates at harum quos maiores architecto, natus reprehenderit obcaecati numquam accusamus minus enim impedit error voluptatum ad ex atque molestias optio? Doloremque eos assumenda consectetur enim delectus eveniet error nihil laboriosam dicta corrupti.';
  files! : Ifiles[] ;
  course ={
    tiTle : 'MEAN Stack',
    student : 30232,
    rating : 4.945,
    price : 198.90,
    releaseDate : new Date(2018, 3, 8)
  }
  ngOnInit(): void {
   this.files=[
    {
      name : 'Logo.svg',
      size: 2255881,
      type :'SVG'
    },
    {
      name :'HeroImg.jpg',
      size: 3255891,
      type:'JPG'
    },
    {
      name: 'bgImg.png',
      size:8855996,
      type:'PNG'
    }
   ]
  }
   
}
