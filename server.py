from flask import Flask, flash, request, redirect, url_for
from flask import send_from_directory, jsonify
from werkzeug.utils import secure_filename
import script

from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.secret_key = 'super secret key'
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/ner', methods=['GET', 'POST'])
def callner():
        if request.method=="GET":
                a=script.ner()
                return jsonify(a)

@app.route('/fetch', methods=['GET', 'POST'])
def callfetch():
        if request.method=="GET":
                args=request.args.get('clicked')
                res = script.fetch(args)
                return jsonify(res)


@app.route('/choice',methods=['GET','POST'])
def choice():
        if request.method=="POST":
                data=request.form.get('text')
                print("data",data)
                return jsonify(data)


if __name__ == '__main__':
    app.debug = True
    app.run()
