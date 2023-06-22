function digiclk()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getMinutes();
    // var ml=date.getMilliseconds();
    var tdt=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var day=date.getDay();
   var am_pm="AM";
   if(hh>=12){
    am_pm="PM";
    // here (hh) means 24 hour format
    if (hh>12){
        hh-=12;
    }
   }
   if (hh==0)
   {
    hh=12;
   }
   if(mo==0){
        mo="Januray";
   }
   else if(mo==1)
   {
    mo="February";
   }
   else if(mo==2)
   {
    mo=="March";
   }
   else if(mo==3)
   {
    mo=="April";
   }
   else if(mo==4)
   {
    mo=="May";
   }
   else if(mo==5)
   {
    mo=="June";
   }
   else if(mo==6)
   {
    mo=="July";
   }
   else if(mo==7)
   {
    mo=="August";
   }
   else if(mo==8)
   {
    mo=="Septeember";
   }
   else if(mo==9)
   {
    mo=="October";
   }
   else if(mo==10)
   {
    mo=="November";
   }
   else if(mo==11)
   {
    mo=="December";
   }
   switch(day)
   {
    case 0:day="sunday"
    document.body.style.backgroundImage="url(./././sunday)"
    break;
     
    case 1: day="monday"
    document.body.style.backgroundImage="url(./././monday)"
    break;
      

    case 2:day="tuesday"
    document.body.style.backgroundImage="url(./././tuesday)"
    break;
      
    case 3:day="wednesday"
    document.body.style.backgroundImage="url(./././wednesday)"
   break;

    case 4:day="thursday"
    document.body.style.backgroundImage="url(./././thursday)"
    break;

    case 5:day="friday"
    document.body.style.backgroundImage="url(./././friday)"
    break;

    case 6:day="saturday"
    document.body.style.backgroundImage="url(./././saturday)"
    break;
   }

   document.getElementById("t1").innerHTML=`${hh}:${mm}:${ss}`;
   document.getElementById("date").innerHTML=`${tdt}:${mo}:${yy}`;
   document.getElementById("day").innerHTML=day;
   document.getElementById("sec").innerHTML=ss;
   setTimeout(digiclk,1000);




}
digiclk();