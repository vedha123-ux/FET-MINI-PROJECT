class loginForm {
    constructor() {
    $(document).ready(() => {
    $('#loginButton').on('click', (event) => this.validateForm(event));
    });
    }
    private validateForm(event: JQuery.Event) {
    const email = $('#email').val() as string;
    if (!this.isValidEmail(email)) {
    $('#emailError').text('Please enter a valid email address.');
    event.preventDefault();
    } else {
    $('#emailError').text('');
    }
    const password = $('#password').val() as string;
    if (password.length < 6) {
    $('#passwordError').text('Password must be at least 6 characters.');
    event.preventDefault();
    } else {
    $('#passwordError').text('');
    }
    }
    private isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
    }
    }
    new loginForm();
    Lang.js:
    ar LoginForm = /** @class */ (function () {
    function LoginForm() {
    var _this = this;
    $(document).ready(function () {
    $('#loginButton').on('click', function (event) { return _this.validateForm(event); });
    });
    }
    LoginForm.prototype.validateForm = function (event) {
    var email = $('#email').val();
    if (!this.isValidEmail(email)) {
    $('#emailError').text('Please enter a valid email address.');
    event.preventDefault();
    }
    else {
    $('#emailError').text('');
    }
    var password = $('#password').val();
    if (password.length < 6) {
    $('#passwordError').text('Password must be at least 6 characters.');
    event.preventDefault();
    }
    else {
    $('#passwordError').text('');
    }
    };
    LoginForm.prototype.isValidEmail = function (email) {
    var emailRegex = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
    };
    return LoginForm;
    }());
    new LoginForm();