const connection = require('./lib/ogmneo');
const nodes = require('./lib/ogmneo-node');
const query = require('./lib/ogmneo-query');
const relations = require('./lib/ogmneo-relation');
const cypher = require('./lib/ogmneo-cypher');
const index = require('./lib/ogmneo-index');
const where = require('./lib/ogmneo-where');
const relationQuery = require('./lib/ogmneo-relation-query');
const { OGMNeoOperation, OGMNeoOperationBuilder } = require('./lib/ogmneo-operation');
const OGMNeoOperationExecuter = require('./lib/ogmneo-operation-executer');
module.exports = {
    Connection: connection,
    OGMNeoNode: nodes,
    OGMNeoQuery: query,
    OGMNeoRelation: relations,
    OGMNeoCypher: cypher,
    OGMNeoIndex: index,
    OGMNeoWhere: where,
    OGMNeoRelationQuery: relationQuery,
    OGMNeoOperation: OGMNeoOperation,
    OGMNeoOperationBuilder: OGMNeoOperationBuilder,
    OGMNeoOperationExecuter: OGMNeoOperationExecuter,
    //Simplified names
    Node: nodes,
    Query: query,
    Relation: relations,
    Cypher: cypher,
    Index: index,
    Where: where,
    RelationQuery: relationQuery,
    Operation: OGMNeoOperation,
    OperationBuilder: OGMNeoOperationBuilder,
    OperationExecuter: OGMNeoOperationExecuter
};
