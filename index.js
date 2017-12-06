/*!
 * calculation.js v1.0.0
 * 2017 603803799@qq.com
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) : (global.calculation = factory());
})(this, function () {
  return {
    division(arg1, arg2) { //除法
      var t1 = 0, t2 = 0, r1, r2;
      try {
        t1 = arg1.toString().split(".")[1].length
      } catch (e) {
        t1 = 0
      }
      try {
        t2 = arg2.toString().split(".")[1].length
      } catch (e) {
        t2 = 0
      }
      if (Math) return r1 = Number(arg1.toString().replace(".", "")), r2 = Number(arg2.toString().replace(".", "")), this.multiplication((r1 / r2), Math.pow(10, t2 - t1));
      else return false
    },
    multiplication(arg1, arg2) {//乘法
      var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
      try {
        m += s1.split(".")[1].length
      } catch (e) {
        m += 0
      }
      try {
        m += s2.split(".")[1].length
      } catch (e) {
        m += 0
      }
      return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
    },
    addition(arg1, arg2) {//加法
      var r1, r2, m;
      try {
        r1 = arg1.toString().split(".")[1].length
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg2.toString().split(".")[1].length
      } catch (e) {
        r2 = 0;
      }
      return m = Math.pow(10, Math.max(r1, r2)), (arg1 * m + arg2 * m) / m
    },
    subtraction(arg1, arg2) {//减法
      var r1, r2, m, n;
      try {
        r1 = arg1.toString().split(".")[1].length
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg2.toString().split(".")[1].length
      } catch (e) {
        r2 = 0;
      }
      return m = Math.pow(10, Math.max(r1, r2)), n = (r1 >= r2) ? r1 : r2, ((arg1 * m - arg2 * m) / m).toFixed(n);
    }
  }
});

//github.com => https://github.com/noteScript/js-calculation.git
