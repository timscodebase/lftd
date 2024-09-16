/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h31l7gqpct00djo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gjxkhkxy",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 300,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2ogvct5o",
    "name": "is_complete",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3d529wwm",
    "name": "priority",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h31l7gqpct00djo")

  // remove
  collection.schema.removeField("gjxkhkxy")

  // remove
  collection.schema.removeField("2ogvct5o")

  // remove
  collection.schema.removeField("3d529wwm")

  return dao.saveCollection(collection)
})
