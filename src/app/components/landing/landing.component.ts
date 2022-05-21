import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  show = false
  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
  }


  search(searchKey: string) {
    if(searchKey !== ''){
      this.show = false;
      this.data.getGifsData(searchKey);
    }else{
      this.show = true;
    }
  }

}
