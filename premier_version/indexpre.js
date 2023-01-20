//Importation des données
var ep_1 = {
  "nodes": [
    {  "id": "Meredith", "group": "Interne" },
    {  "id": "Cristina", "group": "Interne" },
    {  "id": "Derek", "group": "Titulaire" },
    {  "id": "George", "group": "Interne" },
    {  "id": "Izi", "group": "Interne" },
    {  "id": "Alex", "group": "Interne" },
    {  "id": "Bailey", "group": "Resident" },
    {  "id": "Bur", "group": "Titulaire" },
    {  "id": "Webber", "group": "Chef" },
  ],
  "edges": [
    { "source": 0, "target": 2, "value": "1" },
    { "source": 0, "target": 1, "value": "2" },
    { "source": 0, "target": 5, "value": "3" },
    { "source": 0, "target": 6, "value": "5" },
    { "source": 1, "target": 0, "value": "2" },
    { "source": 1, "target": 3, "value": "4" },
    { "source": 1, "target": 6, "value": "5" },
    { "source": 2, "target": 0, "value": "1" },
    { "source": 3, "target": 0, "value": "1" },
    { "source": 3, "target": 4, "value": "2" },
    { "source": 3, "target": 6, "value": "5" },
    { "source": 4, "target": 3, "value": "2" },
    { "source": 4, "target": 6, "value": "5" },
    { "source": 5, "target": 0, "value": "4" },
    { "source": 5, "target": 3, "value": "6" },
    { "source": 6, "target": 0, "value": "6" },
    { "source": 6, "target": 1, "value": "6" },
    { "source": 6, "target": 3, "value": "6" },
    { "source": 6, "target": 4, "value": "6" },
    { "source": 8, "target": 3, "value": "3" },
  ]
};


var ep_2 = {
  "nodes": [
    {  "id": "Meredith", "group": "Interne" },
    {  "id": "Cristina", "group": "Interne" },
    {  "id": "Derek", "group": "Titulaire" },
    {  "id": "George", "group": "Interne" },
    {  "id": "Izi", "group": "Interne" },
    {  "id": "Alex", "group": "Interne" },
    {  "id": "Bailey", "group": "Resident" },
    {  "id": "Bur", "group": "Titulaire" },
    {  "id": "Webber", "group": "Chef" },
  ],
  "edges": [
    { "source": 0, "target": 2, "value": "1" },
    { "source": 0, "target": 1, "value": "2" },
    { "source": 0, "target": 3, "value": "2" },
    { "source": 0, "target": 4, "value": "2" },
    { "source": 0, "target": 5, "value": "3" },
    { "source": 0, "target": 6, "value": "5" },
    { "source": 1, "target": 0, "value": "2" },
    { "source": 1, "target": 3, "value": "2" },
    { "source": 1, "target": 5, "value": "3" },
    { "source": 1, "target": 6, "value": "5" },
    { "source": 2, "target": 0, "value": "1" },
    { "source": 3, "target": 0, "value": "1" },
    { "source": 3, "target": 4, "value": "2" },
    { "source": 3, "target": 6, "value": "5" },
    { "source": 4, "target": 3, "value": "2" },
    { "source": 4, "target": 6, "value": "5" },
    { "source": 5, "target": 0, "value": "4" },
    { "source": 5, "target": 3, "value": "6" },
    { "source": 6, "target": 0, "value": "6" },
    { "source": 6, "target": 1, "value": "6" },
    { "source": 6, "target": 3, "value": "6" },
    { "source": 6, "target": 4, "value": "6" },
    { "source": 7, "target": 3, "value": "3" },
    { "source": 7, "target": 8, "value": "3" },
    { "source": 7, "target": 2, "value": "4" },
  ]
};


