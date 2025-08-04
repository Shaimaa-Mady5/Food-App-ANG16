import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-title',
  templateUrl: './form-title.component.html',
  styleUrls: ['./form-title.component.scss']
})
export class FormTitleComponent {
  @Input() title:string='';
  @Input() description:string='';

}
