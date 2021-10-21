import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { iCovid2G } from 'src/app/_interface/covid2-g';
import { I2gstatus } from 'src/app/_interface/i2gstatus';
import { CovidDataServiceService } from 'src/app/_service/covid-data-service.service';
import { ImpfstatusService } from 'src/app/_service/impfstatus.service';

@Component({
  selector: 'app-impfgenesenstatus',
  templateUrl: './impfgenesenstatus.component.html',
  styleUrls: ['./impfgenesenstatus.component.scss']
})
export class ImpfgenesenstatusComponent implements OnInit {
  @Input() dataService!: CovidDataServiceService ;
  Cov2G$!: iCovid2G
  CovStat!: I2gstatus;

  constructor(public _ImpNachweisCheck: ImpfstatusService) { 
   
  }

  
  ngOnInit(): void {
    this.dataService.getCachedEintrag().subscribe(data => {
      this.Cov2G$ = data; 
      this.CovStat = this._ImpNachweisCheck.calculateImpfstatus(this.Cov2G$)})
 }


}
