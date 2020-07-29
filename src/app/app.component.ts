import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  theme = 'dark';
  title = 'ng-theme-hostcontext';

  changeTheme(): void {
    console.log('theme: ' + this.theme);
    // const body = document.getElementsByTagName('body')[0];

    this.setTheme(this.theme);
  }

  setTheme(theme): void {
    const body = document.getElementsByTagName('body')[0];
    body.setAttribute('class', theme); // 设置data-theme-style 属性
    this.theme = theme; // 用于界面显示
  }
}
