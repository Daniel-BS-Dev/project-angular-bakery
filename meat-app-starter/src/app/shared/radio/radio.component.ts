import { RadioOption } from "./../../models/radioOption";
import { Component, forwardRef, Input, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { multicast } from "rxjs/operator/multicast";

@Component({
  selector: "mt-radio",
  templateUrl: "./radio.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi:true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {
  @Input() options: RadioOption[];

  value: any;

  onChange: any

  constructor() {}

  ngOnInit() {}

  setValue(value: any) {
    this.value = value;
    this.onChange(this.value)
  }

  // passa um valor para o compoment
  writeValue(obj: any): void {
    this.value = obj
  }

  // chama a função sempre que o valor mudar
  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {}
}