var ep_3 = {
  "nodes": [
    {  "id": "Meredith", "group": "Interne" },
    {  "id": "Cristina", "group": "Interne" },
    {  "id": "Derek", "group": "Titulaire" },
    {  "id": "George", "group": "Interne" },
    {  "id": "Izi", "group": "Interne" },
    {  "id": "Alex", "group": "Interne" },
    {  "id": "Bailey", "group": "Resident" },
    {  "id": "Bur", "group": "Titulaire" },
    {  "id": "Webber", "group": "Chef" },
  ],
  "edges": [
    { "source": 0, "target": 2, "value": "1" },
    { "source": 0, "target": 1, "value": "2" },
    { "source": 0, "target": 3, "value": "2" },
    { "source": 0, "target": 4, "value": "2" },
    { "source": 0, "target": 5, "value": "3" },
    { "source": 0, "target": 6, "value": "5" },
    { "source": 1, "target": 0, "value": "2" },
    { "source": 1, "target": 3, "value": "2" },
    { "source": 1, "target": 4, "value": "2" },
    { "source": 1, "target": 5, "value": "3" },
    { "source": 1, "target": 6, "value": "5" },
    { "source": 2, "target": 0, "value": "1" },
    { "source": 3, "target": 0, "value": "1" },
    { "source": 3, "target": 4, "value": "2" },
    { "source": 3, "target": 1, "value": "2" },
    { "source": 3, "target": 1, "value": "4" },
    { "source": 3, "target": 6, "value": "5" },
    { "source": 4, "target": 3, "value": "2" },
    { "source": 4, "target": 1, "value": "2" },
    { "source": 4, "target": 6, "value": "5" },
    { "source": 5, "target": 0, "value": "4" },
    { "source": 5, "target": 3, "value": "6" },
    { "source": 6, "target": 0, "value": "6" },
    { "source": 6, "target": 1, "value": "6" },
    { "source": 6, "target": 3, "value": "6" },
    { "source": 6, "target": 4, "value": "6" },
    { "source": 6, "target": 5, "value": "3" },
    { "source": 8, "target": 3, "value": "2" },
  ]
};

var ep_4 = {
  "nodes": [
    {  "id": "Meredith", "group": "Interne" },
    {  "id": "Cristina", "group": "Interne" },
    {  "id": "Derek", "group": "Titulaire" },
    {  "id": "George", "group": "Interne" },
    {  "id": "Izi", "group": "Interne" },
    {  "id": "Alex", "group": "Interne" },
    {  "id": "Bailey", "group": "Resident" },
    {  "id": "Bur", "group": "Titulaire" },
    {  "id": "Webber", "group": "Chef" },
  ],
  "edges": [
    { "source": 0, "target": 2, "value": "1" },
    { "source": 0, "target": 1, "value": "2" },
    { "source": 0, "target": 3, "value": "2" },
    { "source": 0, "target": 4, "value": "2" },
    { "source": 0, "target": 5, "value": "3" },
    { "source": 0, "target": 6, "value": "5" },
    { "source": 1, "target": 0, "value": "2" },
    { "source": 1, "target": 3, "value": "2" },
    { "source": 1, "target": 4, "value": "2" },
    { "source": 1, "target": 5, "value": "3" },
    { "source": 1, "target": 6, "value": "5" },
    { "source": 1, "target": 7, "value": "1" },
    { "source": 2, "target": 0, "value": "1" },
    { "source": 3, "target": 0, "value": "1" },
    { "source": 3, "target": 4, "value": "2" },
    { "source": 3, "target": 1, "value": "2" },
    { "source": 3, "target": 1, "value": "4" },
    { "source": 3, "target": 6, "value": "5" },
    { "source": 4, "target": 3, "value": "2" },
    { "source": 4, "target": 1, "value": "2" },
    { "source": 4, "target": 6, "value": "5" },
    { "source": 4, "target": 5, "value": "3" },
    { "source": 5, "target": 0, "value": "4" },
    { "source": 5, "target": 3, "value": "6" },
    { "source": 6, "target": 0, "value": "6" },
    { "source": 6, "target": 1, "value": "6" },
    { "source": 6, "target": 3, "value": "6" },
    { "source": 6, "target": 4, "value": "6" },
    { "source": 6, "target": 5, "value": "3" },
    { "source": 7, "target": 1, "value": "1" },
    { "source": 7, "target": 1, "value": "2" },
    { "source": 8, "target": 3, "value": "2" },
  ]
};

