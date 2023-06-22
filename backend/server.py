# server.py
from flask import Flask, jsonify, Response, request
from authlib.integrations.flask_oauth2 import ResourceProtector
from validator import ZitadelIntrospectTokenValidator, ValidatorError
from flask.json import JSONEncoder
import requests
import random
import os


class CustomJSONEncoder(JSONEncoder):
    def __init__(self, *args, **kwargs):
        kwargs['ensure_ascii'] = False # Prevents unicode escapes
        super(CustomJSONEncoder, self).__init__(*args, **kwargs)


app = Flask(__name__)
app.json_encoder = CustomJSONEncoder


require_auth = ResourceProtector()
require_auth.register_token_validator(ZitadelIntrospectTokenValidator())


@app.errorhandler(ValidatorError)
def handle_auth_error(ex: ValidatorError) -> Response:
    response = jsonify(ex.error)
    response.status_code = ex.status_code
    return response


@app.route("/api/custom_quote")
@require_auth(None)
def custom_quote():
    quotes = [
    "'Believe you can and you're halfway there'. - Theodore Roosevelt",
    "'Don't watch the clock; do what it does. Keep going'. - Sam Levenson",
    "'Whether you think you can or you think you can’t, you’re right'. - Henry Ford",
    "'The only way to do great work is to love what you do'. - Steve Jobs",
    "'You are never too old to set another goal or to dream a new dream'. - C.S. Lewis",
    "'The only difference between a rut and a grave is their dimensions'. - Ellen Glasgow",
    "'If you're going through hell, keep going'. - Winston Churchill",
    "'People often say that motivation doesn't last. Well, neither does bathing – that’s why we recommend it daily'. - Zig Ziglar",
    "'If you think you are too small to make a difference, try sleeping with a mosquito'. - Dalai Lama",
    "'I find that the harder I work, the more luck I seem to have'. - Thomas Jefferson",
    "'I have not failed. I’ve just found 10,000 ways that won’t work'. - Thomas A. Edison"
    ] # List of inspirational but funny quotes


    random_quote = random.choice(quotes)

    return jsonify(quote=random_quote)




if __name__ == "__main__":
    app.run()
