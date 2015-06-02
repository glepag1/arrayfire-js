"use strict";
"use strict";
var assert = require("better-assert");
var _ = require("lodash");
var Bluebird = require("bluebird");
function testPlatform(id) {
  if (process.env["TEST_" + id] === "1") {
    describe(id + " platform", function() {
      var fire = Bluebird.promisifyAll(require("../..")(id));
      it("should return available devices", function() {
        var deviceCount = fire.getDeviceCount();
        assert(deviceCount > 0);
        var infos = fire.getDevices();
        assert(_.isArray(infos));
        assert(infos.length === deviceCount);
        var $__3 = true;
        var $__4 = false;
        var $__5 = undefined;
        try {
          for (var $__1 = void 0,
              $__0 = (infos)[$traceurRuntime.toProperty(Symbol.iterator)](); !($__3 = ($__1 = $__0.next()).done); $__3 = true) {
            var info = $__1.value;
            {
              assert(_.isString(info.name) && info.name);
              assert(_.isString(info.platform) && info.platform);
              assert(_.isString(info.compute) && info.compute);
              assert(_.isBoolean(info.isDoubleAvailable));
            }
          }
        } catch ($__6) {
          $__4 = true;
          $__5 = $__6;
        } finally {
          try {
            if (!$__3 && $__0.return != null) {
              $__0.return();
            }
          } finally {
            if ($__4) {
              throw $__5;
            }
          }
        }
      });
      it("should do sync with callback", function(done) {
        fire.sync(done);
      });
      it("should do sync with promise", function(done) {
        fire.syncAsync().nodeify(done);
      });
      it("sync should failed if device is out of range", function(done) {
        fire.syncAsync(100).then(function() {
          done(new Error("This should fail!"));
        }, function() {
          done();
        });
      });
    });
  }
}
describe("device methods", function() {
  testPlatform("CPU");
  testPlatform("OpenCL");
  testPlatform("CUDA");
});
//# sourceMappingURL=data:application/json;base64,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QUlJLENBQUMsQ0FBQztBQUVGLE9BQUMsQUFBQyxDQUFDLDhCQUE2QixDQUFHLFVBQVMsSUFBRyxDQUFHO0FBQzlDLFdBQUcsS0FBSyxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUM7TUFDbkIsQ0FBQyxDQUFDO0FBRUYsT0FBQyxBQUFDLENBQUMsNkJBQTRCLENBQUcsVUFBUyxJQUFHLENBQUc7QUFDN0MsV0FBRyxVQUFVLEFBQUMsRUFBQyxRQUFRLEFBQUMsQ0FBQyxJQUFHLENBQUMsQ0FBQztNQUNsQyxDQUFDLENBQUM7QUFFRixPQUFDLEFBQUMsQ0FBQyw4Q0FBNkMsQ0FBRyxVQUFTLElBQUcsQ0FBRztBQUM5RCxXQUFHLFVBQVUsQUFBQyxDQUFDLEdBQUUsQ0FBQyxLQUNWLEFBQUMsQ0FBQyxTQUFTLEFBQUQsQ0FBRztBQUNiLGFBQUcsQUFBQyxDQUFDLEdBQUksTUFBSSxBQUFDLENBQUMsbUJBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQ0EsVUFBUyxBQUFELENBQUc7QUFDUCxhQUFHLEFBQUMsRUFBQyxDQUFDO1FBQ1YsQ0FBQyxDQUFDO01BQ1YsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ047QUFBQSxBQUNKO0FBRUEsT0FBTyxBQUFDLENBQUMsZ0JBQWUsQ0FBRyxVQUFTLEFBQUQsQ0FBRztBQUNsQyxhQUFXLEFBQUMsQ0FBQyxLQUFJLENBQUMsQ0FBQztBQUNuQixhQUFXLEFBQUMsQ0FBQyxRQUFPLENBQUMsQ0FBQztBQUN0QixhQUFXLEFBQUMsQ0FBQyxNQUFLLENBQUMsQ0FBQztBQUN4QixDQUFDLENBQUM7QUFDRiIsImZpbGUiOiJkZXZpY2VUZXN0cy5qcyIsInNvdXJjZVJvb3QiOiJ0ZXN0cy9lczYiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxubGV0IGFzc2VydCA9IHJlcXVpcmUoXCJiZXR0ZXItYXNzZXJ0XCIpO1xubGV0IF8gPSByZXF1aXJlKFwibG9kYXNoXCIpO1xubGV0IEJsdWViaXJkID0gcmVxdWlyZShcImJsdWViaXJkXCIpO1xuXG5mdW5jdGlvbiB0ZXN0UGxhdGZvcm0oaWQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnZbXCJURVNUX1wiICsgaWRdID09PSBcIjFcIikge1xuICAgICAgICBkZXNjcmliZShpZCArIFwiIHBsYXRmb3JtXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBmaXJlID0gQmx1ZWJpcmQucHJvbWlzaWZ5QWxsKHJlcXVpcmUoXCIuLi8uLlwiKShpZCkpO1xuXG4gICAgICAgICAgICBpdChcInNob3VsZCByZXR1cm4gYXZhaWxhYmxlIGRldmljZXNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRldmljZUNvdW50ID0gZmlyZS5nZXREZXZpY2VDb3VudCgpO1xuICAgICAgICAgICAgICAgIGFzc2VydChkZXZpY2VDb3VudCA+IDApO1xuICAgICAgICAgICAgICAgIGxldCBpbmZvcyA9IGZpcmUuZ2V0RGV2aWNlcygpO1xuICAgICAgICAgICAgICAgIGFzc2VydChfLmlzQXJyYXkoaW5mb3MpKTtcbiAgICAgICAgICAgICAgICBhc3NlcnQoaW5mb3MubGVuZ3RoID09PSBkZXZpY2VDb3VudCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5mbyBvZiBpbmZvcykge1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQoXy5pc1N0cmluZyhpbmZvLm5hbWUpICYmIGluZm8ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydChfLmlzU3RyaW5nKGluZm8ucGxhdGZvcm0pICYmIGluZm8ucGxhdGZvcm0pO1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQoXy5pc1N0cmluZyhpbmZvLmNvbXB1dGUpICYmIGluZm8uY29tcHV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydChfLmlzQm9vbGVhbihpbmZvLmlzRG91YmxlQXZhaWxhYmxlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwic2hvdWxkIGRvIHN5bmMgd2l0aCBjYWxsYmFja1wiLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICAgICAgICAgICAgZmlyZS5zeW5jKGRvbmUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwic2hvdWxkIGRvIHN5bmMgd2l0aCBwcm9taXNlXCIsIGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgICAgICAgICAgICBmaXJlLnN5bmNBc3luYygpLm5vZGVpZnkoZG9uZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJzeW5jIHNob3VsZCBmYWlsZWQgaWYgZGV2aWNlIGlzIG91dCBvZiByYW5nZVwiLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICAgICAgICAgICAgZmlyZS5zeW5jQXN5bmMoMTAwKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUobmV3IEVycm9yKFwiVGhpcyBzaG91bGQgZmFpbCFcIikpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5kZXNjcmliZShcImRldmljZSBtZXRob2RzXCIsIGZ1bmN0aW9uKCkge1xuICAgIHRlc3RQbGF0Zm9ybShcIkNQVVwiKTtcbiAgICB0ZXN0UGxhdGZvcm0oXCJPcGVuQ0xcIik7XG4gICAgdGVzdFBsYXRmb3JtKFwiQ1VEQVwiKTtcbn0pO1xuIl19