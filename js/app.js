var app = angular.module("larvaeApp", ["larvae-directive", "hljs"]);
app.controller("larvaeController", ["$scope", function($scope){
    $scope.texts = {
        "English": "js/en.json",
        "español": "js/es.json"
    }
    $scope.langs = Object.keys($scope.texts);
    $scope.defaultLang = "English";

    $scope.buttonModifiersHtml = '<button class="btn icon round purple"><i class="fa fa-question-circle-o"></i></button>\n';
    $scope.buttonModifiersHtml += '<button class="btn orange">button</button>';

    $scope.buttonModifiersCss = '.btn.orange {\n    color: rgb(255, 116, 0);\n    border-color: rgb(255, 116, 0);\n}\n\n';
    $scope.buttonModifiersCss += '.btn.orange:hover {\n    box-shadow: 0px 0px 10px rgba(255, 116, 0, .75)\n}\n\n';
    $scope.buttonModifiersCss += '.btn.orange:active {\n    box-shadow: inset 0px 0px 10px rgba(255, 116, 0, .75)\n}\n\n';
    $scope.buttonModifiersCss += '.btn.purple {\n    color: rgb(165, 2, 255);\n    border-color: rgb(165, 2, 255);\n}\n\n';
    $scope.buttonModifiersCss += '.btn.purple:hover {\n    box-shadow: 0px 0px 10px rgba(165, 2, 255, .75);\n}\n\n';
    $scope.buttonModifiersCss += '.btn.purple:active {\n    box-shadow: inset 0px 0px 10px rgba(165, 2, 255, .75);\n}';

    $scope.groupedButtons = '<div class="grouped">\n';
    $scope.groupedButtons += '    <button class="btn">button</button>\n';
    $scope.groupedButtons += '    <button class="btn">button</button>\n';
    $scope.groupedButtons += '    <button class="btn">button</button>\n';
    $scope.groupedButtons += '    <button class="btn">button</button>\n';
    $scope.groupedButtons += '    <button class="btn">button</button>\n';
    $scope.groupedButtons += '    <button class="btn">button</button>\n';
    $scope.groupedButtons += '</div>';

    $scope.sources = '<link rel="stylesheet" type="text/css" href="larvae.css"/>\n<script src="larvae.js"></script>';

    $scope.leftCheckbox = '<input type="checkbox" class="checkbox-left" id="check1"/>\n<label for="check1">checkbox</label>';

    $scope.rightCheckbox = '<input type="checkbox" class="checkbox-right" id="check2"/>\n<label for="check2">checkbox</label>';

    $scope.btnCheckbox = '<input type="checkbox" class="checkbox-btn" id="check3"/>\n<label for="check3">checkbox</label>';

    $scope.groupedCheckboxes = '<div class="grouped">\n';
    $scope.groupedCheckboxes += '    <input type="checkbox" class="checkbox-btn" id="check4"/>\n    <label for="check4">checkbox</label>\n';
    $scope.groupedCheckboxes += '    <input type="checkbox" class="checkbox-btn" id="check5"/>\n    <label for="check5">checkbox</label>\n';
    $scope.groupedCheckboxes += '    <input type="checkbox" class="checkbox-btn" id="check6"/>\n    <label for="check6">checkbox</label>\n';
    $scope.groupedCheckboxes += '</div>';

    $scope.tabsHorizontal = '<div class="tabs">\n';
    $scope.tabsHorizontal += '    <div class="selected" data-reference="tab1-1">eng</div>\n    <div data-reference="tab1-2">esp</div>\n    <div data-reference="tab1-3">gal</div>\n'
    $scope.tabsHorizontal += '</div>\n';
    $scope.tabsHorizontal += '<div id="tab1-1" style="background-color: lightgray">Hello World!!</div>\n';
    $scope.tabsHorizontal += '<div id="tab1-2" style="background-color: lightgray">¡¡Hola mundo!!</div>\n';
    $scope.tabsHorizontal += '<div id="tab1-3" style="background-color: lightgray">Ola mundo!!</div>\n';

    $scope.tabsVertical = '<div class="tabs vertical">\n';
    $scope.tabsVertical += '    <div class="selected" data-reference="tab2-1">eng</div>\n    <div data-reference="tab2-2">esp</div>\n    <div data-reference="tab2-3">gal</div>\n'
    $scope.tabsVertical += '</div>\n';
    $scope.tabsVertical += '<div id="tab2-1" style="background-color: lightgray">Hello World!!</div>\n';
    $scope.tabsVertical += '<div id="tab2-2" style="background-color: lightgray">¡¡Hola mundo!!</div>\n';
    $scope.tabsVertical += '<div id="tab2-3" style="background-color: lightgray">Ola mundo!!</div>';

    $scope.simpleModal = '<div class="modal" id="modal1">\n';
    $scope.simpleModal += '    <div class="modal-container">\n';
    $scope.simpleModal += '        <div class="modal-body">\n';
    $scope.simpleModal += '            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n';
    $scope.simpleModal += '        </div>\n';
    $scope.simpleModal += '    </div>\n';
    $scope.simpleModal += '</div>';
}]);

app.directive("customCode", ["$compile", function($compile){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            var id = element.attr("id");
            var contents = element.contents();
            var codes = [];
            var result = null;
            var hasResult = false;
            var tabContainer = angular.element("<span class='tabs w-full'></span>");
            var showOnlyOneTab = element.attr("data-custom-only-one-tab") != undefined ? element.attr("data-custom-only-one-tab") == "true" : false;
            var container = angular.element("<div class='custom-code-element w-full'></div>");
            element.replaceWith(container);
            container.append(tabContainer);
            for(var i = 0; i < contents.length; i++){
                var el = angular.element(contents[i]);
                var type = el.attr("data-custom-type");
                if(type == "code"){
                    var reference = el.attr("data-custom-name");
                    var variable = el.attr("data-custom-variable");
                    if(variable == undefined)
                        variable = el.html();
                    else
                        variable = scope[variable];
                    codes.push({"name": el.attr("data-custom-name"), "contents": variable});
                    var selected = "";
                    if(tabContainer.children().length == 0)
                        selected = " class='selected'";
                    tabContainer.append(angular.element("<span data-reference='" + id + "-" + reference + "'" + selected + ">" + reference + "</span>"));
                    var language = el.attr("data-custom-language");
                    var hl = angular.element("<div class='w-full custom-entry-code' id='" + id + "-" + reference + "' hljs></div>");
                    if(language != undefined)
                        hl.attr("hljs-language", language);
                    hl.append(variable);
                    container.append(hl);
                    $compile(hl)(scope);
                }
                else if(type == "result" && !hasResult){
                    var variable = el.attr("data-custom-variable");
                    if(variable == undefined)
                        variable = el.html();
                    else
                        variable = scope[variable];
                    result = {"contents": variable, "reference": el.attr("data-custom-reference")};
                    hasResult = true;
                }
            }
            if(codes.length == 1 && !showOnlyOneTab)
                tabContainer.remove();
            if(hasResult){
                var resultContainer = angular.element("<div class='w-full'></div>");
                if(result == null){
                    result = codes[0];
                }
                var codeId = result["reference"];
                if(codeId == undefined)
                    result = result["contents"];
                else {
                    for(var i = 0; i < codes.length; i++){
                        if(codeId == codes[i]["name"])
                            result = codes[i]["contents"];
                    }
                }
                resultContainer.append(result);
                container.prepend(resultContainer);
                $compile(resultContainer)(scope);
            }
            $compile(tabContainer)(scope);
        }
    }
}])