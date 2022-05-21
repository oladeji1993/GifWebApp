import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-gif-details',
  templateUrl: './gif-details.component.html',
  styleUrls: ['./gif-details.component.scss']
})
export class GifDetailsComponent implements OnInit {

  singleGif: any
  id:any

  constructor(    
    private activatedRoute: ActivatedRoute, 
    private dataService: DataService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });
    this.getGifsDetails()
  }


  getGifsDetails(){
    this.dataService.gifSingleFetch(this.id).subscribe((response:any)=>{
      this.singleGif = response.data;
      console.log(this.singleGif);
    })
  }

}
