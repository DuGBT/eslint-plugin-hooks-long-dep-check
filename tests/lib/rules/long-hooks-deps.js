/**
 * @fileoverview dont make useEffect call with too much dependencies and setState call
 * @author willsonwei
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
// const { ast, code } = require("../../../utils/index");
const fs = require("fs");
const filePath = "";

const rule = require("../../../lib/rules/long-hooks-deps"),
    RuleTester = require("eslint").RuleTester;
RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
});
//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("long-hooks-deps", rule, {
    valid: [],

    invalid: [
        // {
        //     code: "",
        //     errors: [{ message: "Fill me in.", type: "Me too" }],
        // },
    ],
});
