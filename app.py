import os
from flask import Flask, request, session, send_from_directory
from flask_restful import Api, Resource, reqparse
from werkzeug.utils import secure_filename
from flask_cors import CORS  # comment this on deployment

UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = set(['txt', 'srt', 'pdf'])
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)  # comment this on deployment
api = Api(app)


@app.route("/uploadFile", methods=['GET', 'POST', 'DELETE'])
def uploadFile():
    if request.method == 'GET':
        return {"link": "https://www.youtube.com/watch?v=7LNl2JlZKHA"}
    if request.method == 'POST':
        target = os.path.join(UPLOAD_FOLDER, 'test_subtitle')
        if not os.path.isdir(target):
            os.mkdir(target)
        file = request.files['file']
        filename = secure_filename(file.filename)
        destination = "/".join([target, filename])
        file.save(destination)
        response = "Whatever you wish too return"
        return response


@app.route("/uploadLink", methods=['GET', 'POST', 'DELETE'])
def uploadLink():
    file = open('./uploads/test_links/link.txt', 'w+')
    file.write(request.get_json()['data'])
    return request.json


if __name__ == "__main__":
    app.run(debug=True)

CORS(app, expose_headers='Authorization')
