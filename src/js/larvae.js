larvae = angular.module("larvae-directive", []);

larvae.factory("colorFactory", function(){
    var style = angular.element("<style></style>");
    angular.element(document.getElementsByTagName("head")[0]).append(style);
    var colors = {};

    var addColor = function(color, directives){
        var directives = directives != null && directives != undefined ? typeof directives == "string" ? [directives]: directives : null;
        if(directives != null){
            for(var i = 0; i < directives.length; i++){
                var directive = directives[i];
                directive = directive == "checkboxBtn" || directive == "radioBtn" ? "checkboxRadioBtn" : directive;
                directive = directive == "checkboxLeft" || directive == "radioLeft" || directive == "checkboxRight" || directive == "radioRight"? "checkboxRadio" : directive;
                if(Object.keys(colors).indexOf(directive) == -1)
                    colors[directive] = [];
                if(colors[directive].indexOf(color) == -1){
                    colors[directive].push(color);
                    addColorFunctions[directive](color);
                }
            }
        }
    }

    var addColorFunctions = {
        btn: function(color){
            var colorArr = color.split(" ");
            var color1 = colorArr[0];
            var color2 = colorArr.length > 1 ? colorArr[1] : null;
            var rgb = hexToRgb(color1);
            var data = "[data-lrv-color='" + color + "']";
            var css = getCss({
                head: ".btn" + data,
                rules: {
                    "color": color1,
                    "border-color": color1,
                    "background-color": color2 == null ? "white" : color2
                }
            }) + getCss({
                head: ".btn" + data + ":hover",
                rules: {
                    "box-shadow": "0 0 10px rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",.75)"
                }
            }) + getCss({
                head: ".btn" + data + ":active",
                rules: {
                    "box-shadow": "inset 0 0 10px rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",.75)"
                }
            });
            style.html(style.html() + css);

        },
        checkboxRadioBtn: function(color){
            var colorArr = color.split(" ");
            var color1 = colorArr[0];
            var color2 = colorArr.length > 1 ? colorArr[1] : null;
            var rgb = hexToRgb(color1);
            var data = "[data-lrv-color='" + color + "']";
            var css = getCss({
                head: [
                    ".checkbox-btn" + data + "+label",
                    ".radio-btn" + data + "+label"
                ],
                rules: {
                    "color": color1,
                    "border-color": color1,
                    "background-color": color2 == null ? "white" : color2
                }
            }) + getCss({
                head: [
                    ".checkbox-btn" + data + "+label:hover",
                    ".radio-btn" + data + "+label:hover"
                ],
                rules: {
                    "box-shadow": "0 0 10px rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",.75)"
                }
            }) + getCss({
                head: [
                    ".checkbox-btn" + data + ":checked+label:hover",
                    ".radio-btn" + data + ":checked+label:hover"
                ],
                rules: {
                    "box-shadow": "inset 0 0 20px rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",.75)"
                }
            }) + getCss({
                head: [
                    ".checkbox-btn" + data + ":checked+label",
                    ".radio-btn" + data + ":checked+label",
                    ".checkbox-btn" + data + "+label:active",
                    ".radio-btn" + data + "+label:active",
                    ".checkbox-btn" + data + ":checked+label:active",
                    ".radio-btn" + data + ":checked+label:active"
                ],
                rules: {
                    "box-shadow": "inset 0 0 10px rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",.75)"
                }
            });
            style.html(style.html() + css);
        },
        checkboxRadio: function(color){
            var colorArr = color.split(" ");
            var color1 = colorArr[0];
            var rgb = hexToRgb(color1);
            var data = "[data-lrv-color='" + color + "']";
            var css = getCss({
                head: [
                    ".checkbox-left" + data + " + label:before",
                    ".checkbox-right" + data + " + label:after",
                    ".radio-left" + data + " + label:before",
                    ".radio-right" + data + " + label:after"
                ],
                rules: {
                    "color": color1,
                    "border-color": color1
                }
            }) + getCss({
                head: [
                    ".checkbox-left" + data + " + label:hover:before",
                    ".checkbox-right" + data + " + label:hover:after",
                    ".radio-left" + data + " + label:hover:before",
                    ".radio-right" + data + " + label:hover:after"
                ],
                rules: {
                    "box-shadow": "inset 0 0 0 3px white, 0px 0px 5px rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", .75)"
                }
            }) + getCss({
                head: [
                    ".checkbox-left" + data + " + label:active:before",
                    ".checkbox-right" + data + " + label:active:after",
                    ".radio-left" + data + " + label:active:before",
                    ".radio-right" + data + " + label:active:after",
                    ".checkbox-left" + data + ":checked + label:hover:before",
                    ".checkbox-right" + data + ":checked + label:hover:after",
                    ".radio-left" + data + ":checked + label:hover:before",
                    ".radio-right" + data + ":checked + label:hover:after"
                ],
                rules: {
                    "box-shadow": "inset 0 0 1px 1px rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", .75), inset 0 0 0 3px white"
                }
            }) + getCss({
                head: [
                    ".checkbox-left" + data + ":checked + label:active:before",
                    ".checkbox-right" + data + ":checked + label:active:after",
                    ".radio-left" + data + ":checked + label:active::before",
                    ".radio-right" + data + ":checked + label:active::after",
                    ".checkbox-left" + data + ":checked + label:before",
                    ".checkbox-right" + data + ":checked + label:after",
                    ".radio-left" + data + ":checked + label:before",
                    ".radio-right" + data + ":checked + label:after"
                ],
                rules: {
                    "background-color": color1,
                    "box-shadow": "inset 0 0 0 3px white"
                }
            });
            style.html(style.html() + css);
        }
    }

    var getCss = function(object){
        if(typeof object.head == "string")
            object.head = [object.head];
        var head = "";
        for(var i = 0; i < object.head.length; i++){
            head += object.head[i];
            if(i < object.head.length - 1)
                head += ",";
        }
        var css = head + "{";
        var rules = Object.keys(object.rules);
        for(var i = 0; i < rules.length; i++){
            var value = object.rules[rules[i]];
            css += rules[i] + ":" + value;
            if(i < rules.length - 1)
                css += ";";
        }
        css += "}";
        return css;
    }

    var hexToRgb = function(hex){
        var hex = hex.substr(1);
        return {r: parseInt(hex.substr(0,2),16), g: parseInt(hex.substr(2,2),16), b: parseInt(hex.substr(4,2),16)}
    }

    return {
        addColor: addColor
    }
})

