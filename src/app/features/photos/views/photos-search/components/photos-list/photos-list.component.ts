import { Component, Input } from '@angular/core';
import { Photo } from '../../../../shared/interfaces/photo.interface';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss'],
})
export class PhotosListComponent {
  @Input() public photos!: Photo[] | null;
}
