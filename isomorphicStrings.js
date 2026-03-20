function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    let map = new Map();
    let pam = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) !== t[i]) return false;
        if (pam.has(t[i]) && pam.get(t[i]) !== s[i]) return false;
        
        map.set(s[i], t[i]);
        pam.set(t[i], s[i]);
    }

    return true;
}

console.log(isomorphicStrings('add', 'egg'));
console.log(isomorphicStrings('f11', 'b23'));
console.log(isomorphicStrings('234', '333'));
