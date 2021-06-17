window.onload = function () {

    var informationOrder = document.querySelectorAll(".arrow-my-orders-icon");
    var ordersDropDownList = document.getElementsByClassName("orders-drop-down-list");
    var turnIcon = document.getElementsByClassName("arrow-my-orders-icon");

    informationOrder.forEach((el) => {
        el.onclick = function (e) {
            // let target = e.target;
            // console.log(target);
            if (ordersDropDownList[0].hasAttribute("style"))
            {
                turnIcon[0].style.transform = 'rotate(0deg)';
                ordersDropDownList[0].removeAttribute("style");
            }
                
            else
                {
                    turnIcon[0].style.transform = 'rotate(180deg)';
                    ordersDropDownList[0].style.maxHeight = "1000px";
            }
        }
    });
}