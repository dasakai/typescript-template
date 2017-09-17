'use strict'
import 'mocha';
import * as assert from 'power-assert';

class Sample {
    constructor(public id: number, public name: string){}
}

describe('Sample class test', () => {
    it('constructor test', () => {
        const sample: Sample = new Sample(100, 'john');
        assert.equal(sample.id, 100);
        assert.equal(sample.name, 'john');
    })
})