import { CommonModule, DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material/material.module";

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule
];

@NgModule({
  declarations: [],
  imports: [MODULES],
  exports: [MODULES],
  providers: [
  ],
})
export class CoreModule {}