larvae.directive("translate", ["$compile", "$http", function($compile, $http){
    return {
        restrict: "C",
        controller: function(){
            this.language = null;
            this.defaultLanguage = null;
            this.texts = [];
            this.get = function (textKey, language){
                var language = language == undefined ? this.language : language;
                var langTexts = this.texts[language] == undefined ? this.texts[this.defaultLanguage] : this.texts[language];
                var returnText = langTexts[textKey] == undefined ? this.texts[this.defaultLanguage][textKey] == undefined ? textKey : this.texts[this.defaultLanguage][textKey] : langTexts[textKey];
                return returnText;
            };
            this.translate = function(elements){
                for(var i = 0; i < elements.length; i++){
                    var element = angular.element(elements[i]);
                    element.html(this.get(element.attr("data-lrv-text")));
                }
            };
        },
        compile: function(tElement, tAttributes){
            return {
                pre: function(scope, element, attributes, translate){
                    var scopeSelectedLangVarName = element.attr("data-lrv-selected-lang");
                    translate.texts = scope[element.attr("data-lrv-texts")];
                    var defaultLang = scope[element.attr("data-lrv-default-lang")];
                    translate.defaultLanguage = defaultLang == undefined ? Object.keys(translate.texts)[0] : defaultLang;
                    if(typeof translate.texts[defaultLang] == "string"){
                        $http.get(translate.texts[defaultLang]).then(function(response){
                            translate.texts[defaultLang] = response.data;
                        });
                    }
                    translate.language = window.localStorage.getItem("lang");
                    if(translate.language == undefined){
                        scope[scopeSelectedLangVarName] = scope[scopeSelectedLangVarName] == undefined ? translate.defaultLanguage : scope[scopeSelectedLangVarName];
                        window.localStorage.setItem("lang", scope[scopeSelectedLangVarName]);
                        translate.language = scope[scopeSelectedLangVarName];
                    }
                    else
                        scope[scopeSelectedLangVarName] = translate.language;
                    scope.$watch(scopeSelectedLangVarName, function(){
                        window.localStorage.setItem("lang", scope[scopeSelectedLangVarName]);
                        translate.language = scope[scopeSelectedLangVarName];
                        if(typeof translate.texts[translate.language] == "string"){
                            $http.get(translate.texts[translate.language]).then(function(response){
                                translate.texts[translate.language] = response.data;
                                translate.translate(angular.element(element[0].getElementsByClassName("text")));
                            });
                        }
                        else
                            translate.translate(angular.element(element[0].getElementsByClassName("text")));
                    });
                }
            }
        }
    }
}]);

