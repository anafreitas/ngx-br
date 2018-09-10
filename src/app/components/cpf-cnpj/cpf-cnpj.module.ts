import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CpfCnpjComponent } from "./cpf-cnpj.component";
import { CpfCnpjMaskDirective } from "./cpf-cnpj.mask.directive";

export * from "./cpf-cnpj.component";
export * from "./cpf-cnpj.mask.directive";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CpfCnpjComponent, CpfCnpjMaskDirective],
  exports: [CpfCnpjComponent, CpfCnpjMaskDirective]
})
export class TelefoneModule {}
