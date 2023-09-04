import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scale]'
})
export class ScaleDirective {

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener("mouseenter") onMouseEnter() {
    this.setFontWeight('110%');
}

  @HostListener("mouseleave") onMouseLeave() {
    this.setFontWeight('100%');
  }

  private setFontWeight(size: string) {
    this.render.setStyle(this.el.nativeElement, "transform", `scale(${size}, ${size})`);
  }

}