larvae.directive("text", function(){
    return {
        restrict: "C",
        require: "^?translate",
        link: function(scope, element, attributes, translate){
            if(translate != null)
                element.html(translate.get(element.attr("data-lrv-text")));
        }
    }
});

larvae.directive("tabs", ["$location", function($location){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            var children = element.children();
            children.addClass("tab");
            for(var i = 0; i < children.length; i++){
                var child = angular.element(children[i]);
                if(!child.hasClass("selected")){
                    var ids = child.attr("data-lrv-tab").split(" ");
                    for(var j = 0; j < ids.length; j++)
                        angular.element(document.getElementById(ids[j])).addClass("hidden");
                }
            }
            children.bind("click", function(){
                children.removeClass("selected");
                var self = angular.element(this);
                self.addClass("selected");
                for(i = 0; i < children.length; i++){
                    var child = angular.element(children[i]);
                    var content_ids = child.attr("data-lrv-tab");
                    if(content_ids !== undefined && content_ids != ""){
                        var ids = content_ids.split(" ");
                        for(var j = 0; j < ids.length; j++){
                            angular.element(document.getElementById(ids[j])).addClass("hidden");}
                    }
                }
                var content_ids = self.attr("data-lrv-tab");
                if(content_ids !== undefined && content_ids != ""){
                    var ids = content_ids.split(" ");
                    for(var j = 0; j < ids.length; j++)
                        angular.element(document.getElementById(ids[j])).removeClass("hidden");
                }
            });

            var link = element.attr("data-lrv-link") != undefined ? element.attr("data-lrv-link") == "true": false;
            var id = element.attr("id");
            if(link && id != undefined){
                var hash = $location.hash();
                if(hash != undefined && hash != null && hash != ""){
                    var hashSplit = hash.split("&");
                    var hashObj = {};
                    for(var i = 0; i < hashSplit.length; i++){
                        var valSplit = hashSplit[i].split("=")
                        if(valSplit.length == 2)
                        hashObj[valSplit[0]] = valSplit[1];
                    }
                    if(Object.keys(hashObj).indexOf(id) != -1){
                        var children = angular.element(element.children());
                        for(var i = 0; i < children.length; i++){
                            var child = angular.element(children[i]);
                            if(child.attr("data-lrv-tab").split(" ").indexOf(hashObj[id]) != -1){
                                child.triggerHandler("click");
                            }
                        }
                    }
                }
            }
        }
    }
}]);

larvae.directive("modalLauncher", function(){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            element.on("click", function(){
                modal_id = element.attr("data-lrv-modal");
                modal = document.getElementById(modal_id);
                angular.element(modal).addClass("show");
                angular.element(document.querySelector("body")).addClass("modal-open");
            });
        }
    }
});

larvae.directive("modal", function(){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            element.addClass("modal");
            element.on("click", function(event){
                if(event.target == element[0]){
                    element.removeClass("show");
                    angular.element(document.querySelector("body")).removeClass("modal-open");
                }
            });
        }
    }
})

larvae.directive("modalHeader", ["$compile", function($compile){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            button = angular.element(
                '<button class="btn icon round modal-x modal-closer" data-lrv-modal="' +
                element.parent().parent().attr("id") +
                '"><i class="fa fa-close"></i></button>'
            );
            element.append(button);
            $compile(button)(scope);
        }
    }
}]);

larvae.directive("modalCloser", function(){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            element.on("click", function(event){
                modal_id = element.attr("data-lrv-modal");
                modal = document.getElementById(modal_id);
                angular.element(modal).removeClass("show");
                angular.element(document.querySelector("body")).removeClass("modal-open");
            });
        }
    }
});