var ep_5 = {
  "nodes": [
    {  "id": "Meredith", "group": "Interne" },
    {  "id": "Cristina", "group": "Interne" },
    {  "id": "Derek", "group": "Titulaire" },
    {  "id": "George", "group": "Interne" },
    {  "id": "Izi", "group": "Interne" },
    {  "id": "Alex", "group": "Interne" },
    {  "id": "Bailey", "group": "Resident" },
    {  "id": "Bur", "group": "Titulaire" },
    {  "id": "Webber", "group": "Chef" },
  ],
  "edges": [
    { "source": 0, "target": 2, "value": "1" },
    { "source": 0, "target": 1, "value": "2" },
    { "source": 0, "target": 3, "value": "2" },
    { "source": 0, "target": 4, "value": "2" },
    { "source": 0, "target": 5, "value": "3" },
    { "source": 0, "target": 6, "value": "5" },
    { "source": 1, "target": 0, "value": "2" },
    { "source": 1, "target": 3, "value": "2" },
    { "source": 1, "target": 4, "value": "2" },
    { "source": 1, "target": 5, "value": "3" },
    { "source": 1, "target": 6, "value": "5" },
    { "source": 1, "target": 7, "value": "1" },
    { "source": 2, "target": 0, "value": "1" },
    { "source": 2, "target": 6, "value": "5" },
    { "source": 3, "target": 0, "value": "1" },
    { "source": 3, "target": 4, "value": "2" },
    { "source": 3, "target": 1, "value": "2" },
    { "source": 3, "target": 1, "value": "4" },
    { "source": 3, "target": 6, "value": "5" },
    { "source": 4, "target": 3, "value": "2" },
    { "source": 4, "target": 1, "value": "2" },
    { "source": 4, "target": 0, "value": "2" },
    { "source": 4, "target": 6, "value": "5" },
    { "source": 4, "target": 5, "value": "2" },
    { "source": 5, "target": 0, "value": "4" },
    { "source": 5, "target": 3, "value": "6" },
    { "source": 5, "target": 4, "value": "2" },
    { "source": 6, "target": 0, "value": "6" },
    { "source": 6, "target": 1, "value": "6" },
    { "source": 6, "target": 3, "value": "6" },
    { "source": 6, "target": 4, "value": "6" },
    { "source": 6, "target": 2, "value": "6" },
    { "source": 6, "target": 5, "value": "3" },
    { "source": 7, "target": 1, "value": "1" },
    { "source": 7, "target": 0, "value": "3" },
    { "source": 8, "target": 3, "value": "2" },
  ]
};

var ep_6 = {
  "nodes": [
    {  "id": "Meredith", "group": "Interne" },
    {  "id": "Cristina", "group": "Interne" },
    {  "id": "Derek", "group": "Titulaire" },
    {  "id": "George", "group": "Interne" },
    {  "id": "Izi", "group": "Interne" },
    {  "id": "Alex", "group": "Interne" },
    {  "id": "Bailey", "group": "Resident" },
    {  "id": "Bur", "group": "Titulaire" },
    {  "id": "Webber", "group": "Chef" },
  ],
  "edges": [
    { "source": 0, "target": 2, "value": "1" },
    { "source": 0, "target": 1, "value": "2" },
    { "source": 0, "target": 3, "value": "2" },
    { "source": 0, "target": 4, "value": "2" },
    { "source": 0, "target": 5, "value": "3" },
    { "source": 0, "target": 6, "value": "5" },
    { "source": 0, "target": 7, "value": "5" },
    { "source": 1, "target": 0, "value": "2" },
    { "source": 1, "target": 3, "value": "2" },
    { "source": 1, "target": 4, "value": "2" },
    { "source": 1, "target": 5, "value": "3" },
    { "source": 1, "target": 6, "value": "5" },
    { "source": 1, "target": 7, "value": "1" },
    { "source": 2, "target": 0, "value": "1" },
    { "source": 2, "target": 6, "value": "5" },
    { "source": 3, "target": 0, "value": "1" },
    { "source": 3, "target": 4, "value": "2" },
    { "source": 3, "target": 1, "value": "2" },
    { "source": 3, "target": 1, "value": "4" },
    { "source": 3, "target": 6, "value": "5" },
    { "source": 4, "target": 3, "value": "2" },
    { "source": 4, "target": 1, "value": "2" },
    { "source": 4, "target": 6, "value": "5" },
    { "source": 4, "target": 7, "value": "5" },
    { "source": 4, "target": 5, "value": "3" },
    { "source": 4, "target": 0, "value": "2" },
    { "source": 5, "target": 0, "value": "4" },
    { "source": 5, "target": 3, "value": "6" },
    { "source": 5, "target": 4, "value": "3" },
    { "source": 6, "target": 0, "value": "6" },
    { "source": 6, "target": 1, "value": "6" },
    { "source": 6, "target": 3, "value": "6" },
    { "source": 6, "target": 4, "value": "6" },
    { "source": 6, "target": 2, "value": "6" },
    { "source": 6, "target": 5, "value": "3" },
    { "source": 6, "target": 7, "value": "3" },
    { "source": 7, "target": 1, "value": "1" },
    { "source": 7, "target": 0, "value": "3" },
    { "source": 8, "target": 3, "value": "2" },
  ]
};

