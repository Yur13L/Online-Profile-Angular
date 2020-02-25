import { Component, OnInit } from '@angular/core';
// declare const ProgressBar: any;

@Component({
  selector: 'app-area-skills',
  templateUrl: './area-skills.component.html',
  styleUrls: ['./area-skills.component.css']
})
export class AreaSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      // // progressbar.js@1.0.0 version is used
      // // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

      // var bar = new ProgressBar.Circle("#pbcontainer", {
      //   color: '#f8f9fa',
      //   // This has to be the same size as the maximum width to
      //   // prevent clipping
      //   strokeWidth: 7,
      //   easing: 'easeInOut',
      //   duration: 1400,
      //   text: {
      //     autoStyleContainer: false
      //   },
      //   from: { color: '#333', width: 7 },
      //   to: { color: '#333', width: 7 },
      //   // Set default step function for all animate calls
      //   step: function(state, circle) {
      //     circle.path.setAttribute('stroke', state.color);
      //     circle.path.setAttribute('stroke-width', state.width);

      //     var value = Math.round(circle.value() * 100);
      //     if (value === 0) {
      //       circle.setText('');
      //     } else {
      //       circle.setText(value + "%");
      //     }

      //   }
      // });
      // bar.text.classList.add("text-light");
      // bar.text.classList.add("font-weight-bolder");
      // bar.text.style.fontSize = '2rem';

      // bar.animate(1.0);  // Number from 0.0 to 1.0
  }

}
