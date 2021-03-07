import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author-thumb',
  templateUrl: './author-thumb.component.html',
  styleUrls: ['./author-thumb.component.scss']
})
export class AuthorThumbComponent implements OnInit {

  @Input() author;
  constructor() { }

  ngOnInit(): void {
  }

}
