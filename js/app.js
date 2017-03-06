var app = angular.module("larvaeApp", ["larvae-directive", "hljs"]);
app.controller("larvaeController", ["$scope", "$location", "colorFactory", function($scope, $location, colorFactory){
    $scope.texts = {
        "en": "js/en.json",
        "es": "js/es.json"
    }
    $scope.langs = [
        {
            value: "en",
            text: "English"
        },
        {
            value: "es",
            text: "español"
        }
    ];
    $scope.defaultLang = "en";

    $scope.multilangTab = "sections/multilang.html";
    $scope.rangeTab = "sections/range.html";
    $scope.selectsTab = "sections/selects.html";
    $scope.modalsTab = "sections/modals.html";
    $scope.tabsTab = "sections/tabs.html";
    $scope.checkboxesTab = "sections/checkboxes.html";
    $scope.buttonsTab = "sections/buttons.html";
    $scope.aboutTab = "sections/about.html";
    $scope.tablesTab = "sections/tables.html";
    $scope.headerBarTab = "sections/header-bar.html";
    $scope.helpersTab = "sections/helpers.html";
    $scope.textStyleTab = "sections/text-style.html";
    $scope.radioButtonsTab = "sections/radio-buttons.html";
    $scope.gridTab = "sections/grid.html";
    $scope.colorsTab = "sections/colors.html";

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

    $scope.coloredCheckboxes = '<input type="checkbox" class="checkbox-left" id="check7" data-lrv-color="#FF00FF"/>\n<label for="check7">checkbox</label>';
    $scope.coloredCheckboxes += '<input type="checkbox" class="checkbox-right" id="check8" data-lrv-color="#00FFFF"/>\n<label for="check8">checkbox</label>';
    $scope.coloredCheckboxes += '<input type="checkbox" class="checkbox-btn" id="check9" data-lrv-color="#00FF00"/>\n<label for="check9">checkbox</label>';
    $scope.coloredCheckboxes += '<input type="checkbox" class="checkbox-btn" id="check10" data-lrv-color="#0000FF #AAAAFF"/>\n<label for="check10">checkbox</label>';
    $scope.coloredCheckboxes += '<div class="grouped">\n';
    $scope.coloredCheckboxes += '    <input type="checkbox" class="checkbox-btn" id="check11" data-lrv-color="#FF0000"/>\n    <label for="check11">checkbox</label>\n';
    $scope.coloredCheckboxes += '    <input type="checkbox" class="checkbox-btn" id="check12" data-lrv-color="#FF0000"/>\n    <label for="check12">checkbox</label>\n';
    $scope.coloredCheckboxes += '    <input type="checkbox" class="checkbox-btn" id="check13" data-lrv-color="#FF0000"/>\n    <label for="check13">checkbox</label>\n';
    $scope.coloredCheckboxes += '</div>';

    $scope.tabsHorizontal = '<div class="tabs">\n';
    $scope.tabsHorizontal += '    <div class="selected" data-lrv-tab="tab1-1">eng</div>\n    <div data-lrv-tab="tab1-2">esp</div>\n    <div data-lrv-tab="tab1-3">gal</div>\n'
    $scope.tabsHorizontal += '</div>\n';
    $scope.tabsHorizontal += '<div id="tab1-1" style="background-color: lightgray">Hello World!!</div>\n';
    $scope.tabsHorizontal += '<div id="tab1-2" style="background-color: lightgray">¡¡Hola mundo!!</div>\n';
    $scope.tabsHorizontal += '<div id="tab1-3" style="background-color: lightgray">Ola mundo!!</div>\n';

    $scope.tabsVertical = '<div class="tabs vertical">\n';
    $scope.tabsVertical += '    <div class="selected" data-lrv-tab="tab2-1">eng</div>\n    <div data-lrv-tab="tab2-2">esp</div>\n    <div data-lrv-tab="tab2-3">gal</div>\n'
    $scope.tabsVertical += '</div>\n';
    $scope.tabsVertical += '<div id="tab2-1" style="background-color: lightgray">Hello World!!</div>\n';
    $scope.tabsVertical += '<div id="tab2-2" style="background-color: lightgray">¡¡Hola mundo!!</div>\n';
    $scope.tabsVertical += '<div id="tab2-3" style="background-color: lightgray">Ola mundo!!</div>';

    var loremFistrum = 'Lorem fistrum amatomaa no te digo trigo por no llamarte Rodrigor te voy a borrar el cerito ese pedazo de a peich quietooor quietooor a wan la caidita. Ese pedazo de pecador a peich caballo blanco caballo negroorl te voy a borrar el cerito. Hasta luego Lucas llevame al sircoo caballo blanco caballo negroorl fistro caballo blanco caballo negroorl diodeno diodenoo. Benemeritaar ese hombree qué dise usteer apetecan. Se calle ustée se calle ustée papaar papaar condemor. Diodeno me cago en tus muelas caballo blanco caballo negroorl te voy a borrar el cerito. Quietooor pecador ahorarr está la cosa muy malar se calle ustée no te digo trigo por no llamarte Rodrigor no puedor. No puedor no puedor benemeritaar la caidita no te digo trigo por no llamarte Rodrigor.';

    $scope.simpleModal = '<div class="modal" id="simple-modal">\n';
    $scope.simpleModal += '    <div class="modal-container">\n';
    $scope.simpleModal += '        <div class="modal-header"></div>\n';
    $scope.simpleModal += '        <div class="modal-body">' + loremFistrum + '</div>\n';
    $scope.simpleModal += '        <div class="modal-footer"></div>\n';
    $scope.simpleModal += '    </div>\n';
    $scope.simpleModal += '</div>';

    $scope.bodyModal = '<div class="modal" id="body-modal">\n';
    $scope.bodyModal += '    <div class="modal-container">\n';
    $scope.bodyModal += '        <div class="modal-body">' + loremFistrum + '</div>\n';
    $scope.bodyModal += '    </div>\n';
    $scope.bodyModal += '</div>';

    $scope.closeModal = '<div class="modal" id="close-modal">\n';
    $scope.closeModal += '    <div class="modal-container">\n';
    $scope.closeModal += '        <div class="modal-body">\n';
    $scope.closeModal += '           <button class="btn modal-closer" data-lrv-modal="close-modal">button</button>\n';
    $scope.closeModal += '       </div>\n';
    $scope.closeModal += '    </div>\n';
    $scope.closeModal += '</div>';

    $scope.opts1 = ['opt1', 'opt2', 'opt3'];

    $scope.jsonSyntax = '{\n';
    $scope.jsonSyntax += '    "value": "opt",\n';
    $scope.jsonSyntax += '    "text": "opt",\n';
    $scope.jsonSyntax += '    "translation": "opt",\n';
    $scope.jsonSyntax += '    "selected": false\n';
    $scope.jsonSyntax += '}';

    $scope.opts2 = [
        "opt1",
        {
            value: "opt2"
        },
        {
            value: "opt3",
            text: "Opt3"
        },
        {
            value: "opt4",
            translation: "option",
            selected: true
        }
    ];

    $scope.complexOptions = '$scope.opts2 = [\n';
    $scope.complexOptions += '    "opt1",\n';
    $scope.complexOptions += '    {\n';
    $scope.complexOptions += '        value: "opt2"\n';
    $scope.complexOptions += '    },\n';
    $scope.complexOptions += '    {\n';
    $scope.complexOptions += '        value: "opt3",\n';
    $scope.complexOptions += '        text: "Opt3",\n';
    $scope.complexOptions += '    },\n';
    $scope.complexOptions += '    {\n';
    $scope.complexOptions += '        value: "opt4",\n';
    $scope.complexOptions += '        translation: "option",\n';
    $scope.complexOptions += '        selected: true\n';
    $scope.complexOptions += '    }\n';
    $scope.complexOptions += '];';

    $scope.dynamicOptions = $scope.opts1;

    $scope.opts3 = ['1opt', '2opt', '3opt'];

    $scope.scopeTexts = '$scope.texts = {\n';
    $scope.scopeTexts += '    "en": {\n';
    $scope.scopeTexts += '        "hello-world": "Hello world!!"\n';
    $scope.scopeTexts += '    },\n';
    $scope.scopeTexts += '    "es": {\n';
    $scope.scopeTexts += '        "hello-world": "¡¡Hola mundo!!"\n';
    $scope.scopeTexts += '    }\n';
    $scope.scopeTexts += '}';

    $scope.externalTexts = 'scope.texts = {\n';
    $scope.externalTexts += '    "en": "en.json",\n';
    $scope.externalTexts += '    "es": "es.json"\n';
    $scope.externalTexts += '}';

    $scope.fragment = "#main-index=components-tab&components-index=tabs-tab";

    $scope.headings = "<h1>h1</h1>\n<h2>h2</h2>\n<h3>h3</h3>\n<h4>h4</h4>\n<h5>h5</h5>\n<h6>h6</h6>";

    $scope.table = "<table>\n";
    $scope.table += "    <thead>\n";
    $scope.table += "        <tr>\n";
    $scope.table += "            <th>th</th>\n";
    $scope.table += "            <th>th</th>\n";
    $scope.table += "            <th>th</th>\n";
    $scope.table += "        </tr>\n";
    $scope.table += "    </thead>\n";
    $scope.table += "    <tbody>\n";
    $scope.table += "        <tr>\n";
    $scope.table += "            <td>td</td>\n";
    $scope.table += "            <td>td</td>\n";
    $scope.table += "            <td>td</td>\n";
    $scope.table += "        </tr>\n";
    $scope.table += "        <tr>\n";
    $scope.table += "            <td>td</td>\n";
    $scope.table += "            <td>td</td>\n";
    $scope.table += "            <td>td</td>\n";
    $scope.table += "        </tr>\n";
    $scope.table += "        <tr>\n";
    $scope.table += "            <td>td</td>\n";
    $scope.table += "            <td>td</td>\n";
    $scope.table += "            <td>td</td>\n";
    $scope.table += "        </tr>\n";
    $scope.table += "        <tr>\n";
    $scope.table += "            <td>td</td>\n";
    $scope.table += "            <td>td</td>\n";
    $scope.table += "            <td>td</td>\n";
    $scope.table += "        </tr>\n";
    $scope.table += "    </tbody>\n";
    $scope.table += "</table>";

    $scope.headerBar = "<div class='header-bar' style='background-color: lightgray;'>\n";
    $scope.headerBar += "    <button class='btn'>button</button>\n";
    $scope.headerBar += "    <a href='#'>link</a>\n";
    $scope.headerBar += "    <span>span</span>\n";
    $scope.headerBar += "</div>";

    $scope.paragraph = "<div style='border: 1px solid black;'>\n";
    $scope.paragraph += "    <div class='paragraph' style='background-color: lightgray;'>\n        " + loremFistrum + "\n    </div>\n";
    $scope.paragraph += "</div>\n";
    $scope.paragraph += "<div style='border: 1px solid black;'>\n";
    $scope.paragraph += "    <div style='background-color: lightgray;'>\n        " + loremFistrum + "\n    </div>\n";
    $scope.paragraph += "</div>";

    $scope.indent = "<div class='indent' style='border: 1px solid black;'>\n    " + loremFistrum + "\n</div>\n";
    $scope.indent += "<div style='border: 1px solid black;'>\n    " + loremFistrum + "\n</div>";

    $scope.leftRadioButton = '<input type="radio" name="rad1" class="radio-left" id="rad1"/>\n<label for="rad1">radio</label>';

    $scope.rightRadioButton = '<input type="radio" name="rad2" class="radio-right" id="rad2"/>\n<label for="rad2">radio</label>';

    $scope.btnRadioButton = '<input type="radio" name="rad3" class="radio-btn" id="rad3"/>\n<label for="rad3">radio</label>';

    $scope.groupedRadioButtons = '<div class="grouped">\n';
    $scope.groupedRadioButtons += '    <input type="radio" name="rad4" class="radio-btn" id="rad4"/>\n    <label for="rad4">radio</label>\n';
    $scope.groupedRadioButtons += '    <input type="radio" name="rad4" class="radio-btn" id="rad5"/>\n    <label for="rad5">radio</label>\n';
    $scope.groupedRadioButtons += '    <input type="radio" name="rad4" class="radio-btn" id="rad6"/>\n    <label for="rad6">radio</label>\n';
    $scope.groupedRadioButtons += '</div>';

    $scope.coloredRadioButtons = '<input type="radio" name="rad5" class="radio-left" id="rad7" data-lrv-color="#00FF00"/>\n<label for="rad7">radio</label>\n';
    $scope.coloredRadioButtons  += '<input type="radio" name="rad5" class="radio-right" id="rad8" data-lrv-color="#999900"/>\n<label for="rad8">radio</label>\n';
    $scope.coloredRadioButtons  += '<input type="radio" name="rad5" class="radio-btn" id="rad9" data-lrv-color="#FF00FF"/>\n<label for="rad9">radio</label>\n';
    $scope.coloredRadioButtons  += '<input type="radio" name="rad5" class="radio-btn" id="rad10" data-lrv-color="#FF0000 #FFAAAA"/>\n<label for="rad10">radio</label>\n';
    $scope.coloredRadioButtons  += '<div class="grouped">\n';
    $scope.coloredRadioButtons  += '    <input type="radio" name="rad5" class="radio-btn" id="rad11" data-lrv-color="#123456"/>\n    <label for="rad11">radio</label>\n';
    $scope.coloredRadioButtons  += '    <input type="radio" name="rad5" class="radio-btn" id="rad12" data-lrv-color="#123456"/>\n    <label for="rad12">radio</label>\n';
    $scope.coloredRadioButtons  += '    <input type="radio" name="rad5" class="radio-btn" id="rad13" data-lrv-color="#123456"/>\n    <label for="rad13">radio</label>\n';
    $scope.coloredRadioButtons  += '</div>';

    $scope.defaultGrid = '<div class="f-row" style="background-color: lightgray;">\n';
    $scope.defaultGrid += '    <div style="background-color: cyan;">div</div>\n';
    $scope.defaultGrid += '    <div style="background-color: yellow;">div</div>\n';
    $scope.defaultGrid += '    <div style="background-color: magenta;">div</div>\n';
    $scope.defaultGrid += '</div>';

    $scope.hEndGrid = '<div class="f-row h-end" style="background-color: lightgray;">\n';
    $scope.hEndGrid += '    <div class="f-1-8" style="background-color: cyan; height: 20px;">.f-1-8</div>\n';
    $scope.hEndGrid += '    <div class="f-1-8" style="background-color: yellow; height: 40px;">.f-1-8</div>\n';
    $scope.hEndGrid += '    <div class="f-1-8" style="background-color: magenta; height: 80px;">.f-1-8</div>\n';
    $scope.hEndGrid += '</div>';

    $scope.hCenterGrid = '<div class="f-row h-center" style="background-color: lightgray;">\n';
    $scope.hCenterGrid += '    <div class="f-1-8" style="background-color: cyan; height: 20px;">.f-1-8</div>\n';
    $scope.hCenterGrid += '    <div class="f-1-8" style="background-color: yellow; height: 40px;">.f-1-8</div>\n';
    $scope.hCenterGrid += '    <div class="f-1-8" style="background-color: magenta; height: 80px;">.f-1-8</div>\n';
    $scope.hCenterGrid += '</div>';

    $scope.hAroundGrid = '<div class="f-row h-around" style="background-color: lightgray;">\n';
    $scope.hAroundGrid += '    <div class="f-1-8" style="background-color: cyan; height: 20px;">.f-1-8</div>\n';
    $scope.hAroundGrid += '    <div class="f-1-8" style="background-color: yellow; height: 40px;">.f-1-8</div>\n';
    $scope.hAroundGrid += '    <div class="f-1-8" style="background-color: magenta; height: 80px;">.f-1-8</div>\n';
    $scope.hAroundGrid += '</div>';

    $scope.vEndGrid = '<div class="f-row v-end" style="background-color: lightgray;">\n';
    $scope.vEndGrid += '    <div class="f-1-8" style="background-color: cyan; height: 20px;">.f-1-8</div>\n';
    $scope.vEndGrid += '    <div class="f-1-8" style="background-color: yellow; height: 40px;">.f-1-8</div>\n';
    $scope.vEndGrid += '    <div class="f-1-8" style="background-color: magenta; height: 80px;">.f-1-8</div>\n';
    $scope.vEndGrid += '</div>';

    $scope.vCenterGrid = '<div class="f-row v-center" style="background-color: lightgray;">\n';
    $scope.vCenterGrid += '    <div class="f-1-8" style="background-color: cyan; height: 20px;">.f-1-8</div>\n';
    $scope.vCenterGrid += '    <div class="f-1-8" style="background-color: yellow; height: 40px;">.f-1-8</div>\n';
    $scope.vCenterGrid += '    <div class="f-1-8" style="background-color: magenta; height: 80px;">.f-1-8</div>\n';
    $scope.vCenterGrid += '</div>';

    $scope.fullGrid = '<div class="f-row">\n';
    $scope.fullGrid += '    <div class="f-1-1" style="background-color: cyan;">.f-1-1</div>\n';
    $scope.fullGrid += '    <div class="f-1-2" style="background-color: yellow;">.f-1-2</div>\n';
    $scope.fullGrid += '    <div class="f-1-2" style="background-color: magenta;">.f-1-2</div>\n';
    $scope.fullGrid += '    <div class="f-1-4" style="background-color: magenta;">.f-1-4</div>\n';
    $scope.fullGrid += '    <div class="f-3-4" style="background-color: cyan;">.f-3-4</div>\n';
    $scope.fullGrid += '    <div class="f-1-8" style="background-color: cyan;">.f-1-8</div>\n';
    $scope.fullGrid += '    <div class="f-7-8" style="background-color: yellow;">.f-7-8</div>\n';
    $scope.fullGrid += '    <div class="f-3-8" style="background-color: magenta;">.f-3-8</div>\n';
    $scope.fullGrid += '    <div class="f-5-8" style="background-color: cyan;">.f-5-8</div>\n';
    $scope.fullGrid += '</div>';

    $scope.coloredButtons = '<button class="btn btn1">button</button>\n';
    $scope.coloredButtons += '<button class="btn round btn2">button</button>\n';
    $scope.coloredButtons += '<button class="btn icon btn3"><i class="fa fa-question-circle-o"></i></button>\n';
    $scope.coloredButtons += '<button class="btn icon round btn4"><i class="fa fa-question-circle-o"></i></button>\n';
    $scope.coloredButtons += '<div class="grouped">\n';
    $scope.coloredButtons += '    <button class="btn btn5">button</button>\n';
    $scope.coloredButtons += '    <button class="btn btn5">button</button>\n';
    $scope.coloredButtons += '    <button class="btn btn5">button</button>\n';
    $scope.coloredButtons += '    <button class="btn btn5">button</button>\n';
    $scope.coloredButtons += '    <button class="btn btn5">button</button>\n';
    $scope.coloredButtons += '</div>';

    colorFactory.addColor("btn", "btn1", ["#4444FF", "#44FFFF"]);
    $scope.coloredButtonsJs = 'colorFactory.addColor("btn", "btn1", ["#4444FF", "#44FFFF"]);\n';
    colorFactory.addColor("btn", "btn2", "#FF4444");
    $scope.coloredButtonsJs += 'colorFactory.addColor("btn", "btn2", "#FF4444");\n';
    colorFactory.addColor("btn", "btn3", "#770088");
    $scope.coloredButtonsJs += 'colorFactory.addColor("btn", "btn3", "#770088");\n';
    colorFactory.addColor("btn", "btn4", ["#550000", "#FF4444"]);
    $scope.coloredButtonsJs += 'colorFactory.addColor("btn", "btn4", ["#550000", "#FF4444"]);\n';
    colorFactory.addColor("btn", "btn5", "#885500");
    $scope.coloredButtonsJs += 'colorFactory.addColor("btn", "btn5", "#885500");\n';

    var changeOpts = false;

    $scope.switchOptions = function(){
        if(!changeOpts)
            $scope.dynamicOptions = $scope.opts3;
        else
            $scope.dynamicOptions = $scope.opts1;
        changeOpts = !changeOpts;
    }
}]);

