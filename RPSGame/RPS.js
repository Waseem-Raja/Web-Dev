
const compute = (buttonText) => {
  
   let valuee=buttonText;
   console.log(valuee);
    if (valuee == "rock" || valuee == "paper" || valuee == "scissor") {
        let opposite = Math.floor((Math.random() * 3) + 0);
        function map(vall) {
            if (vall == "rock")
                return 0;
            else if (vall == "scissor")
                return 1;
            else
                return 2;
        }
        let num = map(valuee);
        console.log(num);
        console.log(opposite);
        switch (num) {
            case 0:
                if (opposite == 0 && num == 0)
                    document.getElementById("view").value = "ITS A TIE";
                else if (opposite == 1 && num == 0)
                    document.getElementById("view").value = "You Won  you choose rock and computer choose scissor \n (rock crushes scissor)";
                else if (opposite == 2 && num == 0)
                    document.getElementById("view").value = "Computer Won you choose rock and computer choose paper \n(paper covers rock)";
                break;
            case 1:
                if (opposite == 0 && num == 1)
                    document.getElementById("view").value = "Computer  Won \n you choose scissor and computer choose rock \n( Rock crushes scissor)";
                else if (opposite == 1 && num == 1)
                    document.getElementById("view").value = "ITS A TIE ";
                else if (opposite == 2 && num == 1)
                    document.getElementById("view").value = "You  Won \n you choose scissor and computer choose paper \n (scissor cuts paper)";
                break;
            case 2:
                if (opposite == 0 && num == 2)
                    document.getElementById("view").value = "You  Won \n you choose paper and computer choose rock \n (paper covers rock)";
                else if (opposite == 1 && num == 2)
                    document.getElementById("view").value = "Computer   Won \n you choose paper and computer choose scissor \n( scissor cuts paper)";
                else if (opposite == 2 && num == 2)
                    document.getElementById("view").value = "ITS A TIE";
                break;
            default:

        }
    }
    else
        alert("Please Enter the correct input");


};


