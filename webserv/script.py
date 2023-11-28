from flask import Flask, request, jsonify
from flask_cors import CORS
from easygoogletranslate import EasyGoogleTranslate

app = Flask(__name__)
CORS(app)  

translator = EasyGoogleTranslate(
    source_language='en',
    target_language='pt',
    timeout=10
)


@app.route("/translate", methods=["POST"])
def translate():
    text = request.get_json()["text"]
    translated_text = translator.translate(text)
    return jsonify({"translated_text": translated_text})


if __name__ == "__main__":
    app.run(debug=True, host="localhost", port=5000)
