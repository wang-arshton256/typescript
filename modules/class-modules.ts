export class Calculator{
    add(x: number, y: number): number{
        return x + y;
    }

    sub(x: number, y: number): number{
        return x - y;
    }
}


// This becomes a default class
export default class Calculator1  {
    add(x: number, y: number):number{
    return x + y;
}

    sub(x: number, y: number):number{
    return x - y;
}
}
