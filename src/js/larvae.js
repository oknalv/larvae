larvae = angular.module("larvae-directive", []);
larvae.directive("tabs", function(){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            var children = element.children();
            children.addClass("tab");
            for(var i = 0; i < children.length; i++){
                var child = angular.element(children[i]);
                if(!child.hasClass("selected")){
                    var ids = child.attr("data-reference").split(" ");
                    console.log(ids);
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
                    var content_ids = child.attr("data-reference");
                    if(content_ids !== undefined && content_ids != ""){
                        var ids = content_ids.split(" ");
                        for(var j = 0; j < ids.length; j++){
                            angular.element(document.getElementById(ids[j])).addClass("hidden");}
                    }
                }
                var content_ids = self.attr("data-reference");
                if(content_ids !== undefined && content_ids != ""){
                    var ids = content_ids.split(" ");
                    for(var j = 0; j < ids.length; j++)
                        angular.element(document.getElementById(ids[j])).removeClass("hidden");
                }
            });
        }
    }
});

larvae.directive("modalLauncher", function(){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            element.on("click", function(){
                modal_id = element.attr("data-reference");
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
                '<button class="btn icon round modal-x modal-closer" data-reference="' +
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
                modal_id = element.attr("data-reference");
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
        link: function(scope, element, attributes){
            var scopeVariableName = element.attr("data-variable");
            var scopeOptionsVariableName = element.attr("data-options");

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
                }
                else
                    spanSelectOptions.addClass("show");
            });
            spanSelectValue.bind("blur", function(event){
                if(!overSpanSelect){
                    spanSelectOptions.removeClass("show");
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
                        optionElement = angular.element("<option value='" + option.value + "' data-text='" + option.translation + "'></option>")
                        spanOptionElement = angular.element("<span data-value='" + option.value + "' class='text' tabindex='0' data-text='" + option.translation + "'></span>");

                    }
                    selected = option.selected != undefined && option.selected ? option.value : selected;
                    element.append(optionElement);
                    spanSelectOptions.append(spanOptionElement);
                    $compile(spanOptionElement)(scope);
                    spanOptionElement.bind("click", function(){
                        scope[scopeVariableName] = angular.element(this).attr("data-value");
                        scope.$apply();
                        spanSelectOptions.removeClass("show");
                    });
                }
                spanSelectValue.css({width: spanSelectOptions[0].offsetWidth + 2 + "px"});
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
                    spanSelectValue.attr("data-text", translation);
                    spanSelectValue.addClass("text");
                    $compile(spanSelectValue)(scope);
                }
                else{
                    spanSelectValue.html(text);
                    spanSelectValue.removeAttr("data-text");
                    spanSelectValue.removeClass("text");
                }
            });

            element.bind("change", function(){
                scope[scopeVariableName] = element.val();
                scope.$apply();
            });
        }
    }
}]);

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
                var returnText = langTexts[textKey] == undefined ? textKey : langTexts[textKey];
                return returnText;
            };
        },
        compile: function(tElement, tAttributes){
            return {
                pre: function(scope, element, attributes, translate){
                    var scopeSelectedLangVarName = element.attr("data-selected-lang");
                    translate.texts = scope[element.attr("data-texts")];
                    var defaultLang = scope[element.attr("data-default-lang")];
                    translate.defaultLanguage = defaultLang == undefined ? Object.keys(translate.texts)[0] : defaultLang;
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
                                    $compile(angular.element(element[0].getElementsByClassName("text")))(scope);
                                });
                            }
                            else
                                $compile(angular.element(element[0].getElementsByClassName("text")))(scope);
                    });
                },
                pos: function(scope, element, attributes, translate){

                }
            }
        }
    }
}]);

larvae.directive("text", function(){
    return {
        restrict: "C",
        require: "^translate",
        link: function(scope, element, attributes, translate){
            element.html(translate.get(element.attr("data-text")));
        }
    }
});

larvae.directive("range", ["$compile", function($compile){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            var spanRangeModelVariableName = element.attr("data-ng-model");
            var spanRangeContainer = angular.element("<span class='span-range-container'></span>");
            element.after(spanRangeContainer);
            var spanRange = angular.element("<span class='span-range'></span>");
            spanRangeContainer.append(spanRange);
            var spanRangeBar = angular.element("<span class='span-range-bar'></span>");
            spanRange.append(spanRangeBar);
            var spanRangeDot = angular.element("<span class='span-range-dot'></span>");
            spanRange.append(spanRangeDot);
            var spanRangeValue = angular.element("<span class='span-range-value'>{{" + spanRangeModelVariableName + "}}</span>");
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
                var percentage = 100 * (element.val() - element.attr("min")) / (element.attr("max") - element.attr("min"));
                spanRangeDot.css("margin-left", percentage + "%");
                spanRangeValue.css("margin-left", percentage + "%");
                scope[spanRangeModelVariableName] = element.val();
            });

            scope.$watch(spanRangeModelVariableName, function(){
                element.val(scope[spanRangeModelVariableName]);
                var percentage = 100 * (element.val() - element.attr("min")) / (element.attr("max") - element.attr("min"));
                spanRangeDot.css("margin-left", percentage + "%");
                spanRangeValue.css("margin-left", percentage + "%");
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