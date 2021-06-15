window.onload = function () {
    var informationOrder = document.querySelectorAll('.arrow-my-orders-icon');
    var ordersDropDownList = document.getElementsByClassName('orders-drop-down-list');

    [].forEach.call(informationOrder, function (el) {
        el.onclick = function (e) {
            if (ordersDropDownList[0].style.display != 'flex') {
                ordersDropDownList[0].style.display = 'flex';
                ordersDropDownList[0].style.maxHeight = '100%';
                ordersDropDownList[0].style.transition = 'all 4s ease-out 4s';
                document.getElementsByClassName('arrow-my-orders-icon')[0].style.transform = 'rotate(180deg)';
            } else {
                ordersDropDownList[0].style.display = 'none';
                ordersDropDownList[0].style.maxHeight = '0';
                document.getElementsByClassName('arrow-my-orders-icon')[0].style.transform = 'rotate(0deg)';
            }




        }
    });

}