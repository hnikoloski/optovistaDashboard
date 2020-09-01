$(function () {
  $(".imgCheckBox").on("click", function (e) {
    e.preventDefault();
    $(this).prev().prop("checked", true);

    $(".selection-wrapper.active").removeClass("active");
    $(this).parent().addClass("active");

    console.log($(this).prev());
  });

  $(".side-item").on("mouseover", function () {
    $(".side-item").removeClass("active");
    $(this).addClass("active");

    $(this).on("mouseleave", function () {
      $(this).removeClass("active");
    });
  });

  $(".removeFavCard").on("mouseover", function () {
    $(this).addClass("hovered");

    $(this).on("mouseleave", function () {
      $(this).removeClass("hovered");
    });
    $(".modal-card::before").css("opacity", "0.3");
  });

  // Home Slider Settings
  $(".catalogCarousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: ` <div class="prevArrow"> <?xml version="1.0"encoding="utf-8"?> <svg version="1.1"id="Group_2263"width="21.78"height="40.43"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"x="0px"y="0px" viewBox="0 0 21.8 40.4"style="enable-background:new 0 0 21.8 40.4;"xml:space="preserve"> <style type="text/css"> .st0 {
        fill:#676767;
      }

      </style> <path id="Path_2097"class="st0"d="M0.5,21.3L19.1,40c0.6,0.6,1.6,0.6,2.2,0c0.6-0.6,0.6-1.6,0-2.2L3.8,20.2L21.3,2.6
c0.6-0.6, 0.6-1.6, 0-2.2c-0.6-0.6-1.6-0.6-2.2, 0L0.5, 19.1C-0.1, 19.7-0.1, 20.7, 0.5, 21.3z"/>
</svg> </div> `,
    nextArrow: ` <div class="nextArrow"> <svg id="Group_2263"data-name="Group 2263"xmlns="http://www.w3.org/2000/svg"width="21.78"height="40.43"viewBox="0 0 21.78 40.43"> <path id="Path_2097"data-name="Path 2097"d="M123.621,19.106,104.952.437a1.556,1.556,0,0,0-2.2,2.2l17.569,17.569L102.752,37.775a1.556,1.556,0,0,0,2.2,2.2l18.669-18.669A1.556,1.556,0,0,0,123.621,19.106Z"transform="translate(-102.297 0)"fill="#676767"/> </svg> </div> `,
  });

  // Notification
  $(".hasNotification").on("click", function () {
    $(".notificationWindow").slideToggle();
    $(this).removeClass("hasNotification");
  });
  $(".userToolbar, .userFullName").on("click", function () {
    $(".userInfo").slideToggle();
  });
  // Fav
  $(".fav-modal-open").on("click", function (e) {
    e.preventDefault();

    $(".modal.right.fade .modal-dialog")
      .css({
        right: "-320px",
      })
      .animate(
        {
          right: "0px",
        },
        "slow"
      );
  });
  // $(".collapse").addClass("show");
});
$(
  ".content-wrapper section.ordini .ordersTable .toggleable i.ci.ci-arrowDown"
).each(function (index) {
  $(this).attr("data-target", "#id" + (index + 1));
});
$(".singleOrderDetails").each(function (index) {
  $(this).attr("id", "id" + (index + 1));
});
// copy values
$("#copyValues").on("click", function (e) {
  e.preventDefault();
  $("#sferoXs").val($("#sferoDx").val());
  $("#cilindroXs").val($("#cilindroDx").val());
  $("#asseXs").val($("#asseDx").val());
  $("#diametroXs").val($("#diametroDx").val());
  $("#addizioneXs").val($("#addizioneDx").val());
  $("#altezzaXs").val($("#altezzaDx").val());
});

$(".singleProductPrice").each(function (i) {
  $(this).addClass("productNum-" + (i + 1));
});
function radioCheck(radioName, parentClass, modalShow) {
  $(`input:radio[name='${radioName}']`).on("change", function () {
    $("." + parentClass).removeClass("active"); //if any previous selecton is done remove it
    $(this)
      .parent("." + parentClass)
      .addClass("active");
    if (modalShow == true) {
      $("#promoCart").modal("show");
    }
  });
}
// $('input:radio[name="imgCheck"').on("change", function () {
//   $(".selection-wrapper").removeClass("active");
//   $(this).parent(".selection-wrapper").addClass("active");
// });
function getFileName(elm) {
  var fn = $(elm).val();
  var filename = fn.replace(/C:\\fakepath\\/i, "");
  var label = $(elm).next();
  if (fn != "") {
    $(label).text(filename);
    $(label).css("border", "2px solid #276462");
  }
}

$(".choice-container").on("click", function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
});
$(".notInterested").on("click", function () {
  $("#promoCart").modal("toggle");
});
function checkCartTotal() {
  let cartTotal = [];

  $(".singleOrderPrice").each(function (index, obj) {
    cartTotal.push(parseInt($(this).text()));
  });
  let cartTotalSum = cartTotal.reduce(function (a, b) {
    return a + b;
  }, 0);
  $("#totalPrice").text(cartTotalSum);
}
$(".largeTablet .selection-wrapper").on("click", function () {
  $("#additionalProductInfo1").slideDown();
  let heightNeeded = $("#additionalProductInfo1").height();
  $("#step-4").css("height", `+=` + heightNeeded);
});
// Radio Buttons Check
radioCheck("select-product", "selection-wrapper", true);
radioCheck("select-treatment", "selection-wrapper", false);
radioCheck("select-product-treatment", "selection-wrapper", false);
radioCheck("select-color", "addSectionWrapper", false);
radioCheck("modulo", "selection-wrapper", false);
// radioCheck("imgCheck", "selection-wrapper", false);
