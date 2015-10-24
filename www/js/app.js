window.Hammer.Tap.prototype.defaults.threshold = 9;

function Layout(layout) {
    var self = this;

    self.name = layout.name;
    self.id = layout.view;
    self.bucketTypes = layout.bucketTypes;
    self.headerText = layout.headerText;
    self.array = layout.array;
    self.counts = layout.counts;
    self.countText = function(character) {
        return ko.pureComputed(function() {
            var text = "";
<<<<<<< HEAD
            if (self.array !== "" && character.id == 'Vault') {
=======
            if (self.array != "") {
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                var currentAmount = character[self.array]().length;
                var totalAmount = character.id == 'Vault' ? self.counts[0] : self.counts[1];
                text = "(" + currentAmount + "/" + totalAmount + ")";
                if (currentAmount == totalAmount) {
                    text = "<label class='label label-danger'>" + text + "</label>";
                }
            }
            return text;
        });
    };
    self.isVisible = function(character) {
<<<<<<< HEAD
        return ko.pureComputed(function() {
            return (character.id == "Vault" && self.name !== "Post Master") || character.id !== "Vault";
=======
        return ko.computed(function() {
            return ((character.id == "Vault" && (self.name !== "Post Master")) || character.id !== "Vault");
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
        });
    };
}

tgd.dialog = (function(options) {
    var self = this;

    this.modal = null;

    this.title = function(title) {
        self.modal = new BootstrapDialog(options);
        self.modal.setTitle(title);
        return self;
    };

    this.content = function(content) {
        self.modal.setMessage(content);
        return self;
    };

    this.buttons = function(buttons) {
        self.modal.setClosable(true).enableButtons(true).setData("buttons", buttons);
        return self;
    };

    this.show = function(excludeClick, onHide, onShown) {
        self.modal.open();
        var mdl = self.modal.getModal();
        if (!excludeClick) {
            mdl.bind("click", function() {
                self.modal.close();
            });
        }
        mdl.on("hide.bs.modal", onHide);
        mdl.on("shown.bs.modal", onShown);
        return self;
    };

    return self.modal;
});

tgd.moveItemPositionHandler = function(element, item) {
    tgd.localLog("moveItemPositionHandler");
<<<<<<< HEAD
    if (app.destinyDbMode() === true) {
        tgd.localLog("destinyDbMode");
        window.open(item.href, "_system");
        return false;
    } else if (app.loadoutMode() === true) {
=======
    if (app.destinyDbMode() == true) {
        tgd.localLog("destinyDbMode");
        window.open(item.href, "_system");
        return false;
    } else if (app.loadoutMode() == true) {
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
        tgd.localLog("loadoutMode");
        var existingItem = _.findWhere(app.activeLoadout().ids(), {
            id: item._id
        });
        if (existingItem)
            app.activeLoadout().ids.remove(existingItem);
        else {
            if (item.transferStatus >= 2) {
                $.toaster({
                    priority: 'danger',
<<<<<<< HEAD
                    title: 'Warning',
                    message: app.activeText().unable_create_loadout_for_type
                });
            } else if (item._id === "0") {
=======
                    title: 'Warning:',
                    message: app.activeText().unable_create_loadout_for_type
                });
            } else if (item._id == 0) {
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                app.activeLoadout().addGenericItem({
                    hash: item.id,
                    bucketType: item.bucketType,
                    primaryStat: item.primaryStat()
                });
            } else if (_.where(app.activeLoadout().items(), {
                    bucketType: item.bucketType
                }).length < 10) {
                app.activeLoadout().addUniqueItem({
                    id: item._id,
                    bucketType: item.bucketType,
                    doEquip: false
                });
            } else {
                $.toaster({
                    priority: 'danger',
<<<<<<< HEAD
                    title: 'Error',
=======
                    title: 'Error:',
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                    message: app.activeText().unable_to_create_loadout_for_bucket + item.bucketType
                });
            }
        }
    } else {
        tgd.localLog("else");
        app.activeItem(item);
        var $movePopup = $("#move-popup");
<<<<<<< HEAD
        if (item.transferStatus == 2 || item.bucketType == "Post Master" || item.bucketType == "Messages" || item.bucketType == "Invisible" || item.bucketType == "Lost Items" || item.bucketType == "Bounties" || item.bucketType == "Mission" || item.typeName == "Armsday Order") {
            $.toaster({
                priority: 'danger',
                title: 'Error',
=======
        if (item.bucketType == "Post Master" || item.bucketType == "Messages" || item.bucketType == "Invisible" || item.bucketType == "Lost Items" || item.bucketType == "Bounties" || item.bucketType == "Mission" || item.typeName == "Armsday Order") {
            $.toaster({
                priority: 'danger',
                title: 'Error:',
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                message: app.activeText().unable_to_move_bucketitems
            });
            return;
        }
        if (element == tgd.activeElement) {
            $movePopup.hide();
            tgd.activeElement = null;
            tgd.localLog("hide");
        } else {
            tgd.localLog("show");
            tgd.activeElement = element;
            $ZamTooltips.hide();
            if (window.isMobile) {
                $("body").css("padding-bottom", $movePopup.height() + "px");
                /* bringing back the delay it's sitll a problem in issue #128 */
                setTimeout(function() {
                    $movePopup.show().addClass("mobile");
                }, 50);
            } else {
                tgd.localLog("display");
                $movePopup.removeClass("navbar navbar-default navbar-fixed-bottom").addClass("desktop").show().position({
                    my: "left bottom",
                    at: "left top",
                    collision: "none",
                    of: element,
                    using: function(pos, ui) {
                        var obj = $(this),
                            box = $(ui.element.element).find(".move-popup").width();
                        obj.removeAttr('style');
                        if (box + pos.left > $(window).width()) {
                            pos.left = pos.left - box;
                        }
                        obj.css(pos).width(box);
                    }
                });
            }
        }
    }
};

window.ko.bindingHandlers.refreshableSection = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        //tgd.localLog(element);
        //event: { mouseenter: $root.toggleSectionRefresh, mouseleave: $root.toggleSectionRefresh }, css: { titleHover: $root.showSectionRefresh }
        if (isMobile) {
            return;
        }
        $(element)
            .bind("mouseenter", function() {
                $(this).addClass("titleHover");
                $(this).find(".titleRefresh").show();
            })
            .bind("mouseleave", function() {
                $(this).removeClass("titleHover");
                $(this).find(".titleRefresh").hide();
            });
    }
};

window.ko.bindingHandlers.refreshableEmblem = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        if (isMobile) {
            return;
        }
        $(element)
            .bind("mouseenter", function() {
                $(this).addClass("emblemHover");
                //$(this).find(".emblemRefresh").show();
            })
            .bind("mouseleave", function() {
                $(this).removeClass("emblemHover");
                //$(this).find(".emblemRefresh").hide();
            });
    }
};

/*
window.ko.bindingHandlers.logger = {
    update: function(element, valueAccessor, allBindings) {
        //store a counter with this element
        var count = ko.utils.domData.get(element, "_ko_logger") || 0,
            data = ko.toJS(valueAccessor() || allBindings());

        ko.utils.domData.set(element, "_ko_logger", ++count);

        if (window.console && tgd.localLog) {
            tgd.localLog(count, element, data);
        }
    }
};
*/

window.ko.bindingHandlers.scrollToView = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        Hammer(element, {
                time: 2000
            })
            .on("tap", function() {
                var index = $(element).index('.mobile-characters-image'),
                    distance = $(".profile:eq(" + index + ")");
                if (distance.length > 0) {
                    distance = distance.position().top - 50;
                    app.scrollTo(distance);
                }
            })
            .on("press", function() {
                $.toaster({
                    priority: 'info',
<<<<<<< HEAD
                    title: 'Info',
                    message: app.activeText().this_icon + viewModel.uniqueName()
=======
                    title: 'Info:',
                    message: app.activeText().this_icon + viewModel.uniqueName
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                });
            });
    }
};

window.ko.bindingHandlers.fastclick = {
    init: function(element, valueAccessor) {
        FastClick.attach(element);
        return ko.bindingHandlers.click.init.apply(this, arguments);
    }
};

ko.bindingHandlers.moveItem = {
    init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        Hammer(element, {
                time: 2000
            })
            .on("tap", function(ev) {
                tgd.localLog("item.tap");
                var target = tgd.getEventDelegate(ev.target, ".itemLink");
                if (target) {
                    var item = ko.contextFor(target).$data;
                    tgd.moveItemPositionHandler(target, item);
<<<<<<< HEAD
                }
            })
            .on("doubletap", function(ev) {
                tgd.localLog("item.doubletap");
                var target = tgd.getEventDelegate(ev.target, ".itemLink");
                if (target) {
                    var context = ko.contextFor(target);
                    if (context && "$data" in context) {
                        var item = context.$data;
                        if (item.transferStatus < 2) {
                            if (app.dynamicMode() === false) {
                                app.dynamicMode(true);
                                app.createLoadout();
                            }
                            tgd.localLog("double tap");
                            if (item._id > 0) {
                                app.activeLoadout().addUniqueItem({
                                    id: item._id,
                                    bucketType: item.bucketType,
                                    doEquip: false
                                });
                            } else {
                                app.activeLoadout().addGenericItem({
                                    hash: item.id,
                                    bucketType: item.bucketType,
                                    primaryStat: item.primaryStat()
                                });
                            }
                        } else {
                            $.toaster({
                                priority: 'danger',
                                title: 'Warning',
                                message: app.activeText().unable_create_loadout_for_type
                            });
                        }
                    }
                }
            })
=======
                }
            })
            .on("doubletap", function(ev) {
                tgd.localLog("item.doubletap");
                var target = tgd.getEventDelegate(ev.target, ".itemLink");
                if (target) {
                    var context = ko.contextFor(target);
                    if (context && "$data" in context) {
                        var item = context.$data;
                        if (item.transferStatus < 2) {
                            if (app.dynamicMode() == false) {
                                app.dynamicMode(true);
                                app.createLoadout();
                            }
                            tgd.localLog("double tap");
                            if (item._id > 0) {
                                app.activeLoadout().addUniqueItem({
                                    id: item._id,
                                    bucketType: item.bucketType,
                                    doEquip: false
                                });
                            } else {
                                app.activeLoadout().addGenericItem({
                                    hash: item.id,
                                    bucketType: item.bucketType,
                                    primaryStat: item.primaryStat()
                                });
                            }
                        } else {
                            $.toaster({
                                priority: 'danger',
                                title: 'Warning:',
                                message: app.activeText().unable_create_loadout_for_type
                            });
                        }
                    }
                }
            })
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
            // press is actually hold 
            .on("press", function(ev) {
                tgd.localLog("item.press");
                var target = tgd.getEventDelegate(ev.target, ".itemLink");
                if (target) {
                    var context = ko.contextFor(target);
                    if (context && "$data" in context) {
                        var item = context.$data;
<<<<<<< HEAD
                        if (item && item.doEquip && app.loadoutMode() === true) {
=======
                        if (item && item.doEquip && app.loadoutMode() == true) {
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                            item.doEquip(!item.doEquip());
                            item.markAsEquip(item, {
                                target: target
                            });
                        } else if (!isMobile) {
                            tgd.moveItemPositionHandler(target, item);
                        } else {
                            $ZamTooltips.lastElement = target;
                            $ZamTooltips.show("destinydb", "items", item.id, target);
                        }
                    }
                }
            });
    }
};

