const ato = (arr) => {
    let obj = {};
    arr.forEach(item => {
        obj[item.id] = item.num;
    })
    return obj;
}

const newData = (localMenu, newMenu) => {
    newMenu.data.map(item => {
        item.foods.map(value => {
            // console.log(value);
            Object.keys(localMenu).map(index => {
                if(index * 1 === value.id) {
                    value.num = localMenu[index]
                }
            })
            return value;
        })
    })
}

function is(pre, next) {
    if (Object.keys(pre).length === Object.keys(next).length) {
        //  判断是否相等
        for(let key in next) {
            if(!pre.hasOwnProperty(key) || pre[key] !== next[key]) {
                return true;
            } else {
                return false;
            }
        }
    }
}

export {
    ato,
    newData
}