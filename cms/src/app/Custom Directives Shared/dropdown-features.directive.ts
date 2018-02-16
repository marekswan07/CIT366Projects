import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownFeatures]'
})

export class DropdownFeaturesDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
  this.isOpen = !this.isOpen;
  }

  @HostListener('mouseleave') onMouseleave() {
    this.isOpen = !this.isOpen;
  }
}
