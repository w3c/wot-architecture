"use strict";
(function(global) {
    function State(changes) {
        changes = Array.prototype.slice.call(changes, 0);
        var index = -1;
        var length = changes.length;
        
        return {
            index: function() {
                return index + 1;
            },
            size: function() {
                return length;
            },
            current: function() {
                return changes[index];
            },
            previous: function() {
                index--;
                if (index < 0) {
                    index = length-1;
                }
                return changes[index];
            },
            next: function() {
                index++;
                if (index >= length) {
                    index = 0;
                }
                return changes[index];
            },
            none: function() {
                index = -1;
            }
        }
    }
    
    function init() {
        var CSS_TEXT = "float: left; padding: 5px 15px; border-left: 1px solid #999; cursor: pointer;"
        var CSS_BORDER = "outline: 2px dashed #00F";
        var container = document.createElement("div");
        var display = document.createElement("div");
        var previous = document.createElement("div");
        var next = document.createElement("div");
        var position = document.createElement("span");
        var warning = document.querySelector(".annoying-warning");
        display.appendChild(position);
        container.appendChild(display);
        container.appendChild(previous);
        container.appendChild(next);
        document.body.appendChild(container);
        container.className = "w3c-htmldiff-nav";
        container.style.cssText = "background-image: linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1)); font: 12px sans-serif; color: #666; border-top: 1px solid #999; border-right: 1px solid #999; border-left: 1px solid #999; position: fixed; bottom: 0; right: 25px; border-radius: 3px 3px 0 0; background-color: #eee; z-index: 2147483647;"
        next.style.cssText = CSS_TEXT;
        previous.style.cssText = CSS_TEXT;
        display.style.cssText = "float: left; padding: 5px 5px;"
        position.style.cssText = "background-color: #fff; border: 1px solid #999; padding: 1px 5px; box-shadow: inset 0 1px 3px #ddd; border-radius: 2px"
        next.textContent = "next ›";
        next.title = "Keyboard nav: use \"j\" to jump to next change."
        previous.textContent = "‹ previous";
        previous.title = "Keyboard nav: use \"k\" to jump to previous change.";
        
        function update(state) {
            position.textContent = state.index() + " of " + state.size();
        }

        function scrollIntoView(fwd) {
            var bCR = current.getBoundingClientRect();
            var height = window.innerHeight || document. documentElement.clientHeight;
            if (bCR.top < 0 ||       // we've scrolled past element
                bCR.bottom > height) {// element is below the fold
                current.scrollIntoView(fwd);
                window.scrollBy(0, (fwd ? -1 : 1) * 50);
            }
        }

        function onnext(e) {
            if (warning && warning.open) {
                warning.open = false;
            }
            if (current) {
                current.style.cssText = "";
            }
            current = state.next();
            current.style.cssText = CSS_BORDER;
            scrollIntoView(true);
            update(state);
        }
        
        function onprevious(e) {
            if (warning && warning.open) {
                warning.open = false;
            }
            if (current) {
                current.style.cssText = "";
            }
            current = state.previous();
            current.style.cssText = CSS_BORDER;
            scrollIntoView(false);
            update(state);
        }

        function onstop(e) {
            if (current) {
                current.style.cssText = "";
            }
            state.none();
            current = null;
            update(state);
        }
        var selector = document.querySelector("script[data-navigable-selector]")? document.querySelector("script[data-navigable-selector]").dataset["navigableSelector"] : "del.diff-old, ins.diff-chg, ins.diff-new";
        var diffs = document.querySelectorAll(selector);
        diffs = Array.prototype.filter.call(diffs, function(e) {
            return e.offsetWidth || e.offsetHeight || e.getClientRects().length;
        });
        var current = null;
        var state = new State(diffs);
        next.onclick = onnext;
        previous.onclick = onprevious;
        document.addEventListener("keydown", function (e) {
            if (!e.metaKey && e.keyCode == 74) {
                onnext(e)
            } else if (!e.metaKey && e.keyCode == 75) {
                onprevious(e)
            } else if (!e.metaKey && e.keyCode == 27) {
                onstop(e)
            }
        }, false);
        update(state);
    }
    var interval = setInterval(function() {
        if(document.readyState === "complete") {
            clearInterval(interval);
            init();
        }    
    }, 100);
})(window);

