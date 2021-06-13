window.onload = function () {
    var informationOrder = document.querySelectorAll('.arrow-my-orders-icon');
    var ordersDropDownList = document.getElementsByClassName('orders-drop-down-list');

    [].forEach.call(informationOrder, function (el) {
        el.onclick = function (e) {
            if (ordersDropDownList[0].style.display != 'flex') {
                ordersDropDownList[0].style.display = 'flex';
                ordersDropDownList[0].style.height = '100%'
                // ordersDropDownList[0].style.transition = 'all 1s ease-out'
            } else {
                ordersDropDownList[0].style.display = 'none';
                ordersDropDownList[0].style.height = '0'
            }




        }
    });

}