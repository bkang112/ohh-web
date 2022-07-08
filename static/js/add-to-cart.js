const addToCartForms = document.querySelectorAll(".add-to-cart-form");

for (const forms of addToCartForms){
    forms.addEventListener("submit", function(e){
        e.preventDefault();

        var form = $(this);
        var url = form.attr("action");

        $.ajax({
            method:"POST",
            url:url,
            data : form.serialize()

        })

    })
};