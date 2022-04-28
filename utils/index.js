const fs = require("fs");
const path = require("path");
const {
    addFunctionToMap,
    isReactComponent,
    getComponentDeclaration,
    getComponentName,
    getAllFunctionDeclarations,
    useEffectFilter,
    findAllSetStateCall,
    getCodeAst,
} = require("hooks-dep-trace");
const filePath = "";
const code = fs.readFileSync(path.join(__dirname, filePath)).toString();

const ast = getCodeAst(path.join(__dirname, filePath));

function getEffectMap(Node) {
    const topLevelFunction = getComponentDeclaration(Node);
    const functionMap = {};
    const effectCallMap = new Map();

    Array.from(topLevelFunction).forEach((Node) => {
        getAllFunctionDeclarations(Node, functionMap);
    });

    const useEffectdeclarations = topLevelFunction.filter(useEffectFilter);
    const isComponent = isReactComponent(Node);
    findAllSetStateCall(functionMap, useEffectdeclarations, effectCallMap);

    console.log(effectCallMap, functionMap);
}

module.exports = {
    code,
    ast,
};
