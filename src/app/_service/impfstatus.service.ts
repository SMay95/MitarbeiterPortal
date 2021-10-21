import { Injectable } from '@angular/core';
import { iCovid2G } from '../_interface/covid2-g';
import { I2gstatus } from '../_interface/i2gstatus';


@Injectable({
  providedIn: 'root'
})
export class ImpfstatusService {

  constructor() {
   }

  public calculateImpfstatus(Abfrage: iCovid2G): I2gstatus
  {
    var Ergebnis!: I2gstatus; 

    var Status: number;    
    var Titel: string;  
    var Erklärung: string; 
    var GueltigBis: string; 
   
    try
    {
    switch (true)
    {
        //EinfachImpfung
      case (Abfrage.bGeimpft == true && Abfrage.DTeinfachImpfung!= ""): 
          Ergebnis = this.ImpfungValidieren(this.UnterschiedTage(Abfrage.DTeinfachImpfung!),"einfach Impfung");
          break;
      //ZweifachImpfung
      case (Abfrage.bGeimpft == true && Abfrage.DTzweifachImpfung2!= ""): 
        Ergebnis = this.ImpfungValidieren(this.UnterschiedTage(Abfrage.DTzweifachImpfung2!),"zweifach Impfung");
        break;
      //Genesen & einfachImpfung
      case (Abfrage.bGenesen == true && Abfrage.bGeimpft == true && Abfrage.DTGenesen!= ""): 
        switch(true){
          case(Abfrage.DTeinfachImpfung != ""): 
            Ergebnis = this.ImpfungValidieren(this.UnterschiedTage(Abfrage.DTeinfachImpfung!),"Impfung & Genesen");
            break;
          case(Abfrage.DTzweifachImpfung2 != ""): 
            Ergebnis = this.ImpfungValidieren(this.UnterschiedTage(Abfrage.DTzweifachImpfung2!),"Impfung & Genesen");
            break;
          default:
            //Impfungfehlt 
            Ergebnis = this.BuildReturnObject(5,"Impfung fehlt","Ungültig");
            break;
        }
        break;
      
      //Genesen
      case (Abfrage.bGenesen == true && Abfrage.DTGenesen!= ""):
        var gueltig: number = this.UnterschiedMonate(Abfrage.DTGenesen!);
        if(gueltig <= 6)
        {
          Ergebnis = this.BuildReturnObject(1,"Sie haben einen Genesennachweis","noch " +(6 - gueltig) + " Wochen gueltig");
        }
        else
        {
          Ergebnis = this.BuildReturnObject(4,"Ihr Genesennachweis ist abgelaufen","Abgelaufen");
        }
        break;  
      //Kein 2G Nachweis
      default: 
        Ergebnis = this.BuildReturnObject(4,"Kein Impfnachweis vorgewiesen","Ungültig")
        break;
    }

    }
    catch (err){
      
    }
  return Ergebnis;

  }

  
  private UnterschiedTage(_Datum: string):number
  {
  var Datum =  new Date(_Datum);
  var diff = Math.abs(Datum.getTime() - new Date().getTime());
  var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
  return diffDays; 
  }

  private UnterschiedMonate(_Datum: string):number
  {
      var Ende = new Date(); 
      var Beginn = new Date(_Datum);
      var months;
      months = ((Ende.getFullYear() - Beginn.getFullYear()) * 12) - Beginn.getMonth() + Ende.getDate();
      var AnzMonate = months <= 0 ? 0 : months;
      return AnzMonate;
  }

  private ImpfungValidieren(_DaysDiff:number,_Beschreibung: string): I2gstatus
  {
      var result: I2gstatus
      if(_DaysDiff > 14)
      {
        result = this.BuildReturnObject(2,"Sie haben eine gueltige " + _Beschreibung + " angegeben.","gueltig");
      }
      else
      {
        result = this.BuildReturnObject(3,"Ihre 2G Nachweise mit der " + _Beschreibung + " ist in " + (14 - _DaysDiff) + " Tagen vollständig.","gueltig in " +(14 - _DaysDiff)+ "Tagen");
      }

      return result
  }  

  public BuildReturnObject(_Status:number, _Beschreibung: string, _GueltigBis: string): I2gstatus
  {
      var result: I2gstatus; 
      var Titel: string =""; 
      var StyleKlasse: string =""; 
      switch(_Status){
        case 1:
          Titel = "Genesennachweis - Vollständig"
          StyleKlasse = "StatusGruen";
          break; 
        case 2: 
          Titel = "Impfnachweis - Vollständig";
          StyleKlasse = "StatusGruen";  
          break;
        case 3: 
          Titel = "2G-Nachweis - Teilweise vorhanden";
          StyleKlasse = "StatusGelb";  
          break;
        case 4: 
          Titel = "2G-Nachweis - nicht vorhanden";
          StyleKlasse = "StatusRot";  
          break; 
        case 5: 
          Titel = "Fehler";
          StyleKlasse = "StatusRot";  
          break;
        default: 
          Titel = "Fehler";
          StyleKlasse = "StatusRot";  
          break;
      }

      result = 
      {
          Erklärung: _Beschreibung,
          GueltigBis: _GueltigBis,
          StatusNr: _Status,
          Titel: Titel,
          StyleKlasse: StyleKlasse
      }

    return result;
  }


}
