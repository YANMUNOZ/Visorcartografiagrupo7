var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_4107Desactualizada_1 = new ol.format.GeoJSON();
var features_4107Desactualizada_1 = format_4107Desactualizada_1.readFeatures(json_4107Desactualizada_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4107Desactualizada_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4107Desactualizada_1.addFeatures(features_4107Desactualizada_1);
var lyr_4107Desactualizada_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4107Desactualizada_1, 
                style: style_4107Desactualizada_1,
                interactive: true,
                title: '<img src="styles/legend/4107Desactualizada_1.png" /> 4107Desactualizada'
            });
var format_4107_2 = new ol.format.GeoJSON();
var features_4107_2 = format_4107_2.readFeatures(json_4107_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4107_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4107_2.addFeatures(features_4107_2);
var lyr_4107_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4107_2, 
                style: style_4107_2,
                interactive: true,
                title: '<img src="styles/legend/4107_2.png" /> 4107'
            });
var format_2311Desactualizada_3 = new ol.format.GeoJSON();
var features_2311Desactualizada_3 = format_2311Desactualizada_3.readFeatures(json_2311Desactualizada_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2311Desactualizada_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2311Desactualizada_3.addFeatures(features_2311Desactualizada_3);
var lyr_2311Desactualizada_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2311Desactualizada_3, 
                style: style_2311Desactualizada_3,
                interactive: true,
                title: '<img src="styles/legend/2311Desactualizada_3.png" /> 2311Desactualizada'
            });
var format_2320_4 = new ol.format.GeoJSON();
var features_2320_4 = format_2320_4.readFeatures(json_2320_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2320_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2320_4.addFeatures(features_2320_4);
var lyr_2320_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2320_4, 
                style: style_2320_4,
                interactive: true,
                title: '<img src="styles/legend/2320_4.png" /> 2320'
            });
var format_2320Desactualizada_5 = new ol.format.GeoJSON();
var features_2320Desactualizada_5 = format_2320Desactualizada_5.readFeatures(json_2320Desactualizada_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2320Desactualizada_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2320Desactualizada_5.addFeatures(features_2320Desactualizada_5);
var lyr_2320Desactualizada_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2320Desactualizada_5, 
                style: style_2320Desactualizada_5,
                interactive: true,
                title: '<img src="styles/legend/2320Desactualizada_5.png" /> 2320Desactualizada'
            });
var format_2325Desactualizada_6 = new ol.format.GeoJSON();
var features_2325Desactualizada_6 = format_2325Desactualizada_6.readFeatures(json_2325Desactualizada_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2325Desactualizada_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2325Desactualizada_6.addFeatures(features_2325Desactualizada_6);
var lyr_2325Desactualizada_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2325Desactualizada_6, 
                style: style_2325Desactualizada_6,
                interactive: true,
                title: '<img src="styles/legend/2325Desactualizada_6.png" /> 2325Desactualizada'
            });
var format_2325_7 = new ol.format.GeoJSON();
var features_2325_7 = format_2325_7.readFeatures(json_2325_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2325_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2325_7.addFeatures(features_2325_7);
var lyr_2325_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2325_7, 
                style: style_2325_7,
                interactive: true,
    title: '2325<br />\
    <img src="styles/legend/2325_7_0.png" /> <br />\
    <img src="styles/legend/2325_7_1.png" /> 3680<br />\
    <img src="styles/legend/2325_7_2.png" /> 4101<br />\
    <img src="styles/legend/2325_7_3.png" /> 2320<br />'
        });
var format_2325Desactualizada_8 = new ol.format.GeoJSON();
var features_2325Desactualizada_8 = format_2325Desactualizada_8.readFeatures(json_2325Desactualizada_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2325Desactualizada_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2325Desactualizada_8.addFeatures(features_2325Desactualizada_8);
var lyr_2325Desactualizada_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2325Desactualizada_8, 
                style: style_2325Desactualizada_8,
                interactive: true,
                title: '<img src="styles/legend/2325Desactualizada_8.png" /> 2325Desactualizada'
            });
