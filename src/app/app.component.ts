import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { AngularMasonry, MasonryOptions } from 'angular2-masonry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

  // bricks = [
  //   { id: 0, image: 'http://www.planwallpaper.com/static/images/butterfly-wallpaper.jpeg' },
  //   { id: 1, image: 'http://www.planwallpaper.com/static/images/i-should-buy-a-boat.jpg' },
  //   { id: 2, image: 'http://www.intrawallpaper.com/static/images/8810721-full-hd-wallpapers-27699_tQsN85h_aTROZZr.jpg' },
  //   { id: 3, image: 'http://www.intrawallpaper.com/static/images/4k-wallpaper-154.jpg' },
  // ];

  bricks: any[] = [];

  // Options
  options: MasonryOptions = {
    transitionDuration: '0.3s'
  }

  ngAfterViewInit() {
    this.masonry.layoutComplete.subscribe(() => {
      console.log('layout');
    });

    // this.bricks.push({ id: 4, image: 'http://www.planwallpaper.com/static/images/butterfly-wallpaper.jpeg' });
  }

  addText() {
    var lorem = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at tortor eu lacus imperdiet volutpat. Aliquam erat volutpat. Integer et.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor in leo sagittis aliquam. Quisque porta nisi sed diam sollicitudin.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nunc nibh, faucibus in commodo tincidunt, placerat a eros. Suspendisse nisi ex, semper at vehicula non, congue sit amet nibh. Donec.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper, velit porta tincidunt pulvinar, ligula nisl posuere metus, quis bibendum neque lacus non urna. Sed ut diam auctor, sagittis purus.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis facilisis tortor ac elementum. Aliquam vestibulum, lorem id semper sollicitudin, nulla nibh fringilla felis, ut rhoncus elit ex sit amet dui. Sed eleifend felis in luctus varius. Maecenas venenatis id.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet, tortor ac euismod tincidunt, elit est convallis tortor, id venenatis massa ipsum nec nisl. In mattis felis luctus neque tristique, id varius libero finibus. Aliquam mattis lobortis diam eget venenatis.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae fermentum neque, sit amet laoreet lorem. Suspendisse nibh lacus, sollicitudin at metus id, convallis posuere lectus. Duis nec facilisis nibh. Nunc consequat maximus fringilla. Phasellus turpis arcu, auctor nec nunc non, posuere tristique neque. Sed feugiat elementum quam, in ultrices.',
      'orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ullamcorper sit amet felis malesuada accumsan. Quisque sed fermentum justo. Vestibulum maximus diam condimentum elit placerat cursus. Vivamus ac eros vulputate, lobortis felis vel, ultricies dolor. Donec in eros sit amet lorem pretium rutrum. Vestibulum viverra, nisl volutpat maximus malesuada, ex.'
    ]

    var index = Math.floor(Math.random() * lorem.length);

    this.bricks.push({ text: lorem[index] });
  }

  addImage() {
    var lorem = [
      'http://lorempixel.com/400/300/abstract',
      'http://lorempixel.com/400/600/abstract',
      'http://lorempixel.com/800/600/abstract',
      'http://lorempixel.com/1200/1200/abstract'
    ]

    var index = Math.floor(Math.random() * lorem.length);

    this.bricks.push({ image: lorem[index] });
  }

  remove(brick) {
    this.bricks.splice(this.bricks.indexOf(brick), 1);
  }
}
