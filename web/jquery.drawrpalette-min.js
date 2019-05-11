!function(e){e.fn.drawrpalette=function(t,r){var o=this;return o.offset=5,o.pickerSize=200,o.get_mouse_value=function(e,t){var r={};return"touchmove"==e.type||"touchstart"==e.type?(r.x=e.originalEvent.touches[0].pageX-t.offset().left-o.offset,r.y=e.originalEvent.touches[0].pageY-t.offset().top-o.offset):(r.x=e.pageX-t.offset().left-o.offset,r.y=e.pageY-t.offset().top-o.offset),r},o.rgb_to_hex=function(e,t,r){return"#"+(16777216+(r|t<<8|e<<16)).toString(16).slice(1)},o.hex_to_rgb=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null},o.hsv_to_rgb=function(e,t,r){var o,a,s,l,i,n,d,p;switch(1===arguments.length&&(t=e.s,r=e.v,e=e.h),n=r*(1-t),d=r*(1-(i=6*e-(l=Math.floor(6*e)))*t),p=r*(1-(1-i)*t),l%6){case 0:o=r,a=p,s=n;break;case 1:o=d,a=r,s=n;break;case 2:o=n,a=r,s=p;break;case 3:o=n,a=d,s=r;break;case 4:o=p,a=n,s=r;break;case 5:o=r,a=n,s=d}return{r:Math.round(255*o),g:Math.round(255*a),b:Math.round(255*s)}},o.rgb_to_hsv=function(e,t,r){1===arguments.length&&(t=e.g,r=e.b,e=e.r);var o,a=Math.max(e,t,r),s=Math.min(e,t,r),l=a-s,i=0===a?0:l/a,n=a/255;switch(a){case s:o=0;break;case e:o=t-r+l*(t<r?6:0),o/=6*l;break;case t:o=r-e+2*l,o/=6*l;break;case r:o=e-t+4*l,o/=6*l}return{h:o,s:i,v:n}},o.hsv_to_xy=function(e,t,r){return{x:t*o.pickerSize+o.offset,y:(1-r)*o.pickerSize+o.offset}},o.xy_to_hsv=function(e,t){return{s:e/o.pickerSize,v:(o.pickerSize-t)/o.pickerSize}},o.draw_hsv=function(e,t){var r=this.hsv,a=t.getContext("2d");for(a.clearRect(0,0,t.width,t.height),row=0;row<e;row++){var s=a.createLinearGradient(0,0,e,0),l=(e-row)/e,i=o.hsv_to_rgb(r.h,0,l);s.addColorStop(0,"rgb("+i.r+", "+i.g+","+i.b+")");i=o.hsv_to_rgb(r.h,1,l);s.addColorStop(1,"rgb("+i.r+", "+i.g+","+i.b+")"),a.fillStyle=s,a.fillRect(o.offset,row+o.offset,e,1)}for(row=0;row<e;row++)a.fillStyle="hsl("+360/e*row+", 100%, 50%)",a.fillRect(e+o.offset+5,row+o.offset,40,1);a.fillStyle="black",a.fillRect(e+o.offset+3,o.offset+r.h*e-3,44,6),a.fillStyle="white",a.fillRect(e+o.offset+5,o.offset+r.h*e-1,40,2);var n=o.hsv_to_xy(this.hsv.h,this.hsv.s,this.hsv.v);a.beginPath(),a.lineWidth=3,a.strokeStyle="black",a.arc(n.x,n.y,5,0,2*Math.PI),a.stroke(),a.beginPath(),a.lineWidth=2,a.strokeStyle="white",a.arc(n.x,n.y,4,0,2*Math.PI),a.stroke()},o.update_color=function(){var e=this.hsv,t=o.hsv_to_rgb(e.h,e.s,e.v),r="rgb("+t.r+","+t.g+","+t.b+")";this.$button.css("background-color",r),o.draw_hsv.call(this,o.pickerSize,this.$dropdown.find("canvas")[0])},o.update_value=function(){var t=o.hsv_to_rgb(this.hsv.h,this.hsv.s,this.hsv.v),r=o.rgb_to_hex(t.r,t.g,t.b);e(this).val(r)},o.cancel=function(){var t=o.hex_to_rgb(e(this).val()),r=o.rgb_to_hsv(t.r,t.g,t.b);this.hsv=r,o.update_color.call(this),e(this).trigger("cancel.drawrpalette",e(this).val())},this.each(function(){var a=this;if("destroy"===t){if(!e(a).hasClass("active-drawrpalette"))return!1;a.$button.off("mousedown.drawrpalette touchstart.drawrpalette"),a.$dropdown.find(".ok").off("mouseup.drawrpalette touchend.drawrpalette"),a.$dropdown.find(".cancel").off("mouseup.drawrpalette touchend.drawrpalette"),a.$dropdown.off("mousedown.drawrpalette touchstart.drawrpalette"),a.$button.off("mousedown.drawrpalette touchstart.drawrpalette"),e(window).off("mousedown.drawrpalette touchstart.drawrpalette"),e(window).off("mousemove.drawrpalette touchmove.drawrpalette"),e(window).off("mouseup.drawrpalette touchend.drawrpalette"),e(a).show(),a.$button.remove(),a.$dropdown.remove(),e(a).unwrap(),delete a.$wrapper,delete a.$button,delete a.$dropdown,delete a.hsl,delete a.slidingHue,delete a.slidingHsl,e(a).removeClass("active-drawrpalette")}else if("set"==t){e(a).val(r);var s=o.hex_to_rgb(r),l=o.rgb_to_hsv(s.r,s.g,s.b);a.hsv=l,o.update_color.call(a)}else if("object"==typeof t||void 0===t){for(var i={},n=0,d=a.style.length;n<d;n++){var p=a.style[n],h=getComputedStyle(a,null).getPropertyValue(p);i[p]=h}var c=""!==a.className?a.className.split(" "):[];if(e(a).hasClass("active-drawrpalette"))return!1;a.className=a.className+" active-drawrpalette";var u={enable_alpha:!1,append_to:a};"object"==typeof t&&(u=Object.assign(u,t)),a.settings=u,a.plugin=o,e(this).wrap("<div class='drawrpallete-wrapper'></div>"),this.$wrapper=e(this).parent(),this.$wrapper.css({position:"relative",display:"inline-block"}),e(this).hide(),a.$button=e("<button>&nbsp;</button>"),a.$button.css({width:"40px",height:"40px",border:"2px solid #ccc","background-color":"#eee",cursor:"pointer","text-align":"text",padding:"0px","font-size":"2em","background-image":"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAG0lEQVR42mNgwAfKy8v/48I4FeA0AacVDFQBAP9wJkE/KhUMAAAAAElFTkSuQmCC')","background-repeat":"no-repeat","background-position":"24px 25px"}),a.$button.css(i),e.each(c,function(e,t){a.$button.addClass(t)}),this.$wrapper.append(a.$button);var v=o.pickerSize+2*o.offset,f=o.pickerSize+40+2*o.offset+5;if(a.$dropdown=e("<div><canvas style='display:block;' class='drawrpallete-canvas' width="+f+" height="+v+" style='height:"+v+"px;width:"+f+"px;'></canvas></div>"),a.$dropdown.append('<div style="height:28px;text-align:right;margin-top:-2px;padding:0px 5px;"><button class="cancel">cancel</button><button style="margin-left:5px;width:40px;" class="ok">ok</button></div>'),this.$wrapper.append(a.$dropdown),a.$dropdown.css({background:"#eee",width:f+"px",height:v+28+"px",position:"absolute","z-index":8}),a.$dropdown.find(".ok").css("color","black").on("mouseup.drawrpalette touchend.drawrpalette",function(){o.update_value.call(a),e(a).trigger("choose.drawrpalette",e(a).val()),a.$dropdown.hide(),e(a).trigger("close.drawrpalette")}),a.$dropdown.find(".cancel").css("color","black").on("mouseup.drawrpalette touchend.drawrpalette",function(){o.cancel.call(a),a.$dropdown.hide(),e(a).trigger("close.drawrpalette")}),a.$dropdown.on("mousedown.drawrpalette touchstart.drawrpalette",function(t){var r=o.get_mouse_value(t,a.$dropdown);if(r.x>0&&r.x<o.pickerSize&&r.y>0&&r.y<o.pickerSize){a.slidingHsl=!0;var s=o.xy_to_hsv(r.x,r.y);a.hsv.s=s.s,a.hsv.v=s.v,o.update_color.call(a);var l=o.hsv_to_rgb.call(a,a.hsv.h,a.hsv.s,a.hsv.v),i=o.rgb_to_hex.call(a,l.r,l.g,l.b);e(a).trigger("preview.drawrpalette",i)}else if(r.x>o.pickerSize+5&&r.x<o.pickerSize+45&&r.y>0&&r.y<o.pickerSize){a.slidingHue=!0;var n=parseFloat(1/o.pickerSize)*r.y;a.hsv.h=n,o.update_color.call(a);l=o.hsv_to_rgb.call(a,a.hsv.h,a.hsv.s,a.hsv.v),i=o.rgb_to_hex.call(a,l.r,l.g,l.b);e(a).trigger("preview.drawrpalette",i)}t.preventDefault(),t.stopPropagation()}),a.$dropdown.hide(),a.$button.on("mousedown.drawrpalette touchstart.drawrpalette",function(t){a.slidingHue=!1,a.slidingHsl=!1;var r=a.$button.offset().left+a.$dropdown.outerWidth(),s=e(window).scrollLeft()+e(window).width();a.$dropdown.show(),r<s?a.$dropdown.offset({top:a.$button.offset().top+a.$button.outerHeight(),left:a.$button.offset().left}):a.$dropdown.offset({top:a.$button.offset().top+a.$button.outerHeight(),left:a.$button.offset().left-a.$dropdown.outerWidth()+a.$button.outerWidth()});var l=o.hex_to_rgb(e(a).val()),i=o.rgb_to_hsv(l.r,l.g,l.b);a.hsv=i,o.update_color.call(a),e(a).trigger("open.drawrpalette"),t.preventDefault(),t.stopPropagation()}),e(window).on("mousedown.drawrpalette touchstart.drawrpalette",function(){a.$dropdown.is(":visible")&&(o.cancel.call(a),a.$dropdown.hide(),e(a).trigger("close.drawrpalette"))}),e(window).on("mousemove.drawrpalette touchmove.drawrpalette",function(t){a.$dropdown.find("canvas")[0].getContext("2d");var r=o.get_mouse_value(t,a.$dropdown);if(r.y>o.pickerSize&&(r.y=o.pickerSize),r.y<0&&(r.y=0),r.x<0&&(r.x=0),1==a.slidingHsl){r.x>o.pickerSize&&(r.x=o.pickerSize);var s=o.xy_to_hsv(r.x,r.y);a.hsv.s=s.s,a.hsv.v=s.v,o.update_color.call(a);var l=o.hsv_to_rgb.call(a,a.hsv.h,a.hsv.s,a.hsv.v),i=o.rgb_to_hex.call(a,l.r,l.g,l.b);e(a).trigger("preview.drawrpalette",i)}else if(1==a.slidingHue){var n=parseFloat(1/o.pickerSize)*r.y;a.hsv.h=n,o.update_color.call(a);l=o.hsv_to_rgb.call(a,a.hsv.h,a.hsv.s,a.hsv.v),i=o.rgb_to_hex.call(a,l.r,l.g,l.b);e(a).trigger("preview.drawrpalette",i)}}),e(window).on("mouseup.drawrpalette touchend.drawrpalette",function(){a.slidingHue=!1,a.slidingHsl=!1}),""!==e(this).val()){s=o.hex_to_rgb(e(this).val()),l=o.rgb_to_hsv(s.r,s.g,s.b);a.hsv=l,o.update_color.call(a)}else a.hsv={h:0,s:0,v:0},e(this).val("#000000"),o.update_color.call(a)}}),this}}(jQuery);