var chose;
var cho;
var cho2;
var count = 0;
var count2 = 0;
var assiggn;
var store = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Choosee = () => {

    chose = document.getElementById("display");
    if (count2 == 1)
        alert("press the reset button to play again");
    else {
        if (chose.value != '') {

            if (chose.value == 'X' || chose.value == 0) {
                cho = chose.value;
                if (cho == 'X') {
                    chose.value = 'player 1 =' + cho + '  player 2 =' + 0;
                    cho2 = 0;
                }
                else {
                    chose.value = 'player 1 =' + cho + '  player 2 =' + 'X';
                    cho2 = 'X';
                }

            }
            else
                alert("please choose X or 0");
        }
        else
            alert("please choose X or 0");
    }
};
const Display = (num) => {
    if (cho == 'X' || cho == 0) {
        if (store[num] != 0) {
            store[num] = 0;
            ++count;
            if (count2 == 1) {
                alert("if you want to play agian press reset button");

            }
            else {
                console.log(count);
                if (count % 2 == 0) {
                    chose.value = "player ist's turn";
                    assiggn = cho2;
                }
                else {
                    if (count == 9) {
                        assiggn = cho;
                        chose.value = "player ist's turn";
                    }
                    else {
                        chose.value = "player 2nd's turn";
                        assiggn = cho;
                    }
                }
                switch (num) {
                    case 1:
                        document.getElementById("a").value = assiggn;
                        break;
                    case 2:
                        document.getElementById("b").value = assiggn;
                        break;
                    case 3:
                        document.getElementById("c").value = assiggn;
                        break;
                    case 4:
                        document.getElementById("d").value = assiggn;
                        break;
                    case 5:
                        document.getElementById("e").value = assiggn;
                        break;
                    case 6:
                        document.getElementById("f").value = assiggn;
                        break;
                    case 7:
                        document.getElementById("g").value = assiggn;
                        break;
                    case 8:
                        document.getElementById("h").value = assiggn;
                        break;
                    case 9:
                        document.getElementById("i").value = assiggn;
                        break;

                    default:
                }

                if (count >= 5)
                    Calculate();

            }
        }
        else if(count2==1)
        alert("press the reset button to play again");
        else
            alert("OOps its Another Player's turn ");
    }
    else
        alert("please choose X or 0 first");


};

// var a = document.getElementById("a").value;
// var b = document.getElementById("b").value;
// var c = document.getElementById("c").value;
// var d = document.getElementById("d").value;
// var e = document.getElementById("e").value;
// var f = document.getElementById("f").value;
// var g = document.getElementById("g").value;
// var h = document.getElementById("h").value;
// var i = document.getElementById("i").value;
const Calculate = () => {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var e = document.getElementById("e").value;
    var f = document.getElementById("f").value;
    var g = document.getElementById("g").value;
    var h = document.getElementById("h").value;
    var i = document.getElementById("i").value;

    if (a == b && a == c) {
        if (cho == a) {
            chose.value = "Player 1 win";
            count2 = 1;    //to stop the game i.e after winning if user wants to press again the buttons he won't be able to do that
        }
        else {
            chose.value = "Player 2 win";
            count2 = 1;
        }
    }
    else if (d == e && d == f) {
        if (cho == d) {
            chose.value = "Player 1 win";
            count2 = 1;
        }
        else {
            chose.value = "Player 2 win";
            count2 = 1;
        }
    }
    else if (g == h && g == i) {
        if (cho == g) {
            chose.value = "Player 1 win";
            count2 = 1;
        }
        else {
            chose.value = "Player 2 win";
            count2 = 1;
        }
    }
    else if (a == d && a == g) {
        if (cho == a) {
            chose.value = "Player 1 win";
            count2 = 1;
        }
        else {
            chose.value = "Player 2 win";
            count2 = 1;
        }
    }
    else if (b == e && b == h) {
        if (cho == b) {
            chose.value = "Player 1 win";
            count2 = 1;
        }
        else {
            chose.value = "Player 2 win";
            count2 = 1;
        }
    }
    else if (c == f && c == i) {
        if (cho == c) {
            chose.value = "Player 1 win";
            count2 = 1;
        }
        else {
            chose.value = "Player 2 win";
            count2 = 1;
        }
    }
    else if (a == e && a == i) {
        if (cho == a) {
            chose.value = "Player 1 win";
            count2 = 1;
        }
        else {
            chose.value = "Player 2 win";
            count2 = 1;
        }
    }
    else if (c == e && c == g) {
        if (cho == c) {
            chose.value = "Player 1 win";
            count2 = 1;
        }
        else {
            chose.value = "Player 2 win";
            count2 = 1;
        }
    }
    else if (count == 9) {
        
        chose.value = "Match Drawn";
        count2 = 1;
    }


};
const Reset = () => {
    document.getElementById("a").value = '-';
    document.getElementById("b").value = '--';
    document.getElementById("c").value = '-';
    document.getElementById("d").value = '-';
    document.getElementById("e").value = '--';
    document.getElementById("f").value = '-';
    document.getElementById("g").value = '--';
    document.getElementById("h").value = '-';
    document.getElementById("i").value = '--';
    chose.value = '';
    count = 0;
    count2 = 0;
    store = [1, 2, 3, 4, 5, 6, 7, 8, 9];

}