var format_3101_9 = new ol.format.GeoJSON();
var features_3101_9 = format_3101_9.readFeatures(json_3101_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3101_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3101_9.addFeatures(features_3101_9);
var lyr_3101_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3101_9, 
                style: style_3101_9,
                interactive: true,
    title: '3101<br />\
    <img src="styles/legend/3101_9_0.png" /> 4<br />\
    <img src="styles/legend/3101_9_1.png" /> 5<br />\
    <img src="styles/legend/3101_9_2.png" /> 6<br />\
    <img src="styles/legend/3101_9_3.png" /> 7<br />\
    <img src="styles/legend/3101_9_4.png" /> <br />'
        });
var format_3101Desactualizada_10 = new ol.format.GeoJSON();
var features_3101Desactualizada_10 = format_3101Desactualizada_10.readFeatures(json_3101Desactualizada_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3101Desactualizada_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3101Desactualizada_10.addFeatures(features_3101Desactualizada_10);
var lyr_3101Desactualizada_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3101Desactualizada_10, 
                style: style_3101Desactualizada_10,
                interactive: true,
                title: '<img src="styles/legend/3101Desactualizada_10.png" /> 3101Desactualizada'
            });
var format_3411P_11 = new ol.format.GeoJSON();
var features_3411P_11 = format_3411P_11.readFeatures(json_3411P_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3411P_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3411P_11.addFeatures(features_3411P_11);
var lyr_3411P_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3411P_11, 
                style: style_3411P_11,
                interactive: true,
                title: '<img src="styles/legend/3411P_11.png" /> 3411P'
            });
var format_3411PDesactualizada_12 = new ol.format.GeoJSON();
var features_3411PDesactualizada_12 = format_3411PDesactualizada_12.readFeatures(json_3411PDesactualizada_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3411PDesactualizada_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3411PDesactualizada_12.addFeatures(features_3411PDesactualizada_12);
var lyr_3411PDesactualizada_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3411PDesactualizada_12, 
                style: style_3411PDesactualizada_12,
                interactive: true,
                title: '<img src="styles/legend/3411PDesactualizada_12.png" /> 3411PDesactualizada'
            });
var format_5124_13 = new ol.format.GeoJSON();
var features_5124_13 = format_5124_13.readFeatures(json_5124_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5124_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5124_13.addFeatures(features_5124_13);
var lyr_5124_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5124_13, 
                style: style_5124_13,
                interactive: true,
    title: '5124<br />\
    <img src="styles/legend/5124_13_0.png" /> 5101<br />\
    <img src="styles/legend/5124_13_1.png" /> 5102<br />\
    <img src="styles/legend/5124_13_2.png" /> <br />'
        });
var format_5124Desactualizada_14 = new ol.format.GeoJSON();
var features_5124Desactualizada_14 = format_5124Desactualizada_14.readFeatures(json_5124Desactualizada_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5124Desactualizada_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5124Desactualizada_14.addFeatures(features_5124Desactualizada_14);
var lyr_5124Desactualizada_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5124Desactualizada_14, 
                style: style_5124Desactualizada_14,
                interactive: true,
                title: '<img src="styles/legend/5124Desactualizada_14.png" /> 5124Desactualizada'
            });
var format_6101_15 = new ol.format.GeoJSON();
var features_6101_15 = format_6101_15.readFeatures(json_6101_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6101_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6101_15.addFeatures(features_6101_15);
var lyr_6101_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_6101_15, 
                style: style_6101_15,
                interactive: true,
    title: '6101<br />\
    <img src="styles/legend/6101_15_0.png" /> 1000<br />\
    <img src="styles/legend/6101_15_1.png" /> 1001<br />\
    <img src="styles/legend/6101_15_2.png" /> <br />'
        });
var format_6101Desactualizada_16 = new ol.format.GeoJSON();
var features_6101Desactualizada_16 = format_6101Desactualizada_16.readFeatures(json_6101Desactualizada_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6101Desactualizada_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6101Desactualizada_16.addFeatures(features_6101Desactualizada_16);
var lyr_6101Desactualizada_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_6101Desactualizada_16, 
                style: style_6101Desactualizada_16,
                interactive: true,
                title: '<img src="styles/legend/6101Desactualizada_16.png" /> 6101Desactualizada'
            });
