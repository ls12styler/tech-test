'use strict';

const CustomerModel = require('../../models/CustomerModel.js');
const assert = require('assert');

describe('CustomerModel', () => {
    describe('constructor', () => {
        it('should populate the model with the passed objects key/values', () => {
            let customer = new CustomerModel({
                "firstName": "Mowgli",
                "age": 10
            });
            assert(customer.getfirstName()).equals("Mowgli");
        });
    });
});
