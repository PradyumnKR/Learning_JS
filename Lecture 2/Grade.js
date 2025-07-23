let grade = prompt("Enter your Number:");
if(grade > 80 && grade<=100){
    console.log("GRADE: A");
}else if(grade >=70 && grade <80){
    console.log("GRADE: B");
}else if(grade>=60 && grade <70){
    console.log("GRADE: C");
}else if(grade >=50 && grade <60){
    console.log("GRADE: D");
}else if(grade >=0 && grade <50){
    console.log("GRADE: F");
}else{
    console.log("Enter a Valid Number (0-100)!");
}
