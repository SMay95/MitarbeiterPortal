import Model from '../models/model';

const CoronaAbfrageModel = new Model('coronaabfrage');
const insertcolumns = 'nachname,vorname,email,geburtsdatum, bgenesen,dtgenesen,bgeimpft, dteinfachimpfung1,dtzweifachimpfung1,dtzweifachimpfung2,babgeschlossen, ststatusnr, dtupload ';
const columns = insertcolumns + ',' + 'dtuebername,useridentnr,id';

export const viewAbfrage2G = async (req, res) => {
    try {
      const data = await CoronaAbfrageModel.select(columns);
      res.status(200).json({ messages: data.rows });
    } catch (err) {
      res.status(200).json({ messages: err.stack });
    }
  };

export const addEintrag2G = async (req, res) => {
   
    //Get the Values from the Request
    const {   Nachname,Vorname,EMail,Geburtstag, 
             bGenesen,DTGenesen,
                bGeimpft, DTeinfachImpfung, 
                DTzweifachImpfung1, DTzweifachImpfung2, 
                bErklaerung, ststatusNr,Timestamp
            } = req.body;
    var values = `'${Nachname}','${Vorname}','${EMail}','${Geburtstag}',${bGenesen},`;
     
    values = values +  (DTGenesen ? `'${DTGenesen}'`:`NULL`) +  `,'${bGeimpft}'`  + ','; 
    values = values +  (DTeinfachImpfung  ? `'${DTeinfachImpfung}'`:`NULL`) + ','; 
    values = values +  (DTzweifachImpfung1  ? `'${DTzweifachImpfung1}'`:`NULL`)  + ',';  
    values = values +  (DTzweifachImpfung2  ? `'${DTzweifachImpfung2}'`:`NULL`)  + ','; 
    values = values +  `${bErklaerung?? null}, ${ststatusNr?? null},'${Timestamp?? null}'`;


    try {
      const data = await CoronaAbfrageModel.insertWithReturn(insertcolumns, values);
      res.status(200).json({ messages: data.rows });
    } catch (err) {
      res.status(200).json({ messages: err.stack });
    }
  };
  
export const viewMitarbeiterEintrag = async(req, res) => {
    const {uID} = req.params;
    const clause = " WHERE useridentnr = '" + uID + "'";
    try{
        const data = await CoronaAbfrageModel.select(columns,clause);
        res.status(200).json({ messages: data.rows});
    }catch (err){
        res.status(200).json({ messages: err.stack });
    }

}