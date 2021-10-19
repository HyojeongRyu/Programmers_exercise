function solution(strings, n) {
    strings.sort()
    return strings.sort((a,b)=>{
        return a[n]<b[n]? -1:1
    })
}
var strings=['abce','abcd','cdx']
var strings2=['car','bus','aaa']
solution(strings,2)