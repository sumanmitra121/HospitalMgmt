import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
enum ThemeType {
  dark = 'dark',
  default = 'default',
}

export type LayoutType = 'horizontal' | 'vertical'


@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme = ThemeType.default;
  currentLayout$ = new BehaviorSubject<LayoutType>('vertical');
  appTheme$ = new BehaviorSubject<string>('default');
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document) {}

  private reverseTheme(theme: string): ThemeType {
    return theme === ThemeType.dark ? ThemeType.default : ThemeType.dark;
  }

  private removeUnusedTheme(theme: ThemeType): void {
    this.document.documentElement.classList.remove(theme);
    const removedThemeStyle = this.document.getElementById(theme);
    if (removedThemeStyle) {
        this.document.head.removeChild(removedThemeStyle);
    }
  }

  private loadCss(href: string, id: string): Promise<Event> {
    return new Promise((resolve, reject) => {
      // if (isPlatformBrowser(this.platformId)) {
      const style = this.document.createElement('link');
      style.rel = 'stylesheet';
      style.href = href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      this.document?.head?.append(style);
    });
  }

  public loadTheme(firstLoad = true): Promise<Event> {
    const theme = this.currentTheme;
    if (firstLoad) {
      this.document.documentElement.classList.add(theme);
    }
    return new Promise<Event>((resolve, reject) => {
      this.loadCss(`${theme}.css`, theme).then(
        (e) => {
          if (!firstLoad) {
            this.document.documentElement.classList.add(theme);
          }
          this.removeUnusedTheme(this.reverseTheme(theme));
          resolve(e);
        },
        (e) => reject(e)
      );
    });
  }

  public toggleTheme(): Promise<Event> {
    this.currentTheme = this.reverseTheme(this.currentTheme);
    this.appTheme$.next(this.currentTheme);
    return this.loadTheme(false);
  }

  public toggleLayout(layoutType:LayoutType):void {
       this.currentLayout$.next(layoutType);   
  }
  public setAppTheme(themeType:string){
      this.appTheme$.next(themeType)
  }
}
