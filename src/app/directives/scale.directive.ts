import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scale]'
})
export class ScaleDirective {

  @Input() scaleSize: string = ""

  @Input() defaultSize: string = ""

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener("mouseenter") onMouseEnter() {
    this.setFontWeight(this.scaleSize);
}

  @HostListener("mouseleave") onMouseLeave() {
    this.setFontWeight(this.defaultSize);
  }

  private setFontWeight(size: string) {
    this.render.setStyle(this.el.nativeElement, "transform", `scale(${size}, ${size})`);
  }

}
