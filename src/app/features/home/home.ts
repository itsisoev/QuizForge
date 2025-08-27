import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UiLoader} from '../../shared/components/ui-components/ui-loader/ui-loader';

@Component({
  selector: 'features-home',
  imports: [
    UiLoader
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {

}
