import { cnpjPattern, cpfPattern } from "./../../commons/constants";
import { Directive, ElementRef, HostListener } from "@angular/core";
import { removeNonDigitValues } from "../../commons/utils";

const vanillaMasker = require("vanilla-masker");

@Directive({
  selector: "[cpf-cnpj]"
})
export class CpfCnpjMaskDirective {
  public nativeElement: HTMLInputElement;

  constructor(public element: ElementRef) {
    this.nativeElement = this.element.nativeElement;
  }

  @HostListener("keyup", ["$event"])
  onKeyup(event: KeyboardEvent) {
    const telefonePattern: string =
      removeNonDigitValues(this.nativeElement.value).length < 11
        ? cnpjPattern
        : cpfPattern;
    this.nativeElement.value = vanillaMasker.toPattern(
      this.nativeElement.value,
      telefonePattern
    );
  }
}
