window.onload = function () {

    var informationOrder = document.querySelectorAll(".arrow-my-orders-icon");
    var ordersDropDownList = document.getElementsByClassName("orders-drop-down-list");
    var turnIcon = document.getElementsByClassName("arrow-my-orders-icon");

    informationOrder.forEach((el) => {
        el.onclick = function (e) {
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
    // var informationOrder = document.querySelectorAll('.arrow-my-orders-icon');
    // var ordersDropDownList = document.getElementsByClassName('orders-drop-down-list');

    // informationOrder.forEach.call((el) => {
    //     el.onclick = function (e) {
    //         if (ordersDropDownList[0].hasAttribute("style")) {
    //             // ordersDropDownList[0].style.display = 'flex';
    //             ordersDropDownList[0].style.maxHeight = '300px';
    //             ordersDropDownList[0].removeAttribute("style");
    //             // ordersDropDownList[0].style.transition = 'all 4s ease-out 4s';
    //             // document.getElementsByClassName('arrow-my-orders-icon')[0].style.transform = 'rotate(180deg)';
    //         } else {
    //             // ordersDropDownList[0].style.display = 'none';
    //             ordersDropDownList[0].style.maxHeight = '300';
    //             // document.getElementsByClassName('arrow-my-orders-icon')[0].style.transform = 'rotate(0deg)';
    //         }
    //     }




    //     }
    // });

}