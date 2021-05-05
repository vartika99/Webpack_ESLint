/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/ConsoleLogIt.js":
/*!********************************!*\
  !*** ./src/js/ConsoleLogIt.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConsoleLogIt)
/* harmony export */ });
function ConsoleLogIt(message) {
  console.log(message);
}

/***/ }),

/***/ "./src/js/TestJs.js":
/*!**************************!*\
  !*** ./src/js/TestJs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestJS)
/* harmony export */ });
function TestJS() {
  console.log('Loaded');
}

/***/ }),

/***/ "./src/js/getJSON.js":
/*!***************************!*\
  !*** ./src/js/getJSON.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getJSON)
/* harmony export */ });
function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function testing() {
    var status = xhr.status;

    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };

  xhr.send();
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TestJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestJs */ "./src/js/TestJs.js");
/* harmony import */ var _ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleLogIt */ "./src/js/ConsoleLogIt.js");
/* harmony import */ var _getJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getJSON */ "./src/js/getJSON.js");




function generateTableHead(table, data) {
  var thead = table.createTHead();
  var row = thead.insertRow();
  data.forEach(function (key) {
    var th = document.createElement('th');
    var text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  });
}

function generateTable(table, data) {
  data.forEach(function (element) {
    var row = table.insertRow();
    console.log(element);
    element.forEach(function (key) {
      var cell = row.insertCell();
      var text = document.createTextNode(element[key]);
      cell.appendChild(text);
    });
  });
}

