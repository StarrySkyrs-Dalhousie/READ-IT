const getLinks =[
    "clients",
    "clients/clientA",
    "clients/city/Halifax",
    "lines",
    "lines/8",
    "lines/delete/8",
    "pos",
    "pos/orderA",
    "pos/processed",
    "pos/created",
    "pos/pending",
    "pos/client/clientA",
    "pos/cancel/clientA",
    "pos/process/clientA",
    "parts",
    "parts/3",
    "agent/po/process/orderA",
    "agent/po/cancel/orderA",
    "client/order/pending/orderA",
    "client/order/process/orderA",
    "client/order/cancel/orderA"
];

function renderEnd(){
    var result = "";
    for(var i = 0; i < getLinks.length; i++){
        result += "<li><a href='"+getLinks[i]+"'>"+getLinks[i]+"</a></li>";
    }
    var UI = document.getElementById('endpoints');
    $("#endpoints").append(result);
};
