import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'features-library',
  imports: [],
  templateUrl: './library.html',
  styleUrl: './library.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Library {

}