var format_7101_17 = new ol.format.GeoJSON();
var features_7101_17 = format_7101_17.readFeatures(json_7101_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7101_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7101_17.addFeatures(features_7101_17);
var lyr_7101_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_7101_17, 
                style: style_7101_17,
                interactive: true,
                title: '<img src="styles/legend/7101_17.png" /> 7101'
            });
var format_7101Desactualizada_18 = new ol.format.GeoJSON();
var features_7101Desactualizada_18 = format_7101Desactualizada_18.readFeatures(json_7101Desactualizada_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7101Desactualizada_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7101Desactualizada_18.addFeatures(features_7101Desactualizada_18);
var lyr_7101Desactualizada_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_7101Desactualizada_18, 
                style: style_7101Desactualizada_18,
                interactive: true,
                title: '<img src="styles/legend/7101Desactualizada_18.png" /> 7101Desactualizada'
            });
var format_8100_19 = new ol.format.GeoJSON();
var features_8100_19 = format_8100_19.readFeatures(json_8100_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8100_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8100_19.addFeatures(features_8100_19);
var lyr_8100_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8100_19, 
                style: style_8100_19,
                interactive: true,
                title: '<img src="styles/legend/8100_19.png" /> 8100'
            });
var format_8100Desactualizada_20 = new ol.format.GeoJSON();
var features_8100Desactualizada_20 = format_8100Desactualizada_20.readFeatures(json_8100Desactualizada_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8100Desactualizada_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8100Desactualizada_20.addFeatures(features_8100Desactualizada_20);
var lyr_8100Desactualizada_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8100Desactualizada_20, 
                style: style_8100Desactualizada_20,
                interactive: true,
                title: '<img src="styles/legend/8100Desactualizada_20.png" /> 8100Desactualizada'
            });
var format_Planchas_21 = new ol.format.GeoJSON();
var features_Planchas_21 = format_Planchas_21.readFeatures(json_Planchas_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planchas_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planchas_21.addFeatures(features_Planchas_21);
var lyr_Planchas_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Planchas_21, 
                style: style_Planchas_21,
                interactive: true,
                title: '<img src="styles/legend/Planchas_21.png" /> Planchas'
            });
var format_Zona7_22 = new ol.format.GeoJSON();
var features_Zona7_22 = format_Zona7_22.readFeatures(json_Zona7_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona7_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona7_22.addFeatures(features_Zona7_22);
var lyr_Zona7_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zona7_22, 
                style: style_Zona7_22,
                interactive: true,
                title: '<img src="styles/legend/Zona7_22.png" /> Zona 7'
            });

