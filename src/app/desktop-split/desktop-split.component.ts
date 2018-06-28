import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-desktop-split',
  templateUrl: './desktop-split.component.html',
  styleUrls: ['./desktop-split.component.css']
})
export class DesktopSplitComponent {

  /** 0 = no hiding
   *  1 = hide center
   *  2 = hide right
   */
  @Input() public hideOnMobile = 2;

  constructor(
    public dataService: DataService,
  ) { }

}
