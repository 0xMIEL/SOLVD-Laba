export class JSON_REG_EXP {
    static STRING = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g
    static NUMBER = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][-+]?\d+)?)/g
    static BOOLEAN = /(true|false)/g
    static NULL = /(null)/g
    static TEMPLATE = /\<(\d+)\>/g
    static KEY = `\\"([a-zA-Z_]\\w*|\\d+)\\"\\s*\\:\\s*`
    static ALL_VALUES = `(?:${this.STRING.source}|${this.NUMBER.source}|${this.BOOLEAN.source}|${this.NULL.source}|${this.TEMPLATE.source})`
    static KEY_VALUE = new RegExp(`${this.KEY}${this.ALL_VALUES}\\s*(\\,?)`, 'g')
    static ARRAY_VALUES = new RegExp(`${this.ALL_VALUES}\\s*(\\,?)`)
}
