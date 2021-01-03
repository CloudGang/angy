import React from "react";

function Consent(props) {
  console.log("this is in itemshipping", props);
  return (
        <div>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link rel="alternate" type="application/json+oembed" href="https://www.jotform.com/oembed/?format=json&url=https%3A%2F%2Fform.jotform.com%2F210020197444142" title="oEmbed Form" />
          <link rel="alternate" type="text/xml+oembed" href="https://www.jotform.com/oembed/?format=xml&url=https%3A%2F%2Fform.jotform.com%2F210020197444142" title="oEmbed Form" />
          <meta property="og:title" content="Consent Form" />
          <meta property="og:url" content="https://form.jotform.com/210020197444142" />
          <meta property="og:description" content="Please click the link to complete this form." />
          <meta name="slack-app-id" content="AHNMASS8M" />
          <link rel="shortcut icon" href="https://cdn.jotfor.ms/favicon.ico" />
          <link rel="canonical" href="https://form.jotform.com/210020197444142" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=1" />
          <meta name="HandheldFriendly" content="true" />
          <title>Consent Form</title>
          <link href="https://cdn.jotfor.ms/static/formCss.css?3.3.22539" rel="stylesheet" type="text/css" />
          <link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/nova.css?3.3.22539" />
          <link type="text/css" media="print" rel="stylesheet" href="https://cdn.jotfor.ms/css/printForm.css?3.3.22539" />
          <link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/themes/CSS/566a91c2977cdfcd478b4567.css?themeRevisionID=5dca5ac9a5e86d17235d90c1" />
          <link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/payment/payment_styles.css?3.3.22539" />
          <link type="text/css" rel="stylesheet" href="https://cdn.jotfor.ms/css/styles/payment/payment_feature.css?3.3.22539" />
          <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\n\n    .form-label-left{\n        width:150px;\n    }\n    .form-line{\n        padding-top:12px;\n        padding-bottom:12px;\n    }\n    .form-label-right{\n        width:150px;\n    }\n    body, html{\n        margin:0;\n        padding:0;\n        background:rgb(244, 242, 241);\n    }\n\n    .form-all{\n        margin:0px auto;\n        padding-top:0px;\n        width:690px;\n        color:rgb(57, 57, 57) !important;\n        font-family:'Maven Pro';\n        font-size:15px;\n    }\n" }} />
          <style type="text/css" id="form-designer-style" dangerouslySetInnerHTML={{__html: "\n    /* Injected CSS Code */\n@import \"https://fonts.googleapis.com/css?family=Maven Pro:light,lightitalic,normal,italic,bold,bolditalic\";\n.form-all:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.form-all {\n  font-family: \"Maven Pro\", sans-serif;\n}\n.form-all {\n  width: 690px;\n}\n.form-label-left,\n.form-label-right {\n  width: 150px;\n}\n.form-label {\n  white-space: normal;\n}\n.form-label.form-label-auto {\n  display: inline-block;\n  float: left;\n  text-align: left;\n  word-break: break-word;\n  width: 150px;\n}\n.form-label-left {\n  display: inline-block;\n  white-space: normal;\n  float: left;\n  text-align: left;\n}\n.form-label-right {\n  display: inline-block;\n  white-space: normal;\n  float: left;\n  text-align: right;\n}\n.form-label-top {\n  white-space: normal;\n  display: block;\n  float: none;\n  text-align: left;\n}\n.form-radio-item label:before {\n  top: 0;\n}\n.form-all {\n  font-size: 15px;\n}\n.form-label {\n  font-weight: bold;\n}\n.form-checkbox-item label,\n.form-radio-item label {\n  font-weight: normal;\n}\n.supernova {\n  background-color: #f4f2f1;\n  background-color: #cacaca;\n}\n.supernova body {\n  background-color: transparent;\n}\n/*\n@width30: (unit(@formWidth, px) + 60px);\n@width60: (unit(@formWidth, px)+ 120px);\n@width90: (unit(@formWidth, px)+ 180px);\n*/\n/* | */\n@media screen and (min-width: 480px) {\n  .supernova .form-all {\n    border: 1px solid #b1b1b1;\n    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.1);\n    -moz-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.1);\n    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.1);\n  }\n}\n/* | */\n/* | */\n@media screen and (max-width: 480px) {\n  .jotform-form .form-all {\n    margin: 0;\n    width: 100%;\n  }\n}\n/* | */\n/* | */\n@media screen and (min-width: 480px) and (max-width: 767px) {\n  .jotform-form .form-all {\n    margin: 0;\n    width: 100%;\n  }\n}\n/* | */\n/* | */\n@media screen and (min-width: 480px) and (max-width: 689px) {\n  .jotform-form .form-all {\n    margin: 0;\n    width: 100%;\n  }\n}\n/* | */\n/* | */\n@media screen and (min-width: 768px) {\n  .jotform-form {\n    padding: 60px 0;\n  }\n}\n/* | */\n/* | */\n@media screen and (max-width: 689px) {\n  .jotform-form .form-all {\n    margin: 0;\n    width: 100%;\n  }\n}\n/* | */\n.supernova .form-all,\n.form-all {\n  background-color: #f4f2f1;\n  border: 1px solid transparent;\n}\n.form-header-group {\n  border-color: #ded7d4;\n}\n.form-matrix-table tr {\n  border-color: #ded7d4;\n}\n.form-matrix-table tr:nth-child(2n) {\n  background-color: #e9e5e3;\n}\n.form-all {\n  color: #393939;\n}\n.form-header-group .form-header {\n  color: #393939;\n}\n.form-header-group .form-subHeader {\n  color: #535353;\n}\n.form-sub-label {\n  color: #535353;\n}\n.form-label-top,\n.form-label-left,\n.form-label-right,\n.form-html {\n  color: #393939;\n}\n.form-checkbox-item label,\n.form-radio-item label {\n  color: #535353;\n}\n.form-line.form-line-active {\n  -webkit-transition-property: all;\n  -moz-transition-property: all;\n  -ms-transition-property: all;\n  -o-transition-property: all;\n  transition-property: all;\n  -webkit-transition-duration: 0.3s;\n  -moz-transition-duration: 0.3s;\n  -ms-transition-duration: 0.3s;\n  -o-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease;\n  -moz-transition-timing-function: ease;\n  -ms-transition-timing-function: ease;\n  -o-transition-timing-function: ease;\n  transition-timing-function: ease;\n  background-color: rgba(255, 255, 255, 0.75);\n}\n/* omer */\n.form-radio-item,\n.form-checkbox-item {\n  padding-bottom: 0px !important;\n}\n.form-radio-item:last-child,\n.form-checkbox-item:last-child {\n  padding-bottom: 0;\n}\n/* omer */\n.form-single-column .form-checkbox-item,\n.form-single-column .form-radio-item {\n  width: 100%;\n}\n.form-checkbox-item .editor-container div,\n.form-radio-item .editor-container div {\n  position: relative;\n}\n.form-checkbox-item .editor-container div:before,\n.form-radio-item .editor-container div:before {\n  display: inline-block;\n  vertical-align: middle;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  left: 0;\n  width: 18px;\n  height: 18px;\n}\n.supernova {\n  height: 100%;\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-position: center top;\n  background-repeat: repeat;\n}\n.supernova {\n  background-image: none;\n  background-image: url(\"//www.jotform.com/images/backgrounds/tileable_wood_texture.png\");\n}\n#stage {\n  background-image: none;\n  background-image: url(\"//www.jotform.com/images/backgrounds/tileable_wood_texture.png\");\n}\n/* | */\n.form-all {\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-position: center top;\n  background-repeat: repeat;\n}\n.form-header-group {\n  background-repeat: no-repeat;\n  background-attachment: scroll;\n  background-position: center top;\n}\n.form-line {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n.form-line {\n  padding: 12px 36px;\n}\n.form-all .qq-upload-button,\n.form-all .form-submit-button,\n.form-all .form-submit-reset,\n.form-all .form-submit-print {\n  font-size: 1em;\n  padding: 9px 15px;\n  font-family: \"Maven Pro\", sans-serif;\n  font-size: 15px;\n  font-weight: normal;\n}\n.form-all .form-pagebreak-back,\n.form-all .form-pagebreak-next {\n  font-size: 1em;\n  padding: 9px 15px;\n  font-family: \"Maven Pro\", sans-serif;\n  font-size: 15px;\n  font-weight: normal;\n}\n/*\n& when ( @buttonFontType = google ) {\n\t@import (css) \"@{buttonFontLink}\";\n}\n*/\nh2.form-header {\n  line-height: 1.618em;\n  font-size: 1.714em;\n}\nh2 ~ .form-subHeader {\n  line-height: 1.5em;\n  font-size: 1.071em;\n}\n.form-header-group {\n  text-align: left;\n}\n/*.form-dropdown,\n.form-radio-item,\n.form-checkbox-item,\n.form-radio-other-input,\n.form-checkbox-other-input,*/\n.form-captcha input,\n.form-spinner input,\n.form-error-message {\n  padding: 4px 3px 2px 3px;\n}\n.form-header-group {\n  font-family: \"Maven Pro\", sans-serif;\n}\n.form-section {\n  padding: 0px 0px 0px 0px;\n}\n.form-header-group {\n  margin: 12px 36px 12px 36px;\n}\n.form-header-group {\n  padding: 24px 0px 24px 0px;\n}\n.form-textbox,\n.form-textarea {\n  padding: 4px 3px 2px 3px;\n}\n.form-textbox,\n.form-textarea,\n.form-radio-other-input,\n.form-checkbox-other-input,\n.form-captcha input,\n.form-spinner input {\n  background-color: #ffffff;\n}\n[data-type=\"control_dropdown\"] .form-input,\n[data-type=\"control_dropdown\"] .form-input-wide {\n  width: 150px;\n}\n.form-label {\n  font-family: \"Maven Pro\", sans-serif;\n}\nli[data-type=\"control_image\"] div {\n  text-align: left;\n}\nli[data-type=\"control_image\"] img {\n  border: none;\n  border-width: 0px !important;\n  border-style: solid !important;\n  border-color: false !important;\n}\n.form-line-column {\n  width: auto;\n}\n.form-line-error {\n  overflow: hidden;\n  -webkit-transition-property: none;\n  -moz-transition-property: none;\n  -ms-transition-property: none;\n  -o-transition-property: none;\n  transition-property: none;\n  -webkit-transition-duration: 0.3s;\n  -moz-transition-duration: 0.3s;\n  -ms-transition-duration: 0.3s;\n  -o-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease;\n  -moz-transition-timing-function: ease;\n  -ms-transition-timing-function: ease;\n  -o-transition-timing-function: ease;\n  transition-timing-function: ease;\n  background-color: #fff4f4;\n}\n.form-line-error .form-error-message {\n  background-color: #ff3200;\n  clear: both;\n  float: none;\n}\n.form-line-error .form-error-message .form-error-arrow {\n  border-bottom-color: #ff3200;\n}\n.form-line-error input:not(#coupon-input),\n.form-line-error textarea,\n.form-line-error .form-validation-error {\n  border: 1px solid #ff3200;\n  -webkit-box-shadow: 0 0 3px #ff3200;\n  -moz-box-shadow: 0 0 3px #ff3200;\n  box-shadow: 0 0 3px #ff3200;\n}\n.ie-8 .form-all {\n  margin-top: auto;\n  margin-top: initial;\n}\n.ie-8 .form-all:before {\n  display: none;\n}\n[data-type=\"control_clear\"] {\n  display: none;\n}\n/* | */\n@media screen and (max-width: 480px), screen and (max-device-width: 767px) and (orientation: portrait), screen and (max-device-width: 415px) and (orientation: landscape) {\n  .testOne {\n    letter-spacing: 0;\n  }\n  .form-all {\n    border: 0;\n    max-width: initial;\n  }\n  .form-sub-label-container {\n    width: 100%;\n    margin: 0;\n    margin-right: 0;\n    float: left;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  span.form-sub-label-container + span.form-sub-label-container {\n    margin-right: 0;\n  }\n  .form-sub-label {\n    white-space: normal;\n  }\n  .form-address-table td,\n  .form-address-table th {\n    padding: 0 1px 10px;\n  }\n  .form-submit-button,\n  .form-submit-print,\n  .form-submit-reset {\n    width: 100%;\n    margin-left: 0!important;\n  }\n  div[id*=at_] {\n    font-size: 14px;\n    font-weight: 700;\n    height: 8px;\n    margin-top: 6px;\n  }\n  .showAutoCalendar {\n    width: 20px;\n  }\n  img.form-image {\n    max-width: 100%;\n    height: auto;\n  }\n  .form-matrix-row-headers {\n    width: 100%;\n    word-break: break-all;\n    min-width: 80px;\n  }\n  .form-collapse-table,\n  .form-header-group {\n    margin: 0;\n  }\n  .form-collapse-table {\n    height: 100%;\n    display: inline-block;\n    width: 100%;\n  }\n  .form-collapse-hidden {\n    display: none !important;\n  }\n  .form-input {\n    width: 100%;\n  }\n  .form-label {\n    width: 100% !important;\n  }\n  .form-label-left,\n  .form-label-right {\n    display: block;\n    float: none;\n    text-align: left;\n    width: auto!important;\n  }\n  .form-line,\n  .form-line.form-line-column {\n    padding: 2% 5%;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  input[type=text],\n  input[type=email],\n  input[type=tel],\n  textarea {\n    width: 100%;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    max-width: initial !important;\n  }\n  .form-radio-other-input,\n  .form-checkbox-other-input {\n    max-width: 55% !important;\n  }\n  .form-dropdown,\n  .form-textarea,\n  .form-textbox {\n    width: 100%!important;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  .form-input,\n  .form-input-wide,\n  .form-textarea,\n  .form-textbox,\n  .form-dropdown {\n    max-width: initial!important;\n  }\n  .form-checkbox-item:not(#foo),\n  .form-radio-item:not(#foo) {\n    width: 100%;\n  }\n  .form-address-city,\n  .form-address-line,\n  .form-address-postal,\n  .form-address-state,\n  .form-address-table,\n  .form-address-table .form-sub-label-container,\n  .form-address-table select,\n  .form-input {\n    width: 100%;\n  }\n  div.form-header-group {\n    padding: 24px 0px !important;\n    margin: 0 12px 2% !important;\n    margin-left: 5%!important;\n    margin-right: 5%!important;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  div.form-header-group.hasImage img {\n    max-width: 100%;\n  }\n  [data-type=\"control_button\"] {\n    margin-bottom: 0 !important;\n  }\n  [data-type=control_fullname] .form-sub-label-container {\n    width: 48%;\n  }\n  [data-type=control_fullname] .form-sub-label-container:first-child {\n    margin-right: 4%;\n  }\n  [data-type=control_phone] .form-sub-label-container {\n    width: 65%;\n    margin-right: 0;\n    margin-left: 0;\n    float: left;\n  }\n  [data-type=control_phone] .form-sub-label-container:first-child {\n    width: 31%;\n    margin-right: 4%;\n  }\n  [data-type=control_datetime] .allowTime-container {\n    width: 100%;\n  }\n  [data-type=control_datetime] .allowTime-container .form-sub-label-container {\n    width: 24%!important;\n    margin-left: 6%;\n    margin-right: 0;\n  }\n  [data-type=control_datetime] .allowTime-container .form-sub-label-container:first-child {\n    margin-left: 0;\n  }\n  [data-type=control_datetime] span + span + span > span:first-child {\n    display: block;\n    width: 100% !important;\n  }\n  [data-type=control_birthdate] .form-sub-label-container,\n  [data-type=control_time] .form-sub-label-container {\n    width: 27.3%!important;\n    margin-right: 6% !important;\n  }\n  [data-type=control_time] .form-sub-label-container:last-child {\n    width: 33.3%!important;\n    margin-right: 0 !important;\n  }\n  .form-pagebreak-back-container,\n  .form-pagebreak-next-container {\n    min-height: 1px;\n    width: 50% !important;\n  }\n  .form-pagebreak-back,\n  .form-pagebreak-next,\n  .form-product-item.hover-product-item {\n    width: 100%;\n  }\n  .form-pagebreak-back-container {\n    padding: 0;\n    text-align: right;\n  }\n  .form-pagebreak-next-container {\n    padding: 0;\n    text-align: left;\n  }\n  .form-pagebreak {\n    margin: 0 auto;\n  }\n  .form-buttons-wrapper {\n    margin: 0!important;\n    margin-left: 0!important;\n  }\n  .form-buttons-wrapper button {\n    width: 100%;\n  }\n  .form-buttons-wrapper .form-submit-print {\n    margin: 0 !important;\n  }\n  table {\n    width: 100%!important;\n    max-width: initial!important;\n  }\n  table td + td {\n    padding-left: 3%;\n  }\n  .form-checkbox-item,\n  .form-radio-item {\n    white-space: normal!important;\n  }\n  .form-checkbox-item input,\n  .form-radio-item input {\n    width: auto;\n  }\n  .form-collapse-table {\n    margin: 0 5%;\n    display: block;\n    zoom: 1;\n    width: auto;\n  }\n  .form-collapse-table:before,\n  .form-collapse-table:after {\n    display: table;\n    content: '';\n    line-height: 0;\n  }\n  .form-collapse-table:after {\n    clear: both;\n  }\n  .fb-like-box {\n    width: 98% !important;\n  }\n  .form-error-message {\n    clear: both;\n    bottom: -10px;\n  }\n  .date-separate,\n  .phone-separate {\n    display: none;\n  }\n  .custom-field-frame,\n  .direct-embed-widgets,\n  .signature-pad-wrapper {\n    width: 100% !important;\n  }\n}\n/* | */\n\n/*PREFERENCES STYLE*/\n    .form-all {\n      font-family: Maven Pro, sans-serif;\n    }\n    .form-all .qq-upload-button,\n    .form-all .form-submit-button,\n    .form-all .form-submit-reset,\n    .form-all .form-submit-print {\n      font-family: Maven Pro, sans-serif;\n    }\n    .form-all .form-pagebreak-back-container,\n    .form-all .form-pagebreak-next-container {\n      font-family: Maven Pro, sans-serif;\n    }\n    .form-header-group {\n      font-family: Maven Pro, sans-serif;\n    }\n    .form-label {\n      font-family: Maven Pro, sans-serif;\n    }\n  \n    .form-label.form-label-auto {\n      \n    display: inline-block;\n    float: left;\n    text-align: left;\n  \n    }\n  \n    .form-line {\n      margin-top: 12px;\n      margin-bottom: 12px;\n    }\n  \n    .form-all {\n      max-width: 690px;\n      width: 100%;\n    }\n  \n    .form-label.form-label-left,\n    .form-label.form-label-right,\n    .form-label.form-label-left.form-label-auto,\n    .form-label.form-label-right.form-label-auto {\n      width: 150px;\n    }\n  \n    .form-all {\n      font-size: 15px\n    }\n    .form-all .qq-upload-button,\n    .form-all .qq-upload-button,\n    .form-all .form-submit-button,\n    .form-all .form-submit-reset,\n    .form-all .form-submit-print {\n      font-size: 15px\n    }\n    .form-all .form-pagebreak-back-container,\n    .form-all .form-pagebreak-next-container {\n      font-size: 15px\n    }\n  \n    .supernova .form-all, .form-all {\n      background-color: rgb(244, 242, 241);\n      border: 1px solid transparent;\n    }\n  \n    .form-all {\n      color: rgb(57, 57, 57);\n    }\n    .form-header-group .form-header {\n      color: rgb(57, 57, 57);\n    }\n    .form-header-group .form-subHeader {\n      color: rgb(57, 57, 57);\n    }\n    .form-label-top,\n    .form-label-left,\n    .form-label-right,\n    .form-html,\n    .form-checkbox-item label,\n    .form-radio-item label {\n      color: rgb(57, 57, 57);\n    }\n    .form-sub-label {\n      color: 1a1a1a;\n    }\n  \n    .supernova {\n      background-color: rgb(202, 202, 202);\n    }\n    .supernova body {\n      background: transparent;\n    }\n  \n    .form-textbox,\n    .form-textarea,\n    .form-radio-other-input,\n    .form-checkbox-other-input,\n    .form-captcha input,\n    .form-spinner input {\n      background-color: #fff;\n    }\n  \n      .supernova {\n        height: 100%;\n        background-repeat: repeat;\n        background-attachment: scroll;\n        background-position: center top;\n      }\n      .supernova {\n        background-image: url(\"//www.jotform.com/images/backgrounds/tileable_wood_texture.png\");\n      }\n      #stage {\n        background-image: url(\"//www.jotform.com/images/backgrounds/tileable_wood_texture.png\");\n      }\n    \n    .form-all {\n      background-image: none;\n    }\n  \n  .ie-8 .form-all:before { display: none; }\n  .ie-8 {\n    margin-top: auto;\n    margin-top: initial;\n  }\n  \n  /*PREFERENCES STYLE*//*__INSPECT_SEPERATOR__*/#cid_21 .form-checkbox-item {\n  margin-bottom: 15px;\n}\n    /* Injected CSS Code */\n" }} />
          {/*[if lt IE 9]><![endif]*/}
          <form className="jotform-form" action="https://submit.jotform.com/submit/210020197444142/" method="post" name="form_210020197444142" id={210020197444142} acceptCharset="utf-8" autoComplete="on">
            <input type="hidden" name="formID" defaultValue={210020197444142} />
            <input type="hidden" id="JWTContainer" defaultValue />
            <input type="hidden" id="cardinalOrderNumber" defaultValue />
            <div role="main" className="form-all">
              <ul className="form-section page-section">
                <li id="cid_1" className="form-input-wide" data-type="control_head">
                  <div className="form-header-group  header-large">
                    <div className="header-text httac htvam">
                      <h1 id="header_1" className="form-header" data-component="header">
                        Consent Form
                      </h1>
                    </div>
                  </div>
                </li>
                <li className="form-line" data-type="control_image" id="id_26">
                  <div id="cid_26" className="form-input-wide">
                    <div style={{textAlign: 'center'}}>
                      <img alt="" className="form-image" style={{border: 0}} src="https://www.jotform.com/uploads/neverdun/form_files/angynails.5ff15846a9b3a4.90533229.png" height="148px" width="200px" data-component="image" />
                    </div>
                  </div>
                </li>
                <li className="form-line" data-type="control_checkbox" id="id_21">
                  <label className="form-label form-label-top" id="label_21" htmlFor="input_21"></label>
                  <div id="cid_21" className="form-input-wide">
                    <div className="form-single-column" role="group" aria-labelledby="label_21" data-component="checkbox">
                      <span className="form-checkbox-item" style={{clear: 'left'}}>
                        <span className="dragger-item">
                        </span>
                        <input type="checkbox" className="form-checkbox" id="input_21_0" name="q21_input21[]" defaultValue="I acknowledge that the nail salon, nail technician, and the other employees are licensed professionals and should be treated with respect all the time." />
                        <label id="label_input_21_0" htmlFor="input_21_0"> I acknowledge that the nail salon, nail technician, and the other employees are licensed professionals and should be treated with respect all the time. </label>
                      </span>
                      <span className="form-checkbox-item" style={{clear: 'left'}}>
                        <span className="dragger-item">
                        </span>
                        <input type="checkbox" className="form-checkbox" id="input_21_1" name="q21_input21[]" defaultValue="I understand that I need to fill up a separate form related to the COVID-19 safety precautions." />
                        <label id="label_input_21_1" htmlFor="input_21_1"> I understand that I need to fill up a separate form related to the COVID-19 safety precautions. </label>
                      </span>
                      <span className="form-checkbox-item" style={{clear: 'left'}}>
                        <span className="dragger-item">
                        </span>
                        <input type="checkbox" className="form-checkbox" id="input_21_2" name="q21_input21[]" defaultValue="I confirm that the nail salon and the nail technician will not be responsible or liable if the result of the service is not as expected as it should be." />
                        <label id="label_input_21_2" htmlFor="input_21_2"> I confirm that the nail salon and the nail technician will not be responsible or liable if the result of the service is not as expected as it should be. </label>
                      </span>
                      <span className="form-checkbox-item" style={{clear: 'left'}}>
                        <span className="dragger-item">
                        </span>
                        <input type="checkbox" className="form-checkbox" id="input_21_3" name="q21_input21[]" defaultValue="I am allowing the nail salon and the nail technician to apply necessary chemicals as part of the service in my nail treatment." />
                        <label id="label_input_21_3" htmlFor="input_21_3"> I am allowing the nail salon and the nail technician to apply necessary chemicals as part of the service in my nail treatment. </label>
                      </span>
                      <span className="form-checkbox-item" style={{clear: 'left'}}>
                        <span className="dragger-item">
                        </span>
                        <input type="checkbox" className="form-checkbox" id="input_21_4" name="q21_input21[]" defaultValue="I agree that the nail service is final after the service. If there are any changes after 1 hour when the service ends, the client will be charged." />
                        <label id="label_input_21_4" htmlFor="input_21_4"> I agree that the nail service is final after the service. If there are any changes after 1 hour when the service ends, the client will be charged. </label>
                      </span>
                      <span className="form-checkbox-item" style={{clear: 'left'}}>
                        <span className="dragger-item">
                        </span>
                        <input type="checkbox" className="form-checkbox" id="input_21_5" name="q21_input21[]" defaultValue="I have read this whole document and I accept the terms indicated above." />
                        <label id="label_input_21_5" htmlFor="input_21_5"> I have read this whole document and I accept the terms indicated above. </label>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="form-line" data-type="control_fullname" id="id_13">
                  <label className="form-label form-label-left form-label-auto" id="label_13" htmlFor="first_13"> Customer's Name </label>
                  <div id="cid_13" className="form-input">
                    <div data-wrapper-react="true">
                      <span className="form-sub-label-container" style={{verticalAlign: 'top'}} data-input-type="first">
                        <input type="text" id="first_13" name="q13_customersName[first]" className="form-textbox" size={10} defaultValue data-component="first" aria-labelledby="label_13 sublabel_13_first" />
                        <label className="form-sub-label" htmlFor="first_13" id="sublabel_13_first" style={{minHeight: '13px'}} aria-hidden="false"> First Name </label>
                      </span>
                      <span className="form-sub-label-container" style={{verticalAlign: 'top'}} data-input-type="last">
                        <input type="text" id="last_13" name="q13_customersName[last]" className="form-textbox" size={15} defaultValue data-component="last" aria-labelledby="label_13 sublabel_13_last" />
                        <label className="form-sub-label" htmlFor="last_13" id="sublabel_13_last" style={{minHeight: '13px'}} aria-hidden="false"> Last Name </label>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="form-line" data-type="control_phone" id="id_15">
                  <label className="form-label form-label-left form-label-auto" id="label_15" htmlFor="input_15_area"> Phone Number </label>
                  <div id="cid_15" className="form-input">
                    <div data-wrapper-react="true">
                      <span className="form-sub-label-container" style={{verticalAlign: 'top'}} data-input-type="areaCode">
                        <input type="tel" id="input_15_area" name="q15_phoneNumber[area]" className="form-textbox" defaultValue data-component="areaCode" aria-labelledby="label_15 sublabel_15_area" />
                        <span className="phone-separate" aria-hidden="true">
                          &nbsp;-
                        </span>
                        <label className="form-sub-label" htmlFor="input_15_area" id="sublabel_15_area" style={{minHeight: '13px'}} aria-hidden="false"> Area Code </label>
                      </span>
                      <span className="form-sub-label-container" style={{verticalAlign: 'top'}} data-input-type="phone">
                        <input type="tel" id="input_15_phone" name="q15_phoneNumber[phone]" className="form-textbox" defaultValue data-component="phone" aria-labelledby="label_15 sublabel_15_phone" />
                        <label className="form-sub-label" htmlFor="input_15_phone" id="sublabel_15_phone" style={{minHeight: '13px'}} aria-hidden="false"> Phone Number </label>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="form-line" data-type="control_email" id="id_14">
                  <label className="form-label form-label-left form-label-auto" id="label_14" htmlFor="input_14"> Email Address </label>
                  <div id="cid_14" className="form-input">
                    <span className="form-sub-label-container" style={{verticalAlign: 'top'}}>
                      <input type="email" id="input_14" name="q14_emailAddress" className="form-textbox validate[Email]" size={30} defaultValue data-component="email" aria-labelledby="label_14 sublabel_input_14" />
                      <label className="form-sub-label" htmlFor="input_14" id="sublabel_input_14" style={{minHeight: '13px'}} aria-hidden="false"> example@example.com </label>
                    </span>
                  </div>
                </li>
                <li className="form-line" data-type="control_datetime" id="id_16">
                  <label className="form-label form-label-left form-label-auto" id="label_16" htmlFor="lite_mode_16"> Date of Birth </label>
                  <div id="cid_16" className="form-input">
                    <div data-wrapper-react="true">
                      <div style={{display: 'none'}}>
                        <span className="form-sub-label-container" style={{verticalAlign: 'top'}}>
                          <input type="tel" className="form-textbox validate[limitDate]" id="month_16" name="q16_dateOf[month]" size={2} data-maxlength={2} data-age maxLength={2} defaultValue autoComplete="off" aria-labelledby="label_16 sublabel_16_month" />
                          <span className="date-separate" aria-hidden="true">
                            &nbsp;-
                          </span>
                          <label className="form-sub-label" htmlFor="month_16" id="sublabel_16_month" style={{minHeight: '13px'}} aria-hidden="false"> Month </label>
                        </span>
                        <span className="form-sub-label-container" style={{verticalAlign: 'top'}}>
                          <input type="tel" className="form-textbox validate[limitDate]" id="day_16" name="q16_dateOf[day]" size={2} data-maxlength={2} data-age maxLength={2} defaultValue autoComplete="off" aria-labelledby="label_16 sublabel_16_day" />
                          <span className="date-separate" aria-hidden="true">
                            &nbsp;-
                          </span>
                          <label className="form-sub-label" htmlFor="day_16" id="sublabel_16_day" style={{minHeight: '13px'}} aria-hidden="false"> Day </label>
                        </span>
                        <span className="form-sub-label-container" style={{verticalAlign: 'top'}}>
                          <input type="tel" className="form-textbox validate[limitDate]" id="year_16" name="q16_dateOf[year]" size={4} data-maxlength={4} data-age maxLength={4} defaultValue autoComplete="off" aria-labelledby="label_16 sublabel_16_year" />
                          <label className="form-sub-label" htmlFor="year_16" id="sublabel_16_year" style={{minHeight: '13px'}} aria-hidden="false"> Year </label>
                        </span>
                      </div>
                      <span className="form-sub-label-container" style={{verticalAlign: 'top'}}>
                        <input type="text" className="form-textbox validate[limitDate, validateLiteDate]" id="lite_mode_16" size={12} data-maxlength={12} maxLength={12} data-age defaultValue data-format="mmddyyyy" data-seperator="-" placeholder="mm-dd-yyyy" autoComplete="off" aria-labelledby="label_16 sublabel_16_litemode" />
                        <img className=" newDefaultTheme-dateIcon icon-liteMode" alt="Pick a Date" id="input_16_pick" src="https://cdn.jotfor.ms/images/calendar.png" data-component="datetime" aria-hidden="true" data-allow-time="No" data-version="v1" />
                        <label className="form-sub-label" htmlFor="lite_mode_16" id="sublabel_16_litemode" style={{minHeight: '13px'}} aria-hidden="false"> Date </label>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="form-line" data-type="control_dropdown" id="id_18">
                  <label className="form-label form-label-left form-label-auto" id="label_18" htmlFor="input_18"> Type of Service </label>
                  <div id="cid_18" className="form-input">
                    <select className="form-dropdown" id="input_18" name="q18_typeOf" style={{width: '150px'}} data-component="dropdown" aria-labelledby="label_18">
                      <option value></option>
                      <option value="Nail Cut"> Nail Cut </option>
                      <option value="Nail Color"> Nail Color </option>
                      <option value="Nail Treatment"> Nail Treatment </option>
                      <option value="Manicure"> Manicure </option>
                      <option value="Pedicure"> Pedicure </option>
                    </select>
                  </div>
                </li>
                <li className="form-line" data-type="control_appointment" id="id_25">
                  <label className="form-label form-label-top" id="label_25" htmlFor="input_25"> Appointment Calendar </label>
                  <div id="cid_25" className="form-input-wide">
                    <div id="input_25" className="appointmentFieldWrapper jfQuestion-fields">
                      <input className="appointmentFieldInput " name="q25_appointmentCalendar[date]" id="input_25_date" />
                      <input className="appointmentFieldInput" name="q25_appointmentCalendar[duration]" defaultValue={60} id="input_25_duration" />
                      <input className="appointmentFieldInput" name="q25_appointmentCalendar[timezone]" defaultValue="America/New_York (GMT-05:00)" id="input_25_timezone" />
                      <div className="appointmentField">
                      </div>
                    </div>
                  </div>
                </li>
                <li className="form-line" data-type="control_divider" id="id_19">
                  <div id="cid_19" className="form-input-wide">
                    <div data-component="divider" style={{borderBottom: '1px solid #e6e6e6', height: '1px', marginLeft: '0px', marginRight: '0px', marginTop: '5px', marginBottom: '5px'}}>
                    </div>
                  </div>
                </li>
                <li className="form-line" data-type="control_text" id="id_22">
                  <div id="cid_22" className="form-input-wide">
                    <div id="text_22" className="form-html" data-component="text">
                      <p style={{textAlign: 'justify'}}>By signing below, you confirm that you have provided accurate and current information on this form. I affirm that I have made this consent and waiver voluntarily. In any case that I decide to withdraw or revoke my waiver, I may do so by submitting a written request signed by me to the salon company.</p>
                    </div>
                  </div>
                </li>
                <li className="form-line" data-type="control_signature" id="id_23">
                  <label className="form-label form-label-left form-label-auto" id="label_23" htmlFor="input_23"> Customer's Signature </label>
                  <div id="cid_23" className="form-input">
                    <div data-wrapper-react="true">
                      <div id="signature_pad_23" className="signature-pad-wrapper" style={{width: '402px', height: '202px'}}>
                        <div data-wrapper-react="true">
                          {/*[if IE 7]>
                    
                  <![endif]*/}
                        </div>
                        <div className="signature-line signature-wrapper signature-placeholder" data-component="signature" style={{width: '402px', height: '202px'}}>
                          <div id="sig_pad_23" data-width={400} data-height={200} data-id={23} data-required="false" className="pad ">
                          </div>
                          <input type="hidden" name="q23_customersSignature" className="output4" id="input_23" />
                        </div>
                        <span className="clear-pad-btn clear-pad" role="button" tabIndex={0}>
                          Clear
                        </span>
                      </div>
                      <div data-wrapper-react="true">
                      </div>
                    </div>
                  </div>
                </li>
                <li className="form-line" data-type="control_datetime" id="id_24">
                  <label className="form-label form-label-left form-label-auto" id="label_24" htmlFor="lite_mode_24"> Date Signed </label>
                  <div id="cid_24" className="form-input">
                    <div data-wrapper-react="true">
                      <div style={{display: 'none'}}>
                        <span className="form-sub-label-container" style={{verticalAlign: 'top'}}>
                          <input type="tel" className="form-textbox validate[limitDate]" id="month_24" name="q24_dateSigned[month]" size={2} data-maxlength={2} data-age maxLength={2} defaultValue autoComplete="off" aria-labelledby="label_24 sublabel_24_month" />
                          <span className="date-separate" aria-hidden="true">
                            &nbsp;-
                          </span>
                          <label className="form-sub-label" htmlFor="month_24" id="sublabel_24_month" style={{minHeight: '13px'}} aria-hidden="false"> Month </label>
                        </span>
                        <span className="form-sub-label-container" style={{verticalAlign: 'top'}}>
                          <input type="tel" className="form-textbox validate[limitDate]" id="day_24" name="q24_dateSigned[day]" size={2} data-maxlength={2} data-age maxLength={2} defaultValue autoComplete="off" aria-labelledby="label_24 sublabel_24_day" />
                          <span className="date-separate" aria-hidden="true">
                            &nbsp;-
                          </span>
                          <label className="form-sub-label" htmlFor="day_24" id="sublabel_24_day" style={{minHeight: '13px'}} aria-hidden="false"> Day </label>
                        </span>
                        <span className="form-sub-label-container" style={{verticalAlign: 'top'}}>
                          <input type="tel" className="form-textbox validate[limitDate]" id="year_24" name="q24_dateSigned[year]" size={4} data-maxlength={4} data-age maxLength={4} defaultValue autoComplete="off" aria-labelledby="label_24 sublabel_24_year" />
                          <label className="form-sub-label" htmlFor="year_24" id="sublabel_24_year" style={{minHeight: '13px'}} aria-hidden="false"> Year </label>
                        </span>
                      </div>
                      <span className="form-sub-label-container" style={{verticalAlign: 'top'}}>
                        <input type="text" className="form-textbox validate[limitDate, validateLiteDate]" id="lite_mode_24" size={12} data-maxlength={12} maxLength={12} data-age defaultValue data-format="mmddyyyy" data-seperator="-" placeholder="mm-dd-yyyy" autoComplete="off" aria-labelledby="label_24 sublabel_24_litemode" />
                        <img className=" newDefaultTheme-dateIcon icon-liteMode" alt="Pick a Date" id="input_24_pick" src="https://cdn.jotfor.ms/images/calendar.png" data-component="datetime" aria-hidden="true" data-allow-time="No" data-version="v1" />
                        <label className="form-sub-label" htmlFor="lite_mode_24" id="sublabel_24_litemode" style={{minHeight: '13px'}} aria-hidden="false"> Date </label>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="form-line" data-type="control_button" id="id_2">
                  <div id="cid_2" className="form-input-wide">
                    <div style={{marginLeft: '156px'}} data-align="auto" className="form-buttons-wrapper form-buttons-auto   jsTest-button-wrapperField">
                      <button id="input_2" type="submit" className="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content>
                        Submit
                      </button>
                      <span>
                        &nbsp;
                      </span>
                      <button id="input_print_2" type="button" className="form-submit-print jf-form-buttons" data-component="button">
                        <img src="https://cdn.jotfor.ms/images/printer.png" style={{verticalAlign: 'middle'}} />
                        <span id="span_print_2" className="span_print">
                          Print Form
                        </span>
                      </button>
                    </div>
                  </div>
                </li>
                <li style={{display: 'none'}}>
                  Should be Empty:
                  <input type="text" name="website" defaultValue />
                </li>
              </ul>
            </div>
            <input type="hidden" className="simple_spc" id="simple_spc" name="simple_spc" defaultValue={210020197444142} />
            <div className="formFooter-heightMask">
            </div>
            <div className="formFooter f6">
              <div className="formFooter-wrapper formFooter-leftSide">
                <a href="https://www.jotform.com/?utm_source=formfooter&utm_medium=banner&utm_term=210020197444142&utm_content=jotform_logo&utm_campaign=powered_by_jotform_le" target="_blank" className="formFooter-logoLink"><img className="formFooter-logo" src="https://cdn.jotfor.ms/assets/img/logo/logo-new@1x.png" alt="Jotform Logo" /></a>
              </div>
              <div className="formFooter-wrapper formFooter-rightSide">
                <span className="formFooter-text">
                  Now create your own JotForm - It's free!
                </span>
                <a className="formFooter-button" href="https://www.jotform.com/?utm_source=formfooter&utm_medium=banner&utm_term=210020197444142&utm_content=jotform_button&utm_campaign=powered_by_jotform_le" target="_blank">Create your own JotForm</a>
              </div>
            </div>
          </form>
        </div>
    )
        
};

export default Consent;