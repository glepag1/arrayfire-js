/*
 Copyright (c) 2014-2015, ArrayFire
 Copyright (c) 2015 Gábor Mező aka unbornchikken (gabor.mezo@outlook.com)
 All rights reserved.

 Redistribution and use in source and binary forms, with or without modification,
 are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this
 list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above copyright notice, this
 list of conditions and the following disclaimer in the documentation and/or
 other materials provided with the distribution.

 * Neither the name of the ArrayFire nor the names of its
 contributors may be used to endorse or promote products derived from
 this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

"use strict";

var _ = require("lodash");
var assert = require("better-assert");

var testHelpers = {
    testIntfSyncArrDoubleComb: function testIntfSyncArrDoubleComb(af, func) {
        var result = undefined;
        var arr1 = new af.AFArray(10, af.dType.f32);
        var arr2 = new af.AFArray(10, af.dType.f32);
        result = func(arr1, arr2);
        assert(result instanceof af.AFArray);
        result = func(arr1, 42);
        assert(result instanceof af.AFArray);
        result = func(42, arr2);
        assert(result instanceof af.AFArray);
        try {
            func(42, {});
            assert(false);
        } catch (e) {
            _.noop(e);
        }
    },
    testIntfSyncArrArr: function testIntfSyncArrArr(af, func) {
        var arr1 = new af.AFArray(10, af.dType.f32);
        var arr2 = new af.AFArray(10, af.dType.f32);
        var result = func(arr1, arr2);
        assert(result instanceof af.AFArray);
        try {
            func(42, {});
            assert(false);
        } catch (e) {
            _.noop(e);
        }
    },
    testIntfSyncArr: function testIntfSyncArr(af, func) {
        var arr = new af.AFArray(10, af.dType.f32);
        var result = func(arr);
        assert(result instanceof af.AFArray);
        try {
            func({});
            assert(false);
        } catch (e) {
            _.noop(e);
        }
    }
};

module.exports = testHelpers;
//# sourceMappingURL=testHelpers.js.map
