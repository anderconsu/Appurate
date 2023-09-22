import pandas as pd
from flask import Flask, jsonify,request
from flask_cors import CORS
import pickle

app = Flask(__name__)
cors = CORS(app)


@app.route('/')
def home():
    return jsonify({'message': 'Welcome to the water prediction_lab API'})

with open('models/modelo_niños.pkl', 'rb') as archivo:
    modelo_niños = pickle.load(archivo)
#modelo_niños = pickle.load(open('models/modelo_niños.pkl', 'rb'))


@app.route('/prediccion_niños', methods=['POST'])
def predecir_niños():
    data = request.get_json()

    ph = float(data['pH'])
    oxigeno = float(data['Oxigeno'])
    conductividad = float(data['Conductividad'])
    temperatura = float(data['Temperatura'])

    input_data_niños = [[ph, oxigeno, conductividad, temperatura]]
    prediction_niños = modelo_niños.predict(input_data_niños)

    return jsonify(int(prediction_niños[0]))
    

modelo_lab = pickle.load(open('models/modelo_laboratorio.pkl', 'rb'))
@app.route('/prediccion_laboratorio', methods=['POST'])
def predecir_laboratorio():
    data = request.get_json()

    ph = float(data['pH'])
    oxigeno = float(data['Oxigeno'])
    conductividad = float(data['Conductividad'])
    temperatura = float(data['Temperatura'])
    turbidez = float(data['Turbidez'])
    amonio = float(data['Amonio'])
    fosfatos = float(data['Fosfatos'])
    nitratos = float(data['Nitratos'])
    carbono = float(data['Carbono'])
    e_coli = float(data['E coli'])
    enterococos = float(data['Enterococos'])

    input_data_lab = [[ph, oxigeno, conductividad, temperatura, turbidez, amonio, fosfatos, nitratos, carbono, e_coli, enterococos]]
    prediction_lab = modelo_lab.predict(input_data_lab)


    return jsonify({'El agua es': float(prediction_lab[0])})


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")