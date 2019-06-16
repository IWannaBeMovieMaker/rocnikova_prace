$(document).ready(function () {
    $("#zedps").hide();
    $("#zedrs").hide();
    $("#zedss").hide();
    $("zedss").hide();
    $("#mtm-d").hide();

  
  
  // Buttony v listu alb
    $("#zedp").on('click', function () {
      $("#zedps").show("fast");
      $("#zedrs").hide("fast");
      $("#zedls").hide("fast");
      $("#zedss").hide("fast");
      $("#zeddm").hide("fast");
    });
  
    $("#zedq").on('click', function () {
      $("#zedps").hide("fast");
      $("#zedrs").show("fast");
      $("#zedls").hide("fast");
      $("#zedss").hide("fast");
      $("#zeddm").hide("fast");
    });
  
    $("#zedw").on('click', function () {
      $("#zedps").hide("fast");
      $("#zedrs").hide("fast");
      $("#zedls").show("fast");
      $("#zedss").hide("fast");
      $("#zeddm").hide("fast");
    });
  
    $("#zede").on('click', function () {
      $("#zedps").hide("fast");
      $("#zedrs").hide("fast");
      $("#zedls").hide("fast");
      $("#zedss").show("fast");
      $("#zeddm").hide("fast");
    });
  
    $("#zedr").on('click', function () {
      $("#zedps").hide("fast");
      $("#zedrs").hide("fast");
      $("#zedls").hide("fast");
      $("#zedss").hide("fast");
      $("#zeddm").show("fast");
    });
});