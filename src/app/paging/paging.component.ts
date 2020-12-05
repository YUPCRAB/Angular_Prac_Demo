import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Output() newPage = new EventEmitter();
  @Input() page: number;

  constructor() { }

  ngOnInit(): void {
  }

  btnBackClicked(){
    if(this.page > 1)
    {this.newPage.emit(this.page = this.page - 1);}
  }

  btnNextClicked(){
    this.newPage.emit(this.page = this.page + 1);
  }
}
