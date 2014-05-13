angular.module('twigs.templates').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/chooseMultiple.html',
    "<select multiple=\"true\" ui-select2=\"select2Options\">\r" +
    "\n" +
    "    <option value=\"{{choice.id}}\" ng-repeat=\"choice in choices\">{{getLabel(choice)}}</option>\r" +
    "\n" +
    "</select>"
  );


  $templateCache.put('templates/chooseSingle.html',
    "<select ui-select2=\"select2Options\">\r" +
    "\n" +
    "    <option value=\"{{choice.id}}\" ng-repeat=\"choice in choices\">{{getLabel(choice)}}</option>\r" +
    "\n" +
    "</select>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('templates/errorModal.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <button type=\"button\" class=\"close\" x-ng-click=\"$close()\" aria-hidden=\"true\">&times;</button>\r" +
    "\n" +
    "    <h3><i class=\"glyphicon glyphicon-exclamation-sign\"></i>{{title}}</h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "    <p>{{message}}</p>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-default\" x-ng-click=\"$close()\">{{primaryButtonText}}</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('templates/fileModal.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h3>{{title}}</h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "    <iframe id=\"modal-fileframe\" x-ng-src=\"{{message}}\"></iframe>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-default\" x-ng-click=\"$close()\">{{backButtonText}}</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('templates/infoModal.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <button type=\"button\" class=\"close\" x-ng-click=\"$close()\">&times;</button>\r" +
    "\n" +
    "    <h3><i class=\"glyphicon glyphicon-info-sign\"></i>{{title}}</h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "    <p>{{message}}</p>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-default\" x-ng-click=\"$close()\">{{primaryButtonText}}</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('templates/successToast.html',
    "<!-- for success messages, centered on top of browser window (aka \"Toast\")-->\r" +
    "\n" +
    "<div class=\"alert alert-success fade-in\" x-ng-click=\"close()\">\r" +
    "\n" +
    "    <button type=\"button\" class=\"close\" x-ng-click=\"close()\">&times;</button>\r" +
    "\n" +
    "    <div id=\"successMessage\"> <i class=\"pull-left glyphicon glyphicon-check\"></i>\r" +
    "\n" +
    "        <div style=\"margin-left: 25px;\">{{message}}</div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('templates/warningModal.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <button type=\"button\" class=\"close\" x-ng-click=\"$close()\" aria-hidden=\"true\">&times;</button>\r" +
    "\n" +
    "    <h3><i class=\"glyphicon glyphicon-exclamation-sign\"></i>{{title}}</h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "    <p><translate>{{message}}</translate></p>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-default\" x-ng-click=\"$close()\">{{primaryButtonText}}</button>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('templates/warningToast.html',
    "<!-- for success messages, centered on top of browser window (aka \"Toast\")-->\r" +
    "\n" +
    "<div class=\"alert alert-warning fade-in\" x-ng-click=\"close()\">\r" +
    "\n" +
    "    <button type=\"button\" class=\"close\" x-ng-click=\"close()\">&times;</button>\r" +
    "\n" +
    "    <div id=\"successMessage\"> <i class=\"pull-left glyphicon glyphicon-check\"></i>\r" +
    "\n" +
    "        <div style=\"margin-left: 25px;\">{{message}}</div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('templates/yesnoModal.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "    <h3>{{title}}</h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "    <p>{{message}}</p>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "    <button class=\"btn btn-danger\" x-ng-click=\"$close(false)\">{{primaryButtonText}}</button>\r" +
    "\n" +
    "    <button class=\"btn btn-yes {{message.yesButtonCls}} btn-success\" x-ng-click=\"$close(true)\">{{secondaryButtonText}}</button>\r" +
    "\n" +
    "</div>"
  );

}]);
