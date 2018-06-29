import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './myform.html'
})
export class FormBuilderComponent {
  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      'username': [''],
      'ssn': [''],
      'passwordsGroup': fb.group({
        'password': [''],
        'pconfirm': ['']
      })
    });
  }
  onSubmit() {
    console.log(this.formModel.value);
    alert(this.formModel.value.username);
  }
}