app.directive("customCode", ["$compile", function($compile){
    return {
        restrict: "C",
        compile: function(tElement, tAttributes){
            return {
                pre: function(scope, element, attributes){
                    var id = element.attr("id");
                    var contents = element.contents();
                    var codes = [];
                    var result = null;
                    var hasResult = false;
                    var tabContainer = angular.element("<span class='tabs'></span>");
                    var showOnlyOneTab = element.attr("data-custom-only-one-tab") != undefined ? element.attr("data-custom-only-one-tab") == "true" : false;
                    var container = angular.element("<div class='custom-code-element'></div>");
                    element.replaceWith(container);
                    container.append(tabContainer);
                    for(var i = 0; i < contents.length; i++){
                        var el = angular.element(contents[i]);
                        var type = el.attr("data-custom-type");
                        if(type == "code"){
                            var reference = el.attr("data-custom-name");
                            var variable = el.attr("data-custom-variable");
                            var content = variable == undefined ? el.html() : scope[variable];
                            codes.push({"name": el.attr("data-custom-name"), "contents": content});
                            var selected = "";
                            if(tabContainer.children().length == 0)
                                selected = " class='selected'";
                            tabContainer.append(angular.element("<span data-lrv-tab='" + id + "-" + reference + "'" + selected + ">" + reference + "</span>"));
                            var language = el.attr("data-custom-language");
                            var hl = angular.element("<div class='custom-entry-code' id='" + id + "-" + reference + "' hljs></div>");
                            if(language != undefined)
                                hl.attr("hljs-language", language);
                            if(variable != undefined)
                                hl.attr("hljs-source", variable);
                            else
                                hl.append(content);
                            container.append(hl);
                            $compile(hl)(scope);
                        }
                        else if(type == "result" && !hasResult){
                            var variable = el.attr("data-custom-variable");
                            var content = variable == undefined ? el.html() : scope[variable];
                            result = {"contents": content, "reference": el.attr("data-custom-reference"), "options": el.attr("data-custom-options")};
                            hasResult = true;
                        }
                    }
                    if(codes.length == 1 && !showOnlyOneTab)
                        tabContainer.remove();
                    if(hasResult){
                        var resultContainer = angular.element("<div></div>");
                        var codeId = result["reference"];
                        var options = result["options"] != undefined ? result["options"].split(" ") : [];
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
                        if(options.indexOf("no-padding") != -1)
                            resultContainer.addClass("custom-no-padding");
                    }
                    $compile(tabContainer)(scope);
                }
            }
        }
    }
}])