var ep_7 = {
  "nodes": [
    {  "id": "Meredith", "group": "Interne" },
    {  "id": "Cristina", "group": "Interne" },
    {  "id": "Derek", "group": "Titulaire" },
    {  "id": "George", "group": "Interne" },
    {  "id": "Izi", "group": "Interne" },
    {  "id": "Alex", "group": "Interne" },
    {  "id": "Bailey", "group": "Resident" },
    {  "id": "Bur", "group": "Titulaire" },
    {  "id": "Webber", "group": "Chef" },
  ],
  "edges": [
    { "source": 0, "target": 2, "value": "1" },
    { "source": 0, "target": 1, "value": "2" },
    { "source": 0, "target": 3, "value": "2" },
    { "source": 0, "target": 4, "value": "2" },
    { "source": 0, "target": 5, "value": "3" },
    { "source": 0, "target": 6, "value": "5" },
    { "source": 0, "target": 7, "value": "5" },
    { "source": 1, "target": 0, "value": "2" },
    { "source": 1, "target": 3, "value": "2" },
    { "source": 1, "target": 4, "value": "2" },
    { "source": 1, "target": 5, "value": "3" },
    { "source": 1, "target": 6, "value": "5" },
    { "source": 1, "target": 7, "value": "1" },
    { "source": 2, "target": 0, "value": "1" },
    { "source": 2, "target": 6, "value": "5" },
    { "source": 3, "target": 0, "value": "1" },
    { "source": 3, "target": 4, "value": "2" },
    { "source": 3, "target": 1, "value": "2" },
    { "source": 3, "target": 1, "value": "4" },
    { "source": 3, "target": 6, "value": "5" },
    { "source": 3, "target": 2, "value": "3" },
    { "source": 4, "target": 3, "value": "2" },
    { "source": 4, "target": 1, "value": "2" },
    { "source": 4, "target": 6, "value": "5" },
    { "source": 4, "target": 7, "value": "5" },
    { "source": 4, "target": 5, "value": "3" },
    { "source": 4, "target": 0, "value": "2" },
    { "source": 4, "target": 0, "value": "3" },
    { "source": 5, "target": 0, "value": "4" },
    { "source": 5, "target": 3, "value": "6" },
    { "source": 5, "target": 4, "value": "3" },
    { "source": 6, "target": 0, "value": "6" },
    { "source": 6, "target": 1, "value": "6" },
    { "source": 6, "target": 3, "value": "6" },
    { "source": 6, "target": 4, "value": "6" },
    { "source": 6, "target": 2, "value": "6" },
    { "source": 6, "target": 5, "value": "6" },
    { "source": 7, "target": 1, "value": "1" },
    { "source": 7, "target": 0, "value": "3" },
    { "source": 8, "target": 3, "value": "2" },
  ]
};

var ep_8 = {
  "nodes": [
    {  "id": "Meredith", "group": "Interne" },
    {  "id": "Cristina", "group": "Interne" },
    {  "id": "Derek", "group": "Titulaire" },
    {  "id": "George", "group": "Interne" },
    {  "id": "Izi", "group": "Interne" },
    {  "id": "Alex", "group": "Interne" },
    {  "id": "Bailey", "group": "Resident" },
    {  "id": "Bur", "group": "Titulaire" },
    {  "id": "Webber", "group": "Chef" },
  ],
  "edges": [
    { "source": 0, "target": 2, "value": "1" },
    { "source": 0, "target": 1, "value": "2" },
    { "source": 0, "target": 3, "value": "2" },
    { "source": 0, "target": 4, "value": "2" },
    { "source": 0, "target": 5, "value": "3" },
    { "source": 0, "target": 6, "value": "5" },
    { "source": 0, "target": 7, "value": "5" },
    { "source": 1, "target": 0, "value": "2" },
    { "source": 1, "target": 3, "value": "2" },
    { "source": 1, "target": 4, "value": "2" },
    { "source": 1, "target": 5, "value": "3" },
    { "source": 1, "target": 6, "value": "5" },
    { "source": 1, "target": 7, "value": "1" },
    { "source": 2, "target": 0, "value": "1" },
    { "source": 2, "target": 6, "value": "5" },
    { "source": 3, "target": 0, "value": "1" },
    { "source": 3, "target": 4, "value": "2" },
    { "source": 3, "target": 1, "value": "2" },
    { "source": 3, "target": 1, "value": "2" },
    { "source": 3, "target": 6, "value": "5" },
    { "source": 4, "target": 3, "value": "2" },
    { "source": 4, "target": 1, "value": "2" },
    { "source": 4, "target": 6, "value": "5" },
    { "source": 4, "target": 7, "value": "5" },
    { "source": 4, "target": 5, "value": "3" },
    { "source": 4, "target": 0, "value": "2" },
    { "source": 5, "target": 0, "value": "4" },
    { "source": 5, "target": 3, "value": "6" },
    { "source": 5, "target": 4, "value": "3" },
    { "source": 6, "target": 0, "value": "6" },
    { "source": 6, "target": 1, "value": "6" },
    { "source": 6, "target": 3, "value": "6" },
    { "source": 6, "target": 4, "value": "6" },
    { "source": 6, "target": 2, "value": "6" },
    { "source": 6, "target": 5, "value": "6" },
    { "source": 7, "target": 1, "value": "1" },
    { "source": 7, "target": 0, "value": "3" },
    { "source": 8, "target": 3, "value": "2" },
  ]
};

