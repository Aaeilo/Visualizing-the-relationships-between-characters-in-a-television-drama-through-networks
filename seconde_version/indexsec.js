//Définition des dimension de notre canvna
var w = 700, h = 500

//Importation des données
const ep_1 = {
  "nodes": [
    {  "id": "Meredith", "group": "Interne" },
    {  "id": "Cristina", "group": "Interne" },
    {  "id": "Derek", "group": "Titulaire" },
    {  "id": "George", "group": "Interne" },
    {  "id": "Izi", "group": "Interne" },
    {  "id": "Alex", "group": "Interne" },
    {  "id": "Bailey", "group": "Resident" },
    {  "id": "Burk", "group": "Titulaire" },
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
    { "source": 7, "target": 3, "value": "3" },
  ]
};

//Caractéristique de notre layout
let simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) {return d.index; }))
    .force("collide",d3.forceCollide( function(d){return 60}).iterations(1) )
    .force("charge", d3.forceManyBody())
    // centrage au milieu du canevas
    .force("center", d3.forceCenter(w/2, h/2))
    .force("y", d3.forceY(0))
    .force("x", d3.forceX(0));

//Création de notre canvas
var graph_1 = d3.select("body").append("svg")
                           .attr("width", w)
                           .attr("height", h);

//Création des flèches orientées pour nos liens
graph_1.append("svg:defs").selectAll("marker")
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

//Définition de l'apparence de liens
var path_1 = graph_1.append("svg:g").selectAll("part")
.data(ep_1.edges)
.enter().append("svg:path")
.attr("class", "link")
////Ici, on associe à chaque valeur des liens une couleur
.style("stroke", function(d){
  if(d.value === "1") {return '#D0A8D5'}
  else if (d.value === "2"){return '#CEB712'}
  else if (d.value === "3"){return '#940C0C'}
  else if (d.value === "4"){return '#65437C'}
  else if (d.value === "5"){return '#679DAF'}
  else if (d.value === "6"){return '#67AF6E'}})
.attr("marker-end", "url(#end)")

//Définition des noeud
var node_1 = graph_1.selectAll(".nodes")
.data(ep_1.nodes)
.enter().append("g")
.attr("class","node");

//Ici, on assosie une couleur à un noeud selon le groupe qu'il appartient
node_1.append("circle")
.attr("r", 5)
.style("fill", function(d){
    if(d.group === "Interne"){return '#A4BED3'}
        else if (d.group === "Resident"){return '#4C87C6'}
            else if (d.group === "Titulaire"){return ' #173E5C'}
                else if (d.group === "Chef"){return '#000000'}});

//Ce code nous permet d'afficher les prénoms à proximité des noeuds 
node_1.append("text")
.attr("x", 12)
.attr("dy", ".35em")
.text(function(d) {return d.id; });

/*Cette function devrait nous permettre d'avoir l'état du layout lorsqu'il a
subi du changement*/
function tick() {
    //Cette commande nous permet d'avoir les liens courbés
    path_1.attr("d", function(d) {
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

    node_1
        .attr("transform", function(d) { 
  	    return "translate(" + d.x + "," + d.y + ")"; });
}

//On affiche notre réseau sur le canva.
  simulation.nodes(ep_1.nodes)
  .on("tick", tick)

  simulation.force("link")
  .links(ep_1.edges);

