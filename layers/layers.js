var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FAMARENA_1 = new ol.format.GeoJSON();
var features_FAMARENA_1 = format_FAMARENA_1.readFeatures(json_FAMARENA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FAMARENA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAMARENA_1.addFeatures(features_FAMARENA_1);
var lyr_FAMARENA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FAMARENA_1, 
                style: style_FAMARENA_1,
                interactive: false,
                title: '<img src="styles/legend/FAMARENA_1.png" /> FAMARENA'
            });
var format_Arboles_2 = new ol.format.GeoJSON();
var features_Arboles_2 = format_Arboles_2.readFeatures(json_Arboles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arboles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arboles_2.addFeatures(features_Arboles_2);
var lyr_Arboles_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arboles_2, 
                style: style_Arboles_2,
                interactive: true,
                title: '<img src="styles/legend/Arboles_2.png" /> Arboles'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_FAMARENA_1.setVisible(true);lyr_Arboles_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_FAMARENA_1,lyr_Arboles_2];
lyr_FAMARENA_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Arboles_2.set('fieldAliases', {'Especie': 'Especie', 'Altura': 'Altura', 'Diametro': 'Diametro', 'Estado_fit': 'Estado_fit', });
lyr_FAMARENA_1.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Arboles_2.set('fieldImages', {'Especie': 'TextEdit', 'Altura': 'TextEdit', 'Diametro': 'TextEdit', 'Estado_fit': 'TextEdit', });
lyr_FAMARENA_1.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'header label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Arboles_2.set('fieldLabels', {'Especie': 'inline label', 'Altura': 'inline label', 'Diametro': 'inline label', 'Estado_fit': 'inline label', });
lyr_Arboles_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});