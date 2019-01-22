import { Component} from '@angular/core';
// import { Component, AfterViewChecked, ElementRef} from '@angular/core';
//import $ from "jquery";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  dropshow: string='inactive';
  spanText: string='Select';
  spanColor:string='';
  colors = [
	{
		hex: '#00759A',
	  name: 'Blue',
    value: 'blue'
  },
	{
		hex: '#F7941D',
	  name: 'Orange',
    value: 'orange'
  },
	{
		hex: '#A71930',
	  name: 'Red',
    value: 'red'
  },
	{
		hex: '#679146',
	  name: 'Green',
    value: 'green'
  }
];
// constructor(private el: ElementRef){}
// ngAfterViewChecked(){
//   $(document).on('click', function(e){
//     if( $(e.target).closest("#color-dropdown").length > 0 ) {
//       $('.dropdown').removeClass('inactive');
//       $('.dropdown').addClass('active');
//       return false;
//     }
//     $('.dropdown').addClass('inactive');
//     $('.dropdown').removeClass('active');
//   });
// }
setColor(hex,color, value){
  this.spanColor = hex;
  this.spanText = color;
  this.dropshow = 'inactive';
}
toggleDropdown(){
  //this.dropshow = 'active';
  if(this.dropshow == 'active'){
    this.dropshow = 'inactive';
  }else{
  this.dropshow = 'active';
  }
}
}
