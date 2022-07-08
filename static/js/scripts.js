/*!
    * Start Bootstrap - SB Admin v7.0.1 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

//var copyOption = document.querySelector(".copyCheck");

//copyOption.addEventListener("change", function(){
//    if (copyOption.checked==true){
//       var start_times = document.querySelectorAll(".start-time");
//        var end_times = document.querySelectorAll(".end-time");
//
//        //start times
//       for (const start_time of start_times){
//            start_time.addEventListener("change", function(){
//                const inputs_start = document.querySelectorAll(".start-time");
//                for (const input of inputs_start){
//                    value = start_time.value;
//                    input.value = value;
//                }
//            });
//        }

        //end times
//        for (const end_time of end_times){
//            end_time.addEventListener("change", function(){
//                const inputs_start = document.querySelectorAll(".end-time");
//                for (const input of inputs_start){
//                    value = end_time.value;
//                    input.value = value;
//                }
//            });
//        }
//    }

 //   else{
 //       var workTime = document.querySelectorAll(".work-time");
 //       for (const time of workTime){
 //           clone = time.cloneNode(true);
 //           time.parentNode.replaceChild(clone, time);
 //       }

 //   }
//});

// checkbox 전체선택해제
document.getElementById("checkbox_controller").addEventListener("click", function(){
    const selectAll = document.getElementById("checkbox_controller");
    const checkboxes = document.getElementsByClassName("chk_box");
    for (const checkbox of checkboxes){
        checkbox.checked = selectAll.checked;
    }
});

//일괄 변경
const change_status_btn = document.querySelector("#change_status_btn");
change_status_btn.addEventListener("click",function(){
    var order_arr=[];
    const checkboxes = document.querySelectorAll(".chk_box");
    for (const checkbox of checkboxes){
        if (checkbox.checked){
            order_arr.push(checkbox.name)
        };
    };

    var status_controller = document.querySelector("#status_controller");
    var status_value = status_controller.options[status_controller.selectedIndex].value;

    var data = new Object();
    data.order_id = order_arr;
    data.status = status_value;
    data.start_date = document.querySelector("#startDate").value;
    data.end_date = document.querySelector("#endDate").value;

    var form = document.createElement("form");
    form.setAttribute("method","post");
    form.setAttribute("action","http://192.168.50.80:5000/order/change_status");
    document.characterSet = "utf-8";

    for (var key in data){
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type","hidden");
        hiddenField.setAttribute("name",key);
        hiddenField.setAttribute("value", data[key]);
        form.appendChild(hiddenField);

    }
    document.body.appendChild(form);
    form.submit();
})

