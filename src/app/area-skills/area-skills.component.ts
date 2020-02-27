import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-skills',
  templateUrl: './area-skills.component.html',
  styleUrls: ['./area-skills.component.css']
})
export class AreaSkillsComponent implements OnInit {

  public cmnCircProgProps:any = {
      radius:"100",
      outerStrokeWidth:"16",
      innerStrokeWidth:"8",
      innerStrokeColor:"#F8F9FA",
      animation:"true",
      animationDuration:"1000",
      subtitleColor:'#F8F9FA',
      subtitleFontSize:"40",
      subtitleFontWeight:"bold",
      titleColor:'#F8F9FA',
      titleFontSize:"40",
      titleFontWeight:"bold",
      unitsColor:'#F8F9FA',
      unitsFontSize:"20",
      unitsFontWeight:"bold",
      renderOnClick:false
  };

  constructor() { }

  ngOnInit() {

  }

}
