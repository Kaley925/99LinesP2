/*let friends = ["hunter", "margaret", "simon", "sharon", "scott"]*/

/*for (let count = 0; count < friends.length; count++) {
    for (let i = 99; i > 0; i--) {
        let j = i - 1;
        if (i > 2) {
            console.log(i + " lines of code in the file, " + i, " lines of code; " + friends[count] + " strikes one out, clears it all out " + j + " lines of code in the file.")
        } else if (i == 2) {
            console.log(i + " lines of code in the file, " + i, " lines of code; " + friends[count] + "  strikes on out, clears it all out " + j + " line of code in the file.")
        } else {
            console.log(i + " line of code in the file, " + i + " line of code; " + friends[count] + " strikes one out, clears it all out no more lines of code in the file")
        }
    }
}*/

/*-----------------------------------------------------*/


document.addEventListener("DOMContentLoaded",function(){


button.addEventListener('click', sing);
function sing (){
    let friends = ["hunter", "margaret", "simon", "sharon", "scott"];
    let div = document.createElement('div');
    div.className= 'friend';
    document.body.appendChild(div);
    
    
    
    
    
    
    
    
    for (let count = 0; count < friends.length; count++) {
        let h3 = document.createElement('h3');
        let name = document.createTextNode(friends[count]);
        div.appendChild(h3);
        h3.appendChild(name);
        for (let i = 99; i > 0; i--) {
            let j = i - 1;
            
            if (i > 2) {
                let p = document.createElement('p');
                h3.appendChild(p);
                let ptext1 = document.createTextNode(i + " lines of code in the file, " + i + " lines of code; " + friends[count] + " strikes one out, clears it all out " + j + " lines of code in the file.");
                p.appendChild(ptext1);
                
            } else if (i == 2) {
                let p =document.createElement('p');
                h3.appendChild(p);
                let ptext2 = document.createTextNode(i + " lines of code in the file, " + i + " lines of code; " + friends[count] + "  strikes on out, clears it all out " + j + " line of code in the file.");
                p.appendChild(ptext2);
            } else {
                let p = document.createElement('p');
                h3.appendChild(p);
                let ptext3 = document.createTextNode(i + " line of code in the file, " + i + " line of code; " + friends[count] + " strikes one out, clears it all out no more lines of code in the file");
                p.appendChild(ptext3);
            }
            
        }/*end of normal for loop*/
    }/*end of big for loop*/
    
   
    



}/*end of function sing*/

})/*DOM CONTENT LOADED*/