# 2. How do the modules work?

**There are two possibilities for importing modules:**

| [**CommonJS**](./CommonJS/app.js) | [**ES modules**](./ES-modules/app.js) |
| ----------- | ----------- |
| require | import |
| module.exports | export | 

When we want use ES module without .mjs extension we can specify in **package.json** ```"type": "module"```,
otherwise we have to use .mjs extension on each file.