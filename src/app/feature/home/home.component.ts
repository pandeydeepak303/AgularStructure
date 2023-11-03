import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newItem: string = '';
  selectedColor: string = "LightSlateGray"; 
  items: string[] = [];
  colors = ["AliceBlue",
    "Aqua",
    "LightCoral",
    "LightGreen",
    "LightSkyBlue",
    "LightSalmon",
    "LightPink",
    "LightSlateGray",
    "LightSteelBlue",
    "MistyRose",
    "PapayaWhip",
    "PeachPuff",
    "PaleVioletRed",
    "PowderBlue",
    "SeaGreen",
    "SlateBlue",
    "Thistle",
    "Violet",
    "YellowGreen"
  ];
  
  currentColorIndex = 0;
  constructor(private renderer: Renderer2,private router: Router) {}
  ngOnInit() {
    this.changeBackground();
  }
  changecolor(color: string) {
    this.renderer.setStyle(document.body, 'background', color);
  }
  changeBackground() {
    this.changecolor(this.selectedColor);
  }
  
  navigateToUserPopu(){

    this.router.navigate(['/UserPopup'])
  }

  CreateNewItem() {
    if (this.newItem.trim() !== '') {

      debugger;
      this.CreateItem(this.newItem);
      this.newItem = '';
    }
  }

  
  CreateItem(item: string) {
    this.items.push(item);
  }

  navigateToAdmin() {
    this.router.navigate(['/Admin']);
  }
  navigateToUser() {
    this.router.navigate(['/User']);
  }

  navigateToAminPopup() {
    this.router.navigate(['/AdminPopup']);
  }
 
}