var ep_9 = {
  "nodes": [
    {  "id": "Meredith", "group": "Interne" },
    {  "id": "Cristina", "group": "Interne" },
    {  "id": "Derek", "group": "Titulaire" },
    {  "id": "George", "group": "Interne" },
    {  "id": "Izi", "group": "Interne" },
    {  "id": "Alex", "group": "Interne" },
    {  "id": "Bailey", "group": "Resident" },
    {  "id": "Bur", "group": "Titulaire" },
    {  "id": "Webber", "group": "Chef" },
  ],
  "edges": [
    { "source": 0, "target": 2, "value": "1" },
    { "source": 0, "target": 1, "value": "2" },
    { "source": 0, "target": 3, "value": "2" },
    { "source": 0, "target": 4, "value": "2" },
    { "source": 0, "target": 5, "value": "3" },
    { "source": 0, "target": 6, "value": "5" },
    { "source": 0, "target": 2, "value": "3" },
    { "source": 1, "target": 0, "value": "2" },
    { "source": 1, "target": 3, "value": "2" },
    { "source": 1, "target": 4, "value": "2" },
    { "source": 1, "target": 5, "value": "3" },
    { "source": 1, "target": 6, "value": "5" },
    { "source": 1, "target": 7, "value": "1" },
    { "source": 2, "target": 0, "value": "1" },
    { "source": 2, "target": 6, "value": "5" },
    { "source": 2, "target": 8, "value": "3" },
    { "source": 3, "target": 0, "value": "1" },
    { "source": 3, "target": 4, "value": "2" },
    { "source": 3, "target": 1, "value": "2" },
    { "source": 3, "target": 1, "value": "4" },
    { "source": 3, "target": 6, "value": "5" },
    { "source": 3, "target": 5, "value": "3" },
    { "source": 4, "target": 3, "value": "2" },
    { "source": 4, "target": 1, "value": "2" },
    { "source": 4, "target": 6, "value": "5" },
    { "source": 4, "target": 7, "value": "5" },
    { "source": 4, "target": 5, "value": "3" },
    { "source": 4, "target": 0, "value": "2" },
    { "source": 5, "target": 0, "value": "4" },
    { "source": 5, "target": 3, "value": "6" },
    { "source": 5, "target": 4, "value": "3" },
    { "source": 6, "target": 0, "value": "6" },
    { "source": 6, "target": 1, "value": "6" },
    { "source": 6, "target": 3, "value": "6" },
    { "source": 6, "target": 4, "value": "6" },
    { "source": 6, "target": 2, "value": "6" },
    { "source": 6, "target": 5, "value": "6" },
    { "source": 6, "target": 1, "value": "3" },
    { "source": 6, "target": 4, "value": "3" },
    { "source": 7, "target": 1, "value": "1" },
    { "source": 7, "target": 0, "value": "3" },
    { "source": 8, "target": 3, "value": "2" },
    { "source": 8, "target": 2, "value": "2" },
  ]
};

//Définition des dimensions de notre canvevas
var w = 1300, h = 500

//Caractéristique de notre layout
var simulation = d3.forceSimulation()
    .force("ct", d3.forceCenter(h/2, w/2))
    .force("link", d3.forceLink().id(function(d) {return d.index; }).distance(50).strength(2))
    .force("charge", d3.forceManyBody().strength(-240))
    // centrage au milieu du canevas
    .force("x", d3.forceX(w/2))
    .force("y", d3.forceY(h/2))
    .on("tick", tick);

