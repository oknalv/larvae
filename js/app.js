var app = angular.module("larvaeApp", ["larvae", "hljs"]);
app.controller("larvaeController", ["$scope", "$location", "lrvColor", "lrvElement", function($scope, $location, lrvColor, lrvElement){
    //PAGE SECTION

    $scope.langs = {
        value: "en",
        options: [
            {
                value: "en",
                text: "English"
            },
            {
                value: "es",
                text: "español"
            }
        ],
        texts: {
            "en": "js/en.json",
            "es": "js/es.json"
        }
    };

    //PAGE TABS SECTION

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
    $scope.messagesTab = "sections/messages.html";

    //VARIABLES FOR SOME SECTIONS SECTION
    var loremFistrum = 'Lorem fistrum amatomaa no te digo trigo por no llamarte Rodrigor te voy a borrar el cerito ese pedazo de a peich quietooor quietooor a wan la caidita. Ese pedazo de pecador a peich caballo blanco caballo negroorl te voy a borrar el cerito. Hasta luego Lucas llevame al sircoo caballo blanco caballo negroorl fistro caballo blanco caballo negroorl diodeno diodenoo. Benemeritaar ese hombree qué dise usteer apetecan. Se calle ustée se calle ustée papaar papaar condemor. Diodeno me cago en tus muelas caballo blanco caballo negroorl te voy a borrar el cerito. Quietooor pecador ahorarr está la cosa muy malar se calle ustée no te digo trigo por no llamarte Rodrigor no puedor. No puedor no puedor benemeritaar la caidita no te digo trigo por no llamarte Rodrigor.';

    //MAIN SECTION

    $scope.sources = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<link rel="stylesheet" type="text/css" href="larvae.css"/>\n<script src="larvae.js"></script>'
            }
        ]
    };

    //BUTTON SECTION

    $scope.defaultButton = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<button class="btn">button</button>'
            }
        ],
        result: "HTML"
    };

    $scope.roundButton = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<button class="btn round">button</button>'
            }
        ],
        result: "HTML"
    };

    $scope.iconButton = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<button class="btn icon">\n    <i class="fa fa-question-circle-o"></i>\n</button>'
            }
        ],
        result: "HTML"
    };

    $scope.roundIconButton = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<button class="btn icon round">\n    <i class="fa fa-question-circle-o"></i>\n</button>'
            }
        ],
        result: "HTML"
    };

    var groupedButtons = '<div class="grouped">\n';
    groupedButtons += '    <button class="btn">button</button>\n';
    groupedButtons += '    <button class="btn">button</button>\n';
    groupedButtons += '    <button class="btn">button</button>\n';
    groupedButtons += '    <button class="btn">button</button>\n';
    groupedButtons += '    <button class="btn">button</button>\n';
    groupedButtons += '    <button class="btn">button</button>\n';
    groupedButtons += '</div>';
    $scope.groupedButtons = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: groupedButtons
            }
        ],
        result: "HTML"
    }

    var disabledButtons = '<button class="btn" disabled>button</button>\n';
    disabledButtons += '<button class="btn icon" disabled>\n    <i class="fa fa-question-circle-o"></i>\n</button>\n';
    disabledButtons += '<div class="grouped">';
    $scope.disabledButtons = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: disabledButtons
            }
        ],
        result: "HTML"
    }

    //CHECKBOX SECTION

    $scope.leftCheckbox = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<input type="checkbox" class="checkbox-left" id="check1"/>\n<label for="check1">checkbox</label>'
            }
        ],
        result: "HTML"
    };

    $scope.rightCheckbox = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<input type="checkbox" class="checkbox-right" id="check2"/>\n<label for="check2">checkbox</label>'
            }
        ],
        result: "HTML"
    };

    $scope.btnCheckbox = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<input type="checkbox" class="checkbox-btn" id="check3"/>\n<label for="check3">checkbox</label>'
            }
        ],
        result: "HTML"
    };

    var groupedCheckboxes = '<div class="grouped">\n';
    groupedCheckboxes += '    <input type="checkbox" class="checkbox-btn" id="check4"/>\n    <label for="check4">checkbox</label>\n';
    groupedCheckboxes += '    <input type="checkbox" class="checkbox-btn" id="check5"/>\n    <label for="check5">checkbox</label>\n';
    groupedCheckboxes += '    <input type="checkbox" class="checkbox-btn" id="check6"/>\n    <label for="check6">checkbox</label>\n';
    groupedCheckboxes += '</div>';
    $scope.groupedCheckboxes = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: groupedCheckboxes
            }
        ],
        result: "HTML"
    };

    var disabledCheckboxes = '<input type="checkbox" class="checkbox-btn" id="check7" disabled/>\n<label for="check7">checkbox</label>'
    disabledCheckboxes += '<input type="checkbox" class="checkbox-left" id="check8" disabled/>\n<label for="check8">checkbox</label>'
    $scope.disabledCheckboxes = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: disabledCheckboxes
            }
        ],
        result: "HTML"
    };

    //TAB SECTION

    var tabsHorizontal = '<div class="tabs">\n';
    tabsHorizontal += '    <div class="selected" data-lrv-tab="tab1-1">eng</div>\n    <div data-lrv-tab="tab1-2">esp</div>\n    <div data-lrv-tab="tab1-3">gal</div>\n'
    tabsHorizontal += '</div>\n';
    tabsHorizontal += '<div id="tab1-1" style="background-color: lightgray">Hello World!!</div>\n';
    tabsHorizontal += '<div id="tab1-2" style="background-color: lightgray">¡¡Hola mundo!!</div>\n';
    tabsHorizontal += '<div id="tab1-3" style="background-color: lightgray">Ola mundo!!</div>\n';
    $scope.tabsHorizontal = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: tabsHorizontal,
                resultNoPadding: true
            }
        ],
        result: "HTML"
    };

    var tabsVertical = '<div class="tabs vertical">\n';
    tabsVertical += '    <div class="selected" data-lrv-tab="tab2-1">eng</div>\n    <div data-lrv-tab="tab2-2">esp</div>\n    <div data-lrv-tab="tab2-3">gal</div>\n'
    tabsVertical += '</div>\n';
    tabsVertical += '<div id="tab2-1" style="background-color: lightgray">Hello World!!</div>\n';
    tabsVertical += '<div id="tab2-2" style="background-color: lightgray">¡¡Hola mundo!!</div>\n';
    tabsVertical += '<div id="tab2-3" style="background-color: lightgray">Ola mundo!!</div>';
    $scope.tabsVertical = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: tabsVertical
            }
        ],
        result: "HTML"
    };

    $scope.fragment = {
        code: [
            {
                name: "fragment",
                content: "#tab-container=tab-reference"
            }
        ]
    };

    $scope.thisFragment = {
        code: [
            {
                name: "fragment",
                content: "#main-index=components-tab&components-index=tabs-tab"
            }
        ]
    };

    //MODAL SECTION

    var simpleModal = '<div class="modal" id="simple-modal">\n';
    simpleModal += '    <div class="modal-container">\n';
    simpleModal += '        <div class="modal-header"></div>\n';
    simpleModal += '        <div class="modal-body">' + loremFistrum + '</div>\n';
    simpleModal += '        <div class="modal-footer"></div>\n';
    simpleModal += '    </div>\n';
    simpleModal += '</div>';
    $scope.simpleModal = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: simpleModal,
            }
        ],
        result: "HTML",
        resultNoPadding: true
    };

    $scope.modalLauncher = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<button class="btn modal-launcher" data-lrv-modal="simple-modal">button</button>'
            }
        ],
        result: "HTML"
    };

    var bodyModal = '<div class="modal" id="body-modal">\n';
    bodyModal += '    <div class="modal-container">\n';
    bodyModal += '        <div class="modal-body">' + loremFistrum + '</div>\n';
    bodyModal += '    </div>\n';
    bodyModal += '</div>';
    $scope.bodyModal = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: bodyModal
            }
        ],
        result: "HTML",
        resultNoPadding: true
    };

    var closeModal = '<div class="modal" id="close-modal">\n';
    closeModal += '    <div class="modal-container">\n';
    closeModal += '        <div class="modal-body">\n';
    closeModal += '           <button class="btn modal-closer" data-lrv-modal="close-modal">button</button>\n';
    closeModal += '       </div>\n';
    closeModal += '    </div>\n';
    closeModal += '</div>';
    $scope.closeModal = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: closeModal
            }
        ],
        result: "HTML",
        resultNoPadding: true
    };

    $scope.modalController = {
        code: [
            {
                name: "JavaScript",
                language: "javascript",
                content: 'lrvElement.modal("id");'
            }
        ]
    }

    $scope.modalOpenFn = {
        name: "open",
        description: {translation: "modals-open"},
        example: 'lrvElement.modal("id").open();'
    }

    $scope.modalCloseFn = {
        name: "close",
        description: {translation: "modals-close"},
        example: 'lrvElement.modal("id").close();'
    }

    $scope.modalOnOpenFn = {
        name: "onOpen",
        description: {translation: "modals-onopen"},
        parameters: [
            {
                name: "function",
                description:{translation: "function-be-called"}
            }
        ],
        example: 'lrvElement.modal("id").onOpen(function(){});'
    }

    $scope.modalOnCloseFn = {
        name: "onClose",
        description: {translation: "modals-onclose"},
        parameters: [
            {
                name: "function",
                description:{translation: "function-be-called"}
            }
        ],
        example: 'lrvElement.modal("id").onClose(function(){});'
    }

    //SELECT SECTION

    $scope.opts1 = {options:["opt1", "opt2", "opt3"]};
    var simpleOpts = '<select class="select" data-lrv-model="opts1"></select>';
    var simpleOptsJs = '$scope.opts1 = {\n';
    simpleOptsJs += '    "options": ["opt1", "opt2", "opt3"]\n';
    simpleOptsJs += '};';
    $scope.simpleOpts = {
        code: [
            {
                name: "JavaScript",
                language: "javascript",
                content: simpleOptsJs
            },
            {
                name: "HTML",
                language: "html",
                content: simpleOpts
            }
        ],
        result: "HTML"
    };

    var jsonSyntax = '{\n';
    jsonSyntax += '    "value": "opt",\n';
    jsonSyntax += '    "text": "opt",\n';
    jsonSyntax += '    "translation": "opt"\n';
    jsonSyntax += '}';
    $scope.jsonSyntax = {
        code: [
            {
                name: "JSON",
                language: "json",
                content: jsonSyntax
            }
        ]
    };

    $scope.opts2 = {
        value: "opt4",
        options: [
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
                translation: "option"
            }
        ]
    };
    var complexOptions = '<select class="select" data-lrv-model="opts2"></select>';
    var complexOptionsJs = '$scope.opts2 = {\n';
    complexOptionsJs += '    "value": "opt4",\n';
    complexOptionsJs += '    "options": [\n';
    complexOptionsJs += '        "opt1",\n';
    complexOptionsJs += '        {\n';
    complexOptionsJs += '            "value": "opt2"\n';
    complexOptionsJs += '        },\n';
    complexOptionsJs += '        {\n';
    complexOptionsJs += '            "value": "opt3",\n';
    complexOptionsJs += '            "text": "Opt3",\n';
    complexOptionsJs += '        },\n';
    complexOptionsJs += '        {\n';
    complexOptionsJs += '            "value": "opt4",\n';
    complexOptionsJs += '            "translation": "option"\n';
    complexOptionsJs += '        }\n';
    complexOptionsJs += '    ]\n';
    complexOptionsJs += '};';
    $scope.complexOptions = {
        code: [
            {
                name: "JavaScript",
                language: "javascript",
                content: complexOptionsJs
            },
            {
                name: "HTML",
                language: "html",
                content: complexOptions
            }
        ],
        result: "HTML"
    };

    var dynamicOptions1 = {options:['opt1', 'opt2', 'opt3']};
    var dynamicOptions2 = {options:['1opt', '2opt', '3opt']};
    $scope.dynamicOptions = dynamicOptions1;
    var changeOpts = false;
    $scope.switchOptions = function(){
        if(!changeOpts)
            $scope.dynamicOptions = dynamicOptions2;
        else
            $scope.dynamicOptions = dynamicOptions1;
        changeOpts = !changeOpts;
    }

    $scope.opts3 = {options:['opt1', 'opt2', 'opt3']};

    //MULTILANGUAGE SECTION

    $scope.translate = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<div class="translate" data-lrv-model="lang"></div>'
            }
        ]
    };

    var scopeTexts = '$scope.lang = {\n';
    scopeTexts += '    "texts": {\n';
    scopeTexts += '        "en": {\n';
    scopeTexts += '            "hello-world": "Hello world!!"\n';
    scopeTexts += '        },\n';
    scopeTexts += '        "es": {\n';
    scopeTexts += '            "hello-world": "¡¡Hola mundo!!"\n';
    scopeTexts += '        }\n';
    scopeTexts += '    }\n';
    scopeTexts += '}';
    $scope.scopeTexts = {
        code: [
            {
                name: "JavaScript",
                language: "javascript",
                content: scopeTexts
            }
        ]
    };

    var externalTexts = '$scope.lang = {\n';
    externalTexts += '    "texts": {\n';
    externalTexts += '        "en": "en.json",\n';
    externalTexts += '        "es": "es.json"\n';
    externalTexts += '    }\n';
    externalTexts += '}';
    $scope.externalTexts = {
        code: [
            {
                name: "JavaScript",
                language: "javascript",
                content: externalTexts
            }
        ]
    };

    var selectedLang = '$scope.lang = {\n';
    selectedLang += '    "value": "en",\n';
    selectedLang += '    "texts": {\n';
    selectedLang += '        "en": "en.json",\n';
    selectedLang += '        "es": "es.json"\n';
    selectedLang += '    }\n';
    selectedLang += '}';
    $scope.selectedLang = {
        code: [
            {
                name: "JavaScript",
                language: "javascript",
                content: selectedLang
            }
        ]
    };

    var defaultLang = '$scope.lang = {\n';
    defaultLang += '    "defaultLanguage": "en",\n';
    defaultLang += '    "texts": {\n';
    defaultLang += '        "en": "en.json",\n';
    defaultLang += '        "es": "es.json"\n';
    defaultLang += '    }\n';
    defaultLang += '}';
    $scope.defaultLang = {
        code: [
            {
                name: "JavaScript",
                language: "javascript",
                content: defaultLang
            }
        ]
    };

    $scope.text = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<span class="text" data-lrv-text="hello-world"></span>'
            }
        ],
        result: "HTML"
    };

    //TABLE SECTION

    var table = '<table>\n';
    table += '    <thead>\n';
    table += '        <tr>\n';
    table += '            <th>th</th>\n';
    table += '            <th>th</th>\n';
    table += '            <th>th</th>\n';
    table += '        </tr>\n';
    table += '    </thead>\n';
    table += '    <tbody>\n';
    table += '        <tr>\n';
    table += '            <td>td</td>\n';
    table += '            <td>td</td>\n';
    table += '            <td>td</td>\n';
    table += '        </tr>\n';
    table += '        <tr>\n';
    table += '            <td>td</td>\n';
    table += '            <td>td</td>\n';
    table += '            <td>td</td>\n';
    table += '        </tr>\n';
    table += '        <tr>\n';
    table += '            <td>td</td>\n';
    table += '            <td>td</td>\n';
    table += '            <td>td</td>\n';
    table += '        </tr>\n';
    table += '        <tr>\n';
    table += '            <td>td</td>\n';
    table += '            <td>td</td>\n';
    table += '            <td>td</td>\n';
    table += '        </tr>\n';
    table += '    </tbody>\n';
    table += '</table>';
    $scope.table = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: table
            }
        ],
        result: "HTML"
    };

    //HEADER BAR SECTION

    $scope.headings = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<h1>h1</h1>\n<h2>h2</h2>\n<h3>h3</h3>\n<h4>h4</h4>\n<h5>h5</h5>\n<h6>h6</h6>'
            }
        ],
        result: "HTML"
    };

    var headerBar = '<div class="header-bar" style="background-color: lightgray;">\n';
    headerBar += '    <button class="btn">button</button>\n';
    headerBar += '    <a href="#">link</a>\n';
    headerBar += '    <span>span</span>\n';
    headerBar += '</div>';
    $scope.headerBar = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: headerBar
            }
        ],
        result: "HTML"
    };

    $scope.code = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<code>code</code> <span class="code">span</span>'
            }
        ],
        result: "HTML"
    };

    //TEXT STYLE SECTION

    var paragraph = '<div style="border: 1px solid black;">\n';
    paragraph += '    <div class="paragraph" style="background-color: lightgray;">\n        ' + loremFistrum + '\n    </div>\n';
    paragraph += '</div>\n';
    paragraph += '<div style="border: 1px solid black;">\n';
    paragraph += '    <div style="background-color: lightgray;">\n        ' + loremFistrum + '\n    </div>\n';
    paragraph += '</div>';
    $scope.paragraph = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: paragraph
            }
        ],
        result: "HTML"
    };

    var indent = '<div class="indent" style="border: 1px solid black;">\n    ' + loremFistrum + '\n</div>\n';
    indent += '<div style="border: 1px solid black;">\n    ' + loremFistrum + '\n</div>';
    $scope.indent = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: indent
            }
        ],
        result: "HTML"
    };

    //RADIO BUTTON SECTION

    $scope.leftRadioButton = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<input type="radio" name="rad1" class="radio-left" id="rad1"/>\n<label for="rad1">radio</label>'
            }
        ],
        result: "HTML"
    };

    $scope.rightRadioButton = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<input type="radio" name="rad2" class="radio-right" id="rad2"/>\n<label for="rad2">radio</label>'
            }
        ],
        result: "HTML"
    };

    $scope.btnRadioButton = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<input type="radio" name="rad3" class="radio-btn" id="rad3"/>\n<label for="rad3">radio</label>'
            }
        ],
        result: "HTML"
    };

    var groupedRadioButtons = '<div class="grouped">\n';
    groupedRadioButtons += '    <input type="radio" name="rad4" class="radio-btn" id="rad4"/>\n    <label for="rad4">radio</label>\n';
    groupedRadioButtons += '    <input type="radio" name="rad4" class="radio-btn" id="rad5"/>\n    <label for="rad5">radio</label>\n';
    groupedRadioButtons += '    <input type="radio" name="rad4" class="radio-btn" id="rad6"/>\n    <label for="rad6">radio</label>\n';
    groupedRadioButtons += '</div>';

    $scope.groupedRadioButtons = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: groupedRadioButtons
            }
        ],
        result: "HTML"
    };

    var disabledRadioButtons = '<input type="radio" name="rad5" class="radio-btn" id="rad7" disabled/>\n<label for="rad7">radio</label>\n';
    disabledRadioButtons += '<input type="radio" name="rad5" class="radio-left" id="rad8" disabled/>\n<label for="rad8">radio</label>\n';
    $scope.disabledRadioButtons = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: disabledRadioButtons
            }
        ],
        result: "HTML"
    };

    //GRID SECTION

    var defaultGrid = '<div class="f-row" style="background-color: lightgray;">\n';
    defaultGrid += '    <div style="background-color: cyan;">div</div>\n';
    defaultGrid += '    <div style="background-color: yellow;">div</div>\n';
    defaultGrid += '    <div style="background-color: magenta;">div</div>\n';
    defaultGrid += '</div>';
    $scope.defaultGrid  = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: defaultGrid
            }
        ],
        result: "HTML"
    };

    var hEndGrid = '<div class="f-row h-end" style="background-color: lightgray;">\n';
    hEndGrid += '    <div class="f-1-8" style="background-color: cyan; height: 20px;">.f-1-8</div>\n';
    hEndGrid += '    <div class="f-1-8" style="background-color: yellow; height: 40px;">.f-1-8</div>\n';
    hEndGrid += '    <div class="f-1-8" style="background-color: magenta; height: 80px;">.f-1-8</div>\n';
    hEndGrid += '</div>';
    $scope.hEndGrid  = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: hEndGrid
            }
        ],
        result: "HTML"
    };

    var hCenterGrid = '<div class="f-row h-center" style="background-color: lightgray;">\n';
    hCenterGrid += '    <div class="f-1-8" style="background-color: cyan; height: 20px;">.f-1-8</div>\n';
    hCenterGrid += '    <div class="f-1-8" style="background-color: yellow; height: 40px;">.f-1-8</div>\n';
    hCenterGrid += '    <div class="f-1-8" style="background-color: magenta; height: 80px;">.f-1-8</div>\n';
    hCenterGrid += '</div>';
    $scope.hCenterGrid  = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: hCenterGrid
            }
        ],
        result: "HTML"
    };

    var hAroundGrid = '<div class="f-row h-around" style="background-color: lightgray;">\n';
    hAroundGrid += '    <div class="f-1-8" style="background-color: cyan; height: 20px;">.f-1-8</div>\n';
    hAroundGrid += '    <div class="f-1-8" style="background-color: yellow; height: 40px;">.f-1-8</div>\n';
    hAroundGrid += '    <div class="f-1-8" style="background-color: magenta; height: 80px;">.f-1-8</div>\n';
    hAroundGrid += '</div>';
    $scope.hAroundGrid  = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: hAroundGrid
            }
        ],
        result: "HTML"
    };

    var vEndGrid = '<div class="f-row v-end" style="background-color: lightgray;">\n';
    vEndGrid += '    <div class="f-1-8" style="background-color: cyan; height: 20px;">.f-1-8</div>\n';
    vEndGrid += '    <div class="f-1-8" style="background-color: yellow; height: 40px;">.f-1-8</div>\n';
    vEndGrid += '    <div class="f-1-8" style="background-color: magenta; height: 80px;">.f-1-8</div>\n';
    vEndGrid += '</div>';
    $scope.vEndGrid  = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: vEndGrid
            }
        ],
        result: "HTML"
    };

    var vCenterGrid = '<div class="f-row v-center" style="background-color: lightgray;">\n';
    vCenterGrid += '    <div class="f-1-8" style="background-color: cyan; height: 20px;">.f-1-8</div>\n';
    vCenterGrid += '    <div class="f-1-8" style="background-color: yellow; height: 40px;">.f-1-8</div>\n';
    vCenterGrid += '    <div class="f-1-8" style="background-color: magenta; height: 80px;">.f-1-8</div>\n';
    vCenterGrid += '</div>';
    $scope.vCenterGrid  = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: vCenterGrid
            }
        ],
        result: "HTML"
    };

    var fullGrid = '<div class="f-row">\n';
    fullGrid += '    <div class="f-1-1" style="background-color: cyan;">.f-1-1</div>\n';
    fullGrid += '    <div class="f-1-2" style="background-color: yellow;">.f-1-2</div>\n';
    fullGrid += '    <div class="f-1-2" style="background-color: magenta;">.f-1-2</div>\n';
    fullGrid += '    <div class="f-1-4" style="background-color: magenta;">.f-1-4</div>\n';
    fullGrid += '    <div class="f-3-4" style="background-color: cyan;">.f-3-4</div>\n';
    fullGrid += '    <div class="f-1-8" style="background-color: cyan;">.f-1-8</div>\n';
    fullGrid += '    <div class="f-7-8" style="background-color: yellow;">.f-7-8</div>\n';
    fullGrid += '    <div class="f-3-8" style="background-color: magenta;">.f-3-8</div>\n';
    fullGrid += '    <div class="f-5-8" style="background-color: cyan;">.f-5-8</div>\n';
    fullGrid += '</div>';
    $scope.fullGrid  = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: fullGrid
            }
        ],
        result: "HTML"
    };

    //RANGE SECTION

    var range = '<input type="range" class="range" min="0" max="100" data-lrv-model="range1"/>';
    var rangeJs = '$scope.range1 = {\n';
    rangeJs += '    "value": 50\n';
    rangeJs += '};';
    $scope.range = {
        code: [
            {
                name: "JavaScript",
                language: "javascript",
                content: rangeJs
            },
            {
                name: "HTML",
                language: "html",
                content: range
            }
        ],
        result: "HTML"
    };
    $scope.range1 = {
        value: 50
    };

    $scope.range2 = {
        value: 0,
    };

    var disabledRange = '<input type="range" class="range" min="0" max="100" data-lrv-model="range3"/>';
    var disabledRangeJs = '$scope.range3 = {\n';
    disabledRangeJs += '    "value": 50\n';
    disabledRangeJs += '    "disabled": true\n';
    disabledRangeJs += '};';
    $scope.disabledRange = {
        code: [
            {
                name: "JavaScript",
                language: "javascript",
                content: disabledRangeJs
            },
            {
                name: "HTML",
                language: "html",
                content: disabledRange
            }
        ],
        result: "HTML"
    }
    $scope.range3 = {
        value: 0,
        disabled: true
    };
    //HELPER SECTION

    $scope.icon = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<i class="fa fa-question-circle-o icon"></i><i class="fa fa-question-circle-o"></i>'
            }
        ],
        result: "HTML"
    };

    $scope.hidden = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<span>1,</span> <span class="hidden">2,</span> <span>3</span>'
            }
        ],
        result: "HTML"
    };

    //COLOR SECTION

    var defaultColors = 'lrvColor.setDefaultColors({\n';
    defaultColors += '    "btn": ["#4444FF", "#44FFFF", "#44FFFF", "transparent"],\n';
    defaultColors += '    "checkbox-radio-btn": ["#775500", "#FF7755", "#FF7755", "#FFFFFF"],\n';
    defaultColors += '    "checkbox-radio": ["#AA33FF", "#FF88FF", "#FF88FF", "#FFFFFF"],\n';
    defaultColors += '    "modal": ["#855555", "#FFFF77", "#FFFF77", "#855555"],\n';
    defaultColors += '    "select": ["#0000FF", "#AAAAFF", "#CCCCFF", "#CCFFFF"],\n';
    defaultColors += '    "range": ["#003300", "#00AA00", "#AAFFAA", "#77AA77", "#FFFFFF"],\n';
    defaultColors += '    "table": ["#5500AA", "#FAF0FA", "#FAD0FA"],\n';
    defaultColors += '    "tabs": ["#FF4444", "#FFAAAA"]\n';
    defaultColors += '});';
    $scope.defaultColors = {
        code: [
            {
                name: "JavaScript",
                language: "javascript",
                content: defaultColors
            }
        ]
    };

    var coloredButtons = '<button class="btn blue">button</button>\n';
    coloredButtons += '<button class="btn blue" disabled>button</button>\n';
    coloredButtons += '<button class="btn icon round red"><i class="fa fa-question-circle-o"></i></button>';
    coloredButtons += '<button class="btn icon round red" disabled><i class="fa fa-question-circle-o"></i></button>';
    lrvColor.addColor("btn", "blue", ["#4444FF", "#44FFFF", "#44FFFF", "transparent"]);
    var coloredButtonsJs = 'lrvColor.addColor("btn", "blue", ["#4444FF", "#44FFFF", "#44FFFF", "transparent"]);\n';
    lrvColor.addColor("btn", "red", ["#FF4444", "transparent", "#FF9999", "transparent"]);
    coloredButtonsJs += 'lrvColor.addColor("btn", "red", ["#FF4444", "transparent", "#FF9999", "transparent"]);';
    $scope.coloredButtons = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: coloredButtons
            },
            {
                name: "JavaScript",
                language: "javascript",
                content: coloredButtonsJs
            }
        ],
        result: "HTML"
    };

    var coloredCheckboxRadioButtons = '<input type="radio" name="color-radio1" class="radio-btn orange" id="color-radio1"/>\n<label for="color-radio1">radio</label>\n';
    coloredCheckboxRadioButtons += '<input type="radio" name="color-radio1" class="radio-btn orange" id="color-radio2" disabled/>\n<label for="color-radio2">radio</label>\n';
    coloredCheckboxRadioButtons += '<input type="checkbox" class="checkbox-btn purple" id="color-checkbox1"/>\n<label for="color-checkbox1">checkbox</label>\n';
    coloredCheckboxRadioButtons += '<input type="checkbox" class="checkbox-btn purple" id="color-checkbox2" disabled/>\n<label for="color-checkbox2">checkbox</label>';
    lrvColor.addColor("checkbox-btn", "orange", ["#775500", "#FF7755", "#FF7755", "#FFFFFF"]);
    var coloredCheckboxRadioButtonsJs = 'lrvColor.addColor("checkbox-btn", "orange", ["#775500", "#FF7755", "#FF7755", "#FFFFFF"]);\n';
    lrvColor.addColor("radio-btn", "purple", ["#AA33FF", "#FF88FF", "#FF88FF", "#FFFFFF"]);
    coloredCheckboxRadioButtonsJs += 'lrvColor.addColor("radio-btn", "purple",  ["#AA33FF", "#FF88FF", "#FF88FF", "#FFFFFF"]);';
    $scope.coloredCheckboxRadioButtons = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: coloredCheckboxRadioButtons
            },
            {
                name: "JavaScript",
                language: "javascript",
                content: coloredCheckboxRadioButtonsJs
            }
        ],
        result: "HTML"
    };

    var coloredCheckboxRadioLeftRight = '<input type="checkbox" class="checkbox-left gray" id="color-checkbox3">\n<label for="color-checkbox3">checkbox</label>\n';
    coloredCheckboxRadioLeftRight += '<input type="checkbox" class="checkbox-right gray" id="color-checkbox4" disabled>\n<label for="color-checkbox4">checkbox</label>\n';
    coloredCheckboxRadioLeftRight += '<input type="radio" name="color-radio3" class="radio-right magenta" id="color-radio3"/>\n<label for="color-radio3">radio</label>\n';
    coloredCheckboxRadioLeftRight += '<input type="radio" name="color-radio3" class="radio-left magenta" id="color-radio4" disabled/>\n<label for="color-radio4">radio</label>';
    lrvColor.addColor("checkbox-left", "gray", ["#555555", "#AAAAAA", "#AAAAAA", "#FFFFFF"]);
    var coloredCheckboxRadioLeftRightJs = 'lrvColor.addColor("checkbox-left", "gray", ["#555555", "#AAAAAA", "#AAAAAA", "#FFFFFF"]);\n';
    lrvColor.addColor("radio-right", "magenta", ["#FF00FF", "#FFFFFF", "#FF77FF", "#FFFFFF"]);
    coloredCheckboxRadioLeftRightJs += 'lrvColor.addColor("radio-right", "magenta", ["#FF00FF", "#FFFFFF", "#FF77FF", "#FFFFFF"]);';
    $scope.coloredCheckboxRadioLeftRight = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: coloredCheckboxRadioLeftRight
            },
            {
                name: "JavaScript",
                language: "javascript",
                content: coloredCheckboxRadioLeftRightJs
            }
        ],
        result: "HTML"
    };

    var coloredTabs = '<div class="tabs red">\n';
    coloredTabs += '    <div class="selected" data-lrv-tab="null">tab</div>\n    <div data-lrv-tab="null">tab</div>\n    <div data-lrv-tab="null">tab</div>\n'
    coloredTabs += '</div>';
    lrvColor.addColor("tabs", "red", ["#FF4444", "#FFAAAA"]);
    $scope.coloredTabs = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: coloredTabs
            },
            {
                name: "JavaScript",
                language: "javascript",
                content: 'lrvColor.addColor("tabs", "red", ["#FF4444", "#FFAAAA"]);'
            }
        ],
        result: "HTML"
    };

    var coloredModal = '<div class="modal brown" id="color-modal">\n';
    coloredModal += '    <div class="modal-container">\n';
    coloredModal += '        <div class="modal-header"></div>\n';
    coloredModal += '        <div class="modal-body">' + loremFistrum + '</div>\n';
    coloredModal += '        <div class="modal-footer"></div>\n';
    coloredModal += '    </div>\n';
    coloredModal += '</div>';
    lrvColor.addColor("modal", "brown", ["#855555", "#FFFF77", "#FFFF77", "#855555"]);
    $scope.coloredModal = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: coloredModal
            },
            {
                name: "JavaScript",
                language: "javascript",
                content: 'lrvColor.addColor("modal", "brown", ["#855555", "#FFFF77", "#FFFF77", "#855555"]);'
            }
        ],
        result: "HTML",
        resultNoPadding: true
    };

    $scope.copts = {options:['opt1', 'opt2', 'opt3']};
    lrvColor.addColor("select", "blue", ["#0000FF", "#AAAAFF", "#CCCCFF", "#CCFFFF"]);
    $scope.coloredSelect = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: '<select class="select blue" data-lrv-model="copts"></select>'
            },
            {
                name: "JavaScript",
                language: "javascript",
                content: 'lrvColor.addColor("select", "blue", ["#0000FF", "#AAAAFF", "#CCCCFF", "#CCFFFF"]);'
            }
        ],
        result: "HTML"
    };

    var colorRange = '<input type="range" class="range green" min="0" max="100" data-lrv-model="colorRange1"/>\n';
    colorRange += '<input type="range" class="range green" min="0" max="100" data-lrv-model="colorRange2"/>\n';
    lrvColor.addColor("range", "green", ["#003300", "#00AA00", "#AAFFAA", "#77AA77", "#FFFFFF"]);
    $scope.colorRange1 = {value: 0};
    $scope.colorRange2 = {value: 0, disabled: true};
    $scope.coloredRange = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: colorRange
            },
            {
                name: "JavaScript",
                language: "javascript",
                content: 'lrvColor.addColor("range", "green", ["#003300", "#00AA00", "#AAFFAA", "#77AA77", "#FFFFFF"]);'
            }
        ],
        result: "HTML"
    };

    var coloredTable = '<table class="pink">\n';
    coloredTable += '    <thead>\n';
    coloredTable += '        <tr>\n';
    coloredTable += '            <th>th</th>\n';
    coloredTable += '            <th>th</th>\n';
    coloredTable += '            <th>th</th>\n';
    coloredTable += '        </tr>\n';
    coloredTable += '    </thead>\n';
    coloredTable += '    <tbody>\n';
    coloredTable += '        <tr>\n';
    coloredTable += '            <td>td</td>\n';
    coloredTable += '            <td>td</td>\n';
    coloredTable += '            <td>td</td>\n';
    coloredTable += '        </tr>\n';
    coloredTable += '        <tr>\n';
    coloredTable += '            <td>td</td>\n';
    coloredTable += '            <td>td</td>\n';
    coloredTable += '            <td>td</td>\n';
    coloredTable += '        </tr>\n';
    coloredTable += '        <tr>\n';
    coloredTable += '            <td>td</td>\n';
    coloredTable += '            <td>td</td>\n';
    coloredTable += '            <td>td</td>\n';
    coloredTable += '        </tr>\n';
    coloredTable += '        <tr>\n';
    coloredTable += '            <td>td</td>\n';
    coloredTable += '            <td>td</td>\n';
    coloredTable += '            <td>td</td>\n';
    coloredTable += '        </tr>\n';
    coloredTable += '    </tbody>\n';
    coloredTable += '</table>';
    lrvColor.addColor("table", "pink", ["#5500AA", "#FAF0FA", "#FAD0FA"]);
    $scope.coloredTable = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: coloredTable
            },
            {
                name: "JavaScript",
                language: "javascript",
                content: 'lrvColor.addColor("table", "pink", ["#5500AA", "#FAF0FA", "#FAD0FA"]);'
            }
        ],
        result: "HTML"
    };



    var coloredMessageJs = 'angular.module("app")\n.controller("controller",["$scope", "lrvElement", function($scope, lrvElement){\n';
    coloredMessageJs += '    $scope.addWarning = function(){\n';
    coloredMessageJs += '        var message = {\n';
    coloredMessageJs += '            text: "warning",\n';
    coloredMessageJs += '            time: 5000,\n';
    coloredMessageJs += '            classes: "warning"\n';
    coloredMessageJs += '        };\n';
    coloredMessageJs += '        lrvElement.message("coloredMessage").add(message);\n';
    coloredMessageJs += '    }\n';
    coloredMessageJs += '    $scope.addError = function(){\n';
    coloredMessageJs += '        var message = {\n';
    coloredMessageJs += '            text: "error",\n';
    coloredMessageJs += '            time: 5000,\n';
    coloredMessageJs += '            classes: "error"\n';
    coloredMessageJs += '        };\n';
    coloredMessageJs += '        lrvElement.message("coloredMessage").add(message);\n';
    coloredMessageJs += '    }\n';
    coloredMessageJs += '    $scope.addSuccess = function(){\n';
    coloredMessageJs += '        var message = {\n';
    coloredMessageJs += '            text: "success",\n';
    coloredMessageJs += '            time: 5000,\n';
    coloredMessageJs += '            classes: "success"\n';
    coloredMessageJs += '        };\n';
    coloredMessageJs += '        lrvElement.message("coloredMessage").add(message);\n';
    coloredMessageJs += '    }\n';
    coloredMessageJs += '    lrvColor.addColor("message", "error", ["#FF3333", "#FFFFFF"]);\n';
    coloredMessageJs += '    lrvColor.addColor("message", "warning", ["#FFAA33", "#FFFFFF"]);\n';
    coloredMessageJs += '    lrvColor.addColor("message", "success", ["#44FF77", "#FFFFFF"]);\n';
    coloredMessageJs += '}]);';
    var coloredMessage = '<button class="btn" data-ng-click="addWarning()">warning</button>\n';
    coloredMessage += '<button class="btn" data-ng-click="addError()">error</button>\n';
    coloredMessage += '<button class="btn" data-ng-click="addSuccess()">success</button>\n';
    coloredMessage += '<div class="message" id="coloredMessage"></div>';
    $scope.coloredMessage2 = {
        code: [
            {
                name: "JavaScript",
                language: "javascript",
                content: coloredMessageJs
            },
            {
                name: "HTML",
                language: "html",
                content: coloredMessage
            }
        ],
        result: "HTML"
    };
    $scope.addError = function(){
        var message = {
            text: "error",
            classes: "error",
            time: 5000
        };
        lrvElement.message("coloredMessage").add(message);
    }
    $scope.addWarning = function(){
        var message = {
            text: "warning",
            classes: "warning",
            time: 5000
        };
        lrvElement.message("coloredMessage").add(message);
    }
    $scope.addSuccess = function(){
        var message = {
            text: "success",
            classes: "success",
            time: 5000
        };
        lrvElement.message("coloredMessage").add(message);
    }
    lrvColor.addColor("message", "error", ["#FF3333", "#FFFFFF"]);
    lrvColor.addColor("message", "warning", ["#FFAA33", "#FFFFFF"]);
    lrvColor.addColor("message", "success", ["#44FF77", "#FFFFFF"]);

    //MESSAGE SECTION

    $scope.basicMessage = {
        code: [
            {
                name: "JSON",
                language: "json",
                content: '{"text": "message"}'
            }
        ]
    };

    var addMessageJs = 'angular.module("app")\n.controller("controller",["$scope", "lrvElement", function($scope, lrvElement){\n';
    addMessageJs += '    $scope.addMessage = function(){\n';
    addMessageJs += '        var message = {\n';
    addMessageJs += '            text: "message"\n';
    addMessageJs += '        };\n';
    addMessageJs += '        lrvElement.message("message1").add(message);\n';
    addMessageJs += '    }\n';
    addMessageJs += '}]);';
    var addMessage = '<button class="btn" data-ng-click="addMessage()">button</button>\n';
    addMessage += '<div class="message" id="message1"></div>';
    $scope.addMessage2 = {
        code: [
            {
                name: "HTML",
                language: "html",
                content: addMessage
            },
            {
                name: "JavaScript",
                language: "javascript",
                content: addMessageJs
            }
        ],
        result: "HTML"
    };
    $scope.addMessage = function(){
        var message = {
            text: "message"
        };
        lrvElement.message("message1").add(message);
    }

    $scope.translatedMessage = {
        code: [
            {
                name: "JSON",
                language: "json",
                content: '{"translation": "hello-world"}'
            }
        ]
    };
    $scope.addTranslatedMessage = function(){
        var message = {
            translation: "hello-world"
        };
        lrvElement.message("message2").add(message);
    }

    $scope.closeMessage = {
        code: [
            {
                name: "JSON",
                language: "json",
                content: '{"text": "message", "close": true}'
            }
        ]
    };
    $scope.addCloseMessage = function(){
        var message = {
            text: "message",
            close: true
        };
        lrvElement.message("message3").add(message);
    }

    $scope.fadeMessage = {
        code: [
            {
                name: "JSON",
                language: "json",
                content: '{"text": "message", "time": 5000}'
            }
        ]
    };
    $scope.addFadeMessage = function(){
        var message = {
            text: "message",
            time: 5000
        };
        lrvElement.message("message4").add(message);
    }

    $scope.messageAddFn = {
        name: "add",
        description: {translation: "messages-add"},
        parameters: [
            {
                name: "message",
                description:{translation: "message-parameter"}
            }
        ],
        example: 'lrvElement.message("id").add(message);'
    }

    $scope.messageClearFn = {
        name: "clear",
        description: {translation: "messages-clear"},
        example: 'lrvElement.message("id").clear();'
    }
}]);

