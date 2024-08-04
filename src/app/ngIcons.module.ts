import { NgModule } from "@angular/core";
import { NgIconsModule } from "@ng-icons/core";
import { featherAirplay } from '@ng-icons/feather-icons';
import { heroUsers, } from '@ng-icons/heroicons/outline'; // Import the ionArrowBackCircle icon

@NgModule({
    imports: [
        NgIconsModule.
        withIcons({ featherAirplay, heroUsers })
        , 
    ],
    exports: [
       
    ]
})
export class NgIconModule { }