//Création de notre canvas
var svg = d3.select("body").append("svg")
.attr("width", w)
.attr("heigt", h);

//Création des flèches orientéss pour nos liens
svg.append("svg:defs").selectAll("marker")
.data (["end"])
.enter().append("svg:marker")
.attr("id", String)
.attr("viewBox", "0 -5 10 10")
.attr("refX", 15)
.attr("refY", -1.5)
.attr("markerWidth", 6)
.attr("markerHeight", 6)
.attr("orient", "auto")
.append("svg:path")
.attr("d", "M0,-5L10,0L0,5");

//Création des classes pour les neouds et liens de nos réseaux
svg.append("g").attr("class", "links");
svg.append("g").attr("class", "nodes");

/*La fonction "start" était sensée afficher 
le premier réseau par défaut sur notre caneva*/
function start (ep){

//Définition de l'apparence des liens
var path = svg.append("svg:g").selectAll("part")
.data(ep_1.edges);
//Ici, on associe à chaque valeur des liens une couleur
path.enter().append("svg:path")
.attr("class", "link")
.style("stroke", function(d){
  if(d.value === "1") {return 'pink'}
  else if (d.value === "2"){return 'yellow'}
  else if (d.value === "3"){return 'red'}
  else if (d.value === "4"){return 'purple'}
  else if (d.value === "5"){return 'blue'}
  else if (d.value === "6"){return 'green'}})
.attr("marker-end", "url(#end)");
path.exit().remove();

//Défintion des noeuds
var node = svg.selectAll(".nodes").data(ep_1.nodes)

var enterSelection = node.enter().append("g")
.attr("class","node");
//Ici, on assosie une couleur à un noeud selon le groupe qu'il appartient
var circles = enterSelection.append("circle")
.attr("r", 5)
.style("fill", function(d){
    if(d.group === "Interne"){return '#A4BED3'}
        else if (d.group === "Résident"){return '#497292'}
            else if (d.group === "Titulaire"){return ' #173E5C'}
                else if (d.group === "Chef"){return '#000000'}});;

//On affiche les id (noms) de chaque neoud
var labels = enterSelection.append("text")
.attr("x", 145)
.attr("dy", ".35em")
.text(function(d) {return d.id; });

node.exit().remove();

/*Normalement, ces trois lignes devrait afficher le layout de 
notre réseau par défaut*/
  simulation.nodes(ep_1.nodes);
  simulation.force("link").links(ep_1.edges);
  simulation.alphaTarget(0.1).restart();
}

/*Cette function devrait nous permettre d'avoir l'état du layout lorsqu'il a
subi du changement*/
function tick() {
  var node = svg.select(".nodes").selectAll(".node");
  var path = svg.append("svg:path").selectAll("part");

    //Cette commande nous permet d'avoir les liens courbés
    path.attr("d", function(d) {
        var dx = d.target.x - d.source.x,
            dy = d.target.y - d.source.y,
            dr = Math.sqrt(dx * dx + dy * dy);
        return "M" + 
            d.source.x + "," + 
            d.source.y + "A" + 
            dr + "," + dr + " 0 0,1 " + 
            d.target.x + "," + 
            d.target.y;
    });

    node.attr("transform", function(d) { 
        return "translate(" + d.x + "," + d.y + ")";
      })
      .call(d3.drag()
        .on ("start", dragstarted)
        .on ("drag", dragged)
        .on ("end", dragended));
}
    /*Ces 3 fonctions nous permet d'avoir une transition animée pour
     la sélection d'un réseau*/
    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.1).restart();
        d.fx = d.x;
        d.fy = d.y;
    }
    
    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }
    
    function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

start(ep_1);

//On associe chacun des graphes à un boutons pour les sélectionner
document.getElementById('bouton1').addEventListener('click', function(){
  start(ep_1);
});

document.getElementById('bouton2').addEventListener('click', function(){
  start(ep_2);
});

document.getElementById('bouton3').addEventListener('click', function(){
  start(ep_3);
});

document.getElementById('bouton4').addEventListener('click', function(){
  start(ep_4);
});

document.getElementById('bouton5').addEventListener('click', function(){
  start(ep_5);
});

document.getElementById('bouton6').addEventListener('click', function(){
  start(ep_6);
});

document.getElementById('bouton7').addEventListener('click', function(){
  start(ep_7);
});

document.getElementById('bouton8').addEventListener('click', function(){
  start(ep_8);
});

document.getElementById('bouton9').addEventListener('click', function(){
  start(ep_9);
});
