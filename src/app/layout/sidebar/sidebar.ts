import {ChangeDetectionStrategy, Component, effect, signal} from '@angular/core';
import {ILink} from '../../shared/models/link.model';
import {ICONS} from '../../shared/constants/icons.constant';

@Component({
  selector: 'layout-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sidebar {
  collapsed = signal(this.loadCollapsed());
  links = signal<ILink[]>([
    {
      href: '#',
      label: 'Главная',
      icon: ICONS.HOME,
    },
    {
      href: '#',
      label: 'Ваша библиотека',
      icon: ICONS.FOLDER,
    }
  ])

  constructor() {
    effect(() => {
      localStorage.setItem('sidebar-collapsed', JSON.stringify(this.collapsed()));
    });
  }


  toggle() {
    this.collapsed.update(c => !c);
  }

  private loadCollapsed(): boolean {
    const saved = localStorage.getItem('sidebar-collapsed');
    return saved ? JSON.parse(saved) : false;
  }
}
