/**
 * apiResponse
 * Created by dcorns on 1/14/21
 * Copyright © 2021 Dale Corns
 */

export async function successResponse (res: Response) {
    if (res.ok) return res.json();
    if (res.status === 400) {
        const err = await res.text();
        throw new Error(err);
    }
    throw new Error('Unhandled network error occurred');
}

export function failureResponse (err: any) {
    console.error('API failure' + err);
    throw err;
}
