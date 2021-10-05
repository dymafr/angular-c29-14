import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-photos-searchbar',
  templateUrl: './photos-searchbar.component.html',
  styleUrls: ['./photos-searchbar.component.scss'],
})
export class PhotosSearchbarComponent {
  @Output() public search: EventEmitter<string> = new EventEmitter();
  public inputSearch!: string;

  constructor() {}
}
