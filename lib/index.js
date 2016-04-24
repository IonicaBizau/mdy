"use strict";

const marked = require('marked')
    , TerminalRenderer = require('marked-terminal')
    , readUtf8 = require("read-utf8")
    , deasync = require("deasync")
    , imageToAscii = deasync(require("image-to-ascii"))
    , abs = require("abs")
    , path = require("path")
    ;

/**
 * mdy
 * Reads the markdown file and processes the content.
 *
 * @name mdy
 * @function
 * @param {String} input The path to the markdown file.
 * @returns {String} The ANSI-styled output.
 */
module.exports = function mdy (input) {

    let renderer = new TerminalRenderer();

    input = abs(input);
    let dir = path.dirname(input);

    // TODO Async? Is it possible?
    renderer.image = function (href) {
        if (href.charAt(0) === "/" || !/^https?:/.test(href)) {
            href = path.join(dir, href);
        }
        try {
            console.log("Fetching " + href);
            return imageToAscii(href, { size: { width: "50%" } });
        } catch (e) { return "<" + href + ">"; }
    };

    marked.setOptions({
        renderer: renderer
    });

    // Show the parsed data
    return marked(readUtf8(input));
};
