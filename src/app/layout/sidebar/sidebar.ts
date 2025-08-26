import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {ILink} from '../../shared/models/link.model';

@Component({
  selector: 'layout-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sidebar {
  collapsed = signal(false);
  links = signal<ILink[]>([
    {
      href: '#',
      label: 'Главная',
      icon: 'assets/svg/home.svg',
    },
    {
      href: '#',
      label: 'Ваша библиотека',
      icon: 'assets/svg/folder.svg',
    }
  ])


  toggle() {
    this.collapsed.update(c => !c);
  }
}