app.directive("customCode", ["$compile", function($compile){
    return {
        restrict: "C",
        scope: {
            model: "=customModel"
        },
        compile: function(tElement, tAttributes){
            return {
                pre: function(scope, element, attributes){
                    var id = element.attr("id");
                    var tabContainer = angular.element("<span class='tabs'></span>");
                    var container = angular.element("<div class='custom-code-element'></div>");
                    element.replaceWith(container);
                    container.append(tabContainer);
                    for(var i = 0; i < scope.model.code.length; i++){
                        var code = scope.model.code[i];
                        var selected = "";
                        if(i == 0)
                            selected = " class='selected'";
                        tabContainer.append(angular.element("<span data-lrv-tab='" + id + "-" + code.name + "'" + selected + ">" + code.name + "</span>"));
                        var hl = angular.element("<div class='custom-entry-code' id='" + id + "-" + code.name + "' hljs></div>");
                        if(code.language != undefined)
                            hl.attr("hljs-language", code.language);
                        var content = element.attr("data-custom-model") + ".code[" + i + "].content";
                        hl.attr("hljs-source", content);
                        container.append(hl);
                        $compile(hl)(scope.$parent);
                    }
                    if(scope.model.code.length == 1 && (scope.model.showTabs == undefined || !scope.model.showTabs))
                        tabContainer.remove();
                    else
                        $compile(tabContainer)(scope);
                    if(scope.model.result != undefined){
                        var resultContainer = angular.element("<div></div>");
                        for(var i = 0; i < scope.model.code.length; i++){
                            var code = scope.model.code[i];
                            if(scope.model.result == code.name){
                                resultContainer.append(code.content);
                                break;
                            }
                        }
                        container.prepend(resultContainer);
                        $compile(resultContainer)(scope.$parent);
                        if(scope.model.resultNoPadding != undefined && scope.model.resultNoPadding )
                            resultContainer.addClass("custom-no-padding");
                    }
                }
            }
        }
    }
}]);

