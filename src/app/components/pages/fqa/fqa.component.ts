import { Component } from '@angular/core';

import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-fqa',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './fqa.component.html',
  styleUrl: './fqa.component.scss'
})
export class FqaComponent {

}
