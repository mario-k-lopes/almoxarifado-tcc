#!/bin/bash

# Somente para desenvolvimento
#
# "Como faz essa ##### funcionar?
# Já que não curto muito bash script, você terá que executar
# algumas coisas na unha:
#
# Criar o ambiente python "isolado" (forma de expressão, não é isolado de verdade) da máquina atual:
# > python -m venv venv/
#
# Instalar o Flask lá dentro
# > ./venv/bin/pip install flask
# Pronto, isso é o suficiente para configurar o ambiente
#
#
./venv/bin/flask --app server run --host=0.0.0.0


