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
//# sourceMappingURL=data:application/json;base64,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QUFBQSxNQW9CSSxDQUFDLENBQUM7QUFFRixPQUFDLEFBQUMsQ0FBQyw4QkFBNkIsQ0FBRyxVQUFTLElBQUcsQ0FBRztBQUM5QyxXQUFHLEtBQUssQUFBQyxDQUFDLElBQUcsQ0FBQyxDQUFDO01BQ25CLENBQUMsQ0FBQztBQUVGLE9BQUMsQUFBQyxDQUFDLDZCQUE0QixDQUFHLFVBQVMsSUFBRyxDQUFHO0FBQzdDLFdBQUcsVUFBVSxBQUFDLEVBQUMsUUFBUSxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUM7TUFDbEMsQ0FBQyxDQUFDO0FBRUYsT0FBQyxBQUFDLENBQUMsOENBQTZDLENBQUcsVUFBUyxJQUFHLENBQUc7QUFDOUQsV0FBRyxVQUFVLEFBQUMsQ0FBQyxHQUFFLENBQUMsS0FDVixBQUFDLENBQUMsU0FBUyxBQUFELENBQUc7QUFDYixhQUFHLEFBQUMsQ0FBQyxHQUFJLE1BQUksQUFBQyxDQUFDLG1CQUFrQixDQUFDLENBQUMsQ0FBQztRQUN4QyxDQUNBLFVBQVMsQUFBRCxDQUFHO0FBQ1AsYUFBRyxBQUFDLEVBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQztNQUNWLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0FBQUEsQUFDSjtBQUVBLE9BQU8sQUFBQyxDQUFDLGdCQUFlLENBQUcsVUFBUyxBQUFELENBQUc7QUFDbEMsYUFBVyxBQUFDLENBQUMsS0FBSSxDQUFDLENBQUM7QUFDbkIsYUFBVyxBQUFDLENBQUMsUUFBTyxDQUFDLENBQUM7QUFDdEIsYUFBVyxBQUFDLENBQUMsTUFBSyxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBQ0YiLCJmaWxlIjoiZGV2aWNlVGVzdHMuanMiLCJzb3VyY2VSb290IjoidGVzdHMvZXM2Iiwic291cmNlc0NvbnRlbnQiOlsiLypcbkNvcHlyaWdodCAyMDE1IEfvv71ib3IgTWV677+9IGFrYSB1bmJvcm5jaGlra2VuXG5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG55b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG5Zb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcblxuICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5Vbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG5kaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG5XSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cblNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbmxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmxldCBhc3NlcnQgPSByZXF1aXJlKFwiYmV0dGVyLWFzc2VydFwiKTtcbmxldCBfID0gcmVxdWlyZShcImxvZGFzaFwiKTtcbmxldCBCbHVlYmlyZCA9IHJlcXVpcmUoXCJibHVlYmlyZFwiKTtcblxuZnVuY3Rpb24gdGVzdFBsYXRmb3JtKGlkKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52W1wiVEVTVF9cIiArIGlkXSA9PT0gXCIxXCIpIHtcbiAgICAgICAgZGVzY3JpYmUoaWQgKyBcIiBwbGF0Zm9ybVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgZmlyZSA9IEJsdWViaXJkLnByb21pc2lmeUFsbChyZXF1aXJlKFwiLi4vLi5cIikoaWQpKTtcblxuICAgICAgICAgICAgaXQoXCJzaG91bGQgcmV0dXJuIGF2YWlsYWJsZSBkZXZpY2VzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGxldCBkZXZpY2VDb3VudCA9IGZpcmUuZ2V0RGV2aWNlQ291bnQoKTtcbiAgICAgICAgICAgICAgICBhc3NlcnQoZGV2aWNlQ291bnQgPiAwKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5mb3MgPSBmaXJlLmdldERldmljZXMoKTtcbiAgICAgICAgICAgICAgICBhc3NlcnQoXy5pc0FycmF5KGluZm9zKSk7XG4gICAgICAgICAgICAgICAgYXNzZXJ0KGluZm9zLmxlbmd0aCA9PT0gZGV2aWNlQ291bnQpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZm8gb2YgaW5mb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0KF8uaXNTdHJpbmcoaW5mby5uYW1lKSAmJiBpbmZvLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQoXy5pc1N0cmluZyhpbmZvLnBsYXRmb3JtKSAmJiBpbmZvLnBsYXRmb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0KF8uaXNTdHJpbmcoaW5mby5jb21wdXRlKSAmJiBpbmZvLmNvbXB1dGUpO1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQoXy5pc0Jvb2xlYW4oaW5mby5pc0RvdWJsZUF2YWlsYWJsZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcInNob3VsZCBkbyBzeW5jIHdpdGggY2FsbGJhY2tcIiwgZnVuY3Rpb24oZG9uZSkge1xuICAgICAgICAgICAgICAgIGZpcmUuc3luYyhkb25lKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcInNob3VsZCBkbyBzeW5jIHdpdGggcHJvbWlzZVwiLCBmdW5jdGlvbihkb25lKSB7XG4gICAgICAgICAgICAgICAgZmlyZS5zeW5jQXN5bmMoKS5ub2RlaWZ5KGRvbmUpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwic3luYyBzaG91bGQgZmFpbGVkIGlmIGRldmljZSBpcyBvdXQgb2YgcmFuZ2VcIiwgZnVuY3Rpb24oZG9uZSkge1xuICAgICAgICAgICAgICAgIGZpcmUuc3luY0FzeW5jKDEwMClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKG5ldyBFcnJvcihcIlRoaXMgc2hvdWxkIGZhaWwhXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZGVzY3JpYmUoXCJkZXZpY2UgbWV0aG9kc1wiLCBmdW5jdGlvbigpIHtcbiAgICB0ZXN0UGxhdGZvcm0oXCJDUFVcIik7XG4gICAgdGVzdFBsYXRmb3JtKFwiT3BlbkNMXCIpO1xuICAgIHRlc3RQbGF0Zm9ybShcIkNVREFcIik7XG59KTtcbiJdfQ==