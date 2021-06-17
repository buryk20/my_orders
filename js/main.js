window.onload = function () {

    // var informationOrder = document.querySelectorAll(".arrow-my-orders-icon");
    // var ordersDropDownList = document.getElementsByClassName("orders-drop-down-list");
    // var turnIcon = document.getElementsByClassName("arrow-my-orders-icon");

    // informationOrder.forEach((el) => {
    //     el.onclick = function (e) {
    //         // let target = e.target;
    //         // console.log(target);
    //         if (ordersDropDownList[0].hasAttribute("style")) {
    //             turnIcon[0].style.transform = 'rotate(0deg)';
    //             ordersDropDownList[0].removeAttribute("style");
    //         }

    //         else {
    //             turnIcon[0].style.transform = 'rotate(180deg)';
    //             ordersDropDownList[0].style.maxHeight = "1000px";
    //         }
    //     }
    // });

    var informationOrder = document.querySelectorAll(".arrow-my-orders-icon");
    informationOrder.forEach((el) => {
        el.onclick = function (e) {
            // let target = e.target;
            // console.log(target);
            const wrapper = el.closest(".order-row");
            const list = wrapper.querySelector('.orders-drop-down-list');
            console.log(wrapper);
            console.log(list);
            if (list.hasAttribute("style")) {
                el.style.transform = 'rotate(0deg)';
                list.removeAttribute("style");
            }

            else {
                el.style.transform = 'rotate(180deg)';
                list.style.maxHeight = "1000px";
            }
        }
    });


    /* var informationOrder = document.querySelectorAll(".arrow-my-orders-icon");
    var ordersDropDownList = document.getElementsByClassName("orders-drop-down-list");
    var turnIcon = document.getElementsByClassName("arrow-my-orders-icon");
    var clickOrder = document.getElementById("clickOrder")

    clickOrder.onclick = function (event) {
        var target = event.target;
        console.log(target.className === "arrow-my-orders-icon");
        if (target.className === "arrow-my-orders-icon") {
            if (ordersDropDownList[0].hasAttribute("style")) {
                turnIcon[0].style.transform = 'rotate(0deg)';
                ordersDropDownList[0].removeAttribute("style");
            }

            else {
                turnIcon[0].style.transform = 'rotate(180deg)';
                ordersDropDownList[0].style.maxHeight = "1000px";
            }
        }
    } */

    // informationOrder.forEach((el) => {
    //     el.onclick = function (e) {
    //         // let target = e.target;
    //         // console.log(target);
    //         if (ordersDropDownList[0].hasAttribute("style")) {
    //             turnIcon[0].style.transform = 'rotate(0deg)';
    //             ordersDropDownList[0].removeAttribute("style");
    //         }

    //         else {
    //             turnIcon[0].style.transform = 'rotate(180deg)';
    //             ordersDropDownList[0].style.maxHeight = "1000px";
    //         }
    //     }
    // });
}