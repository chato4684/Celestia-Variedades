import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturasComponent } from './facturas/facturas.component';
import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component';



@NgModule({
  declarations: [
    FacturasComponent,
    DetalleFacturaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FacturasModule { }
