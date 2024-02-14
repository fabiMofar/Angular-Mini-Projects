import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-group',
  templateUrl: './address-group.component.html',
  styleUrls: ['./address-group.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true})
    }
  ]
})
export class AddressGroupComponent implements OnInit, OnDestroy {

  @Input({ required: true}) controlKey = '';
  @Input() label= '';

  parentContainer = inject(ControlContainer)

  get parentformGroup(){
    return this.parentContainer.control as FormGroup
  }

  ngOnInit(): void {
    this.parentformGroup.addControl(this.controlKey, 
      new FormGroup({
        zipCode: new FormControl(''),
        street: new FormControl('')
      }))    
  }

  ngOnDestroy(): void {
      this.parentformGroup.removeControl(this.controlKey)
  }

}
