/**
 * @fileoverview dont make useEffect call with too much dependencies and setState call
 * @author willsonwei
 */
"use strict";
const { getCodeLocs, nodeFilter } = require("../../utils");
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: null, // `problem`, `suggestion`, or `layout`
        docs: {
            description:
                "dont make useEffect call with too much dependencies and setState call",
            category: "Fill me in",
            recommended: false,
            url: null, // URL to the documentation page for this rule
        },
        fixable: null, // Or `code` or `whitespace`
        schema: [], // Add a schema if the rule has options
    },

    create(context) {
        try {
            const topLevelFunctions = context
                .getSourceCode()
                .ast.body.filter(nodeFilter);
            topLevelFunctions.forEach((topLevelFunction) => {
                const locs = getCodeLocs(topLevelFunction);
                locs.forEach(({ loc, type }) => {
                    context.report({
                        loc,
                        message: `useEffect call ${type} large than 5`,
                    });
                });
            });
        } catch () {
        }

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            // visitor functions for different types of nodes
        };
    },
};
