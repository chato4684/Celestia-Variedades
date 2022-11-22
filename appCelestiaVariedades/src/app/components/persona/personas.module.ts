import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaComponent } from './empresa/empresa.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';



@NgModule({
  declarations: [
    EmpresaComponent,
    ClientesComponent,
    ProveedoresComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonasModule { }
