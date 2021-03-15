

anychart.onDocumentReady(function () {
anychart.data.loadJsonFile('ft.json',
  
  function (data) {

    
    var dataTree = anychart.data.tree(data);
    
    
    var chart = anychart.sunburst(dataTree);
   


   

    
    chart.calculationMode('parent-independent');

   
    chart.sort('asc');

    
    chart.title("Dark Family Tree");
  
    
    chart.container('container');

    
    chart.draw();
  
  });
});