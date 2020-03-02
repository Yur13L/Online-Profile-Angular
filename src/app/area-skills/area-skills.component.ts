import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-skills',
  templateUrl: './area-skills.component.html',
  styleUrls: ['./area-skills.component.css']
})
export class AreaSkillsComponent implements OnInit {

  constructor() {
  }

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

  public cricProgItems:any = [];
  public progBarItems:any = [];

  ngOnInit() {
    this.createCircleProgItemByProperties(
      {
        percent: "90",
        outerStrokeColor: "orange",
        subtitle: "Java"
      }
    );

    this.createCircleProgItemByProperties(
    {
      percent: "70",
      outerStrokeColor: "yellow",
      subtitle: "Angular",
      subtitleFontSize: this.cmnCircProgProps.subtitleFontSize - 5
    }
    );

    this.createCircleProgItemByProperties(
      {
        percent: "80",
        outerStrokeColor: "lightgreen",
        subtitle: "NodeJS",
        subtitleFontSize: this.cmnCircProgProps.subtitleFontSize - 5
      }
    );

    this.createProgBarItemByProperties('MongoDB',80,'bg-danger');
    this.createProgBarItemByProperties('Oracle',70,'bg-success');
    this.createProgBarItemByProperties('HTML/CSS/JavaScript',90,'bg-info');

  }

  private createCircleProgItemByProperties(circPropToCreate:any){
    let mergedProps = {
      ...this.cmnCircProgProps,
      ...circPropToCreate
    };
    this.cricProgItems.push(mergedProps);
  }

  private createProgBarItemByProperties(itemText:String,percentValue:Number, additionalClass:String){

    this.progBarItems.push(
      {
        text: itemText,
        additionalClass: additionalClass,
        percentvalue: percentValue
      }
    );

  }

}
