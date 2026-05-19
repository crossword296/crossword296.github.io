var txt = new Array();
txt[0]="./sk/index.html";
txt[1]="./wd/index.html";
txt[2]="./event/index.html";
txt[3]="./puzzle/index.html";
txt[4]="top.html";
txt[5]="./wd/index.html";
txt[6]="./wd/index.html";
txt[7]="./puzzle/index.html";
txt[8]="./puzzle/index.html";
txt[9]="top.html";

mmax = 10; //メッセージ行数
txtno = Math.floor(Math.random() * mmax);
location.href=txt[txtno];
