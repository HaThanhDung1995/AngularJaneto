import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dung-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  constructor() { }
  Books: Number[] = [1, 2, 3, 4, 5, 6, 7];
  ngOnInit() {
  }

}
