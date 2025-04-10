function addRowLock(id){
    return `SELECT * from Flight where id = ${id} FOR UPDATE`
}

module.exports = {
    addRowLock
}