app.directive("customFunction", ["$compile", function($compile){
    return {
        restrict: "C",
        scope: {
            model: "=customModel"
        },
        compile: function(tElement, tAttributes){
            return {
                pre: function(scope, element, attributes){
                    var headDiv = angular.element("<h5></h5>");
                    element.append(headDiv);
                    var descriptionDiv = null;
                    if(scope.model.description.translation != undefined)
                        descriptionDiv = angular.element("<div class='text' data-lrv-text='" + scope.model.description.translation + "'></div>");
                    else
                        descriptionDiv = angular.element("<div>" + scope.model.description.text + "</div>");
                    element.append(descriptionDiv);
                    $compile(descriptionDiv)(scope.$parent);
                    var fnName = scope.model.name + "(";
                    var parameters = scope.model.parameters;
                    if(parameters != undefined && parameters.length > 0){
                        var parametersContainerDiv = angular.element("<div class='f-row'></div>");
                        element.append(parametersContainerDiv);
                        var parametersText = angular.element("<div class='text custom-title' data-lrv-text='parameters'></div>");
                        parametersContainerDiv.append(parametersText);
                        $compile(parametersText)(scope.$parent);
                        parametersDiv = angular.element("<div></div>");
                        parametersContainerDiv.append(parametersDiv);
                        for(var i = 0; i < parameters.length; i++){
                            var parameter = parameters[i];
                            fnName += parameter.name;
                            if(i < parameters.length - 1)
                                fnName += ", ";
                            var parameterDiv = angular.element("<div><code>" + parameter.name + "</code> </div>");
                            parametersDiv.append(parameterDiv);
                            var parameterDescription = null;
                            if(parameter.description.translation != undefined)
                                parameterDescription = angular.element("<span class='text' data-lrv-text='" + parameter.description.translation + "'></span>");
                            else
                                parameterDescription = angular.element("<span>" + parameter.description.text + "</span>");
                            parameterDiv.append(parameterDescription);
                            $compile(parameterDescription)(scope.$parent);
                        }
                    }
                    fnName += ")";
                    headDiv.append("<code>" + fnName + "</code>");
                    if(scope.model.example != undefined){
                        var usageExample = angular.element("<div class='text custom-title' data-lrv-text='usage'></div>");
                        element.append(usageExample);
                        $compile(usageExample)(scope.$parent);
                        var hljsElement = angular.element("<div hljs hljs-source='" + element.attr("data-custom-model") + ".example' hljs-language='javascript'></div>");
                        element.append(hljsElement);
                        $compile(hljsElement)(scope.$parent);
                    }
                }
            }
        }
    }
}]);