larvae.directive("select", ["$compile", function($compile){
    return {
        restrict: "C",
        require: "^?translate",
        link: function(scope, element, attributes, translate){
            var scopeVariableName = element.attr("data-lrv-model");
            var scopeOptionsVariableName = element.attr("data-lrv-options");

            var spanSelect = angular.element("<span class='span-select'></span>");
            element.after(spanSelect);
            var spanSelectValue = angular.element("<span class='span-select-value' tabindex='0'></span>")
            spanSelect.append(spanSelectValue);
            var spanSelectOptions = angular.element("<span class='span-select-options'></span>")
            spanSelect.append(spanSelectOptions);
            var overSpanSelect = false;
            spanSelectValue.bind("click", function(){
                if(spanSelectOptions.hasClass("show")){
                    spanSelectValue[0].blur();
                    spanSelectOptions.removeClass("show");
                    spanSelectOptions.removeClass("up");
                    spanSelectOptions.css({transform: "none"});
                }
                else{
                    spanSelectOptions.addClass("show");
                    var distanceToBottom = window.innerHeight - spanSelect[0].getBoundingClientRect().bottom;
                    if(spanSelectOptions[0].offsetHeight > distanceToBottom){
                        spanSelectOptions.addClass("up");
                        var bottom = - spanSelectOptions[0].offsetHeight - spanSelect[0].offsetHeight;
                        spanSelectOptions.css({transform: "translateY(" + bottom + "px)"});
                    }
                }
            });
            spanSelectValue.bind("blur", function(event){
                if(!overSpanSelect){
                    spanSelectOptions.removeClass("show");
                    spanSelectOptions.removeClass("up");
                    spanSelectOptions.css({transform: "none"});
                }
            });
            spanSelect.bind("mouseenter", function(){
                overSpanSelect = true;
            });
            spanSelect.bind("mouseleave", function(){
                overSpanSelect = false;
            });

            scope.$watch(scopeOptionsVariableName, function(){
                element.html("");
                spanSelectOptions.html("");
                var options = scope[scopeOptionsVariableName];
                var optionValues = [];
                var selected = null;
                for(var i = 0; i < options.length; i++){
                    var option = options[i];
                    if(typeof option == "string"){
                        scope[scopeOptionsVariableName].splice(i, 1, { value: option, text: option });
                        options = scope[scopeOptionsVariableName];
                        option = options[i];
                    }
                    if(option.text == undefined){
                        scope[scopeOptionsVariableName][i].text = option.value;
                        options = scope[scopeOptionsVariableName];
                        option = options[i];
                    }
                    optionValues.push(option.value);
                    var optionElement = angular.element("<option value='" + option.value + "'>" + option.text + "</option>");
                    var spanOptionElement = angular.element("<span data-value='" + option.value + "' tabindex='0'>" + option.text + "</span>");
                    if(option.translation != undefined){
                        optionElement = angular.element("<option value='" + option.value + "' data-lrv-text='" + option.translation + "'></option>")
                        spanOptionElement = angular.element("<span data-value='" + option.value + "' class='text' tabindex='0' data-lrv-text='" + option.translation + "'></span>");
                    }
                    selected = option.selected != undefined && option.selected ? option.value : selected;
                    element.append(optionElement);
                    spanSelectOptions.append(spanOptionElement);
                    spanOptionElement.bind("DOMSubtreeModified", updateWidth);
                    if(translate != null)
                        translate.translate(spanOptionElement);
                    spanOptionElement.bind("click", function(){
                        scope[scopeVariableName] = angular.element(this).attr("data-value");
                        scope.$apply();
                        spanSelectOptions.removeClass("show");
                    });
                    updateWidth();
                }
                var variable = scope[scopeVariableName];
                if(
                    (variable == undefined || optionValues.indexOf(variable) == -1)
                    && typeof options == "object"
                    && options.length != undefined
                    && options.length > 0
                ){
                    if(selected != null)
                        scope[scopeVariableName] = selected;
                    else
                        scope[scopeVariableName] = options[0].value;
                }
            });

            scope.$watch(scopeVariableName, function(){
                spanOptionElements = angular.element(spanSelectOptions.children());
                spanOptionElements.removeClass("selected");
                for(var i = 0; i < spanOptionElements.length; i++){
                    spanOptionElement = angular.element(spanOptionElements[i]);
                    if(spanOptionElement.attr("data-value") == scope[scopeVariableName]){
                        spanOptionElement.addClass("selected");
                        break;
                    }
                }
                element.val(scope[scopeVariableName]);
                var options = scope[scopeOptionsVariableName];
                var text = null;
                var translation = null;
                for(var i = 0; i < options.length; i++){
                    if(options[i].value == scope[scopeVariableName]){
                        translation = options[i].translation;
                        text = options[i].text;
                        break;
                    }
                }
                if(translation != undefined){
                    spanSelectValue.attr("data-lrv-text", translation);
                    spanSelectValue.addClass("text");
                    if(translate != null)
                        translate.translate(spanSelectValue);
                    else
                        spanSelectValue.html(text);
                }
                else{
                    spanSelectValue.html(text);
                    spanSelectValue.removeAttr("data-lrv-text");
                    spanSelectValue.removeClass("text");
                }
            });

            element.bind("change", function(){
                scope[scopeVariableName] = element.val();
                scope.$apply();
            });

            function updateWidth(){
                var clone = spanSelectOptions.clone();
                clone.css({"max-height": "initial"});
                angular.element(document.getElementsByTagName("body")).append(clone);
                var width = clone[0].getBoundingClientRect().width + 2;
                clone.remove();
                spanSelectValue.css({width: width + "px"});
            }
        }
    }
}]);

