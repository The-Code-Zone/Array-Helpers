namespace arrays {

    //% blockId=copy
    //% block="create copy of $array=variables_get(list)"
    //% group="Operations"
    //% weight=0
    export function copy(array: any[]): any[] {
        return array.slice();
    }

}
