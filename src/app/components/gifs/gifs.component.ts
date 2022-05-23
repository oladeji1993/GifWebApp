import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit {
  @Input() gifs: any[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  viewDetails(item:any){
    let id = item.id
    this.router.navigate([`/details/${id}`])
  }

}
