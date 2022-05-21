import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit, OnDestroy {

  allGifs: any[] = [];
  subscription!: Subscription

  constructor(
    private dataService: DataService,
    private router: Router,
    private spinner: NgxSpinnerService,

  ) { }

  ngOnInit(): void {
    this.filteredGifs()

  }

  filteredGifs(){
    this.spinner.show()
    this.subscription = this.dataService.searchGifs().subscribe((resp:any)=>{
    this.allGifs = resp
    this.spinner.hide()
    })
  }

  viewDetails(item:any){
    let id = item.id
    this.router.navigate([`/details/${id}`])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
