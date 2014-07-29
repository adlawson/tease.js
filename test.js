var tease = require('./index.js');
var assert = require('chai').assert;

suite('tease:', function () {
    var data = {};

    setup(function () {
        data = require('./data.json');
    });

    test('`tease` is an object', function () {
        assert.isObject(tease);
    });

    suite('all:', function () {
        test('`tease.all` is a function', function () {
            assert.isFunction(tease.all);
        });

        test('`tease.all()` contains `"UTC":{"utc":"+00:00", "dst":"+00:00", "link":null}`', function () {
            assert.isTrue(tease.all().hasOwnProperty("UTC"));
            assert.strictEqual(tease.all()["UTC"], data["UTC"]);
        });

        test('`tease.all()` contains `"Europe/London":{"utc":"+00:00", "dst":"+01:00", "link":null}`', function () {
            assert.isTrue(tease.all().hasOwnProperty("Europe/London"));
            assert.strictEqual(tease.all()["Europe/London"], data["Europe/London"]);
        });

        test('`tease.all()` contains `"US/Eastern":{"utc":"-05:00", "dst":"-04:00", "link":"America/New_York"}`', function () {
            assert.isTrue(tease.all().hasOwnProperty("US/Eastern"));
            assert.strictEqual(tease.all()["US/Eastern"], data["US/Eastern"]);
        });

        test('`tease.all()` doesn\'t contain `"Planet/Mars":{...}`', function () {
            assert.isFalse(tease.all().hasOwnProperty("Planet/Mars"));
            assert.isUndefined(tease.all()["Planet/Mars"]);
        });
    });

    suite('get:', function () {
        test('`tease.get` is a function', function () {
            assert.isFunction(tease.get);
        });

        test('`tease.get("UTC")` is `{"utc":"+00:00", "dst":"+00:00", "link":null}`', function () {
            assert.strictEqual(tease.get("UTC"), data["UTC"]);
        });

        test('`tease.get("UTC", true)` is `{"utc":"+00:00", "dst":"+00:00", "link":null}`', function () {
            assert.strictEqual(tease.get("UTC", true), data["UTC"]);
        });

        test('`tease.get("Europe/London")` is `{"utc":"+00:00", "dst":"+01:00", "link":null}`', function () {
            assert.strictEqual(tease.get("Europe/London"), data["Europe/London"]);
        });

        test('`tease.get("Europe/London", true)` is `{"utc":"+00:00", "dst":"+01:00", "link":null}`', function () {
            assert.strictEqual(tease.get("Europe/London", true), data["Europe/London"]);
        });

        test('`tease.get("US/Eastern")` is `{"utc":"-05:00", "dst":"-04:00", "link":"America/New_York"}`', function () {
            assert.strictEqual(tease.get("US/Eastern"), data["US/Eastern"]);
        });

        test('`tease.get("US/Eastern", true)` is `{"utc":"-05:00", "dst":"-04:00", "link":null}`', function () {
            assert.strictEqual(tease.get("US/Eastern", true), data["America/New_York"]);
        });

        test('`tease.get("Planet/Mars")` is undefined', function () {
            assert.isUndefined(tease.get("Planet/Mars"));
        });

        test('`tease.get("Planet/Mars", true)` is undefined', function () {
            assert.isUndefined(tease.get("Planet/Mars", true));
        });
    });

    suite('has:', function () {
        test('`tease.has` is a function', function () {
            assert.isFunction(tease.has);
        });

        test('`tease.has("UTC")` is `true`', function () {
            assert.isTrue(tease.has("UTC"));
        });

        test('`tease.has("Europe/London")` is `true`', function () {
            assert.isTrue(tease.has("Europe/London"));
        });

        test('`tease.has("US/Eastern")` is `true`', function () {
            assert.isTrue(tease.has("US/Eastern"));
        });

        test('`tease.has("Planet/Mars")` is `false`', function () {
            assert.isFalse(tease.has("Planet/Mars"));
        });
    });

    suite('ids:', function () {
        test('`tease.ids` is a function', function () {
            assert.isFunction(tease.ids);
        });

        test('`tease.ids()` is an array', function () {
            assert.isArray(tease.ids());
        });

        test('`tease.ids()` contains "UTC"', function () {
            assert.notEqual(tease.ids().indexOf("UTC"), -1);
        });

        test('`tease.ids()` contains "Europe/London"', function () {
            assert.notEqual(tease.ids().indexOf("Europe/London"), -1);
        });

        test('`tease.ids()` contains "US/Eastern"', function () {
            assert.notEqual(tease.ids().indexOf("US/Eastern"), -1);
        });

        test('`tease.ids()` doesn\'t contain "Planet/Mars"', function () {
            assert.equal(tease.ids().indexOf("Planet/Mars"), -1);
        });
    });

    suite('dst:', function () {
        test('`tease.dst` is a function', function () {
            assert.isFunction(tease.dst);
        });

        test('`tease.dst("UTC")` is "+00:00"', function () {
            assert.equal(tease.dst('UTC'), '+00:00');
        });

        test('`tease.dst("Europe/London")` is "+01:00"', function () {
            assert.equal(tease.dst('Europe/London'), '+01:00');
        });

        test('`tease.dst("US/Eastern")` is "-04:00"', function () {
            assert.equal(tease.dst('US/Eastern'), '-04:00');
        });

        test('`tease.dst("Planet/Mars")` is undefined', function () {
            assert.isUndefined(tease.dst('Planet/Mars'));
        });
    });

    suite('utc:', function () {
        test('`tease.utc` is a function', function () {
            assert.isFunction(tease.utc);
        });

        test('`tease.utc("UTC")` is "+00:00"', function () {
            assert.equal(tease.utc('UTC'), '+00:00');
        });

        test('`tease.utc("Europe/London")` is "+00:00"', function () {
            assert.equal(tease.utc('Europe/London'), '+00:00');
        });

        test('`tease.utc("US/Eastern")` is "-05:00"', function () {
            assert.equal(tease.utc('US/Eastern'), '-05:00');
        });

        test('`tease.utc("Planet/Mars")` is undefined', function () {
            assert.isUndefined(tease.utc('Planet/Mars'));
        });
    });
});
