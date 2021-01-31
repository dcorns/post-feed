/**
 * getApiData
 * Created by dcorns on 1/14/21
 * Copyright © 2021 Dale Corns
 */
import {successResponse, failureResponse} from './apiResponse';
const getApiData = async (url:string): Promise<any> => {
    return fetch(url)
        .then(successResponse)
        .catch(failureResponse);
};

export default getApiData;