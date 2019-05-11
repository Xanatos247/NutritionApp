//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res) {
res.sendFile(__dirname+"/index.html");});
app.post ("/", function(req,res){
  var lbskg = req.body.lbskg;
  lbskg ==1? wt = req.body.wt:wt = req.body.wt * (2.205);
  var ht = (req.body.htft*12 + Number(req.body.htinch));
  var stmch = req.body.stmch;
  var nck = req.body.nck;
  var wst = Number(req.body.wst);
  var hps = Number(req.body.hps);
  var gender= req.body.gender;
  var male1 = 0;
  var losegain = req.body.losegain;
  var job = req.body.job;
  var femaleLog = (wst+hps)-nck;
  var bodyFatMale = (86.010 * (Math.log10(stmch-nck))) - (70.041 * (Math.log10(ht)))+36.76; //inches
  var bodyFatFemale = (163.205 * (Math.log10(femaleLog))) - (97.684 * (Math.log10(ht)))-78.387; //inches

//Male that wants to lose weight and works in an office

if (gender == 1 && losegain == 1 && job == 1) {

  if (bodyFatMale <21) {

      leanFactorMale=1;
      male1 = (wt/2.205) * 1 * 24 * leanFactorMale * 1.3 - 500;
      res.send("Your total calories for the day as a man are approximately " + Math.round(male1) + " if you want to lose weight.");
    }
    else if (bodyFatMale > 20 && bodyFatMale < 28 ){
      leanFactorMale = 0.95;
      male1 = (wt/2.205) * 1 * 24 * leanFactorMale * 1.3 - 500;
    res.send("Your total calories for the day as a man are approximately" + Math.round(male1) + " if you want to lose weight.");
    }
    else if (bodyFatMale >= 28) {
      leanFactorMale = 0.85;
      male1 = (wt/2.205) * 1 * 24 * leanFactorMale * 1.3 - 500;
      res.send("Your total calories for the day as a man are approximately" + Math.round(male1) + " if you want to lose weight.");
    }

    }

//Male that wants to lose weight and walks or stands a lot
if (gender == 1 && losegain == 1 && job == 2) {

  if (bodyFatMale <21) {

      leanFactorMale=1;
      male1 = (wt/2.205) * 1 * 24 * leanFactorMale * 1.55 - 500;
      res.send("Your total calories for the day as a man are approximately " + Math.round(male1) + " if you want to lose weight.");
    }
    else if (bodyFatMale > 20 && bodyFatMale < 28 ){
      leanFactorMale = 0.95;
      male1 = (wt/2.205) * 1 * 24 * leanFactorMale * 1.55 - 500;
    res.send("Your total calories for the day as a man are approximately" + Math.round(male1) + " if you want to lose weight.");
    }
    else if (bodyFatMale >= 28) {
      leanFactorMale = 0.85;
      male1 = (wt/2.205) * 1 * 24 * leanFactorMale * 1.55 - 500;
      res.send("Your total calories for the day as a man are approximately" + Math.round(male1) + " if you want to lose weight.");
    }

    }


//Female that wants to lose weight and works in an office

   if (gender == 2 && losegain == 1 && job == 1) {

     if (bodyFatFemale <18) {

         leanFactorFemale=1;
         female1 = (wt/2.205) * 0.9 * 24 * leanFactorFemale * 1.3 - 500;
         res.send("Your total calories for the day as a woman are approximately " + Math.round(female1) + " if you want to lose weight.");
       }
       else if (bodyFatFemale > 18 && bodyFatFemale < 29 ){
         leanFactorFemale = 0.95;
         female1 = (wt/2.205) * 0.9 * 24 * leanFactorFemale * 1.3 - 500;
       res.send("Your total calories for the day as a woman are approximately " + Math.round(female1) + " if you want to lose weight.");
       }
       else if (bodyFatFemale > 28 && bodyFatFemale < 39) {
         leanFactorFemale = 0.90;
         female1 = (wt/2.205) * 0.9 * 24 * leanFactorFemale * 1.3 - 500;
         res.send("Your total calories for the day as a woman are approximately " + Math.round(female1) + " if you want to lose weight.");
       }
       else if (bodyFatFemale >= 38) {
         leanFactorFemale = 0.85;
         female1 = (wt/2.205) * 0.9 * 24 * leanFactorFemale * 1.3 - 500;
         res.send("Your total calories for the day as a woman are approximately " + Math.round(female1) + " if you want to lose weight.");
}
       }

//Female that wants to lose weight and works in an Office
if (gender == 2 && losegain == 1 && job == 2) {

  if (bodyFatFemale <18) {

      leanFactorFemale=1;
      female1 = (wt/2.205) * 0.9 * 24 * leanFactorFemale * 1.55 - 500;
      res.send("Your total calories for the day as a woman are approximately " + Math.round(female1) + " if you want to lose weight.");
    }
    else if (bodyFatFemale > 18 && bodyFatFemale < 29 ){
      leanFactorFemale = 0.95;
      female1 = (wt/2.205) * 0.9 * 24 * leanFactorFemale * 1.55 - 500;
    res.send("Your total calories for the day as a woman are approximately " + Math.round(female1) + " if you want to lose weight.");
    }
    else if (bodyFatFemale > 28 && bodyFatFemale < 39) {
      leanFactorFemale = 0.90;
      female1 = (wt/2.205) * 0.9 * 24 * leanFactorFemale * 1.55 - 500;
      res.send("Your total calories for the day as a woman are approximately " + Math.round(female1) + " if you want to lose weight.");
    }
    else if (bodyFatFemale >= 38) {
      leanFactorFemale = 0.85;
      female1 = (wt/2.205) * 0.9 * 24 * leanFactorFemale * 1.55 - 500;
      res.send("Your total calories for the day as a woman are approximately " + Math.round(female1) + " if you want to lose weight.");

    }
  }
console.log(wt);

});

app.listen(3000);
