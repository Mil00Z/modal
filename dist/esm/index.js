import React from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

// CSS properties defined outside the component
var modalContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    inset: '0 0 0 0',
    width: '100dvw',
    height: '100dvh',
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.55) 100%)',
    opacity: 0,
    transition: 'all .22s ease-in-out',
    transform: 'translateY(-100%)',
    animation: 'none'
};
var modalContentStyle = {
    width: '30%',
    height: '20dvh',
    padding: '2rem',
    borderRadius: 'var(--radius)',
    background: 'var(--white-color)',
    position: 'relative',
};
var modalCloserStyle = {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    fontSize: '1.15rem',
    background: 'var(--white-color)',
    borderRadius: '50%',
    cursor: 'pointer'
};
var titleStyle = {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    textAlign: 'center',
    color: 'rgb(0,0,0)'
};
var highlightStyle = {
    color: '#16a34a',
    margin: '0 0.5rem'
};
var Modal = function (_a) {
    var success = _a.success, closeModal = _a.closeModal, newUser = _a.newUser;
    // Dynamic styles based on props
    var dynamicContainerStyle = __assign(__assign({}, modalContainerStyle), { opacity: success ? 1 : 0, transform: success ? 'translateY(0)' : 'translateY(-100%)', animation: success ? 'fadeIn 0.45s ease-in-out forwards' : 'none' });
    function ModalClick() {
        closeModal();
    }
    return (React.createElement("div", { className: "modal-success-container ".concat(success ? 'show' : ''), style: dynamicContainerStyle },
        React.createElement("div", { className: "modal-content flex align-center justify-center", "aria-labelledby": "modal-title", role: "dialog", "aria-modal": "true", style: modalContentStyle },
            React.createElement("p", { id: "modal-title", style: titleStyle },
                "Added User : ",
                React.createElement("span", { style: highlightStyle },
                    newUser.lastName,
                    " ",
                    newUser.firstName),
                React.createElement("span", { className: "closer", style: modalCloserStyle, onClick: function (e) { return ModalClick(); } }, "\u274C")))));
};

export { Modal, highlightStyle, modalCloserStyle, modalContainerStyle, modalContentStyle, titleStyle };
//# sourceMappingURL=index.js.map
