
const info = {
    name: '张三',
    age: 12
}
setTimeout(() => {
    info.time = 13
}, 2000)
module.exports = info;
console.log(__dirname, __filename, 'filename')
// 导出对象用exports
// exports.name = 1