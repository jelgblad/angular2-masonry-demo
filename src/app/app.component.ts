import { Component, ViewChild, AfterViewInit } from '@angular/core';

// Import AngularMasonry and MasonryOptions
import { AngularMasonry, MasonryOptions } from 'angular2-masonry';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit {

  // Inject AngularMasonry instance from template
  @ViewChild(AngularMasonry) masonry: AngularMasonry;

  // Some bricks
  // bricks = [
  //   { id: 0, size: 'sm' },
  //   { id: 1, size: 'sm' },
  //   { id: 2, size: 'lg' },
  //   { id: 3, size: 'sm' },
  //   { id: 4, size: 'md' },
  //   { id: 5, size: 'lg' },
  //   { id: 6, size: 'sm' },
  //   { id: 7, size: 'sm' },
  //   { id: 8, size: 'sm' },
  //   { id: 9, size: 'md' },
  //   { id: 10, size: 'lg' },
  //   { id: 11, size: 'sm' },
  //   { id: 12, size: 'sm' },
  //   { id: 13, size: 'sm' },
  //   { id: 14, size: 'lg' },
  //   { id: 15, size: 'lg' }
  // ];

  bricks = [
    { id: 0, image: 'http://www.planwallpaper.com/static/images/butterfly-wallpaper.jpeg' },
    { id: 1, image: 'http://www.planwallpaper.com/static/images/i-should-buy-a-boat.jpg' },
    { id: 2, image: 'http://www.intrawallpaper.com/static/images/8810721-full-hd-wallpapers-27699_tQsN85h_aTROZZr.jpg' },
    { id: 3, image: 'http://www.intrawallpaper.com/static/images/4k-wallpaper-154.jpg' },
  ];

  // Options
  options: MasonryOptions = {
    transitionDuration: '0.3s'
  }

  ngAfterViewInit() {
    this.masonry.layoutComplete.subscribe(() => {
      console.log('layout');
    });

    this.bricks.push({ id: 4, image: 'http://www.planwallpaper.com/static/images/butterfly-wallpaper.jpeg' });
  }

  // Resize brick
  resize(brick) {
    switch (brick.size) {
      case 'lg':
        brick.size = 'sm';
        break;
      case 'md':
        brick.size = 'lg';
        break;
      case 'sm':
        brick.size = 'md';
        break;
    }

    // Update layout after resize
    this.masonry.layout();
  }
}
