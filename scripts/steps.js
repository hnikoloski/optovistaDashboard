$(document).ready(function () {
  // SmartWizard initialize
  $("#smartwizard").smartWizard({
    justified: true,
    toolbarSettings: {
      toolbarPosition: "bottom", // none, top, bottom, both
      toolbarButtonPosition: "center", // left, right, center
      showNextButton: false, // show/hide a Next button
      showPreviousButton: false, // show/hide a Previous button
      toolbarExtraButtons: [
        $("<button></button>")
          .text("Reset")
          .addClass("btn btn-info")
          .on("click", function () {
            window.location.href = "";
          }),
        $("<button></button>").text("Avanti").addClass("btn sw-btn-next"),
      ], // Extra buttons to show on toolbar, array of jQuery input/buttons elements
    },
    anchorSettings: {
      anchorClickable: true, // Enable/Disable anchor navigation
      enableAllAnchors: false, // Activates all anchors clickable all times
      markDoneStep: true, // Add done state on navigation
      markAllPreviousStepsAsDone: true, // When a step selected by url hash, all previous steps are marked done
      removeDoneStepOnNavigateBack: false, // While navigate back done step after active step will be cleared
      enableAnchorOnDoneStep: true, // Enable/Disable the done steps navigation
    },
    transition: {
      animation: "slide-horizontal", // Effect on navigation, none/fade/slide-horizontal/slide-vertical/slide-swing
      speed: "4000", // Transion animation speed
      easing: "", // Transition animation easing. Not supported without a jQuery easing plugin
    },
    autoAdjustHeight: true, // Automatically adjust content height
    theme: "dots",
    lang: {
      // Language variables for button
      next: "Avanti",
      previous: "Previous",
    },
  });

  $(".sw-btn-next").on("click", function () {
    $(".step-wrapper").has(".done").addClass("done");
    checkCartTotal();
    if (window.location.hash == "#step-7") {
      $(
        ".content-wrapper section.ordini-flow .miniCart .miniCartInfo"
      ).slideDown();
      $(".floatingCart").hide();
      // $(".showMobile").show();
    }
  });
});
