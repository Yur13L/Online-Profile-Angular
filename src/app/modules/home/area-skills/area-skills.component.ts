import { Component, OnInit } from '@angular/core';
import { CircleProgressComponent } from 'ng-circle-progress';
import { AreaSkillService } from 'src/app/shared/services/AreaSkill/area-skill.service';
import { AreaSkill } from 'src/app/shared/models/area-skill.data';

@Component({
  selector: 'app-area-skills',
  templateUrl: './area-skills.component.html',
  styleUrls: ['./area-skills.component.css']
})
export class AreaSkillsComponent implements OnInit {

  constructor(private areaSkillService:AreaSkillService) {
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
    this.areaSkillService.getAreaSkillAll().subscribe( (results:AreaSkill[]) => {
      results.forEach( (item) => {
        if(item.type == "circle"){
          this.createCircleProgItemByProperties(item.text,item.percent,item.color);
        }else if (item.type =="bar"){
          this.createProgBarItemByProperties(item.text,Number.parseInt(item.percent) ,item.color);
        }
      });
    });

  }

  private createCircleProgItemByProperties(text:string,percent:string,color:string){

    let circPropToCreate = {
      percent: percent,
      outerStrokeColor: color,
      subtitle: text
    };

    let mergedProps = {
      ...this.cmnCircProgProps,
      ...circPropToCreate
    };

    if(mergedProps.subtitle.length >= 6){
      mergedProps.subtitleFontSize -= 5;
    }

    this.cricProgItems.push(mergedProps);
  }

  private createProgBarItemByProperties(itemText:string,percentValue:number, additionalClass:string){

    var colorButtonClassMap = {
      'red':'bg-danger',
      'green':'bg-success',
      'blue':'bg-info'
    };

    this.progBarItems.push(
      {
        text: itemText,
        additionalClass: colorButtonClassMap[additionalClass],
        percentvalue: percentValue
      }
    );

  }

}
