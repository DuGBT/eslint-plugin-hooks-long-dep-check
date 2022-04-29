const {
    getComponentDeclaration,
    getAllFunctionDeclarations,
    useEffectFilter,
    findAllSetStateCall,
} = require("hooks-dep-trace");

function getCodeLocs(Node) {
    const topLevelFunction = getComponentDeclaration(Node);
    if (!topLevelFunction) return [];
    const functionMap = {};
    const effectCallMap = new Map();

    Array.from(topLevelFunction).forEach((Node) => {
        getAllFunctionDeclarations(Node, functionMap);
    });

    const useEffectdeclarations = topLevelFunction.filter(useEffectFilter);
    findAllSetStateCall(functionMap, useEffectdeclarations, effectCallMap);

    const indexs = findLongEffectIndex(effectCallMap, useEffectdeclarations);
    if (!indexs.length) return [];
    const locs = indexs.map((nodeObj) => {
        return {
            loc: nodeObj.node.expression.callee.loc,
            type: nodeObj.type,
        };
    });
    return locs;
}

function nodeFilter(node) {
    return (
        node.type === "VariableDeclaration" ||
        node.type === "FunctionDeclaration" ||
        node.type === "ExportDefaultDeclaration"
    );
}

function findLongEffectIndex(effectCallMap, effects) {
    return Array.from(effectCallMap.entries()).flatMap(
        ([dependencies, setStateCalls], index) => {
            if (dependencies?.length >= 5) {
                return [{ node: effects[index], type: "dependencies" }];
            }
            if (setStateCalls.length >= 5) {
                return [{ node: effects[index], type: "setStateCalls" }];
            }
            return [];
        }
    );
}

module.exports = {
    getCodeLocs,
    nodeFilter,
};
