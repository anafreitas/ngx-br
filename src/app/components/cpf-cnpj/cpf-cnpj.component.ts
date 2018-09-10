import { cpfPattern, cnpjPattern } from "./../../commons/constants";
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ValueAccessorBase } from "../../commons/value-acessor-base";

const CPF_CNPJ_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CpfCnpjComponent),
  multi: true
};

@Component({
  selector: "cpf-cnpj",
  templateUrl: "./cpf-cnpj.component.html",
  styleUrls: ["./cpf-cnpj.component.css"],
  providers: [CPF_CNPJ_PROVIDER]
})
export class CpfCnpjComponent extends ValueAccessorBase<string> {
  public pattern = (value: any): string => {
    return value.toString().length < 11 ? cnpjPattern : cpfPattern;
  };

  @Input()
  placeholder: string = cpfPattern;
  @Input()
  id: string;

  @Output()
  blur: EventEmitter<any> = new EventEmitter();

  transform(value: string): string {
    return value
      ? value
          .replace(/[^\d]/g, "")
          .trim()
          .slice(0, 14)
      : value;
  }

  public blurEvt(event): void {
    this.blur.emit(event);
  }
}
