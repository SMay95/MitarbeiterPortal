import { CdkStep } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ViewChild, AfterViewInit } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { iCovid2G } from 'src/app/_interface/covid2-g';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CovidDataServiceService } from 'src/app/_service/covid-data-service.service';

@Component({
  selector: 'cov2g-erfassung',
  templateUrl: './erfassung.component.html',
  styleUrls: ['./erfassung.component.scss']
})
export class ErfassungComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper | undefined;
       
  StammDatenGroup!: FormGroup;
  GenesenGroup!: FormGroup;
  ImpfungGroup!: FormGroup;
  AbschlussGroup!: FormGroup;
  _selectLast?:CdkStep;
  CovidAbfrage!: iCovid2G;


  constructor(private _formBuilder: FormBuilder,private _snackBar: MatSnackBar, public _DataService: CovidDataServiceService) {
    this.CovidAbfrage = {
        Timestamp:  new Date().toLocaleString("de-de"), 
    }
   }

  ngOnInit(): void {
    this.StammDatenGroup = this._formBuilder.group({
      Vorname: [undefined, Validators.required],
      Nachname: [undefined,Validators.required],
      EMail: [undefined,Validators.required],
      Geburtstag: [undefined,Validators.required]
    });
    this.GenesenGroup = this._formBuilder.group({
      bGenesen: [[false], Validators.required],
      DTGenesen: [undefined]
    });
    this.ImpfungGroup = this._formBuilder.group({
      bGeimpft: [[false],Validators.required],
      DTeinfachImpfung: [undefined],
      DTzweifachImpfung1: [undefined],
      DTzweifachImpfung2: [undefined]
    });
    this.AbschlussGroup = this._formBuilder.group({
      bAbschluss: [[false], Validators.required]
    })
  }

  StepBack(stepper: MatStepper){
    this.save();
    stepper.previous();   
  }

  StepForward(stepper: MatStepper){
      this.save();
      stepper.next();
  }

  public save(){
    this.CovidAbfrage = Object.assign(this.CovidAbfrage,this.StammDatenGroup.value); 
    this.CovidAbfrage = Object.assign(this.CovidAbfrage,this.GenesenGroup.value); 
    this.CovidAbfrage = Object.assign(this.CovidAbfrage,this.ImpfungGroup.value); 
    this.CovidAbfrage = Object.assign(this.CovidAbfrage,this.AbschlussGroup.value); 
    this._DataService.cacheEintrag(this.CovidAbfrage);
  }


  public submitAll(){
      this.save();
      this._DataService.postEintrag(this.CovidAbfrage)
      .subscribe(
        data => {
          this.CovidAbfrage.USERIDENTNR = data.USERIDENTNR;
        },
        (err) => {
          if(err) this._snackBar.open('Die Daten wurden nicht übernommen, Bitte wiederholen Sie die Erfassung','Schließen');
          this._snackBar.open('Ihre Daten wurden erfolgreich übernommen',  'Schließen').onAction().subscribe(() => {
            console.log("Hier öffne ich die Zusammenfassung");
          })
          ;
          
        }
      )
  }

  




}
