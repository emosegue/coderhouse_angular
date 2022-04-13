import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appFontSize]',
})
export class FontSizeDirective implements OnInit {
  @Input('appFontSize') fontSize!: string;

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.update();
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    this.update();
  }

  update() {
    console.log(this.fontSize);
    if (this.fontSize != null)
      this.element.nativeElement.style.fontSize = this.fontSize;
  }
}
