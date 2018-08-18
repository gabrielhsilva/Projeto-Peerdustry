'use strict';

define('library-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass ESLint\n\n1:25 - Unable to resolve path to module \'@ember/application\'. (import/no-unresolved)\n3:1 - \'ember-load-initializers\' should be listed in the project\'s dependencies, not devDependencies. (import/no-extraneous-dependencies)\n3:1 - `ember-load-initializers` import should occur before import of `./resolver` (import/order)\n4:20 - Unable to resolve path to module \'./config/environment\'. (import/no-unresolved)\n9:11 - Missing trailing comma. (comma-dangle)');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass ESLint\n\n1:1 - \'ember-resolver\' should be listed in the project\'s dependencies, not devDependencies. (import/no-extraneous-dependencies)');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass ESLint\n\n1:25 - Unable to resolve path to module \'@ember/routing/router\'. (import/no-unresolved)\n2:20 - Unable to resolve path to module \'./config/environment\'. (import/no-unresolved)\n6:26 - Missing trailing comma. (comma-dangle)\n9:12 - Expected to return a value in function. (array-callback-return)\n9:12 - Unexpected unnamed function. (func-names)\n9:20 - Missing space before function parentheses. (space-before-function-paren)');
  });

  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/about.js should pass ESLint\n\n1:19 - Unable to resolve path to module \'@ember/routing/route\'. (import/no-unresolved)');
  });

  QUnit.test('routes/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/contact.js should pass ESLint\n\n1:19 - Unable to resolve path to module \'@ember/routing/route\'. (import/no-unresolved)');
  });
});
define('library-app/tests/test-helper', ['library-app/app', 'library-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('library-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'test-helper.js should pass ESLint\n\n1:25 - Unable to resolve path to module \'../app\'. (import/no-unresolved)\n3:1 - \'@ember/test-helpers\' should be listed in the project\'s dependencies. Run \'npm i -S @ember/test-helpers\' to add it (import/no-extraneous-dependencies)\n3:1 - `@ember/test-helpers` import should occur before import of `../app` (import/order)\n4:1 - \'ember-qunit\' should be listed in the project\'s dependencies. Run \'npm i -S ember-qunit\' to add it (import/no-extraneous-dependencies)\n4:1 - `ember-qunit` import should occur before import of `../app` (import/order)');
  });

  QUnit.test('unit/routes/about-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/routes/about-test.js should pass ESLint\n\n1:1 - \'qunit\' should be listed in the project\'s dependencies. Run \'npm i -S qunit\' to add it (import/no-extraneous-dependencies)\n2:1 - \'ember-qunit\' should be listed in the project\'s dependencies. Run \'npm i -S ember-qunit\' to add it (import/no-extraneous-dependencies)\n4:32 - Unexpected unnamed function. (func-names)\n4:32 - Unexpected function expression. (prefer-arrow-callback)\n4:40 - Missing space before function parentheses. (space-before-function-paren)\n7:21 - Unexpected unnamed function. (func-names)\n7:29 - Missing space before function parentheses. (space-before-function-paren)\n8:9 - \'route\' is never reassigned. Use \'const\' instead. (prefer-const)');
  });

  QUnit.test('unit/routes/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'unit/routes/contact-test.js should pass ESLint\n\n1:1 - \'qunit\' should be listed in the project\'s dependencies. Run \'npm i -S qunit\' to add it (import/no-extraneous-dependencies)\n2:1 - \'ember-qunit\' should be listed in the project\'s dependencies. Run \'npm i -S ember-qunit\' to add it (import/no-extraneous-dependencies)\n4:34 - Unexpected unnamed function. (func-names)\n4:34 - Unexpected function expression. (prefer-arrow-callback)\n4:42 - Missing space before function parentheses. (space-before-function-paren)\n7:21 - Unexpected unnamed function. (func-names)\n7:29 - Missing space before function parentheses. (space-before-function-paren)\n8:9 - \'route\' is never reassigned. Use \'const\' instead. (prefer-const)');
  });
});
define('library-app/tests/unit/routes/about-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about');
      assert.ok(route);
    });
  });
});
define('library-app/tests/unit/routes/contact-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contact');
      assert.ok(route);
    });
  });
});
define('library-app/config/environment', [], function() {
  var prefix = 'library-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('library-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
