// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

import functions from './module.mjs' // only default export, we can call it how we want
import * as allFunctions from './module.mjs' // all exports in one object

import { subtract } from './module.mjs' // only plain exports (excluding default export), with deafult export:
import add, { subtract } from './module.mjs' // or :
import { default as add, subtract } from './module.mjs'

import './module.mjs' // import only module's top level code

import('./module.mjs') // promise form