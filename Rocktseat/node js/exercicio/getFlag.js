function getFlag(flag) {
    const index = process.argv.indexOf(flag) + 1 // esta procurando qual e o numero da flag
    return process.argv[index]
}

module.exports = getFlag;