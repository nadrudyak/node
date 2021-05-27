    let a = 4
    let b = 2
    let c = 3
    let t = (a < b + c, b < a + c, c < a + b) ? 'треугольник' : 'не треугольник';
    console.log("Получился " + t);