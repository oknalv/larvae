larvae = angular.module("larvae", []);

larvae.service("lrvElement", function(){
    this.modal = function(id){
        return angular.element(document.getElementById(id)).controller("modal");
    }
    this.message = function(id){
        return angular.element(document.getElementById(id)).controller("message");
    }
    this.gallery = function(id){
        return angular.element(document.getElementById(id)).controller("gallery");
    }
});

larvae.factory("lrvColor", function(){
    var style = angular.element("<style></style>");
    angular.element(document.getElementsByTagName("head")[0]).append(style);
    var colors = {};
    var isDefaultSet = false;

    var addColor = function(className, name, color){
        isDefaultSet = true;
        var name = name[0] == "." ? name : "." + name;
        var className = className == "checkbox-btn" || className == "radio-btn" ? "checkbox-radio-btn" : className;
        className = className == "checkbox-left" || className == "radio-left" || className == "checkbox-right" || className == "radio-right"? "checkbox-radio" : className;
        var color = typeof color == "string" ? [color] : color;
        if(Object.keys(colors).indexOf(className) == -1)
            colors[className] = [];
        if(colors[className].indexOf(name) == -1){
            colors[className].push(name);
            style.html(style.html() + getColorClasses[className](name, color));
        }
    };

    var setDefaultColors = function(rules){
        if(!isDefaultSet){
            var keys = Object.keys(rules);
            for(var i = 0; i < keys.length; i++){
                style.html(style.html() + getColorClasses[keys[i]]("",rules[keys[i]]))
            }
        }
        isDefaultSet = true;
    }

    var getColorClasses = {
        "btn": function(name, color){
            var color1 = color[0];
            var color2 = color[1];
            var color3 = color[2];
            var color4 = color[3];
            var rgb = color1 != "transparent" ? hexToRgb(color1) : null;
            var rgba = rgb != null ? "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",.75)" : "transparent";
            var css = getCss({
                head: ".btn" + name,
                rules: {
                    "--btn-color": color1,
                    "--btn-background": color2,
                    "--btn-shadow": rgba,
                    "--btn-disabled-color": color3,
                    "--btn-disabled-background": color4
                }
            });
            return css;
        },
        "checkbox-radio-btn": function(name, color){
            var color1 = color[0];
            var color2 = color[1];
            var color3 = color[2];
            var color4 = color[3];
            var rgb = color1 != "transparent" ? hexToRgb(color1) : null;
            var rgba = rgb != null ? "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",.75)" : "transparent";
            var css = getCss({
                head: [
                    ".checkbox-btn" + name + "+label",
                    ".radio-btn" + name + "+label"
                ],
                rules: {
                    "--radio-btn-background": color2,
                    "--radio-btn-color": color1,
                    "--radio-btn-shadow": rgba,
                    "--radio-btn-disabled-color": color3,
                    "--radio-btn-disabled-background": color4
                }
            });
            return css;
        },
        "checkbox-radio": function(name, color){
            var color1 = color[0];
            var color2 = color[1];
            var color3 = color[2];
            var color4 = color[3];
            var rgb = color1 != "transparent" ? hexToRgb(color1) : null;
            var rgba = rgb != null ? "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",.75)" : "transparent";
            var css = getCss({
                head: [
                    ".checkbox-left" + name + "+label",
                    ".checkbox-right" + name + "+label",
                    ".radio-left" + name + "+label",
                    ".radio-right" + name + "+label"
                ],
                rules: {
                    "--radio-box-background": color2,
                    "--radio-box-color": color1,
                    "--radio-box-shadow": rgba,
                    "--radio-box-disabled-color": color3,
                    "--radio-box-disabled-background": color4
                }
            });
            return css;
        },
        "tabs": function(name, color){
            var color1 = color[0];
            var color2 = color[1];
            var css = getCss({
                head: [
                    ".tabs" + name + ">.tab:after"
                ],
                rules: {
                    "--tab-underline": color2,
                    "--tab-selected": color1
                }
            });
            return css;
        },
        "modal": function(name, color){
            var color1 = color[0];
            var color2 = color[1];
            var color3 = color[2];
            var color4 = color[3];
            var rgb = color2 != "transparent" ? hexToRgb(color2) : null;
            var rgba = rgb != null ? "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",.75)" : "transparent";
            var css = getCss({
                head: [
                    ".modal" + name + " *"
                ],
                rules: {
                    "--modal-header": color1,
                    "--modal-footer": color4,
                    "--modal-background": color3
                }
            }) + getCss({
                head: [
                    ".modal" + name + ">.modal-container>.modal-header>.close"
                ],
                rules: {
                    "--btn-color": color2,
                    "--btn-shadow": rgba
                }
            });
            return css;
        },
        "select": function(name, color){
            var color1 = color[0];
            var color2 = color[1];
            var color3 = color[2];
            var color4 = color[3];
            var rgb = color1 != "transparent" ? hexToRgb(color1) : null;
            var rgba = rgb != null ? "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",.75)" : "transparent";
            var css = getCss({
                head: [
                    ".select" + name + "+.span-select *"
                ],
                rules: {
                    "--select-color": color1,
                    "--select-background": color4,
                    "--select-shadow": rgba,
                    "--select-option-hover": color3,
                    "--select-option-selected": color2
                }
            });
            return css;
        },
        "range": function(name, color){
            var color1 = color[0];
            var color2 = color[1];
            var color3 = color[2];
            var color4 = color[3];
            var color5 = color[4];
            var rgb = color1 != "transparent" ? hexToRgb(color1) : null;
            var rgba = rgb != null ? "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",.75)" : "transparent";
            var css = getCss({
                head: [
                    ".range" + name + "+.span-range-container *"
                ],
                rules: {

                    "--range-bar-background": color2,
                    "--range-border": color1,
                    "--range-background": color3,
                    "--range-shadow": rgba,
                    "--range-value": color1,
                    "--range-disabled-border": color4,
                    "--range-bar-disabled-background": color5
                }
            });
            return css;
        },
        "table": function(name, color){
            var color1 = color[0];
            var color2 = color[1];
            var color3 = color[2];
            var css = getCss({
                head: [
                    "table" + name + " *"
                ],
                rules: {
                    "--thead-underline": color1,
                    "--row-even": color2,
                    "--row-hover": color3
                }
            });
            return css;
        },
        "message": function(name, color){
            var color1 = color[0];
            var color2 = color[1];
            var rgb = color2 != "transparent" ? hexToRgb(color2) : null;
            var rgba = rgb != null ? "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",.75)" : "transparent";
            var css = getCss({
                head: [
                    ".message>div" + name
                ],
                rules: {

                    "--message-background": color1,
                    "--message-color": color2
                }
            }) + getCss({
                head: [
                    ".message>div" + name + ">.btn.icon.round.close"
                ],
                rules: {
                    "--btn-color": color2,
                    "--btn-shadow": rgba
                }
            });
            return css;
        },
        "input": function(name, color){
            var color1 = color[0];
            var color2 = color[1];
            var color3 = color[2];
            var color4 = color[3];
            var rgb = color1 != "transparent" ? hexToRgb(color1) : null;
            var rgba = rgb != null ? "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ",.75)" : "transparent";
            var css = getCss({
                head: ".input" + name,
                rules: {
                    "--input-color": color1,
                    "--input-background": color2,
                    "--input-shadow": rgba,
                    "--input-disabled-color": color3,
                    "--input-disabled-background": color4
                }
            });
            return css;
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
        setDefaultColors: setDefaultColors,
        addColor: addColor
    }
})

