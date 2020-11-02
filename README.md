nge directory: > cd AzureApp

install dependencies: > npm install

run the app: > SET DEBUG=azureapp:\* & npm start

az webapp log tail --name AzureNodeApp1 --resource-group DemoApp