larvae.directive("range", ["$compile", function($compile){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            var spanRangeVariableName = element.attr("data-lrv-model");
            var spanRangeContainer = angular.element("<span class='span-range-container'></span>");
            element.after(spanRangeContainer);
            var spanRange = angular.element("<span class='span-range'></span>");
            spanRangeContainer.append(spanRange);
            if(element.hasClass("load"))
                spanRange.addClass("load");
            var spanRangeBar = angular.element("<span class='span-range-bar'></span>");
            spanRange.append(spanRangeBar);
            var spanRangeDot = angular.element("<span class='span-range-dot'></span>");
            spanRange.append(spanRangeDot);
            if(scope[spanRangeVariableName] == undefined)
                scope[spanRangeVariableName] = element.attr("min");
            var spanRangeValue = angular.element("<span class='span-range-value'>" + scope[spanRangeVariableName] + "</span>");
            $compile(spanRangeValue)(scope);
            spanRange.append(spanRangeValue);
            var clicking = false;

            spanRangeBar.bind("mousemove", function(event){
                if(event.buttons == 1 && clicking)
                    moveDot(event);
            });

            spanRangeBar.bind("mousedown", function(event){
                if(event.buttons == 1){
                    clicking = true;
                    moveDot(event);
                }
            });

            spanRangeBar.bind("mouseup", function(event){
                if(event.buttons == 1)
                    clicking = false;
            });

            element.bind("change", function(){
                scope[spanRangeVariableName] = element.val();
                scope.$apply();
            });

            scope.$watch(spanRangeVariableName, function(){
                element.val(scope[spanRangeVariableName]);
                var percentage = 100 * (element.val() - element.attr("min")) / (element.attr("max") - element.attr("min"));
                spanRangeDot.css("margin-left", percentage + "%");
                spanRangeValue.css("margin-left", percentage + "%");
                spanRangeValue.html(element.val());
            });

            function moveDot(event){
                var percentage = 100 * event.layerX / spanRangeBar[0].offsetWidth;
                var min = parseInt(element.attr("min"));
                var max = parseInt(element.attr("max"));
                var onePercent = (max - min) / 100;
                var value = percentage * (max - min + onePercent) / 100 + min;
                element.val(value);
                element.triggerHandler("change");
            }
        }
    }
}]);

/*var directives = ["btn", "checkboxBtn", "radioBtn"];
for(var i = 0; i < directives.length; i++){
    var directive = directives[i];
    larvae.directive(directive, ["colorFactory", function(colorFactory){
        //var directive = directives[i];
        console.log(directives [i]);
        return {
            restrict: "C",
            link: function(scope, element, attributes){
                var color = element.attr("data-lrv-color")
                if(color != undefined){
                    colorFactory.addColor(color, directive);
                }
            }
        }
    }]);
}*/

larvae.directive("btn", ["colorFactory", function(colorFactory){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            var color = element.attr("data-lrv-color")
            if(color != undefined){
                colorFactory.addColor(color, "btn");
            }
        }
    }
}]);

larvae.directive("checkboxBtn", ["colorFactory", function(colorFactory){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            var color = element.attr("data-lrv-color")
            if(color != undefined){
                colorFactory.addColor(color, "checkboxBtn");
            }
        }
    }
}]);

larvae.directive("radioBtn", ["colorFactory", function(colorFactory){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            var color = element.attr("data-lrv-color")
            if(color != undefined){
                colorFactory.addColor(color, "radioBtn");
            }
        }
    }
}]);

larvae.directive("checkboxLeft", ["colorFactory", function(colorFactory){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            var color = element.attr("data-lrv-color")
            if(color != undefined){
                colorFactory.addColor(color, "checkboxLeft");
            }
        }
    }
}]);

larvae.directive("radioLeft", ["colorFactory", function(colorFactory){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            var color = element.attr("data-lrv-color")
            if(color != undefined){
                colorFactory.addColor(color, "radioLeft");
            }
        }
    }
}]);

larvae.directive("checkboxRight", ["colorFactory", function(colorFactory){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            var color = element.attr("data-lrv-color")
            if(color != undefined){
                colorFactory.addColor(color, "checkboxRight");
            }
        }
    }
}]);

larvae.directive("radioRight", ["colorFactory", function(colorFactory){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            var color = element.attr("data-lrv-color")
            if(color != undefined){
                colorFactory.addColor(color, "radioRight");
            }
        }
    }
}]);