tgd.getEventDelegate = function(target, selector) {
    var delegate;
    while (target && target != this.el) {
        delegate = $(target).filter(selector)[0];
        if (delegate) {
            return delegate;
        }
        target = target.parentNode;
    }
    return undefined;
};

tgd.getStoredValue = function(key) {
    var saved = "";
    if (window.localStorage && window.localStorage.getItem)
        saved = window.localStorage.getItem(key);
    if (_.isEmpty(saved)) {
        return tgd.defaults[key];
    } else {
        return saved;
    }
};

tgd.StoreObj = function(key, compare, writeCallback) {
    var value = ko.observable(compare ? tgd.getStoredValue(key) == compare : tgd.getStoredValue(key));
    this.read = function() {
        return value();
    };
    this.write = function(newValue) {
        window.localStorage.setItem(key, newValue);
        value(newValue);
        if (writeCallback) writeCallback(newValue);
<<<<<<< HEAD
    };
};
=======
    }
}
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2

var app = function() {
    var self = this;

    this.retryCount = ko.observable(0);
    this.loadingUser = ko.observable(false);
    this.hiddenWindowOpen = ko.observable(false);
    this.loadoutMode = ko.observable(false);
    this.destinyDbMode = ko.observable(false);
    this.dynamicMode = ko.observable(false);
    this.activeLoadout = ko.observable(new Loadout());
    this.loadouts = ko.observableArray();
    this.searchKeyword = ko.observable(tgd.defaults.searchKeyword);
<<<<<<< HEAD
    this.preferredSystem = ko.pureComputed(new tgd.StoreObj("preferredSystem"));
    this.itemDefs = ko.pureComputed(new tgd.StoreObj("itemDefs"));
    this.defsLocale = ko.pureComputed(new tgd.StoreObj("defsLocale"));
    this.defLocaleVersion = ko.pureComputed(new tgd.StoreObj("defLocaleVersion"));
    this.appLocale = ko.pureComputed(new tgd.StoreObj("defsLocale"));
    this.locale = ko.pureComputed(new tgd.StoreObj("locale"));
    this.layoutMode = ko.pureComputed(new tgd.StoreObj("layoutMode"));
    this.ccWidth = ko.pureComputed(new tgd.StoreObj("ccWidth"));
    this.vaultColumns = ko.pureComputed(new tgd.StoreObj("vaultColumns"));
    this.vaultWidth = ko.pureComputed(new tgd.StoreObj("vaultWidth"));
    this.vaultPos = ko.pureComputed(new tgd.StoreObj("vaultPos"));
    this.xsColumn = ko.pureComputed(new tgd.StoreObj("xsColumn"));
    this.smColumn = ko.pureComputed(new tgd.StoreObj("smColumn"));
    this.mdColumn = ko.pureComputed(new tgd.StoreObj("mdColumn"));
    this.lgColumn = ko.pureComputed(new tgd.StoreObj("lgColumn"));
    this.activeView = ko.pureComputed(new tgd.StoreObj("activeView"));
    this.activeSort = ko.pureComputed(new tgd.StoreObj("activeSort"));
    this.doRefresh = ko.pureComputed(new tgd.StoreObj("doRefresh", "true"));
    this.autoXferStacks = ko.pureComputed(new tgd.StoreObj("autoXferStacks", "true"));
    this.padBucketHeight = ko.pureComputed(new tgd.StoreObj("padBucketHeight", "true"));
    this.dragAndDrop = ko.pureComputed(new tgd.StoreObj("dragAndDrop", "true"));
    this.tooltipsEnabled = ko.pureComputed(new tgd.StoreObj("tooltipsEnabled", "true", function(newValue) {
=======
    this.preferredSystem = ko.computed(new tgd.StoreObj("preferredSystem"));
    this.itemDefs = ko.computed(new tgd.StoreObj("itemDefs"));
    this.defsLocale = ko.computed(new tgd.StoreObj("defsLocale"));
    this.defLocaleVersion = ko.computed(new tgd.StoreObj("defLocaleVersion"));
    this.appLocale = ko.computed(new tgd.StoreObj("defsLocale"));
    this.locale = ko.computed(new tgd.StoreObj("locale"));
    this.vaultPos = ko.computed(new tgd.StoreObj("vaultPos"));
    this.xsColumn = ko.computed(new tgd.StoreObj("xsColumn"));
    this.smColumn = ko.computed(new tgd.StoreObj("smColumn"));
    this.mdColumn = ko.computed(new tgd.StoreObj("mdColumn"));
    this.lgColumn = ko.computed(new tgd.StoreObj("lgColumn"));
    this.activeView = ko.computed(new tgd.StoreObj("activeView"));
    this.doRefresh = ko.computed(new tgd.StoreObj("doRefresh", "true"));
    this.autoTransferStacks = ko.computed(new tgd.StoreObj("autoTransferStacks", "true"));
    this.padBucketHeight = ko.computed(new tgd.StoreObj("padBucketHeight", "true"));
    this.dragAndDrop = ko.computed(new tgd.StoreObj("dragAndDrop", "true"));
    this.tooltipsEnabled = ko.computed(new tgd.StoreObj("tooltipsEnabled", "true", function(newValue) {
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
        $ZamTooltips.isEnabled = newValue;
    }));
    this.refreshSeconds = ko.pureComputed(new tgd.StoreObj("refreshSeconds"));
    this.tierFilter = ko.pureComputed(new tgd.StoreObj("tierFilter"));
    this.weaponFilter = ko.observable(tgd.defaults.weaponFilter);
    this.armorFilter = ko.observable(tgd.defaults.armorFilter);
    this.generalFilter = ko.observable(tgd.defaults.generalFilter);
    this.dmgFilter = ko.observableArray(tgd.defaults.dmgFilter);
    this.progressFilter = ko.observable(tgd.defaults.progressFilter);
    this.setFilter = ko.observableArray(tgd.defaults.setFilter);
    this.shareView = ko.observable(tgd.defaults.shareView);
    this.shareUrl = ko.observable(tgd.defaults.shareUrl);
    this.showMissing = ko.observable(tgd.defaults.showMissing);
    this.showDuplicate = ko.observable(tgd.defaults.showDuplicate);

    this.sortedLoadouts = ko.pureComputed(function() {
        return self.loadouts().sort(function(left, right) {
            return left.name == right.name ? 0 : (left.name < right.name ? -1 : 1);
        });
    });

    this.activeItem = ko.observable();
    this.activeUser = ko.observable({});
    this.allLayouts = ko.observableArray().extend({
        rateLimit: {
            timeout: 1000,
            method: "notifyWhenChangesStop"
        }
    });
<<<<<<< HEAD
    this.activeLayouts = ko.pureComputed(function() {
        return _.filter(self.allLayouts(), function(layout) {
            return (self.activeView() == layout.id || self.activeView() == "0");
        });
=======
    this.activeLayouts = ko.computed(function() {
        return _.filter(self.allLayouts(), function(layout) {
            return (self.activeView() == layout.id || self.activeView() == 0);
        });;
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
    });
    this.tierTypes = ko.observableArray();
    this.weaponTypes = ko.observableArray();
    this.characters = ko.observableArray().extend({
        rateLimit: {
            timeout: 1000,
            method: "notifyWhenChangesStop"
        }
    });
    this.orderedCharacters = ko.pureComputed(function() {
        return self.characters().sort(function(a, b) {
            return a.order() - b.order();
        });
    });
    this.currentLocale = ko.computed(function() {
        var locale = self.locale();
        if (self.appLocale() !== "") {
            locale = self.appLocale();
        }
        return locale;
    });
    this.activeText = ko.pureComputed(function() {
        return tgd.locale[self.currentLocale()];
    });
    this.createLoadout = function() {
        self.loadoutMode(true);
        self.activeLoadout(new Loadout());
    };
    this.cancelLoadout = function() {
        self.loadoutMode(false);
        self.dynamicMode(false);
        self.activeLoadout(new Loadout());
    };

    this.startMultiSelect = function() {
        self.dynamicMode(true);
        self.createLoadout();
    };

    this.startMultiSelect = function() {
        self.dynamicMode(true);
        self.createLoadout();
    }

    this.showHelp = function() {
        self.toggleBootstrapMenu();
<<<<<<< HEAD
        (new tgd.dialog()).title("Help").content('<div class="help">' + $("#help").html() + '</div>').show();
    };
=======
        (new tgd.dialog).title("Help").content('<div class="help">' + $("#help").html() + '</div>').show();
    }
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2

    this.showLanguageSettings = function() {
        self.toggleBootstrapMenu();
        (new tgd.dialog({
            message: tgd.languagesTemplate({
                locale: self.currentLocale(),
                languages: tgd.languages
            })
        })).title("Set Language").show(true, function() {}, function() {
            tgd.localLog("showed modal");
            $(".btn-setLanguage").on("click", function() {
                self.appLocale(this.value);
                $(".btn-setLanguage").removeClass("btn-primary");
                $(this).addClass("btn-primary");
            });
        });
    };

    this.handleGoogleResponse = function(data) {
        if (data && data.response) {
            if (data.response.errorType) {
                BootstrapDialog.alert("Error: " + data.response.errorType);
            } else if (data.response.orderId) {
                BootstrapDialog.alert("Donation accepted Ref# " + data.response.orderId);
            } else {
                BootstrapDialog.alert("Unknown error has occurred");
            }
        } else {
            BootstrapDialog.alert("No response returned");
        }
    };

    this.showDonate = function() {
        self.toggleBootstrapMenu();
        (new tgd.dialog()).title(self.activeText().donation_title).content($("#donate").html()).show(true, function() {}, function() {
            $("a.donatePaypal").click(function() {
                window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=XGW27FTAXSY62&lc=" + self.activeText().paypal_code + "&no_note=1&no_shipping=1&currency_code=USD", "_system");
                return false;
            });
<<<<<<< HEAD
            $("div.supportsIAB").toggle(isChrome === true || isAndroid === true || isIOS === true);
            $("div.chromeWallet").toggle(isChrome === true);
            $("div.googlePlay").toggle(isAndroid === true);
            $("div.appleIAP").toggle(isIOS === true);
=======
            $("div.supportsIAB").toggle(isChrome == true || isAndroid == true || isIOS == true);
            $("div.chromeWallet").toggle(isChrome == true);
            $("div.googlePlay").toggle(isAndroid == true);
            $("div.appleIAP").toggle(isIOS == true);
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
            $("a.donate").bind("click", function() {
                if (isChrome) {
                    google.payments.inapp.buy({
                        'parameters': {
                            'env': 'prod'
                        },
                        'sku': $(this).attr("sku"),
                        'success': self.handleGoogleResponse,
                        'failure': self.handleGoogleResponse
                    });
                } else if (isAndroid || isIOS) {
                    inappbilling.buy(
                        function() {
                            BootstrapDialog.alert("Donation accepted, thank you for your support");
                        },
                        function() {},
                        $(this).attr("sku")
                    );
                }
            });
        });
    };

    this.showAbout = function() {
        self.toggleBootstrapMenu();
        (new tgd.dialog()).title("About").content($("#about").html()).show();
    };

    this.clearFilters = function(model, element) {
        self.toggleBootstrapMenu();
        self.activeView(tgd.defaults.activeView);
        self.activeSort(tgd.defaults.activeSort);
        self.searchKeyword(tgd.defaults.searchKeyword);
        self.doRefresh(tgd.defaults.doRefresh);
        self.refreshSeconds(tgd.defaults.refreshSeconds);
        self.tierFilter(tgd.defaults.tierFilter);
        self.weaponFilter(tgd.defaults.weaponFilter);
        self.armorFilter(tgd.defaults.armorFilter);
        self.generalFilter(tgd.defaults.generalFilter);
        self.dmgFilter([]);
        self.progressFilter(tgd.defaults.progressFilter);
        self.setFilter([]);
        self.shareView(tgd.defaults.shareView);
        self.shareUrl(tgd.defaults.shareUrl);
        self.showMissing(tgd.defaults.showMissing);
        self.showDuplicate(tgd.defaults.showDuplicate);
        $(element.target).removeClass("active");
        return false;
    };

    this.renderCallback = function(context, content, element, callback) {
<<<<<<< HEAD
        if (element) lastElement = element;
=======
        if (element) lastElement = element
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
        content = content.replace(/(<img\ssrc=")(.*?)("\s?>)/g, '');
        var instanceId = $(lastElement).attr("instanceId"),
            activeItem, query, $content = $("<div>" + content + "</div>");
        if (instanceId > 0) {
            query = {
                '_id': instanceId
            };
        } else {
            var id = $(lastElement).attr("href");
            query = {
                id: parseInt(id.split("/")[id.split("/").length - 1])
            };
        }
        self.characters().forEach(function(character) {
            var item = _.findWhere(character.items(), query);
            if (item) activeItem = item;
        });
        if (activeItem) {
            /* Title using locale */
            $content.find("h2.destt-has-icon").text(activeItem.description);
            /* Sub title for materials and consumables */
            if (tgd.DestinyGlimmerConsumables.indexOf(activeItem.id) > -1) {
                $content.find("div.destt-info span").after(" valued at " + (activeItem.primaryStat() * 200) + "G");
            }
            /* Add Required Level if provided */
            if (activeItem.equipRequiredLevel) {
                var classType = (activeItem.classType == 3) ? '' : (' for  ' + tgd.DestinyClass[activeItem.classType]);
                $content.find(".destt-title").after('<span class="destt-info" style="float:right;">Required Level: <span>' + activeItem.equipRequiredLevel + classType + '</span></span>');
            }
            /* Type using locale */
            $content.find("h3.destt-has-icon").text(activeItem.typeName);
            /* Primary Stat and Stat Type */
            var primaryStatMin = $content.find(".destt-primary-min");
            if (primaryStatMin.length === 0 && (activeItem.armorIndex > -1 || activeItem.weaponIndex > -1)) {
                var statType = (activeItem.armorIndex > -1) ? "DEFENSE" : "ATTACK";
                var statBlock = '<div class="destt-primary"><div class="destt-primary-min">' + activeItem.primaryStat() + '</div><div class="destt-primary-max destt-primary-no-max">' + statType + '</div></div>';
                $content.find(".destt-desc").before(statBlock);
            } else {
                primaryStatMin.html(activeItem.primaryStat());
                /* Description using locale */
            }
            $content.find(".destt-desc").text(activeItem.itemDescription);
            /* Remove Emblem Text */
            if ($content.find(".fhtt-emblem").length > 0) {
                $content.find("span").remove();
            }
            /* Add Emblem Icon */
            if ($content.find(".fhtt-emblem-icon").length > 0) {
                $content.find(".fhtt-emblem-icon").html($("<img>").attr("src", activeItem.icon));
            }
            /* Damage Colors */
            if ($content.find("[class*='destt-damage-color-']").length === 0 && activeItem.damageType > 1) {
                var burnIcon = $("<div></div>").addClass("destt-primary-damage-" + activeItem.damageType);
                $content.find(".destt-primary").addClass("destt-damage-color-" + activeItem.damageType).prepend(burnIcon);
            }
<<<<<<< HEAD
=======
            if (tgd.DestinyWeaponPieces.indexOf(activeItem.bucketType) > -1) {
                /* Weapon Perks (Pre-HoW) */
                if (activeItem.perks.length > 0 && $content.find(".destt-talent").length == 1 && $content.find(".destt-talent-description").text().indexOf("Year 1")) {
                    $content.find(".destt-talent").replaceWith(tgd.perksTemplate({
                        perks: activeItem.perks
                    }));
                }
                /* Weapon Perks (Post-HoW) */
                else if (activeItem.perks.length > 0 && $content.find(".destt-talent").length == 0) {
                    $content.find(".destt-info").before(tgd.perksTemplate({
                        perks: activeItem.perks
                    }));
                }
            } else if (tgd.DestinyArmorPieces.indexOf(activeItem.bucketType) > -1) {
                /* Armor Perks */
                if (activeItem.perks.length > 0 && tgd.DestinyArmorPieces.indexOf(activeItem.bucketType) > -1 && activeItem.tierType !== 6) {
                    /* this only applies to armor with existing perks */
                    if ($content.find(".destt-talent").length > 0) {
                        $content.find(".destt-talent").replaceWith(tgd.perksTemplate({
                            perks: activeItem.perks
                        }));
                    }
                    /* this applies to ghost shells, maybe re rollable armor */
                    else {
                        $content.find(".destt-stat").after(tgd.perksTemplate({
                            perks: activeItem.perks
                        }));
                    }
                }
            }
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
            /* Armor Stats */
            if (!_.isEmpty(activeItem.stats)) {
                var stats = $content.find(".destt-stat");
                if (stats.length === 0) {
                    $content.find(".destt-desc").after(tgd.statsTemplate({
                        stats: activeItem.stats
                    }));
                    stats = $content.find(".destt-stat");
                }
                stats.html(
                    stats.find(".stat-bar").map(function(index, stat) {
                        var $stat = $("<div>" + stat.outerHTML + "</div>"),
                            label = $stat.find(".stat-bar-label"),
                            labelText = $.trim(label.text());
                        if (labelText in activeItem.stats) {
                            label.text(labelText + ": " + activeItem.stats[labelText]);
                            $stat.find(".stat-bar-static-value").text(" Min/Max: " + $stat.find(".stat-bar-static-value").text());
                        }
                        return $stat.html();
                    }).get().join("")
                );
            }
            if (activeItem.perks.length > 0) {
                if (tgd.DestinyWeaponPieces.indexOf(activeItem.bucketType) > -1) {
                    // Weapon Perks (Pre-HoW) 
                    if ($content.find(".destt-talent").length == 1 && $content.find(".destt-talent-description").text().indexOf("Year 1")) {
                        $content.find(".destt-talent").replaceWith(tgd.perksTemplate({
                            perks: activeItem.perks
                        }));
                    }
                    // Weapon Perks (Post-HoW)
                    else if ($content.find(".destt-talent").length === 0) {
                        $content.find(".destt-stat").after(tgd.perksTemplate({
                            perks: activeItem.perks
                        }));
                    }
                } else if (tgd.DestinyArmorPieces.indexOf(activeItem.bucketType) > -1) {
                    // Armor Perks: this only applies to armor with existing perks
                    if ($content.find(".destt-talent").length > 0) {
                        $content.find(".destt-talent").replaceWith(tgd.perksTemplate({
                            perks: activeItem.perks
                        }));
                    }
                    // this applies to ghost shells, maybe re rollable armor
                    else {
                        $content.find(".destt-stat").after(tgd.perksTemplate({
                            perks: activeItem.perks
                        }));
                    }
                }
            }
            if (activeItem.objectives.length > 0) {
                _.each(activeItem.objectives, function(objective) {
                    var info = _objectiveDefs[objective.objectiveHash];
                    var label = "";
                    if (info.displayDescription) {
                        label = "<strong>" + info.displayDescription + "</strong>:";
                    }
                    var value = Math.floor((objective.progress / info.completionValue) * 100) + "% (" + objective.progress + '/' + info.completionValue + ')';
                    $content.find(".destt-desc").after(label + value + "<br>");
                });
            }
        }
        var width = $(window).width();
        //this fixes issue #35 makes destinydb tooltips fit on a mobile screen
        if (width < 340) {
            $content.find(".fhtt.des").css("width", (width - 15) + "px");
            $content.find(".stat-bar-empty").css("width", "125px");
        }
        callback($content.html());
    };

    this.toggleViewOptions = function() {
        self.toggleBootstrapMenu();
        $("#viewOptions").toggle();
        var isVisible = $("#viewOptions").is(":visible");
        if (isVisible) {
            $(".character").css("margin", 'auto');
            $(".character-box").css("position", 'relative');
        } else {
            $(".character").css("margin", '');
            $(".character-box").css("position", 'fixed');
        }
    };
    this.toggleRefresh = function() {
        self.toggleBootstrapMenu();
        self.doRefresh(!self.doRefresh());
    };
    this.togglePadBucketHeight = function() {
        self.toggleBootstrapMenu();
        self.padBucketHeight(!self.padBucketHeight());
<<<<<<< HEAD
        self.redraw();
    };
    this.toggleDragAndDrop = function() {
        self.toggleBootstrapMenu();
        self.dragAndDrop(!self.dragAndDrop());
        if (self.dragAndDrop() === true) {
            self.padBucketHeight(true);
            location.reload();
        }
    };
=======
        self.bucketSizeHandler();
    }
    this.toggleDragAndDrop = function() {
        self.toggleBootstrapMenu();
        self.dragAndDrop(!self.dragAndDrop());
        if (self.dragAndDrop() == true) {
            self.padBucketHeight(true);
            location.reload();
        }
    }
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
    this.toggleTransferStacks = function() {
        self.toggleBootstrapMenu();
        self.autoXferStacks(!self.autoXferStacks());
    };
    this.toggleDestinyDbMode = function() {
        self.toggleBootstrapMenu();
        self.destinyDbMode(!self.destinyDbMode());
    };
    this.toggleDestinyDbTooltips = function() {
        self.toggleBootstrapMenu();
        self.tooltipsEnabled(!self.tooltipsEnabled());
    };
    this.toggleShareView = function() {
        self.toggleBootstrapMenu();
        if (!self.shareView()) {
            var username = self.preferredSystem().toLowerCase() + "/" + self.bungie.gamertag();
            self.shareUrl("https://towerghostfordestiny.com/share/?" + username);
            self.apiRequest({
                action: "save_inventory",
                username: username,
                data: self.generateStatic()
            }, function() {
                self.shareView(!self.shareView());
            });
        }
    };
    this.toggleDuplicates = function(model, event) {
        self.toggleBootstrapMenu();
        self.showDuplicate(!self.showDuplicate());
        if (self.showDuplicate()) {
            var items = _.flatten(_.map(app.characters(), function(avatar) {
                return avatar.items();
            }));
            var ids = _.pluck(items, 'id');
            _.each(items, function(item) {
                var itemCount = _.filter(ids, function(id) {
                    return id == item.id;
                }).length;
                item.isDuplicate(itemCount > 1);
            });
        }
    };
    this.toggleShowMissing = function() {
        self.toggleBootstrapMenu();
<<<<<<< HEAD
        if (self.setFilter().length === 0) {
            $.toaster({
                priority: 'danger',
                title: 'Warning',
=======
        if (self.setFilter().length == 0) {
            $.toaster({
                priority: 'danger',
                title: 'Warning:',
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                message: self.activeText().pick_a_set
            });
        } else {
            self.showMissing(!self.showMissing());
        }
    };
    this.openStatusReport = function() {
        self.toggleBootstrapMenu();
        window.open("http://destinystatus.com/" + self.preferredSystem().toLowerCase() + "/" + self.bungie.gamertag(), "_system");
        return false;
    };
    this.setVaultColumns = function(columns) {
        return function() {
            self.vaultColumns(columns);
            self.redraw();
        };
    };
    this.setVaultWidth = function(width) {
        return function() {
            self.vaultWidth(width);
            self.redraw();
        };
    };
    this.setCCWidth = function(model, evt) {
        var width = $(evt.target).text();
        width = (width == "Default") ? "" : width;
        self.ccWidth(width);
        self.redraw();
    };
    this.setSetFilter = function(collection) {
        return function() {
            self.toggleBootstrapMenu();
            if (collection in _collections || collection == "All") {
                self.setFilter(collection == "All" ? [] : _collections[collection]);
                if (collection == "All") {
                    self.showMissing(false);
                } else if (collection.indexOf("Weapons") > -1) {
                    self.activeView(1);
                    self.armorFilter(0);
                    self.generalFilter(0);
                } else if (collection.indexOf("Armor") > -1) {
                    self.activeView(2);
                    self.weaponFilter(0);
                    self.generalFilter(0);
                }
            } else {
                self.setFilter([]);
                self.showMissing(false);
            }
        };
    };
    this.setSort = function(model, event) {
        self.toggleBootstrapMenu();
        self.activeSort($(event.target).closest('li').attr("value"));
    };
    this.setView = function(model, event) {
        self.toggleBootstrapMenu();
        self.activeView($(event.target).closest('li').attr("value"));
    };
    this.setDmgFilter = function(model, event) {
        self.toggleBootstrapMenu();
        self.activeView(1);
        var dmgType = $(event.target).closest('li').attr("value");
        if (self.dmgFilter.indexOf(dmgType) == -1) {
            self.dmgFilter.push(dmgType);
        } else {
            self.dmgFilter.remove(dmgType);
        }
    };
    this.setTierFilter = function(model, event) {
        self.toggleBootstrapMenu();
        self.tierFilter(model.tier);
    };
    this.setWeaponFilter = function(weaponType) {
        return function() {
            self.toggleBootstrapMenu();
            self.activeView(1);
            var type = weaponType.name;
<<<<<<< HEAD
            tgd.localLog("weapon type: " + type);
            self.weaponFilter(type);
        };
    };
    this.setArmorFilter = function(armorType) {
        return function() {
            self.toggleBootstrapMenu();
            self.activeView(2);
            tgd.localLog("armor type: " + armorType);
            self.armorFilter(armorType);
        };
    };
    this.setGeneralFilter = function(searchType) {
        return function() {
            self.toggleBootstrapMenu();
            self.activeView(3);
            self.generalFilter(searchType);
        };
    };
=======
            tgd.localLog("type: " + type);
            self.typeFilter(type);
        }
    }
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
    this.setProgressFilter = function(model, event) {
        self.toggleBootstrapMenu();
        self.progressFilter($(event.target).closest('li').attr("value"));
    };
    this.missingSets = ko.pureComputed(function() {
        var allItemNames = _.pluck(_.flatten(_.map(self.characters(), function(character) {
            return character.items();
        })), 'description');
        var armorFilter = ko.unwrap(self.armorFilter);
        var weaponFilter = ko.unwrap(self.weaponFilter);
        var missingIds = _.filter(self.setFilter(), function(id) {
            var isMissing = true;
            var isVisible = false;
            if (id in _itemDefs) {
                var info = _itemDefs[id];
                var description = decodeURIComponent(info.itemName);
                isMissing = allItemNames.indexOf(description) == -1;
                if (info.bucketTypeHash in tgd.DestinyBucketTypes) {
                    var bucketType = tgd.DestinyBucketTypes[info.bucketTypeHash];
                    var typeName = decodeURIComponent(info.itemTypeName);
                    isVisible = (self.armorFilter() === 0 || armorFilter == bucketType) && (self.weaponFilter() === 0 || weaponFilter == typeName);
                }
            }
            return isMissing && isVisible;
        });
        return missingIds;
    });

    this.addWeaponTypes = function(weapons) {
        weapons.forEach(function(item) {
            if (item.isEquipment === true && item.type > 1 && _.where(self.weaponTypes(), {
                    name: item.typeName
                }).length === 0) {
                self.weaponTypes.push({
                    name: item.typeName,
                    type: item.type
                });
            }
        });
    };


    this.addTierTypes = function(items) {
        items.forEach(function(item) {
            if (item.tierTypeName && item.tierType > 0 && _.where(self.tierTypes(), {
                    name: item.tierTypeName
                }).length === 0) {
                self.tierTypes.push({
                    name: item.tierTypeName,
                    tier: item.tierType
                });
            }
        });
    };

    this.makeBackgroundUrl = function(path, excludeDomain) {
        return 'url("' + (excludeDomain ? "" : self.bungie.getUrl()) + path + '")';
    };

    this.hasBothAccounts = function() {
        return !_.isEmpty(self.activeUser().psnId) && !_.isEmpty(self.activeUser().gamerTag);
    };

    this.useXboxAccount = function() {
        self.toggleBootstrapMenu();
        self.preferredSystem("XBL");
        self.characters.removeAll();
        self.loadingUser(true);
        self.search();
    };

    this.usePlaystationAccount = function() {
        self.toggleBootstrapMenu();
        self.preferredSystem("PSN");
        self.characters.removeAll();
        self.loadingUser(true);
        self.search();
    };

    this.redraw = function() {
        setTimeout(self.bucketSizeHandler, 1000);
        setTimeout(self.quickIconHighlighter, 1000);
    };

    var loadingData = false;
    this.search = function() {
        if (!("user" in self.activeUser())) {
            return;
        }
        if (loadingData === true) {
            return;
        }
        loadingData = true;
        tgd.duplicates.removeAll();
        var total = 0,
            count = 0,
            profiles = [];

        function done(profile) {
            profiles.push(profile);
            count++;
            if (count == total) {
                self.characters(profiles);
                self.loadLoadouts();
                self.tierTypes.sort(function(a, b) {
                    return a.tier - b.tier;
                });
                self.weaponTypes.sort(function(a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                });
                loadingData = false;
                self.loadingUser(false);
                //console.timeEnd("avatars.forEach");
            }
        }
        self.bungie.search(self.preferredSystem(), function(e) {
            if (e && e.error || !e) {
                loadingData = false;
                self.loadingUser(false);
                /* if the first account fails retry the next one*/
                self.preferredSystem(self.preferredSystem() == "PSN" ? "XBL" : "PSN");
                self.search();
                return;
            } else if (typeof e.data == "undefined") {
                if (e && typeof e.Message != "undefined") {
                    return BootstrapDialog.alert(e.Message);
                } else {
                    return BootstrapDialog.alert("Code 10: " + self.activeText().error_loading_inventory + JSON.stringify(e));
                }
            }
            var avatars = e.data.characters;
            var characterIds = _.sortBy(_.map(avatars, function(character) {
                return character.characterBase.characterId;
            }));
            var items = self.bungie.flattenItemArray(e.data.inventory.buckets);
            var vaultItems = _.where(items, function(item) {
                    return item.bucketName != "Invisible";
                }),
                globalItems = _.where(items, {
                    bucketName: "Invisible"
                });
<<<<<<< HEAD
            _.each(avatars, function(avatar) {
                avatar.index = characterIds.indexOf(avatar.characterBase.characterId) + 1;
                avatar.items = globalItems;
            });
            avatars.push({
                characterBase: {
                    characterId: "Vault"
                },
                items: vaultItems,
                index: parseInt(self.vaultPos())
            });
            total = avatars.length;
            _.map(avatars, function(avatar) {
                var profile = new Profile(avatar);
                self.addTierTypes(profile.items());
                self.addWeaponTypes(profile.weapons());
                done(profile);
=======
            var profile = new Profile("Vault", vaultItems);
            self.addTierTypes(profile.items());
            self.addWeaponTypes(profile.weapons());
            done(profile);
            var characterIds = _.sortBy(_.map(avatars, function(character) {
                return character.characterBase.characterId;
            }));
            //console.time("avatars.forEach");
            avatars.forEach(function(character) {
                self.bungie.inventory(character.characterBase.characterId, function(response) {
                    if (response && response.data && response.data.buckets) {
                        var items = self.bungie.flattenItemArray(response.data.buckets).concat(globalItems);
                        var index = characterIds.indexOf(character.characterBase.characterId);
                        var profile = new Profile(character, items, index + 1);
                        self.addTierTypes(profile.items());
                        self.addWeaponTypes(profile.items());
                        done(profile);
                    } else {
                        loadingData = false;
                        self.refresh();
                        if (e && typeof e.Message != "undefined") {
                            return BootstrapDialog.alert(e.Message);
                        } else {
                            return BootstrapDialog.alert("Code 30: " + self.activeText().error_loading_inventory + JSON.stringify(e));
                        }
                    }
                });
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
            });
        });
    };

    this.loadData = function(ref) {
        if (self.loadingUser() === false || self.hiddenWindowOpen() === true) {
            //window.t = (new Date());
            self.loadingUser(true);
            self.bungie = new bungie(self.bungie_cookies, function() {
                self.characters.removeAll();
                //console.time("self.bungie.user");
                self.bungie.user(function(user) {
                    //console.timeEnd("self.bungie.user");
                    if (user.error) {
                        if (user.error == 'network error:502') {
                            return self.logout();
                        }
                        if (isMobile) {
<<<<<<< HEAD
                            if (self.hiddenWindowOpen() === false) {
=======
                            if (self.hiddenWindowOpen() == false) {
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                                self.hiddenWindowOpen(true);
                                self.openHiddenBungieWindow();
                            } else {
                                setTimeout(function() {
                                    self.loadData(ref);
                                }, 1000);
                            }
                        } else {
                            self.activeUser(user);
                            self.loadingUser(false);
                        }
<<<<<<< HEAD
                        return;
=======
                        return
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                    }
                    if (ref && ref.close) {
                        ref.close();
                        self.hiddenWindowOpen(false);
                        ref = null;
                    }
                    self.activeUser(user);
                    if (user.psnId && user.gamerTag) {
                        $.toaster({
                            settings: {
                                timeout: 10 * 1000
                            }
                        });
                        $.toaster({
                            priority: 'info',
<<<<<<< HEAD
                            title: 'Info',
=======
                            title: 'Info:',
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                            message: "Currently using " + self.preferredSystem() + ", <br><a href='' id='useOtherAccount'>click here to use " + (self.preferredSystem() == "XBL" ? "PSN" : "XBL") + "</a>"
                        });
                        $("#useOtherAccount").click(function() {
                            if (self.preferredSystem() == "XBL") {
                                self.usePlaystationAccount();
                            } else {
                                self.useXboxAccount();
                            }
                        });
                        $.toaster.reset();
                    }
                    self.locale(self.activeUser().user.locale);
                    self.loadingUser(false);
                    _.defer(function() {
                        self.search();
                    });
                });
            });
        }
    };

    this.toggleBootstrapMenu = function() {
        if ($(".navbar-toggle").is(":visible"))
            $(".navbar-toggle").click();
    };

    this.refreshButton = function() {
        self.toggleBootstrapMenu();
        self.refresh();
    };

    this.logout = function() {
        self.clearCookies();
        self.bungie.logout(function() {
            window.location.reload();
        });
    };

    this.refresh = function() {
        self.bungie.account(function(result) {
            if (result && result.data && result.data.characters) {
                var characters = result.data.characters;
                _.each(self.characters(), function(character) {
                    if (character.id != "Vault") {
                        var result = _.filter(characters, function(avatar) {
                            return avatar.characterBase.characterId == character.id;
                        })[0];
                        character.updateCharacter(result);
                    }
                    character._reloadBucket(character);
                });
            } else {
                tgd.localLog(result);
            }
        });
    };

    this.refreshHandler = function() {
        clearInterval(self.refreshInterval);
<<<<<<< HEAD
        if (self.loadoutMode() === true) {
            if (self.dynamicMode() === false) {
=======
        if (self.loadoutMode() == true) {
            if (self.dynamicMode() == false) {
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                self.toggleBootstrapMenu();
            }
            $("body").css("padding-bottom", "260px");
        } else {
            $("body").css("padding-bottom", "80px");
        }
<<<<<<< HEAD
        if (self.doRefresh() == 1 && self.loadoutMode() === false) {
            tgd.localLog("refresh handler enabled");
            self.refreshInterval = setInterval(function() {
                tgd.localLog("refreshing");
                self.refresh();
=======
        if (self.doRefresh() == 1 && self.loadoutMode() == false) {
            tgd.localLog("refresh handler enabled");
            self.refreshInterval = setInterval(function() {
                tgd.localLog("refreshing");
                self.search()
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
            }, self.refreshSeconds() * 1000);
        }
    };

    this.bucketSizeHandler = function() {
        var buckets = $("div.profile .itemBucket:visible").css("height", "auto");
<<<<<<< HEAD
        if (self.padBucketHeight() === true) {
=======
        if (self.padBucketHeight() == true) {
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
            var bucketSizes = {};
            var itemHeight = 0;
            var vaultPos = parseInt(self.vaultPos()) - 1;
            vaultPos = (vaultPos < 0) ? 0 : vaultPos;
<<<<<<< HEAD
            var vaultColumns = tgd.bootstrapGridColumns / self.vaultColumns();
            buckets.each(function() {
                var bucketType = this.className.split(" ")[2];
                var isVault = this.className.indexOf("Vault") > -1;
                var columnsPerBucket = isVault ? vaultColumns : tgd.DestinyBucketColumns[bucketType];
=======
            buckets.each(function() {
                var bucketType = this.className.split(" ")[2];
                var isVault = this.className.indexOf("12") > -1;
                var columnsPerBucket = isVault ? 4 : tgd.DestinyBucketColumns[bucketType];
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                var $visibleBucketItems = $(this).find(".bucket-item:visible");
                var visibleBucketHeight = $visibleBucketItems.eq(0).height();
                var bucketHeight = Math.ceil($visibleBucketItems.length / columnsPerBucket) * (visibleBucketHeight + 2);
                if ((visibleBucketHeight) && (visibleBucketHeight > itemHeight)) {
                    itemHeight = visibleBucketHeight;
                }
                if (!(bucketType in bucketSizes)) {
                    bucketSizes[bucketType] = [bucketHeight];
                } else {
                    bucketSizes[bucketType].push(bucketHeight);
                }
            });
            //console.log(bucketSizes);
            _.each(bucketSizes, function(sizes, type) {
                //this is the max height all buckets will use
<<<<<<< HEAD
                var maxHeight = _.max(sizes);
                //this is the max height the non-vault characters will use
                var profileSizes = sizes.slice(0);
                profileSizes.splice(vaultPos, 1);
                /*var maxProfilesHeight = _.max(profileSizes);
=======
                var maxHeight = Math.max.apply(null, sizes);
                //this is the max height the non-vault characters will use
                var profileSizes = sizes.slice(0);
                profileSizes.splice(vaultPos, 1);
                var maxProfilesHeight = Math.max.apply(null, profileSizes);
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                var minNumRows = 1;
                if (tgd.DestinyArmorPieces.indexOf(type) > -1 || tgd.DestinyWeaponPieces.indexOf(type) > -1) {
                    minNumRows = 3;
                } else if (type == "Materials") {
                    minNumRows = 4;
<<<<<<< HEAD
                }*/
                //maxProfilesHeight = Math.max(itemHeight * minNumRows, maxProfilesHeight);
                var itemBuckets = buckets.filter("." + type);
                /*if ( type == "Heavy") {
                	console.log(type + " " + maxHeight);
                	console.log(type + " " + maxProfilesHeight);
                }*/
                itemBuckets.css("min-height", maxHeight);
                itemBuckets.find(".itemBucketBG").css("height", maxHeight);
                itemBuckets.find(".itemBucketBG").parent().parent().css("height", maxHeight);
=======
                }
                maxProfilesHeight = Math.max(itemHeight * minNumRows, maxProfilesHeight);
                var itemBuckets = buckets.filter("." + type);
                itemBuckets.css("min-height", maxHeight);
                itemBuckets.find(".itemBucketBG").css("height", maxProfilesHeight);
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
            });
            // gets all the sub class areas and makes them the same heights. I'm terrible at JQuery/CSS/HTML stuff.
            var vaultSubClass = $('div.profile .title2:visible strong:contains("Vault Sub")').parent().parent().css("height", "auto");
            var notVaultSubClass = $('div.profile .title2:visible strong:contains("Sub")').not(':contains("Vault")').first().parent().parent().css("height", "auto");
            vaultSubClass.css("min-height", notVaultSubClass.height());
            vaultSubClass.css("visibility", "hidden");
        }
    };

    this.globalClickHandler = function(e) {
        if ($("#move-popup").is(":visible") && e.target.className !== "itemImage") {
            $("#move-popup").hide();
            tgd.activeElement = null;
        }
    };

    this.quickIconHighlighter = function() {
        var scrollTop = $(window).scrollTop();
        $(".profile").each(function(index, item) {
            var $item = $(item);
            var characterId = $item.attr('id');
            var $quickIcon = $(".quickScrollView ." + characterId);
            var $characterBox = $(".character-box." + characterId);
            var top = $item.position().top - 55;
            var bottom = top + $item.height();
            var isActive = scrollTop >= top && scrollTop <= bottom && scrollTop > 0;
            $quickIcon.toggleClass("activeProfile", isActive);
            $characterBox.toggleClass("active", isActive);
            $characterBox.toggleClass("not-active", !isActive);
            $characterBox.css({
                width: $characterBox.parent().width() + 'px'
            });
        });
    };

    this.readBungieCookie = function(ref, loop) {
        //tgd.localLog( typeof ref.executeScript );
        //tgd.localLog( Object.keys(ref) ); 
        try {
            ref.executeScript({
                code: 'document.cookie'
            }, function(result) {
                tgd.localLog("result " + result);
                if ((result || "").toString().indexOf("bungled") > -1) {
                    self.bungie_cookies = result;
                    window.localStorage.setItem("bungie_cookies", result);
                    self.loadData(ref, loop);
                }
            });
        } catch (e) {
            tgd.localLog(e);
        }
    };

    this.openHiddenBungieWindow = function() {
        window.ref = window.open("https://www.bungie.net/en/User/Profile", '_blank', 'location=no,hidden=yes');
        ref.addEventListener('loadstop', function(event) {
            //BootstrapDialog.alert("loadstop hidden");
            self.readBungieCookie(ref, 1);
        });
    };

    this.findReference = function(item, callback) {
        if (item && item.id > 0) {
            var subscriptions = [];
            var newItemHandler = function(items) {
                var foundItem = _.where(items, {
                    _id: item._id
                });
                if (foundItem.length > 0) {
                    _.each(subscriptions, function(sub) {
                        sub.dispose();
                    });
                    callback(foundItem[0]);
                }
            };
            var allItems = _.flatten(_.map(app.characters(), function(character) {
                subscriptions.push(character.items.subscribe(newItemHandler));
                return character.items();
            }));
            newItemHandler(allItems);
        }
    };

    this.clearCookies = function() {
<<<<<<< HEAD
        window.localStorage.setItem("bungie_cookies", "");
        try {
            window.cookies.clear(function() {
                tgd.localLog("Cookies cleared");
            });
        } catch (e) {}
    };
=======
        window.cookies.clear(function() {
            window.localStorage.setItem("bungie_cookies", "");
            tgd.localLog("Cookies cleared");
        });
    }
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2

    this.openBungieWindow = function(type) {
        return function() {
            var loop;
            if (isNWJS) {
                var gui = require('nw.gui');
                var mainwin = gui.Window.get();
                window.ref = gui.Window.open('https://www.bungie.net/en/User/SignIn/' + type + "?bru=%252Fen%252FUser%252FProfile", 'Test Popup');
            } else if (isChrome || isMobile) {
                window.ref = window.open('https://www.bungie.net/en/User/SignIn/' + type + "?bru=%252Fen%252FUser%252FProfile", '_blank', 'location=yes');
            } else {
                window.ref = window.open('about:blank');
                window.ref.opener = null;
                window.ref.open('https://www.bungie.net/en/User/SignIn/' + type, '_blank', 'toolbar=0,location=0,menubar=0');
            }
            if (isMobile) {
                ref.addEventListener('loadstop', function(event) {
                    self.readBungieCookie(ref, loop);
                });
                ref.addEventListener('exit', function() {
                    if (_.isEmpty(self.bungie_cookies)) {
                        self.readBungieCookie(ref, loop);
                    }
                });
            } else if (isNWJS) {
                window.ref.on('loaded', function() {
                    location.reload();
                });
            } else {
                clearInterval(loop);
                loop = setInterval(function() {
                    if (window.ref.closed) {
                        clearInterval(loop);
                        if (!isMobile && !isChrome) {
                            $.toaster({
                                priority: 'success',
<<<<<<< HEAD
                                title: 'Loading',
=======
                                title: 'Loading:',
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                                message: "Please wait while Firefox acquires your arsenal"
                            });
                            var event = document.createEvent('CustomEvent');
                            event.initCustomEvent("request-cookie", true, true, {});
                            document.documentElement.dispatchEvent(event);
                            setTimeout(function() {
                                tgd.localLog("loadData");
                                self.loadData();
                            }, 5000);
                        } else {
                            self.loadData();
                        }
                    }
                }, 100);
            }
        };
    };

    this.scrollTo = function(distance, callback) {
        if (isWindowsPhone) {
            $('html,body').scrollTop(distance);
            if (callback) callback();
        } else {
            $("body").animate({
                scrollTop: distance
            }, 300, "swing", callback);
        }
    };

    this.scrollToActiveIndex = function(newIndex) {
        var index = $(".quickScrollView img").filter(function() {
            var classAttr = $(this).attr("class"),
                className = _.isUndefined(classAttr) ? "" : classAttr;
            return className.indexOf("activeProfile") > -1;
        }).index(".quickScrollView img");
        self.scrollTo($(".profile:eq(" + index + ")").position().top - 50, function() {
            $.toaster({
                priority: 'info',
                title: 'View',
                message: tgd.DestinyViews[newIndex]
            });
        });
    };

    this.shiftViewLeft = function() {
        var newIndex = parseInt(self.activeView()) - 1;
        if (newIndex < 0) newIndex = 3;
        self.activeView(newIndex);
        self.scrollToActiveIndex(newIndex);
    };

    this.shiftViewRight = function() {
        var newIndex = parseInt(self.activeView()) + 1;
        if (newIndex == 4) newIndex = 0;
        self.activeView(newIndex);
        self.scrollToActiveIndex(newIndex);
    };

    this.requests = {};
    var id = -1;
    this.apiRequest = function(params, callback) {
        var apiURL = "https://www.towerghostfordestiny.com/api3.cfm";
        $.ajax({
            url: apiURL,
            data: params,
            type: "POST",
            success: function(data) {
                var response = (typeof data == "string") ? JSON.parse(data) : data;
                callback(response);
            }
        });
    };

    this.saveLoadouts = function(includeMessage) {
        var _includeMessage = _.isUndefined(includeMessage) ? true : includeMessage;
        if (self.activeUser() && self.activeUser().user && self.activeUser().user.membershipId) {
            var params = {
                action: "save",
                membershipId: parseFloat(self.activeUser().user.membershipId),
                loadouts: ko.toJSON(self.loadouts())
            };
            self.apiRequest(params, function(results) {
                if (_includeMessage === true) {
                    if (results.success) {
                        $.toaster({
                            priority: 'success',
                            title: 'Saved',
                            message: "Loadouts saved to the cloud"
                        });
                    } else BootstrapDialog.alert("Error has occurred saving loadouts");
                }
<<<<<<< HEAD
            });
=======
                self.apiRequest(params, function(results) {
                    if (_includeMessage == true) {
                        if (results.success) {
                            $.toaster({
                                priority: 'success',
                                title: 'Saved:',
                                message: "Loadouts saved to the cloud"
                            });
                        } else BootstrapDialog.alert("Error has occurred saving loadouts");
                    }
                });
            } else {
                BootstrapDialog.alert("Error reading your membershipId, could not save loadouts");
            }
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
        } else {
            BootstrapDialog.alert("Error reading your membershipId, could not save loadouts");
        }
    };

    this.loadLoadouts = function() {
<<<<<<< HEAD
        if (self.loadouts().length === 0) {
=======
        if (self.loadouts().length == 0) {
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
            var _loadouts = window.localStorage.getItem("loadouts");
            if (!_.isEmpty(_loadouts)) {
                _loadouts = _.map(JSON.parse(_loadouts), function(loadout) {
                    return new Loadout(loadout);
<<<<<<< HEAD
                });
            } else {
                _loadouts = [];
            }
            self.apiRequest({
                action: "load",
                //this ID is shared between PSN/XBL so a better ID is one that applies only to one profile
                membershipId: parseFloat(self.activeUser().user.membershipId),
                locale: self.currentLocale(),
                version: self.defLocaleVersion(),
                /*this one applies only to your current profile
				accountId: self.bungie.getMemberId()*/
            }, function(results) {
                var _results = [];
                if (results && results.loadouts) {
                    _results = _.isArray(results.loadouts) ? results.loadouts : [results.loadouts];
                    _results = _.map(_results, function(loadout) {
                        loadout.ids = _.isArray(loadout.ids) ? loadout.ids : [loadout.ids];
                        loadout.equipIds = _.isEmpty(loadout.equipIds) ? [] : loadout.equipIds;
                        loadout.equipIds = _.isArray(loadout.equipIds) ? loadout.equipIds : [loadout.equipIds];
                        return new Loadout(loadout);
                    });
                }
                /* one time migrate joins the two arrays and clears the local one */
                if (_loadouts.length > 0) {
                    _results = _loadouts.concat(_results);
                    window.localStorage.setItem("loadouts", "");
                }
                self.loadouts(_results);
                /* one time migrate saves the new joined array to the cloud */
                if (_loadouts.length > 0) {
                    self.saveLoadouts(false);
                }
                /*if (results && results.itemDefs) {
					tgd.localLog("downloading locale update");
					self.downloadLocale(self.currentLocale(), results.itemDefs.version);
				}*/
            });
=======
                })
            } else {
                _loadouts = [];
            }
            if (supportsCloudSaves == true) {
                self.apiRequest({
                    action: "load",
                    //this ID is shared between PSN/XBL so a better ID is one that applies only to one profile
                    membershipId: parseFloat(self.activeUser().user.membershipId),
                    locale: self.currentLocale(),
                    version: self.defLocaleVersion(),
                    /*this one applies only to your current profile
	   				accountId: self.bungie.getMemberId()*/
                }, function(results) {
                    var _results = [];
                    if (results && results.loadouts) {
                        _results = _.isArray(results.loadouts) ? results.loadouts : [results.loadouts];
                        _results = _.map(_results, function(loadout) {
                            loadout.ids = _.isArray(loadout.ids) ? loadout.ids : [loadout.ids];
                            loadout.equipIds = _.isEmpty(loadout.equipIds) ? [] : loadout.equipIds;
                            loadout.equipIds = _.isArray(loadout.equipIds) ? loadout.equipIds : [loadout.equipIds];
                            return new Loadout(loadout);
                        });
                    }
                    /* one time migrate joins the two arrays and clears the local one */
                    if (_loadouts.length > 0) {
                        _results = _loadouts.concat(_results);
                        window.localStorage.setItem("loadouts", "");
                    }
                    self.loadouts(_results);
                    /* one time migrate saves the new joined array to the cloud */
                    if (_loadouts.length > 0) {
                        self.saveLoadouts(false);
                    }
                    /*if (results && results.itemDefs) {
                        tgd.localLog("downloading locale update");
                        self.downloadLocale(self.currentLocale(), results.itemDefs.version);
                    }*/
                });
            } else if (_loadouts.length > 0) {
                self.loadouts(_loadouts);
            }
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
        }
    };

    this.showWhatsNew = function(callback) {
<<<<<<< HEAD
        var container = $("<div></div>");
        container.attr("style", "overflow-y: scroll; height: 480px");
        container.html("Version: " + tgd.version + JSON.parse(unescape($("#whatsnew").html())).content);
        (new tgd.dialog()).title(self.activeText().whats_new_title).content(container).show(false, function() {
=======
        var container = $("<div></div>")
        container.attr("style", "overflow-y: scroll; height: 480px");
        container.html("Version: " + tgd.version + JSON.parse(unescape($("#whatsnew").html())).content);
        (new tgd.dialog).title(self.activeText().whats_new_title).content(container).show(false, function() {
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
            if (_.isFunction(callback)) callback();
        });
    };

    this.whatsNew = function() {
        if ($("#showwhatsnew").text() == "true") {
            var version = parseInt(tgd.version.replace(/\./g, ''));
            var cookie = window.localStorage.getItem("whatsnew");
            if (_.isEmpty(cookie) || parseInt(cookie) < version) {
                self.showWhatsNew(function() {
                    window.localStorage.setItem("whatsnew", version.toString());
                });
            }
        }
    };

    this.normalizeSingle = function(description, characters, usingbatchMode, callback) {
        var itemTotal = 0;

        /* association of character, amounts to increment/decrement */
        var characterStatus = _.map(characters, function(c) {
            var characterTotal = _.reduce(
                _.filter(c.items(), {
                    description: description
                }),
                function(memo, i) {
                    return memo + i.primaryStat();
                },
                0);
            itemTotal = itemTotal + characterTotal;
            return {
                character: c,
                current: characterTotal,
                needed: 0
            };
        });
        //tgd.localLog(characterStatus);

        if (itemTotal < characterStatus.length) {
<<<<<<< HEAD
            if (usingbatchMode === false) {
                $.toaster({
                    priority: 'danger',
                    title: 'Warning',
=======
            if (usingbatchMode == false) {
                $.toaster({
                    priority: 'danger',
                    title: 'Warning:',
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                    message: "Cannot distribute " + itemTotal + " " + description + " between " + characterStatus.length + " characters."
                });
            }
            if (callback !== undefined) {
                callback();
            }
            return;
        }

        var itemSplit = (itemTotal / characterStatus.length) | 0; /* round down */
        //tgd.localLog("Each character needs " + itemSplit + " " + description);

        /* calculate how much to increment/decrement each character */
        _.each(characterStatus, function(c) {
            c.needed = itemSplit - c.current;
        });
        //tgd.localLog(characterStatus);

        var getNextSurplusCharacter = (function() {
            return function() {
                return _.filter(characterStatus, function(c) {
                    return c.needed < 0;
                })[0];
            };
        })();

        var getNextShortageCharacter = (function() {
            return function() {
                return _.filter(characterStatus, function(c) {
                    return c.needed > 0;
                })[0];
            };
        })();

        /* bail early conditions */
<<<<<<< HEAD
        if ((typeof getNextSurplusCharacter() === "undefined") || (typeof getNextShortageCharacter() === "undefined")) {
            //tgd.localLog("all items normalized as best as possible");
            if (usingbatchMode === false) {
                $.toaster({
                    priority: 'success',
                    title: 'Result',
=======
        if ((getNextSurplusCharacter() == undefined) || (getNextShortageCharacter() == undefined)) {
            //tgd.localLog("all items normalized as best as possible");
            if (usingbatchMode == false) {
                $.toaster({
                    priority: 'success',
                    title: 'Result:',
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                    message: description + " already normalized as best as possible."
                });
            }
            if (typeof callback !== "undefined") {
                callback();
            }
            return;
        }

        var adjustStateAfterTransfer = function(surplusCharacter, shortageCharacter, amountTransferred) {
            surplusCharacter.current = surplusCharacter.current - amountTransferred;
            surplusCharacter.needed = surplusCharacter.needed + amountTransferred;
            //tgd.localLog("[Surplus (" + surplusCharacter.character.classType + ")] current: " + surplusCharacter.current + ", needed: " + surplusCharacter.needed);

            shortageCharacter.needed = shortageCharacter.needed - amountTransferred;
            shortageCharacter.current = shortageCharacter.current + amountTransferred;
            //tgd.localLog("[Shortage (" + shortageCharacter.character.classType + ")] current: " + shortageCharacter.current + ", needed: " + shortageCharacter.needed);
        };

        var nextTransfer = function(callback) {
            var surplusCharacter = getNextSurplusCharacter();
            var shortageCharacter = getNextShortageCharacter();

<<<<<<< HEAD
            if ((typeof surplusCharacter === "undefined") || (typeof shortageCharacter === "undefined")) {
                //tgd.localLog("all items normalized as best as possible");
                if (usingbatchMode === false) {
                    //self.refresh();
                    $.toaster({
                        priority: 'success',
                        title: 'Result',
=======
            if ((surplusCharacter == undefined) || (shortageCharacter == undefined)) {
                //tgd.localLog("all items normalized as best as possible");
                if (usingbatchMode == false) {
                    //self.refresh();
                    $.toaster({
                        priority: 'success',
                        title: 'Result:',
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                        message: "All items normalized as best as possible"
                    });
                }
                if (callback !== undefined) {
                    callback();
                }
                return;
            }
            if (surplusCharacter.character.id == shortageCharacter.character.id) {
                //tgd.localLog("surplusCharacter is shortageCharacter!?");
                if (callback !== undefined) {
                    callback();
                }
                return;
            }
            /* all the surplus characters' items that match the description. might be multiple stacks. */
            var surplusItems = _.filter(surplusCharacter.character.items(), {
                description: description
            });
            var surplusItem = surplusItems[0];
            //TODO: TypeError: undefined is not an object (evaluating 'surplusItem.primaryStat')
            var maxWeCanWorkWith = Math.min(surplusItem.primaryStat(), (surplusCharacter.needed * -1));
            var amountToTransfer = Math.min(maxWeCanWorkWith, shortageCharacter.needed);

            //tgd.localLog("Attempting to transfer " + description + " (" + amountToTransfer + ") from " +
            //surplusCharacter.character.id + " (" + surplusCharacter.character.classType + ") to " +
            //shortageCharacter.character.id + " (" + shortageCharacter.character.classType + ")");

            if (surplusCharacter.character.id == "Vault") {
                //tgd.localLog("surplus is vault");
                surplusItem.transfer("Vault", shortageCharacter.character.id, amountToTransfer, function() {
                    adjustStateAfterTransfer(surplusCharacter, shortageCharacter, amountToTransfer);
                    nextTransfer(callback);
                });
            } else if (shortageCharacter.character.id == "Vault") {
                //tgd.localLog("shortage is vault");
                surplusItem.transfer(surplusCharacter.character.id, "Vault", amountToTransfer, function() {
                    adjustStateAfterTransfer(surplusCharacter, shortageCharacter, amountToTransfer);
                    nextTransfer(callback);
                });
            } else {
                surplusItem.transfer(surplusCharacter.character.id, "Vault", amountToTransfer, function() {
                    surplusItem.transfer("Vault", shortageCharacter.character.id, amountToTransfer, function() {
                        adjustStateAfterTransfer(surplusCharacter, shortageCharacter, amountToTransfer);
                        nextTransfer(callback);
                    });
                });
            }
        };

        var messageStr = "<div><div>Normalize " + description + "</div><ul>";
        for (i = 0; i < characterStatus.length; i++) {
            messageStr = messageStr.concat("<li>" + characterStatus[i].character.classType() + ": " +
                (characterStatus[i].needed > 0 ? "+" : "") +
                characterStatus[i].needed + "</li>");
        }
        messageStr = messageStr.concat("</ul></div>");

        if (usingbatchMode === false) {
            var dialogItself = (new tgd.dialog({
                message: messageStr,
                buttons: [{
                    label: 'Normalize',
                    cssClass: 'btn-primary',
                    action: function(dialogItself) {
                        nextTransfer(callback);
                        dialogItself.close();
                    }
                }, {
                    label: 'Close',
                    action: function(dialogItself) {
                        dialogItself.close();
                    }
                }]
            })).title("Normalize Materials/Consumables").show(true);
        } else {
            nextTransfer(callback);
        }
    };

    this.normalizeAll = function(bucketType) {
        //tgd.localLog("normalizeAll(" + bucketType + ")");

        var done = function(onlyCharacters) {

            var descriptions = _.uniq(_.flatten(_.map(onlyCharacters, function(character) {
                return _.pluck(_.filter(character.items(), function(item) {
                    return item.bucketType == bucketType && item.transferStatus < 2;
                }), 'description');
            })));

            var getNextDescription = (function() {
                var i = 0;
                return function() {
                    return i < descriptions.length ? descriptions[i++] : undefined;
                };
            })();

            var nextNormalize = function() {
                var description = getNextDescription();

<<<<<<< HEAD
                if (typeof description === "undefined") {
                    $.toaster({
                        priority: 'success',
                        title: 'Result',
=======
                while (description !== undefined) {
                    if ((description !== "Hadronic Essence") &&
                        (description !== "Sapphire Wire") &&
                        (description !== "Plasteel Plating")) {
                        break;
                    } else {
                        description = getNextDescription();
                    }
                }

                if (description == undefined) {
                    $.toaster({
                        priority: 'success',
                        title: 'Result:',
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
                        message: "All items normalized as best as possible"
                    });
                    return;
                }

                // normalizeSingle = function(description, characters, usingbatchMode, callback)
                self.normalizeSingle(description, onlyCharacters, true, nextNormalize);
            };

            nextNormalize();
        };

        this.selectMultiCharacters("Normalize All " + bucketType, "Normalize: equally distribute all " + bucketType + " across the selected characters", done);
    };

    this.selectMultiCharacters = function(title, description, callback) {
        var selectedStatus = [];
        for (i = 0; i < app.orderedCharacters().length; i++) {
            var id = app.orderedCharacters()[i].id;
            selectedStatus[id] = (id !== "Vault");
        }
        var dialogItself = (new tgd.dialog({
            message: function(dialogItself) {
                var $content = $(tgd.selectMultiCharactersTemplate({
                    description: description,
                    characters: app.orderedCharacters(),
                    selected: selectedStatus
                }));
                var charButtonClicked = function(self, id) {
                    selectedStatus[id] = !selectedStatus[id];
                    self.find('img').css('border', (selectedStatus[id] === true) ? "solid 3px yellow" : "none");
                };
                $.each(app.orderedCharacters(), function(i, val) {
                    var id = val.id;
                    var sel = "#char" + i.toString();
                    $content.find(sel).click(function() {
                        charButtonClicked($(this), id);
                    });
                });
                return $content;
            },
            buttons: [{
                label: 'OK',
                cssClass: 'btn-primary',
                action: function(dialogItself) {
                    var characters = _.filter(app.orderedCharacters(), function(c) {
                        return selectedStatus[c.id] === true;
                    });
                    if (characters.length <= 1) {
                        BootstrapDialog.alert("Need to select two or more characters.");
                    } else {
                        callback(characters);
                    }
                    dialogItself.close();
                }
            }, {
                label: 'Close',
                action: function(dialogItself) {
                    dialogItself.close();
                }
            }]
        })).title(title).show(true);
    };

    this.setVaultTo = function(pos) {
        return function() {
            var vault = _.findWhere(self.characters(), {
                id: "Vault"
            });
            if (vault) {
                self.vaultPos(pos);
                vault.order(pos);
            } else {
                return false;
            }
        };
    };

    this.isVaultAt = function(pos) {
        return ko.pureComputed(function() {
            var vault = _.findWhere(self.characters(), {
                id: "Vault"
            });
            if (vault) {
                result = (vault.order() == pos);
            } else {
                result = false;
            }
            return result;
        }).extend({
            rateLimit: {
                timeout: 1000,
                method: "notifyWhenChangesStop"
            }
        });
    };

    this.columnMode = function(character) {
        return ko.pureComputed(function() {
            var totalCharacters = 3,
                totalColumns = tgd.bootstrapGridColumns,
                vaultColumns,
                characterColumns;
            if (self.layoutMode() == 'uneven') {
                vaultColumns = self.vaultWidth();
                characterColumns = Math.floor((totalColumns - vaultColumns) / totalCharacters);
            } else {
                vaultColumns = self.lgColumn();
                characterColumns = self.lgColumn();
            }
            if (character.id == "Vault") {
                return "col-xs-" + self.xsColumn() + " col-sm-" + self.smColumn() + " col-md-" + self.mdColumn() + " col-lg-" + vaultColumns;
            } else {
                return "col-xs-" + self.xsColumn() + " col-sm-" + self.smColumn() + " col-md-" + self.mdColumn() + " col-lg-" + characterColumns;
            }
        });
    };

    this.setColumns = function(type, input) {
        return function() {
            self[type + "Column"](tgd.bootstrapGridColumns / input.value);
            self.redraw();
        };
    };

    this.btnActive = function(type, input) {
        return ko.pureComputed(function() {
            return ((tgd.bootstrapGridColumns / input.value) == self[type + "Column"]()) ? "btn-primary" : "";
        });
    };

    this.initItemDefs = function() {
        var itemDefs = self.itemDefs();
        if (self.currentLocale() != "en" && !_.isEmpty(itemDefs) && self.currentLocale() == self.defsLocale()) {
            try {
                window._itemDefs = JSON.parse(itemDefs);
            } catch (e) {
                tgd.localLog("invalid itemDefs");
                self.itemDefs("");
            }
        }
    };

    this.generateStatic = function() {
        var profileKeys = ["race", "order", "gender", "classType", "id", "level", "imgIcon", "icon", "background", "stats"];
        var itemKeys = ["id", "_id", "characterId", "damageType", "damageTypeName", "isEquipped", "isGridComplete", "locked",
            "description", "itemDescription", "bucketType", "type", "typeName", "tierType", "tierTypeName", "icon", "primaryStat",
            "progression", "weaponIndex", "armorIndex", "perks", "stats", "isUnique", "href"
        ];
        var profiles = _.map(self.characters(), function(profile) {
            var newProfile = {};
            _.each(profileKeys, function(key) {
                newProfile[key] = ko.unwrap(profile[key]);
            });
            newProfile.items = _.map(profile.items(), function(item) {
                var newItem = {};
                _.each(itemKeys, function(key) {
                    newItem[key] = ko.unwrap(item[key]);
                });
                return ko.toJS(newItem);
            });
            return newProfile;
        });
        return JSON.stringify(profiles);
    };

    this.downloadLocale = function(locale, version) {
        var bungie_code = _.findWhere(tgd.languages, {
            code: locale
        }).bungie_code;
        $.ajax({
            url: "https://www.towerghostfordestiny.com/locale.cfm?locale=" + bungie_code,
            success: function(data) {
                BootstrapDialog.alert(self.activeText().language_pack_downloaded);
                try {
                    self.itemDefs(JSON.stringify(data));
                } catch (e) {
                    localStorage.clear();
                    localStorage.setItem("quota_error", "1");
                    tgd.localLog("quota error");
                }
                self.defsLocale(locale);
                self.defLocaleVersion(version);
                window._itemDefs = data;
            }
        });
    };

    this.onLocaleChange = function() {
        var locale = self.currentLocale();
        tgd.localLog("locale changed to " + locale);
        if (locale == "en") {
            self.defsLocale(locale);
        }
        if (locale != "en" && locale != "tr" && self.defsLocale() != locale && !localStorage.getItem("quota_error")) {
            tgd.localLog("downloading language pack");
            self.downloadLocale(locale, tgd.version);
        }
    };

    this.initLocale = function(callback) {
        self.locale.subscribe(self.onLocaleChange);
        self.appLocale.subscribe(self.onLocaleChange);
        if (navigator && navigator.globalization && navigator.globalization.getPreferredLanguage) {
            tgd.localLog("getting device locale internally");
            navigator.globalization.getPreferredLanguage(function(a) {
                if (a && a.value && a.value.indexOf("-") > -1) {
                    var value = a.value.split("-")[0];
                    if (_.pluck(tgd.languages, 'code').indexOf(value) > -1) {
                        tgd.localLog("internal locale is " + value);
                        if (value == "pt")
                            value = "pt-br";
                        self.locale(value);
                    }
                }
            });
        }
<<<<<<< HEAD
    };
=======
    }
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2

    /* This function can be used in the future to localize header names */
    this.getBucketName = function(bucketType) {
        if (bucketType == "Invisible") {
            return "Special Orders";
        } else {
            return bucketType;
<<<<<<< HEAD
        }
    };

    this.dndBeforeMove = function(arg) {
        if (arg && arg.targetParent && arg.targetParent.length > 0) {
            arg.cancelDrop = (arg.item.bucketType !== arg.targetParent[0].bucketType || arg.item.transferStatus >= 2);
        }
    };

    this.dndAfterMove = function(arg) {
        var destination = _.filter(arg.targetParent, function(item) {
            return item.character.id != arg.item.character.id;
        });
        if (destination.length === 0) {
            destination = _.filter(arg.targetParent, function(item) {
                return item._id != arg.item._id;
            });
        }
        if (destination.length > 0) {
            destination = destination[0];
            if (destination.character.id != arg.item.character.id) {
                var action = destination.isEquipped() ? "equip" : "store";
                $.toaster({
                    priority: 'info',
                    title: 'Transfer',
                    message: arg.item.description + " will be " + action + "d to " + destination.character.uniqueName()
                });
                arg.item[action](destination.character.id);
            }
        }
    };

    this.init = function() {
        tgd.perksTemplate = _.template(tgd.perksTemplate);
        tgd.statsTemplate = _.template(tgd.statsTemplate);
        tgd.normalizeTemplate = _.template(tgd.normalizeTemplate);
        tgd.selectMultiCharactersTemplate = _.template(tgd.selectMultiCharactersTemplate);
        tgd.swapTemplate = _.template(tgd.swapTemplate);
=======
        }
    }

    this.dndBeforeMove = function(arg) {
        if (arg && arg.targetParent && arg.targetParent.length > 0) {
            arg.cancelDrop = (arg.item.bucketType !== arg.targetParent[0].bucketType || arg.item.transferStatus >= 2);
        }
    }

    this.dndAfterMove = function(arg) {
        var destination = _.filter(arg.targetParent, function(item) {
            return item.character.id != arg.item.character.id;
        });
        if (destination.length == 0) {
            destination = _.filter(arg.targetParent, function(item) {
                return item._id != arg.item._id;
            });
        }
        if (destination.length > 0) {
            destination = destination[0];
            if (destination.character.id != arg.item.character.id) {
                var action = destination.isEquipped() ? "equip" : "store";
                $.toaster({
                    priority: 'info',
                    title: 'Transfer:',
                    message: arg.item.description + " will be " + action + "d to " + destination.character.uniqueName
                });
                arg.item[action](destination.character.id);
            }
        }
    }
	
	this.loadStatic = function(username){
		self.apiRequest({ 
				username: username
			},
			function(staticProfiles){
				if (staticProfiles.length == 0){
					return BootstrapDialog.alert("There is no shared data to view for this profile");
				}
				if (staticProfiles && staticProfiles.Response){
					var data = staticProfiles.Response.data;
					//console.log("we got someone who hasnt used the app");
					//window.d = data;
					staticProfiles = _.map(data.characters, function(character, index){
						var items = _.map(
							_.filter( data.items, function(item){
								return item.characterIndex == index;
							}), function(item){
							var info = _itemDefs[item.itemHash];	
							if (info.bucketTypeHash in tgd.DestinyBucketTypes) {
								var description, tierTypeName, itemDescription, itemTypeName;
					            try {
					                description = decodeURIComponent(info.itemName);
					                tierTypeName = decodeURIComponent(info.tierTypeName);
					                itemDescription = decodeURIComponent(info.itemDescription);
					                itemTypeName = decodeURIComponent(info.itemTypeName);
					            } catch (e) {
					                description = info.itemName;
					                tierTypeName = info.tierTypeName;
					                itemDescription = info.itemDescription;
					                itemTypeName = info.itemTypeName;
					            }
								var primaryStat = item.quantity;
								if (item && item.primaryStat && item.primaryStat.value){
									primaryStat = item.primaryStat.value;
								}
								return {
									id: item.itemHash,
									_id: item.itemId,
									characterId: data.characters[item.characterIndex].characterBase.characterId,
									damageType: item.damageType,
	                				damageTypeName: tgd.DestinyDamageTypes[item.damageType],
									isEquipped: item.transferStatus == 1,
									isGridComplete: item.isGridComplete,
									locked: item.locked,
									description: description,
									itemDescription: itemDescription,
									bucketType: getBucketTypeHelper(item, info),
									type: info.itemSubType,
									typeName: itemTypeName,
									tierType: info.tierType,
									tierTypeName: tierTypeName,
									icon: "data" + info.icon,
									primaryStat: primaryStat,
									progression: false,
									weaponIndex: tgd.DestinyWeaponPieces.indexOf(getBucketTypeHelper(item, info)),
									armorIndex: tgd.DestinyArmorPieces.indexOf(getBucketTypeHelper(item, info)),
									perks: [],
									stats: [],
									isUnique: false,
									href: "https://destinydb.com/items/" + item.itemHash
								}
							}
						});
						
						return {
							items: _.filter(items, function(item){ return typeof item !== "undefined" }),
							id: character.characterBase.characterId,
							race: _raceDefs[character.characterBase.raceHash].raceName,
							order: index,
							gender: tgd.DestinyGender[character.characterBase.genderType],
							classType: tgd.DestinyClass[character.characterBase.classType],
							level: character.characterLevel,
							imgIcon: self.bungie.getUrl() + character.emblemPath,
							icon: self.makeBackgroundUrl(character.emblemPath),
							background: self.makeBackgroundUrl(character.backgroundPath)
						}
					});
				} 
				_.each(staticProfiles, function(data, index){
					var profile = new Profile(data.id == "Vault" ? "Vault" : data, data.items, index);
					self.addTierTypes(profile.items());
                    self.addWeaponTypes(profile.weapons());
					self.characters.push(profile);
					setTimeout(self.bucketSizeHandler, 1000);
					setTimeout(self.quickIconHighlighter, 1000);
				});
			}
		)
	}

    this.init = function() {
        _.each(tgd.DestinyLayout, function(object) {
            self.allLayouts.push(new Layout(object));
        });	
        self.initLocale();
		self.bungie = new bungie('', function(){});
        self.initItemDefs();
        tgd.perksTemplate = _.template(tgd.perksTemplate);
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
        tgd.languagesTemplate = _.template(app.activeText().language_text + tgd.languagesTemplate);
        self.activeView.subscribe(self.redraw);
        $(window).resize(_.throttle(self.bucketSizeHandler, 500));
        $(window).resize(_.throttle(self.quickIconHighlighter, 500));
        $(window).scroll(_.throttle(self.quickIconHighlighter, 500));
<<<<<<< HEAD
    };
};

window.app = new app();
=======
        var weaponKeys = _.filter(_.map(tgd.DestinyBucketTypes, function(name, key) {
            if (tgd.DestinyWeaponPieces.indexOf(name) > -1) return parseInt(key);
        }), function(key) {
            return key > 0
        });
        _collections['exoticWeapons'] = _.pluck(_.filter(_itemDefs, function(item) {
            return (weaponKeys.indexOf(item.bucketTypeHash) > -1 && item.tierType == 6 && item.equippable == true)
        }), 'itemHash');
        var armorKeys = _.filter(_.map(tgd.DestinyBucketTypes, function(name, key) {
            if (tgd.DestinyArmorPieces.indexOf(name) > -1) return parseInt(key);
        }), function(key) {
            return key > 0
        });
        _collections['exoticArmor'] = _.pluck(_.filter(_itemDefs, function(item) {
            return (armorKeys.indexOf(item.bucketTypeHash) > -1 && item.tierType == 6 && item.equippable == true)
        }), 'itemHash');
        ko.applyBindings(self);
    }
});
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2

window.zam_tooltips = {
    addIcons: false,
    colorLinks: false,
    renameLinks: false,
    renderCallback: app.renderCallback,
    isEnabled: app.tooltipsEnabled()
};
BootstrapDialog.defaultOptions.nl2br = false;

<<<<<<< HEAD
if (isMobile) {
    window.addEventListener("statusTap", function() {
        var target = $("body");

        //disable touch scroll to kill existing inertial movement
        target.css({
            '-webkit-overflow-scrolling': 'auto',
            'overflow-y': 'hidden'
        });

        //animate
        target.animate({
            scrollTop: 0
        }, 300, "swing", function() {

            //re-enable touch scrolling
            target.css({
                '-webkit-overflow-scrolling': 'touch',
                'overflow-y': 'scroll'
            });
        });
    });
    document.addEventListener('deviceready', app.init, false);
} else {
    $(document).ready(app.init);
}
=======
$(document).ready(app.init);
>>>>>>> 599dd4b203e711dd21139e4084279064c8c4b7d2
