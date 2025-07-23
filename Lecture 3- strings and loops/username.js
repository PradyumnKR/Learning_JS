let fullName = prompt("Enter your full name : ");
fullName = fullName.toLowerCase();
fullName = fullName.replaceAll(" ","");
console.log(`@${fullName}${fullName.length}`);