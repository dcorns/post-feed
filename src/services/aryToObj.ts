/**
 * aryToObj
 * Created by dcorns on 1/16/21
 * Copyright © 2021 Dale Corns
 * Convert an array of objects into an object using the key parameter to identify the property name that contains the value to be used as the property name for the array element. If multiple array elements contain the same value under the key, they will be combined into an array of objects under the duplicate key value. Array is expected to contain objects and every object in the array is expected to contain a property matching the key parameter
 */
const aryToObj = (comAry: Array<any>, key: string) => {
    const obj: any = {};
    const postIdList: Array<string> = [];
    comAry.forEach((com:any) => {
        if (postIdList.includes(com[key])){
            obj[com[key]].push(com);
        }
        else{
            postIdList.push(com[key]);
            obj[com[key]] = [com];
        }
    });
    return obj;
}
export default aryToObj;