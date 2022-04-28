const {
    addFunctionToMap,
    isReactComponent,
    getComponentDeclaration,
    getComponentName,
    getAllFunctionDeclarations,
    useEffectFilter,
    findAllSetStateCall,
    findSetStateCallInRecursion,
    findUseCallBackBlockStatement,
    parseMemberExpression,
} = require("hooks-dep-trace");

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

// module.exports = {};
