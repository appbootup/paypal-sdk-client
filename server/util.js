/* @flow */

import { memoize, values } from 'belter';

export const memoizedValues = memoize(values);

export const constHas = <X : (string | boolean | number), T : {[string] : X }>(constant : T, value : X) : boolean => {
    return memoizedValues(constant).indexOf(value) !== -1;
};