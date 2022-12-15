import { NgModule } from "@angular/core";
import { CoreModule } from "../core/core.module";
import ButtonComponent from "./components/button/button.component";

const COMPONENTS = [
  ButtonComponent
];

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CoreModule
  ],
  exports: [
    COMPONENTS
  ],
  providers: [],
})

export class SharedModule { }