lyr_OSMStandard_0.setVisible(true);lyr_4107Desactualizada_1.setVisible(true);lyr_4107_2.setVisible(true);lyr_2311Desactualizada_3.setVisible(true);lyr_2320_4.setVisible(true);lyr_2320Desactualizada_5.setVisible(true);lyr_2325Desactualizada_6.setVisible(true);lyr_2325_7.setVisible(true);lyr_2325Desactualizada_8.setVisible(true);lyr_3101_9.setVisible(true);lyr_3101Desactualizada_10.setVisible(true);lyr_3411P_11.setVisible(true);lyr_3411PDesactualizada_12.setVisible(true);lyr_5124_13.setVisible(true);lyr_5124Desactualizada_14.setVisible(true);lyr_6101_15.setVisible(true);lyr_6101Desactualizada_16.setVisible(true);lyr_7101_17.setVisible(true);lyr_7101Desactualizada_18.setVisible(true);lyr_8100_19.setVisible(true);lyr_8100Desactualizada_20.setVisible(true);lyr_Planchas_21.setVisible(true);lyr_Zona7_22.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_4107Desactualizada_1,lyr_4107_2,lyr_2311Desactualizada_3,lyr_2320_4,lyr_2320Desactualizada_5,lyr_2325Desactualizada_6,lyr_2325_7,lyr_2325Desactualizada_8,lyr_3101_9,lyr_3101Desactualizada_10,lyr_3411P_11,lyr_3411PDesactualizada_12,lyr_5124_13,lyr_5124Desactualizada_14,lyr_6101_15,lyr_6101Desactualizada_16,lyr_7101_17,lyr_7101Desactualizada_18,lyr_8100_19,lyr_8100Desactualizada_20,lyr_Planchas_21,lyr_Zona7_22];
lyr_4107Desactualizada_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_4107_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_2311Desactualizada_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TIPO_MATERIAL': 'TIPO_MATERIAL', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_2320_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TIPO_CONSTRUCCION': 'TIPO_CONSTRUCCION', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_2320Desactualizada_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TIPO_CONSTRUCCION': 'TIPO_CONSTRUCCION', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_2325Desactualizada_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODIGO_USO_EDIFICACION': 'CODIGO_USO_EDIFICACION', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'ROTACION': 'ROTACION', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_2325_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODIGO_USO_EDIFICACION': 'CODIGO_USO_EDIFICACION', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'ROTACION': 'ROTACION', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_2325Desactualizada_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODIGO_USO_EDIFICACION': 'CODIGO_USO_EDIFICACION', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'ROTACION': 'ROTACION', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_3101_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TIPO_VIA': 'TIPO_VIA', 'ESTADO_SUPERFICIE': 'ESTADO_SUPERFICIE', 'NUMERO_CARRILES': 'NUMERO_CARRILES', 'ACCESIBILIDAD': 'ACCESIBILIDAD', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'RuleID': 'RuleID', 'Override': 'Override', 'TempId': 'TempId', });
lyr_3101Desactualizada_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TIPO_VIA': 'TIPO_VIA', 'ESTADO_SUPERFICIE': 'ESTADO_SUPERFICIE', 'NUMERO_CARRILES': 'NUMERO_CARRILES', 'ACCESIBILIDAD': 'ACCESIBILIDAD', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'RuleID': 'RuleID', 'Override': 'Override', 'TempId': 'TempId', });
lyr_3411P_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FUNCION_PUENTE': 'FUNCION_PUENTE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'ROTACION': 'ROTACION', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_3411PDesactualizada_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FUNCION_PUENTE': 'FUNCION_PUENTE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'ROTACION': 'ROTACION', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_5124_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ESTADO_DRENAJE': 'ESTADO_DRENAJE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'DISPERSION': 'DISPERSION', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_5124Desactualizada_14.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ESTADO_DRENAJE': 'ESTADO_DRENAJE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'DISPERSION': 'DISPERSION', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_6101_15.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'TALT': 'TALT', 'Tipo de curva': 'Tipo de curva', });
lyr_6101Desactualizada_16.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'TALT': 'TALT', 'Tipo de curva': 'Tipo de curva', });
lyr_7101_17.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODIGO_NOMBRE': 'CODIGO_NOMBRE', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_7101Desactualizada_18.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODIGO_NOMBRE': 'CODIGO_NOMBRE', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_8100_19.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODIGO_NOMBRE': 'CODIGO_NOMBRE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_8100Desactualizada_20.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODIGO_NOMBRE': 'CODIGO_NOMBRE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_Planchas_21.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ESCALA': 'ESCALA', 'PLANCHA': 'PLANCHA', 'RESPONSABLE': 'RESPONSABLE', 'Override': 'Override', 'RuleID': 'RuleID', 'ESTADO': 'ESTADO', 'fid_2': 'fid_2', 'OBJECTID_2': 'OBJECTID_2', 'ESCALA_2': 'ESCALA_2', 'PLANCHA_2': 'PLANCHA_2', 'RESPONSABLE_2': 'RESPONSABLE_2', 'Override_2': 'Override_2', 'RuleID_2': 'RuleID_2', 'ESTADO_2': 'ESTADO_2', });
lyr_Zona7_22.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_4107Desactualizada_1.set('fieldImages', {'fid': '', 'OBJECTID': '', 'PROYECTO': '', 'SYMBOL': '', 'FECHA': '', 'CAMBIO': '', 'RESPONSABLE': '', 'VIGENCIA': '', 'FECHA_MODIFICACION': '', 'Override': '', 'RuleID': '', });
lyr_4107_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_2311Desactualizada_3.set('fieldImages', {'fid': '', 'OBJECTID': '', 'TIPO_MATERIAL': '', 'SYMBOL': '', 'PROYECTO': '', 'FECHA': '', 'PK_CUE': '', 'CAMBIO': '', 'RESPONSABLE': '', 'VIGENCIA': '', 'FECHA_MODIFICACION': '', 'Override': '', 'RuleID': '', });
lyr_2320_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'TIPO_CONSTRUCCION': 'Range', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_2320Desactualizada_5.set('fieldImages', {'fid': '', 'OBJECTID': '', 'TIPO_CONSTRUCCION': '', 'PROYECTO': '', 'SYMBOL': '', 'FECHA': '', 'CAMBIO': '', 'RESPONSABLE': '', 'VIGENCIA': '', 'FECHA_MODIFICACION': '', 'Override': '', 'RuleID': '', });
lyr_2325Desactualizada_6.set('fieldImages', {'fid': '', 'OBJECTID': '', 'CODIGO_USO_EDIFICACION': '', 'PROYECTO': '', 'SYMBOL': '', 'FECHA': '', 'NOMBRE_GEOGRAFICO': '', 'PK_CUE': '', 'ROTACION': '', 'CAMBIO': '', 'RESPONSABLE': '', 'VIGENCIA': '', 'FECHA_MODIFICACION': '', 'Override': '', 'RuleID': '', });
lyr_2325_7.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CODIGO_USO_EDIFICACION': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'ROTACION': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_2325Desactualizada_8.set('fieldImages', {'fid': '', 'OBJECTID': '', 'CODIGO_USO_EDIFICACION': '', 'PROYECTO': '', 'SYMBOL': '', 'FECHA': '', 'NOMBRE_GEOGRAFICO': '', 'PK_CUE': '', 'ROTACION': '', 'CAMBIO': '', 'RESPONSABLE': '', 'VIGENCIA': '', 'FECHA_MODIFICACION': '', 'Override': '', 'RuleID': '', });
lyr_3101_9.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'TIPO_VIA': 'Range', 'ESTADO_SUPERFICIE': 'TextEdit', 'NUMERO_CARRILES': 'TextEdit', 'ACCESIBILIDAD': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'RuleID': 'Range', 'Override': 'Binary', 'TempId': 'Range', });
lyr_3101Desactualizada_10.set('fieldImages', {'fid': '', 'OBJECTID': '', 'TIPO_VIA': '', 'ESTADO_SUPERFICIE': '', 'NUMERO_CARRILES': '', 'ACCESIBILIDAD': '', 'PROYECTO': '', 'SYMBOL': '', 'FECHA': '', 'NOMBRE_GEOGRAFICO': '', 'PK_CUE': '', 'CAMBIO': '', 'RESPONSABLE': '', 'VIGENCIA': '', 'FECHA_MODIFICACION': '', 'RuleID': '', 'Override': '', 'TempId': '', });
lyr_3411P_11.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FUNCION_PUENTE': 'Range', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'ROTACION': 'TextEdit', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_3411PDesactualizada_12.set('fieldImages', {'fid': '', 'OBJECTID': '', 'FUNCION_PUENTE': '', 'PROYECTO': '', 'SYMBOL': '', 'FECHA': '', 'ROTACION': '', 'NOMBRE_GEOGRAFICO': '', 'PK_CUE': '', 'CAMBIO': '', 'RESPONSABLE': '', 'VIGENCIA': '', 'FECHA_MODIFICACION': '', 'Override': '', 'RuleID': '', });
lyr_5124_13.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ESTADO_DRENAJE': 'Range', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'DISPERSION': 'TextEdit', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_5124Desactualizada_14.set('fieldImages', {'fid': '', 'OBJECTID': '', 'ESTADO_DRENAJE': '', 'PROYECTO': '', 'SYMBOL': '', 'FECHA': '', 'DISPERSION': '', 'NOMBRE_GEOGRAFICO': '', 'PK_CUE': '', 'CAMBIO': '', 'RESPONSABLE': '', 'VIGENCIA': '', 'FECHA_MODIFICACION': '', 'Override': '', 'RuleID': '', });
lyr_6101_15.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'TALT': 'TextEdit', 'Tipo de curva': 'TextEdit', });
lyr_6101Desactualizada_16.set('fieldImages', {'fid': '', 'ID': '', 'TALT': '', 'Tipo de curva': '', });
lyr_7101_17.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CODIGO_NOMBRE': 'TextEdit', 'SYMBOL': 'TextEdit', 'PROYECTO': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_7101Desactualizada_18.set('fieldImages', {'fid': '', 'OBJECTID': '', 'CODIGO_NOMBRE': '', 'SYMBOL': '', 'PROYECTO': '', 'FECHA': '', 'NOMBRE_GEOGRAFICO': '', 'PK_CUE': '', 'CAMBIO': '', 'RESPONSABLE': '', 'VIGENCIA': '', 'FECHA_MODIFICACION': '', 'Override': '', 'RuleID': '', });
lyr_8100_19.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CODIGO_NOMBRE': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_8100Desactualizada_20.set('fieldImages', {'fid': '', 'OBJECTID': '', 'CODIGO_NOMBRE': '', 'PROYECTO': '', 'SYMBOL': '', 'FECHA': '', 'NOMBRE_GEOGRAFICO': '', 'PK_CUE': '', 'CAMBIO': '', 'RESPONSABLE': '', 'VIGENCIA': '', 'FECHA_MODIFICACION': '', 'Override': '', 'RuleID': '', });
lyr_Planchas_21.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ESCALA': 'TextEdit', 'PLANCHA': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'Override': 'Binary', 'RuleID': 'Range', 'ESTADO': 'TextEdit', 'fid_2': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'ESCALA_2': 'TextEdit', 'PLANCHA_2': 'TextEdit', 'RESPONSABLE_2': 'TextEdit', 'Override_2': 'Binary', 'RuleID_2': 'Range', 'ESTADO_2': 'TextEdit', });
lyr_Zona7_22.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_4107Desactualizada_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_4107_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_2311Desactualizada_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'TIPO_MATERIAL': 'no label', 'SYMBOL': 'no label', 'PROYECTO': 'no label', 'FECHA': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_2320_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'TIPO_CONSTRUCCION': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_2320Desactualizada_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'TIPO_CONSTRUCCION': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_2325Desactualizada_6.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CODIGO_USO_EDIFICACION': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'ROTACION': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_2325_7.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CODIGO_USO_EDIFICACION': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'ROTACION': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_2325Desactualizada_8.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CODIGO_USO_EDIFICACION': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'ROTACION': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_3101_9.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'TIPO_VIA': 'no label', 'ESTADO_SUPERFICIE': 'no label', 'NUMERO_CARRILES': 'no label', 'ACCESIBILIDAD': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'RuleID': 'no label', 'Override': 'no label', 'TempId': 'no label', });
lyr_3101Desactualizada_10.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'TIPO_VIA': 'no label', 'ESTADO_SUPERFICIE': 'no label', 'NUMERO_CARRILES': 'no label', 'ACCESIBILIDAD': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'RuleID': 'no label', 'Override': 'no label', 'TempId': 'no label', });
lyr_3411P_11.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FUNCION_PUENTE': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'ROTACION': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_3411PDesactualizada_12.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FUNCION_PUENTE': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'ROTACION': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_5124_13.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ESTADO_DRENAJE': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'DISPERSION': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_5124Desactualizada_14.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ESTADO_DRENAJE': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'DISPERSION': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_6101_15.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'TALT': 'no label', 'Tipo de curva': 'no label', });
lyr_6101Desactualizada_16.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'TALT': 'no label', 'Tipo de curva': 'no label', });
lyr_7101_17.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CODIGO_NOMBRE': 'no label', 'SYMBOL': 'no label', 'PROYECTO': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_7101Desactualizada_18.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CODIGO_NOMBRE': 'no label', 'SYMBOL': 'no label', 'PROYECTO': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_8100_19.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CODIGO_NOMBRE': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_8100Desactualizada_20.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CODIGO_NOMBRE': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_Planchas_21.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ESCALA': 'no label', 'PLANCHA': 'no label', 'RESPONSABLE': 'no label', 'Override': 'no label', 'RuleID': 'no label', 'ESTADO': 'no label', 'fid_2': 'no label', 'OBJECTID_2': 'no label', 'ESCALA_2': 'no label', 'PLANCHA_2': 'no label', 'RESPONSABLE_2': 'no label', 'Override_2': 'no label', 'RuleID_2': 'no label', 'ESTADO_2': 'no label', });
lyr_Zona7_22.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Zona7_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});