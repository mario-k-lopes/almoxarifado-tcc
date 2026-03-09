from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route("/<path:filename>")
def serve_file(filename):
    return send_from_directory('static', filename)


if __name__ == "main":
    app.run(debug=True)