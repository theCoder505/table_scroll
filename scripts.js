const tdHeight = document.querySelector("#tableHolder tr").offsetHeight;


const height = document.querySelector('#tableHolder').offsetHeight;
document.querySelector(".bgGradientColor").style.height = height + "px";
document.querySelector(".bgGradientColor").style.marginTop = - height + "px";


document.querySelector(".getAllSpecs").addEventListener("click", function () {
    document.getElementById("tableHolder").classList.toggle("scrollRmvClass");
    document.getElementById("tableHolder").classList.toggle("beforeScrlTbl");
    document.querySelector(".bgGradientColor").classList.toggle("grandBg");

    var buttonText = document.getElementById("viewAll");
    if (buttonText.innerHTML === "View Minimum Specs") {
        buttonText.innerHTML = "View All Specs";
    } else {
        buttonText.innerHTML = "View Minimum Specs";
    }

    document.getElementById("viewAll").classList.toggle("minimum");


    if (document.querySelector("#tableHolder").classList.contains('scrollRmvClass')) {
        const totalTr = document.getElementById("tableDivId").rows.length;
        var setHeight = tdHeight * totalTr;
        document.querySelector(".scrollRmvClass").style.height = setHeight + "px";
    }else{

    }



});