(0,_TestJs__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('', function (data) {
  console.log(data);
});
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('http://localhost:8000/api/v1/cities', function (err, records) {
  if (err !== null) {
    alert("Something went wrong: ".concat(err));
  } else {
    var table = document.querySelector('table');
    var data = Object.keys(records.data[0]);
    var dataRecords = records.data;
    generateTableHead(table, data);
    generateTable(table, dataRecords);
    /*
          let data = Object.keys(records.data[0]);
          generateTable(table, records.data); // generate the table first
          generateTableHead(table, data); // then the head
           */
  }
});
(0,_ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__.default)('this workedss  in the bundle');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL0NvbnNvbGVMb2dJdC5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL1Rlc3RKcy5qcyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzLy4vc3JjL2pzL2dldEpTT04uanMiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91bnRpdGxlZDEzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdW50aXRsZWQxMy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3VudGl0bGVkMTMvLi9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOlsiQ29uc29sZUxvZ0l0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJUZXN0SlMiLCJnZXRKU09OIiwidXJsIiwiY2FsbGJhY2siLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJvbmxvYWQiLCJ0ZXN0aW5nIiwic3RhdHVzIiwicmVzcG9uc2UiLCJzZW5kIiwiZ2VuZXJhdGVUYWJsZUhlYWQiLCJ0YWJsZSIsImRhdGEiLCJ0aGVhZCIsImNyZWF0ZVRIZWFkIiwicm93IiwiaW5zZXJ0Um93IiwiZm9yRWFjaCIsImtleSIsInRoIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZVRhYmxlIiwiZWxlbWVudCIsImNlbGwiLCJpbnNlcnRDZWxsIiwiZXJyIiwicmVjb3JkcyIsImFsZXJ0IiwicXVlcnlTZWxlY3RvciIsIk9iamVjdCIsImtleXMiLCJkYXRhUmVjb3JkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7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QUFELEVBQ0wsVUFBQytCLEdBQUQsRUFBTUMsT0FBTixFQUFrQjtBQUNoQixNQUFJRCxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNoQkUsU0FBSyxpQ0FBMEJGLEdBQTFCLEVBQUw7QUFDRCxHQUZELE1BRU87QUFDTCxRQUFNbEIsS0FBSyxHQUFHUyxRQUFRLENBQUNZLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtBQUNBLFFBQU1wQixJQUFJLEdBQUdxQixNQUFNLENBQUNDLElBQVAsQ0FBYUosT0FBTyxDQUFDbEIsSUFBUixDQUFhLENBQWIsQ0FBYixDQUFiO0FBQ0EsUUFBTXVCLFdBQVcsR0FBR0wsT0FBTyxDQUFDbEIsSUFBNUI7QUFFQUYscUJBQWlCLENBQUNDLEtBQUQsRUFBUUMsSUFBUixDQUFqQjtBQUNBYSxpQkFBYSxDQUFDZCxLQUFELEVBQVF3QixXQUFSLENBQWI7QUFDQTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0s7QUFDRixDQWpCSSxDQUFQO0FBa0JBMUMsc0RBQVksQ0FBQyw4QkFBRCxDQUFaLEMiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uc29sZUxvZ0l0KG1lc3NhZ2UpIHtcbiAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0SlMoKSB7XG4gIGNvbnNvbGUubG9nKCdMb2FkZWQnKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEpTT04odXJsLCBjYWxsYmFjaykge1xuICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gIHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiB0ZXN0aW5nKCkge1xuICAgIGNvbnN0IHsgc3RhdHVzIH0gPSB4aHI7XG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCB4aHIucmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhzdGF0dXMsIHhoci5yZXNwb25zZSk7XG4gICAgfVxuICB9O1xuICB4aHIuc2VuZCgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGVzdEpTIGZyb20gJy4vVGVzdEpzJztcbmltcG9ydCBDb25zb2xlTG9nSXQgZnJvbSAnLi9Db25zb2xlTG9nSXQnO1xuaW1wb3J0IGdldEpTT04gZnJvbSAnLi9nZXRKU09OJztcblxuZnVuY3Rpb24gZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpIHtcbiAgY29uc3QgdGhlYWQgPSB0YWJsZS5jcmVhdGVUSGVhZCgpO1xuICBjb25zdCByb3cgPSB0aGVhZC5pbnNlcnRSb3coKTtcbiAgZGF0YS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGtleSk7XG4gICAgdGguYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgcm93LmFwcGVuZENoaWxkKHRoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGEpIHtcbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgZWxlbWVudC5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNlbGwgPSByb3cuaW5zZXJ0Q2VsbCgpO1xuICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVsZW1lbnRba2V5XSk7XG4gICAgICBjZWxsLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuVGVzdEpTKCk7XG5nZXRKU09OKCcnLCAoZGF0YSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbn0pO1xuXG5nZXRKU09OKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3YxL2NpdGllcycsXG4gIChlcnIsIHJlY29yZHMpID0+IHtcbiAgICBpZiAoZXJyICE9PSBudWxsKSB7XG4gICAgICBhbGVydChgU29tZXRoaW5nIHdlbnQgd3Jvbmc6ICR7ZXJyfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XG4gICAgICBjb25zdCBkYXRhID0gT2JqZWN0LmtleXMoKHJlY29yZHMuZGF0YVswXSkpO1xuICAgICAgY29uc3QgZGF0YVJlY29yZHMgPSByZWNvcmRzLmRhdGE7XG5cbiAgICAgIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKTtcbiAgICAgIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGFSZWNvcmRzKTtcbiAgICAgIC8qXG4gICAgICAgICAgICBsZXQgZGF0YSA9IE9iamVjdC5rZXlzKHJlY29yZHMuZGF0YVswXSk7XG4gICAgICAgICAgICBnZW5lcmF0ZVRhYmxlKHRhYmxlLCByZWNvcmRzLmRhdGEpOyAvLyBnZW5lcmF0ZSB0aGUgdGFibGUgZmlyc3RcbiAgICAgICAgICAgIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKTsgLy8gdGhlbiB0aGUgaGVhZFxuICAgICAgICAgICAgICovXG4gICAgfVxuICB9KTtcbkNvbnNvbGVMb2dJdCgndGhpcyB3b3JrZWRzcyAgaW4gdGhlIGJ1bmRsZScpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==