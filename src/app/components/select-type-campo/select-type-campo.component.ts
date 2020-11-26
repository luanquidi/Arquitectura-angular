import { Component, OnInit } from '@angular/core';
import { ImportationService } from '../../services/importation.service';

@Component({
  selector: 'app-select-type-campo',
  templateUrl: './select-type-campo.component.html',
  styleUrls: ['./select-type-campo.component.css']
})
export class SelectTypeCampoComponent implements OnInit {

  constructor(private importService: ImportationService) { }

  ngOnInit(): void {
  }

  show(): void {
    console.log(this.importService.data);
    console.log(this.importService.tableSmart);
  }
}
