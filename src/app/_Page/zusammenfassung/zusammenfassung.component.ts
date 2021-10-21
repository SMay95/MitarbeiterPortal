import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { iCovid2G } from 'src/app/_interface/covid2-g';
import { I2gstatus } from 'src/app/_interface/i2gstatus';
import { CovidDataServiceService } from 'src/app/_service/covid-data-service.service';
import { ImpfstatusService } from 'src/app/_service/impfstatus.service';

@Component({
  selector: 'app-zusammenfassung',
  templateUrl: './zusammenfassung.component.html',
  styleUrls: ['./zusammenfassung.component.scss']
})
export class ZusammenfassungComponent implements OnInit {
  @Input() dataService!: CovidDataServiceService ;

  Cov2G$!: iCovid2G

  constructor() {
    
  }

  ngOnInit(): void {
    this.dataService.getCachedEintrag().subscribe(Eintrag => {
      this.Cov2G$ = Eintrag;
    }
  )
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes.value);
  }


  test(){
    console.log("Hier.");
  }

}
