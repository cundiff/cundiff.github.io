import classes from './main.scss';

export default () => {
  //console.log("hello");
};

import $ from 'jquery';

$(document).ready(
  function() {
    console.log("Ready");

    $( "li" ).mouseover(
      function() {
        //console.log("hovering");
        $( this ).find(".detail").removeClass( "fadeOutLeft animated");
        $( this ).find(".detail").addClass( "fadeInLeft animated");
        $( this ).find(".detail").css("display", "inline-block");
      }
    )

    $( "li" ).mouseout(
      function() {
        //console.log("hovering");
        $( this ).find(".detail").removeClass( "fadeInLeft animated");
        $( this ).find(".detail").addClass( "fadeOutLeft animated");
        $( this ).parent.css("width","1em");
      }
    )

  }
)
