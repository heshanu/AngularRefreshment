import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatOptionModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
    imports: [
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatOptionModule,
    ],
    exports: [
        MatToolbarModule,
        MatInputModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatOptionModule,
    ]
})
export class MaterialModule { }