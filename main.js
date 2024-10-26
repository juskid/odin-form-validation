/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const form = document.getElementById(\"myForm\");\n\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault(); // Prevent default form submission\n\n  let isValid = true;\n\n  // Name validation\n  const nameInput = document.getElementById(\"name\");\n  const nameError = document.getElementById(\"nameError\");\n  if (nameInput.value.trim() === \"\") {\n    nameError.textContent = \"Name is required\";\n    isValid = false;\n  } else {\n    nameError.textContent = \"\";\n  }\n\n  // Email validatio\n  const emailInput = document.getElementById(\"email\");\n  const emailError = document.getElementById(\"emailError\");\n  if (emailInput.value === \"\") {\n    emailError.textContent = \"Email is required\";\n    isValid = false;\n  } else if (!isValidEmail(emailInput.value.trim())) {\n    emailError.textContent = \"Invalid email format\";\n    isValid = false;\n  } else {\n    emailError.textContent = \"\";\n  }\n\n  if (isValid) {\n    // Form is valid, submit the data\n    form.submit(); // This will trigger the actual form submission\n  }\n});\n\nfunction isValidEmail(email) {\n  // You can use a more robust email validation regex here\n  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n  return regex.test(email);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQSwwQkFBMEI7O0FBRTFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIik7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWlzc2lvblxuXG4gIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuICAvLyBOYW1lIHZhbGlkYXRpb25cbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpO1xuICBjb25zdCBuYW1lRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVFcnJvclwiKTtcbiAgaWYgKG5hbWVJbnB1dC52YWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICBuYW1lRXJyb3IudGV4dENvbnRlbnQgPSBcIk5hbWUgaXMgcmVxdWlyZWRcIjtcbiAgICBpc1ZhbGlkID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgbmFtZUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfVxuXG4gIC8vIEVtYWlsIHZhbGlkYXRpb1xuICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKTtcbiAgY29uc3QgZW1haWxFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxFcnJvclwiKTtcbiAgaWYgKGVtYWlsSW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gXCJFbWFpbCBpcyByZXF1aXJlZFwiO1xuICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgfSBlbHNlIGlmICghaXNWYWxpZEVtYWlsKGVtYWlsSW5wdXQudmFsdWUudHJpbSgpKSkge1xuICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSBcIkludmFsaWQgZW1haWwgZm9ybWF0XCI7XG4gICAgaXNWYWxpZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9XG5cbiAgaWYgKGlzVmFsaWQpIHtcbiAgICAvLyBGb3JtIGlzIHZhbGlkLCBzdWJtaXQgdGhlIGRhdGFcbiAgICBmb3JtLnN1Ym1pdCgpOyAvLyBUaGlzIHdpbGwgdHJpZ2dlciB0aGUgYWN0dWFsIGZvcm0gc3VibWlzc2lvblxuICB9XG59KTtcblxuZnVuY3Rpb24gaXNWYWxpZEVtYWlsKGVtYWlsKSB7XG4gIC8vIFlvdSBjYW4gdXNlIGEgbW9yZSByb2J1c3QgZW1haWwgdmFsaWRhdGlvbiByZWdleCBoZXJlXG4gIGNvbnN0IHJlZ2V4ID0gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC87XG4gIHJldHVybiByZWdleC50ZXN0KGVtYWlsKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;