larvae.directive("translate", ["$compile", "$http", function($compile, $http){
    return {
        restrict: "C",
        scope: {
            lrvModel: "="
        },
        controller: function(){
            this.model = {};
            this.get = function (textKey, language){
                var language = language == undefined ? this.model.value : language;
                var langTexts = this.model.texts[language] == undefined ? this.model.texts[this.model.defaultLanguage] : this.model.texts[language];
                var returnText = langTexts[textKey] == undefined ? this.model.texts[this.model.defaultLanguage][textKey] == undefined ? textKey : this.model.texts[this.model.defaultLanguage][textKey] : langTexts[textKey];
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
                    translate.model = scope.lrvModel;
                    translate.model.defaultLanguage = translate.model.defaultLanguage == undefined ? Object.keys(translate.model.texts)[0] : translate.model.defaultLanguage;
                    if(typeof translate.model.texts[translate.model.defaultLanguage] == "string"){
                        $http.get(translate.model.texts[translate.model.defaultLanguage]).then(function(response){
                            translate.model.texts[translate.model.defaultLanguage] = response.data;
                        });
                    }
                    var language = window.localStorage.getItem("lang");
                    if(language == undefined){
                        translate.model.value = translate.model.value == undefined ? translate.model.defaultLanguage : translate.model.value;
                        window.localStorage.setItem("lang", translate.model.value);
                    }
                    else
                        translate.model.value = language;
                    scope.$watch("lrvModel.value", function(){
                        window.localStorage.setItem("lang", translate.model.value);
                        if(typeof translate.model.texts[translate.model.value] == "string"){
                            $http.get(translate.model.texts[translate.model.value]).then(function(response){
                                translate.model.texts[translate.model.value] = response.data;
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

larvae.directive("modalLauncher", ["lrvElement", function(lrvElement){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            element.on("click", function(){
                lrvElement.modal(element.attr("data-lrv-modal")).open();
            });
        }
    }
}]);

larvae.directive("modal", function(){
    return {
        restrict: "C",
        controller: ["$element", function(element){
            var onOpen = function(){};
            var onClose = function(){};

            this.open = function(){
                element.addClass("show");
                angular.element(document.querySelector("body")).addClass("modal-open");
                onOpen();
            }

            this.close = function(){
                element.removeClass("show");
                angular.element(document.querySelector("body")).removeClass("modal-open");
                onClose();
            }

            this.onOpen = function(fnct){
                onOpen = typeof fnct == "function" ? fnct : onOpen;
            }

            this.onClose = function(fnct){
                onClose = typeof fnct == "function" ? fnct : onClose;
            }
        }],
        link: function(scope, element, attributes, modal){
            element.on("click", function(event){
                if(event.target == element[0]){
                    modal.close();
                }
            });
        }
    }
});

larvae.directive("modalHeader", ["$compile", function($compile){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            var button = angular.element(
                '<button class="btn icon round close modal-closer" data-lrv-modal="' +
                element.parent().parent().attr("id") +
                '"><i class="fa fa-close"></i></button>'
            );
            element.append(button);
            $compile(button)(scope);
        }
    }
}]);

larvae.directive("modalCloser", ["lrvElement", function(lrvElement){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            element.on("click", function(){
                lrvElement.modal(element.attr("data-lrv-modal")).close();
            });
        }
    }
}]);

larvae.directive("select", ["$compile", function($compile){
    return {
        restrict: "C",
        require: "^?translate",
        scope: {
            lrvModel: "="
        },
        link: function(scope, element, attributes, translate){
            if(scope.lrvModel.value == undefined)
                scope.lrvModel.value = scope.lrvModel.options[0];

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

            scope.$watch("lrvModel.options", function(){
                element.html("");
                spanSelectOptions.html("");
                var options = scope.lrvModel.options;
                var optionValues = [];
                for(var i = 0; i < options.length; i++){
                    var option = options[i];
                    if(typeof option == "string"){
                        scope.lrvModel.options.splice(i, 1, { value: option, text: option });
                        options = scope.lrvModel.options;
                        option = options[i];
                    }
                    if(option.text == undefined){
                        scope.lrvModel.options[i].text = option.value;
                        options = scope.lrvModel.options;
                        option = options[i];
                    }
                    optionValues.push(option.value);
                    var optionElement = angular.element("<option value='" + option.value + "'>" + option.text + "</option>");
                    var spanOptionElement = angular.element("<span data-lrv-value='" + option.value + "' tabindex='0'>" + option.text + "</span>");
                    if(option.translation != undefined){
                        optionElement = angular.element("<option value='" + option.value + "' data-lrv-text='" + option.translation + "'></option>")
                        spanOptionElement = angular.element("<span data-lrv-value='" + option.value + "' class='text' tabindex='0' data-lrv-text='" + option.translation + "'></span>");
                    }
                    element.append(optionElement);
                    spanSelectOptions.append(spanOptionElement);
                    spanOptionElement.bind("DOMSubtreeModified", updateWidth);
                    if(translate != null)
                        translate.translate(spanOptionElement);
                    spanOptionElement.bind("click", function(){
                        scope.lrvModel.value = angular.element(this).attr("data-lrv-value");
                        scope.$apply();
                        spanSelectOptions.removeClass("show");
                    });
                    updateWidth();
                }
                var variable = scope.lrvModel.value;
                if(
                    (variable == undefined || optionValues.indexOf(variable) == -1)
                    && typeof options == "object"
                    && options.length != undefined
                    && options.length > 0
                ){
                    scope.lrvModel.value = options[0].value;
                }
            });

            scope.$watch("lrvModel.value", function(){
                spanOptionElements = angular.element(spanSelectOptions.children());
                spanOptionElements.removeClass("selected");
                for(var i = 0; i < spanOptionElements.length; i++){
                    spanOptionElement = angular.element(spanOptionElements[i]);
                    if(spanOptionElement.attr("data-lrv-value") == scope.lrvModel.value){
                        spanOptionElement.addClass("selected");
                        break;
                    }
                }
                element.val(scope.lrvModel.value);
                var options = scope.lrvModel.options;
                var text = null;
                var translation = null;
                for(var i = 0; i < options.length; i++){
                    if(options[i].value == scope.lrvModel.value){
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
                scope.lrvModel.value = element.val();
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

larvae.directive("range", function(){
    return {
        restrict: "C",
        scope: {
            lrvModel: "="
        },
        link: function(scope, element, attributes){
            var spanRangeContainer = angular.element("<span class='span-range-container'></span>");
            element.after(spanRangeContainer);
            var spanRange = angular.element("<span class='span-range'></span>");
            spanRangeContainer.append(spanRange);
            var spanRangeBar = angular.element("<span class='span-range-bar'></span>");
            spanRange.append(spanRangeBar);
            var spanRangeDot = angular.element("<span class='span-range-dot'></span>");
            spanRange.append(spanRangeDot);
            if(scope.lrvModel.min == undefined)
                scope.lrvModel.min = parseFloat(element.attr("min")) || 0;
            else
                element.attr("min", scope.lrvModel.min);
            if(scope.lrvModel.max == undefined)
                scope.lrvModel.max = parseFloat(element.attr("max")) || 100;
            else
                element.attr("max", scope.lrvModel.max);
            if(scope.lrvModel.value == undefined)
                scope.lrvModel.value = scope.lrvModel.min;
            if(scope.lrvModel.step != undefined)
                element.attr("step", scope.lrvModel.step);
            if(scope.lrvModel.disabled == true)
                element.attr("disabled", "");
            else
                element.removeAttr("disabled");
            var spanRangeValue = angular.element("<span class='span-range-value'>" + scope.lrvModel.value + "</span>");
            spanRange.append(spanRangeValue);

            var clicking = false;

            spanRangeBar.bind("mousemove", function(event){
                if(event.buttons == 1 && clicking && !scope.lrvModel.disabled)
                    moveDot(event);
            });

            spanRangeBar.bind("mousedown", function(event){
                if(event.buttons == 1){
                    clicking = true;
                    if(!scope.lrvModel.disabled)
                    moveDot(event);
                }
            });

            spanRangeBar.bind("mouseup", function(event){
                if(event.buttons == 1)
                    clicking = false;
            });

            element.bind("change", function(){
                scope.lrvModel.value = parseFloat(element.val());
                scope.$apply();
            });

            scope.$watch("lrvModel.value", function(){
                element.val(parseFloat(scope.lrvModel.value));
                var percentage = 100 * (element.val() - scope.lrvModel.min) / (scope.lrvModel.max - scope.lrvModel.min);
                spanRangeDot.css("margin-left", percentage + "%");
                spanRangeValue.css("margin-left", percentage + "%");
                spanRangeValue.html(element.val());
            });

            scope.$watch("lrvModel.disabled", function(){
                if(scope.lrvModel.disabled)
                    element.attr("disabled", "");
                else
                    element.removeAttr("disabled");
            });

            function moveDot(event){
                var percentage = 100 * event.layerX / spanRangeBar[0].offsetWidth;
                var onePercent = (scope.lrvModel.max - scope.lrvModel.min) / 100;
                var value = percentage * (scope.lrvModel.max - scope.lrvModel.min + onePercent) / 100 + scope.lrvModel.min;
                element.val(parseFloat(value));
                element.triggerHandler("change");
            }
        }
    }
});

larvae.directive("message", function(){
    return {
        restrict: "C",
        controller: ["$scope", "$element", "$compile", "$timeout", function(scope, element, $compile, $timeout){
            this.add = function(message){
                var messageDiv = angular.element("<div></div>");
                var messageSpan = angular.element("<span></span>");
                messageDiv.append(messageSpan);
                if(message.translation != undefined){
                    messageSpan.addClass("text");
                    messageSpan.attr("data-lrv-text", message.translation);
                }
                else
                    messageSpan.html(message.text);
                if(message.classes != undefined)
                    messageDiv.addClass(message.classes);
                element.append(messageDiv);
                $compile(messageDiv)(scope);
                if(message.time != undefined){
                    $timeout(function(){
                        messageDiv.addClass("fade");
                        $timeout(function(){
                            messageDiv.remove();
                        }, 1000)
                    }, message.time);
                }
                else if(message.close != undefined && message.close){
                    messageSpan.addClass("close");
                    var button = angular.element("<button class='btn icon round close'><i class='fa fa-close'></i></button>")
                    messageDiv.append(button);
                    button.bind("click",function(){
                        messageDiv.remove();
                    });
                }
            };

            this.clear = function(){
                element.html("");
            }
        }]
    }
});

larvae.directive("galleryLauncher", ["lrvElement", function(lrvElement){
    return {
        restrict: "C",
        link: function(scope, element, attributes){
            element.on("click", function(){
                var gallery = lrvElement.gallery(element.attr("data-lrv-gallery"));
                if(element.attr("data-lrv-image")){
                    gallery.set(parseInt(element.attr("data-lrv-image")));
                    scope.$apply();
                }
                gallery.open();
            });
        }
    }
}]);

larvae.directive("gallery", ["$compile", function($compile){
    return {
        restrict: "C",
        scope: {
            lrvModel: "="
        },
        controller: ["$element", "$scope", function(element, scope){
            var onOpen = function(){};
            var onClose = function(){};
            this.model = null;

            this.open = function(){
                element.addClass("show");
                angular.element(document.querySelector("body")).addClass("gallery-open");
                element[0].focus();
                onOpen();
            }

            this.close = function(){
                element.removeClass("show");
                angular.element(document.querySelector("body")).removeClass("gallery-open");
                element[0].blur();
                onClose();
            }

            this.onOpen = function(fnct){
                onOpen = typeof fnct == "function" ? fnct : onOpen;
            }

            this.onClose = function(fnct){
                onClose = typeof fnct == "function" ? fnct : onClose;
            }

            this.next = function(){
                this.model.value++;
                if(this.model.value >= this.model.images.length)
                    this.model.value = 0;
                scope.$apply();
            }

            this.prev = function(){
                this.model.value--;
                if(this.model.value <= -1)
                    this.model.value = this.model.images.length - 1;
                scope.$apply();
            }

            this.set = function(index){
                if(index >= 0 && index < this.model.images.length)
                    this.model.value = index;
            }
        }],
        link: function(scope, element, attributes, gallery){
            element.attr("tabindex", 1);
            gallery.model = scope.lrvModel;
            var imageButtonsContainer = angular.element("<div></div>");
            element.append(imageButtonsContainer);
            var prevButton = angular.element('<button class="btn round icon"><i class="fa fa-chevron-left"></i></button>');
            imageButtonsContainer.append(prevButton);
            if(gallery.model.value == undefined)
                scope.lrvModel.value = 0;
            var image = angular.element('<img data-ng-src="{{lrvModel.images[lrvModel.value].path}}"/>');
            imageButtonsContainer.append(image);
            $compile(image)(scope);
            var nextButton = angular.element('<button class="btn round icon"><i class="fa fa-chevron-right"></i></button>');
            imageButtonsContainer.append(nextButton);
            var value = angular.element('<div><span>{{lrvModel.images[lrvModel.value].value || lrvModel.images[lrvModel.value].path}}</span></div>');
            element.append(value);
            $compile(value)(scope);

            image.on("click", function(){
                gallery.next();
            });

            nextButton.on("click", function(){
                gallery.next();
            });

            prevButton.on("click", function(){
                gallery.prev();
            });

            imageButtonsContainer.on("click", function(event){
                if(event.target == imageButtonsContainer[0]){
                    gallery.close();
                }
            });

            value.on("click", function(event){
                if(event.target == value[0]){
                    gallery.close();
                }
            });

            element.on("keypress", function(event){
                if(event.keyCode == 27)
                    gallery.close();
                else if(event.keyCode == 39 || event.keyCode == 40)
                    gallery.next();
                else if(event.keyCode == 37 || event.keyCode == 38)
                    gallery.prev();
                if(event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40)
                    event.preventDefault();
            });
        }
    }
}]);