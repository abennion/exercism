'use strict';
exports.parse = s => s.split(/[ -]|[a-z](?=[A-Z])/).map(c => c[0]).join('').toUpperCase();
