export const schema = {
  "type": "object",
  "properties": {
    "posts": {
      "type": "array",
      "minItems": 3,
      "maxItems": 10,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "title": {
            "type": "string",
            "faker": "lorem.words"
          },
          "content": {
            "type": "string",
            "faker": "lorem.paragraph",
          },
          "author": {
            "type": "string",
            "faker": "name.findName",
          }
        },
        required: ['id', 'title', 'content', 'author']
      }
    }
  },
  required: ['posts']
};
