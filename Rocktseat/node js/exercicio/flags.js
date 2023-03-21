function getFlagValue (flag) {
    const index = process.argv.indexOf(flag) + 1
    const name = process.argv[index]
    return name
}


module.exports = getFlagValue;